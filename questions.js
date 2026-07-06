const QUESTION_BANK = [
  {
    "id": 1,
    "question": "A company needs to plan, schedule, and run hundreds of thousands of computing jobs on AWS. Which AWS service can the company use to meet this requirement?",
    "correct": [
      "AWS batch"
    ],
    "distractors": [
      "AWS Step function",
      "AWS Service catalog",
      "AWS SQS (simple Queue Service) Decouples application components (Queues messages but does not run jobs)"
    ],
    "explanation": "`AWS batch `: It is a fully managed service designed to run large scale batch computing jobs (hundred of thousands) on AWS. Dynamically provisions EC2/Spot instances or user Fargate (serverless)"
  },
  {
    "id": 2,
    "question": "AWS services or features provide high availability and low latency by enabling failover across different AWS region?",
    "correct": [
      "Amazon Route 53",
      "AWS Global Accelerator"
    ],
    "distractors": [
      "Network Load Balancer",
      "Amazon S3 Tranfer Acceleration"
    ],
    "explanation": "Amazon Route 53 provides DNS-based failover, routing traffic to healthy endpoints in another region if the primary fails. AWS Global Accelerator provides automatic failover, shifting traffic to healthy endpoints in another region during outages."
  },
  {
    "id": 3,
    "question": "Which AWS security service protects applications from distributed denial of service (DDos) attacks with always -on detection and automatic inline mitigations?",
    "correct": [
      "AWS Shield"
    ],
    "distractors": [
      "AWS Inspector",
      "AWS web application firewall (AWS WAF)",
      "Elastic Load Balancing(ELB)"
    ],
    "explanation": "`AWS Shield`: It is a managed DDos protection service that provides always on detection and Automatic inline suggestions. (Shield standard and advanced{paid})"
  },
  {
    "id": 4,
    "question": "A company has teams with different jobs roles and responsibilities. Employee often changes team and company needs to manage permission for the employee so that the permissions are appropriate for the job responsibilities?",
    "correct": [
      "IAM roles"
    ],
    "distractors": [
      "IAM user group",
      "IAM instances profiles",
      "IAM policies for individual users"
    ],
    "explanation": "`IAM roles` : It allows to assign permission based on job function not individual users. NO policy updates needed, temporary credentials, cross account/ team flexibility."
  },
  {
    "id": 5,
    "question": "A media company needs undergo a external audit. What can organization use to retrieve AWS security and compliance documents and Submit them as evidence to an auditor or regulator?",
    "correct": [
      "AWS Artifacts"
    ],
    "distractors": [
      "AWS certificate Manager",
      "AWS system Manager",
      "AWS Audit Manager"
    ],
    "explanation": "`AWS Artifacts`: It is a self service portal for on demand access to AWS compliance reports and certifications (eg, SOC, ISO,PCI-DSS)."
  },
  {
    "id": 6,
    "question": "A media company wants to encrypt the data stored in amazon S3. Which encryption types can be used to protect objects at rest in Amazon S3? (Choose two)",
    "correct": [
      "Server-Side Encryption with Amazon S3-managed keys (SSE-S3)",
      "Server-Side Encryption with AWS KMS-managed keys (SSE-KMS)"
    ],
    "distractors": [
      "TLS",
      "SSL",
      "Transparent Data Encryption (TDE)"
    ],
    "explanation": "Server Side encryption with Amazon S3 managed encryption keys (SSE-S3). Server side encryption with AWS kMS Managed keys (SSE-KMS)."
  },
  {
    "id": 7,
    "question": "A online retail company wants to integrate its online shopping website with social Media login credentials. Which AWS service can they use to make this integration?",
    "correct": [
      "Amazon Cognito"
    ],
    "distractors": [
      "AWS Directory service",
      "AWS identity and Access Management (IAM)",
      "AWS IAM Identity center"
    ],
    "explanation": "`Amazon Cognito`: It is designed federated identity and social Media login integration (eg Facebook, google and Apple) User pools, Identity Pools."
  },
  {
    "id": 8,
    "question": "A customer runs on- demand Amazon Linux EC2 instance for 3 hours, 5 minutes and 6 seconds. For how much customer will be billed?",
    "correct": [
      "3 hours, 5 minutes and 6 seconds"
    ],
    "distractors": [
      "3 hours, 5 minutes",
      "3 hours, 6 minutes",
      "4 hours"
    ],
    "explanation": "`3 hours, 5 minutes and 6 seconds` : Amazon EC2 on-demand instances running Amazon Linux use per-second billing granularity, meaning no rounding up occurs for partial hours or minutes beyond the initial 60-second minimum charge."
  },
  {
    "id": 9,
    "question": "A company wants a customized assessment of its current on-premises environment. The company wants to understand its projected running costs in AWS cloud?",
    "correct": [
      "Migration Evaluator"
    ],
    "distractors": [
      "AWS Trusted Advisor",
      "Amazon Inspector",
      "AWS Control Tower"
    ],
    "explanation": "`Migration Evaluator` : It provides a customized assessment of on-premises workloads and projects AWS costs by analyzing Server utilization, Licensing Needs, cost optimized AWS recommendations."
  },
  {
    "id": 10,
    "question": "A company that has multiple business units wants to manage centrally and govern its AWS cloud Environments. The Company wants to automate the creation of AWS accounts, apply service control polices (SCPs) and simplify billing processes. Which tool meet the requirements?",
    "correct": [
      "AWS Organization"
    ],
    "distractors": [
      "AWS Budgets",
      "Cost Explorer",
      "AWS Trusted advisor"
    ],
    "explanation": "`AWS Organization`: Centralized governance and Management of multiple AWS accounts across business units."
  },
  {
    "id": 11,
    "question": "A company is hosting an application in AWS cloud. The company wants to verify that underlying AWS services and general AWS infrastructure are operating normally. Which combination of AWS services can the company use to gather the required information?",
    "correct": [
      "AWS Personal Health Dashboard",
      "AWS Service Health Dashboard"
    ],
    "distractors": [
      "AWS system Manager",
      "AWS Trusted Advisor",
      "AWS Service Catalog"
    ],
    "explanation": "`AWS Personal Health Dashboard`: Shows service disruptions specific to account. `AWS Service Health Dashboard`: Displays global AWS service status (all regions\\endpoints)."
  },
  {
    "id": 12,
    "question": "A company needs to migrate a PostgreSQl database from on-premise to Amazon RDS. which AWS service or tool should company use to meet this requirements?",
    "correct": [
      "AWS Database Migration Service (AWS DMS)"
    ],
    "distractors": [
      "Cloud Adoption Readiness tool",
      "AWS Migration Hub",
      "AWS Application Migration service"
    ],
    "explanation": "` AWS Database Migration Service (AWS DMS)` : Designed for homogenous (postgreSQL to PostgreSQl) and heterogenous database migrations."
  },
  {
    "id": 13,
    "question": "Which cloud concept is demonstrated by using AWS compute Optimizer?",
    "correct": [
      "Rightsizing"
    ],
    "distractors": [
      "Security validation",
      "Elasticity",
      "Global reach"
    ],
    "explanation": "`Rightsizing`: Recommends optimal AWS resources (eg EC2 instances, EBS volumes, lambda functions) based on historical usage data."
  },
  {
    "id": 14,
    "question": "A company hosts a large amount of data in AWS. The company wants to identify if any of the data should be considered sensitive? Which AWS service meet requirements?",
    "correct": [
      "Amazon Macie"
    ],
    "distractors": [
      "Amazon Inspector",
      "AWS IAM",
      "Amazon Cloudwatch"
    ],
    "explanation": "`Amazon Macie`: It is fully mananged data security service that uses machine learning to automatically discover sensitive data, Scan Amazon S3 buckets, Provide alerts and Dashboards."
  },
  {
    "id": 15,
    "question": "A company wants to run a stateful workload on Amazon EC2 for 3 years. Which pricing model is most cost-effective for this?",
    "correct": [
      "Reserved Instances"
    ],
    "distractors": [
      "On demand Instances",
      "Dedicated Instances",
      "Spot instances"
    ],
    "explanation": "`Reserved Instances`: It offers up to 75% discount compared to On-Demand pricing for long -Term, predictable workloads, Ideal for stateful apps (eg.. Databases) that can't tolerate interruptions."
  },
  {
    "id": 16,
    "question": "Based on AWS shared Responsibility model, which Services requires the organization to update, patch the guest operating system?",
    "correct": [
      "Amazon EC2"
    ],
    "distractors": [
      "Dynamo DB",
      "Amazon S3",
      "Aurora"
    ],
    "explanation": "`Amazon EC2`: It is an infrastructure as a service (IaaS) offering where the customer is resonsible for managing the guest OS. AWS only manages the physical hardwarem,hypervisor and network."
  },
  {
    "id": 17,
    "question": "A company faced an attack on its cloud infrastructure and wants to find the list of AWS services that are shared externally. Which AWS service should it use?",
    "correct": [
      "AWS Control Tower"
    ],
    "distractors": [
      "OpenSearch Service",
      "AWS Fargate",
      "Amazon Inspector"
    ],
    "explanation": "`AWS Control Tower`: It helps to identify AWS resources shared with external entities. Supports zone of Trust and scans S3 buckets,KMS keys, IAM Roles and lambda functions."
  },
  {
    "id": 18,
    "question": "A company wants to register for an AWS Support plan. At what support level do users receive access to a support concierge?",
    "correct": [
      "Enterprise support"
    ],
    "distractors": [
      "Basic Support",
      "Developer Support",
      "Business support"
    ],
    "explanation": "`Enterprise support`: It is the only AWS support plan that includes a support concierge which provides dedicated technical account manager (TAM) for proactive guidance. 24/7 access to senior cloud support engineers. Additional note: A support concierge is a personalized service provider (individual or company) that handles various tasks and requests for clients, acting like a personal assistant to save them time and provide convenience, from booking reservations and travel to managing errands, events, and even technical or business support, often available 24/7 through digital platforms or in-person."
  },
  {
    "id": 19,
    "question": "Which AWS service can a company use to visually design and build serverless applications?",
    "correct": [
      "AWS application Composer"
    ],
    "distractors": [
      "AWS Lambda",
      "AWS Batch",
      "AWS App Runner"
    ],
    "explanation": "`AWS application Composer`: It is a visual drag and drop tool for designing and prototyping serverless applications. Generates infrastructure as code (IaC template)."
  },
  {
    "id": 20,
    "question": "A company wants to migrate to AWS and use the same security software it uses on-premises. The security software vendor offers its security software as a service on AWS. Where should the company purchase the security solution?",
    "correct": [
      "AWS Marketplace"
    ],
    "distractors": [
      "AWS Partner Solutions Finder",
      "AWS support center",
      "AWS Management Console"
    ],
    "explanation": "`AWS Marketplace`: It is a digital catalog where customers can purchase third party software (like security solutions) that are pre configured on AWS."
  },
  {
    "id": 21,
    "question": "A company wants to migrate its PostgreSQL database to AWS. It does not use the database frequently. Which service will meet the requirement with the least management overhead?",
    "correct": [
      "Amazon Aurora Serverless"
    ],
    "distractors": [
      "PostgreSQL on Amazon EC2",
      "Amazon RDS for postgreSQL",
      "Amazon Aurora postgreSQL compatible Edition"
    ],
    "explanation": "`Amazon Aurora Serverless`: It is the most hands off options for a postGreSQL compatible Database. Automatically scales to zero."
  },
  {
    "id": 22,
    "question": "Using DynamoDB for its application database. Which tasks are responsibility of AWS, according to shared responsibility model?",
    "correct": [
      "Provide public endpoints to store and Retrieve data",
      "Manage the infrastructure layer and OS"
    ],
    "distractors": [
      "Classify data",
      "Configure access permissions",
      "Manage encryption process"
    ],
    "explanation": "`Provide public endpoints to store and Retrieve data`. (Public Endpoints: DynamoDB APIs for data access). `Manage the infrastructure layer and OS` (Infrastructure+OS: Hardwares, Servers, networking, hypervisor, DynamoDB software updates).."
  },
  {
    "id": 23,
    "question": "Managed IAM policy that does not grant the necessary permission for users to accomplish required tasks.",
    "correct": [
      "Create a Custom IAM policy"
    ],
    "distractors": [
      "Enable AWS Shield advanced",
      "Use a Third party web application firewall (WAF) managed rule from AWS marketplace. (Blocks web exploits, no IAM permissions)",
      "Use AWS key management service (AWS KMS) to create a customer managed key (encryption key management (doesn't grant permissions))"
    ],
    "explanation": "`Create a Custom IAM policy.` (Custom IAM policies let customers granualarly define permissions to meet specific requirements)"
  },
  {
    "id": 24,
    "question": "A company is building an application in AWS and wants to explore the AWS Cloud Adoption Framework (CAF). Which AWS CAF security perspective capabilities should it consider?",
    "correct": [
      "Incident response",
      "Infrastructure Protection"
    ],
    "distractors": [
      "observability",
      "Incident and problem management",
      "Availability and continuity"
    ],
    "explanation": "`Incident response`: protect to detect, investigate and mitigate security incidents (eg branches, DDOS). `Infrastructure Protection`: safeguards networks, compute and storage (eg firewalls, encryption and patch management)"
  },
  {
    "id": 25,
    "question": "Media company stores media assets into Amazon S3 bucket. Company does not know the access pattern of media objects. What is most effective for unknown access patterns?",
    "correct": [
      "S3 intelligent Tiering"
    ],
    "distractors": [
      "S3 standard",
      "S3 standard Infrequent Access",
      "S3 one zone infrequent access (S3 One Zone -IA)"
    ],
    "explanation": "`S3 intelligent Tiering`: It is the most cost effective for unknown access pattern because it automatically moves objects between tiers."
  },
  {
    "id": 26,
    "question": "Which features describe network ACLs as they are used in the AWS Cloud?",
    "correct": [
      "Stateless",
      "process rules in order starting lowest numbered rule deciding whether to allow traffic"
    ],
    "distractors": [
      "Stateful",
      "Evaluate all rules before allowing traffic",
      "They operate at instance level"
    ],
    "explanation": "`Stateless`: Inbound\\Outbound rules are evaluated independently. Explicitly allow return traffic. `process rules in order starting lowest numbered rule deciding whether to allow traffic` Additional note: - Nacls =Stateless + Subnet level firewall (coarse grained). - Security groups = Stateful + instance level firewall (fine -grained)."
  },
  {
    "id": 27,
    "question": "Plans to run a compute intensive workload that usess GPUs, which EC2 instances should be used?",
    "correct": [
      "Accelerated computing"
    ],
    "distractors": [
      "Compute optimized",
      "General Purpose",
      "Storage optimized"
    ],
    "explanation": "`Accelerated computing` : It is purpose built for GPU- Workloads, agentic and generative AI applicationsm video and image generations, speech recognition and more. For ex.. p4d.24xlarge( NVIDIA A100) etc"
  },
  {
    "id": 28,
    "question": "Which task can company perform by using security groups in AWS cloud?",
    "correct": [
      "Allow access to an Amazon Ec2 instances through only a specific port"
    ],
    "distractors": [
      "Deny access to malicious IP address at subnet level",
      "Protect data that is cached by Amazon Cloud Front",
      "Apply a stateless firewall to an Amazon EC2 instances"
    ],
    "explanation": "`Allow access to an Amazon Ec2 instances through only a specific port` : security groups acts as stateful firewall for EC2 instance, which allow inbound/outbound traffic to a specific ports."
  },
  {
    "id": 29,
    "question": "An external auditor is asking a copany to provide a list of all its IAM users including the status of users credentials and access keys for audit purpose, simplest way to provide this info?",
    "correct": [
      "Download the IAM credential report, then provide the report to the Auditor"
    ],
    "distractors": [
      "Create an IAM user account for the auditor, granting the auditor administrator permissions",
      "Take a screenshots of each users page in AWS environment . (time consuming and error prone)",
      "Download the AWS Trusted advisor report, then provide the report to the auditor"
    ],
    "explanation": "`Download the IAM credential report, then provide the report to the Auditor` : IAM credentials report are automatically generated CSV/JSON files with password status, Access key status MFA device status"
  },
  {
    "id": 30,
    "question": "An online retail company uses Amazon S3 to store records that can contain personally identifiable information (PII). The company wants a solution that can monitor all S3 buckets for PII and immediately alert staff about vulnerabilities. Which AWS service meet these requirements ?",
    "correct": [
      "Amazon Macie"
    ],
    "distractors": [
      "AWS Shield",
      "Amazon Detective",
      "Amazon GuardDuty"
    ],
    "explanation": "Amazon Macie : Automatically discovers PII (eg SSNs, credit card numbers) in S3 buckets using machine learning and alerts in real time via amazon event bridge or AWS security Hub."
  },
  {
    "id": 31,
    "question": "A company wants to run its workload in AWS cloud Effectively, reduce management overhead and improve processes. Which AWS Well Architected framework pillar represents these requirements?",
    "correct": [
      "Operational Excellence"
    ],
    "distractors": [
      "Reliability",
      "Performance efficiency",
      "Cost optimization"
    ],
    "explanation": "`Operational Excellence` : Running workloads effectively / reducing Management overhead / Improving processes"
  },
  {
    "id": 32,
    "question": "A company uses various AWS services and tools and needs a service to help manage security alerts by organizing them into a single dashboard. Which AWS service should it use?",
    "correct": [
      "Amazon Security Hub"
    ],
    "distractors": [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Simple notification service (AWS SNS)"
    ],
    "explanation": "`Amazon Security Hub` : Provides a centralized dashboard for security alerts from multiple AWS services including AWS Guardduty, Amazon inspector, Amazon Macie and AWS IAM Acess analyzer."
  },
  {
    "id": 33,
    "question": "A company wants to verify if multi-factor authentication is enabled for all users within its AWS account. Which service meets this requirement?",
    "correct": [
      "IAM credentials report"
    ],
    "distractors": [
      "AWS cost and Usage Report",
      "AWS artifact",
      "Amazon CloudFront reports"
    ],
    "explanation": "`IAM credentials report` : It provide a detailed CSV/JSON report that includes MFA device status, Access Key usage password last changed and other security metrics."
  },
  {
    "id": 34,
    "question": "A company is migrating an on-premises server to an EC2 instance. The server must remain active at all times for 12 months, and the organization expects to change the compute family due to the evolving nature of the workload. Which pricing option would be most cost-effective for this scenario?",
    "correct": [
      "Savings plan"
    ],
    "distractors": [
      "On demand",
      "Reserved Instances",
      "Spot instances"
    ],
    "explanation": "`Savings plan`: It offers flexibilty and cost savings (up to 72% discount vs on Demand) for long term workloads where the instance family might change."
  },
  {
    "id": 35,
    "question": "A company wants to use a managed security service for protection against SQL injection attacks, and it must also provide detailed logging information about access to its e-commerce application. Which service meets these requirements?",
    "correct": [
      "AWS WAF (web application Firewall)"
    ],
    "distractors": [
      "AWS Network firewall",
      "Amazon GuardDuty",
      "AWS appflow"
    ],
    "explanation": "`AWS WAF (web application Firewall)` : It is a mannaged service that blocks SQL injection attacks (and other OWASP Top 10 threats like XSS). logs all web requests."
  },
  {
    "id": 36,
    "question": "A company wants to access AWS services by using temporary security credentials. Which feature should be used?",
    "correct": [
      "AWS security Token service (AWS STS)"
    ],
    "distractors": [
      "IAM policies",
      "IAM user group",
      "AWS IAM identity center (AWS single Sign On)"
    ],
    "explanation": "`AWS security Token service (AWS STS)`: generates temporary security credentials (access keys, sessions tokens) for IAM rolesm, federated users."
  },
  {
    "id": 37,
    "question": "An online gaming company wants to use an AWS serverless tech stack to build its application. What is a benefit of using AWS serverless computing?",
    "correct": [
      "Management of infrastructure is offloaded to AWS"
    ],
    "distractors": [
      "Application deployment and management not required",
      "Application security will be managed by AWS",
      "Monitoring and logging are not needed"
    ],
    "explanation": "`Management of infrastructure is offloaded to AWS`: Serverless computing (eg AWS lambda, API Gateway, DynamoDB) lets developer focus on code while AWS handles infrastructure provisioning, scaling and maintenance. Automatic patching and high availability."
  },
  {
    "id": 38,
    "question": "A company needs to collect and process 10 TB of data locally and transfer the data to AWS. The company has intermittent connectivity. Which service will meet these requirements?",
    "correct": [
      "Snowball Edge"
    ],
    "distractors": [
      "AWS DMS",
      "AWS Datasync",
      "AWS backup"
    ],
    "explanation": "`Snowball Edge` : It is designed for large scale data transfer in low / no connectivity environments. Local data processing Physical Data transport Rugged and portable"
  },
  {
    "id": 39,
    "question": "A company is migrating its server-based application to the AWS Cloud. What benefits will the company receive when it moves its production workload to AWS? (Choose two)",
    "correct": [
      "AWS offers high availability",
      "AWS provides economies of scale"
    ],
    "distractors": [
      "manages all security in cloud",
      "Free support and Technical account managers (TAM)"
    ],
    "explanation": "AWS offers high availability : Built in redundancy (multi - AZ, auto scaling, global infrastucture). AWS provides economies of scale. ( massives infrastructure reduces per unit costs, for eg storage, compute etc)"
  },
  {
    "id": 40,
    "question": "A company wants to use Amazon EC2 instances to provide a static website to users all over the world and wants to minimize latency for users. Which solution meets these requirements?",
    "correct": [
      "CloudFront with the EC2 instances configured as the source"
    ],
    "distractors": [
      "Use EC2 instances in multiple Edge locations",
      "Use EC2 instances in same availability zone in different AWS regions. (Expensive + complex)",
      "Use EC2 instances in same availability zone but different AWS accounts (Expensive and complex, so cloudfront is simple and cheaper)"
    ],
    "explanation": "`CloudFront with the EC2 instances configured as the source` Cache static website content at AWS Edge locations, reduces latency by serving content from nearest edge location to users."
  },
  {
    "id": 41,
    "question": "A company wants to run a simulation for 10 months without interruptions. Which EC2 instance purchasing option will meet this requirement most cost-effectively?",
    "correct": [
      "Reserved Instances"
    ],
    "distractors": [
      "Spot Instances",
      "On demand Instances",
      "Dedicated Hosts"
    ],
    "explanation": "`Reserved Instances`: RI`s offer up to 75% discount cs on demnand pricing for long term, uninterrupted workloads ( like this 10 month simulation). Capacity reservation 1 - year terms (even 10 month is cheaper than on demand)."
  },
  {
    "id": 42,
    "question": "Purchased AWS Enterprise support plan, How does Enterprise support Concierge team help users?",
    "correct": [
      "Answering billing and account inquiries"
    ],
    "distractors": [
      "Support Application development",
      "Providing Architecture guidance",
      "Answering questions regarding technical support cases"
    ],
    "explanation": "`Answering billing and account inquiries`: AWS Enterprise support concierge team specialize in billing and account assistance and operational Taks."
  },
  {
    "id": 43,
    "question": "Company wants to receive alerts to monitor overall operating costs for its AWS Public cloud infrastructure. Which AWS offering meet the requirements?",
    "correct": [
      "AWS Budgets"
    ],
    "distractors": [
      "Amazon EventBridge",
      "Compute savings plan",
      "Migration Evaluator"
    ],
    "explanation": "`AWS Budgets`: It lets to set custom cost alerts based on total spending, service specific costs (Eg EC2,S3). Alerts are sent via email/SNS."
  },
  {
    "id": 44,
    "question": "On demand technology services that enables companies to replace upfront fixed expenses with variable expenses?",
    "correct": [
      "Pay as you go pricing"
    ],
    "distractors": [
      "High availability",
      "Economies of Scale",
      "Global reach"
    ],
    "explanation": "`Pay as you go pricing`: It is a core AWS benefit that replaces upfront capital expenses (CapEx) with variable operational expenses (OpEx). Charges only for actual usages without long term commitments."
  },
  {
    "id": 45,
    "question": "A company wants to quickly deploy a non-relational database on AWS. The company does not want to manage the underlying hardware or database software. Which service can be used to accomplish this?",
    "correct": [
      "Amazon DynamoDB"
    ],
    "distractors": [
      "Amazon RDS",
      "Amazon Aurora",
      "Amazon Redshift"
    ],
    "explanation": "`Amazon DynamoDB`: Fully managed NoSQL (non relational) Database service and requires no server provisioning or software management."
  },
  {
    "id": 46,
    "question": "A company wants to create a globally accessible e-commerce platform for its customers. The company wants to use a highly available and scalable DNS web service to connect users to the platform. Which AWS service meets these requirements?",
    "correct": [
      "Amazon Route 53"
    ],
    "distractors": [
      "Amazon EC2",
      "Amazon VPC",
      "Amazon RDS"
    ],
    "explanation": "`Amazon Route 53`: highly available and sacalable domain name system (DNS) web service. Supports health checks and routing policies (eg latency based, geolocation)."
  },
  {
    "id": 47,
    "question": "Company is migrating to AWS cloud and plans to run experimental workloads for 3 to 6 months on AWS. Which pricing model will meet these requirements?",
    "correct": [
      "Use on demand instances"
    ],
    "distractors": [
      "Use saving plans for 3 year term",
      "Use dedicated hosts",
      "Buy Reserved instances"
    ],
    "explanation": "`Use on demand instances` : Ideal for short term, unpredictable or experimental workloads. Perfect for 3-6 months experimental projects."
  },
  {
    "id": 48,
    "question": "A company having AWS enterprise support is launching a new version of a popular product in 2 months. The company expects a large increase in traffic to its websit. The website is hosted on Amazon EC2 instances. Which action should the company take to assess its readiness to scale for this launch?",
    "correct": [
      "Use AWS infrastructure Event Management (IEM) Support"
    ],
    "distractors": [
      "Replace EC2 Instances with AWS lambda function",
      "Submit a request on AWS Marketplace to monitor the event",
      "Review the coverage reports in AWS Cost management console"
    ],
    "explanation": "Use AWS infrastructure Event Management (IEM) Support: Available with AWS Enterprise Support. Helps plan and assess infrastructure readiness for large scale events (eg.. product launches). Ensures the environment can handle anticipated traffic spikes."
  },
  {
    "id": 49,
    "question": "A company wants to launch multiple workloads on AWS. Each workload is related to a different business unit. The company wants to separate and track costs for each business unit. Which solution will meet these requirements with least operational overhead?",
    "correct": [
      "Use AWS organizations and create one account for each business unit"
    ],
    "distractors": [
      "Use spreadsheet to control the owners and cost of each resource",
      "Use AWS billing console to assign owners to resources and track costs",
      "Use an Amazon DynamoDb table to record costs for each business unit"
    ],
    "explanation": "`Use AWS organizations and create one account for each business unit` : It provides cost isolation and clear billing separation per account. Enables centralized management with consolidated billing."
  },
  {
    "id": 50,
    "question": "A company wants a time-series database service that makes it easier to store and analyze trillions of events each day. Which AWS service will meet these requirements?",
    "correct": [
      "Amazon Timestream"
    ],
    "distractors": [
      "Amazon Neptune",
      "Amazon Forecast",
      "Amazon DynamoDB"
    ],
    "explanation": "`Amazon Timestream`: Purpose built time series database service. Designed to store and analyze trillions of time stamped events per day. Automatically handles data life cycle management (eg recent vs historical data)"
  },
  {
    "id": 51,
    "question": "Which option is shared control between AWS and the customer, according to AWS shared responsibility model?",
    "correct": [
      "Identity and access management"
    ],
    "distractors": [
      "Physical and environmental controls",
      "Data integrity and authentication",
      "configuration Management"
    ],
    "explanation": "`Identity and access management` It is a shared responsibility; AWS manages the infrastructure and services that support IAM (e.g..IAM service itself). Customer is responsible for configuring IAM roles, policies and permissions correctly."
  },
  {
    "id": 52,
    "question": "Which AWS services enables users to connect on-premises networks to a VPC? (Choose two)",
    "correct": [
      "AWS VPN",
      "AWS direct connect"
    ],
    "distractors": [
      "Elastic load Balancing",
      "VPC peering",
      "Amazon cloudfront"
    ],
    "explanation": "`AWS VPN `: Enables secure connections between on-premises networks and AWS VPCs over the public internet. Uses IPsec tunnels to encrypt traffic. `AWS direct connect` : provides a dedicated, private network connection from on-premises to AWS. Suitable for consistent, high throughput workloads."
  },
  {
    "id": 53,
    "question": "A company often does not use all of its current Amazon EC2 capacity to run stateless workloads. The company wants to optimize its EC2 costs. Which EC2 instance type will meet these requirements?",
    "correct": [
      "Spot Instances"
    ],
    "distractors": [
      "Reserved instances",
      "Dedicated instances",
      "On demand instances"
    ],
    "explanation": "`Spot Instances`: Allow to use unused EC2 capacity at up to 90% discount compared to on demand pricing. Ideal for stateless, Fault-tolerant and flexible workloads."
  },
  {
    "id": 54,
    "question": "Which actions are examples of a company's effort to rightsizing its AWS resources to control cloud costs?",
    "correct": [
      "Base the selection of Amazon EC2 instance types on past utilization patterns",
      "Use Amazon S3 lifecycle policies to move infrequently accessed objects to lower-cost storage tiers"
    ],
    "distractors": [
      "Switch from Amazon RDS to amazon DynamoDB to accommodate NoSQL datasets",
      "Use multi AZ deployment for Amazon RDS",
      "Replace existing Amazon EC2 instances with AWS Elastic Beanstalk"
    ],
    "explanation": "Base the selection of Amazon EC2 instances types on past utilization patterns : Helps avoid overprovisioning by matching instances size to actual usage. Reduces cost by selecting cost efficient instances types based on performances needs. Use Amazon S3 lifecycle policies to move objects that users access infrequent to lower cost storage tiers : Automatically transitions data to cheaper storage classes. Optimizes storage costs based on access patterns."
  },
  {
    "id": 55,
    "question": "A company wants to store data in Amazon S3. The company rarely access the data, and most data can be regenerated if necessary. The company wants to store the data in most cost effective storage class. Which S3 storage class will meet these requirements?",
    "correct": [
      "S3 One Zone Infrequent access"
    ],
    "distractors": [
      "S3 standard",
      "S3 Standard infrequent access (S3 Standard IA)",
      "S3 Intelligent - Tiering"
    ],
    "explanation": "`S3 One Zone Infrequent access` lowest cost option for infrequent accessed data that can be recreated if lost. Stores data in a single availability zone, reducing redundancy and cost."
  },
  {
    "id": 56,
    "question": "A company has migrated its workload to AWS, and wants to adopt AWS at scale and operate more efficiently and securely. Which AWS service or framework should the company use for operational support?",
    "correct": [
      "AWS Managed Services"
    ],
    "distractors": [
      "AWS Support",
      "AWS cloud adoption framework (AWS CAF)",
      "AWS Well architected Framework"
    ],
    "explanation": "`AWS Managed Services` : provides operational support for AWS workloads at scale. Ideal for organizations that want to focus on innovation while AWS handles day to day operations."
  },
  {
    "id": 57,
    "question": "A media company has a physical tape library to store data backups. The tape library is running out of space. The company needs to extend its tape library capacity to the AWS Cloud. Which AWS service should the company use to meet this requirement?",
    "correct": [
      "AWS storage gateway"
    ],
    "distractors": [
      "Amazon Elastic File system (Amazon EFS)",
      "Amazon Elastic Block store (Amazon EBS)",
      "Amazon S3"
    ],
    "explanation": "`AWS storage gateway` Specifically, offers a tape Gateway configuration as virtual tape library (VTL) to backup applications. Extends on-premises tape backup infrastructure to AWS. Stores data in Amazon S3 and can achieve to Amazon S3 glacier or glacier Deep archive for Cost savings."
  },
  {
    "id": 58,
    "question": "A company is using AWS Free tier for several AWS services for an application. What will happen if the free tier usage period expires or if the application use exceeds the free tier usage limits?",
    "correct": [
      "The company will be charged the standard pay as you go service rates for the usage that exceeds the free tier usage"
    ],
    "distractors": [
      "AWS support will contact the company to set up standard service charges",
      "The company will be charged for the services if consumed during the free tier period, plus additional charges for service consumption after the free tier period",
      "The company's AWS account will be frozen and can be restarted after payment plan is established"
    ],
    "explanation": "`The company will be charged the standard pay as you go service rates for the usage that exceeds the free tier usage`. : Once the 12 month free tier period ends or usaage exceeds the monthly limits, AWS automatically starts changing standard on demand rates."
  },
  {
    "id": 59,
    "question": "A media company wants to monitor its workload performance. The company wants to ensure that the cloud services are delivered at a level that meets it business needs. Which AWS CAF perspepctive will meet these requirements?",
    "correct": [
      "Operations"
    ],
    "distractors": [
      "Business",
      "Governance",
      "Platform"
    ],
    "explanation": "`Operations`: Focus on mmonitoring, managing and operating cloud workloads to deliver business value. Ensure that cloud services meet performance and availability expectations."
  },
  {
    "id": 60,
    "question": "A company wants to migrate its application to the AWS Cloud. The company wants to identify and prioritize business transformation opportunities and evaluate its AWS Cloud readiness. Which AWS tool should the company use to meet these requirements?",
    "correct": [
      "AWS CAF"
    ],
    "distractors": [
      "AWS Managed Services (AMS)",
      "AWS well architected framework",
      "AWS migration hub"
    ],
    "explanation": "`AWS CAF` helps organization assess cloud readiness and identify business transformation opportunities. Ideal for planning a cloud migration strategy aligned with business goals."
  },
  {
    "id": 61,
    "question": "A company need an AWS service that provides a clear baseline of what company runs in its on-premises data centers. The company needs the projected cost to run its on-premises workloads in the AWS clouds. Which AWS service will meet these requirements?",
    "correct": [
      "Migration Evaluator"
    ],
    "distractors": [
      "AWS compute optimizer",
      "AWS cost explorer",
      "AWS systems Manager Agent (SSM agent)"
    ],
    "explanation": "`Migration Evaluator`: Helps companies asses their on-premises environments. Provides a clear inventory baseline, delivers a detailed cost projection."
  },
  {
    "id": 62,
    "question": "A media house acquired another corporation. The company now has two AWS accounts. Which AWS service or tool the company use to consolidate the billing for these two accounts?",
    "correct": [
      "AWS Organization"
    ],
    "distractors": [
      "AWS systems Manager",
      "AWS license Manager",
      "Cost explorer"
    ],
    "explanation": "`AWS Organization`: Allows you to consolidate billing across multiple AWS accounts. Enables Centralized management and provides consolidated billing."
  },
  {
    "id": 63,
    "question": "A media company wants to set up its workloads to perform their intended functions and recover quickly from failure. Which pillar of the AWS well architected framework aligns with these goals?",
    "correct": [
      "Reliability"
    ],
    "distractors": [
      "Performance efficiency",
      "Sustainability",
      "Security"
    ],
    "explanation": "`Reliability`: Focuses on ensuring workload can perform its intended function correctly and consistently. Recover quickly from failures. Key design principles include: 1. Automated recovery from failure. 2. Testing recovery procedures. 3. Monitoring and alerting 4. Distributed System Design"
  },
  {
    "id": 64,
    "question": "A media company is looking for a managed AWS service that is used to specifically for extract transform and load data (ETL) for their data analytics jobs, Which AWS service will meet these requirements?",
    "correct": [
      "AWS Glue"
    ],
    "distractors": [
      "Amazon Athena",
      "Amazon S3",
      "Amazon EMR (Elastic MapReduce)"
    ],
    "explanation": "`AWS Glue` : A fully managed ETL (Extract, Transform, Load) service. Allows to prepare and transrform data for analytics, machine learning and application development. Support serverless execution of ETL jobs using Apache spark or python. Additional note: : `ETL (Extract, Transform, Load)` is a crucial data integration process that pulls raw data from various sources, cleans and reshapes it into a usable format, and then loads it into a central destination like a data warehouse for analysis, reporting, and business intelligence."
  },
  {
    "id": 65,
    "question": "A company wants to migrate petabyte of data from its on-premises data center to AWS. The company does not want to use an internet connection to perform the migration. Which AWS service will meet these requirements?",
    "correct": [
      "AWS Snowmobile"
    ],
    "distractors": [
      "AWS Datasync",
      "AWS direct connect",
      "AWS Snowball Edge"
    ],
    "explanation": "`AWS Snowmobile` : Designed for massive scale data transfers - up to 100 petabytes per snowmobile. A physical, secure truck that transports data from your data center to AWS. Ideal for ;large scale migration where internet transfer is impractical or too slow."
  },
  {
    "id": 66,
    "question": "A company wants to receive alerts to monitor its overall operating costs for its AWS public cloud infrastructure. Which AWS offering will meet these requirements?",
    "correct": [
      "AWS Budget"
    ],
    "distractors": [
      "Compute saving plan",
      "AWS EventBridge",
      "Migration Evaluator"
    ],
    "explanation": "`AWS Budget` : Allows to set custom cost and usage budgets. Sends alerts via email for Amazon SNS when thresholds are exceeded. Ideal for proative cost monitoring and control."
  },
  {
    "id": 67,
    "question": "A company wants to save costs by archiving data that is no longer frequently accessed by end users. Which Amazon S3 featuire will meet these requirements?",
    "correct": [
      "S3 Lifecycle"
    ],
    "distractors": [
      "S3 Versioning",
      "S3 object lock",
      "S3 inventory"
    ],
    "explanation": "`S3 Lifecycle ` : Allows to automatically transition objects between storage classes based on access patterns. Ideal for archiving infrequently accessed data to lower cost tiers. Helps reduce storage costs without manual intervention."
  },
  {
    "id": 68,
    "question": "Which of following is characterstics of the AWS account root user?",
    "correct": [
      "The root user is the first sign in identity that is available when an AWS account is created"
    ],
    "distractors": [
      "The root user only user that can be configured with MFA",
      "The root user is only user that can access the AWS management console",
      "The root user has password that can`t be changed. (can be changed anytime through AWS account settings)"
    ],
    "explanation": "`The root user is the first sign in identity that is available when an AWS account is created`"
  },
  {
    "id": 69,
    "question": "An amazon EC2 instance previously used for development is inaccessible and no longer appears in the AWS Management console. Which AWS service should be used to determine what action made this Ec2 instance inaccessible?",
    "correct": [
      "AWS cloudtrail"
    ],
    "distractors": [
      "Amazon CloudWatch Logs",
      "AWS security hub",
      "AWS Inspector"
    ],
    "explanation": "`AWS cloudtrail`: Records all API calls and action taken in AWS account. can show who terminated or modified the EC2 instance, when and from where."
  },
  {
    "id": 70,
    "question": "A company wants to migrate unstructured data to AWS. The data needs to be securely moved with infligt encryption and end to end data validation? Which AWS service will meet these requirements?",
    "correct": [
      "AWS Data sync"
    ],
    "distractors": [
      "AWS application migration service",
      "AWS Elastic file system",
      "AWS Migration HUb"
    ],
    "explanation": "`AWS Data sync`: Designed for secure, automated data transfer between on-premises storage and AWS. Supports inflight encryption using TLS. performs end to end data validation to ensure data integrity. Additional note: 1. LS (Transport Layer Security) is the \"invisible digital armored car\" that protects your data as it travels between your device and Amazon's servers. 2. EBS: Like a hard disk or SSD that you plug into one server. (virtual hard drive that belongs to one EC2 server at a time.) 3. EFS: Like a shared network folder that many servers can use at the same time. (EFS is more like a shared folder on a company network that many machines can use together.) 4. AWS Glue is a data moving and cleaning service. It helps take data from one place, clean/transform it, and put it into another place, mostly for analytics."
  },
  {
    "id": 71,
    "question": "A development team wants to deploy multiple test environments for an application in a fast, repeatable manner. Which AWS service should the team use?",
    "correct": [
      "AWS cloudformation"
    ],
    "distractors": [
      "Amazon EC2",
      "Amazon Quicksight",
      "Amazon Elastic container service"
    ],
    "explanation": "`AWS cloudformation` Enables infrastructure as code, allowing you to define and deploy environments using templates. supports fast, repeatable and consistent deployments of multiple environments. Ideal for automating the setup of the EC2 instances , databases networking and more. Additional note: 1. AWS CloudFormation is an AWS service that lets you define your cloud infrastructure as text files instead of clicking around in the console. Infrastructure as Code (IaC) 2. Amazon Elastic Container Service (Amazon ECS) is a managed service for running containers (like Docker) on AWS without building your own orchestration system."
  },
  {
    "id": 72,
    "question": "A company wants to quickly implement a continuous integration / continuous delivery (CI/CD) pipeline. Which AWS service will meet these requirements?",
    "correct": [
      "AWS CodeStar"
    ],
    "distractors": [
      "AWS config",
      "Amazon Cognito",
      "Amazon Datasync"
    ],
    "explanation": "`AWS CodeStar` : provides a unified user interface to quickly set up CI/CD pipelines. Ideal for rapid development and deployment of application on AWS. AWS CodeCommit(source control) AWS Codebuild(build automation) AWS Codedeploy (deployment) AWS codepipeline (orchestration) Additional note: - A CI/CD pipeline is an automated path that takes code from developers and moves it to production safely and repeatedly. - Orchestration is like a conductor for an orchestra—it coordinates many moving parts (like containers or services) so they work together smoothly without chaos - AWS Config: Like a camera that watches all your AWS stuff (servers, databases) and takes snapshots to show if anything changed or broke rules—like \"no public databases.\" - Amazon Cognito: Like a bouncer at a club who checks IDs, signs people up, lets them log in (even with Google/Facebook), and decides what rooms they can enter in your app."
  },
  {
    "id": 73,
    "question": "Which AWS service could an administrator use to provide desktop environments for several employees?",
    "correct": [
      "AWS Workspace"
    ],
    "distractors": [
      "AWS organization",
      "AWS Fargate",
      "AWS WAF (AWS web application firewall)"
    ],
    "explanation": "`AWS Workspace`: a fully managed desktop as a service (DaaS) Solution. Provides virtual desktop environments to users. Windows and linux desktops, accesible from anywhere."
  },

  {
    "id": 74,
    "question": "Which type of cloud service model is most like an on-premises environment, where you configure virtual infrastructure components such as compute, network, and storage services that you can host your applications on?",
    "correct": ["Infrastructure as a Service (IaaS)"],
    "distractors": ["Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Function as a Service (FaaS)"],
    "explanation": "IaaS gives you virtualized infrastructure (compute, network, storage) similar to on-premises VMware or Hyper-V environments."
  },
  {
    "id": 75,
    "question": "Your company is looking to move all its applications and services to the cloud but would like to migrate workloads in stages. This would require you to ensure that there is connectivity between the on-premises infrastructure and the applications you deploy on AWS for a while. What cloud deployment model would you need to establish?",
    "correct": ["Hybrid cloud"],
    "distractors": ["Private cloud", "Public cloud", "Multi-cloud"],
    "explanation": "Hybrid cloud enables connectivity between on-premises and AWS during staged migrations."
  },
  {
    "id": 76,
    "question": "Which of the following statements are valid reasons for choosing a specific AWS Region to deploy your applications in? (Choose two)",
    "correct": [
      "Your organization would choose a specific AWS Region that enables you to ensure that your applications are closer to your end users, thereby reducing any latency.",
      "If your organization has specific compliance or data residency laws to follow, then your choice of an AWS Region will be dictated by this requirement."
    ],
    "distractors": [
      "Your organization would choose a Region closer to its location since your IT staff will need to visit the AWS data centers to set up servers and networking equipment.",
      "Your organization would choose a Region-based location where your business has an established legal presence. This is because you cannot access other Regions unless you have a legal establishment in that Region.",
      "Your organization would select an AWS Region that offered higher variable costs but lower upfront costs."
    ],
    "explanation": "Proximity to users (latency) and compliance/data residency requirements are the two valid reasons."
  },
  {
    "id": 77,
    "question": "Which component of the AWS Global Infrastructure enables you to cache content (videos, images, and documents) and offer low-latency access when your users try to download them?",
    "correct": ["Edge locations"],
    "distractors": ["AWS Regions", "Availability Zones", "Local Zones"],
    "explanation": "Edge locations are used by Amazon CloudFront to cache content closer to users."
  },
  {
    "id": 78,
    "question": "Which of the following AWS services can help you design a hybrid cloud architecture and enable your on-premises applications to get access to Amazon S3 cloud storage?",
    "correct": ["AWS Storage Gateway"],
    "distractors": ["Amazon Snowball Edge", "Amazon Elastic Block Store", "Amazon CloudFront"],
    "explanation": "AWS Storage Gateway connects on-premises environments to S3."
  },
  {
    "id": 79,
    "question": "You are planning on using AWS services to host an application that is still under development, and you need to decide which AWS support plan you should subscribe to. You do not need production-level support currently and are happy with a 12-hour response time for any system-impaired issues. Which is the most cost-effective support plan you should subscribe to?",
    "correct": ["Developer Support plan"],
    "distractors": ["Basic Support plan", "Business Support plan", "Enterprise Support plan"],
    "explanation": "Developer Support is the most cost-effective for non-production workloads with 12-hour response time."
  },
  {
    "id": 80,
    "question": "Which of the following are regarded as global services on AWS? (Choose two)",
    "correct": ["AWS IAM", "Amazon Route53"],
    "distractors": ["Amazon EC2", "Amazon EFS", "Amazon RDS"],
    "explanation": "IAM and Route 53 are global services (unique across all Regions)."
  },
  {
    "id": 81,
    "question": "Which of the following statements closely relates to the advantage of cloud computing that discusses the ability to go global in minutes?",
    "correct": ["The ability to deploy your applications across multiple Regions with just a few mouse clicks."],
    "distractors": [
      "The ability to trade capital expenses for variable expenses and thus avoid huge CAPEX.",
      "The ability to provision resources just in time for when you need them using tools such as Auto Scaling.",
      "The ability to focus on experimentation and the development of your applications rather than infrastructure builds, management, and maintenance."
    ],
    "explanation": "Going global in minutes refers to deploying across multiple AWS Regions quickly."
  },
  {
    "id": 82,
    "question": "Which AWS service can you configure to send out an alert to an email address if your total expenditure crosses a predefined monthly cost?",
    "correct": ["Set up a billing alarm in Amazon CloudWatch"],
    "distractors": ["Set up a billing alarm in Amazon CloudTrail", "Set up a billing alarm in Amazon Config", "Set up a billing alarm in Amazon Trusted Advisor"],
    "explanation": "Billing alarms are configured in CloudWatch."
  },
  {
    "id": 83,
    "question": "Which of the following resource types is tied to the Availability Zone that it was launched in?",
    "correct": ["Elastic Block Store (EBS)"],
    "distractors": ["Elastic File Store (EFS)", "Amazon Route53 Hosted Zones", "Amazon DynamoDB"],
    "explanation": "EBS volumes are AZ-specific."
  },
  {
    "id": 84,
    "question": "As part of enhancing the security of your AWS account, you need to ensure that all IAM users use complex passwords comprising of at least one capital letter, a number, a symbol, and a minimum of 9 characters. Which AWS IAM feature can you use to configure these requirements?",
    "correct": ["Password policies"],
    "distractors": ["Permission boundaries", "Service Control Policies (SCPs)", "Resource policies"],
    "explanation": "IAM Password Policies enforce password complexity."
  },
  {
    "id": 85,
    "question": "As a recommended best practice, what additional authentication security measure can you implement for your root user and IAM users?",
    "correct": ["Implement MFA."],
    "distractors": ["Implement LastPass.", "Implement AWS WAF.", "Implement AWS Shield."],
    "explanation": "Multi-Factor Authentication (MFA) is a recommended best practice."
  },
  {
    "id": 86,
    "question": "What is the easiest way to assign permissions to many IAM users who share a common job function?",
    "correct": ["Create an IAM Group, add IAM users who share the common job function to that group, and apply an IAM policy to the group with the necessary permissions."],
    "distractors": [
      "Create a customer-managed IAM policy and attach the same policies to all IAM users who share a common job function.",
      "Create an SCP to restrict users who share a common job function for specific permissions.",
      "Create an IAM role with the necessary permissions and assign the role to all IAM users who share the common job function."
    ],
    "explanation": "IAM Groups are the easiest way to manage permissions for users with similar roles."
  },
  {
    "id": 87,
    "question": "You have outsourced the development of your application to a third-party provider. This provider will require temporary access to your AWS account to set up the necessary infrastructure and deploy the application. What type of identity should you configure for the provider to use to gain access?",
    "correct": ["IAM role"],
    "distractors": ["IAM User", "IAM Group", "Root user"],
    "explanation": "IAM roles with temporary credentials (STS) are best for third-party temporary access."
  },
  {
    "id": 88,
    "question": "Which tool on AWS can be used to estimate your monthly costs?",
    "correct": ["AWS Pricing Calculator"],
    "distractors": ["AWS TCO Calculator", "AWS Free Tier Calculator", "AWS Monthly Calculator"],
    "explanation": "AWS Pricing Calculator is used to estimate monthly costs."
  },
  {
    "id": 89,
    "question": "You need to differentiate the cost of running different workloads in your AWS account by business unit and department. How you can identify your resources, as well as their owners, in the billing reports generated by AWS?",
    "correct": ["Designate specific tags as cost allocation tags in the AWS Billing and Cost Management Console."],
    "distractors": ["Set up an SNS alert for each department.", "Create a billing alarm.", "Configure consolidated billing in AWS Organizations."],
    "explanation": "Cost allocation tags help track costs by business unit/department."
  },
  {
    "id": 90,
    "question": "Which AWS tool enables you to view your Reserved Instance (RI) utilization?",
    "correct": ["AWS Cost Explorer"],
    "distractors": ["AWS Config", "AWS CloudTrail", "AWS Personal Health Dashboard"],
    "explanation": "AWS Cost Explorer shows RI utilization and savings."
  },
  {
    "id": 91,
    "question": "Which set of credentials do you need to configure for IAM users who need to access your AWS account via the command-line interface (CLI)?",
    "correct": ["IAM access key ID and secret access key"],
    "distractors": ["IAM username and password", "IAM MFA", "IAM key pairs"],
    "explanation": "Access keys are required for CLI/SDK access."
  },
  {
    "id": 92,
    "question": "An application is to be deployed on EC2 instances that will need to access an Amazon S3 bucket to upload any artifacts that are created. Which security option is considered a best practice to grant the application running on the EC2 instances the necessary permissions to upload files to the Amazon S3 bucket?",
    "correct": ["Create an IAM role with the required level of permissions using an IAM policy. Attach the role to the EC2 instances that will host the application."],
    "distractors": [
      "Create an IAM user account with a set of access keys... Hardcode the application with the access keys.",
      "Create an IAM user account with a username and password... Hardcode the application with the username and password.",
      "Create an IAM role... Attach the role to the application running on the EC2 instance."
    ],
    "explanation": "Attach IAM roles to EC2 instances (best practice – uses temporary credentials)."
  },
  {
    "id": 93,
    "question": "Which AWS service enables you to troubleshoot IAM policies by identifying which set of permissions are allowed and which are denied?",
    "correct": ["AWS Policy Simulator"],
    "distractors": ["AWS Policy Manager", "AWS CloudTrail", "AWS SCPs"],
    "explanation": "IAM Policy Simulator helps troubleshoot permissions."
  },
  {
    "id": 94,
    "question": "As part of your regular compliance processes, you are required to regularly audit the list of your IAM users and review information such as if they have been configured with passwords and access keys, as well as if MFA has been enabled on those accounts. Which AWS IAM service enables you to produce regular reports containing the preceding information?",
    "correct": ["IAM Credentials Report"],
    "distractors": ["IAM MFA Report", "AWS CloudWatch", "AWS Config"],
    "explanation": "IAM Credentials Report provides password, access key, and MFA status."
  },
  {
    "id": 95,
    "question": "Which type of AWS policy enables you to define boundaries against what an IAM user or IAM role can be permitted to do in your AWS account?",
    "correct": ["Permission boundaries"],
    "distractors": ["IAM policies", "Resource-based policies", "SCPs"],
    "explanation": "Permission boundaries set the maximum permissions for users/roles."
  },
  {
    "id": 96,
    "question": "Which type of AWS policy enables you to control the maximum set of permissions that can be defined for AWS member accounts of an organization?",
    "correct": ["SCPs"],
    "distractors": ["IAM policies", "Resource-based policies", "Permission boundaries"],
    "explanation": "Service Control Policies (SCPs) set maximum permissions at the organization level."
  },
  {
    "id": 97,
    "question": "Which of the following Amazon S3 storage classes can help you reduce the cost of storage for objects that are infrequently accessed, and yet still give you instant access when you need it?",
    "correct": ["Amazon S3 Standard-IA"],
    "distractors": ["Amazon S3 Glacier", "Amazon S3 Glacier Deep Archive", "Amazon S3 Standard"],
    "explanation": "S3 Standard-IA offers instant access at lower cost for infrequent access."
  },
  {
    "id": 98,
    "question": "You are hosting an Amazon S3 bucket that contains important documents, and you want to enhance security whereby IAM users who try to access the objects can only do so from within the corporate office network. How would you configure your S3 bucket to fulfill this requirement?",
    "correct": ["Create a resource policy granting the necessary level of access with a condition statement that defines and specifies the corporate office IP block."],
    "distractors": [
      "Create a resource policy... with a condition statement that specifies your corporate IAM users' accounts.",
      "Create an SCP granting access with a condition statement that specifies the corporate office IP block.",
      "Create an Amazon S3 Access Control List (ACL) with a condition statement..."
    ],
    "explanation": "S3 Bucket Policy with IP condition is the correct approach."
  },
  {
    "id": 99,
    "question": "Which type of Amazon S3 Storage class is cost-effective where you are unsure of your access patterns for the data contained within the S3 bucket?",
    "correct": ["Amazon S3 Intelligent Tiering"],
    "distractors": ["Amazon S3 Standard storage class", "Amazon S3 Standard-IA storage class", "Amazon S3 One-Zone IA"],
    "explanation": "Intelligent Tiering automatically moves objects between tiers based on access patterns."
  },
  {
    "id": 100,
    "question": "Your junior colleague accidentally deleted some financial data that was stored in an Amazon S3 bucket. How can you prevent such accidental deletions of data in Amazon S3?",
    "correct": ["Set up Amazon S3 Versioning on your S3 bucket."],
    "distractors": ["Do not give junior administrators access to Amazon S3.", "Set up Amazon S3 Lifecycle Management.", "Set up Amazon S3 Termination Protection."],
    "explanation": "S3 Versioning protects against accidental deletions (adds delete markers)."
  },
  {
    "id": 101,
    "question": "Which feature of Amazon S3 enables you to create a secondary copy of your objects in a given S3 bucket that will be stored in a different Region for compliance purposes?",
    "correct": ["Amazon S3 Cross-Region Replication (CRR)"],
    "distractors": ["Amazon S3 Same Region Replication", "Amazon S3 Versioning", "Amazon S3 Multi-Copy"],
    "explanation": "CRR replicates objects to another Region for compliance/DR."
  },
  {
    "id": 102,
    "question": "Company policy dictates that objects stored in Amazon S3 must be encrypted at rest. It is also mandated that your choice of encryption should offer an auditing feature that shows when your Customer Master Key (CMK) was used and by whom. Which type of Amazon S3 encryption option will you need to configure to fulfill the requirements?",
    "correct": ["Server-Side Encryption with KMS keys stored in AWS Key Management Service (SSE-KMS)"],
    "distractors": ["Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)", "Client-Side Encryption", "Server-Side Encryption with KMS keys stored in AWS Key Management Service (SSE-KMS) Bitlocker"],
    "explanation": "SSE-KMS provides CloudTrail auditing of key usage."
  },
  {
    "id": 103,
    "question": "You need to retrieve a small subset of some archive data urgently to resolve a pending investigation. The data is stored in the Amazon S3 Glacier storage class. Which retrieval option can use to access the data urgently?",
    "correct": ["Expedited retrieval option"],
    "distractors": ["Standard retrieval option", "Bulk retrieval option", "Power retrieval option"],
    "explanation": "Expedited retrieval returns data in 1–5 minutes."
  },
  {
    "id": 104,
    "question": "You have a team of remote workers who need to upload research documents and videos to your Amazon S3 bucket hosted in the us-east-1 Region. You would like to ensure that your remote staff can upload research material with low latency access. What can you do to reduce speed variability for uploads, which are often experienced due to the architecture of the public internet?",
    "correct": ["Enable Amazon S3 Transfer Acceleration (S3TA) for your bucket."],
    "distractors": ["Configure an IPSec site-to-site VPN connection...", "Use the Amazon Storage Gateway service.", "Set up Amazon Express Route."],
    "explanation": "S3 Transfer Acceleration uses CloudFront edge locations for faster uploads."
  },
  {
    "id": 105,
    "question": "You need to transfer large amounts of data from your on-premises network to the Amazon S3 platform. The total data capacity is around 400 TB. You have decided to opt for the Amazon Snowball Edge service to complete the transfer. No data compute or processing is required. Which flavor of the Amazon Snowball Edge service would you recommend?",
    "correct": ["Snowball Edge Storage Optimized"],
    "distractors": ["Snowball Edge Compute Optimized", "Snowball Edge Data Optimized", "Snowball Edge Function Optimized"],
    "explanation": "Storage Optimized version is ideal for large-scale data migration."
  },
  {
    "id": 106,
    "question": "You host several Microsoft Windows applications on-premises that need low latency access to large amounts of storage. You would like to use the Amazon Storage Gateway service to host all application-level data. Which gateway option would you recommend?",
    "correct": ["Amazon FSx File Gateway"],
    "distractors": ["Amazon S3 File Gateway", "Volume Gateway Cached Mode", "Tape Gateway"],
    "explanation": "FSx File Gateway is designed for Windows applications with AD integration."
  },
  {
    "id": 107,
    "question": "Following best practices, you have deployed your application servers within the private subnets of a VPC. However, these servers require internet access to download updates and security patches. Which type of resource can enable you to grant internet access to EC2 instances in private subnets without having to assign public IP addresses to those instances?",
    "correct": ["NAT gateway"],
    "distractors": ["Internet gateway", "Subnet", "Route table"],
    "explanation": "NAT Gateway allows outbound internet access from private subnets."
  },
  {
    "id": 108,
    "question": "Which of the following statements is true about security groups?",
    "correct": ["Security groups are stateful and you do not need to configure both inbound and the corresponding outbound rules for traffic to flow bidirectionally."],
    "distractors": [
      "Security groups are stateful and you need to configure both inbound and the corresponding outbound rules...",
      "Security groups are stateless...",
      "Security groups can be used to explicitly deny inbound traffic from a specific IP address range."
    ],
    "explanation": "Security Groups are stateful – return traffic is automatically allowed."
  },
  {
    "id": 109,
    "question": "Which feature of the AWS VPC service enables you to connect multiple VPCs so that traffic between those VPCs can be sent using private IP address space?",
    "correct": ["VPC peering"],
    "distractors": ["VPC Flow Logs", "Subnets", "VPC endpoints"],
    "explanation": "VPC Peering connects VPCs privately."
  },
  {
    "id": 110,
    "question": "Which service enables you to reduce the complexity associated with establishing multiple VPC peering connections?",
    "correct": ["AWS Transit Gateway"],
    "distractors": ["AWS VPC Manager", "AWS Direct Connect", "IPSec VPN Tunnel"],
    "explanation": "Transit Gateway uses a hub-and-spoke model to simplify connections."
  },
  {
    "id": 111,
    "question": "Which AWS service enables you to connect your on-premises network to your AWS account using a dedicated private connection that bypasses the internet altogether?",
    "correct": ["Direct Connect"],
    "distractors": ["IPSec VPN", "Express Route", "Snowball"],
    "explanation": "AWS Direct Connect provides dedicated private connectivity."
  },
  {
    "id": 112,
    "question": "Which AWS feature can help you establish connectivity between your on-premises network and your AWS VPC using an IPSec tunnel?",
    "correct": ["Virtual Private Network (VPN)"],
    "distractors": ["Direct Connect", "AWS Outposts", "Amazon SNS"],
    "explanation": "Site-to-Site VPN uses IPSec tunnels over the internet."
  },
  {
    "id": 113,
    "question": "You are about to publish your web application using an Application Load Balancer (ALB) and would like to use a friendly domain name to advertise the site to your users rather than the ALB's DNS name. Which AWS service can you use to configure the alias's name so that when users type in the friendly domain name into the browser, they are directed to the ALB's DNS URL?",
    "correct": ["Amazon Route53"],
    "distractors": ["Amazon CloudFront", "Amazon S3", "Amazon Direct Connect"],
    "explanation": "Route 53 alias records point to AWS resources like ALB."
  },
  {
    "id": 114,
    "question": "Which AWS service enables you to purchase and register new domain names that can be used to publish your website on the internet?",
    "correct": ["Route53"],
    "distractors": ["VPC", "RDS", "Elastic Beanstalk"],
    "explanation": "Route 53 provides domain registration."
  },
  {
    "id": 115,
    "question": "You have developed a web application that you want to offer redundancy and resilience for. Which feature of the Amazon Route53 service can help you design your web application with a primary site where all users' traffic is directed to, by default, and if the primary site is offline, then users are redirected to a secondary site located in a different Region.",
    "correct": ["Failover routing policy"],
    "distractors": ["Simple routing policy", "Weighted routing policy", "Geolocation routing policy"],
    "explanation": "Failover routing provides active-passive high availability across Regions."
  },
  {
    "id": 116,
    "question": "You plan to host a new Amazon S3 static website through which you will offer free recipe guides. The site is going to be accessed by users across the globe. The site contains lots of videos and images about the recipes you offer. Which AWS service can help you cache your digital assets locally to where users are located and thus reduce latency when your users access content on your website?",
    "correct": ["Amazon CloudFront"],
    "distractors": ["Amazon Route53", "Amazon VPC", "Amazon Cloud9"],
    "explanation": "CloudFront is a CDN that caches content at edge locations."
  },
  {
    "id": 117,
    "question": "You have created an EC2 AMI that contains the base operating system and all necessary corporate settings/configurations. Your colleagues in another Region are trying to launch new EC2 instances but they are unable to access your AMI. What do you need to do so that your colleagues can use the new image?",
    "correct": ["Copy the AMI to other Regions."],
    "distractors": ["Set up a VPC endpoint between the Regions...", "Copy the AMI to an S3 bucket.", "Use the Amazon Snowball service..."],
    "explanation": "AMIs must be copied to other Regions to be used there."
  },
  {
    "id": 118,
    "question": "Which EC2 instance type is designed for floating-point number calculations, graphics processing, or data pattern matching?",
    "correct": ["Accelerated Computing"],
    "distractors": ["General Purpose", "Memory-Optimized", "Compute Optimized"],
    "explanation": "Accelerated Computing instances include GPUs and other hardware accelerators."
  },
  {
    "id": 119,
    "question": "You need to deploy a certain third-party application on an EC2 instance where the licensing term is based on a per-CPU core/socket basis. Which EC2 pricing option do you need to use for this requirement?",
    "correct": ["Dedicated Host"],
    "distractors": ["On-Demand", "Reserved Instance", "Spot Instance"],
    "explanation": "Dedicated Hosts provide visibility and control for per-core licensing."
  },
  {
    "id": 120,
    "question": "You are currently running a test phase for a new application that is being developed in-house. Your UAT testers will need to access test servers for 3 hours a day, three times a week. The test phase is supposed to last 5 weeks. You cannot afford any interruptions to the application while the tests are being run. Which EC2 pricing option will be the most cost-effective?",
    "correct": ["On-Demand"],
    "distractors": ["Reserved", "Spot", "Dedicated Host"],
    "explanation": "On-Demand is best for short, uninterrupted test workloads."
  },
  {
    "id": 121,
    "question": "Which EBS volume type is designed for critical, I/O-intensive databases and application workloads?",
    "correct": ["io1"],
    "distractors": ["gp2", "st1", "sc1"],
    "explanation": "io1 (Provisioned IOPS SSD) is designed for I/O-intensive workloads like databases."
  },
  {
    "id": 122,
    "question": "Which of the following payment options will help you achieve the maximum discount for your RIs?",
    "correct": ["A 3-year commitment with payment made using the All Upfront option."],
    "distractors": [
      "A 1-year commitment with payment made using the Partial Upfront option.",
      "A 1-year commitment with payment made using the All Upfront option.",
      "A 1-year commitment with payment made using the No Upfront option."
    ],
    "explanation": "3-year All Upfront Reserved Instances give the maximum discount."
  },
  {
    "id": 123,
    "question": "Which AWS service enables you to quickly deploy a Virtual Private Server (VPS) that comes preconfigured with common application stacks, SSD storage, and fixed IP addresses for a fixed monthly fee based on the configuration of the server?",
    "correct": ["Amazon Lightsail"],
    "distractors": ["Amazon EC2", "Amazon ECS", "Amazon ECR"],
    "explanation": "Amazon Lightsail offers simple VPS with fixed monthly pricing."
  },
  {
    "id": 124,
    "question": "You are planning on deploying a Docker application on AWS. You wish to deploy your Docker image without having to manage EC2 instances such as provisioning and scaling clusters, or patching and updating virtual servers yourself. Which service enables you to fulfill this requirement?",
    "correct": ["Amazon ECS deployed using the Fargate Launch Type"],
    "distractors": [
      "Amazon ECS deployed using the EC2 Launch Type",
      "Amazon ECS deployed using ECR",
      "Amazon ECS deployed with Lambda functions to manage your servers"
    ],
    "explanation": "Fargate is serverless — AWS manages the underlying infrastructure."
  },
  {
    "id": 125,
    "question": "Which of the following services is part of the AWS serverless offering that allows you to run code in response to a trigger or event?",
    "correct": ["AWS Lambda"],
    "distractors": ["Amazon ECS", "Amazon EC2", "AWS CloudFront"],
    "explanation": "AWS Lambda is the serverless FaaS service."
  },
  {
    "id": 126,
    "question": "Which AWS storage option is designed to offer file sharing capabilities for Windows-aware applications and offers options for integration with Microsoft Active Directory?",
    "correct": ["Amazon FSx for Windows File Server"],
    "distractors": ["AWS FSx for Lustre", "AWS Elastic File System", "AWS instance store volumes"],
    "explanation": "FSx for Windows File Server supports SMB and Active Directory."
  },
  {
    "id": 127,
    "question": "You are planning on deploying 10 EC2 instances across two Availability Zones that will host the new line of business applications. All the servers will need to share common files and will run the Amazon Linux 2 operating system. Which storage architecture would you recommend to host the shared files for your application servers?",
    "correct": ["Amazon Elastic File System (EFS)"],
    "distractors": ["Amazon FSx Lustre", "Amazon S3", "Amazon EBS"],
    "explanation": "EFS provides shared file storage for Linux EC2 instances across AZs."
  },
  {
    "id": 128,
    "question": "You have just launched a Windows EC2 instance. How can you obtain the Windows local administrator password?",
    "correct": ["Use the key pair to decrypt the password."],
    "distractors": ["Raise a support request with Amazon to obtain the password.", "The password is sent to you automatically via email.", "The password is sent to you via an SMS text message to your registered mobile."],
    "explanation": "Use the key pair in the console to decrypt the Windows admin password."
  },
  {
    "id": 129,
    "question": "Which AWS service enables you to configure a hybrid solution by extending AWS Infrastructure so that EC2 and EBS services can be hosted in your on-premise data center?",
    "correct": ["AWS Outposts"],
    "distractors": ["AWS RDS", "AWS Direct Connect", "AWS Route53"],
    "explanation": "AWS Outposts extends AWS infrastructure to your on-premises data center."
  },
  {
    "id": 130,
    "question": "Your company provides spread betting services. You wish to run an end of day analysis against the day's transaction costs and carry out the necessary market analysis. Which AWS service dynamically provisions the necessary compute services that will scale based on the volume and resource requirements of your submitted jobs?",
    "correct": ["AWS Batch"],
    "distractors": ["AWS CloudFront", "AWS Lambda", "AWS Blockchain"],
    "explanation": "AWS Batch manages batch computing jobs and dynamically provisions resources."
  },
  {
    "id": 131,
    "question": "Which AWS service can help you deploy, manage, and scale containerized applications using Kubernetes on AWS?",
    "correct": ["Amazon EKS"],
    "distractors": ["Amazon ECS", "Amazon MFA", "Amazon EC2"],
    "explanation": "Amazon Elastic Kubernetes Service (EKS) manages Kubernetes on AWS."
  },
  {
    "id": 132,
    "question": "Which of the following statements is an example of an advantage of using Amazon RDS over databases installed on EC2 instances?",
    "correct": ["Amazon RDS is a fully managed database where AWS manages the underlying compute and storage architecture, as well as patching and updates."],
    "distractors": [
      "Amazon RDS grants you access to the operating system...",
      "Amazon RDS is faster than running the Microsoft SQL Server database on EC2 instances.",
      "Amazon RDS automatically enables encryption of the data in Amazon RDS."
    ],
    "explanation": "RDS is fully managed — AWS handles OS, patching, backups, etc."
  },
  {
    "id": 133,
    "question": "Which feature of Amazon RDS enables you to create a standby copy of the database and offer failover capabilities if the master copy fails?",
    "correct": ["Multi-AZ"],
    "distractors": ["Read Replicas", "Failover policy", "Snapshots"],
    "explanation": "Multi-AZ provides synchronous standby for automatic failover."
  },
  {
    "id": 134,
    "question": "Your company is planning to migrate its on-premises MySQL database to Amazon RDS. Which service will enable you to perform the migration?",
    "correct": ["Amazon Database Migration Service (DMS)"],
    "distractors": ["Amazon Server Migration Service (SMS)", "Amazon VM Import Export", "Amazon Redshift Migration Utility"],
    "explanation": "AWS DMS handles database migrations (homogeneous or heterogeneous)."
  },
  {
    "id": 135,
    "question": "Which feature of AWS Redshift allows you to perform SQL queries against data stored directly on Amazon S3 buckets?",
    "correct": ["Redshift Spectrum"],
    "distractors": ["Redshift leader node", "Redshift Copy", "Redshift Streams"],
    "explanation": "Redshift Spectrum queries data directly in S3."
  },
  {
    "id": 136,
    "question": "Which Amazon RDS engine offers high resilience with copies of the database placed across a minimum of three Availability Zones?",
    "correct": ["Amazon Aurora"],
    "distractors": ["MySQL", "PostgreSQL", "Microsoft SQL Server"],
    "explanation": "Aurora replicates across 3 AZs by default."
  },
  {
    "id": 137,
    "question": "Which AWS-managed database service enables you to store data using complex structures with options for nested attributes, such as a JSON-style document?",
    "correct": ["Amazon DynamoDB"],
    "distractors": ["Amazon RDS", "Amazon Redshift", "Amazon Aurora"],
    "explanation": "DynamoDB is a NoSQL document/key-value database."
  },
  {
    "id": 138,
    "question": "Which AWS database service is designed to store sensitive data that is immutable and where the transactional logs are cryptographically verifiable?",
    "correct": ["AWS QLDB"],
    "distractors": ["Amazon Neptune", "Amazon Aurora", "Amazon RDS"],
    "explanation": "Quantum Ledger Database (QLDB) provides immutable, cryptographically verifiable logs."
  },
  {
    "id": 139,
    "question": "You are currently performing a manual snapshot of your single instance MySQL Amazon RDS database every 4 hours. Some users have complained that the application that connects to the database experiences a brief outage when the backup process initializes. What can you do to resolve this issue?",
    "correct": ["Configure your Amazon RDS database with Multi-AZ."],
    "distractors": ["Configure your Amazon RDS database with Read Replicas.", "Configure an AWS backup to perform the RDS database backups.", "Use the DMS service to migrate the MySQL database to Microsoft SQL Server."],
    "explanation": "Multi-AZ takes backups from the standby instance, avoiding I/O suspension."
  },
  {
    "id": 140,
    "question": "Your organization is in a healthcare industry based in New York. You are planning on using an in-memory caching engine to alleviate the load on your Amazon RDS database for frequently used queries. Which AWS in-memory caching engine offers Multi-AZ capabilities, encryption of data, and compliance with the Health Insurance Portability and Accountability Act (HIPAA)?",
    "correct": ["Amazon Elasticache for Redis"],
    "distractors": ["Amazon Elasticache for Memcached", "Amazon CloudFront", "Amazon DynamoDB DAX"],
    "explanation": "ElastiCache for Redis supports Multi-AZ, encryption, and HIPAA compliance."
  },
  {
    "id": 141,
    "question": "Which AWS service offers a fully managed data warehousing capability and enables you to analyze large datasets using standard SQL and Business Intelligence (BI) tools?",
    "correct": ["Amazon Redshift"],
    "distractors": ["Amazon RDS", "Amazon QLDB", "Amazon Aurora"],
    "explanation": "Redshift is AWS’s fully managed data warehouse."
  },
  {
    "id": 142,
    "question": "Which of the following services further increase your EC2 instances' costs? (Choose two)",
    "correct": ["Detailed monitoring", "Use of Elastic Load Balancers"],
    "distractors": ["S3 buckets that you connect to", "DynamoDB tables that you query", "Setting up multiple key pairs"],
    "explanation": "Detailed monitoring and ELBs incur additional charges."
  },
  {
    "id": 143,
    "question": "Your developer team needs to deploy an Elastic Load Balancer that will direct traffic to your web servers based on the URL path and over the HTTPS protocol. Which Elastic Load Balancer would you recommend?",
    "correct": ["ALB"],
    "distractors": ["Network Load Balancer", "Gateway Load Balancer", "Classic Load Balancer"],
    "explanation": "Application Load Balancer (ALB) supports path-based routing and HTTPS."
  },
  {
    "id": 144,
    "question": "Which feature of the Elastic Load Balancer service is suitable for Transmission Control Protocol (TCP), User Datagram Protocol (UDP), and Transport Layer Security (TLS) type traffic and operates at layer 4 of the Open Systems Interconnection (OSI) model?",
    "correct": ["Network Load Balancer"],
    "distractors": ["ALB", "Gateway Load Balancer", "Classic Load Balancer"],
    "explanation": "Network Load Balancer operates at Layer 4."
  },
  {
    "id": 145,
    "question": "Which of the following statements is true about Elastic Load Balancers?",
    "correct": ["Elastic Load Balancers enable you to achieve high availability within a single Region by distributing incoming web traffic to targets located in multiple Availability Zones."],
    "distractors": [
      "Elastic Load Balancers act as firewalls to protect the application running on your EC2 instances.",
      "Elastic Load Balancers enable you to achieve high availability across multiple Regions...",
      "Elastic Load Balancers enable you to scale horizontally by provisioning or terminating EC2 instances..."
    ],
    "explanation": "ELBs distribute traffic across AZs within a Region for high availability."
  },
  {
    "id": 146,
    "question": "Which component of an Elastic Load Balancer do you need to configure to ensure you accept traffic on a designated port and forward that traffic on a specific port to your EC2 instances behind the load balancer?",
    "correct": ["Listener"],
    "distractors": ["Port forwarder", "NAT Gateway", "Echo"],
    "explanation": "Listeners define the port and protocol for incoming traffic."
  },
  {
    "id": 147,
    "question": "You are building a multi-tier architecture with web servers placed in the public subnet and application servers placed in the private subnet of your VPC. Which type of load balancer would you choose to distribute traffic to your application servers?",
    "correct": ["Internal load balancers"],
    "distractors": ["Internet-facing", "Dynamic load balancers", "Static load balancers"],
    "explanation": "Internal Load Balancers are used for private subnets."
  },
  {
    "id": 148,
    "question": "Which configuration feature of the AWS Auto Scaling service enables you to define a maximum number of EC2 instances that can be launched in your fleet?",
    "correct": ["Auto Scaling group"],
    "distractors": ["Auto Scaling Launch Configuration", "Auto Scaling MaxFleet Size", "Auto Scaling policy"],
    "explanation": "The Auto Scaling group defines min, max, and desired capacity."
  },
  {
    "id": 149,
    "question": "Which AWS service can help you provision only the necessary number of EC2 instances required to meet application demand, thus saving on costs usually associated with overprovisioning resources?",
    "correct": ["Auto Scaling"],
    "distractors": ["Elastic Load Balancer", "Cost Explorer", "EC2 Launcher"],
    "explanation": "Auto Scaling automatically adjusts capacity based on demand."
  },
  {
    "id": 150,
    "question": "You have recently launched a new free coupon web application across a fleet of EC2 instances configured in an Auto Scaling group. Traffic has increased dramatically before the Black Friday sale and you have noticed that your Auto Scaling service is not launching any more EC2 instances, even though the threshold metrics have been crossed in CloudWatch. Your colleague tells you that you may have crossed a quota or limit on the number of EC2 instances you can launch. Which AWS service can offer you a quick look to determine this is the case?",
    "correct": ["AWS Trusted Advisor"],
    "distractors": ["Personal Health Dashboard", "AWS Systems Manager", "AWS Config"],
    "explanation": "Trusted Advisor shows service quota usage."
  },
  {
    "id": 151,
    "question": "Which firewall protection service does the ALB offer to help protect against common web exploits such as cross-site scripting and SQL injection?",
    "correct": ["AWS WAF"],
    "distractors": ["AWS Shield", "Amazon Guard Duty", "Network Access Control Lists (NACLs)"],
    "explanation": "AWS WAF integrates with ALB for web exploit protection."
  },
  {
    "id": 152,
    "question": "Which dynamic scaling policy offered by the Amazon Auto Scaling service can help you launch or terminate EC2 instances in the fleet based on the target value of a specific metric?",
    "correct": ["Target tracking scaling policy"],
    "distractors": ["Step scaling policy", "Simple scaling policy", "Predictable scaling policy"],
    "explanation": "Target Tracking automatically adjusts capacity to maintain a target metric value."
  },
  {
    "id": 153,
    "question": "You plan to use Amazon CloudWatch to send out alerts whenever the CPU utilization on your production EC2 instances is more than 80% for 15 minutes. Which AWS service can you use to send out this alert notification?",
    "correct": ["Amazon SNS"],
    "distractors": ["Amazon SES", "Amazon SQS", "Amazon MQ"],
    "explanation": "SNS is used to send notifications from CloudWatch alarms."
  },
  {
    "id": 154,
    "question": "Which feature of the Amazon SNS service enables you to push notification messages to multiple endpoints in parallel?",
    "correct": ["You can use the SNS Fanout scenario to help you push notifications to multiple endpoints."],
    "distractors": ["You can use SNS FIFO topics...", "You can change the timeout period...", "To send out notifications to multiple endpoints, you will need to configure Amazon SQS..."],
    "explanation": "SNS Fanout allows publishing to multiple subscribers."
  },
  {
    "id": 155,
    "question": "Which AWS service enables you to design your application architecture by decoupling its components into distributed systems and facilitating the design and architecture of microservices?",
    "correct": ["Amazon Simple Queue Service (SQS)"],
    "distractors": ["Amazon SNS", "Amazon MQ", "Amazon Redshift"],
    "explanation": "SQS decouples application components."
  },
  {
    "id": 156,
    "question": "You plan to use Amazon SQS to help decouple your application components. Which queue type will help you ensure that the message order from one component to another is preserved?",
    "correct": ["Configure Amazon SQS with a FIFO queue."],
    "distractors": ["Configure Amazon SQS with a standard queue.", "Configure Amazon SQS with a LIFO queue.", "Configure Amazon SQS with a DLQ."],
    "explanation": "FIFO queues preserve order and ensure exactly-once delivery."
  },
  {
    "id": 157,
    "question": "You are planning on migrating an application to the cloud. Which message brokering service will enable you to continue to use Apache ActiveMQ and facilitate communications between application components?",
    "correct": ["Amazon MQ"],
    "distractors": ["Amazon SQS", "Amazon SNS", "Amazon SES"],
    "explanation": "Amazon MQ supports ActiveMQ and other protocols."
  },
  {
    "id": 158,
    "question": "Which AWS service can help you trigger a Lambda function based on an event such as an object being deleted from an Amazon S3 bucket?",
    "correct": ["AWS EventBridge"],
    "distractors": ["AWS ECS", "AWS Batch", "Amazon CloudTrail"],
    "explanation": "EventBridge (formerly CloudWatch Events) triggers Lambda on S3 events."
  },
  {
    "id": 159,
    "question": "Your application architecture for an insurance claim solution has a workflow process that can take up to 30 days to complete and requires human intervention in the form of manual approval processes to follow. Which AWS service would you recommend for architecting the workflow process?",
    "correct": ["Amazon Step Functions"],
    "distractors": ["Amazon SQS", "AWS CloudFormation", "AWS Lambda"],
    "explanation": "Step Functions manages long-running workflows with human approval steps."
  },
  {
    "id": 160,
    "question": "You plan to configure a Lambda function that will be used to automatically start and stop EC2 instances at the start and close of the business day, respectively. How can you automate the start and stop of EC2 instances according to a specified schedule?",
    "correct": ["Configure Amazon CloudWatch Events with a rule to trigger the Lambda function at the designated schedule."],
    "distractors": ["Configure Amazon SNS...", "Configure Amazon CloudTrail...", "Configure the Amazon Scheduler service."],
    "explanation": "CloudWatch Events (EventBridge) schedules trigger Lambda."
  },
  {
    "id": 161,
    "question": "You need to run certain SQL queries to analyze data from a streaming source and conduct analysis. Which of the following services can you use to analyze stream data in real time?",
    "correct": ["Amazon Kinesis Analytics"],
    "distractors": ["Amazon SQS", "Amazon Kinesis Data Streams", "Amazon Athena"],
    "explanation": "Kinesis Data Analytics allows real-time SQL queries on streaming data."
  },
  {
    "id": 162,
    "question": "You are required to run ad hoc test queries against weekly reports that are stored in Amazon S3. Which AWS service can you use to query raw data in Amazon S3 using standard SQL?",
    "correct": ["Amazon Athena"],
    "distractors": ["Amazon Kinesis", "Amazon RDS", "Amazon Redshift"],
    "explanation": "Athena is serverless and queries data directly in S3."
  },
  {
    "id": 163,
    "question": "Which AWS service can be used to load a massive amount of streaming data into your Redshift data warehousing solution in near real time?",
    "correct": ["Amazon Kinesis Firehose"],
    "distractors": ["Amazon Kinesis Data Streams", "Amazon Kinesis Video Streams", "Amazon Athena"],
    "explanation": "Kinesis Firehose loads streaming data into Redshift."
  },
  {
    "id": 164,
    "question": "Which AWS service can be used to create and publish interactive BI dashboards that can be embedded into your applications, websites, and portals using Amazon-provided APIs and SDKs?",
    "correct": ["Amazon QuickSight"],
    "distractors": ["Amazon Athena", "Amazon Config", "Amazon Glue"],
    "explanation": "QuickSight is AWS’s BI dashboard service."
  },
  {
    "id": 165,
    "question": "Which AWS service offers a serverless Extract, Transform, and Load (ETL) solution that's used to discover and extract data from various sources and perform any cleaning or normalization on data warehouses and data lakes, before loading them into databases?",
    "correct": ["Amazon Glue"],
    "distractors": ["AWS QuickSight", "Amazon Athena", "Amazon CloudTrail"],
    "explanation": "AWS Glue is a fully managed serverless ETL service."
  },

  {
    "id": 166,
    "question": "As part of your migration to the cloud, you need to re-host an application that uses Apache Spark to process vast amounts of data for a big data project. Which service on AWS can you use to help with data transformation and perform ETL jobs such as sort, aggregate, and join on large datasets?",
    "correct": ["Amazon EMR"],
    "distractors": ["AWS QuickSight", "Amazon EFS", "Amazon S3"],
    "explanation": "Amazon EMR is a managed Hadoop framework that supports Apache Spark for big data processing."
  },
  {
    "id": 167,
    "question": "You need to regularly build test environments for new applications currently under development. Which AWS service can you use to automate the infrastructure build of your test environment and thus reduce the time taken to provision the infrastructure required?",
    "correct": ["Amazon CloudFormation"],
    "distractors": ["Amazon Elastic Beanstalk", "AWS OpsWorks", "AWS Systems Manager"],
    "explanation": "CloudFormation allows you to define and automate infrastructure as code."
  },
  {
    "id": 168,
    "question": "Which service can be used to orchestrate and configure environments to deploy applications using the Chef and Puppet enterprise tools?",
    "correct": ["AWS OpsWorks"],
    "distractors": ["Amazon CloudFormation", "Amazon Elastic Beanstalk", "Amazon Cloud9"],
    "explanation": "AWS OpsWorks uses Chef and Puppet for configuration management."
  },
  {
    "id": 169,
    "question": "Which service enables developers to upload code to AWS and have the necessary infrastructure provisioned and managed to support that application?",
    "correct": ["Amazon Elastic Beanstalk"],
    "distractors": ["Amazon CloudFormation", "Amazon Cloud9", "AWS OpsWorks"],
    "explanation": "Elastic Beanstalk handles deployment and management of applications."
  },
  {
    "id": 170,
    "question": "Which of the following environment tiers within the Elastic Beanstalk architecture is designed to support backend operations?",
    "correct": ["Worker tier"],
    "distractors": ["Web services tier", "Backend tier", "Database tier"],
    "explanation": "The Worker tier in Elastic Beanstalk handles background processing tasks."
  },
  {
    "id": 171,
    "question": "Which of the following formats are CloudFormation templates written in? (Choose two)",
    "correct": ["YAML", "JSON"],
    "distractors": ["XML", "CSV", "JAVA"],
    "explanation": "CloudFormation templates support JSON and YAML formats."
  },
  {
    "id": 172,
    "question": "Which of the following is an example of a custom CloudWatch metric?",
    "correct": ["Memory"],
    "distractors": ["CPU utilization", "Disk read in", "Network bytes in"],
    "explanation": "Memory usage is a custom metric that requires the CloudWatch agent."
  },
  {
    "id": 173,
    "question": "Which feature of CloudWatch can help send you notification alerts via Amazon SNS whenever a particular threshold is breached for a specified period?",
    "correct": ["Alarms"],
    "distractors": ["Dashboards", "Logs", "Events"],
    "explanation": "CloudWatch Alarms trigger SNS notifications when thresholds are breached."
  },
  {
    "id": 174,
    "question": "You plan to use CloudWatch Logs to monitor network traffic that enters the AWS environment that's been specifically destined for an EC2 instance. You would like to record all inbound network traffic on port 80 that was accepted. What service can you configure to help you achieve this requirement?",
    "correct": ["VPC Flow Logs"],
    "distractors": ["ALB access logs", "CloudTrail Logs", "Config logs"],
    "explanation": "VPC Flow Logs capture IP traffic to and from network interfaces."
  },
  {
    "id": 175,
    "question": "Which AWS service enables you to track user activity and API usage in your AWS account for auditing purposes?",
    "correct": ["AWS CloudTrail"],
    "distractors": ["AWS Config", "AWS CloudWatch", "AWS Trusted Advisor"],
    "explanation": "CloudTrail logs API calls and user activity for auditing."
  },
  {
    "id": 176,
    "question": "Which AWS service can be used to see how resources are interrelated to each other, how they were configured in the past, and view historical changes to those resources over time?",
    "correct": ["AWS Config"],
    "distractors": ["AWS Trusted Advisor", "AWS Systems Manager", "AWS IAM"],
    "explanation": "AWS Config tracks resource configuration history and changes."
  },
  {
    "id": 177,
    "question": "Which feature of the AWS System Manager service enables you to roll out security patches across EC2 instances and on-premises servers?",
    "correct": ["Patch Manager"],
    "distractors": ["Microsoft WSUS", "AWS Config", "SCCM"],
    "explanation": "Systems Manager Patch Manager automates patching."
  },
  {
    "id": 178,
    "question": "You are planning on deploying a three-tier application architecture that is comprised of a database backend. Your application has been hardcoded with the database connection strings and secrets such as username and password. The company's security policy dictates that this approach is unacceptable and they would like you to manage the secrets information more securely. What would you recommend?",
    "correct": ["Store the configuration information in the SSM Parameter Store and reference the parameter name from your code to dynamically retrieve the connection information."],
    "distractors": [
      "Store the configuration information in Amazon Redshift...",
      "Store the configuration information in Amazon S3...",
      "Store the configuration information on an EBS volume..."
    ],
    "explanation": "SSM Parameter Store securely stores and retrieves configuration data and secrets."
  },
  {
    "id": 179,
    "question": "Which AWS service can be used to manage and resolve incidents that affect their AWS-hosted applications?",
    "correct": ["AWS Systems Manager Incident Manager"],
    "distractors": ["AWS Systems Manager Event Manager", "Amazon EventBridge", "AWS Personal Health Dashboard (PHD)"],
    "explanation": "Systems Manager Incident Manager helps manage and resolve incidents."
  },
  {
    "id": 180,
    "question": "Which AWS service can be used to identify resources that have not been configured by following security best practices?",
    "correct": ["AWS Trusted Advisor"],
    "distractors": ["AWS CloudWatch", "AWS IAM", "AWS CloudTrail"],
    "explanation": "Trusted Advisor checks for security best practices and cost optimization."
  },
  {
    "id": 181,
    "question": "You are trying to review the AWS Trusted Advisor service to analyze potential cost savings opportunities for various workloads you have deployed on AWS. However, you have noticed that the Cost Optimization category is grayed out and there are no reports on current configuration states. What could be preventing you from viewing the Cost Optimization report?",
    "correct": ["You have not subscribed to either the business or enterprise support plans."],
    "distractors": [
      "You do not have enough permissions to access the Cost Optimization category on AWS Trusted Advisor.",
      "You have logged in with an IAM account and only the root user can access pricing and cost information.",
      "The AWS account does not have an active debit/credit card associated with it."
    ],
    "explanation": "Full Trusted Advisor checks require Business or Enterprise Support."
  },
  {
    "id": 182,
    "question": "Which Well-Architected Framework pillar suggests that replacing failed resources is often better than trying to figure out why the failure occurred?",
    "correct": ["Reliability"],
    "distractors": ["Cost Optimization", "Fault Tolerance", "Performance"],
    "explanation": "The Reliability pillar emphasizes quick recovery, often by replacing failed resources."
  },
  {
    "id": 183,
    "question": "Which of the following services can help fulfill the guidelines provided in the performance pillar concerning ensuring low latency access to video content hosted in a single S3 bucket globally?",
    "correct": ["Use AWS CloudFront to cache the video content closer to end users."],
    "distractors": ["Use AWS DynamoDB DAX...", "Use Amazon Elasticache...", "Use Amazon Kinesis..."],
    "explanation": "CloudFront CDN reduces latency by caching content at edge locations."
  },
  {
    "id": 184,
    "question": "Which pillar of the Well-Architected Framework refers to selecting the appropriate pricing options that allow you to adopt a consumption model for provisioning various resources?",
    "correct": ["Cost Optimization pillar"],
    "distractors": ["Performance pillar", "Reliability pillar", "Fault Tolerance pillar"],
    "explanation": "Cost Optimization pillar focuses on pay-as-you-go and right-sizing."
  },
  {
    "id": 185,
    "question": "Regarding the AWS Shared Responsibility Model, who is responsible for patching Amazon RDS database instances?",
    "correct": ["AWS"],
    "distractors": ["Customer", "Database engine vendor", "Both the customer and AWS"],
    "explanation": "AWS manages patching for RDS (fully managed service)."
  },
  {
    "id": 186,
    "question": "Which AWS service gives customers access to various compliance reports that confirm if the services offered by AWS meet specific requirements and regulatory requirements?",
    "correct": ["AWS Artifacts"],
    "distractors": ["AWS CloudTrail", "AWS Acceptable Usage Policy (AUP)", "AWS Compliance Programs"],
    "explanation": "AWS Artifact provides on-demand compliance reports (SOC, PCI, etc.)."
  },
  {
    "id": 187,
    "question": "AWS allows customers to run vulnerability scans and perform penetration testing. However, certain types of testing are not permitted. Which of the following actions is the customer prohibited from performing?",
    "correct": ["Performing simulated Distributed Denial of Service (DDoS) attacks."],
    "distractors": ["Brute-force attacks by trying to guess your Amazon RDS database passwords.", "Running malware detection programs on your EC2 instances.", "Attempting to perform cross-site scripting or SQL injection tests via your ALB."],
    "explanation": "Simulated DDoS attacks are prohibited."
  },
  {
    "id": 188,
    "question": "Which AWS service enables you to encrypt data stored in your Amazon S3 buckets with a CMK and offers auditing capabilities?",
    "correct": ["Server-Side Encryption with CMKs Stored in AWS KMS (SSE-KMS)"],
    "distractors": ["Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)", "Server-Side Encryption with Customer-Provided Keys (SSE-C)", "Client-Side Encryption with Amazon-Managed Keys"],
    "explanation": "SSE-KMS integrates with CloudTrail for auditing."
  },
  {
    "id": 189,
    "question": "To meet strict compliance and regulatory requirements, you are required to encrypt the application data stored on your EC2 instances using dedicated FIPS 140-2 Level 3 validated devices. Which AWS service can you use to fulfill this requirement?",
    "correct": ["AWS CloudHSM"],
    "distractors": ["AWS KMS", "AWS TPM Hardware Modules", "AWS Certificate Manager"],
    "explanation": "CloudHSM provides dedicated FIPS 140-2 Level 3 validated hardware security modules."
  },
  {
    "id": 190,
    "question": "Which AWS security solution offers protection against DDoS attacks and features an AWS Shield Response Team (SRT) 24/7 to assist you in handling such attacks?",
    "correct": ["AWS Shield Advanced"],
    "distractors": ["AWS WAF", "AWS X-Ray", "AWS Detective"],
    "explanation": "Shield Advanced includes 24/7 SRT support."
  },
  {
    "id": 191,
    "question": "Which type of firewall solution integrates with Amazon CloudFront and ALBs to offer protection against common web exploits such as cross-site scripting and SQL injection?",
    "correct": ["AWS WAF"],
    "distractors": ["AWS Shield", "AWS X-Ray", "AWS Firewall Manager"],
    "explanation": "AWS WAF protects against web exploits at Layer 7."
  },
  {
    "id": 192,
    "question": "You are planning lots of data on Amazon S3 and you would like to monitor how your data is accessed, particularly highlighting any sensitive information such as personally identifiable information (PII). Which AWS service can help you meet this requirement?",
    "correct": ["Amazon Macie"],
    "distractors": ["AWS GuardDuty", "AWS Detective", "AWS X-Ray"],
    "explanation": "Macie discovers and alerts on sensitive data like PII in S3."
  },
  {
    "id": 193,
    "question": "You are building a mobile application that will be publicly accessible and you would like to integrate a third-party identity provider for authentication purposes, such as Facebook or Google. Which AWS service can be used to set up identity and access control solutions for your web and mobile applications?",
    "correct": ["AWS Cognito"],
    "distractors": ["AWS IAM", "Active Directory", "AWS Certificate Manager"],
    "explanation": "Cognito supports social identity federation (Google, Facebook, etc.)."
  },
  {
    "id": 194,
    "question": "Which AWS service can help detect malicious activities by analyzing data from your CloudTrail event logs, Amazon VPC Flow Logs, and DNS logs?",
    "correct": ["AWS GuardDuty"],
    "distractors": ["AWS Shield", "AWS Detective", "Amazon Macie"],
    "explanation": "GuardDuty is a threat detection service using machine learning."
  },
  {
    "id": 195,
    "question": "Which AWS service can help you determine the root cause of security issues by extracting time-based events such as logins, network traffic from Amazon VPC Flow Logs, and data ingested from GuardDuty findings?",
    "correct": ["AWS Detective"],
    "distractors": ["AWS Shield", "AWS WAF", "Amazon Macie"],
    "explanation": "Detective analyzes security findings and generates graphs for investigation."
  },
  {
    "id": 196,
    "question": "You are planning on migrating your on-premises workloads and applications to the cloud. Which AWS service enables you to capture millions of real-time data points related to your IT environment and review recommendations for right sizing and appropriately costing workloads on AWS?",
    "correct": ["AWS Migration Evaluator"],
    "distractors": ["AWS Pricing Calculator", "AWS Hybrid Calculator", "AWS Cost Explorer"],
    "explanation": "Migration Evaluator provides right-sizing recommendations and cost projections."
  },
  {
    "id": 197,
    "question": "Which EC2 instance pricing model can offer up to a 90% discount off the on-demand price and be used in scenarios where interruptions to your instances will not impact the application workflow?",
    "correct": ["Spot Instances"],
    "distractors": ["Reserved Instances", "Dedicated Instances", "Dedicated Hosts"],
    "explanation": "Spot Instances offer deep discounts for fault-tolerant workloads."
  },
  {
    "id": 198,
    "question": "Which Amazon S3 storage class enables you to host 48 TB or 96 TB as part of the S3 storage capacity and provides the option to create a maximum of 100 S3 buckets on-premises?",
    "correct": ["Amazon S3 on Outposts"],
    "distractors": ["Standard storage class", "Standard One-Zone (IA)", "Glacier"],
    "explanation": "S3 on Outposts extends S3 to on-premises environments."
  },
  {
    "id": 199,
    "question": "Which type of policy can you create to grant anonymous access to the objects stored in an S3 bucket that can be used to host website assets?",
    "correct": ["Resource policy"],
    "distractors": ["IAM policy", "IAM permission boundaries", "SNS policy"],
    "explanation": "S3 Bucket Policy (resource policy) can grant public/anonymous access."
  },
  {
    "id": 200,
    "question": "Which AWS service enables you to register new domain names for your corporate business requirements?",
    "correct": ["AWS Route53"],
    "distractors": ["AWS DNS", "AWS VPC", "Amazon Macie"],
    "explanation": "Route 53 handles domain registration and DNS."
  },
  {
    "id": 201,
    "question": "Which AWS service offers image and video analysis that can be used to identify objects, people, text, scenes, and other activities?",
    "correct": ["Amazon Rekognition"],
    "distractors": ["Amazon Kinesis Video Streams", "Amazon Prime", "Amazon Athena"],
    "explanation": "Rekognition provides ML-powered image and video analysis."
  },
  {
    "id": 202,
    "question": "Which AWS service offers text search and analytics capabilities that can store, analyze, and perform search functions against big data volumes in near real time?",
    "correct": ["Amazon Elasticsearch"],
    "distractors": ["Amazon Redshift", "Amazon ElastiCache", "Amazon Search"],
    "explanation": "Amazon OpenSearch Service (formerly Elasticsearch) is used for search and analytics."
  },
  {
    "id": 203,
    "question": "You plan to migrate your entire on-premises network to the cloud and have also decided to move away from physical desktops and workstations to a complete VDI solution. Which service on AWS enables you to provision virtual desktops in the cloud, accessible via a web browser?",
    "correct": ["Amazon WorkSpaces"],
    "distractors": ["Amazon EC2", "Amazon Lightsail", "Amazon EKS"],
    "explanation": "Amazon WorkSpaces provides managed virtual desktops (VDI)."
  },
  {
    "id": 204,
    "question": "A company needs to plan, schedule, and run hundreds of thousands of computing jobs on AWS. Which AWS service can the company use to meet this requirement?",
    "correct": ["AWS Batch"],
    "distractors": ["AWS Step Functions", "AWS Service Catalog", "AWS SQS"],
    "explanation": "AWS Batch is designed for large-scale batch computing workloads."
  },
  {
    "id": 205,
    "question": "AWS services or features provide high availability and low latency by enabling failover across different AWS region?",
    "correct": ["Amazon Route 53", "AWS Global Accelerator"],
    "distractors": ["Network Load Balancer", "Amazon S3 Transfer Acceleration"],
    "explanation": "Route 53 and Global Accelerator support cross-region failover."
  },
  {
    "id": 206,
    "question": "Which AWS security service protects applications from distributed denial of service (DDoS) attacks with always-on detection and automatic inline mitigations?",
    "correct": ["AWS Shield"],
    "distractors": ["AWS Inspector", "AWS WAF", "Elastic Load Balancing"],
    "explanation": "AWS Shield provides always-on DDoS protection."
  },
  {
    "id": 207,
    "question": "A company has teams with different job roles and responsibilities. Employees often change teams and the company needs to manage permissions for the employee so that the permissions are appropriate for the job responsibilities?",
    "correct": ["IAM roles"],
    "distractors": ["IAM user groups", "IAM instance profiles", "IAM policies for individual users"],
    "explanation": "IAM roles allow permission management based on job function with temporary credentials."
  },
  {
    "id": 208,
    "question": "A media company needs to undergo an external audit. What can the organization use to retrieve AWS security and compliance documents and submit them as evidence to an auditor or regulator?",
    "correct": ["AWS Artifact"],
    "distractors": ["AWS Certificate Manager", "AWS Systems Manager", "AWS Audit Manager"],
    "explanation": "AWS Artifact provides compliance reports and certifications."
  },
  {
    "id": 209,
    "question": "A media company wants to encrypt the data stored in Amazon S3. Which encryption types can be used to protect objects at rest in Amazon S3? (Choose two)",
    "correct": ["Server-Side Encryption with Amazon S3-managed keys (SSE-S3)", "Server-Side Encryption with AWS KMS-managed keys (SSE-KMS)"],
    "distractors": ["TLS", "SSL", "Transparent Data Encryption (TDE)"],
    "explanation": "SSE-S3 and SSE-KMS are the main server-side encryption options for S3."
  },
  {
    "id": 210,
    "question": "An online retail company wants to integrate its online shopping website with social media login credentials. Which AWS service can they use to make this integration?",
    "correct": ["Amazon Cognito"],
    "distractors": ["AWS Directory Service", "AWS IAM", "AWS IAM Identity Center"],
    "explanation": "Cognito supports social identity federation."
  },
  {
    "id": 211,
    "question": "A customer runs an on-demand Amazon Linux EC2 instance for 3 hours, 5 minutes and 6 seconds. For how much will the customer be billed?",
    "correct": ["3 hours, 5 minutes and 6 seconds"],
    "distractors": ["3 hours, 5 minutes", "3 hours, 6 minutes", "4 hours"],
    "explanation": "Amazon Linux On-Demand instances are billed per second after the first 60 seconds."
  },
  {
    "id": 212,
    "question": "A company wants a customized assessment of its current on-premises environment. The company wants to understand its projected running costs in the AWS Cloud?",
    "correct": ["Migration Evaluator"],
    "distractors": ["AWS Trusted Advisor", "Amazon Inspector", "AWS Control Tower"],
    "explanation": "Migration Evaluator provides workload assessment and cost projections."
  },
  {
    "id": 213,
    "question": "A company that has multiple business units wants to manage centrally and govern its AWS cloud environments. The company wants to automate the creation of AWS accounts, apply service control policies (SCPs) and simplify billing processes. Which tool meets the requirements?",
    "correct": ["AWS Organizations"],
    "distractors": ["AWS Budgets", "Cost Explorer", "AWS Trusted Advisor"],
    "explanation": "AWS Organizations provides centralized management, SCPs, and consolidated billing."
  },
  {
    "id": 214,
    "question": "A company is hosting an application in the AWS Cloud. The company wants to verify that underlying AWS services and general AWS infrastructure are operating normally. Which combination of AWS services can the company use to gather the required information?",
    "correct": ["AWS Personal Health Dashboard", "AWS Service Health Dashboard"],
    "distractors": ["AWS Systems Manager", "AWS Trusted Advisor", "AWS Service Catalog"],
    "explanation": "Personal Health Dashboard and Service Health Dashboard show service status."
  },
  {
    "id": 215,
    "question": "A company needs to migrate a PostgreSQL database from on-premise to Amazon RDS. Which AWS service or tool should the company use to meet this requirement?",
    "correct": ["AWS Database Migration Service (AWS DMS)"],
    "distractors": ["Cloud Adoption Readiness Tool", "AWS Migration Hub", "AWS Application Migration Service"],
    "explanation": "DMS is designed for database migrations."
  },
  {
    "id": 216,
    "question": "Which cloud concept is demonstrated by using AWS Compute Optimizer?",
    "correct": ["Rightsizing"],
    "distractors": ["Security validation", "Elasticity", "Global reach"],
    "explanation": "Compute Optimizer recommends optimal resource sizes (rightsizing)."
  },
  {
    "id": 217,
    "question": "A company hosts a large amount of data in AWS. The company wants to identify if any of the data should be considered sensitive. Which AWS service meets the requirements?",
    "correct": ["Amazon Macie"],
    "distractors": ["Amazon Inspector", "AWS IAM", "Amazon CloudWatch"],
    "explanation": "Macie discovers sensitive data (PII, etc.) in S3."
  },
  {
    "id": 218,
    "question": "A company wants to run a stateful workload on Amazon EC2 for 3 years. Which pricing model is most cost-effective for this?",
    "correct": ["Reserved Instances"],
    "distractors": ["On-Demand Instances", "Dedicated Instances", "Spot Instances"],
    "explanation": "Reserved Instances provide significant savings for long-term predictable workloads."
  },
  {
    "id": 219,
    "question": "Based on the AWS Shared Responsibility Model, which service requires the organization to update and patch the guest operating system?",
    "correct": ["Amazon EC2"],
    "distractors": ["DynamoDB", "Amazon S3", "Aurora"],
    "explanation": "Customer is responsible for the guest OS on EC2."
  },
  {
    "id": 220,
    "question": "A company faced an attack on its cloud infrastructure and wants to find the list of AWS services that are shared externally. Which AWS service should it use?",
    "correct": ["AWS Control Tower"],
    "distractors": ["OpenSearch Service", "AWS Fargate", "Amazon Inspector"],
    "explanation": "Control Tower helps identify externally shared resources."
  },
  {
    "id": 221,
    "question": "A company wants to register for an AWS Support plan. At what support level do users receive access to a support concierge?",
    "correct": ["Enterprise Support"],
    "distractors": ["Basic Support", "Developer Support", "Business Support"],
    "explanation": "Only Enterprise Support includes a dedicated Support Concierge."
  },
  {
    "id": 222,
    "question": "Which AWS service can a company use to visually design and build serverless applications?",
    "correct": ["AWS Application Composer"],
    "distractors": ["AWS Lambda", "AWS Batch", "AWS App Runner"],
    "explanation": "Application Composer is a visual designer for serverless apps."
  },
  {
    "id": 223,
    "question": "A company wants to migrate to AWS and use the same security software it uses on-premises. The security software vendor offers its security software as a service on AWS. Where should the company purchase the security solution?",
    "correct": ["AWS Marketplace"],
    "distractors": ["AWS Partner Solutions Finder", "AWS Support Center", "AWS Management Console"],
    "explanation": "AWS Marketplace is for third-party software and services."
  },
  {
    "id": 224,
    "question": "A company wants to migrate its PostgreSQL database to AWS. It does not use the database frequently. Which service will meet the requirement with the least management overhead?",
    "correct": ["Amazon Aurora Serverless"],
    "distractors": ["PostgreSQL on Amazon EC2", "Amazon RDS for PostgreSQL", "Amazon Aurora PostgreSQL Compatible Edition"],
    "explanation": "Aurora Serverless automatically scales to zero when not in use."
  },
  {
    "id": 225,
    "question": "Using DynamoDB for its application database. Which tasks are the responsibility of AWS, according to the Shared Responsibility Model?",
    "correct": ["Provide public endpoints to store and retrieve data", "Manage the infrastructure layer and OS"],
    "distractors": ["Classify data", "Configure access permissions", "Manage encryption process"],
    "explanation": "AWS manages infrastructure and endpoints for DynamoDB."
  },
  {
    "id": 226,
    "question": "Managed IAM policy that does not grant the necessary permission for users to accomplish required tasks.",
    "correct": ["Create a Custom IAM policy"],
    "distractors": ["Enable AWS Shield Advanced", "Use a Third party web application firewall...", "Use AWS KMS to create a customer managed key"],
    "explanation": "Custom IAM policies allow granular permission control."
  },
  {
    "id": 227,
    "question": "A company is building an application in AWS and wants to explore the AWS Cloud Adoption Framework (CAF). Which AWS CAF security perspective capabilities should it consider?",
    "correct": ["Incident response", "Infrastructure Protection"],
    "distractors": ["Observability", "Incident and problem management", "Availability and continuity"],
    "explanation": "Incident Response and Infrastructure Protection are key security capabilities in CAF."
  },
  {
    "id": 228,
    "question": "Media company stores media assets into Amazon S3 bucket. Company does not know the access pattern of media objects. What is most effective for unknown access patterns?",
    "correct": ["S3 Intelligent Tiering"],
    "distractors": ["S3 Standard", "S3 Standard Infrequent Access", "S3 One Zone Infrequent Access"],
    "explanation": "Intelligent Tiering automatically optimizes costs for unknown patterns."
  },
  {
    "id": 229,
    "question": "Which features describe Network ACLs as they are used in the AWS Cloud?",
    "correct": ["Stateless", "Process rules in order starting with the lowest numbered rule"],
    "distractors": ["Stateful", "Evaluate all rules before allowing traffic", "They operate at instance level"],
    "explanation": "NACLs are stateless and evaluated in rule number order."
  },
  {
    "id": 230,
    "question": "Plans to run a compute intensive workload that uses GPUs. Which EC2 instance type should be used?",
    "correct": ["Accelerated computing"],
    "distractors": ["Compute optimized", "General Purpose", "Storage optimized"],
    "explanation": "Accelerated Computing instances include GPUs."
  },
  {
    "id": 231,
    "question": "Which task can a company perform by using security groups in the AWS Cloud?",
    "correct": ["Allow access to an Amazon EC2 instance through only a specific port"],
    "distractors": ["Deny access to malicious IP address at subnet level", "Protect data that is cached by Amazon CloudFront", "Apply a stateless firewall to an Amazon EC2 instance"],
    "explanation": "Security Groups control inbound/outbound traffic at the instance level by port."
  },
  {
    "id": 232,
    "question": "An external auditor is asking a company to provide a list of all its IAM users including the status of users' credentials and access keys for audit purposes. Simplest way to provide this info?",
    "correct": ["Download the IAM credential report, then provide the report to the Auditor"],
    "distractors": ["Create an IAM user account for the auditor...", "Take screenshots of each user's page...", "Download the AWS Trusted Advisor report..."],
    "explanation": "IAM Credential Report is the easiest way to get this information."
  },
  {
    "id": 233,
    "question": "An online retail company uses Amazon S3 to store records that can contain personally identifiable information (PII). The company wants a solution that can monitor all S3 buckets for PII and immediately alert staff about vulnerabilities. Which AWS service meets these requirements?",
    "correct": ["Amazon Macie"],
    "distractors": ["AWS Shield", "Amazon Detective", "Amazon GuardDuty"],
    "explanation": "Macie detects PII and sends alerts."
  },
  {
    "id": 234,
    "question": "A company wants to run its workload in the AWS Cloud effectively, reduce management overhead and improve processes. Which AWS Well-Architected Framework pillar represents these requirements?",
    "correct": ["Operational Excellence"],
    "distractors": ["Reliability", "Performance Efficiency", "Cost Optimization"],
    "explanation": "Operational Excellence focuses on running workloads efficiently."
  },
  {
    "id": 235,
    "question": "A company uses various AWS services and tools and needs a service to help manage security alerts by organizing them into a single dashboard. Which AWS service should it use?",
    "correct": ["Amazon Security Hub"],
    "distractors": ["Amazon GuardDuty", "Amazon Inspector", "AWS SNS"],
    "explanation": "Security Hub aggregates security findings."
  },
  {
    "id": 236,
    "question": "A company wants to verify if multi-factor authentication is enabled for all users within its AWS account. Which service meets this requirement?",
    "correct": ["IAM credentials report"],
    "distractors": ["AWS Cost and Usage Report", "AWS Artifact", "Amazon CloudFront reports"],
    "explanation": "IAM Credentials Report includes MFA status."
  },
  {
    "id": 237,
    "question": "A company is migrating an on-premises server to an EC2 instance. The server must remain active at all times for 12 months, and the organization expects to change the compute family due to the evolving nature of the workload. Which pricing option would be most cost-effective for this scenario?",
    "correct": ["Savings Plans"],
    "distractors": ["On-Demand", "Reserved Instances", "Spot Instances"],
    "explanation": "Savings Plans offer flexibility when instance family may change."
  },
  {
    "id": 238,
    "question": "A company wants to use a managed security service for protection against SQL injection attacks, and it must also provide detailed logging information about access to its e-commerce application. Which service meets these requirements?",
    "correct": ["AWS WAF"],
    "distractors": ["AWS Network Firewall", "Amazon GuardDuty", "AWS AppFlow"],
    "explanation": "WAF protects against SQL injection and provides detailed logs."
  },
  {
    "id": 239,
    "question": "A company wants to access AWS services by using temporary security credentials. Which feature should be used?",
    "correct": ["AWS Security Token Service (AWS STS)"],
    "distractors": ["IAM policies", "IAM user groups", "AWS IAM Identity Center"],
    "explanation": "STS provides temporary credentials."
  },
  {
    "id": 240,
    "question": "An online gaming company wants to use an AWS serverless tech stack to build its application. What is a benefit of using AWS serverless computing?",
    "correct": ["Management of infrastructure is offloaded to AWS"],
    "distractors": ["Application deployment and management not required", "Application security will be managed by AWS", "Monitoring and logging are not needed"],
    "explanation": "Serverless offloads infrastructure management to AWS."
  },
  {
    "id": 241,
    "question": "A company needs to collect and process 10 TB of data locally and transfer the data to AWS. The company has intermittent connectivity. Which service will meet these requirements?",
    "correct": ["Snowball Edge"],
    "distractors": ["AWS DMS", "AWS DataSync", "AWS Backup"],
    "explanation": "Snowball Edge is ideal for large offline data transfers."
  },
  {
    "id": 242,
    "question": "A company is migrating its server-based application to the AWS Cloud. What benefits will the company receive when it moves its production workload to AWS? (Choose two)",
    "correct": ["AWS offers high availability", "AWS provides economies of scale"],
    "distractors": ["Manages all security in cloud", "Free support and Technical Account Managers"],
    "explanation": "High availability and economies of scale are key cloud benefits."
  },
  {
    "id": 243,
    "question": "A company wants to use Amazon EC2 instances to provide a static website to users all over the world and wants to minimize latency for users. Which solution meets these requirements?",
    "correct": ["CloudFront with the EC2 instances configured as the source"],
    "distractors": ["Use EC2 instances in multiple Edge locations", "Use EC2 instances in same availability zone in different AWS regions"],
    "explanation": "CloudFront caches content globally for low latency."
  },
  {
    "id": 244,
    "question": "A company wants to run a simulation for 10 months without interruptions. Which EC2 instance purchasing option will meet this requirement most cost-effectively?",
    "correct": ["Reserved Instances"],
    "distractors": ["Spot Instances", "On-Demand Instances", "Dedicated Hosts"],
    "explanation": "Reserved Instances are best for long-term, uninterrupted workloads."
  },
  {
    "id": 245,
    "question": "Purchased AWS Enterprise Support plan. How does the Enterprise Support Concierge team help users?",
    "correct": ["Answering billing and account inquiries"],
    "distractors": ["Support Application development", "Providing Architecture guidance", "Answering questions regarding technical support cases"],
    "explanation": "The Concierge team specializes in billing and account support."
  },
  {
    "id": 246,
    "question": "Company wants to receive alerts to monitor overall operating costs for its AWS Public cloud infrastructure. Which AWS offering meets the requirements?",
    "correct": ["AWS Budgets"],
    "distractors": ["Amazon EventBridge", "Compute Savings Plan", "Migration Evaluator"],
    "explanation": "AWS Budgets sends cost alerts."
  },
  {
    "id": 247,
    "question": "On-demand technology services that enable companies to replace upfront fixed expenses with variable expenses?",
    "correct": ["Pay as you go pricing"],
    "distractors": ["High availability", "Economies of Scale", "Global reach"],
    "explanation": "Pay-as-you-go replaces CapEx with OpEx."
  },
  {
    "id": 248,
    "question": "A company wants to quickly deploy a non-relational database on AWS. The company does not want to manage the underlying hardware or database software. Which service can be used to accomplish this?",
    "correct": ["Amazon DynamoDB"],
    "distractors": ["Amazon RDS", "Amazon Aurora", "Amazon Redshift"],
    "explanation": "DynamoDB is a fully managed NoSQL database."
  },
  {
    "id": 249,
    "question": "A company wants to create a globally accessible e-commerce platform for its customers. The company wants to use a highly available and scalable DNS web service to connect users to the platform. Which AWS service meets these requirements?",
    "correct": ["Amazon Route 53"],
    "distractors": ["Amazon EC2", "Amazon VPC", "Amazon RDS"],
    "explanation": "Route 53 is a scalable DNS service."
  },
  {
    "id": 250,
    "question": "Company is migrating to AWS cloud and plans to run experimental workloads for 3 to 6 months on AWS. Which pricing model will meet these requirements?",
    "correct": ["Use On-Demand Instances"],
    "distractors": ["Use Savings Plans for 3 year term", "Use Dedicated Hosts", "Buy Reserved Instances"],
    "explanation": "On-Demand is ideal for short-term experimental workloads."
  },
  {
    "id": 251,
    "question": "A company having AWS Enterprise Support is launching a new version of a popular product in 2 months. The company expects a large increase in traffic to its website. The website is hosted on Amazon EC2 instances. Which action should the company take to assess its readiness to scale for this launch?",
    "correct": ["Use AWS Infrastructure Event Management (IEM) Support"],
    "distractors": ["Replace EC2 Instances with AWS Lambda function", "Submit a request on AWS Marketplace...", "Review the coverage reports..."],
    "explanation": "IEM (available with Enterprise Support) helps prepare for large-scale events."
  },
  {
    "id": 252,
    "question": "A company wants to launch multiple workloads on AWS. Each workload is related to a different business unit. The company wants to separate and track costs for each business unit. Which solution will meet these requirements with least operational overhead?",
    "correct": ["Use AWS Organizations and create one account for each business unit"],
    "distractors": ["Use spreadsheet to control the owners...", "Use AWS Billing console...", "Use an Amazon DynamoDB table..."],
    "explanation": "Separate AWS accounts via Organizations provide clean cost separation."
  },
  {
    "id": 253,
    "question": "A company wants a time-series database service that makes it easier to store and analyze trillions of events each day. Which AWS service will meet these requirements?",
    "correct": ["Amazon Timestream"],
    "distractors": ["Amazon Neptune", "Amazon Forecast", "Amazon DynamoDB"],
    "explanation": "Timestream is purpose-built for time-series data."
  },
  {
    "id": 254,
    "question": "Which option is a shared control between AWS and the customer, according to the AWS Shared Responsibility Model?",
    "correct": ["Identity and Access Management"],
    "distractors": ["Physical and environmental controls", "Data integrity and authentication", "Configuration Management"],
    "explanation": "IAM configuration is a shared responsibility."
  },
  {
    "id": 255,
    "question": "Which AWS services enable users to connect on-premises networks to a VPC? (Choose two)",
    "correct": ["AWS VPN", "AWS Direct Connect"],
    "distractors": ["Elastic Load Balancing", "VPC Peering", "Amazon CloudFront"],
    "explanation": "VPN and Direct Connect are the main connectivity options."
  },
  {
    "id": 256,
    "question": "A company often does not use all of its current Amazon EC2 capacity to run stateless workloads. The company wants to optimize its EC2 costs. Which EC2 instance type will meet these requirements?",
    "correct": ["Spot Instances"],
    "distractors": ["Reserved Instances", "Dedicated Instances", "On-Demand Instances"],
    "explanation": "Spot Instances are best for stateless, interruptible workloads."
  },
  {
    "id": 257,
    "question": "Which actions are examples of a company's effort to rightsizing its AWS resources to control cloud costs?",
    "correct": ["Base the selection of Amazon EC2 instance types on past utilization patterns", "Use Amazon S3 Lifecycle policies to move infrequently accessed objects to lower-cost storage tiers"],
    "distractors": ["Switch from Amazon RDS to DynamoDB...", "Use Multi-AZ deployment for Amazon RDS", "Replace existing Amazon EC2 instances with AWS Elastic Beanstalk"],
    "explanation": "Rightsizing and S3 Lifecycle policies are key cost optimization techniques."
  },
  {
    "id": 258,
    "question": "A company wants to store data in Amazon S3. The company rarely accesses the data, and most data can be regenerated if necessary. The company wants to store the data in the most cost-effective storage class. Which S3 storage class will meet these requirements?",
    "correct": ["S3 One Zone Infrequent Access"],
    "distractors": ["S3 Standard", "S3 Standard Infrequent Access", "S3 Intelligent-Tiering"],
    "explanation": "One Zone-IA is the cheapest for infrequently accessed, regeneratable data."
  },
  {
    "id": 259,
    "question": "A company has migrated its workload to AWS, and wants to adopt AWS at scale and operate more efficiently and securely. Which AWS service or framework should the company use for operational support?",
    "correct": ["AWS Managed Services"],
    "distractors": ["AWS Support", "AWS Cloud Adoption Framework", "AWS Well-Architected Framework"],
    "explanation": "AWS Managed Services provides ongoing operational support."
  },
  {
    "id": 260,
    "question": "A media company has a physical tape library to store data backups. The tape library is running out of space. The company needs to extend its tape library capacity to the AWS Cloud. Which AWS service should the company use to meet this requirement?",
    "correct": ["AWS Storage Gateway"],
    "distractors": ["Amazon EFS", "Amazon EBS", "Amazon S3"],
    "explanation": "Tape Gateway extends on-premises tape backups to S3/Glacier."
  },
  {
    "id": 261,
    "question": "A company is using the AWS Free Tier for several AWS services for an application. What will happen if the free tier usage period expires or if the application use exceeds the free tier usage limits?",
    "correct": ["The company will be charged the standard pay-as-you-go service rates for the usage that exceeds the free tier usage"],
    "distractors": ["AWS Support will contact the company...", "The company will be charged for the services if consumed during the free tier period...", "The company's AWS account will be frozen..."],
    "explanation": "Usage beyond Free Tier is charged at standard rates."
  },
  {
    "id": 262,
    "question": "A media company wants to monitor its workload performance. The company wants to ensure that the cloud services are delivered at a level that meets its business needs. Which AWS CAF perspective will meet these requirements?",
    "correct": ["Operations"],
    "distractors": ["Business", "Governance", "Platform"],
    "explanation": "Operations perspective focuses on monitoring and performance."
  },
  {
    "id": 263,
    "question": "A company wants to migrate to the AWS Cloud. The company wants to identify and prioritize business transformation opportunities and evaluate its AWS Cloud readiness. Which AWS tool should the company use to meet these requirements?",
    "correct": ["AWS CAF"],
    "distractors": ["AWS Managed Services", "AWS Well-Architected Framework", "AWS Migration Hub"],
    "explanation": "AWS Cloud Adoption Framework (CAF) helps with readiness assessment."
  },
  {
    "id": 264,
    "question": "A company needs an AWS service that provides a clear baseline of what the company runs in its on-premises data centers. The company needs the projected cost to run its on-premises workloads in the AWS Cloud. Which AWS service will meet these requirements?",
    "correct": ["Migration Evaluator"],
    "distractors": ["AWS Compute Optimizer", "AWS Cost Explorer", "AWS Systems Manager Agent"],
    "explanation": "Migration Evaluator gives inventory baseline and cost projections."
  },
  {
    "id": 265,
    "question": "A media house acquired another corporation. The company now has two AWS accounts. Which AWS service or tool should the company use to consolidate the billing for these two accounts?",
    "correct": ["AWS Organizations"],
    "distractors": ["AWS Systems Manager", "AWS License Manager", "Cost Explorer"],
    "explanation": "Organizations provides consolidated billing."
  },
  {
    "id": 266,
    "question": "A media company wants to set up its workloads to perform their intended functions and recover quickly from failure. Which pillar of the AWS Well-Architected Framework aligns with these goals?",
    "correct": ["Reliability"],
    "distractors": ["Performance Efficiency", "Sustainability", "Security"],
    "explanation": "Reliability pillar focuses on recovery and consistent performance."
  },
  {
    "id": 267,
    "question": "A media company is looking for a managed AWS service that is used specifically for extract, transform and load data (ETL) for their data analytics jobs. Which AWS service will meet these requirements?",
    "correct": ["AWS Glue"],
    "distractors": ["Amazon Athena", "Amazon S3", "Amazon EMR"],
    "explanation": "AWS Glue is a serverless ETL service."
  },
  {
    "id": 268,
    "question": "A company wants to migrate petabyte of data from its on-premises data center to AWS. The company does not want to use an internet connection to perform the migration. Which AWS service will meet these requirements?",
    "correct": ["AWS Snowmobile"],
    "distractors": ["AWS DataSync", "AWS Direct Connect", "AWS Snowball Edge"],
    "explanation": "Snowmobile is for exabyte/petabyte-scale offline transfers."
  },
  {
    "id": 269,
    "question": "A company wants to receive alerts to monitor its overall operating costs for its AWS public cloud infrastructure. Which AWS offering will meet these requirements?",
    "correct": ["AWS Budgets"],
    "distractors": ["Compute Savings Plan", "AWS EventBridge", "Migration Evaluator"],
    "explanation": "AWS Budgets is for cost monitoring and alerts."
  },
  {
    "id": 270,
    "question": "A company wants to save costs by archiving data that is no longer frequently accessed by end users. Which Amazon S3 feature will meet these requirements?",
    "correct": ["S3 Lifecycle"],
    "distractors": ["S3 Versioning", "S3 Object Lock", "S3 Inventory"],
    "explanation": "S3 Lifecycle policies automate transitions to cheaper storage classes."
  },
  {
    "id": 271,
    "question": "Which of the following is a characteristic of the AWS account root user?",
    "correct": ["The root user is the first sign-in identity that is available when an AWS account is created"],
    "distractors": ["The root user is the only user that can be configured with MFA", "The root user is the only user that can access the AWS Management Console", "The root user has a password that can't be changed"],
    "explanation": "The root user is created when the account is made."
  },
  {
    "id": 272,
    "question": "An Amazon EC2 instance previously used for development is inaccessible and no longer appears in the AWS Management Console. Which AWS service should be used to determine what action made this EC2 instance inaccessible?",
    "correct": ["AWS CloudTrail"],
    "distractors": ["Amazon CloudWatch Logs", "AWS Security Hub", "AWS Inspector"],
    "explanation": "CloudTrail logs all API actions, including terminations."
  },
  {
    "id": 273,
    "question": "A company wants to migrate unstructured data to AWS. The data needs to be securely moved with in-flight encryption and end-to-end data validation. Which AWS service will meet these requirements?",
    "correct": ["AWS DataSync"],
    "distractors": ["AWS Application Migration Service", "AWS Elastic File System", "AWS Migration Hub"],
    "explanation": "DataSync provides secure transfer with encryption and validation."
  },
  {
    "id": 274,
    "question": "A development team wants to deploy multiple test environments for an application in a fast, repeatable manner. Which AWS service should the team use?",
    "correct": ["AWS CloudFormation"],
    "distractors": ["Amazon EC2", "Amazon QuickSight", "Amazon Elastic Container Service"],
    "explanation": "CloudFormation enables repeatable infrastructure deployments."
  },
  {
    "id": 275,
    "question": "A company wants to quickly implement a continuous integration / continuous delivery (CI/CD) pipeline. Which AWS service will meet these requirements?",
    "correct": ["AWS CodeStar"],
    "distractors": ["AWS Config", "Amazon Cognito", "Amazon DataSync"],
    "explanation": "CodeStar quickly sets up CI/CD pipelines."
  },
  {
    "id": 276,
    "question": "Which AWS service could an administrator use to provide desktop environments for several employees?",
    "correct": ["Amazon WorkSpaces"],
    "distractors": ["AWS Organizations", "AWS Fargate", "AWS WAF"],
    "explanation": "WorkSpaces provides managed virtual desktops."
  }

];
