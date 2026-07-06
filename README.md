# AWS Cloud Practitioner (CLF-C02) Exam Simulator

A self-contained, static mock-exam trainer built from a personal AWS CLF-C02 study bank. No backend, no build step, no dependencies at runtime — open `index.html` or host the folder on GitHub Pages and it works.

**[Live structure]** `index.html` + `styles.css` + `app.js` + `questions.js`

## Features

- **73 questions** parsed from raw study notes into a structured bank, covering services, pricing models, security, the Well-Architected Framework, and AWS CAF.
- **Three study modes**
  - **Timed Quiz** — pick a question count (10/20/30/all) and a time limit (10–45 min); auto-submits when time runs out.
  - **Instant Feedback** — untimed, one question at a time, with the correct answer and explanation revealed immediately after you answer.
  - **Full Exam Simulation** — 65 questions, 90 minutes, pass/fail at a 70% bar, mirroring the real exam's shape.
- **Single- and multi-answer questions**, including "choose two" items, scored the way AWS scores them (all correct options must be selected, nothing extra).
- **Results screen** with an animated score gauge, pass/fail verdict, and a filterable per-question review (all / missed / correct) showing your answer, the correct answer, and the explanation.
- **Study Notes screen** — a quick-reference cheat sheet with memory hooks, reachable from the home screen via the "📘 Study notes & memory hooks" button.
- Questions and choices are shuffled on every run.

## Project structure

```
index.html      All three screens (home, quiz, results) as one page
styles.css      Design tokens + component styles
app.js          App state, scoring, timer, and rendering logic
questions.js    The question bank as a plain JS array (QUESTION_BANK)
```

## Editing the question bank

`questions.js` defines a single global, `QUESTION_BANK`, an array of objects shaped like:

```js
{
  id: 1,
  question: "…",
  correct: ["…"],        // one entry = single-answer, 2+ = "choose N"
  distractors: ["…", "…", "…"],
  explanation: "…"
}
```

Add, remove, or edit entries directly — the app picks up any valid entry automatically. There's no build step.

## Deploying to GitHub Pages

1. Push this folder to a repository.
2. In the repo settings, enable **Pages** and point it at the branch/folder containing `index.html`.
3. Done — it's a static site with zero server requirements.

## Notes on the source material

The original notes contained inconsistent formatting and typos (mixed heading levels, stray line endings, occasional missing punctuation). These were normalized during parsing; a handful of answer choices were also lightly cleaned up where the source data was ambiguous or self-contradictory. This is a personal study aid, not official AWS material — always cross-check against the official exam guide.

## AWS Fundamentals — Quick Reference & Memory Aids

This same content is also built into the app itself (the "📘 Study notes & memory hooks" button on the home screen) — reproduced here too for anyone browsing the repo. A cheat-sheet for the concepts the quiz draws on, written from scratch rather than copied from any single source, so it's safe to reuse. Useful as a five-minute refresher before a practice run.

### What AWS actually is
Amazon Web Services (AWS) is Amazon's cloud platform: on-demand compute, storage, databases, networking, and more, billed for what you use rather than sold as pre-bought hardware. **Memory hook:** *"rent, don't buy"* — no data center, no upfront hardware spend, scale up or down as demand changes.

### The core value pitch (why companies use it)
| Benefit | What it means | Exam angle |
|---|---|---|
| Pay-as-you-go | No upfront capital cost | "Trade CAPEX for OPEX" |
| Elastic | Scale resources up/down on demand | Auto Scaling questions |
| Secure | Built-in security tooling + shared responsibility | IAM / Shield / GuardDuty questions |
| Reliable | High availability, fault tolerance across facilities | Multi-AZ, failover questions |
| Global | Infrastructure spans the planet | "Go global in minutes" |

### Global infrastructure — three terms that get mixed up
- **Region** — a geographic area with its own cluster of data centers (e.g., `us-east-1`). Pick a Region for latency, compliance, or cost reasons.
- **Availability Zone (AZ)** — one or more discrete, physically-separated data centers *within* a Region. Spreading resources across AZs is how you survive a single data-center failure.
- **Edge Location** — a smaller site (many more of these than Regions) used to cache content close to users for services like CloudFront. **Memory hook:** *Region = where it lives, AZ = the redundancy inside that home, Edge = how fast it reaches you.*

### Popular services, grouped the way the exam groups them
- **Compute:** EC2 (virtual servers), Lambda (serverless functions), ECS/EKS (containers)
- **Storage:** S3 (object storage), EBS (block storage attached to an instance), Glacier (cold/archive storage)
- **Database:** RDS (managed relational), DynamoDB (NoSQL), Aurora (AWS's own MySQL/PostgreSQL-compatible engine)
- **Networking:** VPC (your private network), Route 53 (DNS), CloudFront (CDN)
- **Security & Identity:** IAM (who can do what), Cognito (customer-facing auth), KMS (encryption key management)
- **Analytics:** Redshift (data warehouse), Athena (SQL directly on S3), QuickSight (dashboards)
- **Developer tools:** CodeCommit / CodeBuild / CodeDeploy — source, build, ship
- **Management:** CloudWatch (metrics/alarms), CloudTrail (who-did-what audit log), Config (configuration history/compliance)
- **AI/ML:** SageMaker (build models), Rekognition (image/video analysis), Lex (conversational bots)
- **Migration & transfer:** Migration Hub (track a migration), Snowball (physical bulk transfer), DataSync (ongoing transfer)

**Memory hook for the easily-confused pairs:**
- *S3 vs EBS* — S3 holds objects accessed over a network from anywhere; EBS is a virtual disk bolted to one EC2 instance.
- *RDS vs DynamoDB* — RDS is SQL/relational with a schema; DynamoDB is NoSQL/key-value with a flexible schema.
- *CloudWatch vs CloudTrail vs Config* — Watch = metrics & alarms, Trail = an audit log of API calls, Config = a timeline of resource configuration changes.

### The Well-Architected Framework pillars
Five lenses to sanity-check any architecture: **Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization.** **Memory hook:** *"OSR-PC"* — read it as a checklist you run through in order every time a question describes a design trade-off.

### Free Tier, in one line
New accounts get limited access to many services free for 12 months (plus some always-free service limits) — good for learning and low-traffic testing, not for production capacity planning.

### General use cases the exam likes to test
Hosting websites, backing up/storing data, building scalable apps, running analytics/reporting, training ML models, and IoT ingestion all show up as scenario setups — the trick is usually matching the scenario's *constraint* (cost? latency? compliance? durability?) to the service built for that constraint, not just recognizing the service name.


