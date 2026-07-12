<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AWS Cloud Practitioner (CLF-C02) Exam Simulator — README</title>
<style>
  :root{
    --bg: #0d1117;
    --panel: #131a24;
    --panel-border: #22303f;
    --ink: #e6edf3;
    --ink-dim: #93a4b8;
    --aws-orange: #ff9900;
    --aws-blue: #4fc3f7;
    --code-bg: #0a1420;
    --mono: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    --serif: Georgia, 'Noto Serif JP', serif;
  }
  *{box-sizing:border-box;}
  html,body{margin:0;padding:0;background:var(--bg);color:var(--ink);}
  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif;
    line-height:1.65;
    padding: 0 0 80px;
  }
  .topbar{
    position: sticky; top:0; z-index:10;
    display:flex; align-items:center; justify-content:space-between;
    padding: 14px 28px;
    background: rgba(13,17,23,0.92);
    backdrop-filter: blur(6px);
    border-bottom: 1px solid var(--panel-border);
  }
  .brand{
    display:flex; align-items:center; gap:10px;
    font-family: var(--mono);
    font-size: 13px;
    color: var(--ink-dim);
    letter-spacing: 0.03em;
  }
  .brand .dot{color:var(--aws-orange);}
  .toggle{
    display:flex; align-items:center;
    border:1px solid var(--panel-border);
    border-radius: 999px;
    background: var(--panel);
    padding: 3px;
    gap: 2px;
  }
  .toggle button{
    font-family: var(--mono);
    font-size: 13px;
    padding: 7px 16px;
    border-radius: 999px;
    border: none;
    background: transparent;
    color: var(--ink-dim);
    cursor: pointer;
    transition: all 0.18s ease;
  }
  .toggle button.active{
    background: var(--aws-orange);
    color: #1a1200;
    font-weight: 600;
  }
  main{
    max-width: 820px;
    margin: 0 auto;
    padding: 40px 28px 0;
  }
  .lang-block{ display:none; }
  .lang-block.visible{ display:block; }
  h1{
    font-size: 1.9rem;
    line-height:1.3;
    margin: 0 0 6px;
    color: var(--ink);
    border-bottom: 2px solid var(--aws-orange);
    padding-bottom: 14px;
  }
  .subtitle{
    color: var(--ink-dim);
    font-size: 0.98rem;
    margin: 14px 0 34px;
  }
  h2{
    font-size: 1.25rem;
    margin: 40px 0 14px;
    color: var(--aws-blue);
    display:flex; align-items:center; gap: 8px;
  }
  h2::before{
    content:"";
    display:inline-block;
    width: 8px; height:8px;
    background: var(--aws-orange);
    border-radius:1px;
    transform: rotate(45deg);
  }
  h3{
    font-size: 1.02rem;
    margin: 26px 0 10px;
    color: var(--ink);
  }
  p{ margin: 10px 0; color: var(--ink); }
  ul{ padding-left: 22px; }
  li{ margin: 6px 0; }
  strong{ color: var(--aws-orange); font-weight:600; }
  code{
    font-family: var(--mono);
    background: var(--code-bg);
    color: var(--aws-blue);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.88em;
  }
  pre{
    background: var(--code-bg);
    border: 1px solid var(--panel-border);
    border-radius: 8px;
    padding: 16px 18px;
    overflow-x: auto;
    font-family: var(--mono);
    font-size: 0.85rem;
    line-height:1.55;
    color: #c9d6e3;
  }
  pre code{ background:none; padding:0; color:inherit; }
  table{
    width:100%;
    border-collapse: collapse;
    margin: 14px 0 20px;
    font-size: 0.92rem;
  }
  th, td{
    text-align:left;
    padding: 9px 12px;
    border-bottom: 1px solid var(--panel-border);
    vertical-align: top;
  }
  th{
    color: var(--aws-orange);
    font-family: var(--mono);
    font-weight: 600;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  td{ color: var(--ink-dim); }
  td:first-child{ color: var(--ink); font-weight:600; }
  .callout{
    border-left: 3px solid var(--aws-blue);
    background: var(--panel);
    padding: 12px 16px;
    border-radius: 0 6px 6px 0;
    margin: 18px 0;
    color: var(--ink-dim);
    font-size: 0.93rem;
  }
  .hook{
    display:inline;
    color: var(--aws-orange);
  }
  hr{
    border: none;
    border-top: 1px solid var(--panel-border);
    margin: 36px 0;
  }
  footer{
    max-width: 820px;
    margin: 60px auto 0;
    padding: 20px 28px;
    color: var(--ink-dim);
    font-family: var(--mono);
    font-size: 0.78rem;
    border-top: 1px solid var(--panel-border);
  }
</style>
</head>
<body>

<div class="topbar">
  <div class="brand"><span class="dot">●</span> clf-c02-simulator / README</div>
  <div class="toggle">
    <button id="btn-en" class="active" onclick="setLang('en')">EN</button>
    <button id="btn-jp" onclick="setLang('jp')">日本語</button>
  </div>
</div>

<main>

<!-- ==================== ENGLISH ==================== -->
<div id="lang-en" class="lang-block visible">

<h1>AWS Cloud Practitioner (CLF-C02) Exam Simulator</h1>
<p class="subtitle">A self-contained, static mock-exam trainer built from a personal AWS CLF-C02 study bank. No backend, no build step, no dependencies at runtime — open <code>index.html</code> or host the folder on GitHub Pages and it works.</p>

<p><strong>[Live structure]</strong> <code>index.html</code> + <code>styles.css</code> + <code>app.js</code> + <code>questions.js</code></p>

<h2>Features</h2>
<ul>
  <li><strong>73 questions</strong> parsed from raw study notes into a structured bank, covering services, pricing models, security, the Well-Architected Framework, and AWS CAF.</li>
  <li><strong>Three study modes</strong>
    <ul>
      <li><strong>Timed Quiz</strong> — pick a question count (10/20/30/all) and a time limit (10–45 min); auto-submits when time runs out.</li>
      <li><strong>Instant Feedback</strong> — untimed, one question at a time, with the correct answer and explanation revealed immediately after you answer.</li>
      <li><strong>Full Exam Simulation</strong> — 65 questions, 90 minutes, pass/fail at a 70% bar, mirroring the real exam's shape.</li>
    </ul>
  </li>
  <li><strong>Single- and multi-answer questions</strong>, including "choose two" items, scored the way AWS scores them (all correct options must be selected, nothing extra).</li>
  <li><strong>Results screen</strong> with an animated score gauge, pass/fail verdict, and a filterable per-question review (all / missed / correct) showing your answer, the correct answer, and the explanation.</li>
  <li><strong>Study Notes screen</strong> — a quick-reference cheat sheet with memory hooks, reachable from the home screen via the "📘 Study notes & memory hooks" button.</li>
  <li>Questions and choices are shuffled on every run.</li>
</ul>

<h2>Project structure</h2>
<pre><code>index.html      All three screens (home, quiz, results) as one page
styles.css      Design tokens + component styles
app.js          App state, scoring, timer, and rendering logic
questions.js    The question bank as a plain JS array (QUESTION_BANK)</code></pre>

<h2>Editing the question bank</h2>
<p><code>questions.js</code> defines a single global, <code>QUESTION_BANK</code>, an array of objects shaped like:</p>
<pre><code>{
  id: 1,
  question: "…",
  correct: ["…"],        // one entry = single-answer, 2+ = "choose N"
  distractors: ["…", "…", "…"],
  explanation: "…"
}</code></pre>
<p>Add, remove, or edit entries directly — the app picks up any valid entry automatically. There's no build step.</p>

<h2>Deploying to GitHub Pages</h2>
<ul>
  <li>Push this folder to a repository.</li>
  <li>In the repo settings, enable <strong>Pages</strong> and point it at the branch/folder containing <code>index.html</code>.</li>
  <li>Done — it's a static site with zero server requirements.</li>
</ul>

<h2>Notes on the source material</h2>
<p>The original notes contained inconsistent formatting and typos (mixed heading levels, stray line endings, occasional missing punctuation). These were normalized during parsing; a handful of answer choices were also lightly cleaned up where the source data was ambiguous or self-contradictory. This is a personal study aid, not official AWS material — always cross-check against the official exam guide.</p>

<hr>

<h1 style="font-size:1.5rem; border-bottom:none; padding-bottom:0;">AWS Fundamentals — Quick Reference &amp; Memory Aids</h1>
<p class="subtitle" style="margin-top:6px;">This same content is also built into the app itself (the "📘 Study notes & memory hooks" button on the home screen) — reproduced here too for anyone browsing the repo. A cheat-sheet for the concepts the quiz draws on, written from scratch rather than copied from any single source, so it's safe to reuse. Useful as a five-minute refresher before a practice run.</p>

<h3>What AWS actually is</h3>
<p>Amazon Web Services (AWS) is Amazon's cloud platform: on-demand compute, storage, databases, networking, and more, billed for what you use rather than sold as pre-bought hardware. <span class="hook"><strong>Memory hook:</strong> "rent, don't buy"</span> — no data center, no upfront hardware spend, scale up or down as demand changes.</p>

<h3>The core value pitch (why companies use it)</h3>
<table>
  <tr><th>Benefit</th><th>What it means</th><th>Exam angle</th></tr>
  <tr><td>Pay-as-you-go</td><td>No upfront capital cost</td><td>"Trade CAPEX for OPEX"</td></tr>
  <tr><td>Elastic</td><td>Scale resources up/down on demand</td><td>Auto Scaling questions</td></tr>
  <tr><td>Secure</td><td>Built-in security tooling + shared responsibility</td><td>IAM / Shield / GuardDuty questions</td></tr>
  <tr><td>Reliable</td><td>High availability, fault tolerance across facilities</td><td>Multi-AZ, failover questions</td></tr>
  <tr><td>Global</td><td>Infrastructure spans the planet</td><td>"Go global in minutes"</td></tr>
</table>

<h3>Global infrastructure — three terms that get mixed up</h3>
<ul>
  <li><strong>Region</strong> — a geographic area with its own cluster of data centers (e.g., <code>us-east-1</code>). Pick a Region for latency, compliance, or cost reasons.</li>
  <li><strong>Availability Zone (AZ)</strong> — one or more discrete, physically-separated data centers <em>within</em> a Region. Spreading resources across AZs is how you survive a single data-center failure.</li>
  <li><strong>Edge Location</strong> — a smaller site (many more of these than Regions) used to cache content close to users for services like CloudFront. <span class="hook"><strong>Memory hook:</strong> Region = where it lives, AZ = the redundancy inside that home, Edge = how fast it reaches you.</span></li>
</ul>

<h3>Popular services, grouped the way the exam groups them</h3>
<ul>
  <li><strong>Compute:</strong> EC2 (virtual servers), Lambda (serverless functions), ECS/EKS (containers)</li>
  <li><strong>Storage:</strong> S3 (object storage), EBS (block storage attached to an instance), Glacier (cold/archive storage)</li>
  <li><strong>Database:</strong> RDS (managed relational), DynamoDB (NoSQL), Aurora (AWS's own MySQL/PostgreSQL-compatible engine)</li>
  <li><strong>Networking:</strong> VPC (your private network), Route 53 (DNS), CloudFront (CDN)</li>
  <li><strong>Security &amp; Identity:</strong> IAM (who can do what), Cognito (customer-facing auth), KMS (encryption key management)</li>
  <li><strong>Analytics:</strong> Redshift (data warehouse), Athena (SQL directly on S3), QuickSight (dashboards)</li>
  <li><strong>Developer tools:</strong> CodeCommit / CodeBuild / CodeDeploy — source, build, ship</li>
  <li><strong>Management:</strong> CloudWatch (metrics/alarms), CloudTrail (who-did-what audit log), Config (configuration history/compliance)</li>
  <li><strong>AI/ML:</strong> SageMaker (build models), Rekognition (image/video analysis), Lex (conversational bots)</li>
  <li><strong>Migration &amp; transfer:</strong> Migration Hub (track a migration), Snowball (physical bulk transfer), DataSync (ongoing transfer)</li>
</ul>

<div class="callout">
  <strong>Memory hook for the easily-confused pairs:</strong><br>
  <em>S3 vs EBS</em> — S3 holds objects accessed over a network from anywhere; EBS is a virtual disk bolted to one EC2 instance.<br>
  <em>RDS vs DynamoDB</em> — RDS is SQL/relational with a schema; DynamoDB is NoSQL/key-value with a flexible schema.<br>
  <em>CloudWatch vs CloudTrail vs Config</em> — Watch = metrics &amp; alarms, Trail = an audit log of API calls, Config = a timeline of resource configuration changes.
</div>

<h3>The Well-Architected Framework pillars</h3>
<p>Five lenses to sanity-check any architecture: <strong>Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization.</strong> <span class="hook"><strong>Memory hook:</strong> "OSR-PC"</span> — read it as a checklist you run through in order every time a question describes a design trade-off.</p>

<h3>Free Tier, in one line</h3>
<p>New accounts get limited access to many services free for 12 months (plus some always-free service limits) — good for learning and low-traffic testing, not for production capacity planning.</p>

<h3>General use cases the exam likes to test</h3>
<p>Hosting websites, backing up/storing data, building scalable apps, running analytics/reporting, training ML models, and IoT ingestion all show up as scenario setups — the trick is usually matching the scenario's <em>constraint</em> (cost? latency? compliance? durability?) to the service built for that constraint, not just recognizing the service name.</p>

</div>

<!-- ==================== JAPANESE ==================== -->
<div id="lang-jp" class="lang-block">

<h1>AWS Cloud Practitioner (CLF-C02) 模擬試験シミュレーター</h1>
<p class="subtitle">個人のAWS CLF-C02学習ノートをもとに構築した、完結型の静的な模擬試験トレーナーです。バックエンドなし、ビルド工程なし、実行時の依存関係なし — <code>index.html</code>を開くか、GitHub Pagesでフォルダをホストするだけで動作します。</p>

<p><strong>【構成】</strong> <code>index.html</code> + <code>styles.css</code> + <code>app.js</code> + <code>questions.js</code></p>

<h2>機能</h2>
<ul>
  <li>生の学習ノートを構造化した<strong>73問</strong>の問題バンク。サービス、料金モデル、セキュリティ、Well-Architected フレームワーク、AWS CAFをカバー。</li>
  <li><strong>3つの学習モード</strong>
    <ul>
      <li><strong>タイム制クイズ</strong> — 出題数（10/20/30/全問）と制限時間（10〜45分）を選択。時間切れで自動提出。</li>
      <li><strong>即時フィードバック</strong> — 時間制限なし、1問ずつ回答し、回答直後に正解と解説が表示される。</li>
      <li><strong>本番模擬試験</strong> — 65問、90分、合格ラインは70%。実際の試験形式を再現。</li>
    </ul>
  </li>
  <li><strong>単一選択・複数選択の両方に対応</strong>。「2つ選択」形式の問題も含み、AWSの採点方式（正解をすべて選び、余分な選択をしない）で採点。</li>
  <li>アニメーション付きスコアゲージ、合否判定、フィルター可能な問題ごとのレビュー（全問／不正解のみ／正解のみ）を表示する<strong>結果画面</strong>。自分の解答・正解・解説を確認可能。</li>
  <li>暗記のヒントをまとめたクイックリファレンスの<strong>学習ノート画面</strong>。ホーム画面の「📘 Study notes & memory hooks」ボタンからアクセス可能。</li>
  <li>問題と選択肢は毎回シャッフルされる。</li>
</ul>

<h2>プロジェクト構成</h2>
<pre><code>index.html      3画面（ホーム、クイズ、結果）を1ページにまとめたもの
styles.css      デザイントークン＋コンポーネントスタイル
app.js          アプリの状態管理、採点、タイマー、描画ロジック
questions.js    問題バンク本体（プレーンなJS配列 QUESTION_BANK）</code></pre>

<h2>問題バンクの編集方法</h2>
<p><code>questions.js</code>には、グローバル変数<code>QUESTION_BANK</code>が1つ定義されており、以下のような形のオブジェクトの配列になっています：</p>
<pre><code>{
  id: 1,
  question: "…",
  correct: ["…"],        // 要素が1つ = 単一選択、2つ以上 = 「N個選択」
  distractors: ["…", "…", "…"],
  explanation: "…"
}</code></pre>
<p>エントリの追加・削除・編集はそのまま直接行えます — 有効なエントリはアプリが自動的に読み込みます。ビルド工程は不要です。</p>

<h2>GitHub Pagesへのデプロイ</h2>
<ul>
  <li>このフォルダをリポジトリにpushする。</li>
  <li>リポジトリの設定で<strong>Pages</strong>を有効化し、<code>index.html</code>を含むブランチ／フォルダを指定する。</li>
  <li>完了 — サーバー要件ゼロの静的サイトとして動作します。</li>
</ul>

<h2>元データに関する補足</h2>
<p>元の学習ノートには、フォーマットの不統一や誤字（見出しレベルの混在、余分な改行、句読点の欠落など）が含まれていました。これらはパース時に正規化し、元データが曖昧または自己矛盾していた一部の選択肢についても軽く整理しています。本アプリは個人の学習用教材であり、AWSの公式教材ではありません — 必ず公式の試験ガイドと照らし合わせて確認してください。</p>

<hr>

<h1 style="font-size:1.5rem; border-bottom:none; padding-bottom:0;">AWS基礎 — クイックリファレンス＆暗記のコツ</h1>
<p class="subtitle" style="margin-top:6px;">この内容はアプリ本体にも組み込まれています（ホーム画面の「📘 Study notes & memory hooks」ボタンからアクセス可能）。リポジトリを閲覧する人のためにここにも掲載しています。特定の一つの情報源をそのまま転載したものではなく、クイズが扱う概念について一から書き起こしたチートシートなので、自由に再利用しても問題ありません。演習前の5分間の復習に便利です。</p>

<h3>AWSとは何か</h3>
<p>Amazon Web Services（AWS）は、Amazonが提供するクラウドプラットフォームです。オンデマンドのコンピューティング、ストレージ、データベース、ネットワーキングなどを、事前購入したハードウェアとしてではなく、使った分だけ課金される形で提供します。<span class="hook"><strong>暗記のコツ：</strong>「買うのではなく借りる」</span> — データセンター不要、初期のハードウェア投資不要、需要に応じてスケールアップ・ダウンできる。</p>

<h3>AWSの中核的な価値提案（企業が利用する理由）</h3>
<table>
  <tr><th>メリット</th><th>意味</th><th>試験での出題傾向</th></tr>
  <tr><td>従量課金制</td><td>初期の設備投資が不要</td><td>「CAPEXからOPEXへの転換」</td></tr>
  <tr><td>弾力性</td><td>需要に応じてリソースを増減できる</td><td>Auto Scalingに関する問題</td></tr>
  <tr><td>セキュア</td><td>組み込みのセキュリティツール＋責任共有モデル</td><td>IAM／Shield／GuardDutyに関する問題</td></tr>
  <tr><td>信頼性</td><td>複数拠点にまたがる高可用性・耐障害性</td><td>マルチAZ、フェイルオーバーに関する問題</td></tr>
  <tr><td>グローバル</td><td>インフラが世界中に広がっている</td><td>「数分でグローバル展開」</td></tr>
</table>

<h3>グローバルインフラ — 混同しやすい3つの用語</h3>
<ul>
  <li><strong>リージョン（Region）</strong> — 独自のデータセンター群を持つ地理的エリア（例：<code>us-east-1</code>）。レイテンシ、コンプライアンス、コストの観点でリージョンを選ぶ。</li>
  <li><strong>アベイラビリティーゾーン（AZ）</strong> — リージョン<em>内</em>にある、物理的に分離された1つ以上のデータセンター。複数のAZにリソースを分散させることで、単一データセンターの障害を乗り切れる。</li>
  <li><strong>エッジロケーション</strong> — リージョンよりもはるかに数が多い小規模拠点で、CloudFrontのようなサービスでユーザーの近くにコンテンツをキャッシュするために使われる。<span class="hook"><strong>暗記のコツ：</strong>リージョン＝住んでいる場所、AZ＝その中の冗長性、エッジ＝ユーザーへの到達速度。</span></li>
</ul>

<h3>主要サービス（試験のカテゴリ分けに沿って整理）</h3>
<ul>
  <li><strong>コンピューティング：</strong> EC2（仮想サーバー）、Lambda（サーバーレス関数）、ECS/EKS（コンテナ）</li>
  <li><strong>ストレージ：</strong> S3（オブジェクトストレージ）、EBS（インスタンスに接続するブロックストレージ）、Glacier（コールド／アーカイブストレージ）</li>
  <li><strong>データベース：</strong> RDS（マネージドリレーショナル）、DynamoDB（NoSQL）、Aurora（AWS独自のMySQL/PostgreSQL互換エンジン）</li>
  <li><strong>ネットワーキング：</strong> VPC（プライベートネットワーク）、Route 53（DNS）、CloudFront（CDN）</li>
  <li><strong>セキュリティ＆ID管理：</strong> IAM（権限管理）、Cognito（顧客向け認証）、KMS（暗号鍵管理）</li>
  <li><strong>分析：</strong> Redshift（データウェアハウス）、Athena（S3上へのSQLクエリ）、QuickSight（ダッシュボード）</li>
  <li><strong>開発者ツール：</strong> CodeCommit／CodeBuild／CodeDeploy — ソース管理・ビルド・デプロイ</li>
  <li><strong>マネジメント：</strong> CloudWatch（メトリクス／アラーム）、CloudTrail（操作履歴の監査ログ）、Config（構成変更の履歴・コンプライアンス）</li>
  <li><strong>AI/ML：</strong> SageMaker（モデル構築）、Rekognition（画像・動画解析）、Lex（対話ボット）</li>
  <li><strong>移行・転送：</strong> Migration Hub（移行状況の追跡）、Snowball（物理的な大容量データ転送）、DataSync（継続的なデータ転送）</li>
</ul>

<div class="callout">
  <strong>混同しやすいペアの暗記のコツ：</strong><br>
  <em>S3 vs EBS</em> — S3はネットワーク経由でどこからでもアクセスできるオブジェクトを保持し、EBSは1つのEC2インスタンスに固定される仮想ディスク。<br>
  <em>RDS vs DynamoDB</em> — RDSはスキーマを持つSQL／リレーショナル、DynamoDBは柔軟なスキーマを持つNoSQL／キーバリュー。<br>
  <em>CloudWatch vs CloudTrail vs Config</em> — Watch＝メトリクスとアラーム、Trail＝APIコールの監査ログ、Config＝リソース構成変更の時系列記録。
</div>

<h3>Well-Architected フレームワークの5つの柱</h3>
<p>アーキテクチャを点検するための5つの視点：<strong>運用上の優秀性、セキュリティ、信頼性、パフォーマンス効率、コスト最適化。</strong> <span class="hook"><strong>暗記のコツ：</strong>「OSR-PC」</span> — 設計上のトレードオフを説明する問題が出るたびに、順番にチェックしていくリストとして覚える。</p>

<h3>無料利用枠（Free Tier）を一言で</h3>
<p>新規アカウントは、多くのサービスに12か月間限定でアクセスでき（さらに一部は常時無料の利用枠あり）、学習や低トラフィックのテストには向いているが、本番環境のキャパシティ計画には向かない。</p>

<h3>試験でよく出るユースケース</h3>
<p>Webサイトのホスティング、データのバックアップ／保存、スケーラブルなアプリの構築、分析／レポーティングの実行、MLモデルの学習、IoTデータの取り込みなどが、シナリオ問題の設定としてよく登場する。ポイントは、サービス名を覚えることではなく、シナリオの<em>制約条件</em>（コストか？レイテンシか？コンプライアンスか？耐久性か？）を、その制約のために作られたサービスと一致させることにある。</p>

</div>

</main>

<footer>clf-c02-simulator · personal study aid · not official AWS material</footer>

<script>
function setLang(lang){
  document.getElementById('lang-en').classList.toggle('visible', lang === 'en');
  document.getElementById('lang-jp').classList.toggle('visible', lang === 'jp');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-jp').classList.toggle('active', lang === 'jp');
  document.documentElement.lang = lang === 'jp' ? 'ja' : 'en';
}
</script>

</body>
</html>
