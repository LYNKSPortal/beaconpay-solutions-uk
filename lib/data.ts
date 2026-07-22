import {
  Umbrella,
  Briefcase,
  HardHat,
  Users,
  Building2,
  FileText,
  ClipboardCheck,
  ClipboardList,
  LineChart,
  MessageSquareQuote,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  label: string;
  href: string;
  icon: LucideIcon;
  shortDescription: string;
  description: string;
  heroText: string;
  whoFor: string[];
  included: string[];
  benefits: string[];
  howItWorks: string[];
  relatedServices: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "umbrella-payroll",
    label: "Umbrella Payroll",
    href: "/services/umbrella-payroll",
    icon: Umbrella,
    shortDescription: "A straightforward PAYE payroll arrangement for contractors working on temporary assignments.",
    description:
      "Beaconpay Solutions supports contractors who require a PAYE payroll arrangement for their assignments. Our umbrella payroll service is designed to simplify administration while providing clear payslips, appropriate payroll deductions and ongoing support.",
    heroText: "A straightforward payroll solution for contractors working on temporary assignments.",
    whoFor: [
      "Temporary contractors",
      "Agency workers",
      "Professionals working across multiple assignments",
      "Contractors who do not want to operate through a limited company",
      "Recruitment agencies requiring payroll support",
    ],
    included: [
      "PAYE payroll processing",
      "National Insurance deductions",
      "Digital payslips",
      "Holiday pay administration",
      "Pension administration where applicable",
      "Statutory payments where eligibility requirements are met",
      "Payroll queries and support",
      "Starter and leaver administration",
    ],
    benefits: [
      "Straightforward administration",
      "Clear payroll documentation",
      "Consistent payment process",
      "Professional support",
      "Reduced contractor payroll workload",
    ],
    howItWorks: [
      "You sign up to our umbrella service and we set up your payroll record.",
      "We process payments from your agency or end client and calculate PAYE deductions.",
      "You receive digital payslips and ongoing support for any payroll queries.",
    ],
    relatedServices: ["contractor-payroll", "recruitment-agency-payroll", "paye-payroll"],
    faqs: [
      { question: "What is umbrella payroll?", answer: "Umbrella payroll is an arrangement where a contractor becomes an employee of an umbrella company. The umbrella processes payments from the agency or end client, deducts PAYE tax and National Insurance, and provides a payslip." },
      { question: "Will I be employed through the umbrella arrangement?", answer: "Yes. Under an umbrella arrangement you are typically employed by the umbrella company and paid through PAYE." },
      { question: "How is holiday pay shown?", answer: "Holiday pay is calculated based on your earnings and shown on your payslip in line with statutory requirements." },
      { question: "What deductions appear on my payslip?", answer: "Your payslip will show PAYE tax, National Insurance, pension contributions where applicable, and any other lawful deductions such as the umbrella margin." },
      { question: "How often will I be paid?", answer: "Payment frequency depends on the arrangement with your agency or end client. We typically process weekly or monthly payroll cycles." },
      { question: "Can I leave the service?", answer: "Yes. You can leave the umbrella service by providing notice in line with the terms of service. We will provide any final documents such as a P45." },
    ],
  },
  {
    slug: "paye-payroll",
    label: "PAYE Payroll",
    href: "/services/paye-payroll",
    icon: Briefcase,
    shortDescription: "Reliable PAYE payroll processing for UK employers with weekly or monthly staff.",
    description:
      "We provide end-to-end PAYE payroll processing for businesses of all sizes. From gross-to-net calculations to RTI submissions and year-end documents, our service helps keep your payroll accurate and on time.",
    heroText: "Reliable payroll processing for businesses with weekly or monthly employees.",
    whoFor: [
      "SMEs",
      "Growing companies",
      "Multi-site businesses",
      "Professional services firms",
      "Employers seeking outsourced payroll support",
    ],
    included: [
      "Gross-to-net payroll calculations",
      "PAYE tax deductions",
      "National Insurance calculations",
      "RTI submissions",
      "P45 processing",
      "P60 processing",
      "Digital payslips",
      "Starter and leaver administration",
      "Statutory Sick Pay",
      "Statutory Maternity, Paternity and Adoption Pay where applicable",
      "Pension auto-enrolment support",
      "Payroll reports",
    ],
    benefits: [
      "Accurate payroll calculations",
      "Timely HMRC submissions",
      "Reduced internal admin",
      "Clear reporting",
      "Support for starters, leavers and changes",
    ],
    howItWorks: [
      "We collect your payroll data each period, including hours, pay rates and changes.",
      "We run gross-to-net calculations, produce payslips and submit RTI information to HMRC.",
      "We deliver reports, manage queries and support year-end processes.",
    ],
    relatedServices: ["payroll-outsourcing", "payroll-administration", "hmrc-compliance", "payroll-reporting"],
    faqs: [
      { question: "Can you process weekly and monthly payroll?", answer: "Yes. We can support weekly, fortnightly, four-weekly and monthly payroll cycles." },
      { question: "What information do you need?", answer: "We typically need employee details, pay rates, tax codes, National Insurance numbers, hours or salaries, and details of any deductions or statutory payments." },
      { question: "Can you manage starters and leavers?", answer: "Yes. We handle starter declarations, P45s, P60s and leaver processing in line with HMRC requirements." },
      { question: "Do you submit RTI information?", answer: "Yes. We submit Full Payment Submissions (FPS) and Employer Payment Summaries (EPS) as required." },
      { question: "Can you support pension contributions?", answer: "Yes. We can calculate pension contributions and provide files for your pension provider." },
      { question: "How do we switch payroll providers?", answer: "We will guide you through a structured transition, gather the necessary records and set up your payroll before the first live run." },
    ],
  },
  {
    slug: "cis-payroll",
    label: "CIS Payroll",
    href: "/services/cis-payroll",
    icon: HardHat,
    shortDescription: "CIS payroll support for construction contractors and subcontractor workforces.",
    description:
      "We support construction businesses operating under the Construction Industry Scheme. Our service includes subcontractor verification, CIS deduction calculations, monthly returns and deduction statements.",
    heroText: "Construction Industry Scheme payroll support for contractors and subcontractor workforces.",
    whoFor: [
      "Construction businesses",
      "Main contractors",
      "Subcontractor-based organisations",
      "Recruitment agencies supplying construction workers",
    ],
    included: [
      "Subcontractor verification",
      "CIS deduction calculations",
      "Monthly CIS returns",
      "Payment and deduction statements",
      "Record keeping",
      "HMRC-focused administration",
      "Contractor payment support",
    ],
    benefits: [
      "Structured CIS administration",
      "Clear deduction statements",
      "Monthly return support",
      "Reduced risk of missed deadlines",
      "Help with verification queries",
    ],
    howItWorks: [
      "We verify subcontractors and confirm the correct deduction rate.",
      "We calculate CIS deductions, prepare statements and submit monthly returns.",
      "We maintain records and support queries from contractors or HMRC.",
    ],
    relatedServices: ["contractor-payroll", "payroll-administration", "hmrc-compliance"],
    faqs: [
      { question: "What is CIS?", answer: "The Construction Industry Scheme (CIS) sets out how contractors must deduct money from payments to subcontractors and pass these deductions to HMRC." },
      { question: "Who needs to register?", answer: "Main contractors must register for CIS. Subcontractors can register to have deductions taken at a lower rate." },
      { question: "What deduction rates may apply?", answer: "The standard CIS deduction rates are set by HMRC. The applicable rate depends on whether a subcontractor is registered and verified." },
      { question: "Do you verify subcontractors?", answer: "Yes. We can assist with subcontractor verification in line with HMRC processes." },
      { question: "Do you submit monthly returns?", answer: "Yes. We can prepare and submit monthly CIS returns on your behalf." },
      { question: "Can you support mixed PAYE and CIS workforces?", answer: "Yes. We can manage both PAYE employees and CIS subcontractors within our payroll administration." },
    ],
  },
  {
    slug: "contractor-payroll",
    label: "Contractor Payroll",
    href: "/services/contractor-payroll",
    icon: Users,
    shortDescription: "Flexible payroll support for contractors, agencies and organisations managing temporary workers.",
    description:
      "Our contractor payroll service supports individuals and organisations managing temporary or contract workers. We provide PAYE processing, payslips and support for assignment changes.",
    heroText: "Flexible payroll support for contractors, agencies and organisations managing temporary workers.",
    whoFor: [
      "Individual contractors",
      "Recruitment agencies",
      "Consultancy firms",
      "Businesses engaging temporary workers",
    ],
    included: [
      "Weekly and monthly payment cycles",
      "PAYE processing",
      "Contractor records",
      "Payslips",
      "Assignment changes",
      "Starter and leaver processing",
      "Payment queries",
      "Agency coordination",
      "Reporting",
    ],
    benefits: [
      "Flexible payment cycles",
      "Clear contractor records",
      "Responsive query support",
      "Structured onboarding",
      "Reliable PAYE processing",
    ],
    howItWorks: [
      "We review the engagement and agree the most appropriate payroll arrangement.",
      "We collect timesheets or payment information and process PAYE payroll.",
      "Contractors receive payslips and we handle ongoing changes and queries.",
    ],
    relatedServices: ["umbrella-payroll", "recruitment-agency-payroll", "paye-payroll"],
    faqs: [
      { question: "Who is contractor payroll for?", answer: "It is for contractors, recruitment agencies and organisations that engage temporary or contract workers and need PAYE payroll support." },
      { question: "Will all contractors be paid through PAYE?", answer: "Not necessarily. The correct arrangement depends on the engagement terms and employment status assessment. We can advise on the most appropriate route." },
      { question: "Can you support weekly payments?", answer: "Yes. Weekly and monthly cycles are both available depending on your needs." },
      { question: "What if a contractor changes assignment?", answer: "We update the payroll record to reflect the new assignment and ensure continuity in payment and reporting." },
    ],
  },
  {
    slug: "recruitment-agency-payroll",
    label: "Recruitment Agency Payroll",
    href: "/services/recruitment-agency-payroll",
    icon: Building2,
    shortDescription: "Scalable payroll support for recruitment agencies managing temporary and contract workers.",
    description:
      "We provide scalable payroll services for recruitment agencies placing temporary and contract workers. Our support includes high-volume processing, worker onboarding, PAYE and umbrella coordination and clear reporting.",
    heroText: "Scalable payroll support for recruitment agencies managing temporary and contract workers.",
    whoFor: [
      "Temporary recruitment agencies",
      "Contract staffing agencies",
      "High-volume worker placement firms",
      "Agencies seeking back-office payroll support",
    ],
    included: [
      "High-volume payroll processing",
      "Weekly payroll cycles",
      "Worker onboarding support",
      "Starter and leaver administration",
      "PAYE and umbrella payroll coordination",
      "CIS support where appropriate",
      "Payroll reports",
      "Query handling",
      "Payment schedules",
      "Agency communication",
    ],
    benefits: [
      "Reduced internal administration",
      "Structured payroll workflows",
      "Scalable support",
      "Improved worker communication",
      "Clear reporting",
    ],
    howItWorks: [
      "We agree data formats, payment schedules and reporting requirements.",
      "You supply worker and timesheet data and we process payroll each cycle.",
      "We handle queries, provide reports and support worker onboarding and leaving.",
    ],
    relatedServices: ["contractor-payroll", "umbrella-payroll", "paye-payroll", "payroll-outsourcing"],
    faqs: [
      { question: "Can you handle high volumes?", answer: "Yes. Our service is designed to scale with the number of workers you place." },
      { question: "Do you support both PAYE and umbrella workers?", answer: "Yes. We can coordinate both arrangements depending on how each worker is engaged." },
      { question: "What reports do you provide?", answer: "We provide gross-to-net reports, payment summaries and bespoke reports agreed with your agency." },
      { question: "Can you support CIS agencies?", answer: "Yes. Where you supply construction workers under CIS, we can provide CIS deduction and return support." },
    ],
  },
  {
    slug: "payroll-outsourcing",
    label: "Payroll Outsourcing",
    href: "/services/payroll-outsourcing",
    icon: FileText,
    shortDescription: "Let our payroll team manage the administration while you focus on your organisation.",
    description:
      "Our outsourced payroll service manages the day-to-day payroll function on your behalf. We handle calculations, payslips, submissions, reporting and query management.",
    heroText: "Let our payroll team manage the administration while you focus on your organisation.",
    whoFor: [
      "SMEs without an in-house payroll specialist",
      "Organisations looking to reduce admin burden",
      "Businesses undergoing growth",
      "Companies seeking reliable payroll support",
    ],
    included: [
      "End-to-end payroll processing",
      "Payroll calculations",
      "Payslips",
      "RTI submissions",
      "Payroll reports",
      "Starter and leaver management",
      "Statutory payment administration",
      "Pension contribution files",
      "Year-end processing",
      "Payroll query support",
    ],
    benefits: [
      "Reduce internal workload",
      "Improve process consistency",
      "Access payroll expertise",
      "Support business growth",
      "Reduce key-person dependency",
      "Improve reporting visibility",
    ],
    howItWorks: [
      "We review your current payroll and agree a tailored service schedule.",
      "You provide data each period and we process, check and submit everything.",
      "We deliver reports, answer queries and support year-end and changes.",
    ],
    relatedServices: ["paye-payroll", "payroll-reporting", "payroll-administration", "payroll-consultancy"],
    faqs: [
      { question: "Why outsource payroll?", answer: "Outsourcing can reduce administrative burden, improve consistency, provide access to payroll expertise and free up internal resources." },
      { question: "Will we still have control?", answer: "Yes. You retain control over approvals and decisions while we handle the operational payroll tasks." },
      { question: "How do we share payroll data?", answer: "We agree a secure process for supplying data each pay period, whether by spreadsheet, secure upload or integration." },
      { question: "Can we move from another provider?", answer: "Yes. We can manage a mid-year transition with minimal disruption." },
    ],
  },
  {
    slug: "payroll-reporting",
    label: "Payroll Reporting",
    href: "/services/payroll-reporting",
    icon: LineChart,
    shortDescription: "Clear payroll reporting to help you understand costs, liabilities and payment activity.",
    description:
      "We provide detailed payroll reports that help you track costs, liabilities and payment activity. Reports can be tailored to your departments, cost centres and management needs.",
    heroText: "Clear payroll reporting to help you understand costs, liabilities and payment activity.",
    whoFor: [
      "Business owners",
      "Finance teams",
      "HR departments",
      "Organisations needing visibility over payroll costs",
    ],
    included: [
      "Payroll summaries",
      "Gross-to-net reports",
      "PAYE and National Insurance reports",
      "Pension reports",
      "Department and cost-centre reports",
      "Holiday pay reporting",
      "Year-to-date figures",
      "Year-end documents",
      "Custom reporting requirements",
    ],
    benefits: [
      "Greater visibility of payroll costs",
      "Consistent report formats",
      "Department-level analysis",
      "Supports budgeting and forecasting",
      "Secure digital delivery",
    ],
    howItWorks: [
      "We agree the reports you need and their format.",
      "Each payroll run produces the agreed reports automatically.",
      "Reports are delivered securely after each payroll cycle.",
    ],
    relatedServices: ["paye-payroll", "payroll-outsourcing", "payroll-administration"],
    faqs: [
      { question: "What reports can you provide?", answer: "We provide gross-to-net, PAYE, National Insurance, pension, department and custom reports." },
      { question: "Can reports be tailored by department?", answer: "Yes. We can structure reports by department, cost centre or any other useful category." },
      { question: "How are reports delivered?", answer: "Reports are delivered securely in digital format after each payroll run." },
      { question: "Can we request ad hoc reports?", answer: "Yes. Custom reporting requirements can be agreed as part of your service." },
    ],
  },
  {
    slug: "hmrc-compliance",
    label: "HMRC Compliance Support",
    href: "/services/hmrc-compliance",
    icon: ClipboardCheck,
    shortDescription: "Structured payroll administration designed around UK reporting and record-keeping requirements.",
    description:
      "Our HMRC compliance support helps ensure your payroll processes are structured around current UK requirements, including RTI submissions, record retention and year-end administration.",
    heroText: "Structured payroll administration designed around UK reporting and record-keeping requirements.",
    whoFor: [
      "Employers needing HMRC support",
      "Businesses managing PAYE obligations",
      "Construction contractors under CIS",
      "Organisations seeking process confidence",
    ],
    included: [
      "RTI submissions",
      "FPS and EPS administration",
      "PAYE records",
      "Starter declarations",
      "P45 and P60 administration",
      "Statutory payments",
      "Payroll record retention",
      "CIS returns",
      "Pension administration support",
      "Guidance on payroll deadlines",
    ],
    benefits: [
      "Structured approach to UK payroll obligations",
      "Clear record-keeping processes",
      "Timely submissions",
      "Reduced compliance admin",
      "Professional guidance on deadlines",
    ],
    howItWorks: [
      "We review your current compliance processes and obligations.",
      "We set up structured workflows for submissions, records and deadlines.",
      "We provide ongoing support and updates as requirements change.",
    ],
    relatedServices: ["paye-payroll", "cis-payroll", "payroll-administration", "payroll-outsourcing"],
    faqs: [
      { question: "Do you provide tax advice?", answer: "No. We provide general payroll support and guidance. For specialist tax or legal advice you should consult a qualified adviser." },
      { question: "What is RTI?", answer: "Real Time Information (RTI) is the system employers use to report PAYE information to HMRC each time they pay staff." },
      { question: "Can you help with HMRC queries?", answer: "Yes. We can assist with organising information and responding to routine payroll-related HMRC queries." },
      { question: "How long are records kept?", answer: "Records are retained in line with current UK tax, employment and regulatory requirements." },
    ],
  },
  {
    slug: "payroll-administration",
    label: "Payroll Administration",
    href: "/services/payroll-administration",
    icon: ClipboardList,
    shortDescription: "Practical support for the day-to-day tasks that keep payroll records accurate.",
    description:
      "We handle the routine tasks that keep payroll running smoothly, including starters, leavers, tax code updates, deductions, holiday pay and query management.",
    heroText: "Practical support for the day-to-day tasks that keep payroll records accurate.",
    whoFor: [
      "Employers needing admin support",
      "Businesses with frequent employee changes",
      "Organisations without a dedicated payroll administrator",
      "Companies seeking reliable day-to-day assistance",
    ],
    included: [
      "New starters",
      "Leavers",
      "Employee changes",
      "Tax code updates",
      "Pay changes",
      "Deductions",
      "Holiday pay",
      "Statutory leave",
      "Payroll records",
      "Payroll calendars",
      "Payment schedules",
      "Query management",
    ],
    benefits: [
      "Accurate and up-to-date records",
      "Prompt handling of changes",
      "Reduced internal workload",
      "Clear communication",
      "Consistent processes",
    ],
    howItWorks: [
      "You notify us of employee changes, starters, leavers and other updates.",
      "We update the payroll records and confirm the changes.",
      "We manage queries and keep the payroll calendar on track.",
    ],
    relatedServices: ["paye-payroll", "payroll-outsourcing", "hmrc-compliance", "payroll-consultancy"],
    faqs: [
      { question: "What day-to-day tasks do you cover?", answer: "We cover starters, leavers, pay changes, tax code updates, deductions, holiday pay and statutory leave." },
      { question: "How quickly are changes processed?", answer: "Changes are processed in line with agreed service levels and before the next payroll run." },
      { question: "Do you manage payroll queries from employees?", answer: "Yes. We can handle routine payroll queries directly or through your HR team." },
      { question: "Can you produce a payroll calendar?", answer: "Yes. We can maintain a payroll calendar showing submission and payment deadlines." },
    ],
  },
  {
    slug: "payroll-consultancy",
    label: "Payroll Consultancy",
    href: "/services/payroll-consultancy",
    icon: MessageSquareQuote,
    shortDescription: "Practical payroll guidance for organisations reviewing or improving their processes.",
    description:
      "We provide practical payroll guidance for organisations reviewing their payroll processes, considering a provider transition or planning for growth.",
    heroText: "Practical payroll guidance for organisations reviewing or improving their processes.",
    whoFor: [
      "Businesses reviewing payroll processes",
      "Companies planning a payroll provider transition",
      "Organisations scaling their workforce",
      "Finance and HR teams seeking guidance",
    ],
    included: [
      "Payroll process reviews",
      "Workflow improvement",
      "Payroll provider transitions",
      "Payroll calendar planning",
      "Reporting requirements",
      "Record-keeping processes",
      "Payroll controls",
      "Internal responsibility reviews",
      "Growth and scaling support",
    ],
    benefits: [
      "Independent process review",
      "Practical recommendations",
      "Smoother transitions",
      "Improved controls",
      "Scalable planning",
    ],
    howItWorks: [
      "We review your current payroll processes, controls and objectives.",
      "We identify improvements and provide a clear action plan.",
      "We support implementation and monitor progress.",
    ],
    relatedServices: ["payroll-outsourcing", "payroll-administration", "payroll-reporting"],
    faqs: [
      { question: "Does consultancy replace professional advice?", answer: "No. Our consultancy provides practical payroll guidance and should not replace legal, tax or regulated financial advice." },
      { question: "Can you help us switch payroll providers?", answer: "Yes. We can plan and support a structured transition to a new payroll provider or in-house system." },
      { question: "Do you advise on payroll software?", answer: "We can discuss options based on your needs, but we do not provide formal procurement or IT advice." },
      { question: "How is a consultancy engagement structured?", answer: "We agree the scope, deliverables and timeline before starting any work." },
    ],
  },
];

export const servicesBySlug = Object.fromEntries(services.map((s) => [s.slug, s])) as Record<string, Service>;

export interface Industry {
  slug: string;
  label: string;
  href: string;
  shortDescription: string;
  description: string;
  challenges: string[];
  howWeHelp: string[];
  relatedServices: string[];
  faqs: { question: string; answer: string }[];
}

export const industries: Industry[] = [
  {
    slug: "contractors",
    label: "Contractors",
    href: "/industries/contractors",
    shortDescription: "Payroll support for individual contractors and freelance professionals.",
    description: "Beaconpay Solutions provides payroll arrangements designed for contractors, including umbrella, PAYE and contractor payroll options.",
    challenges: [
      "Choosing the right payroll arrangement",
      "Understanding deductions and payslips",
      "Managing multiple assignments",
      "Keeping compliant with changing rules",
    ],
    howWeHelp: [
      "Explain your payroll options clearly",
      "Process PAYE deductions accurately",
      "Provide digital payslips",
      "Support you through assignment changes",
    ],
    relatedServices: ["umbrella-payroll", "contractor-payroll", "paye-payroll"],
    faqs: [
      { question: "What payroll options are available for contractors?", answer: "Depending on your engagement, options may include umbrella payroll, agency PAYE or other arrangements. We can discuss what suits your situation." },
      { question: "Can I switch between assignments?", answer: "Yes. We update your record when you move to a new assignment to keep payroll continuous." },
    ],
  },
  {
    slug: "recruitment-agencies",
    label: "Recruitment Agencies",
    href: "/industries/recruitment-agencies",
    shortDescription: "Scalable payroll services for agencies placing temporary and contract workers.",
    description: "We help recruitment agencies manage high-volume payroll for temporary and contract workers with reliable processing and clear reporting.",
    challenges: [
      "High volumes of workers",
      "Frequent starter and leaver activity",
      "Mixed PAYE and umbrella arrangements",
      "Worker queries and payment schedules",
    ],
    howWeHelp: [
      "Process high-volume payroll accurately",
      "Support worker onboarding",
      "Coordinate PAYE and umbrella arrangements",
      "Provide clear agency reports",
    ],
    relatedServices: ["recruitment-agency-payroll", "umbrella-payroll", "contractor-payroll"],
    faqs: [
      { question: "Can you handle large worker volumes?", answer: "Yes. Our service is designed to scale with the number of workers you place." },
      { question: "Do you support umbrella and PAYE workers?", answer: "Yes. We can coordinate both arrangements within your agency." },
    ],
  },
  {
    slug: "construction",
    label: "Construction",
    href: "/industries/construction",
    shortDescription: "CIS and PAYE payroll support for construction businesses and contractors.",
    description: "We provide Construction Industry Scheme support and PAYE payroll for construction firms employing staff and subcontractors.",
    challenges: [
      "Managing CIS deductions and returns",
      "Verifying subcontractors",
      "Mixed PAYE and CIS workforces",
      "Keeping deduction records accurate",
    ],
    howWeHelp: [
      "Verify subcontractors and apply deduction rates",
      "Submit monthly CIS returns",
      "Provide payment and deduction statements",
      "Maintain accurate records",
    ],
    relatedServices: ["cis-payroll", "paye-payroll", "payroll-administration"],
    faqs: [
      { question: "Do you handle CIS monthly returns?", answer: "Yes. We can prepare and submit CIS returns on your behalf." },
      { question: "Can you support both employees and subcontractors?", answer: "Yes. We can manage PAYE employees and CIS subcontractors together." },
    ],
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    href: "/industries/healthcare",
    shortDescription: "Payroll support for healthcare providers with varied shift patterns and staff groups.",
    description: "We support healthcare organisations with PAYE payroll processing for staff, including varied hours, statutory payments and reporting.",
    challenges: [
      "Varied shift patterns and pay rates",
      "Statutory leave and sick pay",
      "Multiple staff categories",
      "Accurate record keeping",
    ],
    howWeHelp: [
      "Process complex pay variations",
      "Administer statutory payments",
      "Maintain accurate payroll records",
      "Provide clear reports for finance teams",
    ],
    relatedServices: ["paye-payroll", "payroll-administration", "payroll-outsourcing"],
    faqs: [
      { question: "Can you handle varying shift patterns?", answer: "Yes. We can process variable hours and rates each pay period." },
      { question: "Do you support statutory payments?", answer: "Yes. We administer Statutory Sick Pay, Maternity, Paternity and Adoption Pay where applicable." },
    ],
  },
  {
    slug: "logistics",
    label: "Logistics",
    href: "/industries/logistics",
    shortDescription: "PAYE payroll support for logistics and transport businesses.",
    description: "We provide reliable payroll services for logistics companies with weekly pay cycles, temporary workers and varied shift patterns.",
    challenges: [
      "Weekly and monthly pay cycles",
      "High temporary worker turnover",
      "Overtime and shift premiums",
      "Driver and warehouse staff payroll",
    ],
    howWeHelp: [
      "Run weekly or monthly payroll",
      "Process overtime and premiums",
      "Handle starter and leaver admin",
      "Provide cost reports",
    ],
    relatedServices: ["paye-payroll", "contractor-payroll", "payroll-outsourcing"],
    faqs: [
      { question: "Can you process weekly payroll for drivers?", answer: "Yes. Weekly cycles are commonly used in logistics and we can support them." },
      { question: "Do you handle overtime calculations?", answer: "Yes. We can process overtime, shift premiums and other pay variations." },
    ],
  },
  {
    slug: "hospitality",
    label: "Hospitality",
    href: "/industries/hospitality",
    shortDescription: "Flexible payroll support for hospitality businesses with seasonal and variable staffing.",
    description: "We help hospitality businesses manage PAYE payroll for permanent, seasonal and variable-hour workers.",
    challenges: [
      "Seasonal staffing changes",
      "Variable hours and tips",
      "High turnover",
      "Compliance with PAYE obligations",
    ],
    howWeHelp: [
      "Process variable-hour payroll",
      "Manage starters and leavers",
      "Support statutory payments",
      "Keep PAYE records accurate",
    ],
    relatedServices: ["paye-payroll", "payroll-administration", "payroll-outsourcing"],
    faqs: [
      { question: "Can you support seasonal workers?", answer: "Yes. We can manage payroll for fluctuating workforces." },
      { question: "Do you handle variable hours?", answer: "Yes. You provide the hours and we process the payroll accordingly." },
    ],
  },
  {
    slug: "professional-services",
    label: "Professional Services",
    href: "/industries/professional-services",
    shortDescription: "Reliable PAYE payroll for professional services firms and consultancies.",
    description: "We support professional services firms with straightforward PAYE payroll, pension support and reporting.",
    challenges: [
      "Salary and bonus payroll",
      "Pension auto-enrolment",
      "Professional fee deductions",
      "Management reporting",
    ],
    howWeHelp: [
      "Process monthly salary payroll",
      "Support pension auto-enrolment",
      "Handle bonuses and deductions",
      "Provide management reports",
    ],
    relatedServices: ["paye-payroll", "payroll-reporting", "payroll-outsourcing"],
    faqs: [
      { question: "Can you process bonus payments?", answer: "Yes. Bonuses and one-off payments can be processed within the payroll cycle." },
      { question: "Do you support pension auto-enrolment?", answer: "Yes. We can calculate contributions and provide pension provider files." },
    ],
  },
  {
    slug: "smes",
    label: "SMEs",
    href: "/industries/smes",
    shortDescription: "Straightforward payroll services for small and medium-sized enterprises.",
    description: "We provide affordable, reliable payroll support for SMEs that need accuracy, compliance and responsive service without the overhead of an in-house payroll team.",
    challenges: [
      "Limited in-house payroll expertise",
      "Keeping up with PAYE changes",
      "Managing pension auto-enrolment",
      "Finding time for payroll admin",
    ],
    howWeHelp: [
      "Run your payroll accurately each period",
      "Submit RTI and manage HMRC obligations",
      "Support auto-enrolment pensions",
      "Provide clear, jargon-free communication",
    ],
    relatedServices: ["paye-payroll", "payroll-outsourcing", "payroll-administration", "hmrc-compliance"],
    faqs: [
      { question: "Is outsourced payroll suitable for small businesses?", answer: "Yes. Outsourcing can help small businesses access expertise while keeping costs predictable." },
      { question: "Can you support our first employee?", answer: "Yes. We can set up PAYE and process payroll from your first hire onwards." },
    ],
  },
];

export const industriesBySlug = Object.fromEntries(industries.map((i) => [i.slug, i])) as Record<string, Industry>;

export const faqCategories = [
  {
    title: "General",
    faqs: [
      { question: "What does Beaconpay Solutions do?", answer: "We provide payroll, PAYE, CIS, umbrella and contractor payroll services for businesses, recruitment agencies and professionals across the UK." },
      { question: "Who do you work with?", answer: "We work with contractors, recruitment agencies, construction businesses, healthcare providers, logistics companies, hospitality businesses, professional services firms and SMEs." },
      { question: "Where are your services available?", answer: "Our services are available throughout the United Kingdom." },
      { question: "How can I contact your team?", answer: "Email support@beaconpaysolutions.co.uk or use the contact form or request a call back form on our website." },
      { question: "How quickly will you respond?", answer: "We aim to respond to enquiries within one business day." },
    ],
  },
  {
    title: "PAYE Payroll",
    faqs: [
      { question: "What is PAYE payroll?", answer: "PAYE (Pay As You Earn) is the system employers use to deduct income tax and National Insurance from employee wages and pay them to HMRC." },
      { question: "Can you process weekly and monthly payroll?", answer: "Yes. We support weekly, fortnightly, four-weekly and monthly payroll cycles." },
      { question: "Do you provide P45s and P60s?", answer: "Yes. We process P45s for leavers and P60s at the end of the tax year." },
      { question: "Can you support pension auto-enrolment?", answer: "Yes. We can calculate pension contributions and provide files for your pension provider." },
      { question: "What information is needed to set up payroll?", answer: "We typically need employee details, tax codes, National Insurance numbers, pay rates and bank details." },
    ],
  },
  {
    title: "Umbrella Payroll",
    faqs: [
      { question: "What is an umbrella payroll arrangement?", answer: "An umbrella arrangement is where a contractor is employed by an umbrella company, which processes payments from the agency or end client and deducts PAYE." },
      { question: "How are payroll deductions calculated?", answer: "Deductions include PAYE tax, National Insurance, pension contributions where applicable and any other lawful deductions." },
      { question: "How is holiday pay handled?", answer: "Holiday pay is calculated based on earnings and shown on your payslip in line with statutory requirements." },
      { question: "Will I receive a payslip?", answer: "Yes. You will receive a digital payslip for each payment period." },
      { question: "How do I leave the service?", answer: "You can leave by giving notice in line with the terms of service. We will provide a final payslip and P45 where required." },
    ],
  },
  {
    title: "CIS",
    faqs: [
      { question: "What is the Construction Industry Scheme?", answer: "CIS is a HMRC scheme under which contractors deduct money from a subcontractor's payments and pass it to HMRC." },
      { question: "Do you verify subcontractors?", answer: "Yes. We can assist with subcontractor verification in line with HMRC requirements." },
      { question: "Can you submit monthly CIS returns?", answer: "Yes. We can prepare and submit monthly CIS returns on your behalf." },
      { question: "What is a payment and deduction statement?", answer: "It is a document showing how much a subcontractor was paid and how much was deducted under CIS." },
      { question: "Can PAYE and CIS workers be managed together?", answer: "Yes. We can manage both PAYE employees and CIS subcontractors within the same payroll support service." },
    ],
  },
  {
    title: "Switching Providers",
    faqs: [
      { question: "How do I move my payroll to Beaconpay Solutions?", answer: "Contact us and we will guide you through a structured transition, including data collection and setup." },
      { question: "What records will you need?", answer: "We will need employee details, pay history, tax codes, pension information and any year-to-date figures." },
      { question: "Can you support a mid-year transition?", answer: "Yes. We can manage mid-year transitions with careful planning to ensure continuity." },
      { question: "How long does setup take?", answer: "Setup times vary depending on the complexity of your payroll. We will provide an estimated timeline during onboarding." },
      { question: "Will you communicate with my previous provider?", answer: "With your permission, we can liaise with your previous provider to obtain the necessary information." },
    ],
  },
];

export interface Article {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  featuredImage?: string;
  author?: string;
}

export const articles: Article[] = [
  {
    slug: "guide-to-paye-payroll-uk-employers",
    title: "A Guide to PAYE Payroll for UK Employers",
    summary: "An overview of PAYE payroll, including key obligations, RTI submissions and what employers need to get started.",
    category: "PAYE Guides",
    publishedAt: "2026-07-01",
    readingTime: "6 min read",
    author: "Beaconpay Solutions",
  },
  {
    slug: "understanding-cis-payroll",
    title: "Understanding CIS Payroll",
    summary: "What the Construction Industry Scheme means for contractors and subcontractors, and how deductions and returns work.",
    category: "CIS Guides",
    publishedAt: "2026-07-08",
    readingTime: "5 min read",
    author: "Beaconpay Solutions",
  },
  {
    slug: "what-contractors-should-know-about-umbrella-payroll",
    title: "What Contractors Should Know About Umbrella Payroll",
    summary: "Key considerations for contractors thinking about working through an umbrella payroll arrangement.",
    category: "Contractor Guidance",
    publishedAt: "2026-07-15",
    readingTime: "5 min read",
    author: "Beaconpay Solutions",
  },
  {
    slug: "preparing-to-switch-payroll-providers",
    title: "Preparing to Switch Payroll Providers",
    summary: "A practical checklist for businesses planning a smooth transition to a new payroll provider.",
    category: "Employer Payroll Guidance",
    publishedAt: "2026-07-20",
    readingTime: "4 min read",
    author: "Beaconpay Solutions",
  },
  {
    slug: "payroll-information-new-starters",
    title: "Common Payroll Information Needed for New Starters",
    summary: "The details employers typically need to collect when onboarding a new employee for PAYE payroll.",
    category: "Employer Payroll Guidance",
    publishedAt: "2026-07-22",
    readingTime: "4 min read",
    author: "Beaconpay Solutions",
  },
];
