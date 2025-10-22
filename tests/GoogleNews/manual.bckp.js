What is Agile Methodology?
Agile methodology is a modern approach to software development that emphasizes:

Iterative development: Work is divided into small cycles called sprints (usually 1–4 weeks).
Collaboration: Continuous communication between developers, testers, stakeholders, and customers.
Flexibility: Requirements and solutions evolve through feedback and changing needs.
Customer-centric: Frequent delivery of working software ensures customer satisfaction.

Agile promotes adaptive planning, early delivery, and continuous improvement.

🔁 Agile Principles (from the Agile Manifesto)

Individuals and interactions over processes and tools.
Working software over comprehensive documentation.
Customer collaboration over contract negotiation.
Responding to change over following a plan.


🛠️ Example Use in Project Development
Let’s say you're developing a mobile banking app. Here's how Agile might be applied:
1. Project Kickoff

Define high-level goals: e.g., login, view balance, transfer funds.
Create a product backlog: a prioritized list of features.

2. Sprint Planning

Choose tasks for Sprint 1: e.g., implement login and registration.
Assign roles: developers, testers, Scrum Master, Product Owner.

3. Sprint Execution (2 weeks)

Daily stand-up meetings to track progress.
Developers build login functionality.
Testers write and execute test cases.

4. Sprint Review

Demonstrate login feature to stakeholders.
Gather feedback: e.g., improve UI, add biometric login.

5. Sprint Retrospective

Discuss what went well, what can improve.
Adjust processes for next sprint.

6. Next Sprint

Pick next features: e.g., view account balance, transaction history.
Repeat the cycle.


🔄 Agile Frameworks
Agile can be implemented using various frameworks:

Scrum: Most popular; uses sprints, roles, ceremonies.
Kanban: Visual workflow management.
XP (Extreme Programming): Focuses on engineering practices.
SAFe (Scaled Agile Framework): For large organizations.

/*********************************************/
🧪 Tester’s Role in Agile
1. Collaborate in Sprint Planning

Understand user stories and acceptance criteria.
Help define testable requirements.
Estimate testing effort.

2. Write Test Cases Early

Create manual and automated test cases based on user stories.
Use Behavior-Driven Development (BDD) tools like Cucumber or Gherkin.

3. Continuous Testing

Perform functional, integration, and regression testing during the sprint.
Use tools like Selenium, JUnit, TestNG, Postman, etc.

4. Participate in Daily Stand-ups

Share testing progress and blockers.
Collaborate with developers and product owners.

5. Test Automation

Build and maintain automation scripts to speed up testing.
Integrate with CI/CD pipelines (e.g., Jenkins, GitLab CI).

6. Exploratory Testing

Go beyond scripted tests to find edge cases and usability issues.

7. Sprint Review & Retrospective

Provide feedback on test coverage and quality.
Suggest improvements for future sprints.


📘 Example in a Project
Let’s say you're working on a food delivery app:

User Story: “As a user, I want to track my order in real-time.”
Tester’s Tasks:

Review the story and clarify acceptance criteria.
Write test cases for:

GPS tracking accuracy.
UI updates when the order status changes.
Notifications when the order is picked up/delivered.


Automate tests for order status updates.
Perform exploratory testing on different devices.
Report bugs and verify fixes within the sprint.

/*********************************************/

🧑‍💼 Test Lead’s Role in Agile
1. Planning & Strategy

Define the test strategy aligned with Agile principles.
Ensure test coverage across functional, integration, performance, and security aspects.
Decide on tools and frameworks for manual and automated testing.

2. Team Leadership

Mentor and guide testers and QA engineers.
Facilitate knowledge sharing and skill development.
Ensure the team follows best practices in testing and Agile ceremonies.

3. Collaboration

Work closely with Product Owners, Scrum Masters, Developers, and other stakeholders.
Participate in sprint planning, daily stand-ups, reviews, and retrospectives.
Help clarify acceptance criteria and ensure testability of user stories.

4. Quality Assurance

Monitor and improve test processes.
Track defect metrics, test execution, and automation coverage.
Ensure early testing and continuous feedback.

5. Automation Oversight

Oversee the development and maintenance of automation suites.
Ensure integration with CI/CD pipelines.
Promote shift-left testing and DevOps practices.

6. Risk Management

Identify and mitigate quality risks early.
Ensure proper regression testing before releases.


📘 Example in a Project
Let’s say you're working on a healthcare portal:

Test Lead Responsibilities:

Define test strategy for HIPAA compliance and data security.
Choose tools like Selenium for UI, JMeter for performance, and Postman for API testing.
Assign tasks to testers based on sprint goals.
Review test cases and automation scripts.
Ensure defects are triaged and resolved within the sprint.
Report quality metrics to stakeholders.

/*****************************************************/
🧪 Test Strategy for CFR 21 Part 11 Compliance
🔍 1. Understand the Scope
21 CFR Part 11 governs:

Electronic records: Must be trustworthy, reliable, and equivalent to paper records.
Electronic signatures: Must be secure, verifiable, and legally binding.
Applies to closed systems (internal access only) and open systems (external access).


🧩 2. Key Compliance Areas to Test
✅ System Validation

Ensure the system consistently produces accurate and reliable results.
Validate all software components: UI, backend, database, APIs.
Include Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ).

✅ Access Control

Test role-based access and multi-factor authentication (MFA).
Verify that only authorized users can access or modify records.
Log and monitor login attempts and access patterns.

✅ Audit Trails

Ensure all changes to records are logged with:

Who made the change
What was changed
When it was changed


Test audit trail integrity and tamper-proof mechanisms.

✅ Electronic Signatures

Validate that eSignatures include:

User ID
Timestamp
Meaning of the signature (e.g., approval, review)


Ensure signatures are unique, secure, and non-repudiable.

✅ Data Integrity

Test for completeness, accuracy, and consistency of data.
Use ALCOA+ principles:

Attributable, Legible, Contemporaneous, Original, Accurate
Plus: Complete, Consistent, Enduring, Available



✅ Security Controls

Test encryption for data at rest and in transit (e.g., AES-256, TLS 1.3).
Validate secure storage and retrieval mechanisms.
Simulate unauthorized access attempts and verify system response.

✅ Backup & Recovery

Test automated backups and restoration procedures.
Validate data recovery time and integrity post-restoration.


📋 3. Test Artifacts to Maintain

Test Plan: Include CFR 21 Part 11 objectives and traceability to requirements.
Test Cases: Cover validation, access control, audit trails, eSignatures, and data security.
Test Results: Document outcomes, deviations, and resolutions.
Traceability Matrix: Map requirements to test cases and results.
Validation Summary Report: Summarize compliance status and readiness for audit.


🧠 4. Team Training & Collaboration

Train QA and development teams on CFR 21 Part 11 and GxP principles.
Collaborate with regulatory, legal, and compliance teams.
Use ALM tools to manage traceability and documentation.


🛠️ Tools & Technologies

ALM Tools: SpiraTest, HP ALM, Jira with plugins.
Automation: Selenium, TestNG, Postman, JMeter.
Security: OWASP ZAP, Burp Suite.
Audit & Logging: ELK Stack, Splunk.


✅ Final Tip:
Always involve QA early in the SDLC and maintain meticulous documentation. This ensures smoother FDA audits and faster product approvals

/*************************************************/
CFR21 Part 11 -- Test Strategy documentation 

System Validation
•	☐ Verify IQ, OQ, PQ documentation
•	☐ Validate software components (UI, backend, APIs)
•	☐ Ensure consistent and reliable output
Access Control
•	☐ Test role-based access
•	☐ Verify multi-factor authentication
•	☐ Log and monitor login attempts
Audit Trails
•	☐ Ensure all changes are logged
•	☐ Verify tamper-proof mechanisms
•	☐ Test audit trail integrity
Electronic Signatures
•	☐ Validate user ID, timestamp, and signature meaning
•	☐ Ensure uniqueness and security
•	☐ Test non-repudiation features
Data Integrity
•	☐ Test for completeness and accuracy
•	☐ Apply ALCOA+ principles
•	☐ Verify consistency and availability
Security Controls
•	☐ Test encryption for data at rest and in transit
•	☐ Simulate unauthorized access attempts
•	☐ Validate secure storage and retrieval
Backup & Recovery
•	☐ Test automated backups
•	☐ Validate restoration procedures
•	☐ Ensure data integrity post-recovery
Documentation & Training
•	☐ Maintain test plans and traceability matrix
•	☐ Document test results and deviations
•	☐ Train team on CFR 21 Part 11 and GxP

/*************************************************/
✅ Key Elements of a Good Test Case
1. Clear and Descriptive Title

Use a concise name that reflects the purpose of the test.
Example: Verify login with valid credentials.

2. Unique Test Case ID

Helps in tracking and referencing.
Example: TC_Login_001.

3. Relevant Preconditions

Mention any setup required before executing the test.
Example: “User must be registered and have valid credentials.”

4. Well-Defined Test Steps

List steps in a logical, sequential order.
Keep them simple and actionable.
Example:

Navigate to login page.
Enter valid username and password.
Click on "Login" button.

5. Expected Result

Clearly state what should happen after executing the steps.
Example: “User is redirected to the dashboard.”

6. Actual Result (Post Execution)

To be filled during test execution.
Helps in identifying pass/fail status.

7. Test Data

Include specific data inputs required for the test.
Example: Username: testuser, Password: Test@123.

8. Pass/Fail Criteria

Define what constitutes a successful or failed test.
Helps in objective evaluation.

9. Traceability to Requirements

Link test cases to user stories or requirement IDs.
Ensures coverage and compliance.

10. Priority and Severity

Indicate how critical the test case is.
Example: Priority: High, Severity: Critical.

11. Environment Details

Specify where the test should be run (e.g., staging, production).
Include browser, OS, device if applicable.

12. Automation Feasibility

Mention if the test case is suitable for automation.
Helps in planning automation efforts.


🧠 Best Practices

Keep it simple: Avoid ambiguity and technical jargon.
Be reusable: Design test cases that can be reused across modules.
Review regularly: Update test cases as requirements evolve.
Include negative scenarios: Test for invalid inputs and edge cases.
Use consistent formatting: Improves readability and collaboration.

/*************************************************/

🔁 Bug Life Cycle Stages/Here's a standard flow:

New: Bug is reported and logged.
Open: QA or triage team reviews and confirms it's a valid issue.
Assigned: Bug is assigned to a developer.
In Progress: Developer starts working on the fix.
Fixed: Developer resolves the issue.
Ready for Testing: QA validates the fix.
Verified: QA confirms the bug is resolved.
Closed: Bug is marked as closed after successful verification.
Reopened: If the issue persists or reappears, it is reopened.
Rejected: Bug is invalid, not reproducible, or not a bug.
Backlog: Bug is acknowledged but deferred for future sprints or releases.
Duplicate: Bug is already reported.
Won’t Fix: Bug is accepted but won’t be fixed due to business reasons.


🧩 Bug Life Cycle in Jira (Example)
Let’s say a tester finds a bug: “App crashes when uploading a large file.”
a. Till Closure

New → Tester logs the bug.
Open → QA Lead reviews and confirms.
Assigned → Developer is assigned.
In Progress → Developer investigates and fixes.
Fixed → Developer marks it fixed.
Ready for Testing → QA tests the fix.
Verified → QA confirms it’s resolved.
Closed → QA closes the bug.

b. Reopened

After closure, the issue reappears in production.
QA or user reopens the bug.
It goes back to Assigned → In Progress → Fixed → Verified → Closed.

c. Backlog

Bug is valid but not critical.
Moved to Backlog for future prioritization.
May be picked in future sprints.

d. Rejected

Developer or QA Lead finds it’s not a bug (e.g., expected behavior).
Status changed to Rejected with comments.

e. Other Statuses

Duplicate: Already reported.
Won’t Fix: Fixing it is not feasible or not aligned with business goals.
Deferred: Bug is postponed to a later release.

/*************************************************/
Test Scenarios:
Definition : A high-level description of what to test
Purpose : To ensure coverage of all major functionalities
Detail Level : Broad and conceptual
Example : Verify login functionality
Documentation : Less detailed, often one-liner
Used By : Test planners, QA leads
Traceability : Linked to business requirements or user stories
Maintenance : Easier to maintain
Automation Feasibility : Not directly automatable


Test case:
Definition : A detailed step-by-step procedure to test a specific functionality
Purpose : To validate specific conditions, inputs, and expected outcomes
Detail Level : Specific and detailed
Example : Enter valid username and password, click login, verify dashboard loads
Documentation : Includes ID, steps, expected result, actual result, status
Used By : Testers during execution
Traceability : Linked to test scenarios and requirements
Maintenance : Requires updates with UI or logic changes
Automation Feasibility : Can be automated using tools like Selenium, JUnit, etc.

🔹 Test Scenario:
Scenario: Verify user can reset password via email link.
🔹 Test Cases:
TC_001: Enter registered email → Click "Forgot Password" → Receive reset link → Reset password → Login with new password → Verify success.
TC_002: Enter unregistered email → Click "Forgot Password" → Verify error message.
TC_003: Use expired reset link → Verify error message.

/*************************************************/

✅ Functional Test Cases	
These validate the core functionality of the system.	
1. TC_F_001: Verify that the Google search bar accepts the input "apple".	
2. TC_F_002: Verify that pressing "Enter" or clicking the "Search" button initiates the search.	
3. TC_F_003: Verify that relevant search results for "apple" are displayed.	
4. TC_F_004: Verify that search suggestions appear as the user types "apple".	
5. TC_F_005: Verify that clicking on a search result redirects to the correct page.	
	
⚙️ Non-Functional Test Cases	
These validate performance, usability, security, etc.	
1. TC_NF_001: Verify that search results load within 2 seconds.	
2. TC_NF_002: Verify that the UI is responsive across devices (mobile, tablet, desktop).	
3. TC_NF_003: Verify that the search bar is accessible via keyboard navigation.	
4. TC_NF_004: Verify that the system handles high traffic without crashing.	
5. TC_NF_005: Verify that the search query is encrypted during transmission.	
	
🔥 Smoke Test Cases	
These are basic tests to ensure the system is stable.	
1. TC_SM_001: Verify that the Google homepage loads successfully.	
2. TC_SM_002: Verify that the search bar is visible and clickable.	
3. TC_SM_003: Verify that typing and searching for "apple" returns results.	
	
🧪 Sanity Test Cases	
These validate specific functionality after changes or fixes.	
1. TC_SA_001: After a UI update, verify that the search bar still accepts input.	
2. TC_SA_002: After a bug fix, verify that search results for "apple" are still relevant.	
3. TC_SA_003: After performance tuning, verify that search results load within acceptable time.	
	
Here’s a breakdown of Functional, Non-Functional, Smoke, and Sanity test cases for a Login Page with the following elements:	
Username	
Password	
Domain Dropdown	
Login Button	
Cancel Button	
Forgot Password Link	
	
✅ Functional Test Cases	
	
Test Case ID	Description
TC_F_001	Verify login with valid username, password, and domain
TC_F_002	Verify error message for invalid username/password
TC_F_003	Verify domain dropdown displays correct options
TC_F_004	Verify login fails if domain is not selected
TC_F_005	Verify cancel button clears all input fields
TC_F_006	Verify forgot password link redirects to recovery page
TC_F_007	Verify login button is disabled until all fields are filled
TC_F_008	Verify password field hides input characters
	
⚙️ Non-Functional Test Cases	
Test Case ID	Description
TC_NF_001	Verify login page loads within 2 seconds
TC_NF_002	Verify responsiveness across devices and browsers
TC_NF_003	Verify accessibility (keyboard navigation, screen reader support)
TC_NF_004	Verify secure transmission of credentials (HTTPS, TLS)
TC_NF_005	Verify login page handles 1000 concurrent users without crash
	
🔥 Smoke Test Cases	
Test Case ID	Description
TC_SM_001	Verify login page loads successfully
TC_SM_002	Verify login with valid credentials works
TC_SM_003	Verify forgot password link is clickable and redirects correctly
	
🧪 Sanity Test Cases	
Test Case ID	Description
TC_SA_001	After UI update, verify login button is functional
TC_SA_002	After bug fix, verify login with invalid credentials shows correct error
TC_SA_003	After domain dropdown update, verify correct domains are listed

🧪 Alpha Testing Test Cases
Alpha testing is done internally by QA teams before releasing to external users. It focuses on functional completeness, UI/UX, and early bug detection.

✅ Functional Test Cases
TC_A_001: Verify login with valid username, password, and domain.
TC_A_002: Verify error message for invalid credentials.
TC_A_003: Verify domain dropdown populates correctly.
TC_A_004: Verify cancel button clears all fields.
TC_A_005: Verify forgot password link redirects to recovery page.
TC_A_006: Verify login button is disabled until all fields are filled.
TC_A_007: Verify password field masks input.
TC_A_008: Verify session timeout after inactivity.

⚙️ Non-Functional Test Cases
TC_A_009: Verify login page loads within 2 seconds.
TC_A_010: Verify responsiveness across devices.
TC_A_011: Verify accessibility (keyboard navigation, screen reader).
TC_A_012: Verify secure transmission of credentials (HTTPS).
TC_A_013: Verify error handling for server downtime.


🧪 Beta Testing Test Cases
Beta testing is done by external users in a real-world environment. It focuses on usability, performance, and unexpected behavior.
✅ Usability & Real-World Scenarios
TC_B_001: Verify login works on different browsers (Chrome, Firefox, Safari).
TC_B_002: Verify login with slow internet connection.
TC_B_003: Verify forgot password flow with actual email recovery.
TC_B_004: Verify domain selection based on user location or role.
TC_B_005: Verify user feedback on UI clarity and ease of use.
TC_B_006: Verify login behavior when cookies are disabled.
TC_B_007: Verify error messages are user-friendly and localized.

/*********************************************/
✅ How to Decide What to Automate

🔹 Automate When:
High Repetition -- Tests that are run frequently (e.g., regression, smoke tests).
Stable Functionality -- Features that don’t change often.
High Risk Areas -- Critical business flows (e.g., login, payment).
Data-Driven Tests -- Tests with multiple input combinations.
Time-Consuming Manual Tests -- Long workflows that are tedious to repeat manually.
Cross-Browser or Device Testing -- Useful for UI automation tools like Selenium or Appium.

🔹 Don’t Automate When:
Unstable Features -- Frequent UI or logic changes make maintenance costly.
One-Time Tests -- Tests that are run only once or rarely.
Exploratory Testing -- Requires human intuition and creativity.
Usability & Visual Checks -- Layout, color, font, and user experience.
Low Priority or Low Risk Tests -- Not worth the automation effort.

🧪 Examples for Login Page
✅ Automatable Test Cases:
Login with valid credentials.
Login with invalid credentials.
Domain dropdown selection.
Forgot password flow.
Cancel button clears fields.

❌ Not Ideal for Automation:
UI alignment of login page elements.
Font and color consistency.
User feedback on ease of use.
Exploratory testing for edge cases.

100% Automation possible:
Human Judgment -- Exploratory, usability, and visual testing need human insight.
Changing Requirements -- Frequent changes make automation unstable.
Cost vs Benefit -- Some tests are too costly to automate for minimal gain.
Tool Limitations -- Not all scenarios (e.g., CAPTCHA, biometric login) are automatable.
for Best  practise -- Aim for 60–80% automation coverage for regression and critical flows, and keep manual testing for areas requiring human evaluation.
/*********************************************/
Automation Decision Checklist
Date: 2025-10-15
Use this checklist to evaluate whether a test case is suitable for automation. Mark each item as Yes/No to help prioritize automation candidates.
Checklist Questions
•	☐ Is the test case executed frequently (e.g., in every regression)?
•	☐ Is the functionality stable with minimal UI or logic changes?
•	☐ Does the test involve repetitive steps that are time-consuming manually?
•	☐ Is the test critical to business operations or high-risk?
•	☐ Can the test be reliably executed without human judgment?
•	☐ Is the test data predictable and reusable?
•	☐ Does the test case have clear pass/fail criteria?
•	☐ Is the test environment stable and accessible for automation?
•	☐ Is the test feasible with available automation tools and frameworks?
•	☐ Does automating the test provide a good return on investment (ROI)?
/*********************************************/
Manual Testing Suitability & Test Case Review Checklist
Date: 2025-10-15
Use this checklist to evaluate whether a test case is suitable for manual testing and to ensure quality during test case reviews.
Manual Testing Suitability Checklist
•	☐ Does the test require human judgment or visual validation?
•	☐ Is the functionality under frequent change or unstable?
•	☐ Is the test a one-time or rarely executed scenario?
•	☐ Does the test involve exploratory or ad-hoc testing?
•	☐ Is the test focused on usability or user experience?
•	☐ Is the test not feasible for automation due to tool limitations?
Test Case Review Criteria
•	☐ Is the test case title clear and descriptive?
•	☐ Is the test case ID unique and traceable?
•	☐ Are the preconditions and setup steps defined?
•	☐ Are the test steps logical, detailed, and easy to follow?
•	☐ Is the expected result clearly stated?
•	☐ Is the test data specified or referenced?
•	☐ Is the test case linked to a requirement or user story?
•	☐ Is the test case reusable and maintainable?
•	☐ Are edge cases and negative scenarios considered?
•	☐ Is the test case reviewed and approved by peers?

/*********************************************/

🧪 TDD – Test-Driven Development
🔹 What is TDD?
TDD is a development approach where tests are written before the actual code. It follows a Red-Green-Refactor cycle:
Red: Write a failing test case.
Green: Write the minimum code to pass the test.
Refactor: Improve the code while keeping tests green.

🔹 Example:
Java@Testpublic void testAdd() {    assertEquals(5, Calculator.add(2, 3));}``Show more lines
Then you implement the add() method in the Calculator class.

🔹 Benefits:
Ensures code correctness from the start.
Encourages modular and clean code.
Reduces bugs and improves maintainability.


🤝 BDD – Behavior-Driven Development
🔹 What is BDD?
BDD is an extension of TDD that focuses on behavior and collaboration between developers, testers, and business stakeholders. It uses natural language to describe test scenarios.
🔹 Example (using Gherkin syntax):
CucumberFeature: Login functionalityScenario: Successful login  Given the user is on the login page  When the user enters valid credentials  Then the user should be redirected to the dashboardShow more lines
🔹 Tools:
Cucumber (Java)
SpecFlow (.NET)
Behave (Python)

🔹 Benefits:
Improves communication between technical and non-technical teams.
Makes requirements more understandable.
Encourages writing tests that reflect business value.

Aspect		TDD							BDD
Focus -- 	Code correctness   		System behavior
Language -- Programming language	Natural language (Gherkin)
Stakeholders -- Developers			Developers, QA, Business Analysts
Tools	-- JUnit, NUnit, TestNG		Cucumber, SpecFlow, Behave
Test Style -- Unit tests			Acceptance tests




modular functions, custom helpers, and abstraction layers




const { test, expect } = require('@playwright/test');

test('Handle dynamic first name', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://example.com');

  // Locate the dynamic first name field
  const firstNameField = await page.locator('#firstName'); // Replace with the actual selector

  // Wait for the field to be visible
  await firstNameField.waitFor();

  // Extract the dynamic value
  const dynamicFirstName = await firstNameField.inputValue();

  // Perform an assertion or use the value
  console.log(`Dynamic First Name: ${dynamicFirstName}`);
  expect(dynamicFirstName).not.toBeNull(); // Example assertion
});


Company	Sector	Impact Level	Reason
TrueFan	Generative AI Startup	High	Heavy reliance on generative AI and brand campaigns
Zomato	Food Delivery / Marketing	High	Use of generative AI for marketing personalization
Infosys	IT Services	Medium	Global exposure to AI trends but resilient service model
TCS	IT Services	Medium	Global exposure to AI trends but resilient service model
Reliance Industries	Conglomerate	Low	Diversified operations and use of AI for logistics
Mahindra Group	Manufacturing / Agriculture	Low	Practical AI applications in manufacturing and agriculture
HDFC Bank	Banking	Low	Conservative AI use in fraud detection and risk modeling
ICICI Bank	Banking	Low	Conservative AI use in fraud detection and risk modeling
Zoho	Productivity Software	Low	Frugal innovation and cautious AI adoption
IBM India	IT / Consulting	Low	Strategic and ROI-focused AI deployments
			
Company	Sector	Risk Level	Reason
Google	AI, Cloud, Search, Productivity	Very High	Heavy investment in generative AI (e.g., Bard), cloud infrastructure, and speculative AI tools
Microsoft	Software, Cloud, AI	Very High	Aggressive AI integration across Office, Azure, and Copilot tools; high infrastructure costs
Amazon (AWS)	Cloud, AI Infrastructure	High	Major AI infrastructure provider; exposed to demand fluctuations and cost pressures
Meta (Facebook)	Social Media, AR/VR, AI	High	Heavy reliance on AI for personalization and metaverse development; speculative investments
Adobe	Creative Software, AI Tools	High	AI-driven design automation tools may face reduced enterprise demand post-bust
Cisco	Networking, IoT, Cybersecurity	Medium-High	AI in network automation and IoT may see slower adoption due to budget cuts
			
Company	Risk Level	Reason for Risk	
Tata Consultancy Services (TCS)	Very High	Announced 12,000 layoffs due to skill mismatch and automation; entry/mid-level roles most affected 	
Infosys	High	Facing muted growth and pressure to automate routine tasks; mid-level roles at risk	
Wipro	High	Impacted by global slowdown and AI-led restructuring; traditional QA and support roles vulnerable	
HCLTech	High	AI-driven cost optimization affecting infrastructure and testing roles 	
Tech Mahindra	High	Facing structural shifts due to GenAI and automation; middle management under pressure	
LTIMindtree	High	Exposed to AI-led disruption in service delivery and legacy system maintenance	
Cognizant India	High	Large workforce in rule-based roles; automation and AI adoption driving job cuts	
			
Low-Risk Service-Based IT/MNCs in India			
Company	Sector	Reason for Low Risk	
IBM India	IT Services & Consulting	Strategic, ROI-driven AI deployments; strong governance and hybrid models	
L&T Technology Services	Engineering Services	Focused on industrial AI and embedded systems; less exposed to generative AI hype	
Mindtree (LTIMindtree)	IT Services	Balanced AI adoption with emphasis on operational efficiency	
			
			
Low-Risk Product-Based IT/MNCs in India			
Company	Sector	Reason for Low Risk	
Zoho	Productivity Software	Frugal innovation, cautious AI adoption, in-house tech stack	
Freshworks	SaaS / CRM Tools	Focused on practical AI features with clear ROI; avoids speculative infrastructure	
Oracle India	Enterprise Software & Cloud	Conservative enterprise AI adoption; diversified revenue streams	
SAP India	ERP & Business Software	AI used for backend optimization, not speculative consumer-facing tools	
