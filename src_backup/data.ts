import { Service, CountryData, Article, Testimonial, FaqItem } from './types';

export const servicesData: Service[] = [
  {
    id: 'mainland-setup',
    slug: 'mainland-company-formation',
    title: 'Mainland Company Formation',
    category: 'Formation',
    shortDesc: 'Establish an onshore enterprise with the Department of Economy and Tourism (DET). Gain unrestricted access to the local UAE market and government contracts.',
    iconName: 'Building2',
    summary: 'Grow Infinity Mainland Company Formation enables global businesses to secure onshore commercial licenses, allowing unrestricted trading across the UAE and seamless bidding on local government projects.',
    definition: 'A Mainland Company is an onshore corporate entity registered under the Department of Economy and Tourism (DET) in the respective emirate. It operates without geographical restrictions inside the country and can hold 100% foreign ownership for most commercial and industrial activities since the 2021 FDI reforms.',
    whoIsItFor: [
      'Retail and trading operations targeting the local UAE market',
      'Construction, engineering, and logistics companies bidding on government tenders',
      'Professional services firms requiring physical local offices',
      'Conglomerates establishing regional administrative headquarters'
    ],
    benefits: [
      '100% foreign ownership allowed for standard commercial activities',
      'Zero geographical limitations on trade and operations inside the UAE',
      'Unrestricted eligibility to bid on lucrative government and municipal contracts',
      'Simplified corporate bank account openings and visa allocations',
      'No minimum capital requirement for standard Commercial LLCs'
    ],
    requirements: [
      'Selection of approved commercial activity under DET classification',
      'Reservation of unique trade name',
      'Physical office space lease (minimum 140 sq ft, Ejari registered)',
      'Drafting of Memorandum of Association (MOA) in English and Arabic'
    ],
    documents: [
      'Passport copies and entry stamp/visa of all shareholders & managers',
      'Emirates ID (if resident) or Unified Number',
      'Approved Trade Name reservation certificate',
      'Initial Approval Certificate from DED',
      'Signed Lease Agreement (Ejari) for office premises'
    ],
    baseCost: 'AED 15,000 onwards',
    timeline: '4 to 7 Business Days',
    commonMistakes: [
      'Selecting incorrect activity codes leading to regulatory bottlenecks',
      'Leasing an office before receiving trade name and initial approvals',
      'Omitting proper power of attorney structure for corporate shareholders'
    ],
    whyGrowInfinity: [
      'End-to-end management of Department of Economy and Tourism (DET) processes',
      'Elite relationships with municipal offices for rapid approvals',
      'Complementary first-year corporate bank account introduction and PRO services'
    ],
    relatedServices: ['corporate-tax', 'pro-services', 'corporate-banking'],
    relatedLocations: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    externalReferences: ['https://www.economy.gov.ae/', 'https://det.gov.ae/'],
    faqs: [
      {
        question: 'Do I need a UAE national partner for a mainland company?',
        answer: 'Since June 2021, the UAE allows 100% foreign ownership of mainland companies for over 1,000 commercial and industrial activities, eliminating the requirement of a local UAE national partner holding 51% shares.'
      },
      {
        question: 'What is an Ejari and is it mandatory?',
        answer: 'Ejari is the official system for registering commercial lease contracts in Dubai. Yes, having a physical office with an Ejari registration is a mandatory requirement to issue a Mainland commercial license.'
      }
    ]
  },
  {
    id: 'freezone-setup',
    slug: 'free-zone-setup',
    title: 'Free Zone Company Setup',
    category: 'Formation',
    shortDesc: 'Launch your company in one of the UAE’s 40+ specialized jurisdictions. Benefit from 100% tax exemptions, full profit repatriation, and simplified customs.',
    iconName: 'Globe',
    summary: 'A fast, tax-efficient gateway for international tech, consulting, and trade businesses looking to utilize state-of-the-art infrastructure under localized regulations.',
    definition: 'A Free Zone Company is a corporate entity registered within a designated economic district. Each free zone has its own independent regulatory authority, customs procedures, and licensing guidelines tailored to specific industries (e.g., tech, creative, media, healthcare).',
    whoIsItFor: [
      'E-commerce platforms, tech startups, and digital agencies',
      'Import-export businesses requiring custom duty exemptions',
      'Consultants, coaches, and remote services providers',
      'Financial services, marketing, and media agencies'
    ],
    benefits: [
      '100% corporate tax exemptions on qualifying foreign-source income',
      '100% import and export tax exemptions inside the economic zone',
      '100% capital and profit repatriation rights back to home countries',
      'No physical office required (Virtual Desk / Flexi-Desk options available)',
      'Highly structured, digital-first licensing and visa processes'
    ],
    requirements: [
      'Selection of specialized Free Zone jurisdiction (e.g., DMCC, IFZA, DTEC)',
      'Choice of commercial, professional, or industrial activity',
      'Reservation of company name with the specific Free Zone Authority',
      'Submission of business plan (for specialized fields)'
    ],
    documents: [
      'Passport copies of shareholders, directors, and general managers',
      'Recent utility bill as proof of address for directors',
      'CV or professional profile of the main promoter',
      'Signed lease agreement or Flexi-Desk allocation certificate'
    ],
    baseCost: 'AED 8,500 onwards',
    timeline: '3 to 5 Business Days',
    commonMistakes: [
      'Choosing a free zone without verifying if banks support its trade licenses',
      'Failing to understand the limitations on physical trading with mainland entities',
      'Overpaying for multiple visas that are not immediately required'
    ],
    whyGrowInfinity: [
      'Authorized partner status with premium Free Zones (DMCC, IFZA, Meydan, SPC, DAFZA)',
      'Pre-negotiated corporate packages with zero hidden administrative fees',
      'Direct fast-track integration with banking, accounting, and VAT filing'
    ],
    relatedServices: ['corporate-banking', 'accounting-vat', 'compliance'],
    relatedLocations: ['Dubai', 'Abu Dhabi', 'RAK', 'Sharjah'],
    externalReferences: ['https://www.dmcc.ae/', 'https://www.ifza.com/'],
    faqs: [
      {
        question: 'Can a Free Zone company trade inside the UAE mainland?',
        answer: 'Directly, no. Free Zone companies are limited to trading within their designated zone or internationally. To sell to mainland UAE consumers, they must engage a local distributor, set up a mainland branch, or utilize specific e-commerce exemptions.'
      },
      {
        question: 'Which is the cheapest UAE Free Zone for software startups?',
        answer: 'Jurisdictions such as Meydan Free Zone, SPC Free Zone, and IFZA offer exceptionally cost-effective virtual licenses starting around AED 8,500 with zero visa quotas, highly favored by remote tech startups.'
      }
    ]
  },
  {
    id: 'offshore-setup',
    slug: 'offshore-company',
    title: 'Offshore Company Setup',
    category: 'Formation',
    shortDesc: 'Secure international asset protection, hold global real estate, and conduct borderless trade through premium offshore centers in JAFZA and RAKICC.',
    iconName: 'ShieldAlert',
    summary: 'Grow Infinity Offshore structures provide unparalleled international privacy, asset holding capability, and cross-border commercial routing.',
    definition: 'An Offshore Company (Non-Resident Company) is registered outside the local UAE jurisdiction (primarily under RAKICC or JAFZA). It is legally prohibited from trading directly inside the UAE but is optimized to hold foreign assets, global intellectual property, and real estate.',
    whoIsItFor: [
      'Holding companies managing international asset portfolios',
      'High-net-worth individuals seeking secure succession planning',
      'Venture capitalists investing in cross-border entities',
      'Intellectual property holders routing licensing rights'
    ],
    benefits: [
      'Total corporate confidentiality with no public share registers',
      '100% tax exemption on worldwide income and inheritance assets',
      'Multi-currency corporate bank accounts allowed globally',
      'Low annual maintenance fees and zero mandatory audit submission',
      'Legal vehicle optimized for holding offshore real estate portfolios'
    ],
    requirements: [
      'Appointment of a licensed UAE registered agent (Grow Infinity)',
      'Minimum of one shareholder, director, and secretary',
      'Approval of trade name and physical registered agent address',
      'Clear proof of lawful source of funds (AML verification)'
    ],
    documents: [
      'Certified passport copy of all ultimate beneficial owners (UBOs)',
      'Original bank reference letter (not older than 3 months)',
      'Proof of residence (utility bill or bank statement)',
      'Comprehensive CV outlining business experience'
    ],
    baseCost: 'AED 12,000 onwards',
    timeline: '5 to 8 Business Days',
    commonMistakes: [
      'Assuming an offshore company permits hiring UAE staff or leasing local offices',
      'Failing to supply a registered agent, which triggers immediate statutory dissolution',
      'Underestimating the rigorous compliance vetting needed for offshore banking'
    ],
    whyGrowInfinity: [
      'Certified, premier registered agents with RAKICC and JAFZA authorities',
      'A++ rated corporate structuring and trust lawyers on demand',
      'Complete confidentiality and direct secure client vaults'
    ],
    relatedServices: ['compliance', 'business-advisory'],
    relatedLocations: ['RAK', 'Dubai'],
    externalReferences: ['https://www.rakicc.com/'],
    faqs: [
      {
        question: 'Can an offshore company lease a physical office in Dubai?',
        answer: 'No, offshore companies cannot lease local offices or obtain physical business premises. They are represented solely by the physical office address of their licensed Registered Agent (such as Grow Infinity).'
      }
    ]
  },
  {
    id: 'corporate-banking',
    slug: 'corporate-bank-account',
    title: 'Corporate Bank Account Opening',
    category: 'Financial',
    shortDesc: 'Navigate complex compliance gates with confidence. Secure local and tier-1 international business banking accounts with leading neo and traditional banks.',
    iconName: 'CreditCard',
    summary: 'Secure commercial banking with absolute clarity. We leverage our institutional relationships with Emirates NBD, Mashreq, Wio, HSBC, and ADCB to bypass corporate delays.',
    definition: 'Corporate Bank Account Opening represents the structured process of passing Anti-Money Laundering (AML) and Know Your Customer (KYC) audits to secure transaction, multi-currency, and treasury accounts for newly established entities.',
    whoIsItFor: [
      'Newly formed UAE mainland and free zone entities',
      'Foreign corporate branches requiring local physical treasury facilities',
      'High-volume transactional e-commerce stores needing payment gateways',
      'SMEs needing access to multi-currency digital corporate cards'
    ],
    benefits: [
      'Access to premium multi-currency accounts (AED, USD, EUR, GBP, CHF)',
      'Seamless digital corporate card issuing and automated spend controls',
      'Integration with modern merchant services and payment gateway APIs',
      'Preferential corporate credit, trade finance, and letter of credit limits',
      'Personalized dedicated corporate relationship managers for tier-1 accounts'
    ],
    requirements: [
      'Valid corporate trade license and registration documents',
      'Detailed commercial business profile and activity forecast',
      'Verification of physical address (lease contract, Ejari, or physical office pictures)',
      'Source of wealth details for all key ultimate beneficial owners (UBOs)'
    ],
    documents: [
      'Certified Company Trade License, MOA, and Share Certificates',
      'Passport, visa, and Emirates ID copies of all authorized signers',
      'Latest 6 months personal bank statements of major shareholders',
      '3-4 prospective client invoices or suppliers contract drafts'
    ],
    baseCost: 'Included in setup packages / Standalone AED 4,500',
    timeline: '10 to 20 Business Days (Traditional) / 2 to 4 Days (Neo-banks)',
    commonMistakes: [
      'Providing an inconsistent business description compared to the trade license activities',
      'Lacking real utility bills or residency status for primary signers',
      'Using digital mailboxes instead of a structured virtual office lease'
    ],
    whyGrowInfinity: [
      'Pre-evaluation protocol to pre-approve files before submitting to banks',
      'Official partners with Wio Business, Mashreq NeoBiz, and NBD Corporate',
      '100% money-back guarantee on banking services within premium incorporation packages'
    ],
    relatedServices: ['mainland-setup', 'freezone-setup', 'accounting-vat'],
    relatedLocations: ['Dubai', 'Abu Dhabi', 'Qatar', 'Saudi Arabia'],
    externalReferences: ['https://wio.io/', 'https://www.emiratesnbd.com/'],
    faqs: [
      {
        question: 'Can a non-resident open a corporate bank account in the UAE?',
        answer: 'Yes, but traditional banks require a high minimum balance (typically AED 100,000 to AED 250,000) and conduct deep compliance checks on non-resident business owners. Neo-banking solutions like Wio offer simplified, zero-balance entry for residents.'
      },
      {
        question: 'What is the average turnaround time for banking approvals?',
        answer: 'Digital corporate bank accounts (Wio, Mashreq) take 2 to 4 business days. High-street traditional banks (Emirates NBD, ADCB, HSBC) take 2 to 4 weeks depending on the complexity of the company structure.'
      }
    ]
  },
  {
    id: 'golden-visa',
    slug: 'golden-visa',
    title: 'UAE Golden Visa Residency',
    category: 'Visas',
    shortDesc: 'Secure prestigious 10-year residency in the UAE. Live, work, and study with complete freedom, sponsor family members, and enjoy tax-free living.',
    iconName: 'Award',
    summary: 'The UAE Golden Visa is a premium 10-year, self-sponsored residency program designed to reward elite talent, global real estate investors, and high-impact entrepreneurs.',
    definition: 'The Golden Visa is a long-term residence system established by the UAE government to attract international investors, entrepreneurs, professionals, exceptional students, and researchers. It grants 10 years of residency with automatic renewal and complete self-sponsorship without local employer reliance.',
    whoIsItFor: [
      'Real estate investors purchasing property valued at AED 2,000,000 or above',
      'High-tier executive directors, physicians, and highly specialized engineers',
      'Successful entrepreneurs with qualifying companies registered in the UAE',
      'Elite academic performers and researchers in specialized scientific domains'
    ],
    benefits: [
      '10 years of stable, secure, self-sponsored residency with auto-renewal',
      'No requirement to visit the UAE every 180 days to keep residency active',
      'Unrestricted ability to sponsor spouses, children, and parents',
      'Eligibility for the exclusive Esaad Privilege Card, unlocking massive local discounts',
      'Simplified path to local driver’s licenses and corporate banking privileges'
    ],
    requirements: [
      'Investment criterion met (e.g., AED 2M real estate value or AED 1M bank deposit)',
      'For professionals: Minimum AED 30,000 monthly basic salary with a bachelor\'s degree',
      'For entrepreneurs: Owner of an SME with annual revenues above AED 1M',
      'Valid medical fitness test and health insurance coverage in the UAE'
    ],
    documents: [
      'Passport copy with original entry permit or current residency visa',
      'Official bank statements showing regular salary deposits or real estate title deed',
      'Attested educational degrees (for professionals)',
      'No Objection Certificate (NOC) from the employer or relevant Ministry'
    ],
    baseCost: 'AED 8,500 onwards (Government + Admin Fees)',
    timeline: '7 to 14 Business Days',
    commonMistakes: [
      'Submitting non-attested university certificates from home countries',
      'Failing to maintain the underlying investment (selling property below AED 2M before visa renewal)',
      'Not declaring dependents at the time of initial medical mapping'
    ],
    whyGrowInfinity: [
      'Direct, VIP routing with GDRFA and Federal Authority for Identity (ICP)',
      'In-house attestation of foreign-issued credentials and legal documents',
      'Complete VIP chauffeured medical fitness test and biometric escort services'
    ],
    relatedServices: ['pro-services', 'business-advisory'],
    relatedLocations: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    externalReferences: ['https://smartservices.icp.gov.ae/'],
    faqs: [
      {
        question: 'Can I sponsor my domestic helpers and drivers with a Golden Visa?',
        answer: 'Yes, Golden Visa holders can sponsor an unlimited number of domestic support staff, domestic helpers, and private drivers without any administrative caps.'
      },
      {
        question: 'Does buying real estate off-plan qualify me for the Golden Visa?',
        answer: 'Yes, property buyers can qualify for a Golden Visa on off-plan properties, provided the total purchase price is at least AED 2 Million and a minimum of AED 200,000 has been paid to the developer.'
      }
    ]
  },
  {
    id: 'corporate-tax',
    slug: 'corporate-tax',
    title: 'Corporate Tax & Compliance',
    category: 'Financial',
    shortDesc: 'Navigate the UAE’s 9% Corporate Tax regime seamlessly. Complete mandatory registrations, optimize deductions, and secure audit readiness.',
    iconName: 'Receipt',
    summary: 'Protect your enterprise from financial penalties. We construct a secure corporate structure to align your operations with the newly launched 9% UAE Corporate Tax laws.',
    definition: 'Corporate Tax and Compliance services ensure that business entities in the UAE correctly register, structure, and file their profits under Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses.',
    whoIsItFor: [
      'Any operating mainland LLC or free zone company with taxable income',
      'Foreign entities trading inside the GCC region',
      'High-growth SMEs needing structured transfer pricing policies',
      'Group corporations requiring consolidated fiscal tax unity'
    ],
    benefits: [
      'Strategic transfer pricing setups preventing aggressive audit assessments',
      'Maximization of legal tax exemptions and qualifying Free Zone exemptions',
      'Establishment of clean tax groups to consolidate global business losses',
      'Absolute protection from massive Federal Tax Authority (FTA) late filing fines',
      'Professional representation in front of the FTA during corporate disputes'
    ],
    requirements: [
      'Mandatory registration for Corporate Tax prior to designated deadlines',
      'Submission of standardized audited financial statements annually',
      'Maintenance of transactional logs for transfer pricing for 7 years',
      'Establishment of Arm’s Length principles for related party transactions'
    ],
    documents: [
      'Valid UAE Commercial License and Incorporation Certificate',
      'Emirates ID and Passport copies of major directors/shareholders',
      'Latest audited balance sheet and detailed profit & loss ledger',
      'All historical VAT filings and transaction summary reports'
    ],
    baseCost: 'Registration: AED 950 / Advisory: Custom Retainer',
    timeline: '3 to 5 Business Days for registration',
    commonMistakes: [
      'Assuming Free Zone companies are automatically 100% exempt from the Corporate Tax',
      'Missing the strict registration deadlines which results in an immediate AED 10,000 fine',
      'Mixing personal expenses with corporate ledgers without formal loan agreements'
    ],
    whyGrowInfinity: [
      'Certified FTA tax agents with decades of international corporate compliance',
      'Proprietary tax simulation model forecasting exact corporate liabilities',
      'Integration of tax compliance directly into monthly bookkeeping retainers'
    ],
    relatedServices: ['accounting-vat', 'compliance', 'business-advisory'],
    relatedLocations: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Saudi Arabia'],
    externalReferences: ['https://tax.gov.ae/'],
    faqs: [
      {
        question: 'What is the corporate tax rate in the UAE and who does it apply to?',
        answer: 'The UAE corporate tax is set at a flat rate of 9% on taxable net profits exceeding AED 375,000. It applies to all businesses operating under a mainland commercial license, and Free Zone companies with non-qualifying income.'
      },
      {
        question: 'Are personal salaries taxed under the corporate tax regime?',
        answer: 'No. Individual salaries, personal real estate rental earnings, and personal investment capital gains are completely exempt from the UAE corporate tax regime.'
      }
    ]
  },
  {
    id: 'accounting-vat',
    slug: 'accounting-vat',
    title: 'Accounting, Bookkeeping & VAT',
    category: 'Financial',
    shortDesc: 'Maintain immaculate ledgers. Get dedicated, certified FTA tax accountants managing your daily transactions, cash flow statements, and quarterly VAT returns.',
    iconName: 'Calculator',
    summary: 'Immaculate financial reports, quarterly VAT returns, and continuous balance sheets engineered by elite in-house chartered accountants.',
    definition: 'Accounting and VAT represents standard book-closing, continuous cash-flow planning, and quarterly filing of Value Added Tax (VAT) under the FTA framework, which operates at a flat 5% rate on taxable goods and services in the UAE.',
    whoIsItFor: [
      'Growing retail, wholesale, and service-based enterprises',
      'Corporate entities requiring external independent auditing',
      'Businesses crossing the mandatory VAT threshold of AED 375,000',
      'Tech startups seeking clear runway and investor-ready reports'
    ],
    benefits: [
      'Quarterly VAT files prepared with 100% accuracy to ensure full tax refunding',
      'Monthly digital cash flow dashboards with clear runway and EBITDA tracking',
      'Dedicated local senior chartered accountant for strategic financial consulting',
      'Audit-ready books mapped strictly to International Financial Reporting Standards (IFRS)',
      'Bespoke implementation of modern ERP systems (Xero, Zoho Books, QuickBooks)'
    ],
    requirements: [
      'Maintaining complete records of invoices, credit notes, and supplier bills',
      'Periodic monthly reconciliation of corporate credit cards and bank statements',
      'Implementation of proper physical inventory tracking (for trading entities)',
      'Submitting tax invoices that conform strictly to FTA guidelines'
    ],
    documents: [
      'Historical trial balance sheets and general bank ledgers',
      'Past sales receipts, customer invoices, and asset registers',
      'Signed commercial lease agreements and payroll records',
      'Previous year\'s tax submissions (if existing)'
    ],
    baseCost: 'SME retainer starts at AED 1,200/month',
    timeline: 'Continuous Monthly Support',
    commonMistakes: [
      'Using manual spreadsheets which fail to trace sequential invoice numbering',
      'Underestimating VAT registration timing, which results in AED 20,000 late fines',
      'Failing to verify if suppliers are registered with the FTA before reclaiming input tax'
    ],
    whyGrowInfinity: [
      'Official Xero Gold Platinum Partners with highly qualified in-house teams',
      'Zero-mistake filing guarantee backed by fully insured professional liability cover',
      'Unlimited ad-hoc financial advice included inside standard monthly plans'
    ],
    relatedServices: ['corporate-tax', 'compliance'],
    relatedLocations: ['Dubai', 'Abu Dhabi', 'Qatar', 'India'],
    externalReferences: ['https://tax.gov.ae/en/services/vat.registration.aspx'],
    faqs: [
      {
        question: 'What are the thresholds for VAT registration in the UAE?',
        answer: 'VAT registration is mandatory for businesses with taxable supplies and imports exceeding AED 375,000 in the previous 12 months. It is voluntary for businesses exceeding AED 187,500.'
      }
    ]
  },
  {
    id: 'pro-services',
    slug: 'pro-services',
    title: 'PRO & Government Liaison Services',
    category: 'Corporate Services',
    shortDesc: 'Accelerate your visa applications, municipal approvals, document attestations, and corporate renewals with our direct electronic government gateways.',
    iconName: 'UserCheck',
    summary: 'Bypass administrative friction. Grow Infinity provides dedicated, elite PRO specialists handling physical filings, notarizations, and municipal licenses across all emirates.',
    definition: 'Public Relations Officer (PRO) services are professional government liaison actions, including document clearance, visa processing, labor cards, commercial license renewals, and physical consular endorsements with the Ministry of Foreign Affairs (MOFA).',
    whoIsItFor: [
      'Enterprises seeking to onboard a high volume of expatriate staff rapidly',
      'Companies requiring specialized municipal or civil defense permits',
      'Foreign business owners requiring attested global degree credentials',
      'SMEs wanting to outsource the administrative burden of annual licensing'
    ],
    benefits: [
      '100% error-free processing of work permits, quotas, and residency visas',
      'Dramatic reduction in time-to-hire through fast-track labor card issue',
      'Automatic alerts preventing costly fines for license and visa expirations',
      'Direct chauffeured processing for VIP executive medical tests',
      'Secure, digital document archive with 24/7 client portal access'
    ],
    requirements: [
      'Valid company establishment card with Immigration and Ministry of Human Resources (MOHRE)',
      'Clear designated quota allocation for foreign employment',
      'Signed corporate PRO mandate allowing Grow Infinity representation'
    ],
    documents: [
      'Current Corporate Trade License copy',
      'Establishment Card and Labor Card details',
      'Employee passports, medical checks, and signed job offer letters'
    ],
    baseCost: 'AED 1,500 monthly retainer / Per-transaction pricing available',
    timeline: 'Visa processing in 3 to 5 business days',
    commonMistakes: [
      'Hiring staff before acquiring a valid establishment card',
      'Allowing commercial licenses to lapse, resulting in visa cancellation blocks',
      'Using un-attested qualifications for high-ranking executive roles'
    ],
    whyGrowInfinity: [
      'Direct integration with MOHRE, ICP, and GDRFA digital portals',
      'In-house translation and notary public relationship managers',
      'Chauffeured concierge document pickup and hand-delivery to your desk'
    ],
    relatedServices: ['mainland-setup', 'golden-visa'],
    relatedLocations: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman'],
    externalReferences: ['https://www.mohre.gov.ae/'],
    faqs: [
      {
        question: 'What is an Establishment Card and why is it required?',
        answer: 'An Establishment Card (also known as a Company Immigration Card) registers your business with the General Directorate of Residency and Foreigners Affairs, giving you the legal right to sponsor foreign employees.'
      }
    ]
  },
  {
    id: 'compliance',
    slug: 'compliance',
    title: 'AML, ESR & Corporate Compliance',
    category: 'Corporate Services',
    shortDesc: 'Ensure rigorous regulatory health. Fulfill mandatory Economic Substance Regulations (ESR), Anti-Money Laundering (AML) reporting, and UBO disclosures.',
    iconName: 'AlertTriangle',
    summary: 'Secure corporate immunity. Fulfill mandatory AML (Anti-Money Laundering), ESR (Economic Substance Regulations), and UBO filings to prevent severe regulatory audit fines.',
    definition: 'Economic Substance Regulations (ESR) require UAE companies conducting "Relevant Activities" to demonstrate genuine local economic substance. Anti-Money Laundering (AML) protocols require designated businesses (DNFBP) to register with goAML and implement robust KYC reporting.',
    whoIsItFor: [
      'Real estate brokers, gold traders, and legal firms (DNFBPs)',
      'Distribution, shipping, headquartering, and holding companies (ESR-relevant)',
      'Any multinational enterprise operating across the GCC borders'
    ],
    benefits: [
      'Full immunity from ESR penalties (which start at AED 50,000)',
      'Safe, approved goAML setup protecting businesses from account suspensions',
      'Rigorous corporate governance proving physical substance to international auditors',
      'Prevention of local corporate bank account freezes due to outdated KYC data',
      'Optimized corporate structures compliant with OECD tax directives'
    ],
    requirements: [
      'Annual submission of ESR Notification and/or ESR Report (if qualifying)',
      'Designation of a certified internal compliance officer',
      'Establishing a modern, risk-based AML/CFT internal protocol manual',
      'Mandatory registration and maintenance of the Ultimate Beneficial Owner (UBO) registry'
    ],
    documents: [
      'Full corporate structure chart mapping the ultimate individual owners',
      'Board resolutions appointing compliance officers',
      'Documented evidence of core income-generating activities in the UAE',
      'Historical employee timesheets, board meeting minutes, and local expense ledgers'
    ],
    baseCost: 'ESR filing from AED 2,500 / goAML setup from AED 3,500',
    timeline: 'Notification filing: 2 to 4 Business Days',
    commonMistakes: [
      'Failing to submit ESR notifications even when claiming zero income under qualifying activities',
      'Ignoring the mandatory Ultimate Beneficial Owner (UBO) registry updates',
      'Neglecting goAML transaction logging, which results in license suspension'
    ],
    whyGrowInfinity: [
      'Ex-regulatory audit officers directly overseeing compliance filings',
      'Customized internal AML training modules and pre-written policy templates',
      'Unblemished 100% acceptance record across hundreds of ESR notifications'
    ],
    relatedServices: ['corporate-tax', 'business-advisory'],
    relatedLocations: ['Dubai', 'Abu Dhabi', 'Qatar', 'Saudi Arabia'],
    externalReferences: ['https://www.moec.gov.ae/en/economic-substance-regulations'],
    faqs: [
      {
        question: 'What happens if my company fails to submit an ESR report?',
        answer: 'Failing to file a required ESR report triggers an immediate AED 50,000 fine, accompanied by exchange of information with your home country tax authority, rising to AED 400,000 for consecutive offenses.'
      }
    ]
  },
  {
    id: 'advisory',
    slug: 'business-advisory',
    title: 'Strategic Corporate Advisory',
    category: 'Corporate Services',
    shortDesc: 'Formulate regional market entry programs, design complex corporate structures, and plan cross-border expansions with our elite advisory group.',
    iconName: 'Compass',
    summary: 'Grow Infinity Corporate Advisory provides deep-market intelligence, regional joint-ventures mapping, and bespoke commercial structures for fortune-500 brands.',
    definition: 'Corporate Advisory represents senior-level market entry consulting, commercial legal structural planning, local commercial partnerships mapping, and mergers & acquisitions (M&A) advisory inside the Middle East region.',
    whoIsItFor: [
      'Multinational corporations deploying over AED 20M capital in the GCC',
      'Family offices seeking regional diversification strategies',
      'Foreign developers launching real estate and hotel projects',
      'Venture boards planning corporate spin-offs and localized joint ventures'
    ],
    benefits: [
      'Bespoke, premium market-entry blueprint mapping precise tax, legal, and operational steps',
      'Unlocks elite corporate connections with influential local conglomerates and sovereign entities',
      'Protects foreign promoters through robust, ironclad shareholder agreements and trusts',
      'Unbiased recommendation of optimal locations across the UAE, Saudi Arabia, and Qatar',
      'Complete end-to-end structural oversight, including immigration, real estate, and finance'
    ],
    requirements: [
      'Discovery session with the senior Grow Infinity Advisory Board',
      'Comprehensive commercial due diligence scoping',
      'Execution of non-disclosure and professional advisory agreements'
    ],
    documents: [
      'Current audited global financial statements of parent group',
      'Detailed outline of proposed Middle Eastern investment blueprint',
      'Articles of Association and certificates of good standing of the foreign parent'
    ],
    baseCost: 'Custom engagement / Advisory briefs from AED 15,000',
    timeline: 'Strategy Formulation: 2 to 4 Weeks',
    commonMistakes: [
      'Deploying capital without conducting formal pre-market tax advisory reviews',
      'Assuming legal requirements in Saudi Arabia match the UAE regulatory frameworks',
      'Leasing massive commercial assets without proper local demographic mapping'
    ],
    whyGrowInfinity: [
      'Advisory team led by former global consultancy partners (ex-Big 4)',
      'Strategic offices in Riyadh, Dubai, Doha, and Mumbai for seamless cross-border deals',
      'Unmatched expertise in structuring multi-tiered holding companies and family trusts'
    ],
    relatedServices: ['mainland-setup', 'compliance', 'corporate-tax'],
    relatedLocations: ['Dubai', 'Abu Dhabi', 'Saudi Arabia', 'Qatar', 'India'],
    externalReferences: ['https://www.mof.gov.ae/'],
    faqs: [
      {
        question: 'Does Grow Infinity assist with market expansion in Saudi Arabia?',
        answer: 'Yes, we are highly specialized in dual-setup strategies, permitting smooth business entry into Riyadh under MISA (Ministry of Investment) regulations while maintaining treasury operations in Dubai.'
      }
    ]
  }
];

export const countriesData: CountryData[] = [
  {
    id: 'uae',
    name: 'United Arab Emirates',
    slug: 'united-arab-emirates',
    capital: 'Abu Dhabi',
    currency: 'AED (Dirham)',
    timeline: '3 to 7 Days',
    rating: '4.9/5 (Excellent)',
    description: 'The undisputed epicentre of global trade, technology, and entrepreneurship in the Middle East. Offering cutting-edge infrastructure, world-class luxury living, and hyper-efficient corporate laws.',
    benefits: [
      '100% foreign ownership of mainland and free zone corporate structures',
      'Low corporate tax rate of 9% with generous AED 375,000 basic exemptions',
      'Zero personal income tax, wealth tax, or inheritance tax',
      'Elite 10-year Golden Visa residency path for investors and skilled professionals',
      'Advanced digital-first financial systems and seamless business banking'
    ],
    taxRate: '9% (Qualifying profits above AED 375k)',
    minCapital: 'No mandatory minimum for standard LLCs',
    locations: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'RAK'],
    popularStructure: 'Free Zone LLC / Mainland Commercial LLC'
  },
  {
    id: 'saudi',
    name: 'Saudi Arabia',
    slug: 'saudi-arabia',
    capital: 'Riyadh',
    currency: 'SAR (Riyal)',
    timeline: '10 to 15 Days',
    rating: '4.8/5 (High Growth)',
    description: 'The largest economy in the Arab world, undergoing massive economic transformation under Vision 2030. Unlocking unprecedented opportunities in construction, tourism, digital assets, and defense.',
    benefits: [
      'Unparalleled domestic market size of over 36 million consumers',
      'Massive government-funded giga-projects (NEOM, Red Sea, Qiddiya) offering rich contracts',
      'Simplified corporate setup under the Ministry of Investment (MISA) programs',
      'Special Economic Zone (SEZ) packages featuring 5% corporate tax rates',
      'Rapidly modernizing commercial codes and business-friendly regulations'
    ],
    taxRate: '20% (Standard Corporate Tax on foreign shares)',
    minCapital: 'Varies by sector (SAR 100,000 is typical for MISA LLCs)',
    locations: ['Riyadh', 'Jeddah', 'Dammam'],
    popularStructure: 'MISA LLC / Single-Member LLC'
  },
  {
    id: 'qatar',
    name: 'Qatar',
    slug: 'qatar',
    capital: 'Doha',
    currency: 'QAR (Riyal)',
    timeline: '8 to 14 Days',
    rating: '4.7/5 (Premium)',
    description: 'Boasting one of the highest GDP per capita rates globally. Optimized for high-net-worth investors and firms operating across LNG, green energy, sports technology, and industrial trading.',
    benefits: [
      'Highly liquid and affluent consumer market with state-backed purchasing power',
      '100% foreign ownership permitted under the Qatar Financial Centre (QFC) framework',
      'Low, competitive corporate tax rate of 10% on qualifying local earnings',
      'Robust double taxation avoidance treaty network with over 80 countries',
      'State-of-the-art logistics and maritime ports in Hamad Port and Doha'
    ],
    taxRate: '10% (Flat Corporate Tax on local revenue)',
    minCapital: 'No minimum capital under QFC registrations',
    locations: ['Doha', 'Lusail'],
    popularStructure: 'QFC LLC / Mainland LLC'
  },
  {
    id: 'india',
    name: 'India',
    slug: 'india',
    capital: 'New Delhi',
    currency: 'INR (Rupee)',
    timeline: '14 to 21 Days',
    rating: '4.8/5 (Mega Market)',
    description: 'A global technological and manufacturing powerhouse. Possessing an unmatched pool of skilled engineering talent and a booming middle-class consumption engine.',
    benefits: [
      'Access to an incredibly vast, tech-savvy consumer base exceeding 1.4 billion people',
      'World-class digital payment ecosystem (UPI) facilitating instantaneous microtransactions',
      'Specialized manufacturing and tech hubs (GIFT City, Bangalore, Mumbai, Pune)',
      'Substantial corporate tax reductions for newly established manufacturing units (15%)',
      'Unmatched talent pool for offshore development, research, and customer success'
    ],
    taxRate: '15% to 22% (Depending on manufacturing status)',
    minCapital: 'INR 100,000 for Private Limited Companies',
    locations: ['Mumbai', 'Bangalore', 'GIFT City', 'Delhi NCR', 'Pune'],
    popularStructure: 'Private Limited Company (Pvt Ltd) / LLP'
  }
];

export const articlesData: Article[] = [
  {
    slug: 'dubai-mainland-vs-freezone-setup',
    category: 'Business Setup',
    title: 'Dubai Mainland vs Free Zone Setup: The Definitive 2026 Guide',
    summary: 'A detailed structural comparison between Dubai Mainland and Free Zone jurisdictions. This master guide reviews physical trade limits, corporate tax implications, visa quotas, and initial setup costs to optimize your market-entry strategy.',
    content: `
      <h2>The Core Structural Divergence</h2>
      <p>When incorporating a business in Dubai, the single most critical decision is choosing between a <strong>Mainland</strong> (onshore) license and a <strong>Free Zone</strong> (offshore/economic district) setup. Each framework serves different target markets, operations, and growth plans.</p>
      
      <h3>1. Operational and Geographical Boundaries</h3>
      <p>A <strong>Mainland Company</strong> is licensed by the Department of Economy and Tourism (DET). This structure allows you to operate anywhere within the UAE, bid on local government contracts, lease physical space without sector limitations, and conduct direct B2C trade. Conversely, a <strong>Free Zone Company</strong> is bound to the physical and regulatory boundaries of its specific zone (e.g., DMCC, IFZA). Free zones are heavily optimized for international trading, consulting, software-as-a-service (SaaS), and cross-border consulting, but they require a local mainland intermediary to trade directly inside the UAE mainland.</p>

      <h3>2. Corporate Tax Mapping under the 2026 Rules</h3>
      <p>Under the UAE Federal Decree-Law No. 47, mainland companies are subject to a standard 9% corporate tax on taxable profits exceeding AED 375,000. Free zone companies, however, can claim a 0% corporate tax rate on "Qualifying Income" provided they maintain adequate substance inside the zone and comply with transfer pricing rules under OECD guidelines.</p>

      <h3>3. Physical Office and Visa Requirements</h3>
      <p>Mainland setups require a physical office lease with a minimum of 140 square feet registered via the Ejari system. Free zone companies have access to flexible desk space ("Flexi-Desks" or virtual offices) that dramatically reduce setup costs. However, visa quotas for free zones are usually capped per desk, whereas mainland businesses can secure multiple visas based on the physical square footage of their leased offices.</p>
    `,
    author: 'Elena Vance, Senior Structuring Director',
    date: 'June 18, 2026',
    readTime: '6 min read',
    ragSummary: 'This document defines and compares Dubai Mainland vs Free Zone company formation. Key topics include trading boundaries, 9% corporate tax regulations, physical office requirements (Ejari), and setup cost differences to guide corporate decision-makers.',
    entityFocus: ['Dubai DED', 'Free Zone Authorities', 'Corporate Tax Law', 'Ejari Registration', 'FDI Ownership'],
    keyTakeaways: [
      'Mainland companies can trade anywhere in the UAE and bid on government tenders, whereas Free Zones are specialized for global business.',
      'Corporate Tax stands at 9% above AED 375,000 for mainland; Free Zones can maintain 0% on qualifying foreign-sourced revenue.',
      'Mainland require physical Ejari offices; Free Zones support low-cost Flexi-Desk setups.'
    ]
  },
  {
    slug: 'uae-corporate-tax-regime-exemptions',
    category: 'Corporate Tax',
    title: 'UAE Corporate Tax Regime: Key Exemptions and Compliance Pillars',
    summary: 'An expert regulatory breakdown of the UAE Corporate Tax structure. Learn about the AED 375,000 qualifying exemption, transfer pricing rules, goAML filings, and critical deadlines to avoid administrative fines.',
    content: `
      <h2>The Paradigm Shift in UAE Taxation</h2>
      <p>The UAE officially ended its absolute corporate tax-free era by introducing a standard <strong>9% Corporate Tax</strong> on taxable business earnings. To support startups, the Federal Tax Authority (FTA) has introduced highly progressive exemptions and relief measures.</p>

      <h3>1. Qualifying Small Business Relief (SBR)</h3>
      <p>Under Ministerial Decision No. 73 of 2023, resident taxable persons can claim Small Business Relief if their gross revenue in the relevant tax period does not exceed <strong>AED 3,000,000</strong>. Once SBR is claimed, the business is treated as having zero taxable income for that period, significantly easing the compliance transition for startups and boutique agencies.</p>

      <h3>2. The AED 375,000 Profit Threshold</h3>
      <p>For standard profitable entities not claiming SBR, the corporate tax is calculated on net accounting profits. A flat rate of 0% applies to net taxable income up to AED 375,000, and the standard 9% rate is applied strictly to any profit margin exceeding that threshold. This represents one of the most competitive corporate tax rates in the OECD region.</p>

      <h3>3. Transfer Pricing and Arm's Length Principles</h3>
      <p>Under the new law, transactions between "Related Parties" (such as a director lending money to the company) must follow the "Arm's Length Principle." This means transactions must be priced as if they occurred between independent parties, requiring strict documentation to prevent audit penalties of up to AED 10,000 per missing record.</p>
    `,
    author: 'Mustafa Al-Sayed, Head of Tax Advisory',
    date: 'May 24, 2026',
    readTime: '8 min read',
    ragSummary: 'An official overview of UAE Corporate Tax rules outlining the 9% rate, the AED 3M Small Business Relief (SBR), the AED 375k profit threshold, and mandatory transfer pricing compliance to ensure corporate audit readiness.',
    entityFocus: ['Federal Tax Authority', 'Small Business Relief', 'Transfer Pricing', '9% Corporate Tax', 'Arm’s Length'],
    keyTakeaways: [
      'UAE Corporate Tax is 9% for taxable profits above AED 375,000.',
      'Small Business Relief exempts companies with annual revenues below AED 3M from corporate tax liability.',
      'All transactions between related parties must fulfill strict transfer pricing rules and are auditable by the FTA.'
    ]
  },
  {
    slug: 'securing-uae-golden-visa-2026',
    category: 'Golden Visa',
    title: 'Securing the UAE Golden Visa: Property, Executive, and Entrepreneur Paths',
    summary: 'A step-by-step blueprint detailing the qualifications for the 10-year Golden Visa residency. Understand the property investment thresholds, attested degree requirements for managers, and step-by-step ICP processes.',
    content: `
      <h2>The Ultimate Long-Term Residency</h2>
      <p>The UAE Golden Visa completely changed Middle Eastern immigration by introducing a 10-year, renewable, fully self-sponsored residency program. It eliminates the traditional requirement of having a local corporate sponsor or employer to maintain residency.</p>

      <h3>1. The Real Estate Investment Channel</h3>
      <p>The most popular route to securing a 10-year Golden Visa is through property investment. An individual who purchases one or more physical properties in the UAE with a combined purchase value of <strong>AED 2,000,000</strong> or more qualifies for the visa. Crucially, properties can be off-plan or mortgaged through local banks, provided a minimum equity of AED 200,000 has been paid.</p>

      <h3>2. The Highly Skilled Executive & Professional Channel</h3>
      <p>For corporate directors, physicians, software engineers, and university professors, a Golden Visa can be secured under the "Specialized Talent" category. The core requirements include: a valid employment contract in the UAE, a certified Bachelor\'s degree or higher, and a verified monthly basic salary of at least <strong>AED 30,000</strong>.</p>

      <h3>3. The Golden Visa Process Flow</h3>
      <p>The application follows a structured pathway: initial file opening with the ICP or GDRFA, a specialized medical fitness screening, biometrics mapping for the Emirates ID, property valuation or salary attestation uploads, and final digital visa stamping. The total process takes between 7 and 14 business days, managed seamlessly by our VIP PRO teams.</p>
    `,
    author: 'Farhan Qureshi, Chief Immigration Counsel',
    date: 'June 02, 2026',
    readTime: '5 min read',
    ragSummary: 'An immigration guide outlining the AED 2M property investment, the AED 30,000 monthly salary professional criteria, and step-by-step ICP processing requirements to successfully obtain the UAE 10-year Golden Visa.',
    entityFocus: ['Federal Authority for Identity (ICP)', 'GDRFA', 'Golden Visa Property', 'Attested Degree Certificates', 'Self-Sponsorship'],
    keyTakeaways: [
      'Real estate investors require property valued at AED 2 Million or more to qualify for self-sponsored 10-year residency.',
      'Skilled professionals require attested degrees and a basic salary of AED 30,000 or more per month.',
      'The Golden Visa grants automatic entry rights, family sponsorship, and the exclusive Esaad discount card.'
    ]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Founder & CEO',
    company: 'NexaTech Global',
    logoText: 'NEXATECH',
    content: 'Grow Infinity did not just set up our company; they acted as our strategic growth partner. From resolving complex regulatory pathways in DIFC to fast-tracking our Wio corporate bank account, their execution was flawless. They are the golden standard of corporate services in Dubai.',
    rating: 5,
    setupType: 'Free Zone Tech Company',
    location: 'Dubai, UAE'
  },
  {
    id: 't2',
    name: 'Rajesh Subramaniam',
    role: 'Managing Director',
    company: 'Apex Supply Chain Solutions',
    logoText: 'APEX',
    content: 'Opening a Mainland commercial company can be extremely intimidating, especially regarding office leases and municipal permits. Grow Infinity secured ourDET license and Ejari contract in just 5 business days. Their professional PRO teams are simply exceptional.',
    rating: 5,
    setupType: 'Mainland LLC',
    location: 'Abu Dhabi, UAE'
  },
  {
    id: 't3',
    name: 'Khalid Al-Mansoori',
    role: 'Managing Partner',
    company: 'Al-Mansoori Holding Group',
    logoText: 'MANSOORI',
    content: 'We utilized Grow Infinity for our group restructuring, corporate tax mapping, and setting up our family holding office. Their compliance advisors, led by former Big-4 partners, provided world-class clarity on ESR and transfer pricing protocols. Truly unparalleled advisory.',
    rating: 5,
    setupType: 'Corporate Advisory & Tax Group',
    location: 'Riyadh, Saudi Arabia'
  },
  {
    id: 't4',
    name: 'Amara Diop',
    role: 'Chief Operations Officer',
    company: 'Elysian Living Real Estate',
    logoText: 'ELYSIAN',
    content: 'Filing quarterly VAT returns and coordinating with the Federal Tax Authority used to take up hours of our internal team\'s time. Outsourcing our bookkeeping and corporate tax to Grow Infinity\'s Gold-Partner Xero specialists has saved us thousands in overheads and eliminated compliance friction.',
    rating: 5,
    setupType: 'VAT & Accounting Retainer',
    location: 'Dubai, UAE'
  }
];

export const faqData: FaqItem[] = [
  {
    question: 'How long does it take to establish a business in Dubai?',
    answer: 'Establishing a Free Zone company takes 3 to 5 business days. A Mainland commercial license with the Department of Economy and Tourism (DET) takes 4 to 7 business days, depending on whether specialized external ministry approvals are required.',
    category: 'Setup'
  },
  {
    question: 'Is a physical office space mandatory for business setup?',
    answer: 'For a Mainland business, yes—a physical commercial office with a registered Ejari lease contract is mandatory. For Free Zone companies, physical offices are not required, as authorities offer virtual office, flexi-desk, and smart desk licenses.',
    category: 'Setup'
  },
  {
    question: 'Who is eligible for the 9% UAE Corporate Tax?',
    answer: 'The 9% corporate tax rate is applied to taxable net profits exceeding AED 375,000 for mainland companies and non-qualifying free zone entities. Businesses with annual gross revenues below AED 3 Million can claim Small Business Relief, reducing taxable obligations to zero.',
    category: 'Tax'
  },
  {
    question: 'What are the main benefits of a UAE Golden Visa?',
    answer: 'The UAE Golden Visa grants 10 years of self-sponsored residency, eliminating the need for a local employer sponsor. It allows you to enter and exit the UAE freely without 180-day limits, sponsor your entire family, and acquire the exclusive Esaad card.',
    category: 'Visa'
  },
  {
    question: 'How do I open a corporate bank account as a new business?',
    answer: 'You must submit your company registration certificates, trade license, shareholder passport, visa, and Emirates ID, along with a detailed commercial business profile and historical bank statements. Grow Infinity fast-tracks this through direct partnerships with Wio, Mashreq, and Emirates NBD.',
    category: 'Banking'
  }
];
