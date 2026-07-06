/* ==========================================================================
   AWS Cloud Practitioner — Exam Simulator
   App logic. Depends on QUESTION_BANK from questions.js
   ========================================================================== */
(function () {
  "use strict";

  const TOTAL_BANK = QUESTION_BANK.length;

  /* ---------------------------------------------------------------------
     State
     --------------------------------------------------------------------- */
  const state = {
    mode: null,            // 'timed' | 'feedback' | 'exam'
    questions: [],         // prepared question objects for this run
    index: 0,
    answers: {},            // qIndex -> array of selected choice ids
    locked: {},             // qIndex -> bool (feedback mode: answer submitted)
    timeLimitSec: null,
    remainingSec: null,
    timerHandle: null,
    startedAt: null,
  };

  /* ---------------------------------------------------------------------
     Utilities
     --------------------------------------------------------------------- */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function fmtTime(totalSeconds) {
    const s = Math.max(0, Math.round(totalSeconds));
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  function showScreen(id) {
    $all(".screen").forEach((s) => s.classList.remove("active"));
    $(`#${id}`).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------------------------------------------------------------------
     Home screen setup
     --------------------------------------------------------------------- */
  $("#bankCount").textContent = TOTAL_BANK;

  const configs = {
    timed: { count: 20, minutes: 20 },
    feedback: { count: 15 },
    exam: { count: Math.min(65, TOTAL_BANK), minutes: 90 },
  };

  $all(".mode-card").forEach((card) => {
    card.addEventListener("click", () => selectMode(card.dataset.mode));
    card.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") selectMode(card.dataset.mode);
    });
  });

  function selectMode(mode) {
    state.mode = mode;
    $all(".mode-card").forEach((c) => c.classList.toggle("selected", c.dataset.mode === mode));
    $all(".config").forEach((c) => c.classList.remove("active"));
    $(`#config-${mode}`).classList.add("active");
    const panel = $(`#config-${mode}`);
    if (panel.scrollIntoView) panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // segmented controls (question count / minutes)
  $all(".seg").forEach((seg) => {
    seg.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      $all("button", seg).forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const mode = seg.dataset.mode;
      const field = seg.dataset.field;
      const val = btn.dataset.value;
      configs[mode][field] = val === "all" ? TOTAL_BANK : parseInt(val, 10);
    });
  });

  $("#start-timed").addEventListener("click", () => startQuiz("timed"));
  $("#start-feedback").addEventListener("click", () => startQuiz("feedback"));
  $("#start-exam").addEventListener("click", () => startQuiz("exam"));

  /* ---------------------------------------------------------------------
     Quiz preparation
     --------------------------------------------------------------------- */
  function prepareQuestions(mode) {
    const cfg = configs[mode];
    const count = Math.min(cfg.count, TOTAL_BANK);
    const picked = shuffle(QUESTION_BANK).slice(0, count);

    return picked.map((q) => {
      const choiceObjs = shuffle(
        q.correct.map((text, i) => ({ id: "c" + i, text, correct: true }))
          .concat(q.distractors.map((text, i) => ({ id: "d" + i, text, correct: false })))
      );
      return {
        source: q,
        question: q.question,
        explanation: q.explanation,
        multi: q.correct.length > 1,
        needCount: q.correct.length,
        choices: choiceObjs,
      };
    });
  }

  function startQuiz(mode) {
    state.mode = mode;
    state.questions = prepareQuestions(mode);
    state.index = 0;
    state.answers = {};
    state.locked = {};
    state.startedAt = Date.now();

    const cfg = configs[mode];
    if (mode === "feedback") {
      state.timeLimitSec = null;
    } else {
      state.timeLimitSec = cfg.minutes * 60;
      state.remainingSec = state.timeLimitSec;
    }

    $("#quiz-timer-wrap").classList.toggle("hidden", mode === "feedback");
    $("#quiz-nav-wrap").classList.toggle("hidden", mode === "feedback");
    $("#quizModeLabel").textContent =
      mode === "timed" ? "Timed Quiz" : mode === "exam" ? "Full Exam Simulation" : "Practice — Instant Feedback";

    showScreen("screen-quiz");
    renderQuestion();
    if (state.timeLimitSec) startTimer();
  }

  /* ---------------------------------------------------------------------
     Timer
     --------------------------------------------------------------------- */
  function startTimer() {
    clearInterval(state.timerHandle);
    updateTimerDisplay();
    state.timerHandle = setInterval(() => {
      state.remainingSec -= 1;
      updateTimerDisplay();
      if (state.remainingSec <= 0) {
        clearInterval(state.timerHandle);
        finishQuiz(true);
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const el = $("#timerDisplay");
    el.textContent = fmtTime(state.remainingSec);
    el.classList.toggle("low", state.remainingSec <= 60);
  }

  /* ---------------------------------------------------------------------
     Rendering a question
     --------------------------------------------------------------------- */
  function renderQuestion() {
    const q = state.questions[state.index];
    const total = state.questions.length;

    $("#progressLabel-current").textContent = state.index + 1;
    $("#progressLabel-total").textContent = total;
    $("#progressFill").style.width = `${((state.index) / total) * 100}%`;

    $("#qChip").textContent = q.multi ? `Choose ${q.needCount}` : "Choose 1";
    $("#qText").textContent = q.question;

    const wrap = $("#choicesWrap");
    wrap.innerHTML = "";
    const selected = state.answers[state.index] || [];
    const locked = !!state.locked[state.index];

    q.choices.forEach((choice) => {
      const div = document.createElement("div");
      div.className = "choice " + (q.multi ? "checkbox" : "radio");
      div.dataset.id = choice.id;

      const isSelected = selected.includes(choice.id);
      if (isSelected) div.classList.add("selected");

      if (locked) {
        div.classList.add("locked");
        if (choice.correct) div.classList.add("correct");
        else if (isSelected && !choice.correct) div.classList.add("incorrect");
      }

      div.innerHTML = `<span class="mark">${isSelected ? "✓" : ""}</span><span class="txt">${escapeHtml(choice.text)}</span>`;
      div.tabIndex = locked ? -1 : 0;
      div.setAttribute("role", q.multi ? "checkbox" : "radio");
      div.setAttribute("aria-checked", isSelected ? "true" : "false");

      if (!locked) {
        div.addEventListener("click", () => toggleChoice(choice.id));
        div.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleChoice(choice.id); }
        });
      }
      wrap.appendChild(div);
    });

    // feedback box (instant feedback mode only, after locking)
    const fb = $("#feedbackBox");
    if (state.mode === "feedback" && locked) {
      const isCorrect = isAnswerCorrect(q, selected);
      fb.className = "feedback-box show " + (isCorrect ? "correct" : "incorrect");
      fb.innerHTML = `
        <div class="verdict">${isCorrect ? "✓ Correct" : "✗ Not quite"}</div>
        <div class="expl"><b>Correct answer:</b> ${q.choices.filter(c=>c.correct).map(c=>escapeHtml(c.text)).join(", ")}<br><br>${escapeHtml(q.explanation)}</div>
      `;
    } else {
      fb.className = "feedback-box";
      fb.innerHTML = "";
    }

    // buttons
    const submitBtn = $("#btnSubmitAnswer");
    const nextBtn = $("#btnNext");
    const prevBtn = $("#btnPrev");
    const finishBtn = $("#btnFinish");

    prevBtn.disabled = state.index === 0;
    finishBtn.classList.toggle("hidden", state.index !== total - 1 || state.mode === "feedback");
    nextBtn.classList.toggle("hidden", state.index === total - 1 && state.mode !== "feedback");

    if (state.mode === "feedback") {
      submitBtn.classList.toggle("hidden", locked);
      nextBtn.classList.toggle("hidden", !locked);
      nextBtn.textContent = state.index === total - 1 ? "See results" : "Next question →";
      submitBtn.disabled = q.multi ? selected.length !== q.needCount : selected.length === 0;
    } else {
      submitBtn.classList.add("hidden");
      nextBtn.textContent = "Next →";
    }

    renderNav();
  }

  function escapeHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function toggleChoice(choiceId) {
    const q = state.questions[state.index];
    let selected = state.answers[state.index] || [];

    if (q.multi) {
      if (selected.includes(choiceId)) {
        selected = selected.filter((id) => id !== choiceId);
      } else {
        selected = selected.concat(choiceId);
      }
    } else {
      selected = [choiceId];
    }
    state.answers[state.index] = selected;
    renderQuestion();
  }

  function isAnswerCorrect(q, selectedIds) {
    const correctIds = q.choices.filter((c) => c.correct).map((c) => c.id);
    if (selectedIds.length !== correctIds.length) return false;
    return correctIds.every((id) => selectedIds.includes(id));
  }

  /* ---------------------------------------------------------------------
     Navigation
     --------------------------------------------------------------------- */
  function renderNav() {
    const navWrap = $("#quizNav");
    if (state.mode === "feedback") { navWrap.innerHTML = ""; return; }
    navWrap.innerHTML = "";
    state.questions.forEach((q, i) => {
      const btn = document.createElement("button");
      btn.textContent = i + 1;
      if (state.answers[i] && state.answers[i].length) btn.classList.add("answered");
      if (i === state.index) btn.classList.add("current");
      btn.addEventListener("click", () => { state.index = i; renderQuestion(); });
      navWrap.appendChild(btn);
    });
  }

  $("#btnPrev").addEventListener("click", () => {
    if (state.index > 0) { state.index -= 1; renderQuestion(); }
  });

  $("#btnNext").addEventListener("click", () => {
    if (state.mode === "feedback") {
      if (state.index === state.questions.length - 1) { finishQuiz(false); return; }
    }
    if (state.index < state.questions.length - 1) { state.index += 1; renderQuestion(); }
  });

  $("#btnSubmitAnswer").addEventListener("click", () => {
    state.locked[state.index] = true;
    renderQuestion();
  });

  $("#btnFinish").addEventListener("click", () => finishQuiz(false));

  $("#btnQuit").addEventListener("click", () => {
    if (confirm("End this session and discard progress?")) {
      clearInterval(state.timerHandle);
      showScreen("screen-home");
    }
  });

  /* ---------------------------------------------------------------------
     Finish / scoring
     --------------------------------------------------------------------- */
  function finishQuiz(timedOut) {
    clearInterval(state.timerHandle);
    const total = state.questions.length;
    let correctCount = 0;
    const reviews = state.questions.map((q, i) => {
      const selected = state.answers[i] || [];
      const correct = isAnswerCorrect(q, selected);
      if (correct) correctCount++;
      return { q, selected, correct };
    });

    const pct = total ? Math.round((correctCount / total) * 100) : 0;
    const pass = pct >= 70;

    renderResults({ total, correctCount, pct, pass, reviews, timedOut });
    showScreen("screen-results");
  }

  function renderResults({ total, correctCount, pct, pass, reviews, timedOut }) {
    $("#resultModeLabel").textContent =
      state.mode === "timed" ? "Timed Quiz" : state.mode === "exam" ? "Full Exam Simulation" : "Practice Session";

    $("#scoreBig").textContent = pct + "%";
    $("#passPill").textContent = pass ? "Pass" : "Fail";
    $("#passPill").className = "pass-pill " + (pass ? "pass" : "fail");
    $("#resultSummary").textContent = timedOut
      ? "Time expired — here's how you did."
      : (pass
          ? "Nice work — that's a passing score."
          : "Below the 70% passing bar — review the misses below and try again.");

    $("#metricCorrect").textContent = `${correctCount} / ${total}`;
    $("#metricElapsed").textContent = fmtTime((Date.now() - state.startedAt) / 1000);

    // gauge
    const circumference = 2 * Math.PI * 70;
    const fillEl = $("#gaugeFill");
    fillEl.style.stroke = pass ? "var(--green)" : "var(--red)";
    fillEl.setAttribute("stroke-dasharray", `${circumference} ${circumference}`);
    fillEl.setAttribute("stroke-dashoffset", `${circumference}`);
    requestAnimationFrame(() => {
      const offset = circumference * (1 - pct / 100);
      fillEl.setAttribute("stroke-dashoffset", offset);
    });

    // review list
    const listEl = $("#reviewList");
    listEl.innerHTML = "";
    reviews.forEach((r, i) => {
      const det = document.createElement("details");
      det.className = "review-item " + (r.correct ? "correct" : "incorrect");

      const yourText = r.selected.length
        ? r.q.choices.filter((c) => r.selected.includes(c.id)).map((c) => c.text).join(", ")
        : "No answer given";
      const correctText = r.q.choices.filter((c) => c.correct).map((c) => c.text).join(", ");

      det.innerHTML = `
        <summary>
          <span class="dot">${r.correct ? "✓" : "✗"}</span>
          <span>
            <div class="qn">Question ${i + 1}</div>
            <div class="qt">${escapeHtml(r.q.question)}</div>
          </span>
        </summary>
        <div class="review-body">
          <div class="line your-answer ${r.correct ? "right" : "wrong"}"><b>Your answer:</b> ${escapeHtml(yourText)}</div>
          ${r.correct ? "" : `<div class="line"><b>Correct answer:</b> ${escapeHtml(correctText)}</div>`}
          <div class="expl">${escapeHtml(r.q.explanation)}</div>
        </div>
      `;
      listEl.appendChild(det);
    });

    state._reviews = reviews;
    applyReviewFilter("all");
  }

  $all(".filter-seg button").forEach((btn) => {
    btn.addEventListener("click", () => {
      $all(".filter-seg button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyReviewFilter(btn.dataset.filter);
    });
  });

  function applyReviewFilter(filter) {
    $all(".review-item").forEach((el) => {
      const isCorrect = el.classList.contains("correct");
      const show = filter === "all" || (filter === "correct" && isCorrect) || (filter === "incorrect" && !isCorrect);
      el.classList.toggle("hidden", !show);
    });
  }

  $("#btnRetake").addEventListener("click", () => startQuiz(state.mode));
  $("#btnHome").addEventListener("click", () => showScreen("screen-home"));

  $("#btnOpenNotes").addEventListener("click", () => showScreen("screen-notes"));
  $("#btnNotesHome").addEventListener("click", () => showScreen("screen-home"));

  // initial screen
  showScreen("screen-home");
})();
