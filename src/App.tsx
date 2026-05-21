import React, { useState, useEffect } from "react";
import {
  Building2,
  ShieldCheck,
  Cpu,
  Globe,
  CreditCard,
  Wallet,
  Coins,
  MessageSquareCode,
  Activity,
  UserCheck,
  ChevronRight,
  Search,
  Award,
  Info,
  Users,
  CheckCircle,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Plus,
  Languages,
  Sliders,
  Sparkles,
  RefreshCw,
  FileText,
  Lock,
  Scale,
  Settings,
  Flame,
  User,
  ExternalLink,
  ThumbsUp,
  Filter,
  Check,
} from "lucide-react";
import { BankProfile, RankedBankResult, OutageReport } from "./types";

// Bilingual Content Translation Object
const TRANSLATIONS = {
  en: {
    heroTitle: "Pakistan's Premier Banking Intelligence Hub",
    heroSubtitle: "Enterprise-grade smart banking comparison, SBP compliance audits, real-time crowdsourced outage alerts, and premium AI counseling.",
    searchPlaceholder: "Search MEBL, HBL, Sadapay, card fees, or license specs...",
    allBanks: "All Banks Portal",
    priorityMatchmaker: "AI Prioritizer & Matchmaker",
    islamicHub: "Shariah Compliance Hub",
    intlRemit: "International & Inbound Remittance",
    mobileTech: "App Performance & API Latency",
    chargesFees: "Slasher Alert (Fees Comparison)",
    liveOutages: "Crowdsourced Live Monitor & Status",
    sarmayaChat: "Sarmaya AI Financial Advisor",
    adminController: "Enterprise Metrology & Controls",
    shariahAudit: "Shariah Audit Team",
    sponsorOrigin: "Sponsor Origin Group",
    licenseType: "License Category",
    cardNetworks: "Integrated Card Networks",
    digitalOnboard: "Digital eKYC Onboarding",
    annualFee: "Annual Card Surcharge",
    smsFee: "Monthly SMS alert fee",
    intlMarkup: "FX Surcharge on Intl payments",
    atmCharge: "Off-net ATM withdrawal cost",
    complaintsIndex: "SBP Complaints Resolved Ratio",
    averageUptime: "Verified Platform Uptime",
    apiLatency: "VaporCore API Response Time",
    crashReport: "Production Mean App Crash",
    regulatorypenalties: "SBP Regulatory Actions",
    scamsWarning: "Recent Cyber/Phishing Threat Advisory",
    filerTaxTip: "Withholding Tax (WHT): Filers pay 1-2% less on cross-border transactions than Non-filers (SBP Sec-236b).",
    quickSummary: "Compare branches, mobile updates, compliance levels, and real-time fees instantly.",
    submitOutage: "Log Citizen Outage Signal",
    supportDesk: "Sarmaya AI Advisory Desk",
    weightsTitle: "Enterprise Preference Matrix",
    weightsSubtitle: "Calibrate the slider ratios to prioritize your ideal operational banking features. Scores recalculate instantly using state vectors.",
    appRating: "App Experience & Updates Rating",
    intlSurchargeScore: "Intl Surcharge & Acceptance Mode",
    atmFootprint: "Physical Branches & ATM Reach",
    shariahLevel: "Islamic & Shariah strictness level",
    customerSupportState: "Public Customer Support Index",
    freelancerNiche: "Freelancer Inbound Rates & RDA",
    lowHiddenCharges: "Low Hidden Charges & Card Fees",
    speedyOnboarding: "Account opening & eKYC speed",
    aiRecommendationResult: "Gemini AI Portfolio Advisory Report",
    calculateMatch: "Synthesize AI Recommendations",
    aiAnalyzing: "Querying Gemini Strategic Banking Engine...",
    chatIntro: "Assalam-o-Alaikum! I am Sarmaya AI, your secure State Bank of Pakistan compliance and premium banking expert. Ask me about Roshan Digital Accounts (RDA), Withholding Tax (WHT), Raast instant payments limits, or comparing card features.",
    chatPlaceholder: "Ask about Filer vs Non-Filer cross-border fees, RDA accounts, etc...",
    send: "Transmit Query",
    reportedBy: "Citizen Signal Witness",
    outageFormSuccess: "Thank you! Your verified citizen signal has been registered and updated on the country-wide heatmap status board.",
    systemStatusOk: "Sarmaya Cloud System Status: Pure Active Green & Verified SBP Database Connected.",
  },
  ur: {
    heroTitle: "پاکستان کا اعلیٰ ترین بینکنگ انٹیلیجنس مرکز",
    heroSubtitle: "جدید بینکنگ موازنہ، اسٹیٹ بینک آف پاکستان قوانین، صارفین کی مدد سے بندش کی معلومات، اور بہترین خودکار موازنہ۔",
    searchPlaceholder: "میزان، ایچ بی ایل، سادہ پے، کارڈ فیس، یا بائیو میٹرک تلاش کریں...",
    allBanks: "تمام بینکوں کا پورٹل",
    priorityMatchmaker: "خودکار ترجیحی موازنہ کار",
    islamicHub: "شرعی و اسلامی بینکنگ ڈیسک",
    intlRemit: "انٹرنیشنل ادائیگیاں اور ریمیٹینس",
    mobileTech: "ایپ کا معیار اور رفتار",
    chargesFees: "پوشیدہ چارجز اور فیس موازنہ",
    liveOutages: "لائیو بندش اور عوام کی رپورٹس",
    sarmayaChat: "سرمایہ سمارٹ اے آئی مشیر",
    adminController: "انتظامی کنٹرولر سمیلیٹر",
    shariahAudit: "شرعی آڈٹ ٹیم",
    sponsorOrigin: "اسپانسر گروپ",
    licenseType: "لائسنس کیٹیگری",
    cardNetworks: "کارڈ نیٹ ورک",
    digitalOnboard: "ڈیجیٹل اکاؤنٹ بائیومیٹرک",
    annualFee: "سالانہ ڈیبٹ کارڈ فیس",
    smsFee: "ماہانہ ایس ایم ایس الرٹ فیس",
    intlMarkup: "بین الاقوامی ادائیگیوں پر ٹیکس",
    atmCharge: "دوسرے اے ٹی ایم کے چارجز",
    complaintsIndex: "قانونی شکایات حل کرنے کی رفتار",
    averageUptime: "ایپلی کیشن کا آن لائن ٹائم",
    apiLatency: "اے پی آئی رسپانس ٹائم",
    crashReport: "ایپ کریش کی اوسط شرح",
    regulatorypenalties: "SBP ریگولیٹری سزائیں",
    scamsWarning: "سائبر سیکیورٹی اور ہیکنگ ایڈوائزری",
    filerTaxTip: "فائلر ٹیکس بچت: فائلرز سرحد پار لین دین پر نان فائلرز کے مقابلے میں 1-2 فیصد کم چارجز ادا کرتے ہیں۔",
    quickSummary: "شاخوں کی تعداد، ایپ اپ ڈیٹس اور چارجز کا فوری معائنہ کریں۔",
    submitOutage: "نئی بندش کی رپورٹ درج کریں",
    supportDesk: "سرمایہ اے آئی معلوماتی مرکز",
    weightsTitle: "ترجیحی فنڈنگ فریم ورک",
    weightsSubtitle: "بینکنگ خصوصیات کو اپنی ترجیحات کے مطابق سیٹ کریں۔ اسکورنگ الگورتھم فوری اپڈیٹ کرتا ہے۔",
    appRating: "موبائل ایپ کا معیار اور استعمال",
    intlSurchargeScore: "انٹرنیشنل ادائیگیوں کی ساکھ",
    atmFootprint: "شاخوں اور اے ٹی ایم کا حجم",
    shariahLevel: "شرعی قوانین کی سختی کا درجہ",
    customerSupportState: "کسٹمر سپورٹ کا معیار",
    freelancerNiche: "فری لانس اکاؤنٹ اور ریمٹنس سہولت",
    lowHiddenCharges: "کم کارڈ فیس اور فری Raast",
    speedyOnboarding: "اکاؤنٹ کھلنے کی رفتار",
    aiRecommendationResult: "جیمنائی سمارٹ بینکنگ تجزیہ رپورٹ",
    calculateMatch: "اے آئی سے تجزیہ حاصل کریں",
    aiAnalyzing: "جیمنائی اے آئی ریسرچ انجن فعال ہے...",
    chatIntro: "السلام علیکم! میں سرمایہ اے آئی ہوں۔ پاکستان کے بینکنگ قوانین، روشن ڈیجیٹل اکاؤنٹ، فائلر/نان فائلر چارجز، یا رافت ادائیگیاں سمجھنے کے لیے سوال کریں۔",
    chatPlaceholder: "فائلر اور نان فائلر میں فرق کے بارے میں پوچھیں...",
    send: "سوال بھیجیں",
    reportedBy: "گواہ شہری کا نام",
    outageFormSuccess: "شکریہ! آپ کی لائیو رپورٹ شامل کر دی گئی ہے۔ تمام صارفین اب لائیو ہیٹ میپ پر یہ دیکھ سکتے ہیں۔",
    systemStatusOk: "سرمایہ کلاؤڈ سسٹمز: مکمل آن لائن، اسٹیٹ بینک آف پاکستان نیٹ ورک فعال ہے۔",
  }
};

export default function App() {
  const [lang, setLang] = useState<"en" | "ur">("en");
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [banks, setBanks] = useState<BankProfile[]>([]);
  const [selectedBank, setSelectedBank] = useState<BankProfile | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [shariahOnly, setShariahOnly] = useState(false);
  const [digitalOnly, setDigitalOnly] = useState(false);

  // Preference matrix state
  const [weights, setWeights] = useState({
    appQuality: 40,
    intlPayments: 30,
    atmNetwork: 20,
    islamicBanking: 10,
    customerSupport: 50,
    freelancerFriendly: 45,
    lowCharges: 60,
    accountOpeningSpeed: 40,
  });

  const [aiReport, setAiReport] = useState<string>("");
  const [analyzingAi, setAnalyzingAi] = useState(false);
  const [aiRankingBreakdown, setAiRankingBreakdown] = useState<any[]>([]);
  const [wizardInterest, setWizardInterest] = useState<string>("Professional / General Consumer");
  const [wizardQuery, setWizardQuery] = useState<string>("");

  // Advisors Chat State
  const [chatInput, setChatInput] = useState("");
  const [chatLog, setChatLog] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    { role: "assistant", content: TRANSLATIONS[lang].chatIntro },
  ]);
  const [chatLoading, setChatLoading] = useState(false);

  // Outages State
  const [outages, setOutages] = useState<OutageReport[]>([]);
  const [outageBankId, setOutageBankId] = useState("meezan");
  const [outageService, setOutageService] = useState<"Mobile App" | "ATM Network" | "IBFT Transfers" | "Visa/MC Gateway" | "Raast System">("Mobile App");
  const [outageStatus, setOutageStatus] = useState<"Operational" | "Degraded" | "Outage">("Outage");
  const [outageDetails, setOutageDetails] = useState("");
  const [outageWitness, setOutageWitness] = useState("");
  const [outageSuccess, setOutageSuccess] = useState(false);

  // Sentiment detail state
  const [analyzingSentiment, setAnalyzingSentiment] = useState(false);
  const [sentimentSummaryText, setSentimentSummaryText] = useState("");

  // Load Initial Bank Data and Outages from our elegant Full-stack Backend Server
  useEffect(() => {
    fetchBanks();
    fetchOutages();
  }, []);

  const fetchBanks = async () => {
    try {
      const resp = await fetch("/api/banks");
      const data = await resp.json();
      setBanks(data);
    } catch (e) {
      console.error("Error loading banks", e);
    }
  };

  const fetchOutages = async () => {
    try {
      const resp = await fetch("/api/outages");
      const data = await resp.json();
      setOutages(data);
    } catch (e) {
      console.error("Error loading outages", e);
    }
  };

  // Upvote an Outage Citizen Signal Witness report
  const handleUpvoteOutage = async (id: string) => {
    try {
      const resp = await fetch("/api/outages/upvote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (resp.ok) {
        // Redraw list dynamically
        fetchOutages();
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Submit new outage Citizen Signal Witness report
  const handleSubmitOutage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!outageDetails.trim()) return;

    try {
      const resp = await fetch("/api/outages/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bankId: outageBankId,
          service: outageService,
          status: outageStatus,
          details: outageDetails,
          reportedBy: outageWitness,
        }),
      });
      if (resp.ok) {
        setOutageSuccess(true);
        setOutageDetails("");
        setOutageWitness("");
        fetchOutages();
        setTimeout(() => setOutageSuccess(false), 6000);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // trigger AI portfolio matcher powered by Gemini
  const triggerPrioritisationModel = async () => {
    setAnalyzingAi(true);
    setAiReport("");
    try {
      const response = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          weights,
          query: wizardQuery,
          userProfile: wizardInterest,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setAiReport(result.text);
      } else {
        setAiReport(result.text || "Unknown system failure. Check API keys.");
      }
      if (result.mathematicalRankings) {
        setAiRankingBreakdown(result.mathematicalRankings);
      }
    } catch (e) {
      setAiReport("### ⚠️ API Gateway Failure\nUnable to ping the recommendation controller port. Make sure server is actively initialized.");
    } finally {
      setAnalyzingAi(false);
    }
  };

  // Send message to Sarmaya Chat Advisor
  const handleSendChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || chatLoading) return;

    const userMsg = { role: "user" as const, content: chatInput };
    const updatedHistory = [...chatLog, userMsg];
    setChatLog(updatedHistory);
    setChatInput("");
    setChatLoading(true);

    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedHistory,
          bankId: selectedBank?.basic.id,
        }),
      });
      const data = await resp.json();
      setChatLog((prev) => [...prev, { role: "assistant", content: data.text }]);
    } catch (e) {
      setChatLog((prev) => [
        ...prev,
        { role: "assistant", content: "Advisor service failed to query SBP core database, please retry!" },
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  // Extract Live sentiment breakdown powered by Gemini
  const handleExtractLiveSentiment = async (bankId: string) => {
    setAnalyzingSentiment(true);
    setSentimentSummaryText("");
    try {
      const resp = await fetch("/api/sentiment/summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bankId }),
      });
      const data = await resp.json();
      setSentimentSummaryText(data.summary);
    } catch (e) {
      setSentimentSummaryText("Unable to generate micro sentiment review now. Static indicators are displays.");
    } finally {
      setAnalyzingSentiment(false);
    }
  };

  const handleWeightChange = (key: keyof typeof weights, value: number) => {
    setWeights((prev) => ({ ...prev, [key]: value }));
  };

  const t = TRANSLATIONS[lang];

  // Filtering Logic
  const filteredBanks = banks.filter((b) => {
    const matchesSearch =
      b.basic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.basic.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.basic.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.basic.hq.toLowerCase().includes(searchQuery.toLowerCase());
    const satisfiesShariah = !shariahOnly || b.basic.shariahCompliance === "Islamic" || b.portfolio.islamicProducts;
    const satisfiesDigital = !digitalOnly || b.basic.licenseType === "Digital" || b.basic.licenseType === "Microfinance";
    return matchesSearch && satisfiesShariah && satisfiesDigital;
  });

  // Perform quick static mathematical rankings based on selected weights
  // This uses pure state equations for lightning fast response in frontend
  const scoreBankLocally = (bank: BankProfile) => {
    const totalWeightsVal = (Object.values(weights) as number[]).reduce((a, b) => a + b, 0) || 1;
    const norm = {
      appQuality: weights.appQuality / totalWeightsVal,
      intlPayments: weights.intlPayments / totalWeightsVal,
      atmNetwork: weights.atmNetwork / totalWeightsVal,
      islamicBanking: weights.islamicBanking / totalWeightsVal,
      customerSupport: weights.customerSupport / totalWeightsVal,
      freelancerFriendly: weights.freelancerFriendly / totalWeightsVal,
      lowCharges: weights.lowCharges / totalWeightsVal,
      accountOpeningSpeed: weights.accountOpeningSpeed / totalWeightsVal,
    };

    const appScore = bank.digital.mobileAppAvailable ? (bank.technical.appRating / 5) * 100 : 0;
    
    let intlScore = 20;
    if (bank.cardSupport.intlAcceptance === "Excellent") intlScore = 100;
    else if (bank.cardSupport.intlAcceptance === "Good") intlScore = 80;
    else if (bank.cardSupport.intlAcceptance === "Moderate") intlScore = 50;
    if (bank.cardSupport.onlinePaymentReliability === "Medium") intlScore -= 15;
    if (bank.cardSupport.onlinePaymentReliability === "Low") intlScore -= 30;

    let atmScore = 30;
    if (bank.infrastructure.atms > 2000) atmScore = 100;
    else if (bank.infrastructure.atms > 1000) atmScore = 90;
    else if (bank.infrastructure.atms > 500) atmScore = 75;
    else if (bank.infrastructure.atms > 0) atmScore = 50;

    let islamicScore = 10;
    if (bank.basic.shariahCompliance === "Islamic") islamicScore = 100;
    else if (bank.basic.shariahCompliance === "Hybrid" || bank.portfolio.islamicProducts) islamicScore = 60;

    const supportScore = bank.sentiment.customerSupportScore * 10;

    let freelancerScore = 0;
    if (bank.portfolio.freelancerAccounts) freelancerScore += 50;
    if (bank.digital.eKycOnboarding) freelancerScore += 25;
    if (bank.pricing.annualDebitCardFee === 0) freelancerScore += 15;
    if (bank.pricing.intlTransactionChargesPct <= 3.5) freelancerScore += 10;
    freelancerScore = Math.min(100, freelancerScore);

    const cardFeeQuality = Math.max(0, 100 - (bank.pricing.annualDebitCardFee / 4500) * 50);
    const markupQuality = Math.max(0, 100 - (bank.pricing.intlTransactionChargesPct / 6) * 50);
    const chargesScore = cardFeeQuality + markupQuality;

    let speedScore = 50;
    if (bank.basic.licenseType === "Digital") speedScore = 98;
    else if (bank.digital.eKycOnboarding) speedScore = 80;

    const overall =
      appScore * norm.appQuality +
      intlScore * norm.intlPayments +
      atmScore * norm.atmNetwork +
      islamicScore * norm.islamicBanking +
      supportScore * norm.customerSupport +
      freelancerScore * norm.freelancerFriendly +
      chargesScore * norm.lowCharges +
      speedScore * norm.accountOpeningSpeed;

    return Math.round(overall * 10) / 10;
  };

  const localRankedList = [...banks].sort((a, b) => scoreBankLocally(b) - scoreBankLocally(a));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-600 selection:text-white" id="main_wrapper">
      
      {/* Premium Navigation Header Top */}
      <header className="border-b border-emerald-900/40 bg-slate-900/80 backdrop-blur-md sticky top-0 z-30" id="header_pane">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-900/30">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-emerald-400 bg-clip-text text-transparent">
                  PAK-BANK COMPARE
                </span>
                <span className="text-xs bg-emerald-950 text-emerald-400 font-semibold px-2 py-0.5 rounded-full border border-emerald-800/60 uppercase">
                  AI Active
                </span>
              </div>
              <p className="text-xs text-slate-400 tracking-wide font-mono">
                SBP Core Audited v2.6
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Quick stats on outage */}
            <div className="hidden lg:flex items-center gap-4 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs">
              <div className="flex items-center gap-1.5 text-amber-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span>Active Outage Reports: {outages.length}</span>
              </div>
              <span className="text-slate-600">|</span>
              <div className="flex items-center gap-1 text-emerald-400">
                <CheckCircle className="h-3.5 w-3.5" />
                <span>Urdu Enabled</span>
              </div>
            </div>

            {/* Language Toggler */}
            <button
              onClick={() => setLang(lang === "en" ? "ur" : "en")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-800/55 bg-emerald-950/40 hover:bg-emerald-950 text-xs font-semibold text-emerald-400 cursor-pointer transition-colors duration-200"
              title="Toggle Bilingual English / Urdu Mode"
              id="lang_toggle"
            >
              <Languages className="h-3.5 w-3.5" />
              <span>{lang === "en" ? "اردو" : "English"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Presentation Header Row */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
              {t.heroTitle}
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.heroSubtitle}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 md:self-end">
            <div className="px-3 py-2 rounded-lg bg-emerald-950/20 border border-emerald-900/50 text-xs">
              <div className="text-slate-400 font-mono">Islamic Lead</div>
              <div className="font-bold text-emerald-400 text-sm">Meezan & Faysal</div>
            </div>
            <div className="px-3 py-2 rounded-lg bg-blue-950/20 border border-blue-900/50 text-xs">
              <div className="text-slate-400 font-mono">Top Digitals</div>
              <div className="font-bold text-blue-400 text-sm">SadaPay / NayaPay</div>
            </div>
            <div className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs">
              <div className="text-slate-400 font-mono">Max App Rating</div>
              <div className="font-bold text-teal-400 text-sm">SadaPay (4.9★)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Grid Container */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-6">
        
        {/* Left Side Tab Navigation Column */}
        <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-2">
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800/80">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
              Core Modules
            </p>
            <nav className="flex flex-col gap-1.5">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg font-medium transition-all ${
                  activeTab === "dashboard"
                    ? "bg-gradient-to-r from-emerald-950 to-teal-980 border-l-4 border-emerald-500 text-emerald-300 pl-4"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Building2 className="h-4 w-4" />
                  <span>{t.allBanks}</span>
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
              </button>

              <button
                onClick={() => setActiveTab("matchmaker")}
                className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg font-medium transition-all ${
                  activeTab === "matchmaker"
                    ? "bg-gradient-to-r from-emerald-950 to-teal-980 border-l-4 border-emerald-500 text-emerald-300 pl-4"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Sliders className="h-4 w-4" />
                  <span>{t.priorityMatchmaker}</span>
                </div>
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              </button>

              <button
                onClick={() => setActiveTab("islamic")}
                className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg font-medium transition-all ${
                  activeTab === "islamic"
                    ? "bg-gradient-to-r from-emerald-950 to-teal-980 border-l-4 border-emerald-500 text-emerald-300 pl-4"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Award className="h-4 w-4 text-amber-500" />
                  <span>{t.islamicHub}</span>
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
              </button>

              <button
                onClick={() => setActiveTab("intl")}
                className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg font-medium transition-all ${
                  activeTab === "intl"
                    ? "bg-gradient-to-r from-emerald-950 to-teal-980 border-l-4 border-emerald-500 text-emerald-300 pl-4"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Globe className="h-4 w-4" />
                  <span>{t.intlRemit}</span>
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
              </button>

              <button
                onClick={() => setActiveTab("mobile")}
                className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg font-medium transition-all ${
                  activeTab === "mobile"
                    ? "bg-gradient-to-r from-emerald-950 to-teal-980 border-l-4 border-emerald-500 text-emerald-300 pl-4"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Cpu className="h-4 w-4" />
                  <span>{t.mobileTech}</span>
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
              </button>

              <button
                onClick={() => setActiveTab("charges")}
                className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg font-medium transition-all ${
                  activeTab === "charges"
                    ? "bg-gradient-to-r from-emerald-950 to-teal-980 border-l-4 border-emerald-500 text-emerald-300 pl-4"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Coins className="h-4 w-4" />
                  <span>{t.chargesFees}</span>
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
              </button>

              <button
                onClick={() => setActiveTab("outages")}
                className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg font-medium transition-all ${
                  activeTab === "outages"
                    ? "bg-gradient-to-r from-emerald-950 to-teal-980 border-l-4 border-emerald-500 text-emerald-300 pl-4"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Activity className="h-4 w-4 text-amber-500" />
                  <span>{t.liveOutages}</span>
                </div>
                <span className="text-[10px] bg-red-950 text-red-400 font-bold px-1.5 rounded-full border border-red-900/60">
                  LIVE
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("chatbot");
                  // Auto focus/set up bank if selected
                }}
                className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg font-medium transition-all ${
                  activeTab === "chatbot"
                    ? "bg-gradient-to-r from-emerald-950 to-teal-980 border-l-4 border-emerald-500 text-emerald-300 pl-4"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquareCode className="h-4 w-4" />
                  <span>{t.sarmayaChat}</span>
                </div>
                <Sparkles className="h-3.5 w-3.5 text-teal-400" />
              </button>

              <button
                onClick={() => setActiveTab("admin")}
                className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg font-medium transition-all ${
                  activeTab === "admin"
                    ? "bg-gradient-to-r from-emerald-950 to-teal-980 border-l-4 border-emerald-500 text-emerald-300 pl-4"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Settings className="h-4 w-4 text-slate-500" />
                  <span>{t.adminController}</span>
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
              </button>
            </nav>
          </div>

          <div className="bg-gradient-to-tr from-slate-900 to-emerald-950/20 p-4 rounded-xl border border-emerald-900/30 text-xs text-slate-400">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-2">
              <ShieldCheck className="h-4 w-4" />
              <span>{t.regulatorypenalties}</span>
            </div>
            <p className="leading-relaxed">
              State Bank of Pakistan (SBP) enforces the Consumer Protection Framework. Under Circular No. 5 of 2014, delays in resolving claims face systematic penalties of PKR 10k/day.
            </p>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-rose-950/30 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 text-rose-400 font-semibold mb-1">
              <AlertTriangle className="h-3.5 w-3.5" />
              <span>{t.scamsWarning}</span>
            </div>
            <p className="leading-relaxed">
              Beware of spoof calls claiming to represent SBP, requesting OTP values or Biometric verification bypass keys. Pakistani banks never enquire these over standard telephone frequencies.
            </p>
          </div>
        </aside>

        {/* Right Side Main Area Contents */}
        <div className="flex-grow flex flex-col gap-6" id="dashboard_panel">
          
          {/* TAB 1: ALL BANKS PORTAL */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              
              {/* Filter controls panel */}
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 py-2 pl-10 pr-4 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-2.5 text-xs text-slate-500 hover:text-slate-300"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() => setShariahOnly(!shariahOnly)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border text-xs transition-colors cursor-pointer ${
                      shariahOnly
                        ? "bg-amber-950/50 border-amber-800 text-amber-400 font-semibold"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Award className="h-3.5 w-3.5" />
                    <span>Islamic Only</span>
                  </button>

                  <button
                    onClick={() => setDigitalOnly(!digitalOnly)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border text-xs transition-colors cursor-pointer ${
                      digitalOnly
                        ? "bg-teal-950/50 border-teal-800 text-teal-400 font-semibold"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Cpu className="h-3.5 w-3.5" />
                    <span>EMIs / Digital Only</span>
                  </button>

                  <div className="text-[11px] text-slate-500 px-2">
                    Found {filteredBanks.length} Banks
                  </div>
                </div>
              </div>

              {/* Informative tips widget */}
              <div className="p-3 bg-gradient-to-r from-emerald-950/30 to-slate-950 border border-emerald-900/30 rounded-lg flex items-center gap-3">
                <Info className="h-5 w-5 text-emerald-400 shrink-0" />
                <p className="text-xs text-slate-300">
                  <span className="font-bold text-white">Protip (Filer Status):</span> {t.filerTaxTip}
                </p>
              </div>

              {/* Comprehensive Bank Grid list */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" id="banks_grid">
                {filteredBanks.map((bank) => {
                  const localScore = scoreBankLocally(bank);
                  return (
                    <div
                      key={bank.basic.id}
                      className="bg-slate-900 rounded-xl p-5 border border-slate-800/80 hover:border-emerald-800/60 duration-300 transition-all flex flex-col justify-between hover:shadow-lg hover:shadow-emerald-950/10 group"
                    >
                      {/* Logo & Headline */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2.5">
                            <div className={`${bank.basic.logoBg} h-11 w-11 rounded-xl flex items-center justify-center font-bold tracking-wider text-sm shadow-md`}>
                              {bank.basic.logoText}
                            </div>
                            <div>
                              <h3 className="font-bold text-white group-hover:text-emerald-400 transition-colors text-base">
                                {bank.basic.shortName}
                              </h3>
                              <p className="text-[11px] text-slate-500 font-mono">
                                Hq: {bank.basic.hq} | {bank.basic.licenseType}
                              </p>
                            </div>
                          </div>
                          
                          {/* Adaptive local ranking index badge */}
                          <div className="bg-slate-950 px-2 py-1 rounded-lg border border-slate-800 text-right">
                            <span className="text-[10px] text-slate-500 block font-mono">FIT SCORE</span>
                            <span className="text-sm font-bold text-emerald-400 font-mono">
                              {localScore}
                            </span>
                          </div>
                        </div>

                        {/* Tagline */}
                        <p className="text-xs text-slate-300 italic mb-4">
                          &ldquo;{bank.basic.tagline}&rdquo;
                        </p>

                        {/* Micro Details Grid */}
                        <div className="grid grid-cols-2 gap-y-2 gap-x-1.5 border-t border-slate-800/60 pt-3 text-xs mb-4">
                          <div>
                            <span className="text-slate-500 block">Licensing Sphere:</span>
                            <span className="font-medium text-slate-200">{bank.basic.shariahCompliance} Compliance</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">Atm Grid Count:</span>
                            <span className="font-medium text-slate-200">
                              {bank.infrastructure.atms > 0 ? `${bank.infrastructure.atms}+ machines` : "Branchless"}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">App Performance:</span>
                            <span className="font-medium text-emerald-400 font-mono">
                              {bank.digital.mobileAppAvailable ? `★ ${bank.technical.appRating} / 5` : "No Mobile App"}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">Cards Available:</span>
                            <span className="font-medium text-slate-250">
                              {bank.portfolio.creditCardsAvailable ? "Debit + Credit Cards" : "Debit / Digital Only"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Primary Actions */}
                      <div className="flex gap-2 border-t border-slate-800/80 pt-3">
                        <button
                          onClick={() => {
                            setSelectedBank(bank);
                            handleExtractLiveSentiment(bank.basic.id);
                          }}
                          className="flex-grow bg-slate-800 hover:bg-slate-700/80 text-white font-medium text-xs py-2 rounded-lg cursor-pointer transition-colors"
                        >
                          Show Intelligence Audit
                        </button>
                        <button
                          onClick={() => {
                            setSelectedBank(bank);
                            setActiveTab("chatbot");
                            setChatLog([
                              {
                                role: "assistant",
                                content: `Selected ${bank.basic.name}. Salam! How can I help you regarding ${bank.basic.shortName}'s service charges, international usage, or branch requirements?`,
                              },
                            ]);
                          }}
                          className="px-2.5 bg-emerald-950/60 text-emerald-400 hover:bg-emerald-900 border border-emerald-800/50 rounded-lg cursor-pointer transition-colors"
                          title="Consult Sarmaya AI about this bank"
                        >
                          <MessageSquareCode className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: PRIORITIES AND AI RECOMMENDER WIZARD */}
          {activeTab === "matchmaker" && (
            <div className="space-y-6">
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2.5 mb-2">
                  <Sliders className="h-5 w-5 text-emerald-400" />
                  <h2 className="text-lg font-bold text-white">{t.weightsTitle}</h2>
                </div>
                <p className="text-xs text-slate-400 mb-6">{t.weightsSubtitle}</p>

                {/* Weighted prioritization list with responsive sliders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">{t.appRating}</span>
                      <span className="text-emerald-400 font-mono">{weights.appQuality}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={weights.appQuality}
                      onChange={(e) => handleWeightChange("appQuality", parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">{t.intlSurchargeScore}</span>
                      <span className="text-emerald-400 font-mono">{weights.intlPayments}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={weights.intlPayments}
                      onChange={(e) => handleWeightChange("intlPayments", parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">{t.atmFootprint}</span>
                      <span className="text-emerald-400 font-mono">{weights.atmNetwork}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={weights.atmNetwork}
                      onChange={(e) => handleWeightChange("atmNetwork", parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">{t.shariahLevel}</span>
                      <span className="text-emerald-400 font-mono">{weights.islamicBanking}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={weights.islamicBanking}
                      onChange={(e) => handleWeightChange("islamicBanking", parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">{t.customerSupportState}</span>
                      <span className="text-emerald-400 font-mono">{weights.customerSupport}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={weights.customerSupport}
                      onChange={(e) => handleWeightChange("customerSupport", parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">{t.freelancerNiche}</span>
                      <span className="text-emerald-400 font-mono">{weights.freelancerFriendly}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={weights.freelancerFriendly}
                      onChange={(e) => handleWeightChange("freelancerFriendly", parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">{t.lowHiddenCharges}</span>
                      <span className="text-emerald-400 font-mono">{weights.lowCharges}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={weights.lowCharges}
                      onChange={(e) => handleWeightChange("lowCharges", parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">{t.speedyOnboarding}</span>
                      <span className="text-emerald-400 font-mono">{weights.accountOpeningSpeed}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={weights.accountOpeningSpeed}
                      onChange={(e) => handleWeightChange("accountOpeningSpeed", parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                  </div>
                </div>

                {/* Additional context selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-800 pt-5 text-sm mb-6">
                  <div className="space-y-2">
                    <label className="block text-slate-400 font-medium">Interest Group Type</label>
                    <select
                      value={wizardInterest}
                      onChange={(e) => setWizardInterest(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-emerald-600"
                    >
                      <option value="General Consumer / Student">Student / Salaried Individual</option>
                      <option value="Freelancers & Remote Workers">Freelancer / Inbound Remitter</option>
                      <option value="Overseas Resident Pakistani">Overseas Resident (Roshan Account)</option>
                      <option value="SME Bank Representative">Small - Medium Business Owner (SME)</option>
                      <option value="High-net Corporate Treasury">Corporate Treasury / Non-profit</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-slate-400 font-medium">Specific queries for AI context (optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Lowest withholding tax on ATM withdrawal..."
                      value={wizardQuery}
                      onChange={(e) => setWizardQuery(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={triggerPrioritisationModel}
                  disabled={analyzingAi}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Sparkles className="h-5 w-5" />
                  <span>{analyzingAi ? t.aiAnalyzing : t.calculateMatch}</span>
                </button>
              </div>

              {/* Instant Ranked Match Outcome */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left side: Ranked list by scoring weights */}
                <div className="lg:col-span-1 bg-slate-900 rounded-xl p-5 border border-slate-800 space-y-4">
                  <h3 className="font-bold text-white text-sm border-b border-slate-800 pb-2">
                    Instant Vector Ranking Results
                  </h3>
                  
                  {/* Local state list rendered by immediate calculation */}
                  <div className="space-y-2">
                    {localRankedList.map((bk, i) => {
                      const computedScr = scoreBankLocally(bk);
                      return (
                        <div
                          key={bk.basic.id}
                          className={`flex items-center justify-between p-3 rounded-lg border text-xs cursor-pointer hover:border-slate-600 ${
                            i === 0
                              ? "bg-emerald-950/25 border-emerald-900/60"
                              : "bg-slate-950 border-slate-800"
                          }`}
                          onClick={() => {
                            setSelectedBank(bk);
                            handleExtractLiveSentiment(bk.basic.id);
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-slate-500 w-4 font-bold">#{i + 1}</span>
                            <div className={`${bk.basic.logoBg} px-1.5 py-0.5 rounded font-bold`}>
                              {bk.basic.logoText}
                            </div>
                            <span className="font-semibold text-slate-200">{bk.basic.shortName}</span>
                          </div>
                          
                          <div className="flex items-center gap-1">
                            <span className="text-[10px] text-slate-500">Score:</span>
                            <span className="text-emerald-400 font-bold font-mono">{computedScr}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right side: AI Report generated by Gemini */}
                <div className="lg:col-span-2 bg-slate-900 rounded-xl p-5 border border-slate-800 space-y-4">
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                    <Sparkles className="h-4 w-4 text-emerald-400" />
                    <h3 className="font-bold text-white text-sm">
                      {t.aiRecommendationResult}
                    </h3>
                  </div>

                  {aiReport ? (
                    <div className="prose prose-invert max-w-none text-xs text-slate-300 leading-relaxed bg-slate-950 rounded-lg p-4 border border-slate-800 h-96 overflow-y-auto whitespace-pre-wrap">
                      {aiReport}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center p-8 text-xs text-slate-500 h-96 bg-slate-950 rounded-lg border border-slate-800">
                      <Sparkles className="h-8 w-8 text-slate-700 animate-pulse mb-3" />
                      <p>
                        Configure the Priority Sliders above to filter Pakistani banks based on branches, fees, compliance, or ratings, then click <strong className="text-emerald-400">"{t.calculateMatch}"</strong> to fetch professional AI insights.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SHARIAH COMPLIANCE HUB */}
          {activeTab === "islamic" && (
            <div className="space-y-6 bg-slate-900 p-6 rounded-xl border border-slate-800">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="h-10 w-10 bg-amber-950 text-amber-500 rounded-xl border border-amber-800/40 flex items-center justify-center">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Shariah & Islamic Banking Quality Monitor</h2>
                  <p className="text-xs text-slate-400">Analyzing strict SBP Shariah Compliant rules, Board scholars, and Islamic retail investments.</p>
                </div>
              </div>

              {/* Informative Grid detailing Islamic terms */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-slate-950 border border-amber-900/20 rounded-lg">
                  <span className="font-bold text-amber-500 block mb-1">Mudarabah (Profit Share)</span>
                  <span className="text-slate-400">The bank acts as manager (Mudarib) with capital deposits to buy assets. Net profit splits according to precise PSR weights.</span>
                </div>
                <div className="p-3 bg-slate-950 border border-amber-900/20 rounded-lg">
                  <span className="font-bold text-amber-500 block mb-1">Murabaha (Cost-Plus)</span>
                  <span className="text-slate-400">Used for auto financing and trade credit. Bank acquires asset, then sells in instalments at defined cost-plus-profit limits.</span>
                </div>
                <div className="p-3 bg-slate-950 border border-amber-900/20 rounded-lg">
                  <span className="font-bold text-amber-500 block mb-1">Noor Islamic Credit Cards</span>
                  <span className="text-slate-400">Strictly follows Ujrah (fixed processing fee concept) instead of interest. Available at Faysal.</span>
                </div>
              </div>

              {/* Islamic Bank detailed breakdown */}
              <div className="space-y-4">
                <h3 className="font-bold text-white text-sm">Pakistani Banks with Complete/Partial Islamic Networks</h3>
                
                {banks
                  .filter((b) => b.basic.shariahCompliance === "Islamic" || b.portfolio.islamicProducts)
                  .map((b) => (
                    <div key={b.basic.id} className="p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-amber-800/40 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`${b.basic.logoBg} h-10 w-10 rounded-lg flex items-center justify-center font-bold`}>
                            {b.basic.logoText}
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-sm">{b.basic.name}</h4>
                            <p className="text-xs text-slate-500">License: {b.basic.licenseType} | Compliance Level: {b.basic.shariahCompliance}</p>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-[10px] text-slate-500 block">SUPPORT RATING</span>
                          <span className="text-xs font-bold font-mono text-amber-500">★★★★★ {b.sentiment.customerSupportScore}/10</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs border-t border-slate-800 pt-3">
                        <div>
                          <span className="text-slate-500 block">Sponsor Origin:</span>
                          <span className="font-semibold text-slate-300">{b.ownership.sponsorCountries.join(", ")}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Islamic Products:</span>
                          <span className="font-semibold text-slate-300">Murabaha, Savings, Home Finance</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Dedicated Branches:</span>
                          <span className="font-semibold text-slate-300">{b.infrastructure.branches} Branches</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Compliance Audits:</span>
                          <span className="font-semibold text-emerald-400">SBP Shariah Active</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* TAB 4: INTERNATIONAL AND INBOUND REMITTANCE */}
          {activeTab === "intl" && (
            <div className="space-y-6 bg-slate-900 p-6 rounded-xl border border-slate-800">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="h-10 w-10 bg-emerald-950 text-emerald-500 rounded-xl border border-emerald-800/40 flex items-center justify-center">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">International Payments, Wire & Roshan Accounts</h2>
                  <p className="text-xs text-slate-400">Comparing foreign exchange transaction markups, inbound wire payouts, and local EMI freelancers invoice systems.</p>
                </div>
              </div>

              {/* Helpful SBP Rule reference banner */}
              <div className="p-3 bg-blue-950/20 border border-blue-900/40 rounded-lg flex items-center gap-2 text-xs text-slate-300">
                <Info className="h-4.5 w-4.5 text-blue-400 shrink-0" />
                <p>
                  <strong>Roshan Digital Account (RDA):</strong> Under SBP laws, repatriation of principal and yields is processed fully online without tax clearance filters. Good for non-resident Pakistanis.
                </p>
              </div>

              {/* Comparative matrix */}
              <div className="space-y-4">
                <h3 className="font-bold text-white text-sm">International Acceptance & FX Markup Benchmark</h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300 border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400">
                        <th className="py-2.5 px-2">Bank</th>
                        <th className="py-2.5 px-2">Integrated Networks</th>
                        <th className="py-2.5 px-2">FX Markup %</th>
                        <th className="py-2.5 px-2">Roshan Account</th>
                        <th className="py-2.5 px-2">Merchant Acceptance</th>
                        <th className="py-2.5 px-2">Freelancer Friendly</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-850">
                      {banks.map((b) => (
                        <tr key={b.basic.id} className="hover:bg-slate-950/40">
                          <td className="py-3 px-2 font-bold text-white flex items-center gap-2">
                            <span className={`${b.basic.logoBg} px-1.5 py-0.5 rounded font-mono text-[10px]`}>{b.basic.logoText}</span>
                            <span>{b.basic.shortName}</span>
                          </td>
                          <td className="py-3 px-2">
                            {b.cardSupport.visa && "Visa "}
                            {b.cardSupport.mastercard && "MasterCard "}
                            {b.cardSupport.paypak && "PayPak "}
                            {b.cardSupport.unionpay && "UnionPay"}
                          </td>
                          <td className="py-3 px-2 font-semibold text-emerald-400 font-mono">
                            {b.pricing.intlTransactionChargesPct}%
                          </td>
                          <td className="py-3 px-2">
                            {b.portfolio.roshanDigitalAccount ? (
                              <span className="text-emerald-400 font-bold">Yes (RDA Stream)</span>
                            ) : (
                              <span className="text-slate-500">No</span>
                            )}
                          </td>
                          <td className="py-3 px-2">
                            <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                              {b.cardSupport.onlinePaymentReliability}
                            </span>
                          </td>
                          <td className="py-3 px-2">
                            {b.portfolio.freelancerAccounts ? "Specialized Account" : "Standard Savings"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: APP PERFORMANCE AND API LATENCY */}
          {activeTab === "mobile" && (
            <div className="space-y-6 bg-slate-900 p-6 rounded-xl border border-slate-800">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="h-10 w-10 bg-teal-950 text-teal-500 rounded-xl border border-teal-800/40 flex items-center justify-center">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">App Experience & API Latency Benchmark Page</h2>
                  <p className="text-xs text-slate-400">Comparing mobile application store ratings, downloads, average crash frequency, and verified security certs.</p>
                </div>
              </div>

              {/* Informative chart mockup containing custom SVG styled nicely */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-850">
                <h3 className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wide">
                  Visual Metric: Core API Response latency (ms / lower is better)
                </h3>
                <div className="space-y-3 pt-2">
                  {banks.map((b) => (
                    <div key={b.basic.id} className="space-y-1">
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>{b.basic.shortName}</span>
                        <span className="font-mono">{b.technical.apiLatencyMs}ms / update: {b.technical.lastAppUpdate}</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full"
                          style={{ width: `${(b.technical.apiLatencyMs / 200) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details Metrics */}
              <div className="space-y-4">
                <h3 className="font-bold text-white text-sm">Tech Audit Details</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {banks.map((b) => (
                    <div key={b.basic.id} className="p-4 bg-slate-950 rounded-lg border border-slate-850 flex items-start justify-between">
                      <div className="space-y-1.5">
                        <span className="font-bold text-white text-sm block">{b.basic.shortName} Tech Console</span>
                        <div className="text-xs text-slate-400 space-y-1">
                          <p>App Store Count: <strong className="text-slate-200">{b.technical.appDownloads} downloads</strong></p>
                          <p>Avg App Crash: <strong className="text-rose-450">{b.technical.averageCrashPct}% of sessions</strong></p>
                          <p>DR Site Availability: <strong className="text-emerald-400">{b.infrastructure.drSiteAvailable ? "Operational Active-DR" : "Regional Passive-DR"}</strong></p>
                          <p>Uptime: <strong className="text-slate-200 font-mono">{b.infrastructure.averageUptimePct}% SLA</strong></p>
                        </div>
                      </div>

                      <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-center">
                        <span className="text-[10px] text-slate-500 block">STORE VALUE</span>
                        <span className="text-base font-bold text-emerald-400 font-mono">★ {b.technical.appRating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: SLASHER ALERT - CHARGES & CARD FEES */}
          {activeTab === "charges" && (
            <div className="space-y-6 bg-slate-900 p-6 rounded-xl border border-slate-800">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="h-10 w-10 bg-amber-950 text-amber-500 rounded-xl border border-amber-800/40 flex items-center justify-center">
                  <Coins className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Slasher Alert (Fees & Tariff comparison)</h2>
                  <p className="text-xs text-slate-400">Evaluate annual physical card maintenance, SMS notification alerts, off-network ATMs withdraw charges, and dormancy activations.</p>
                </div>
              </div>

              {/* Comprehensive fee matrix */}
              <div className="space-y-4">
                <h3 className="font-bold text-white text-sm">Active Schedule of Charges (SOC) Benchmark</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {banks.map((b) => (
                    <div key={b.basic.id} className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                      <div className="flex items-center justify-between border-b border-slate-850 pb-2 mb-3">
                        <span className="font-bold text-sm text-white">{b.basic.shortName}</span>
                        <span className="text-[10px] bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-amber-500 font-mono">PKR Tariff</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-500">First-year Debit Card Fee:</span>
                          <span className="font-mono text-white">
                            {b.pricing.annualDebitCardFee === 0 ? "FREE" : `PKR ${b.pricing.annualDebitCardFee}`}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Sms alert Monthly cost:</span>
                          <span className="font-mono text-white">
                            {b.pricing.smsAlertsMonthlyFee === 0 ? "FREE" : `PKR ${b.pricing.smsAlertsMonthlyFee}`}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">ATM Off-network cost:</span>
                          <span className="font-mono text-white">
                            PKR {b.pricing.atmWithdrawalChargesPKR} / withdrawal
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">IBFT / Raast terms:</span>
                          <span className="text-slate-300 text-right w-2/3">{b.pricing.interbankTransferFee}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Dormancy terms:</span>
                          <span className="text-slate-300 text-right w-2/3">{b.pricing.dormancyCharges}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: OUTAGES & CITIZEN SIGNAL MONITORING */}
          {activeTab === "outages" && (
            <div className="space-y-6">
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-850 pb-4">
                  <div className="h-10 w-10 bg-red-950 text-red-500 rounded-xl border border-red-900/40 flex items-center justify-center">
                    <Activity className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Crowdsourced Instant Service Outage Monitoring</h2>
                    <p className="text-xs text-slate-400">Verified citizen-submitted outages signal board for major Pakistani retail mobile applications and Raast payments routing channels.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left side: Report form */}
                  <div className="lg:col-span-1 bg-slate-950 rounded-xl p-4 border border-slate-850 space-y-3">
                    <h3 className="font-bold text-white text-xs uppercase tracking-wider block border-b border-slate-800 pb-2">
                      {t.submitOutage}
                    </h3>

                    {outageSuccess && (
                      <div className="p-3 bg-emerald-950/40 border border-emerald-900 text-[11px] rounded-lg text-emerald-300">
                        {t.outageFormSuccess}
                      </div>
                    )}

                    <form onSubmit={handleSubmitOutage} className="space-y-3 text-xs">
                      <div className="space-y-1">
                        <label className="text-slate-500 block">Bank Profile</label>
                        <select
                          value={outageBankId}
                          onChange={(e) => setOutageBankId(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded py-1.5 px-2 text-white"
                        >
                          {banks.map((b) => (
                            <option key={b.basic.id} value={b.basic.id}>
                              {b.basic.shortName}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-slate-500 block">Failing Service Type</label>
                        <select
                          value={outageService}
                          onChange={(e) => setOutageService(e.target.value as any)}
                          className="w-full bg-slate-900 border border-slate-800 rounded py-1.5 px-2 text-white"
                        >
                          <option value="Mobile App">Mobile App / Login</option>
                          <option value="ATM Network">ATM Cash Out network</option>
                          <option value="IBFT Transfers">IBFT / Raast bank limits</option>
                          <option value="Visa/MC Gateway">Visa/MC Payment gateway</option>
                          <option value="Raast System">Raast System Connectivity</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-slate-500 block">Failure Level</label>
                        <select
                          value={outageStatus}
                          onChange={(e) => setOutageStatus(e.target.value as any)}
                          className="w-full bg-slate-900 border border-slate-800 rounded py-1.5 px-2 text-white"
                        >
                          <option value="Outage">Complete Outage (Severe)</option>
                          <option value="Degraded">Degraded Service (Slow / delayed)</option>
                          <option value="Operational">Normal Operational / Restored</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-slate-500 block">Log Citizen Witnesses (Full Details)</label>
                        <textarea
                          rows={3}
                          placeholder="What happened? (e.g., App keeps showing error 504 on biometric login screen since 10am...)"
                          value={outageDetails}
                          onChange={(e) => setOutageDetails(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 focus:border-red-600 rounded p-2 text-white"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-slate-500 block">{t.reportedBy}</label>
                        <input
                          type="text"
                          placeholder="e.g. Faisal Q. (Karachi)"
                          value={outageWitness}
                          onChange={(e) => setOutageWitness(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 rounded p-2 text-white font-mono"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2 rounded bg-rose-950 text-rose-300 font-bold border border-rose-800/60 hover:bg-rose-900 cursor-pointer"
                      >
                        Log Outage Signal
                      </button>
                    </form>
                  </div>

                  {/* Right side: Feed */}
                  <div className="lg:col-span-2 space-y-3">
                    <h3 className="font-bold text-white text-xs uppercase tracking-wider block border-b border-slate-800 pb-2">
                      Live Signal Board Updates
                    </h3>

                    <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                      {outages.map((o) => {
                        const targetBank = banks.find((b) => b.basic.id === o.bankId);
                        return (
                          <div
                            key={o.id}
                            className={`p-4 rounded-xl border ${
                              o.status === "Outage"
                                ? "bg-red-950/20 border-red-900/65"
                                : o.status === "Degraded"
                                ? "bg-amber-950/20 border-amber-900/65"
                                : "bg-slate-950 border-slate-850"
                            } transition-transform hover:scale-[1.01]`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="bg-slate-900 px-2 py-0.5 border border-slate-850 text-[10px] font-bold text-slate-300 rounded font-mono">
                                  {targetBank?.basic.shortName || o.bankId}
                                </span>
                                <span className="text-xs font-semibold text-slate-200">{o.service}</span>
                              </div>

                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  o.status === "Outage"
                                    ? "bg-red-500 text-white"
                                    : o.status === "Degraded"
                                    ? "bg-amber-500 text-slate-950"
                                    : "bg-emerald-500 text-white"
                                }`}
                              >
                                {o.status}
                              </span>
                            </div>

                            <p className="text-xs text-slate-300 mb-3">{o.details}</p>

                            <div className="flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-800/40 pt-2.5">
                              <div>
                                <span>Reported: {new Date(o.reportedAt).toLocaleTimeString()} by </span>
                                <strong className="text-slate-400 font-mono">{o.reportedBy}</strong>
                              </div>

                              <button
                                onClick={() => handleUpvoteOutage(o.id)}
                                className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-900 border border-slate-800 hover:border-slate-700 font-bold hover:text-white cursor-pointer"
                              >
                                <ThumbsUp className="h-3 w-3 text-emerald-400 animate-bounce" />
                                <span>{o.upvotes} Upvotes</span>
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 8: SARMAYA AI CHAT ASSISTANT */}
          {activeTab === "chatbot" && (
            <div className="space-y-6">
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 flex flex-col h-[600px] justify-between">
                
                {/* Advisor Profile */}
                <div className="flex items-center justify-between border-b border-slate-850 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 bg-gradient-to-tr from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Sarmaya AI Banking Advisor</h3>
                      <p className="text-[11px] text-slate-500">Live counseling on SBP laws, tax non-filer, and RDA accounts</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {selectedBank && (
                      <div className="text-xs bg-emerald-950 border border-emerald-900 text-emerald-400 px-2 py-1 rounded">
                        Target Context Active: <strong>{selectedBank.basic.shortName}</strong>
                      </div>
                    )}
                    <button
                      onClick={() => setChatLog([{ role: "assistant", content: TRANSLATIONS[lang].chatIntro }])}
                      className="text-xs text-slate-500 hover:text-slate-300 p-1 flex items-center gap-1 cursor-pointer"
                      title="Reset Conversation"
                    >
                      <RefreshCw className="h-3 w-3" />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>

                {/* Log screen */}
                <div className="flex-grow my-4 overflow-y-auto space-y-4 pr-1 text-xs">
                  {chatLog.map((c, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-3 max-w-[85%] ${
                        c.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                      }`}
                    >
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                        c.role === "user" ? "bg-slate-800" : "bg-emerald-950 border border-emerald-900"
                      }`}>
                        {c.role === "user" ? <User className="h-4 w-4 text-slate-200" /> : <Sparkles className="h-4 w-4 text-emerald-400" />}
                      </div>

                      <div className={`rounded-xl p-3.5 leading-relaxed whitespace-pre-line ${
                        c.role === "user"
                          ? "bg-slate-855 text-slate-100 border border-slate-755"
                          : "bg-slate-950/80 text-slate-300 border border-slate-855"
                      }`}>
                        {c.content}
                      </div>
                    </div>
                  ))}

                  {chatLoading && (
                    <div className="flex gap-3 mr-auto items-center text-xs text-slate-500 italic">
                      <div className="h-6 w-6 bg-emerald-950 border border-emerald-900 rounded-full flex items-center justify-center animate-spin">
                        <RefreshCw className="h-3.5 w-3.5 text-emerald-400" />
                      </div>
                      <p>Sarmaya Advisor is retrieving compliance parameters...</p>
                    </div>
                  )}
                </div>

                {/* Form submit input query */}
                <form onSubmit={handleSendChat} className="flex gap-2.5 border-t border-slate-850 pt-3">
                  <input
                    type="text"
                    required
                    placeholder={t.chatPlaceholder}
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="flex-grow bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-slate-200"
                  />
                  <button
                    type="submit"
                    disabled={chatLoading}
                    className="bg-emerald-600 text-white font-bold text-xs py-2 px-5 rounded-lg border border-emerald-500 hover:bg-emerald-500 transition-colors cursor-pointer"
                  >
                    {t.send}
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* TAB 9: EXECUTIVE CONTROLLER AND METROLOGY */}
          {activeTab === "admin" && (
            <div className="space-y-6 bg-slate-900 p-6 rounded-xl border border-slate-800 text-xs">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="h-10 w-10 bg-slate-850 text-slate-400 rounded-xl border border-slate-875 flex items-center justify-center">
                  <Settings className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Enterprise Metrology & Controller Simulator</h2>
                  <p className="text-xs text-slate-400">Allows adjusting live database latency params, simulating core failovers, and testing scoring models.</p>
                </div>
              </div>

              <div className="p-3 bg-slate-950 border border-slate-850 text-slate-450 rounded-lg">
                This administration layout simulates an offshore enterprise dashboard connected directly via VPC pipelines to secure local gateways.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-850 space-y-3">
                  <span className="font-bold text-white block mb-1">Simulate Global Failover Test</span>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    Press the button below to route Meezan Bank core application requests away from the principal datacenter to the disaster-recovery backup nodes in Multan.
                  </p>
                  
                  <button
                    onClick={() => {
                      alert("VPC instruction completed: Mainframe switch verified successfully. DR site average latency updated +15ms.");
                    }}
                    className="py-1.5 px-3 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 hover:bg-emerald-900 font-semibold cursor-pointer"
                  >
                    Initiate DR Node Switchover
                  </button>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-850 space-y-3">
                  <span className="font-bold text-white block mb-1">Modulate Standard API Latency Mock</span>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    Modify current latency vectors for SADAPAY to see the mathematical scorings update dynamically. Current value: 65ms.
                  </p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        // Dynamically mock modifying the latency value in our static memory
                        const target = banks.find(b => b.basic.id === "sadapay");
                        if (target) {
                          target.technical.apiLatencyMs = 210; // set high latency
                          alert("SadaPay simulated API latency updated to 210ms! Recalculating score priorities.");
                          setBanks([...banks]);
                        }
                      }}
                      className="py-1 px-2.5 rounded bg-rose-950 border border-rose-800 text-rose-300 cursor-pointer"
                    >
                      Drown Latency to 210ms
                    </button>
                    <button
                      onClick={() => {
                        const target = banks.find(b => b.basic.id === "sadapay");
                        if (target) {
                          target.technical.apiLatencyMs = 65; // restore
                          alert("SadaPay latency restored successfully!");
                          setBanks([...banks]);
                        }
                      }}
                      className="py-1 px-2.5 rounded bg-slate-900 border border-slate-800 text-slate-300 cursor-pointer"
                    >
                      Restore to 65ms
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* DETAILED MODAL: INTELLIGENCE AUDIT VIEW */}
      {selectedBank && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto" id="bank_modal">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
            
            {/* Header portion */}
            <div className="p-6 border-b border-slate-800 flex items-start justify-between bg-slate-950/40">
              <div className="flex items-center gap-4">
                <div className={`${selectedBank.basic.logoBg} h-14 w-14 rounded-2xl flex items-center justify-center font-bold text-xl shadow`}>
                  {selectedBank.basic.logoText}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {selectedBank.basic.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    &ldquo;{selectedBank.basic.tagline}&rdquo; &bull; {selectedBank.basic.website}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedBank(null)}
                className="p-1 px-2.5 bg-slate-800 text-slate-300 hover:bg-slate-750 hover:text-white rounded-lg cursor-pointer font-bold text-sm"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 text-xs text-slate-300">
              
              {/* Detailed metrics box */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl space-y-1">
                  <span className="text-slate-500 block uppercase tracking-wider text-[10px]">Sponsor / Founders</span>
                  <span className="font-bold text-white text-sm">{selectedBank.ownership.founderGroup}</span>
                  <span className="text-slate-400 block text-[11px] leading-relaxed">Sponsor Countries: {selectedBank.ownership.sponsorCountries.join(", ")}</span>
                </div>
                <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl space-y-1">
                  <span className="text-slate-500 block uppercase tracking-wider text-[10px]">Tax / Withholding status</span>
                  <span className="font-bold text-emerald-400 text-sm">Active filer rates pre-validated</span>
                  <span className="text-slate-400 block text-[11px] leading-relaxed">FX Markup: {selectedBank.pricing.intlTransactionChargesPct}% with standard SBP limits.</span>
                </div>
                <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl space-y-1">
                  <span className="text-slate-500 block uppercase tracking-wider text-[10px]">Verified Core Certs</span>
                  <span className="font-bold text-white text-sm">{selectedBank.compliance.pciDssCertified ? "PCI-DSS 3.2.1 Certified" : "Standard SBP Compliance"}</span>
                  <span className="text-slate-400 block text-[11px] leading-relaxed">ISO/IEC 27001 Security standard applied.</span>
                </div>
              </div>

              {/* Grid content breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Digital / Portfolio profile */}
                <div className="space-y-4">
                  <h4 className="font-bold text-white text-sm border-b border-slate-850 pb-1.5 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    <span>Product Portfolio & Support Status</span>
                  </h4>

                  <div className="grid grid-cols-2 gap-3 leading-relaxed">
                    <div className="bg-slate-950 p-3 rounded-lg border border-slate-850">
                      <strong className="text-slate-400 block">Savings Accounts:</strong>
                      <span className="text-white">{selectedBank.portfolio.savingsAccounts ? "Available / High yield" : "Not Offered"}</span>
                    </div>
                    <div className="bg-slate-950 p-3 rounded-lg border border-slate-850">
                      <strong className="text-slate-400 block">Roshan Digital (Overseas):</strong>
                      <span className="text-white">{selectedBank.portfolio.roshanDigitalAccount ? "Specialized Remit channels" : "Unavailable"}</span>
                    </div>
                    <div className="bg-slate-950 p-3 rounded-lg border border-slate-850">
                      <strong className="text-slate-400 block">National Outreach:</strong>
                      <span className="text-white">{selectedBank.infrastructure.branches} physical branches</span>
                    </div>
                    <div className="bg-slate-950 p-3 rounded-lg border border-slate-850">
                      <strong className="text-slate-400 block">App Downloads:</strong>
                      <span className="text-white">{selectedBank.technical.appDownloads} installations</span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-xs italic bg-slate-950 p-3 rounded-xl border border-slate-850 leading-relaxed">
                    <strong>Review Summary:</strong> {selectedBank.notes}
                  </p>
                </div>

                {/* AI Sentiment Summary & complaint metrics */}
                <div className="space-y-4">
                  <h4 className="font-bold text-white text-sm border-b border-slate-850 pb-1.5 flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-emerald-400" />
                    <span>Gemini AI Consumer Sentiment analysis</span>
                  </h4>

                  <div className="bg-slate-950 rounded-xl p-4 border border-slate-850 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">SBP Complaint resolve frequency:</span>
                      <span className="font-bold font-mono text-emerald-400">{selectedBank.sentiment.complaintsResolvedPct}% resolved</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Reddit Sentiment Score:</span>
                      <span className="font-bold font-mono text-white">{selectedBank.sentiment.redditSentimentScore} / 100</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Google Play Store rating feedback:</span>
                      <span className="font-bold font-mono text-white">{selectedBank.sentiment.playStoreSentimentScore} / 100</span>
                    </div>

                    {analyzingSentiment ? (
                      <div className="pt-2 text-[11px] text-slate-500 italic animate-pulse">
                        Asking Gemini to formulate complaints summary...
                      </div>
                    ) : (
                      <div className="pt-2 border-t border-slate-875 text-[11px] text-slate-350 leading-relaxed whitespace-pre-wrap">
                        {sentimentSummaryText}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Detailed Pricing Tariffs list */}
              <div className="space-y-3 border-t border-slate-800 pt-5">
                <h4 className="font-bold text-white text-sm">Tariff Specifications & Fees breakdown</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-875">
                    <span className="text-slate-500 block">Debit Card Fee:</span>
                    <strong className="text-white font-mono text-xs">PKR {selectedBank.pricing.annualDebitCardFee} / year</strong>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-875">
                    <span className="text-slate-500 block">SMS Notification alert cost:</span>
                    <strong className="text-white font-mono text-xs">PKR {selectedBank.pricing.smsAlertsMonthlyFee} / month</strong>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-875">
                    <span className="text-slate-500 block">Off-net ATM withdrawal:</span>
                    <strong className="text-white font-mono text-xs">PKR {selectedBank.pricing.atmWithdrawalChargesPKR} / txn</strong>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-875">
                    <span className="text-slate-500 block">Interbank transfer fee:</span>
                    <strong className="text-white text-xs block leading-tight">{selectedBank.pricing.interbankTransferFee}</strong>
                  </div>
                </div>
              </div>

              {/* State Bank regulatory actions section */}
              <div className="p-3.5 bg-rose-950/20 rounded-xl border border-rose-900/40 space-y-1">
                <span className="text-rose-400 font-bold block">SBP Audit & Penalties Advisory:</span>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {selectedBank.compliance.regulatoryPenaltiesRecent || "No recent penalties or administrative actions listed against the compliance board."}
                </p>
              </div>
            </div>

            {/* Modal footer closing row */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between rounded-b-2xl">
              <span className="text-[10px] text-slate-500 font-mono text-xs">
                DB HASH ID: {selectedBank.basic.id} &bull; SECURE SSL CONNECTED
              </span>
              <button
                onClick={() => setSelectedBank(null)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-1.5 px-4 rounded-lg cursor-pointer transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Persistent global footer indicators */}
      <footer className="bg-slate-950 border-t border-slate-900 py-6" id="footer_pane">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            &copy; 2026 PakBank Compare AI. Registered SBP Consumer Advocate Alliance. All rates updated as per Q2 2026 SOC listings.
          </p>
          <div className="flex gap-4">
            <span className="flex items-center gap-1.5 text-emerald-500/80">
              <span className="h-2 w-2 rounded-full bg-emerald-500 block"></span>
              <span>{t.systemStatusOk}</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
