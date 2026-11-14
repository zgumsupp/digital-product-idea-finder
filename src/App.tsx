import React, { useState } from "react";
import { ArrowRight, RefreshCw, AlertCircle, RotateCcw } from "lucide-react";

export interface ProductIdea {
  id: string;
  productConcept: string;
  productFormat: string;
  bestPlatform: string;
  platformDemandInsight: string;
  targetCustomer: string;
  problemSolved: string;
  opportunityScore: number;
  validationChecklist: string[];
}

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
      "Simple Monthly Bill & Sinking Funds Tracker — A clean, color-coded Google Sheets budget template that automatically calculates how much to set aside from each paycheck for upcoming bills and savings goals.",
    productFormat: "Google Sheets Template",
    bestPlatform: "Etsy",
    platformDemandInsight:
      "Etsy is ideal due to heavy daily search volume from shoppers actively looking for ready-to-use aesthetic spreadsheet trackers and printable planners.",
    targetCustomer:
      "Busy young professionals and couples who feel overwhelmed by complicated finance apps and just want a simple sheet they can update in 5 minutes.",
    problemSolved:
      "Stops the stress of forgetting annual or quarterly bills by showing a clear visual progress bar for every savings goal on one screen.",
    opportunityScore: 86,
    validationChecklist: [
      "Search 'Google Sheets budget tracker' on Etsy and read 10 recent reviews on bestselling listings to see what buyers wish was simpler.",
      "Build just the 1-page Summary Tab in Google Sheets for free and share a screenshot in a budgeting community for feedback.",
      "Ask 3 friends to test filling in 5 sample expenses to make sure the instructions feel effortless for a beginner.",
    ],
  },
  {
    id: "starter-2",
    productConcept:
      "30-Day Accountability & Budget Reset Hub — A gated resource vault with weekly live check-in sheets, savings challenges, and an active member chat room.",
    productFormat: "Community & Template Vault",
    bestPlatform: "Whop",
    platformDemandInsight:
      "Whop is perfect for this because it has high demand for paid communities, structured accountability challenges, and recurring access to digital vaults.",
    targetCustomer:
      "Young adults and side-hustlers who buy templates but struggle to stick with their routine without peer accountability and weekly prompts.",
    problemSolved:
      "Fixes the 'buy a template and never open it again' problem by pairing simple Google Sheets trackers with weekly community milestones.",
    opportunityScore: 83,
    validationChecklist: [
      "Explore top personal growth and finance hubs on Whop to see how creators structure free vs. VIP member tiers.",
      "Run a free 7-day mini savings challenge with 10 beta members using a single shared spreadsheet.",
      "Poll your beta testers on whether they prefer a one-time pass or a low monthly membership.",
    ],
  },
  {
    id: "starter-3",
    productConcept:
      "Weekly Meal Prep & Grocery Auto-List Hub — A beginner-friendly Notion dashboard where users click their favorite 5 meals for the week and instantly get a sorted grocery shopping list on their phone.",
    productFormat: "Notion Dashboard",
    bestPlatform: "Gumroad",
    platformDemandInsight:
      "Gumroad is ideal because Notion users frequently discover and download free starter templates there before upgrading to a complete bundle.",
    targetCustomer:
      "Students, remote workers, and busy parents who use Notion on their phone and want to stop wasting money on unused groceries.",
    problemSolved:
      "Saves 1–2 hours every Sunday by turning saved recipes directly into an organized aisle-by-aisle grocery checklist.",
    opportunityScore: 80,
    validationChecklist: [
      "Browse Gumroad's Notion category to compare how top meal-planner templates price their free vs. paid versions.",
      "Post a 20-second screen recording of clicking two meals and watching the grocery list populate on TikTok, Reels, or Reddit.",
      "Share a free duplicate link with 5 people in exchange for honest feedback on what confused them.",
    ],
  },
  {
    id: "starter-4",
    productConcept:
      "5-Minute Sunday Reset Checklist & Routine Guide — A mobile-friendly interactive PDF and Canva routine pack designed to be downloaded directly from short-form videos.",
    productFormat: "Canva Routine Pack & PDF Guide",
    bestPlatform: "Stan Store",
    platformDemandInsight:
      "Stan Store excels here because mobile viewers on TikTok and Instagram Reels convert best with a 1-click checkout built right into your link-in-bio.",
    targetCustomer:
      "Mobile-first creators, students, and busy 9-to-5 workers scrolling social media for quick Sunday organization inspiration.",
    problemSolved:
      "Eliminates Sunday evening overwhelm by breaking weekly meal, budget, and schedule prep into a 15-minute guided checklist.",
    opportunityScore: 78,
    validationChecklist: [
      "Check 5 lifestyle or productivity creators using Stan Store or Payhip to see how they title their lowest-priced impulse downloads.",
      "Design a 2-page sample in Canva and offer it as a free download link in your bio for 48 hours to measure click-through interest.",
      "Ask everyone who downloads the freebie which additional template page they would gladly pay $9–$15 to unlock.",
    ],
  },
];

export default function App() {
  // 1. UI Input States (Left Input Form Kept Exactly Intact)
  const [skills, setSkills] = useState<string>(
    "Canva design, basic Google Sheets formulas, organizing checklists"
  );
  const [interests, setInterests] = useState<string>(
    "Personal budgeting, meal planning, simple daily routines"
  );
  const [targetAudience, setTargetAudience] = useState<string>(
    "Busy beginners and young adults looking for simple, ready-to-use templates"
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

  const handleReset = () => {
    setSkills("");
    setInterests("");
    setTargetAudience("");
    setPreferredProductType(PRODUCT_TYPE_OPTIONS[0]);
    setBudget(BUDGET_OPTIONS[0]);
    setError(null);
  };

  const toggleStep = (ideaId: string, stepIndex: number) => {
    const key = `${ideaId}-${stepIndex}`;
    setCheckedSteps((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!skills.trim() || !interests.trim() || !targetAudience.trim()) {
      setError("Please fill in your Skills, Interests, and Target Audience.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/generate-ideas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          skills,
          interests,
          targetAudience,
          preferredProductType,
          budget,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Could not generate ideas. Please try again.");
      }

      if (Array.isArray(data.ideas) && data.ideas.length > 0) {
        setIdeas(data.ideas);
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
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900">
      {/* Minimal Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between gap-6">
          <span className="text-base font-bold tracking-tight text-slate-900 font-display whitespace-nowrap">
            Digital Product Idea Finder AI
          </span>
          <span className="text-xs text-slate-500 hidden sm:inline whitespace-nowrap">
            Whop · Etsy · Gumroad · Shopify · Stan Store · Payhip
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-5 py-8 md:py-10">
        {/* Simple Intro */}
        <div className="max-w-2xl mb-8">
          <h1
            className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2"
            style={{ textWrap: "balance" }}
          >
            Find simple digital products and where they sell best.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Enter what you know and who you want to help. Get tailored product ideas
            matched to top platforms like Whop, Etsy, Gumroad, Shopify, Stan Store, and
            Payhip—complete with demand insights and a quick validation checklist.
          </p>
        </div>

        {/* Clean 2-Column Layout: Left Inputs (01) | Right Stack of Ideas (02) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 01. Creator & Market Brief (Kept Intact) */}
          <section className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 lg:sticky lg:top-6">
            <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
              <h2 className="text-base font-bold text-slate-900">
                01. Creator &amp; Market Brief
              </h2>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                Clear
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Skills */}
              <div>
                <label
                  htmlFor="skills"
                  className="block text-xs font-semibold text-slate-800 mb-1.5"
                >
                  Skills
                </label>
                <input
                  id="skills"
                  type="text"
                  required
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="e.g., Canva design, Notion organization, Google Sheets, writing"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 placeholder:text-slate-400"
                />
              </div>

              {/* Interests */}
              <div>
                <label
                  htmlFor="interests"
                  className="block text-xs font-semibold text-slate-800 mb-1.5"
                >
                  Interests
                </label>
                <input
                  id="interests"
                  type="text"
                  required
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  placeholder="e.g., Budgeting, meal prep, wedding planning, fitness"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 placeholder:text-slate-400"
                />
              </div>

              {/* Target Audience */}
              <div>
                <label
                  htmlFor="target-audience"
                  className="block text-xs font-semibold text-slate-800 mb-1.5"
                >
                  Target Audience
                </label>
                <input
                  id="target-audience"
                  type="text"
                  required
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  placeholder="e.g., Busy moms, college students, freelance designers"
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 placeholder:text-slate-400"
                />
              </div>

              {/* Preferred Product Type */}
              <div>
                <label
                  htmlFor="product-type"
                  className="block text-xs font-semibold text-slate-800 mb-1.5"
                >
                  Preferred Product Type
                </label>
                <select
                  id="product-type"
                  value={preferredProductType}
                  onChange={(e) => setPreferredProductType(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
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
                  className="block text-xs font-semibold text-slate-800 mb-1.5"
                >
                  Budget
                </label>
                <select
                  id="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
                >
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Most digital products require $0 upfront cost using free tools like
                  Canva, Notion, or Google Sheets.
                </p>
              </div>

              {error && (
                <div
                  role="alert"
                  className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2"
                >
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Finding Ideas...</span>
                    </>
                  ) : (
                    <>
                      <span>Find Ideas &amp; Validate</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </section>

          {/* Right Column: 02. Tailored Product Concepts */}
          <section className="lg:col-span-7 space-y-5">
            <div className="flex items-baseline justify-between">
              <h2 className="text-base font-bold text-slate-900">
                02. Tailored Product Concepts
              </h2>
              <span className="text-xs text-slate-500 font-mono">
                {ideas.length} ideas
              </span>
            </div>

            {/* Loading Skeleton */}
            {isLoading && (
              <div className="space-y-4">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="bg-white border border-slate-200 rounded-xl p-6 animate-pulse space-y-4"
                  >
                    <div className="h-3 w-40 bg-slate-200 rounded" />
                    <div className="h-5 w-3/4 bg-slate-200 rounded" />
                    <div className="h-16 w-full bg-slate-100 rounded" />
                    <div className="h-14 w-full bg-slate-100 rounded" />
                    <div className="h-20 w-full bg-slate-100 rounded" />
                  </div>
                ))}
              </div>
            )}

            {/* Clean Stack of Product Concept Cards */}
            {!isLoading &&
              ideas.map((idea, index) => (
                <article
                  key={idea.id || index}
                  className="bg-white border border-slate-200 rounded-xl p-6 space-y-5"
                >
                  {/* 1. Product Concept & Format */}
                  <div className="pb-4 border-b border-slate-100">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="font-mono font-semibold text-slate-900">
                        Idea 0{index + 1}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-medium text-slate-700">
                        {idea.productFormat}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-emerald-700">
                        Best Platform: {idea.bestPlatform}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-slate-500 mb-1">
                      Product Concept &amp; Format
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {idea.productConcept}
                    </h3>
                  </div>

                  {/* Dedicated Section: Best Platform Fit & Market Demand */}
                  <div className="pb-4 border-b border-slate-100">
                    <h4 className="text-xs font-semibold text-slate-800 mb-2">
                      Best Platform Fit &amp; Market Demand
                    </h4>
                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1.5">
                      <div className="text-xs sm:text-sm text-slate-900">
                        <span className="font-semibold">Best Platform: </span>
                        <span className="font-semibold text-emerald-800">
                          {idea.bestPlatform}
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <span className="font-semibold text-slate-800">
                          Platform Demand Insight:{" "}
                        </span>
                        {idea.platformDemandInsight}
                      </div>
                    </div>
                  </div>

                  {/* 2. Target Customer & 3. Problem Solved */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-4 border-b border-slate-100">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-800 mb-1">
                        Target Customer
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {idea.targetCustomer}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-slate-800 mb-1">
                        Problem Solved
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {idea.problemSolved}
                      </p>
                    </div>
                  </div>

                  {/* 4. Estimated Opportunity Score & 5. Mandatory Disclaimer */}
                  <div className="pb-4 border-b border-slate-100">
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-slate-800">
                        Estimated Opportunity Score
                      </span>
                      <span className="font-mono text-lg font-bold text-slate-900">
                        {idea.opportunityScore}{" "}
                        <span className="text-xs font-normal text-slate-500">
                          / 100
                        </span>
                      </span>
                    </div>

                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-2.5">
                      <div
                        className="h-full bg-slate-900"
                        style={{
                          width: `${Math.min(100, Math.max(0, idea.opportunityScore))}%`,
                        }}
                      />
                    </div>

                    <p className="text-xs text-slate-500">
                      This score is a preliminary estimate based on defined criteria and
                      not a guarantee of sales or profitability.
                    </p>
                  </div>

                  {/* 6. Actionable Validation Checklist */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-800 mb-2.5">
                      Actionable Validation Checklist
                    </h4>
                    <div className="space-y-2">
                      {idea.validationChecklist.map((step, stepIdx) => {
                        const key = `${idea.id}-${stepIdx}`;
                        const isDone = !!checkedSteps[key];

                        return (
                          <label
                            key={stepIdx}
                            onClick={() => toggleStep(idea.id, stepIdx)}
                            className={`flex items-start gap-3 p-2.5 rounded-lg border text-sm transition-colors cursor-pointer select-none ${
                              isDone
                                ? "bg-slate-50 border-slate-200 text-slate-400 line-through"
                                : "bg-white border-slate-200 hover:border-slate-300 text-slate-700"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={isDone}
                              onChange={() => {}}
                              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900 cursor-pointer"
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
              ))}
          </section>
        </div>
      </main>
    </div>
  );
}
