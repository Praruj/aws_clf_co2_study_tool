# AWS Cloud Practitioner (CLF-C02) Exam Simulator

<details open>
<summary><b>🇬🇧 English</b> (click to collapse)</summary>

A self-contained, static mock-exam trainer built from a personal AWS CLF-C02 study bank. No backend, no build step, no dependencies at runtime — open `index.html` or host the folder on GitHub Pages and it works.

**[Live structure]** `index.html` + `styles.css` + `app.js` + `questions.js`

## Features

- **276 questions** parsed from raw study notes into a structured bank, covering services, pricing models, security, the Well-Architected Framework, and AWS CAF.
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

</details>

<details>
<summary><b>🇯🇵 日本語</b>（クリックで展開）</summary>

個人のAWS CLF-C02学習ノートをもとに構築した、完結型の静的な模擬試験トレーナーです。バックエンドなし、ビルド工程なし、実行時の依存関係なし — `index.html` を開くか、GitHub Pages でフォルダをホストするだけで動作します。

**【構成】** `index.html` + `styles.css` + `app.js` + `questions.js`

## 機能

- 生の学習ノートを構造化した**276問**の問題バンク。サービス、料金モデル、セキュリティ、Well-Architected フレームワーク、AWS CAF をカバー。
- **3つの学習モード**
  - **タイム制クイズ** — 出題数（10/20/30/全問）と制限時間（10〜45分）を選択。時間切れで自動提出。
  - **即時フィードバック** — 時間制限なし、1問ずつ回答し、回答直後に正解と解説が表示される。
  - **本番模擬試験** — 65問、90分、合格ラインは70%。実際の試験形式を再現。
- **単一選択・複数選択の両方に対応**。「2つ選択」形式の問題も含み、AWSの採点方式（正解をすべて選び、余分な選択をしない）で採点。
- アニメーション付きスコアゲージ、合否判定、フィルター可能な問題ごとのレビュー（全問／不正解のみ／正解のみ）を表示する**結果画面**。自分の解答・正解・解説を確認可能。
- 暗記のヒントをまとめたクイックリファレンスの**学習ノート画面**。ホーム画面の「📘 Study notes & memory hooks」ボタンからアクセス可能。
- 問題と選択肢は毎回シャッフルされる。

## プロジェクト構成

```
index.html      3画面（ホーム、クイズ、結果）を1ページにまとめたもの
styles.css      デザイントークン＋コンポーネントスタイル
app.js          アプリの状態管理、採点、タイマー、描画ロジック
questions.js    問題バンク本体（プレーンなJS配列 QUESTION_BANK）
```

## 問題バンクの編集方法

`questions.js` には、グローバル変数 `QUESTION_BANK` が1つ定義されており、以下のような形のオブジェクトの配列になっています：

```js
{
  id: 1,
  question: "…",
  correct: ["…"],        // 要素が1つ = 単一選択、2つ以上 = 「N個選択」
  distractors: ["…", "…", "…"],
  explanation: "…"
}
```

エントリの追加・削除・編集はそのまま直接行えます — 有効なエントリはアプリが自動的に読み込みます。ビルド工程は不要です。

## GitHub Pages へのデプロイ

1. このフォルダをリポジトリに push する。
2. リポジトリの設定で **Pages** を有効化し、`index.html` を含むブランチ／フォルダを指定する。
3. 完了 — サーバー要件ゼロの静的サイトとして動作します。

## 元データに関する補足

元の学習ノートには、フォーマットの不統一や誤字（見出しレベルの混在、余分な改行、句読点の欠落など）が含まれていました。これらはパース時に正規化し、元データが曖昧または自己矛盾していた一部の選択肢についても軽く整理しています。本アプリは個人の学習用教材であり、AWSの公式教材ではありません — 必ず公式の試験ガイドと照らし合わせて確認してください。

## AWS基礎 — クイックリファレンス＆暗記のコツ

この内容はアプリ本体にも組み込まれています（ホーム画面の「📘 Study notes & memory hooks」ボタンからアクセス可能）。リポジトリを閲覧する人のためにここにも掲載しています。特定の一つの情報源をそのまま転載したものではなく、クイズが扱う概念について一から書き起こしたチートシートなので、自由に再利用しても問題ありません。演習前の5分間の復習に便利です。

### AWSとは何か
Amazon Web Services（AWS）は、Amazonが提供するクラウドプラットフォームです。オンデマンドのコンピューティング、ストレージ、データベース、ネットワーキングなどを、事前購入したハードウェアとしてではなく、使った分だけ課金される形で提供します。**暗記のコツ：**「買うのではなく借りる」 — データセンター不要、初期のハードウェア投資不要、需要に応じてスケールアップ・ダウンできる。

### AWSの中核的な価値提案（企業が利用する理由）
| メリット | 意味 | 試験での出題傾向 |
|---|---|---|
| 従量課金制 | 初期の設備投資が不要 | 「CAPEXからOPEXへの転換」 |
| 弾力性 | 需要に応じてリソースを増減できる | Auto Scalingに関する問題 |
| セキュア | 組み込みのセキュリティツール＋責任共有モデル | IAM／Shield／GuardDutyに関する問題 |
| 信頼性 | 複数拠点にまたがる高可用性・耐障害性 | マルチAZ、フェイルオーバーに関する問題 |
| グローバル | インフラが世界中に広がっている | 「数分でグローバル展開」 |

### グローバルインフラ — 混同しやすい3つの用語
- **リージョン（Region）** — 独自のデータセンター群を持つ地理的エリア（例：`us-east-1`）。レイテンシ、コンプライアンス、コストの観点でリージョンを選ぶ。
- **アベイラビリティーゾーン（AZ）** — リージョン*内*にある、物理的に分離された1つ以上のデータセンター。複数のAZにリソースを分散させることで、単一データセンターの障害を乗り切れる。
- **エッジロケーション** — リージョンよりもはるかに数が多い小規模拠点で、CloudFrontのようなサービスでユーザーの近くにコンテンツをキャッシュするために使われる。**暗記のコツ：**リージョン＝住んでいる場所、AZ＝その中の冗長性、エッジ＝ユーザーへの到達速度。

### 主要サービス（試験のカテゴリ分けに沿って整理）
- **コンピューティング：** EC2（仮想サーバー）、Lambda（サーバーレス関数）、ECS/EKS（コンテナ）
- **ストレージ：** S3（オブジェクトストレージ）、EBS（インスタンスに接続するブロックストレージ）、Glacier（コールド／アーカイブストレージ）
- **データベース：** RDS（マネージドリレーショナル）、DynamoDB（NoSQL）、Aurora（AWS独自のMySQL/PostgreSQL互換エンジン）
- **ネットワーキング：** VPC（プライベートネットワーク）、Route 53（DNS）、CloudFront（CDN）
- **セキュリティ＆ID管理：** IAM（権限管理）、Cognito（顧客向け認証）、KMS（暗号鍵管理）
- **分析：** Redshift（データウェアハウス）、Athena（S3上へのSQLクエリ）、QuickSight（ダッシュボード）
- **開発者ツール：** CodeCommit／CodeBuild／CodeDeploy — ソース管理・ビルド・デプロイ
- **マネジメント：** CloudWatch（メトリクス／アラーム）、CloudTrail（操作履歴の監査ログ）、Config（構成変更の履歴・コンプライアンス）
- **AI/ML：** SageMaker（モデル構築）、Rekognition（画像・動画解析）、Lex（対話ボット）
- **移行・転送：** Migration Hub（移行状況の追跡）、Snowball（物理的な大容量データ転送）、DataSync（継続的なデータ転送）

**混同しやすいペアの暗記のコツ：**
- *S3 vs EBS* — S3はネットワーク経由でどこからでもアクセスできるオブジェクトを保持し、EBSは1つのEC2インスタンスに固定される仮想ディスク。
- *RDS vs DynamoDB* — RDSはスキーマを持つSQL／リレーショナル、DynamoDBは柔軟なスキーマを持つNoSQL／キーバリュー。
- *CloudWatch vs CloudTrail vs Config* — Watch＝メトリクスとアラーム、Trail＝APIコールの監査ログ、Config＝リソース構成変更の時系列記録。

### Well-Architected フレームワークの5つの柱
アーキテクチャを点検するための5つの視点：**運用上の優秀性、セキュリティ、信頼性、パフォーマンス効率、コスト最適化。** **暗記のコツ：**「OSR-PC」 — 設計上のトレードオフを説明する問題が出るたびに、順番にチェックしていくリストとして覚える。

### 無料利用枠（Free Tier）を一言で
新規アカウントは、多くのサービスに12か月間限定でアクセスでき（さらに一部は常時無料の利用枠あり）、学習や低トラフィックのテストには向いているが、本番環境のキャパシティ計画には向かない。

### 試験でよく出るユースケース
Webサイトのホスティング、データのバックアップ／保存、スケーラブルなアプリの構築、分析／レポーティングの実行、MLモデルの学習、IoTデータの取り込みなどが、シナリオ問題の設定としてよく登場する。ポイントは、サービス名を覚えることではなく、シナリオの*制約条件*（コストか？レイテンシか？コンプライアンスか？耐久性か？）を、その制約のために作られたサービスと一致させることにある。

</details>
