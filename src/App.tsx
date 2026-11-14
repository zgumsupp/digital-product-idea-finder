import React, { useState } from "react";
import {
  ArrowRight,
  RefreshCw,
  AlertCircle,
  RotateCcw,
  Sparkles,
  Zap,
  TrendingUp,
  Target,
  Palette,
  Heart,
  Users,
  Store,
  Layers,
  DollarSign,
  Copy,
  Check,
  Compass,
  Trophy,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { generateIdeas } from "./ideaGenerator";

export interface PlatformWinningFormula {
  buyerMindset: string;
  topSellerSecrets: string;
  highConvertingAngle: string;
}

export interface ProductIdea {
  id: string;
  productConcept: string;
  productFormat: string;
  bestPlatform: string;
  platformDemandInsight: string;
  winningFormula: PlatformWinningFormula;
  targetCustomer: string;
  problemSolved: string;
  opportunityScore: number;
  validationChecklist: string[];
}

export const TARGET_PLATFORM_OPTIONS = [
  "Auto-Match Best Platform",
  "Etsy",
  "Gumroad",
  "Whop",
  "Stan Store",
  "Payhip",
];

const PRODUCT_TYPE_OPTIONS = [
  "Any Digital Product Type (AI Chooses Best Fit)",
  "Spreadsheets & Trackers (Google Sheets, Excel)",
  "Templates & Design Assets (Canva, Notion, Graphic Kits)",
  "E-Books, Guides, & Documentation (PDF, Notion Documents)",
  "Video Courses & Paid Communities (Cohorts, Memberships)",
  "Software, Extensions, & Mini-Tools",
];

const BUDGET_OPTIONS = [
  "$0 (Zero Budget / Organic Tools Only)",
  "Under $25 (Free tools + basic listing fees)",
  "$25 – $100 (Canva Pro or custom domain)",
  "$100+ (Small launch & promo budget)",
];

const STARTER_IDEAS: ProductIdea[] = [
  {
    id: "starter-1",
    productConcept:
      "Aesthetic Monthly Budget & Sinking Funds Tracker — A minimalist, pastel-themed Google Sheets finance dashboard that auto-calculates paycheck deductions, emergency funds, and bills.",
    productFormat: "Budget & Finance Google Sheets & Excel Tracker",
    bestPlatform: "Etsy",
    platformDemandInsight:
      "Etsy shoppers actively search for aesthetic spreadsheet trackers and visual planners that transform stressful chores into satisfying, beautiful daily routines.",
    winningFormula: {
      buyerMindset:
        "Etsy buyers prioritize instant gratification, visual beauty, and zero setup hassle. They buy tools that look like works of art and make budgeting feel calm rather than intimidating.",
      topSellerSecrets:
        "Etsy buyers love clean aesthetic previews, instant click-to-copy Google Sheets links in a delivery PDF, and a 3-minute video setup walkthrough.",
      highConvertingAngle:
        "Bundle a matching sinking funds calculator and debt payoff snowball tab with automated motivational milestone badges to easily beat plain spreadsheets.",
    },
    targetCustomer:
      "Busy young professionals, couples, and beginner budgeters who find complex accounting software overwhelming.",
    problemSolved:
      "Stops the stress of surprise annual bills by visually mapping every paycheck into savings goals and bill reserves on one clean screen.",
    opportunityScore: 91,
    validationChecklist: [
      "Search 'Google Sheets aesthetic budget tracker' on Etsy and analyze reviews on the top 10 bestselling listings.",
      "Build just the 1-page Summary Tab in Google Sheets for free and share a 15-second aesthetic screen recording on Pinterest or TikTok.",
      "Ask 3 friends to test filling in 5 sample expenses to make sure the onboarding copy-link feels 100% effortless.",
    ],
  },
  {
    id: "starter-2",
    productConcept:
      "The Freelance Operating System for Notion — A modular workspace featuring connected client pipelines, automated invoice generators, and monthly project revenue boards.",
    productFormat: "Practical Notion Dashboard & Resource Kit",
    bestPlatform: "Gumroad",
    platformDemandInsight:
      "Gumroad is the premier hub for knowledge workers, developers, and Notion enthusiasts looking for deep operational utility, automation, and clean workflows.",
    winningFormula: {
      buyerMindset:
        "Gumroad buyers value pragmatic utility, developer-friendly mechanics, and seamless Notion integration. They appreciate modular systems they can duplicate and customize in 30 seconds.",
      topSellerSecrets:
        "Gumroad buyers prefer a 'Pay What You Want' ($0+) lead magnet paired with a $19–$29 Pro version loaded with advanced database automations and mobile widget views.",
      highConvertingAngle:
        "Include automated client invoice PDF generators and quick-capture mobile widgets to beat standard Notion templates.",
    },
    targetCustomer:
      "Freelancers, agency founders, and solo indie hackers managing multiple clients and invoices.",
    problemSolved:
      "Consolidates scattered client messages, tasks, and billing into one unified Notion dashboard that takes under 5 minutes a day to update.",
    opportunityScore: 89,
    validationChecklist: [
      "Browse Gumroad's Notion & Tech categories to study top-rated freelance operating systems and pricing models.",
      "Publish a free 'Pay What You Want' client invoice tracker on Gumroad to build an email list of initial users.",
      "Record a 60-second video walkthrough showing how the database formulas automate manual entry and post to Twitter/X.",
    ],
  },
  {
    id: "starter-3",
    productConcept:
      "30-Day Budget Reset & Wealth Sprint Hub — An exclusive community vault featuring weekly live budget reviews, automated savings tracker sheets, and an active accountability chat.",
    productFormat: "Paid Discord/Telegram Community & Membership Hub",
    bestPlatform: "Whop",
    platformDemandInsight:
      "Whop excels for paid communities and structured challenges where members want ongoing peer accountability and live creator access instead of isolated files.",
    winningFormula: {
      buyerMindset:
        "Whop members crave direct connection, active accountability, and recurring value. They join because peer support keeps them committed to goals they'd otherwise abandon.",
      topSellerSecrets:
        "Top Whop creators offer automated Discord role onboarding, a free starter tier that funnels into a $29/mo VIP sprint, and weekly live check-in events.",
      highConvertingAngle:
        "Launch as a '30-Day Budget Sprint' with weekly leaderboard recognition and automated member role unlocks to drive high retention and low churn.",
    },
    targetCustomer:
      "Young adults and side-hustlers who buy templates but struggle to stick with their routine without peer accountability and weekly prompts.",
    problemSolved:
      "Fixes the 'buy a template and never open it again' syndrome through weekly peer check-ins and direct community encouragement.",
    opportunityScore: 87,
    validationChecklist: [
      "Explore top personal growth and finance hubs on Whop to see how creators structure free vs. VIP member tiers.",
      "Run a free 5-day mini savings challenge with 10 beta members using a single shared spreadsheet.",
      "Poll your beta testers on whether they prefer a one-time pass or a low monthly membership.",
    ],
  },
  {
    id: "starter-4",
    productConcept:
      "5-Minute Sunday Reset Checklist & Routine Pack — An interactive, mobile-optimized PDF guide and editable Canva routine bundle built for instant 1-tap download from short-form videos.",
    productFormat: "Quick 'Link-in-Bio' PDF Playbook & Canva Routine Kit",
    bestPlatform: "Stan Store",
    platformDemandInsight:
      "Stan Store is the highest-converting link-in-bio platform for TikTok and Instagram creators, providing a 1-tap frictionless mobile checkout for impulsive micro-purchases under $20.",
    winningFormula: {
      buyerMindset:
        "Stan Store shoppers arrive directly from mobile video feeds with short attention spans. They make fast impulse buys ($7–$17) for highly specific solutions that solve immediate lifestyle stress.",
      topSellerSecrets:
        "Top Stan Store sellers use 1-tap Apple Pay/Google Pay checkout with mobile-optimized 1-page checkout pages and deliver immediate Canva edit links via text/email.",
      highConvertingAngle:
        "Feature a 'Print & Digital 2-in-1' hook with clickable checkbox PDF versions and an editable Canva link for an irresistible under-$15 impulse buy.",
    },
    targetCustomer:
      "Mobile-first creators, students, and busy 9-to-5 workers scrolling social media for quick Sunday organization inspiration.",
    problemSolved:
      "Eliminates Sunday evening overwhelm and Monday morning chaos by breaking weekly meal, budget, and schedule prep into a 15-minute guided checklist.",
    opportunityScore: 83,
    validationChecklist: [
      "Review 5 lifestyle creators using Stan Store to see their top-selling link-in-bio products and price points.",
      "Film a 15-second TikTok/Reel demonstrating your personal 15-minute reset routine with a bio link call-to-action.",
      "Offer the checklist as a $7 micro-offer to test initial click-through and bio link conversion.",
    ],
  },
  {
    id: "starter-5",
    productConcept:
      "Modern Lettering & Craft Pattern Masterclass — A self-paced educational video curriculum with downloadable printable workbook sheets, brush presets, and craft project patterns.",
    productFormat: "Educational Course & Digital Download Bundle",
    bestPlatform: "Payhip",
    platformDemandInsight:
      "Payhip is trusted by independent educators and hobby creators because of built-in video course streaming, zero platform fees on free tiers, and direct file delivery with EU VAT handling.",
    winningFormula: {
      buyerMindset:
        "Payhip buyers are dedicated hobbyists and lifelong learners who want direct, unhurried instruction from authentic creators without high-pressure subscription upsells.",
      topSellerSecrets:
        "Payhip educators succeed by using coupon bundles, embedded video previews, and easy direct PDF downloads with zero login friction.",
      highConvertingAngle:
        "Bundle step-by-step video stroke demonstrations with printable traceable practice sheets and private student gallery feedback.",
    },
    targetCustomer:
      "Aspiring lettering artists, digital crafters, and bullet journal hobbyists wanting to learn modern script and design techniques.",
    problemSolved:
      "Overcomes frustrating lettering mistakes by combining video demonstrations with traceable practice sheets.",
    opportunityScore: 85,
    validationChecklist: [
      "Examine digital lettering and craft courses on Payhip to evaluate pricing structures and file bundle formats.",
      "Create a 2-page sample lettering practice sheet PDF and share it in calligraphy Facebook groups or Instagram communities.",
      "Pre-sell 5 discounted founding memberships to validate interest before recording the complete video curriculum.",
    ],
  },
];

interface PlatformStyle {
  label: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  dotColor: string;
  accentBorder: string;
  accentBg: string;
}

function getPlatformStyle(platform: string): PlatformStyle {
  const p = (platform || "").toLowerCase();
  if (p.includes("etsy")) {
    return {
      label: "Etsy",
      badgeBg: "bg-orange-50/90",
      badgeText: "text-orange-700",
      badgeBorder: "border-orange-200",
      dotColor: "bg-orange-500",
      accentBorder: "border-l-orange-500",
      accentBg: "bg-orange-500/10",
    };
  }
  if (p.includes("gumroad")) {
    return {
      label: "Gumroad",
      badgeBg: "bg-pink-50/90",
      badgeText: "text-pink-700",
      badgeBorder: "border-pink-200",
      dotColor: "bg-pink-500",
      accentBorder: "border-l-pink-500",
      accentBg: "bg-pink-500/10",
    };
  }
  if (p.includes("whop")) {
    return {
      label: "Whop",
      badgeBg: "bg-red-50/90",
      badgeText: "text-red-700",
      badgeBorder: "border-red-200",
      dotColor: "bg-red-500",
      accentBorder: "border-l-red-500",
      accentBg: "bg-red-500/10",
    };
  }
  if (p.includes("stan")) {
    return {
      label: "Stan Store",
      badgeBg: "bg-purple-50/90",
      badgeText: "text-purple-700",
      badgeBorder: "border-purple-200",
      dotColor: "bg-purple-500",
      accentBorder: "border-l-purple-500",
      accentBg: "bg-purple-500/10",
    };
  }
  if (p.includes("payhip")) {
    return {
      label: "Payhip",
      badgeBg: "bg-teal-50/90",
      badgeText: "text-teal-700",
      badgeBorder: "border-teal-200",
      dotColor: "bg-teal-500",
      accentBorder: "border-l-teal-500",
      accentBg: "bg-teal-500/10",
    };
  }
  return {
    label: platform,
    badgeBg: "bg-indigo-50/90",
    badgeText: "text-indigo-700",
    badgeBorder: "border-indigo-200",
    dotColor: "bg-indigo-500",
    accentBorder: "border-l-indigo-500",
    accentBg: "bg-indigo-500/10",
  };
}

export default function App() {
  // 1. UI Input States
  const [skills, setSkills] = useState<string>(
    "Canva design, basic Google Sheets formulas, organizing checklists"
  );
  const [interests, setInterests] = useState<string>(
    "Personal budgeting, meal planning, simple daily routines"
  );
  const [targetAudience, setTargetAudience] = useState<string>(
    "Busy beginners and young adults looking for simple, ready-to-use templates"
  );
  const [targetPlatform, setTargetPlatform] = useState<string>(
    TARGET_PLATFORM_OPTIONS[0]
  );
  const [preferredProductType, setPreferredProductType] = useState<string>(
    PRODUCT_TYPE_OPTIONS[0]
  );
  const [budget, setBudget] = useState<string>(BUDGET_OPTIONS[0]);

  // 2. Results & Checklist States
  const [ideas, setIdeas] = useState<ProductIdea[]>(STARTER_IDEAS);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [isLiveAi, setIsLiveAi] = useState<boolean>(false);

  const handleReset = () => {
    setSkills("");
    setInterests("");
    setTargetAudience("");
    setTargetPlatform(TARGET_PLATFORM_OPTIONS[0]);
    setPreferredProductType(PRODUCT_TYPE_OPTIONS[0]);
    setBudget(BUDGET_OPTIONS[0]);
    setError(null);
    setNotice(null);
    setIsLiveAi(false);
  };

  const toggleStep = (ideaId: string, stepIndex: number) => {
    const key = `${ideaId}-${stepIndex}`;
    setCheckedSteps((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCopyIdea = (idea: ProductIdea) => {
    const text = `💡 ${idea.productConcept}
Product Format: ${idea.productFormat}
Best Platform: ${idea.bestPlatform}
Opportunity Score: ${idea.opportunityScore}/100

Target Customer: ${idea.targetCustomer}
Problem Solved: ${idea.problemSolved}

Why This Sells Best on ${idea.bestPlatform}:
- Buyer Mindset: ${idea.winningFormula?.buyerMindset || ""}
- What Top Sellers Include: ${idea.winningFormula?.topSellerSecrets || ""}
- High-Converting Angle: ${idea.winningFormula?.highConvertingAngle || ""}

Validation Checklist:
${idea.validationChecklist.map((step, i) => `${i + 1}. ${step}`).join("\n")}`;

    navigator.clipboard.writeText(text);
    setCopiedId(idea.id);
    setTimeout(() => {
      setCopiedId((curr) => (curr === idea.id ? null : curr));
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!skills.trim() || !interests.trim() || !targetAudience.trim()) {
      setError("Please fill in your Skills, Interests, and Target Audience.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setNotice(null);

    try {
      const result = await generateIdeas({
        skills,
        interests,
        targetAudience,
        targetPlatform,
        preferredProductType,
        budget,
      });

      if (Array.isArray(result.ideas) && result.ideas.length > 0) {
        setIdeas(result.ideas);
        setIsLiveAi(result.isLiveAi);
        if (result.notice) {
          setNotice(result.notice);
        }
        setCheckedSteps({});
      } else {
        throw new Error("No ideas were returned. Please try adjusting your inputs.");
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 antialiased font-sans">
      {/* 1. Sleek SaaS Header */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm shadow-indigo-500/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold tracking-tight text-slate-900 font-display">
                  Digital Product Idea Finder
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/70">
                  AI Monetization
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden md:block">
                Tailored marketplace algorithms for creator commerce
              </p>
            </div>
          </div>

          {/* Signature Platform Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {[
              { name: "Etsy", dot: "bg-orange-500" },
              { name: "Gumroad", dot: "bg-pink-500" },
              { name: "Whop", dot: "bg-red-500" },
              { name: "Stan Store", dot: "bg-purple-500" },
              { name: "Payhip", dot: "bg-teal-500" },
            ].map((p) => (
              <span
                key={p.name}
                className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-slate-600 bg-slate-100/80 border border-slate-200/70"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
                {p.name}
              </span>
            ))}
            <span className="text-xs text-slate-400 font-mono hidden sm:inline lg:hidden">
              5 Marketplaces
            </span>
          </div>
        </div>
      </header>

      {/* 2. Hero Section with Dot-Grid Background Pattern */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-mesh-glow py-10 sm:py-14">
        {/* Subtle dot-grid backdrop pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-indigo-100 text-indigo-700 shadow-2xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Proven Marketplace Sales Blueprint</span>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-display leading-[1.15] mb-3"
              style={{ textWrap: "balance" }}
            >
              Build digital products that{" "}
              <span className="text-indigo-600 underline decoration-indigo-200 decoration-wavy decoration-2">
                actually sell
              </span>{" "}
              on each platform.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Match your skills, target audience, and budget directly to proven
              winning product formats on Etsy, Gumroad, Whop, Stan Store, and
              Payhip—with concrete buyer psychology and validation blueprints.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Main Workspace: Sticky Brief (Left) & Idea Cards (Right) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: 01. Creator & Market Brief (Sticky on desktop) */}
          <section className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow duration-200 lg:sticky lg:top-24">
            <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900 tracking-tight">
                    01. Creator &amp; Market Brief
                  </h2>
                  <p className="text-[11px] text-slate-500">
                    Define skills, audience &amp; constraints
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 px-2.5 py-1 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
                title="Reset all inputs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Skills */}
              <div>
                <label
                  htmlFor="skills"
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 mb-1.5"
                >
                  <Palette className="w-3.5 h-3.5 text-slate-400" />
                  <span>Skills</span>
                </label>
                <input
                  id="skills"
                  type="text"
                  required
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="e.g., Canva design, Notion, Google Sheets, writing"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50/60 hover:bg-white focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 rounded-xl transition-all shadow-2xs text-slate-900 placeholder:text-slate-400"
                />
              </div>

              {/* Interests */}
              <div>
                <label
                  htmlFor="interests"
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 mb-1.5"
                >
                  <Heart className="w-3.5 h-3.5 text-slate-400" />
                  <span>Interests</span>
                </label>
                <input
                  id="interests"
                  type="text"
                  required
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  placeholder="e.g., Budgeting, meal prep, wedding planning, fitness"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50/60 hover:bg-white focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 rounded-xl transition-all shadow-2xs text-slate-900 placeholder:text-slate-400"
                />
              </div>

              {/* Target Audience */}
              <div>
                <label
                  htmlFor="target-audience"
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 mb-1.5"
                >
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>Target Audience</span>
                </label>
                <input
                  id="target-audience"
                  type="text"
                  required
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  placeholder="e.g., Busy moms, college students, freelance designers"
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50/60 hover:bg-white focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 rounded-xl transition-all shadow-2xs text-slate-900 placeholder:text-slate-400"
                />
              </div>

              {/* Target Platform Dropdown (Optional Platform Filter) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="target-platform"
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-800"
                  >
                    <Store className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Target Platform</span>
                  </label>
                  <span className="text-[10px] font-semibold tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                    Platform Filter
                  </span>
                </div>
                <select
                  id="target-platform"
                  value={targetPlatform}
                  onChange={(e) => setTargetPlatform(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50/60 hover:bg-white focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 rounded-xl transition-all shadow-2xs font-medium text-slate-900 cursor-pointer"
                >
                  {TARGET_PLATFORM_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                  {targetPlatform === "Auto-Match Best Platform"
                    ? "Auto-matches each idea to the marketplace with highest buyer transaction demand."
                    : `Strictly isolates recommendations to proven bestsellers on ${targetPlatform}.`}
                </p>
              </div>

              {/* Preferred Product Type */}
              <div>
                <label
                  htmlFor="product-type"
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 mb-1.5"
                >
                  <Layers className="w-3.5 h-3.5 text-slate-400" />
                  <span>Preferred Product Type</span>
                </label>
                <select
                  id="product-type"
                  value={preferredProductType}
                  onChange={(e) => setPreferredProductType(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50/60 hover:bg-white focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 rounded-xl transition-all shadow-2xs font-medium text-slate-900 cursor-pointer"
                >
                  {PRODUCT_TYPE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Dropdown */}
              <div>
                <label
                  htmlFor="budget"
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 mb-1.5"
                >
                  <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                  <span>Upfront Budget</span>
                </label>
                <select
                  id="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50/60 hover:bg-white focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 rounded-xl transition-all shadow-2xs font-medium text-slate-900 cursor-pointer"
                >
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                  Most winning digital products launch with $0 upfront using free tiers
                  of Canva, Notion, or Google Sheets.
                </p>
              </div>

              {error && (
                <div
                  role="alert"
                  className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2.5 shadow-2xs animate-shake"
                >
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{error}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 disabled:bg-indigo-300 text-white font-semibold text-sm rounded-xl transition-all shadow-sm shadow-indigo-500/25 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-white" />
                      <span>Matching High-Converting Formats...</span>
                    </>
                  ) : (
                    <>
                      <span>Find High-Converting Ideas</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </section>

          {/* Right Column: 02. Tailored Product Concepts */}
          <section className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-1 flex-wrap gap-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h2 className="text-base font-bold text-slate-900 tracking-tight font-display">
                  02. Tailored Product Concepts
                </h2>
                {isLiveAi && (
                  <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                    Gemini 2.5 Live
                  </span>
                )}
                {targetPlatform !== "Auto-Match Best Platform" && (
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Filtered: {targetPlatform}
                  </span>
                )}
              </div>
              <span className="text-xs text-slate-500 font-mono font-medium bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                {ideas.length} concepts
              </span>
            </div>

            {notice && (
              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5 shadow-2xs leading-relaxed">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{notice}</span>
              </div>
            )}

            {/* Loading Skeleton */}
            {isLoading && (
              <div className="space-y-5">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 animate-pulse space-y-5 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-48 bg-slate-200 rounded-md" />
                      <div className="h-7 w-20 bg-slate-100 rounded-lg" />
                    </div>
                    <div className="h-6 w-5/6 bg-slate-200 rounded-md" />
                    <div className="h-32 w-full bg-slate-100 rounded-xl" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-16 bg-slate-100 rounded-lg" />
                      <div className="h-16 bg-slate-100 rounded-lg" />
                    </div>
                    <div className="h-14 w-full bg-slate-100 rounded-xl" />
                  </div>
                ))}
              </div>
            )}

            {/* Clean Stack of Modern SaaS Product Concept Cards */}
            {!isLoading &&
              ideas.map((idea, index) => {
                const platformStyle = getPlatformStyle(idea.bestPlatform);
                const isHighOpportunity = idea.opportunityScore >= 80;

                return (
                  <article
                    key={idea.id || index}
                    className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group"
                  >
                    {/* Top Row: Meta Badges & Copy Action */}
                    <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        {/* Idea Index */}
                        <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                          IDEA 0{index + 1}
                        </span>

                        <span className="text-slate-300">·</span>

                        {/* Product Format */}
                        <span className="font-medium text-slate-700 bg-slate-50 px-2.5 py-0.5 rounded-md border border-slate-200/80">
                          {idea.productFormat}
                        </span>

                        <span className="text-slate-300">·</span>

                        {/* Signature Platform Badge */}
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${platformStyle.badgeBg} ${platformStyle.badgeText} ${platformStyle.badgeBorder} shadow-2xs`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${platformStyle.dotColor}`}
                          />
                          {idea.bestPlatform}
                        </span>
                      </div>

                      {/* Sleek Copy Idea Button */}
                      <button
                        type="button"
                        onClick={() => handleCopyIdea(idea)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-all cursor-pointer shadow-2xs shrink-0"
                        title="Copy idea details to clipboard"
                      >
                        {copiedId === idea.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700 font-semibold text-[11px]">
                              Copied!
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                            <span className="text-[11px] hidden sm:inline">
                              Copy Idea
                            </span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Product Concept Title */}
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                        Product Concept
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug font-display">
                        {idea.productConcept}
                      </h3>
                    </div>

                    {/* Highlighted Insight Box: Why This Sells Best on [Platform] */}
                    {idea.winningFormula && (
                      <div
                        className={`rounded-xl border border-slate-200/90 border-l-4 ${platformStyle.accentBorder} bg-slate-50/70 p-5 space-y-4 shadow-2xs`}
                      >
                        <div className="flex items-center justify-between gap-2 border-b border-slate-200/70 pb-3">
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-6 h-6 rounded-lg ${platformStyle.badgeBg} ${platformStyle.badgeBorder} border flex items-center justify-center ${platformStyle.badgeText} shrink-0`}
                            >
                              <Compass className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold tracking-tight text-slate-900 uppercase">
                                Why This Sells Best on {idea.bestPlatform}
                              </h4>
                              <p className="text-[11px] text-slate-500">
                                Conversion mechanics &amp; buyer psychology
                              </p>
                            </div>
                          </div>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${platformStyle.badgeBg} ${platformStyle.badgeText} ${platformStyle.badgeBorder} uppercase tracking-wider`}
                          >
                            Winning Formula
                          </span>
                        </div>

                        <div className="space-y-3.5 text-xs sm:text-sm">
                          {/* Buyer Mindset */}
                          <div className="flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-600 shrink-0 mt-0.5 shadow-2xs">
                              <Users className="w-3 h-3 text-indigo-600" />
                            </div>
                            <div className="leading-relaxed text-slate-600">
                              <span className="font-semibold text-slate-900">
                                Buyer Mindset:{" "}
                              </span>
                              {idea.winningFormula.buyerMindset}
                            </div>
                          </div>

                          {/* What Top Sellers Include */}
                          <div className="flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-600 shrink-0 mt-0.5 shadow-2xs">
                              <Trophy className="w-3 h-3 text-amber-500" />
                            </div>
                            <div className="leading-relaxed text-slate-600">
                              <span className="font-semibold text-slate-900">
                                What Top Sellers Include:{" "}
                              </span>
                              {idea.winningFormula.topSellerSecrets}
                            </div>
                          </div>

                          {/* High-Converting Angle Card */}
                          <div className="rounded-lg bg-white border border-slate-200/90 p-3.5 space-y-1.5 shadow-xs">
                            <div className="flex items-center gap-2">
                              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-amber-50 text-amber-700 border border-amber-200 shrink-0">
                                <Zap className="w-3 h-3 fill-amber-500 text-amber-600" />
                              </span>
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                                High-Converting Angle
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed pl-7">
                              {idea.winningFormula.highConvertingAngle}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Platform Demand Insight */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        <TrendingUp className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Platform Demand Insight</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {idea.platformDemandInsight}
                      </p>
                    </div>

                    {/* Target Customer & Problem Solved */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-slate-100 py-4">
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Target Customer
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {idea.targetCustomer}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Problem Solved
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {idea.problemSolved}
                        </p>
                      </div>
                    </div>

                    {/* Redesigned Opportunity Score Gauge */}
                    <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold border ${
                              isHighOpportunity
                                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                : "bg-amber-50 text-amber-700 border-amber-200"
                            }`}
                          >
                            {isHighOpportunity ? (
                              <TrendingUp className="w-3 h-3" />
                            ) : (
                              <Target className="w-3 h-3" />
                            )}
                            <span>
                              {isHighOpportunity
                                ? "High Opportunity Score"
                                : "Solid Opportunity Score"}
                            </span>
                          </span>
                        </div>

                        <div className="font-mono text-base font-bold text-slate-900">
                          {idea.opportunityScore}
                          <span className="text-xs font-normal text-slate-400 ml-1">
                            / 100
                          </span>
                        </div>
                      </div>

                      {/* Visual Progress Bar Gauge */}
                      <div className="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isHighOpportunity
                              ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500"
                              : "bg-gradient-to-r from-amber-400 to-orange-500"
                          }`}
                          style={{
                            width: `${Math.min(100, Math.max(0, idea.opportunityScore))}%`,
                          }}
                        />
                      </div>

                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Evaluated across buyer search intensity, low-friction delivery,
                        and format competitiveness on {idea.bestPlatform}.
                      </p>
                    </div>

                    {/* Actionable Validation Checklist */}
                    <div className="space-y-3 pt-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                          <span>Actionable Validation Checklist</span>
                        </h4>
                        <span className="text-[11px] text-slate-400 font-mono">
                          {
                            idea.validationChecklist.filter(
                              (_, stepIdx) => checkedSteps[`${idea.id}-${stepIdx}`]
                            ).length
                          }
                          /{idea.validationChecklist.length} completed
                        </span>
                      </div>

                      <div className="space-y-2">
                        {idea.validationChecklist.map((step, stepIdx) => {
                          const key = `${idea.id}-${stepIdx}`;
                          const isDone = !!checkedSteps[key];

                          return (
                            <label
                              key={stepIdx}
                              onClick={() => toggleStep(idea.id, stepIdx)}
                              className={`flex items-start gap-3 p-3 rounded-xl border text-sm transition-all duration-150 cursor-pointer select-none ${
                                isDone
                                  ? "bg-slate-50/70 border-slate-200 text-slate-400 line-through"
                                  : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:shadow-2xs"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isDone}
                                onChange={() => {}}
                                className="mt-0.5 h-4 w-4 rounded-md border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                              />
                              <span className="text-xs sm:text-sm leading-relaxed">
                                {step}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </article>
                );
              })}
          </section>
        </div>
      </main>

      {/* 4. Modern SaaS Footer */}
      <footer className="border-t border-slate-200/80 bg-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">
              Digital Product Idea Finder
            </span>
            <span>·</span>
            <span>Marketplace Monetization Blueprint</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              Etsy · Gumroad · Whop · Stan Store · Payhip
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
