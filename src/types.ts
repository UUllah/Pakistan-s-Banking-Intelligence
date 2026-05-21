export interface BankBasicInfo {
  id: string;
  name: string;
  shortName: string;
  logoText: string;
  logoBg: string; // Tailwind color e.g. "bg-green-600"
  tagline: string;
  website: string;
  hq: string;
  inceptionYear: number;
  licenseType: "Commercial" | "Islamic" | "Digital" | "Microfinance";
  shariahCompliance: "Conventional" | "Islamic" | "Hybrid";
  ownershipType: "Public" | "Private" | "Foreign";
  isStockListed: boolean;
  swiftCode: string;
  ibanPrefix: string;
}

export interface BankOwnership {
  founderGroup: string;
  sponsorCompanies: string[];
  sponsorCountries: string[];
  parentOrg?: string;
  majorShareholders: string[];
  foreignOwnershipPct: number;
}

export interface BankPortfolio {
  savingsAccounts: boolean;
  currentAccounts: boolean;
  freelancerAccounts: boolean;
  roshanDigitalAccount: boolean;
  islamicProducts: boolean;
  smeBanking: boolean;
  agricultureBanking: boolean;
  corporateBanking: boolean;
  investmentBanking: boolean;
  creditCardsAvailable: boolean;
  debitCardsAvailable: boolean;
  prepaidCardsAvailable: boolean;
  homeFinance: boolean;
  autoFinance: boolean;
  personalFinance: boolean;
  digitalWallets: boolean;
  bancassurance: boolean;
}

export interface BankDigitalServices {
  mobileAppAvailable: boolean;
  internetBanking: boolean;
  biometricLogin: boolean;
  qrPayments: boolean;
  raastIntegration: boolean;
  nfcPayments: boolean;
  cardControls: boolean;
  pushNotifications: boolean;
  internationalTransfers: boolean;
  remittanceSupport: boolean;
  applePayReady: boolean;
  googlePayReady: boolean;
  eKycOnboarding: boolean;
  whatsappBanking: boolean;
  aiChatbot: boolean;
}

export interface BankInfrastructure {
  branches: number;
  atms: number;
  citiesCovered: number;
  intlBranches: number;
  cloudInfrastructure: string;
  drSiteAvailable: boolean;
  averageUptimePct: number; // e.g. 99.92
}

export interface BankCardSupport {
  visa: boolean;
  mastercard: boolean;
  paypak: boolean;
  unionpay: boolean;
  intlAcceptance: "Excellent" | "Good" | "Moderate" | "Limited";
  onlinePaymentReliability: "High" | "Medium" | "Low";
}

export interface BankTechnicalMetrics {
  appRating: number; // e.g. 4.6
  appDownloads: string; // e.g. "5M+"
  lastAppUpdate: string; // e.g. "2026-05-15"
  androidMinVersion: string;
  iosSupport: boolean;
  averageCrashPct: number; // e.g. 0.15
  apiLatencyMs: number; // e.g. 120
  downtimeScore: number; // score 1-10 where 1 is best
}

export interface BankSentimentReviews {
  userReviewsRating: number; // 1-5 scale
  complaintsResolvedPct: number; // e.g. 94.2
  complaintRatioPer1000: number; // e.g. 0.45
  socialMediaSentiment: "Positive" | "Neutral" | "Negative";
  redditSentimentScore: number; // 1-100 scale
  twitterSentimentScore: number; // 1-100 scale
  playStoreSentimentScore: number; // 1-100 scale
  customerSupportScore: number; // 1-10 scale
}

export interface BankComplianceSecurity {
  pciDssCertified: boolean;
  isoCertifications: string[];
  regulatoryPenaltiesRecent: string; // description
  securityIncidentsRecent: string; // description
  fraudReportingQuality: "Excellent" | "Good" | "Standard";
}

export interface BankPricingCharges {
  annualDebitCardFee: number; // PKR
  smsAlertsMonthlyFee: number; // PKR
  interbankTransferFee: string; // e.g. "Raast: Free, IBFT: Free up to 25k, then 0.1%"
  intlTransactionChargesPct: number; // percentage e.g. 3.5
  atmWithdrawalChargesPKR: number; // Off-network withdrawal
  dormancyCharges: string;
}

export interface BankProfile {
  basic: BankBasicInfo;
  ownership: BankOwnership;
  portfolio: BankPortfolio;
  digital: BankDigitalServices;
  infrastructure: BankInfrastructure;
  cardSupport: BankCardSupport;
  technical: BankTechnicalMetrics;
  sentiment: BankSentimentReviews;
  compliance: BankComplianceSecurity;
  pricing: BankPricingCharges;
  notes: string;
}

// User weighted priority weights for the decision matrix
export interface UserPriorityWeights {
  appQuality: number;            // 0 to 100
  intlPayments: number;          // 0 to 100
  atmNetwork: number;            // 0 to 100
  islamicBanking: number;        // 0 to 100
  customerSupport: number;       // 0 to 100
  freelancerFriendly: number;    // 0 to 100
  lowCharges: number;            // 0 to 100
  accountOpeningSpeed: number;   // 0 to 100
}

export interface RankedBankResult {
  bank: BankProfile;
  score: number; // 0-100 computed score
  breakdown: {
    appQuality: number;
    intlPayments: number;
    atmNetwork: number;
    islamicBanking: number;
    customerSupport: number;
    freelancerFriendly: number;
    lowCharges: number;
    accountOpeningSpeed: number;
  };
}

export interface OutageReport {
  id: string;
  bankId: string;
  service: "Mobile App" | "ATM Network" | "IBFT Transfers" | "Visa/MC Gateway" | "Raast System";
  status: "Operational" | "Degraded" | "Outage";
  reportedAt: string;
  details: string;
  reportedBy: string;
  upvotes: number;
}
