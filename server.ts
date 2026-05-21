import express from "express";
import path from "path";
import dns from "dns";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import { BANKS, rankBanks } from "./src/data/banksData.js"; // Note: we can use .ts or .js or relative paths. tsx and esbuild handle imports beautifully.
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Initialize Google GenAI Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "dummy-key-for-compilation",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// Outage crowdsourced in-memory database
let crowdSourceReports = [
  {
    id: "1",
    bankId: "meezan",
    service: "Mobile App" as const,
    status: "Degraded" as const,
    reportedAt: new Date(Date.now() - 3600000).toISOString(),
    details: "Biometric login keeps showing session timeout, OTP alerts delayed by 5 mins.",
    reportedBy: "Sajid K. (Karachi)",
    upvotes: 14
  },
  {
    id: "2",
    bankId: "hbl",
    service: "IBFT Transfers" as const,
    status: "Operational" as const,
    reportedAt: new Date(Date.now() - 7200000).toISOString(),
    details: "Raast instant payments taking ~10 minutes to reflect in external accounts.",
    reportedBy: "Maria A. (Lahore)",
    upvotes: 8
  },
  {
    id: "3",
    bankId: "sadapay",
    service: "Visa/MC Gateway" as const,
    status: "Operational" as const,
    reportedAt: new Date(Date.now() - 12000000).toISOString(),
    details: "International credit cards transactions working with slight 5s latency.",
    reportedBy: "Asim R. (Islamabad)",
    upvotes: 3
  }
];

// 1. API - Get active banks
app.get("/api/banks", (req, res) => {
  res.json(BANKS);
});

// 2. API - Outages Dashboard
app.get("/api/outages", (req, res) => {
  res.json(crowdSourceReports);
});

// 3. API - Submit Outage report
app.post("/api/outages/report", (req, res) => {
  const { bankId, service, status, details, reportedBy } = req.body;
  if (!bankId || !service || !status || !details) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const newReport = {
    id: String(crowdSourceReports.length + 1),
    bankId,
    service,
    status,
    reportedAt: new Date().toISOString(),
    details,
    reportedBy: reportedBy || "Anonymous Reporter",
    upvotes: 1
  };

  crowdSourceReports.unshift(newReport);
  res.json(newReport);
});

// 4. API - Upvote outage report
app.post("/api/outages/upvote", (req, res) => {
  const { id } = req.body;
  const report = crowdSourceReports.find(r => r.id === id);
  if (report) {
    report.upvotes += 1;
    res.json(report);
  } else {
    res.status(404).json({ error: "Report not found" });
  }
});

// 5. API - Gemini Recommendations Wizard
app.post("/api/recommend", async (req, res) => {
  const { weights, query, userProfile } = req.body;

  if (!weights) {
    return res.status(400).json({ error: "Quality weights are required" });
  }

  // Pre-calculate ranked list via mathematical ranking
  const ranked = rankBanks(weights, BANKS);
  const bestThree = ranked.slice(0, 3);

  // Prepare a condensed prompt for Gemini to give premium strategic counseling
  const prompt = `
    You are PakBank Compare AI, an elite banking domain analyst and corporate treasury advisor in Pakistan.
    Below is the user request and priorities:
    
    User Query: "${query || "Looking for the best overall banking experience that aligns with my needs"}"
    Target Interest Group: ${userProfile || "General Consumer / Professional"}
    
    Mathematical rankings calculated based on user-weighted score preferences:
    1. ${bestThree[0]?.bank.basic.name} (Calculated Score: ${bestThree[0]?.score}/100)
    2. ${bestThree[1]?.bank.basic.name} (Calculated Score: ${bestThree[1]?.score}/100)
    3. ${bestThree[2]?.bank.basic.name} (Calculated Score: ${bestThree[2]?.score}/100)

    User Priorities Weighted Breakdown:
    - Mobile App Quality: ${weights.appQuality}%
    - International Payments acceptance: ${weights.intlPayments}%
    - ATM Physical Network: ${weights.atmNetwork}%
    - Shariah Islamic Banking compliance: ${weights.islamicBanking}%
    - Customer Support: ${weights.customerSupport}%
    - Freelancer Friendly rates: ${weights.freelancerFriendly}%
    - Low Hidden Charges & Card Fees: ${weights.lowCharges}%
    - Account Opening Speed: ${weights.accountOpeningSpeed}%

    Using this data and your knowledge of Pakistan's banking sector (State Bank of Pakistan regulations, Raast payments, FBR tax filer active status, Roshan Digital accounts for overseas, and currency limits), construct a professional, highly readable comparative analysis.
    
    Provide your advice in Markdown following this structure:
    ### 🎯 Direct Strategic Recommendation
    - Identify which bank of the top 3 matches best and explain why with respect to SBP guidelines.
    - Mention specific financial pros of this match (e.g. remittance support, SadaBiz integration, SCB global rails, Meezan trust).
    
    ### 📊 Comparative Analysis Matrix
    A concise comparison of these top 3 choices covering:
    - **Pros vs Cons**: Specific to the user's situation.
    - **Slasher Alert (Fees)**: Real insights into SMS alerts, annual card maintenance charges, or withholding taxes for non-filers.
    
    ### ⚠️ Hidden Warnings & Risk Factors
    - Advise the user on outage ratios, SBP complain ratios, and safety protocols for biometric logins on Pakistan apps.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    res.json({
      success: true,
      text: response.text,
      mathematicalRankings: bestThree.map(b => ({
        id: b.bank.basic.id,
        name: b.bank.basic.name,
        shortName: b.bank.basic.shortName,
        score: b.score,
        tagline: b.bank.basic.tagline,
        logoBg: b.bank.basic.logoBg,
        logoText: b.bank.basic.logoText,
        breakdown: b.breakdown
      }))
    });
  } catch (error: any) {
    console.error("Gemini recommendation error:", error);
    res.json({
      success: false,
      text: "### ⚠️ AI Engine Offline\nYour custom top matches are displayed below, but we could not establish a connection to the Gemini AI Engine to produce premium tailored analytics. Please check your **Settings > Secrets** panel.",
      mathematicalRankings: bestThree.map(b => ({
        id: b.bank.basic.id,
        name: b.bank.basic.name,
        shortName: b.bank.basic.shortName,
        score: b.score,
        tagline: b.bank.basic.tagline,
        logoBg: b.bank.basic.logoBg,
        logoText: b.bank.basic.logoText,
        breakdown: b.breakdown
      }))
    });
  }
});

// 6. API - Chat Interactive Banking Advisor
app.post("/api/chat", async (req, res) => {
  const { messages, bankId } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Valid message history array is required" });
  }

  const selectedBank = BANKS.find(b => b.basic.id === bankId);
  const contextText = selectedBank 
    ? `The user is specifically inquiring/comparing Bank Alfalah, Meezan Bank, HBL, Sadapay, standard chartered, etc., and has highlight profile of: ${selectedBank.basic.name} (${selectedBank.basic.tagline}), Hq: ${selectedBank.basic.hq}, SWIFT: ${selectedBank.basic.swiftCode}, cards detail: ${JSON.stringify(selectedBank.pricing)}.`
    : "The user is exploring the entire Pakistani banking ecosystem (Islamic vs Conventional, digital EMIs vs veteran retail banking, FBR filer issues).";

  // Format historical messages for prompt
  const userQuery = messages[messages.length - 1]?.content || "";
  const historyText = messages.slice(0, -1).map(m => `${m.role === "user" ? "User" : "Advisor"}: ${m.content}`).join("\n");

  const prompt = `
    You are "Sarmaya AI", an enterprise-grade banking & financial compliance advisor specialized in Pakistan's state banking sphere (State Bank of Pakistan - SBP, withholding tax rules for Filers vs Non-filers, Roshan Digital Account (RDA) for overseas, Raast instant payments P2P and P2B, and digital EMIs).
    
    Context:
    ${contextText}

    History of convo:
    ${historyText}

    New Question from User: "${userQuery}"

    Respond concisely, clearly, and in a friendly expert advisor tone. Mention real technical and legal facts about Pakistan’s financial rules where appropriate, explaining in simple Urdu-infused words if user's query calls for it, but always default to pristine professional English. Keep markdown elegant.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    res.json({ text: response.text });
  } catch (error) {
    console.error("Gemini chat error:", error);
    res.json({ text: `Assalam-o-Alaikum! I am Sarmaya AI. I received your query: "${userQuery}".\n\nI am currently operating in offline-mode because the Gemini API connection is unavailable (please check your key in the secrets config). However, I can still assist you based on static guidelines or you can try adjusting the weights engine!` });
  }
});

// 7. API - AI Sentiment Extraction & Complaint summary
app.post("/api/sentiment/summary", async (req, res) => {
  const { bankId } = req.body;
  const bank = BANKS.find(b => b.basic.id === bankId);

  if (!bank) {
    return res.status(404).json({ error: "Bank not found" });
  }

  const prompt = `
    You are an AI Sentiment Analyzer specialized in consumer banking audits.
    Analyze the sentiment and review data below for ${bank.basic.name}:
    - User Reviews Rating: ${bank.sentiment.userReviewsRating}/5
    - Complaints Resolved: ${bank.sentiment.complaintsResolvedPct}%
    - Complaint Ratio per 1000 users: ${bank.sentiment.complaintRatioPer1000}
    - Social Media Buzz: ${bank.sentiment.socialMediaSentiment}
    - Reddit Sentiment Score: ${bank.sentiment.redditSentimentScore}/100
    - Play Store review mood: ${bank.sentiment.playStoreSentimentScore}/100
    - Customer Support score: ${bank.sentiment.customerSupportScore}/10

    Draft a 2-paragraph executive overview of what this data means.
    List:
    1. **Primary Complaint Drivers** based on common feedback for banks in these indices (app log timeouts, SMS charges, interbank transfer limits).
    2. **Trust Level Index**: Highly trustworthy, moderate, or digital-first focus.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });
    res.json({ summary: response.text });
  } catch (error) {
    res.json({ summary: `Based on current metrics, ${bank.basic.name} holds a solid reviews score of ${bank.sentiment.userReviewsRating}/5 and a Play Store sentiment index of ${bank.sentiment.playStoreSentimentScore}%. Primary complaints typically center around interbank Raast connectivity speed and credit card rewards processing limits.` });
  }
});

// Start server containing Vite middleware or static builds
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`PakBank Compare Server is live on http://localhost:${PORT}`);
  });
}

startServer();
