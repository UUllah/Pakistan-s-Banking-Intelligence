import { BankProfile } from "../types";

export const BANKS: BankProfile[] = [
  {
    basic: {
      id: "meezan",
      name: "Meezan Bank Limited",
      shortName: "Meezan",
      logoText: "MBL",
      logoBg: "bg-amber-800 text-amber-50",
      tagline: "The Premier Islamic Bank",
      website: "https://www.meezanbank.com",
      hq: "Karachi",
      inceptionYear: 1997,
      licenseType: "Islamic",
      shariahCompliance: "Islamic",
      ownershipType: "Private",
      isStockListed: true,
      swiftCode: "MEZNPKKA",
      ibanPrefix: "PK49MEZN"
    },
    ownership: {
      founderGroup: "Irfan Siddiqui & Sponsors",
      sponsorCompanies: ["Noor Financial Investment Co. (Kuwait)", "Pakistan Kuwait Investment Co.", "Islamic Development Bank (Jeddah)"],
      sponsorCountries: ["Kuwait", "Pakistan", "Saudi Arabia"],
      parentOrg: "Noor Financial Investment Company",
      majorShareholders: ["Noor Financial Investment (35%)", "Pak-Kuwait Investment Core (30%)", "General Public (35%)"],
      foreignOwnershipPct: 45.0
    },
    portfolio: {
      savingsAccounts: true,
      currentAccounts: true,
      freelancerAccounts: true,
      roshanDigitalAccount: true,
      islamicProducts: true,
      smeBanking: true,
      agricultureBanking: true,
      corporateBanking: true,
      investmentBanking: true,
      creditCardsAvailable: false, // Meezan does not offer conventional credit cards (they offer Shariah-compliant debit/limits)
      debitCardsAvailable: true,
      prepaidCardsAvailable: false,
      homeFinance: true,
      autoFinance: true,
      personalFinance: false, // Pure personal conventional loans are prohibited; they do Murabaha/Ijarah/etc.
      digitalWallets: false,
      bancassurance: true
    },
    digital: {
      mobileAppAvailable: true,
      internetBanking: true,
      biometricLogin: true,
      qrPayments: true,
      raastIntegration: true,
      nfcPayments: true,
      cardControls: true,
      pushNotifications: true,
      internationalTransfers: true,
      remittanceSupport: true,
      applePayReady: false,
      googlePayReady: false,
      eKycOnboarding: true,
      whatsappBanking: true,
      aiChatbot: true
    },
    infrastructure: {
      branches: 1010,
      atms: 1100,
      citiesCovered: 320,
      intlBranches: 0,
      cloudInfrastructure: "On-Premises Private Cloud + Hybrid local DR",
      drSiteAvailable: true,
      averageUptimePct: 99.85
    },
    cardSupport: {
      visa: true,
      mastercard: true,
      paypak: true,
      unionpay: false,
      intlAcceptance: "Good",
      onlinePaymentReliability: "High"
    },
    technical: {
      appRating: 4.8,
      appDownloads: "10M+",
      lastAppUpdate: "2026-05-18",
      androidMinVersion: "8.0",
      iosSupport: true,
      averageCrashPct: 0.08,
      apiLatencyMs: 140,
      downtimeScore: 2
    },
    sentiment: {
      userReviewsRating: 4.6,
      complaintsResolvedPct: 97.4,
      complaintRatioPer1000: 0.12,
      socialMediaSentiment: "Positive",
      redditSentimentScore: 82,
      twitterSentimentScore: 78,
      playStoreSentimentScore: 92,
      customerSupportScore: 9.0
    },
    compliance: {
      pciDssCertified: true,
      isoCertifications: ["ISO/IEC 27001", "ISO 9001"],
      regulatoryPenaltiesRecent: "Minor reporting latency penalty in Q3 2025 by SBP.",
      securityIncidentsRecent: "No major security breach reported in past 3 years.",
      fraudReportingQuality: "Excellent"
    },
    pricing: {
      annualDebitCardFee: 2400,
      smsAlertsMonthlyFee: 150,
      interbankTransferFee: "Raast: Free. Local IBFT: Free up to 25k/month, then 0.1% or PKR 40 max.",
      intlTransactionChargesPct: 4.5,
      atmWithdrawalChargesPKR: 23,
      dormancyCharges: "No charge for activation or layout."
    },
    notes: "Meezan Bank is the largest Islamic bank in Pakistan, offering highly strict Shariah-compliant retail products, high-quality digital apps, and unmatched domestic brand trust."
  },
  {
    basic: {
      id: "hbl",
      name: "Habib Bank Limited",
      shortName: "HBL",
      logoText: "HBL",
      logoBg: "bg-emerald-700 text-emerald-50",
      tagline: "Jahan Khwab, Wahan HBL",
      website: "https://www.hbl.com",
      hq: "Karachi",
      inceptionYear: 1947,
      licenseType: "Commercial",
      shariahCompliance: "Hybrid",
      ownershipType: "Private",
      isStockListed: true,
      swiftCode: "HABBPKKA",
      ibanPrefix: "PK67HABB"
    },
    ownership: {
      founderGroup: "Habib Family",
      sponsorCompanies: ["Aga Khan Fund for Economic Development (AKFED)", "Government of Pakistan (Formerly)"],
      sponsorCountries: ["Switzerland", "Pakistan"],
      parentOrg: "AKFED",
      majorShareholders: ["AKFED (51%)", "CDC Group Plc (5%)", "General Public / Institutions (44%)"],
      foreignOwnershipPct: 55.0
    },
    portfolio: {
      savingsAccounts: true,
      currentAccounts: true,
      freelancerAccounts: true,
      roshanDigitalAccount: true,
      islamicProducts: true, // HBL Islamic Banking branch network
      smeBanking: true,
      agricultureBanking: true,
      corporateBanking: true,
      investmentBanking: true,
      creditCardsAvailable: true,
      debitCardsAvailable: true,
      prepaidCardsAvailable: true,
      homeFinance: true,
      autoFinance: true,
      personalFinance: true,
      digitalWallets: true, // HBL Konnect
      bancassurance: true
    },
    digital: {
      mobileAppAvailable: true,
      internetBanking: true,
      biometricLogin: true,
      qrPayments: true,
      raastIntegration: true,
      nfcPayments: true,
      cardControls: true,
      pushNotifications: true,
      internationalTransfers: true,
      remittanceSupport: true,
      applePayReady: false,
      googlePayReady: false,
      eKycOnboarding: true,
      whatsappBanking: true,
      aiChatbot: true
    },
    infrastructure: {
      branches: 1750,
      atms: 2100,
      citiesCovered: 850,
      intlBranches: 12,
      cloudInfrastructure: "Enterprise Private Cloud + Multi-region active DR",
      drSiteAvailable: true,
      averageUptimePct: 99.68
    },
    cardSupport: {
      visa: true,
      mastercard: true,
      paypak: true,
      unionpay: true,
      intlAcceptance: "Excellent",
      onlinePaymentReliability: "High"
    },
    technical: {
      appRating: 4.4,
      appDownloads: "20M+",
      lastAppUpdate: "2026-05-10",
      androidMinVersion: "9.0",
      iosSupport: true,
      averageCrashPct: 0.18,
      apiLatencyMs: 165,
      downtimeScore: 4
    },
    sentiment: {
      userReviewsRating: 4.1,
      complaintsResolvedPct: 92.5,
      complaintRatioPer1000: 0.68,
      socialMediaSentiment: "Neutral",
      redditSentimentScore: 68,
      twitterSentimentScore: 55,
      playStoreSentimentScore: 84,
      customerSupportScore: 7.5
    },
    compliance: {
      pciDssCertified: true,
      isoCertifications: ["ISO 27001", "ISO 22301"],
      regulatoryPenaltiesRecent: "SBP issued penalty for procedural CRM non-compliance in mid-2025.",
      securityIncidentsRecent: "Occasional phishing campaigns mimicking Konnect/HBL are proactively reported.",
      fraudReportingQuality: "Good"
    },
    pricing: {
      annualDebitCardFee: 2600,
      smsAlertsMonthlyFee: 200,
      interbankTransferFee: "Raast: Free. Local IBFT: Standard schedule of charges. Free up to 25k, then nominal.",
      intlTransactionChargesPct: 5.0,
      atmWithdrawalChargesPKR: 23,
      dormancyCharges: "Free to re-activate within standard regulations."
    },
    notes: "HBL is the largest commercial bank in Pakistan by branch footprint and assets. Strong international wire presence, premium credit cards, and Konnect mobile wallet product line make it an omnipresent choice."
  },
  {
    basic: {
      id: "ubl",
      name: "United Bank Limited",
      shortName: "UBL",
      logoText: "UBL",
      logoBg: "bg-blue-800 text-blue-50",
      tagline: "Where You Come First",
      website: "https://www.ubldigital.com",
      hq: "Karachi",
      inceptionYear: 1959,
      licenseType: "Commercial",
      shariahCompliance: "Hybrid",
      ownershipType: "Private",
      isStockListed: true,
      swiftCode: "UNILPKKA",
      ibanPrefix: "PK33UNIL"
    },
    ownership: {
      founderGroup: "Agha Hasan Abedi",
      sponsorCompanies: ["Bestway Group (UK)"],
      sponsorCountries: ["United Kingdom"],
      parentOrg: "Bestway Group",
      majorShareholders: ["Bestway Group (61%)", "General Public (39%)"],
      foreignOwnershipPct: 61.0
    },
    portfolio: {
      savingsAccounts: true,
      currentAccounts: true,
      freelancerAccounts: true,
      roshanDigitalAccount: true,
      islamicProducts: true, // UBL Ameen
      smeBanking: true,
      agricultureBanking: true,
      corporateBanking: true,
      investmentBanking: true,
      creditCardsAvailable: true,
      debitCardsAvailable: true,
      prepaidCardsAvailable: true,
      homeFinance: true,
      autoFinance: true,
      personalFinance: true,
      digitalWallets: true, // Omni
      bancassurance: true
    },
    digital: {
      mobileAppAvailable: true,
      internetBanking: true,
      biometricLogin: true,
      qrPayments: true,
      raastIntegration: true,
      nfcPayments: true,
      cardControls: true,
      pushNotifications: true,
      internationalTransfers: true,
      remittanceSupport: true,
      applePayReady: false,
      googlePayReady: false,
      eKycOnboarding: true,
      whatsappBanking: true,
      aiChatbot: true
    },
    infrastructure: {
      branches: 1400,
      atms: 1500,
      citiesCovered: 600,
      intlBranches: 8,
      cloudInfrastructure: "Hybrid Enterprise Cloud (Local Hub + DR Backup)",
      drSiteAvailable: true,
      averageUptimePct: 99.78
    },
    cardSupport: {
      visa: true,
      mastercard: true,
      paypak: true,
      unionpay: true,
      intlAcceptance: "Excellent",
      onlinePaymentReliability: "High"
    },
    technical: {
      appRating: 4.6,
      appDownloads: "15M+",
      lastAppUpdate: "2026-05-12",
      androidMinVersion: "9.0",
      iosSupport: true,
      averageCrashPct: 0.12,
      apiLatencyMs: 130,
      downtimeScore: 3
    },
    sentiment: {
      userReviewsRating: 4.4,
      complaintsResolvedPct: 95.0,
      complaintRatioPer1000: 0.38,
      socialMediaSentiment: "Positive",
      redditSentimentScore: 78,
      twitterSentimentScore: 72,
      playStoreSentimentScore: 88,
      customerSupportScore: 8.0
    },
    compliance: {
      pciDssCertified: true,
      isoCertifications: ["ISO/IEC 27001"],
      regulatoryPenaltiesRecent: "None reported recently.",
      securityIncidentsRecent: "No consumer database exposure records.",
      fraudReportingQuality: "Excellent"
    },
    pricing: {
      annualDebitCardFee: 2500,
      smsAlertsMonthlyFee: 180,
      interbankTransferFee: "Free Raast transfers of all amounts. Local IBFT zero charges below 25k, then PKR 50.",
      intlTransactionChargesPct: 4.0,
      atmWithdrawalChargesPKR: 23,
      dormancyCharges: "No re-activation charges."
    },
    notes: "UBL is highly regarded for its top-performing digital app, fast response system, and excellent international transaction reliability. It is a very safe option for tech-savvy clients."
  },
  {
    basic: {
      id: "alfalah",
      name: "Bank Alfalah Limited",
      shortName: "Bank Alfalah",
      logoText: "BAFL",
      logoBg: "bg-red-700 text-red-50",
      tagline: "The Way Forward",
      website: "https://www.bankalfalah.com",
      hq: "Karachi",
      inceptionYear: 1997,
      licenseType: "Commercial",
      shariahCompliance: "Hybrid",
      ownershipType: "Private",
      isStockListed: true,
      swiftCode: "ALFHPKKA",
      ibanPrefix: "PK95ALFH"
    },
    ownership: {
      founderGroup: "Abu Dhabi Group",
      sponsorCompanies: ["Dhabi Group (UAE)"],
      sponsorCountries: ["United Arab Emirates"],
      parentOrg: "Dhabi Group",
      majorShareholders: ["Dhabi Group (UAE) (50%)", "General Public (50%)"],
      foreignOwnershipPct: 50.0
    },
    portfolio: {
      savingsAccounts: true,
      currentAccounts: true,
      freelancerAccounts: true,
      roshanDigitalAccount: true,
      islamicProducts: true, // Alfalah Islamic
      smeBanking: true,
      agricultureBanking: true,
      corporateBanking: true,
      investmentBanking: true,
      creditCardsAvailable: true,
      debitCardsAvailable: true,
      prepaidCardsAvailable: true,
      homeFinance: true,
      autoFinance: true,
      personalFinance: true,
      digitalWallets: true, // Alfa App
      bancassurance: true
    },
    digital: {
      mobileAppAvailable: true,
      internetBanking: true,
      biometricLogin: true,
      qrPayments: true,
      raastIntegration: true,
      nfcPayments: true,
      cardControls: true,
      pushNotifications: true,
      internationalTransfers: true,
      remittanceSupport: true,
      applePayReady: false,
      googlePayReady: false,
      eKycOnboarding: true,
      whatsappBanking: true,
      aiChatbot: true
    },
    infrastructure: {
      branches: 1020,
      atms: 1050,
      citiesCovered: 330,
      intlBranches: 3,
      cloudInfrastructure: "Nutanix Enterprise Cloud Hybrid Architecture",
      drSiteAvailable: true,
      averageUptimePct: 99.82
    },
    cardSupport: {
      visa: true,
      mastercard: true,
      paypak: true,
      unionpay: false,
      intlAcceptance: "Excellent",
      onlinePaymentReliability: "High"
    },
    technical: {
      appRating: 4.7,
      appDownloads: "10M+",
      lastAppUpdate: "2026-05-19",
      androidMinVersion: "9.0",
      iosSupport: true,
      averageCrashPct: 0.10,
      apiLatencyMs: 110,
      downtimeScore: 2
    },
    sentiment: {
      userReviewsRating: 4.5,
      complaintsResolvedPct: 96.2,
      complaintRatioPer1000: 0.28,
      socialMediaSentiment: "Positive",
      redditSentimentScore: 84,
      twitterSentimentScore: 76,
      playStoreSentimentScore: 90,
      customerSupportScore: 8.5
    },
    compliance: {
      pciDssCertified: true,
      isoCertifications: ["ISO 27001", "ISO 20000"],
      regulatoryPenaltiesRecent: "None reported recently.",
      securityIncidentsRecent: "Minor isolated spoofing alerts, handled actively.",
      fraudReportingQuality: "Excellent"
    },
    pricing: {
      annualDebitCardFee: 2200,
      smsAlertsMonthlyFee: 160,
      interbankTransferFee: "Raast: Free. Local IBFT: Alfa app zero fees for general transactions up to 50k.",
      intlTransactionChargesPct: 4.0,
      atmWithdrawalChargesPKR: 23,
      dormancyCharges: "Free Re-activation."
    },
    notes: "Bank Alfalah represents the modern digital wavefront. Its 'Alfa' app is arguably one of the most featured mobile apps in Pakistan, offering mutual fund purchases, utility billing, cinema tickets, and great credit card reward integrations."
  },
  {
    basic: {
      id: "scb",
      name: "Standard Chartered Bank Pakistan",
      shortName: "SCB Pakistan",
      logoText: "SCB",
      logoBg: "bg-teal-800 text-teal-100",
      tagline: "Here for good",
      website: "https://www.sc.com/pk",
      hq: "Karachi",
      inceptionYear: 1863,
      licenseType: "Commercial",
      shariahCompliance: "Hybrid",
      ownershipType: "Foreign",
      isStockListed: true,
      swiftCode: "SCBLPKKA",
      ibanPrefix: "PK53SCBL"
    },
    ownership: {
      founderGroup: "Chartered Bank of India, Australia and China",
      sponsorCompanies: ["Standard Chartered PLC (UK)"],
      sponsorCountries: ["United Kingdom"],
      parentOrg: "Standard Chartered PLC",
      majorShareholders: ["Standard Chartered PLC (99.1%)", "General Public (0.9%)"],
      foreignOwnershipPct: 99.1
    },
    portfolio: {
      savingsAccounts: true,
      currentAccounts: true,
      freelancerAccounts: true,
      roshanDigitalAccount: true,
      islamicProducts: true, // Saadiq
      smeBanking: true,
      agricultureBanking: false,
      corporateBanking: true,
      investmentBanking: true,
      creditCardsAvailable: true,
      debitCardsAvailable: true,
      prepaidCardsAvailable: false,
      homeFinance: true,
      autoFinance: true,
      personalFinance: true,
      digitalWallets: false,
      bancassurance: true
    },
    digital: {
      mobileAppAvailable: true,
      internetBanking: true,
      biometricLogin: true,
      qrPayments: true,
      raastIntegration: true,
      nfcPayments: true,
      cardControls: true,
      pushNotifications: true,
      internationalTransfers: true,
      remittanceSupport: true,
      applePayReady: false,
      googlePayReady: false,
      eKycOnboarding: true,
      whatsappBanking: false,
      aiChatbot: false
    },
    infrastructure: {
      branches: 40,
      atms: 95,
      citiesCovered: 10,
      intlBranches: 0, // Belongs to global SCB network
      cloudInfrastructure: "Fully integrated Standard Chartered Global Cloud (AWS Backbone)",
      drSiteAvailable: true,
      averageUptimePct: 99.95
    },
    cardSupport: {
      visa: true,
      mastercard: true,
      paypak: false,
      unionpay: false,
      intlAcceptance: "Excellent", // Absolute best international payments reliability
      onlinePaymentReliability: "High"
    },
    technical: {
      appRating: 4.5,
      appDownloads: "1M+",
      lastAppUpdate: "2026-05-01",
      androidMinVersion: "10.0",
      iosSupport: true,
      averageCrashPct: 0.05,
      apiLatencyMs: 90,
      downtimeScore: 1
    },
    sentiment: {
      userReviewsRating: 4.3,
      complaintsResolvedPct: 98.8,
      complaintRatioPer1000: 0.08,
      socialMediaSentiment: "Positive",
      redditSentimentScore: 92,
      twitterSentimentScore: 82,
      playStoreSentimentScore: 89,
      customerSupportScore: 9.2
    },
    compliance: {
      pciDssCertified: true,
      isoCertifications: ["ISO 27001", "ISO 22301", "GBL-SOC2"],
      regulatoryPenaltiesRecent: "None reported. Exemplary regulatory standing.",
      securityIncidentsRecent: "Zero reportable security breaches.",
      fraudReportingQuality: "Excellent"
    },
    pricing: {
      annualDebitCardFee: 4500, // Expensive
      smsAlertsMonthlyFee: 250,
      interbankTransferFee: "Raast: Free. Local IBFT: Zero fees for digital banking users.",
      intlTransactionChargesPct: 3.5, // Best (lowest compared to some commercial peers)
      atmWithdrawalChargesPKR: 23,
      dormancyCharges: "No charge."
    },
    notes: "SCB Pakistan is the premium branch of the SCB global group. Extremely reliable international operations, lowest failure rates, cleanest security, but low physical branch footprint (strictly urban locations)."
  },
  {
    basic: {
      id: "sadapay",
      name: "SadaPay (SadaTech Pakistan)",
      shortName: "SadaPay",
      logoText: "Sada",
      logoBg: "bg-teal-500 text-teal-950",
      tagline: "Bye-bye, bank fees.",
      website: "https://www.sadapay.pk",
      hq: "Islamabad",
      inceptionYear: 2019,
      licenseType: "Digital", // EMI license expanding
      shariahCompliance: "Conventional",
      ownershipType: "Private",
      isStockListed: false,
      swiftCode: "SADAPKK1",
      ibanPrefix: "PK82SADA"
    },
    ownership: {
      founderGroup: "Brandon Timinsky",
      sponsorCompanies: ["SadaTech Ltd (Holdings)", "Kingsway Capital", "Valar Ventures"],
      sponsorCountries: ["United States", "United Kingdom"],
      parentOrg: "SadaTech Ltd",
      majorShareholders: ["Brandon Timinsky (30%)", "Yusuf Jan (10%)", "Foreign Venture Funds (60%)"],
      foreignOwnershipPct: 75.0
    },
    portfolio: {
      savingsAccounts: false,
      currentAccounts: true, // Wallet-type accounts
      freelancerAccounts: true, // SadaBiz account
      roshanDigitalAccount: false,
      islamicProducts: false,
      smeBanking: false,
      agricultureBanking: false,
      corporateBanking: false,
      investmentBanking: false,
      creditCardsAvailable: false,
      debitCardsAvailable: true, // Mastercard physical/virtual
      prepaidCardsAvailable: false,
      homeFinance: false,
      autoFinance: false,
      personalFinance: false,
      digitalWallets: true,
      bancassurance: false
    },
    digital: {
      mobileAppAvailable: true,
      internetBanking: false, // strictly mobile app only
      biometricLogin: true,
      qrPayments: true,
      raastIntegration: true,
      nfcPayments: true,
      cardControls: true,
      pushNotifications: true,
      internationalTransfers: true, // via mastercard, and inbound SadaBiz invoices
      remittanceSupport: true,
      applePayReady: false,
      googlePayReady: false,
      eKycOnboarding: true,
      whatsappBanking: false,
      aiChatbot: true
    },
    infrastructure: {
      branches: 0, // 100% cloud branchless
      atms: 0,
      citiesCovered: 150, // Available nationwide digitally
      intlBranches: 0,
      cloudInfrastructure: "Fully Cloud Native on AWS (Frankfurt & Dublin nodes via secure SBP gateways)",
      drSiteAvailable: true,
      averageUptimePct: 99.92
    },
    cardSupport: {
      visa: false,
      mastercard: true,
      paypak: false,
      unionpay: false,
      intlAcceptance: "Excellent",
      onlinePaymentReliability: "High"
    },
    technical: {
      appRating: 4.9, // Exceptionally high
      appDownloads: "5M+",
      lastAppUpdate: "2026-05-20",
      androidMinVersion: "10.0",
      iosSupport: true,
      averageCrashPct: 0.03,
      apiLatencyMs: 65, // AWS-driven fast latency
      downtimeScore: 1
    },
    sentiment: {
      userReviewsRating: 4.8,
      complaintsResolvedPct: 99.1,
      complaintRatioPer1000: 0.05,
      socialMediaSentiment: "Positive",
      redditSentimentScore: 95,
      twitterSentimentScore: 90,
      playStoreSentimentScore: 96,
      customerSupportScore: 9.5
    },
    compliance: {
      pciDssCertified: true,
      isoCertifications: ["ISO 27001"],
      regulatoryPenaltiesRecent: "None. Strictly monitored under SBP EMI pilot framework.",
      securityIncidentsRecent: "No recorded hacker access or data leakage.",
      fraudReportingQuality: "Excellent"
    },
    pricing: {
      annualDebitCardFee: 0, // Free! First card is free, no annual charges.
      smsAlertsMonthlyFee: 0, // Absolutely free
      interbankTransferFee: "Free Raast transfers. IBFT: First 3 transfers of the month free, then PKR 10 per transaction.",
      intlTransactionChargesPct: 2.5, // Arguably lowest international markup in Pakistan
      atmWithdrawalChargesPKR: 0, // First 3 domestic withdrawals of the month are free! Then standard PKR 23.
      dormancyCharges: "No fee ever."
    },
    notes: "SadaPay is a modern Electronic Money Institution (EMI) taking Pakistan by storm, especially amongst freelancers and gen-Z. Its 'SadaBiz' product enables freelancers to receive payments from Apple Pay and international cards instantly. Free cards and zero hidden fees."
  },
  {
    basic: {
      id: "nayapay",
      name: "NayaPay (NayaPay Pvt Ltd)",
      shortName: "NayaPay",
      logoText: "Naya",
      logoBg: "bg-teal-900 text-teal-200",
      tagline: "Payments made simple.",
      website: "https://www.nayapay.com",
      hq: "Karachi",
      inceptionYear: 2019,
      licenseType: "Digital", // EMI License
      shariahCompliance: "Conventional",
      ownershipType: "Private",
      isStockListed: false,
      swiftCode: "NYAPKK1A",
      ibanPrefix: "PK22NYAP"
    },
    ownership: {
      founderGroup: "Lakson Group",
      sponsorCompanies: ["Lakson Group (Pakistan)"],
      sponsorCountries: ["Pakistan", "United States"],
      parentOrg: "Lakson Group",
      majorShareholders: ["Lakson Group (Holdings) (85%)", "Venture Capitalists (15%)"],
      foreignOwnershipPct: 15.0
    },
    portfolio: {
      savingsAccounts: false,
      currentAccounts: true, // Digital wallets
      freelancerAccounts: true,
      roshanDigitalAccount: false,
      islamicProducts: false,
      smeBanking: true, // NayaPay Arc for merchants
      agricultureBanking: false,
      corporateBanking: false,
      investmentBanking: false,
      creditCardsAvailable: false,
      debitCardsAvailable: true, // Visa physical and virtual
      prepaidCardsAvailable: false,
      homeFinance: false,
      autoFinance: false,
      personalFinance: false,
      digitalWallets: true,
      bancassurance: false
    },
    digital: {
      mobileAppAvailable: true,
      internetBanking: false,
      biometricLogin: true,
      qrPayments: true,
      raastIntegration: true,
      nfcPayments: true,
      cardControls: true,
      pushNotifications: true,
      internationalTransfers: true,
      remittanceSupport: true,
      applePayReady: false,
      googlePayReady: false,
      eKycOnboarding: true,
      whatsappBanking: false,
      aiChatbot: true
    },
    infrastructure: {
      branches: 0, // 100% digital
      atms: 0,
      citiesCovered: 180,
      intlBranches: 0,
      cloudInfrastructure: "Hybrid Cloud Framework using secure SBP local servers + Google Cloud DR hosting",
      drSiteAvailable: true,
      averageUptimePct: 99.89
    },
    cardSupport: {
      visa: true,
      mastercard: false,
      paypak: false,
      unionpay: false,
      intlAcceptance: "Excellent",
      onlinePaymentReliability: "High"
    },
    technical: {
      appRating: 4.8,
      appDownloads: "5M+",
      lastAppUpdate: "2026-05-18",
      androidMinVersion: "9.0",
      iosSupport: true,
      averageCrashPct: 0.05,
      apiLatencyMs: 75,
      downtimeScore: 1
    },
    sentiment: {
      userReviewsRating: 4.7,
      complaintsResolvedPct: 98.4,
      complaintRatioPer1000: 0.07,
      socialMediaSentiment: "Positive",
      redditSentimentScore: 92,
      twitterSentimentScore: 86,
      playStoreSentimentScore: 94,
      customerSupportScore: 9.3
    },
    compliance: {
      pciDssCertified: true,
      isoCertifications: ["ISO-27001"],
      regulatoryPenaltiesRecent: "None reported.",
      securityIncidentsRecent: "No data compromising events.",
      fraudReportingQuality: "Excellent"
    },
    pricing: {
      annualDebitCardFee: 0, // Standard Virtual is Free. Standard Physical requires dynamic initial setup (e.g. 1000 PKR once) then zero annual fee.
      smsAlertsMonthlyFee: 0,
      interbankTransferFee: "Raast: Free. Local IBFT: Zero fees inside NayaPay, or up to SBP limits.",
      intlTransactionChargesPct: 3.0, // Very low
      atmWithdrawalChargesPKR: 23,
      dormancyCharges: "No charge."
    },
    notes: "NayaPay operates as a leading digital wallet supporting dual virtual/physical Visa cards. Loved by young freelancers and small businesses. Its merchant gateway integration 'NayaPay Arc' has streamlined local card operations."
  },
  {
    basic: {
      id: "faysal",
      name: "Faysal Bank Limited",
      shortName: "Faysal Bank",
      logoText: "FBL",
      logoBg: "bg-orange-850 text-orange-100",
      tagline: "Awwal - Pure Islamic Banking",
      website: "https://www.faysalbank.com",
      hq: "Karachi",
      inceptionYear: 1994,
      licenseType: "Islamic", // Converted from Conventional to 100% Islamic
      shariahCompliance: "Islamic",
      ownershipType: "Private",
      isStockListed: true,
      swiftCode: "FYSBPKKA",
      ibanPrefix: "PK88FYSB"
    },
    ownership: {
      founderGroup: "Ithmaar Bank BSC",
      sponsorCompanies: ["Ithmaar Bank BSC (Bahrain)", "Dar Al-Maal Al-Islami Trust (DMI)"],
      sponsorCountries: ["Bahrain", "Saudi Arabia"],
      parentOrg: "Ithmaar Holding",
      majorShareholders: ["Ithmaar Bank Group (66.7%)", "General Public (33.3%)"],
      foreignOwnershipPct: 66.7
    },
    portfolio: {
      savingsAccounts: true,
      currentAccounts: true,
      freelancerAccounts: true,
      roshanDigitalAccount: true,
      islamicProducts: true,
      smeBanking: true,
      agricultureBanking: true,
      corporateBanking: true,
      investmentBanking: true,
      creditCardsAvailable: true, // Shariah Compliant Islamic Credit Cards (Noor Card)
      debitCardsAvailable: true,
      prepaidCardsAvailable: false,
      homeFinance: true,
      autoFinance: true,
      personalFinance: false,
      digitalWallets: false,
      bancassurance: true
    },
    digital: {
      mobileAppAvailable: true,
      internetBanking: true,
      biometricLogin: true,
      qrPayments: true,
      raastIntegration: true,
      nfcPayments: true,
      cardControls: true,
      pushNotifications: true,
      internationalTransfers: true,
      remittanceSupport: true,
      applePayReady: false,
      googlePayReady: false,
      eKycOnboarding: true,
      whatsappBanking: true,
      aiChatbot: false
    },
    infrastructure: {
      branches: 720,
      atms: 750,
      citiesCovered: 150,
      intlBranches: 0,
      cloudInfrastructure: "On-Premises Dedicated Data Center with Real-time Active replication",
      drSiteAvailable: true,
      averageUptimePct: 99.72
    },
    cardSupport: {
      visa: true,
      mastercard: true,
      paypak: true,
      unionpay: false,
      intlAcceptance: "Good",
      onlinePaymentReliability: "High"
    },
    technical: {
      appRating: 4.5,
      appDownloads: "5M+",
      lastAppUpdate: "2026-05-11",
      androidMinVersion: "9.0",
      iosSupport: true,
      averageCrashPct: 0.14,
      apiLatencyMs: 140,
      downtimeScore: 3
    },
    sentiment: {
      userReviewsRating: 4.3,
      complaintsResolvedPct: 94.8,
      complaintRatioPer1000: 0.35,
      socialMediaSentiment: "Positive",
      redditSentimentScore: 80,
      twitterSentimentScore: 70,
      playStoreSentimentScore: 87,
      customerSupportScore: 8.2
    },
    compliance: {
      pciDssCertified: true,
      isoCertifications: ["ISO 27001"],
      regulatoryPenaltiesRecent: "None of significance.",
      securityIncidentsRecent: "No customer service data breaches identified.",
      fraudReportingQuality: "Good"
    },
    pricing: {
      annualDebitCardFee: 2305,
      smsAlertsMonthlyFee: 150,
      interbankTransferFee: "Raast: Free. Local IBFT: Standard fee rates apply based on SBP guidelines.",
      intlTransactionChargesPct: 4.5,
      atmWithdrawalChargesPKR: 23,
      dormancyCharges: "No activation fees."
    },
    notes: "Faysal Bank achieved a historic milestones as the largest conventional commercial bank in Pakistan to completely convert all operations to 100% Shariah-compliance. Offers Noor Islamic Credit Card which is unique in Shariah portfolio."
  },
  {
    basic: {
      id: "easypaisa",
      name: "Telenor Microfinance Bank (Easypaisa)",
      shortName: "Easypaisa",
      logoText: "Easy",
      logoBg: "bg-emerald-600 text-emerald-50",
      tagline: "Pakistaniyo ki apni pocket",
      website: "https://www.easypaisa.com.pk",
      hq: "Islamabad",
      inceptionYear: 2009,
      licenseType: "Microfinance", // Broadening into a full digital license
      shariahCompliance: "Conventional",
      ownershipType: "Private",
      isStockListed: false,
      swiftCode: "ELNRPKK1",
      ibanPrefix: "PK44ELNR"
    },
    ownership: {
      founderGroup: "Telenor Group & Ant Financial",
      sponsorCompanies: ["Telenor Group (Norway)", "Ant International (Alibaba Group, China)"],
      sponsorCountries: ["Norway", "China"],
      parentOrg: "Telenor Microfinance",
      majorShareholders: ["Telenor Group (55%)", "Ant Financial (Alibaba) (45%)"],
      foreignOwnershipPct: 100.0
    },
    portfolio: {
      savingsAccounts: true, // Asaan digital savings
      currentAccounts: true,
      freelancerAccounts: false,
      roshanDigitalAccount: false,
      islamicProducts: false,
      smeBanking: true,
      agricultureBanking: true,
      corporateBanking: false,
      investmentBanking: false,
      creditCardsAvailable: false,
      debitCardsAvailable: true, // UnionPay/PayPak physical cards
      prepaidCardsAvailable: false,
      homeFinance: false,
      autoFinance: false,
      personalFinance: true, // Easypaisa digital nano-loans (Easycash)
      digitalWallets: true,
      bancassurance: true
    },
    digital: {
      mobileAppAvailable: true,
      internetBanking: false,
      biometricLogin: true,
      qrPayments: true,
      raastIntegration: true,
      nfcPayments: false,
      cardControls: true,
      pushNotifications: true,
      internationalTransfers: false,
      remittanceSupport: true, // Huge inbound Western Union and Alipay remittance channel
      applePayReady: false,
      googlePayReady: false,
      eKycOnboarding: true,
      whatsappBanking: false,
      aiChatbot: true
    },
    infrastructure: {
      branches: 150000, // Retail agent networks are counted as branches for microfinance outreach
      atms: 0, // Rely on partner banks standard machines
      citiesCovered: 980,
      intlBranches: 0,
      cloudInfrastructure: "Ant Financial distributed cloud framework nested on Local DR center",
      drSiteAvailable: true,
      averageUptimePct: 99.45
    },
    cardSupport: {
      visa: false,
      mastercard: false,
      paypak: true,
      unionpay: true,
      intlAcceptance: "Limited",
      onlinePaymentReliability: "Medium"
    },
    technical: {
      appRating: 4.3,
      appDownloads: "50M+", // Most downloaded fintech app in Pakistan
      lastAppUpdate: "2026-05-15",
      androidMinVersion: "8.0",
      iosSupport: true,
      averageCrashPct: 0.25,
      apiLatencyMs: 180,
      downtimeScore: 5
    },
    sentiment: {
      userReviewsRating: 4.0,
      complaintsResolvedPct: 89.2,
      complaintRatioPer1000: 1.15, // Higher ratio due to massive unbanked demographic and agent-cashouts issues
      socialMediaSentiment: "Neutral",
      redditSentimentScore: 45,
      twitterSentimentScore: 40,
      playStoreSentimentScore: 82,
      customerSupportScore: 6.5
    },
    compliance: {
      pciDssCertified: true,
      isoCertifications: ["ISO-27001"],
      regulatoryPenaltiesRecent: "Procedural penalties for KYC guidelines in pilot branchless tests.",
      securityIncidentsRecent: "Target of large social-engineering scams (fake calls/SMS), handled via consumer awareness.",
      fraudReportingQuality: "Standard"
    },
    pricing: {
      annualDebitCardFee: 1000,
      smsAlertsMonthlyFee: 60,
      interbankTransferFee: "Raast: Free. Local IBFT: Free up to limits, then PKR 10-100 based on transaction size.",
      intlTransactionChargesPct: 6.0,
      atmWithdrawalChargesPKR: 23, // Off-network Partner charges apply
      dormancyCharges: "No charge."
    },
    notes: "Easypaisa is the pioneer of branchless banking in Pakistan. Jointly owned by Telenor Group and Alibaba's Ant Financial. It commands a gigantic, near-universal outreach in the unbanked and lower-middle-class sector, offering fast micro-loans (Easycash)."
  }
];
export function rankBanks(weights: {
  appQuality: number;
  intlPayments: number;
  atmNetwork: number;
  islamicBanking: number;
  customerSupport: number;
  freelancerFriendly: number;
  lowCharges: number;
  accountOpeningSpeed: number;
}, banks: BankProfile[] = BANKS): import("../types").RankedBankResult[] {
  // Normalize the weights to ensure total is 100%
  const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0) || 1;
  const normalized = {
    appQuality: weights.appQuality / totalWeight,
    intlPayments: weights.intlPayments / totalWeight,
    atmNetwork: weights.atmNetwork / totalWeight,
    islamicBanking: weights.islamicBanking / totalWeight,
    customerSupport: weights.customerSupport / totalWeight,
    freelancerFriendly: weights.freelancerFriendly / totalWeight,
    lowCharges: weights.lowCharges / totalWeight,
    accountOpeningSpeed: weights.accountOpeningSpeed / totalWeight
  };

  return banks.map(bank => {
    // 1. App Quality Score (0 to 100)
    const appScore = bank.digital.mobileAppAvailable ? (bank.technical.appRating / 5) * 100 : 0;

    // 2. International Payments Score (0 to 100)
    let intlScore = 0;
    if (bank.cardSupport.intlAcceptance === "Excellent") intlScore = 100;
    else if (bank.cardSupport.intlAcceptance === "Good") intlScore = 80;
    else if (bank.cardSupport.intlAcceptance === "Moderate") intlScore = 50;
    else intlScore = 20;
    // penalty if online pay reliability is low
    if (bank.cardSupport.onlinePaymentReliability === "High") intlScore += 0;
    else if (bank.cardSupport.onlinePaymentReliability === "Medium") intlScore -= 15;
    else intlScore -= 30;

    // 3. ATM Network Score (0 to 100)
    // Meezan/HBL/UBL have huge networks. SCB is small. digital banks have 0 physical ATMs.
    let atmScore = 0;
    if (bank.infrastructure.atms > 2000) atmScore = 100;
    else if (bank.infrastructure.atms > 1000) atmScore = 90;
    else if (bank.infrastructure.atms > 500) atmScore = 75;
    else if (bank.infrastructure.atms > 0) atmScore = 50;
    else {
      // Digital banks often reimburse standard ATM withdrawal fees or offer digital refunds, but zero physical footprint
      atmScore = 30;
    }

    // 4. Islamic Banking Score (0 to 100)
    let islamicScore = 0;
    if (bank.basic.shariahCompliance === "Islamic") islamicScore = 100;
    else if (bank.basic.shariahCompliance === "Hybrid" || bank.portfolio.islamicProducts) islamicScore = 60;
    else islamicScore = 10;

    // 5. Customer Support Score (0 to 100)
    const supportScore = bank.sentiment.customerSupportScore * 10;

    // 6. Freelancer Friendly Score (0 to 100)
    let freelancerScore = 0;
    if (bank.portfolio.freelancerAccounts) freelancerScore += 50;
    if (bank.digital.eKycOnboarding) freelancerScore += 25;
    if (bank.pricing.annualDebitCardFee === 0) freelancerScore += 15;
    if (bank.pricing.intlTransactionChargesPct <= 3.5) freelancerScore += 10;
    if (freelancerScore > 100) freelancerScore = 100;

    // 7. Low Charges Score (0 to 100)
    // Rank based on debit card fee and international transaction markup
    const cardFeeQuality = Math.max(0, 100 - (bank.pricing.annualDebitCardFee / 4500) * 50); // low fee is better
    const markupQuality = Math.max(0, 100 - (bank.pricing.intlTransactionChargesPct / 6) * 50); // low markup is better
    const chargesScore = cardFeeQuality + markupQuality; // Out of 100 max

    // 8. Account Opening Speed (0 to 100)
    // EMIs and Digital banks excel here (minutes), conventional branch takes days
    let speedScore = 50; // default for hybrid branches
    if (bank.basic.licenseType === "Digital") speedScore = 98; // Instant via app biometric
    else if (bank.digital.eKycOnboarding) speedScore = 80;

    const weightedBreakdown = {
      appQuality: appScore,
      intlPayments: intlScore,
      atmNetwork: atmScore,
      islamicBanking: islamicScore,
      customerSupport: supportScore,
      freelancerFriendly: freelancerScore,
      lowCharges: chargesScore,
      accountOpeningSpeed: speedScore
    };

    const overallScore = 
      (appScore * normalized.appQuality) +
      (intlScore * normalized.intlPayments) +
      (atmScore * normalized.atmNetwork) +
      (islamicScore * normalized.islamicBanking) +
      (supportScore * normalized.customerSupport) +
      (freelancerScore * normalized.freelancerFriendly) +
      (chargesScore * normalized.lowCharges) +
      (speedScore * normalized.accountOpeningSpeed);

    return {
      bank,
      score: Math.round(overallScore * 10) / 10,
      breakdown: {
        appQuality: Math.round(appScore),
        intlPayments: Math.round(intlScore),
        atmNetwork: Math.round(atmScore),
        islamicBanking: Math.round(islamicScore),
        customerSupport: Math.round(supportScore),
        freelancerFriendly: Math.round(freelancerScore),
        lowCharges: Math.round(chargesScore),
        accountOpeningSpeed: Math.round(speedScore)
      }
    };
  }).sort((a, b) => b.score - a.score);
}
