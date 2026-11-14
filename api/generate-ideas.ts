import { GoogleGenAI, Type } from "@google/genai";

interface WinningFormula {
  buyerMindset: string;
  topSellerSecrets: string;
  highConvertingAngle: string;
}

interface ProductIdea {
  id: string;
  productConcept: string;
  productFormat: string;
  bestPlatform: string;
  platformDemandInsight: string;
  winningFormula: WinningFormula;
  targetCustomer: string;
  problemSolved: string;
  opportunityScore: number;
  validationChecklist: string[];
}

function getPlatformWinningFormulaPrompt(targetPlatform: string, preferredProductType: string): string {
  const platform = (targetPlatform || "").trim();
  const productType = (preferredProductType || "").trim();
  const isSpecificPlatform = platform && platform !== "Auto-Match Best Platform";

  let directive = "";

  if (isSpecificPlatform) {
    directive = `STRICT TARGET PLATFORM REQUIREMENT:
The user explicitly selected "${platform}".
- EVERY generated idea MUST be designed specifically for "${platform}".
- The "bestPlatform" field for every idea MUST be strictly "${platform}".
- All ideas MUST strictly reflect ${platform}'s proven top-selling formats:`;

    if (platform === "Etsy") {
      directive += `
  * Etsy Winning Formats: Aesthetic & customizable Canva templates, printable planners, budget/finance Google Sheets & Excel trackers, wedding/event invites, and wall art.
  * Focus on high aesthetic visual appeal, instant downloadable convenience, and ready-to-use Canva/Sheets copy links.`;
    } else if (platform === "Gumroad") {
      directive += `
  * Gumroad Winning Formats: Practical Notion templates/dashboards, indie developer resources, prompt packs, coding/design assets, and tactical mini-guides/eBooks.
  * Focus on deep operational utility, developer/creator workflows, and 'Pay What You Want' lead magnet structures.`;
    } else if (platform === "Whop") {
      directive += `
  * Whop Winning Formats: Paid Discord/Telegram communities, trading/crypto/agency tools, SaaS access, fitness/lifestyle challenges, and exclusive membership hubs.
  * Focus on recurring membership access, peer accountability, live community engagement, and digital vaults.`;
    } else if (platform === "Stan Store") {
      directive += `
  * Stan Store Winning Formats: Creator-led mini-courses, 1:1 coaching/audit bookings, quick "link-in-bio" PDF playbooks, and social media growth kits.
  * Focus on frictionless mobile checkout (<30 seconds), short-form video audience conversion, and immediate micro-wins ($7–$19).`;
    } else if (platform === "Payhip") {
      directive += `
  * Payhip Winning Formats: Educational courses, membership subscriptions, digital downloads for independent educators, and niche hobby patterns/guides.
  * Focus on independent educators, craft/hobby makers, transparent pricing with direct file delivery, and coupon bundles.`;
    }
  } else {
    directive = `PLATFORM DIRECTIVE — AUTO-MATCH TO HIGHEST CONVERTING PLATFORM:
- The user selected "Auto-Match Best Platform".
- Evaluate the creator's skills, interests, and audience to match EACH generated idea with the platform where that format has the HIGHEST real-world transaction volume and buyer search intent:
  1. Etsy: Aesthetic & customizable Canva templates, printable planners, budget/finance Google Sheets & Excel trackers, wedding/event invites, and wall art.
  2. Gumroad: Practical Notion templates/dashboards, indie developer resources, prompt packs, coding/design assets, and tactical mini-guides/eBooks.
  3. Whop: Paid Discord/Telegram communities, trading/crypto/agency tools, SaaS access, fitness/lifestyle challenges, and exclusive membership hubs.
  4. Stan Store: Creator-led mini-courses, 1:1 coaching/audit bookings, quick "link-in-bio" PDF playbooks, and social media growth kits.
  5. Payhip: Educational courses, membership subscriptions, digital downloads for independent educators, and niche hobby patterns/guides.
- Assign the winning platform in "bestPlatform" (e.g., "Etsy", "Gumroad", "Whop", "Stan Store", or "Payhip").`;
  }

  if (productType && !productType.startsWith("Any Digital Product Type")) {
    directive += `\n\nUSER PREFERRED PRODUCT FORMAT:
- The user also selected a preference for: "${productType}".
- Align the generated product formats with this preference while strictly maintaining the winning niche requirements for the assigned platform.`;
  }

  return directive;
}

function generateDynamicFallbackIdeas(
  skills: string,
  interests: string,
  targetAudience: string,
  targetPlatform: string
): ProductIdea[] {
  const chosen = (targetPlatform || "").trim();
  const s = skills.trim() || "Creative design and planning";
  const i = interests.trim() || "Organization and productivity";
  const a = targetAudience.trim() || "Busy beginners and creators";

  if (chosen === "Etsy") {
    return [
      {
        id: "idea-etsy-1",
        productConcept: `Aesthetic ${i} & Budget Tracker — A pastel-themed, automated Google Sheets finance and planning tool designed for instant copy.`,
        productFormat: "Budget & Finance Google Sheets & Excel Tracker",
        bestPlatform: "Etsy",
        platformDemandInsight:
          "Etsy shoppers search heavily for ready-to-use, aesthetic spreadsheet trackers and calculators that turn stressful budgeting into a visually satisfying habit.",
        winningFormula: {
          buyerMindset:
            "Etsy buyers prioritize high aesthetic appeal, instant gratification, and clean presentation. They want a file that works straight out of the box with zero complex formulas to configure.",
          topSellerSecrets:
            "Top Etsy sellers use cohesive pastel color palettes, clickable instant Google Sheets copy links in a 1-page PDF download, and a 3-minute video walkthrough embedded via QR/link.",
          highConvertingAngle:
            "Bundle a matching sinking funds visualizer and paycheck allocator tab with automated progress badges to easily beat plain generic spreadsheets.",
        },
        targetCustomer: a,
        problemSolved:
          "Eliminates confusion and anxiety around money and planning with an effortless, visually pleasing dashboard.",
        opportunityScore: 91,
        validationChecklist: [
          "Search 'Google Sheets aesthetic budget tracker' on Etsy and analyze reviews on the top 10 listings.",
          "Build the primary summary tab in Google Sheets using free fonts and post a 15-second aesthetic video demo.",
          "Have 3 people in your target audience test filling in sample entries to ensure the template is completely intuitive.",
        ],
      },
      {
        id: "idea-etsy-2",
        productConcept: `Complete ${i} Canva Template & Client Experience Kit — 45+ customizable, modern Canva templates for quick branding and daily organization.`,
        productFormat: "Aesthetic & Customizable Canva Templates",
        bestPlatform: "Etsy",
        platformDemandInsight:
          "Etsy is the #1 marketplace for Canva templates where shoppers actively purchase drag-and-drop kits rather than starting from scratch.",
        winningFormula: {
          buyerMindset:
            "Buyers want to save dozens of design hours. They judge products purely on visual thumbnail quality and want direct 1-click Canva editing access without downloading heavy software.",
          topSellerSecrets:
            "Include 10+ realistic device mockups in the listing images, organize templates into pre-styled theme collections, and provide commercial-use license clarity in the description.",
          highConvertingAngle:
            "Provide both US Letter and A4 sizes plus free stock photo placeholders and color palette swap guides as an unannounced listing bonus.",
        },
        targetCustomer: a,
        problemSolved:
          "Saves non-designers dozens of hours of design frustration by offering plug-and-play Canva layouts that look professionally crafted.",
        opportunityScore: 88,
        validationChecklist: [
          "Study the bestselling Canva design kits on Etsy to identify what colorways and typography trends currently dominate.",
          "Design 5 core sample layouts in Canva for free and gather initial critique from a design or niche Facebook group.",
          "Test listing your sample pack at $9.99 with an introductory 25% launch discount to trigger early Etsy algorithm momentum.",
        ],
      },
      {
        id: "idea-etsy-3",
        productConcept: `Printable & Digital ${i} Master Planner — A minimalist printable binder and Goodnotes-compatible digital planner with hyperlinked navigation tabs.`,
        productFormat: "Printable Planners & Digital Journals",
        bestPlatform: "Etsy",
        platformDemandInsight:
          "Printable and iPad-compatible planners have immense evergreen search volume on Etsy throughout the entire year, especially for routine, wellness, and organization niches.",
        winningFormula: {
          buyerMindset:
            "Etsy planner shoppers crave structured mindfulness, tactile organization, and beautiful layouts that motivate daily habit consistency.",
          topSellerSecrets:
            "Top sellers provide both a printable PDF (Letter & A4) and a hyperlinked digital planner PDF optimized for Goodnotes and Notability, doubling their addressable audience.",
          highConvertingAngle:
            "Include a 'Sunday Reset' bonus insert and printable sticker sheets to boost perceived bundle value and secure 5-star customer reviews.",
        },
        targetCustomer: a,
        problemSolved:
          "Stops overwhelm by structuring chaotic daily routines into clean, actionable, bite-sized checklists.",
        opportunityScore: 86,
        validationChecklist: [
          "Examine negative reviews on competitor planners to spot layout oversights like cramped writing space or missing habit trackers.",
          "Export a 3-page test PDF and print it out to verify margins, readability, and ink-friendly contrast.",
          "Share printable sample sheets on Pinterest with direct pins linking to your target shop listing.",
        ],
      },
    ];
  }

  if (chosen === "Gumroad") {
    return [
      {
        id: "idea-gumroad-1",
        productConcept: `The Ultimate ${i} Operating System for Notion — A modular workspace featuring connected databases, automated tracking, and weekly review dashboards.`,
        productFormat: "Practical Notion Dashboard & System",
        bestPlatform: "Gumroad",
        platformDemandInsight:
          "Gumroad is the hub of choice for Notion creators, knowledge workers, and indies who actively search for powerful systemized productivity templates.",
        winningFormula: {
          buyerMindset:
            "Gumroad buyers love deep operational utility, slick database relationships, and minimal clutter. They look for systems that integrate cleanly into their daily work stack.",
          topSellerSecrets:
            "Gumroad buyers prefer a 'Pay What You Want' ($0+) lead magnet paired with a $19–$29 Pro version loaded with automations and mobile widget views.",
          highConvertingAngle:
            "Include pre-configured database formulas and one-click quick-add mobile buttons so users can capture tasks on the go in under 5 seconds.",
        },
        targetCustomer: a,
        problemSolved:
          "Replaces scattered apps and sticky notes with one unified, searchable Notion command center.",
        opportunityScore: 92,
        validationChecklist: [
          "Check the Notion category on Gumroad to compare feature sets and pricing tiers across bestselling operating systems.",
          "Publish a free 'Pay What You Want' starter edition on Gumroad to build an email list of initial users.",
          "Record a 60-second video walkthrough showing how the database formulas automate manual entry and post to Twitter/X.",
        ],
      },
      {
        id: "idea-gumroad-2",
        productConcept: `Tactical ${i} Playbook & Workflow Cheatsheets — An actionable, zero-fluff markdown & PDF documentation kit packed with tested SOPs and frameworks.`,
        productFormat: "Tactical Mini-Guide & Digital Playbook",
        bestPlatform: "Gumroad",
        platformDemandInsight:
          "Tech-savvy professionals and indie makers on Gumroad pay gladly for concise, actionable documentation and tactical guides that skip theoretical fluff.",
        winningFormula: {
          buyerMindset:
            "Gumroad readers want high-density insights, real-world examples, and immediate ROI. They value curated, battle-tested playbooks over lengthy academic textbooks.",
          topSellerSecrets:
            "Top earners offer transparent table of contents, sample chapter previews directly on the sales page, and lifetime access to future playbook updates.",
          highConvertingAngle:
            "Include ready-to-copy checklists, swipe files, and template snippets alongside the core playbook to make execution frictionless.",
        },
        targetCustomer: a,
        problemSolved:
          "Cuts down months of trial-and-error into a concise, 45-minute step-by-step implementation guide.",
        opportunityScore: 87,
        validationChecklist: [
          "Identify recurring pain points discussed in niche subreddits and developer communities related to your topic.",
          "Draft the 5-step core framework and share it as an educational thread on Twitter/X or LinkedIn.",
          "Pre-sell 10 copies at an early-bird price ($9) to validate buying demand before finalizing all chapters.",
        ],
      },
      {
        id: "idea-gumroad-3",
        productConcept: `Indie ${i} Prompt & Resource Power-Pack — 150+ rigorously tested prompts and workflow automations to 10x output.`,
        productFormat: "Prompt Packs & Indie Developer Resources",
        bestPlatform: "Gumroad",
        platformDemandInsight:
          "Gumroad has a thriving audience of builders, marketers, and solo creators hungry for curated prompt libraries and developer-friendly asset packs.",
        winningFormula: {
          buyerMindset:
            "Buyers want to immediately level up their output with ready-made prompts that produce reliable, high-quality results without prompt-engineering headaches.",
          topSellerSecrets:
            "Top sellers categorize prompts by practical use case, provide side-by-side output comparison screenshots, and supply copyable text files + Notion tables.",
          highConvertingAngle:
            "Offer a 'Plug & Play' CSV file ready for immediate import into Notion, Airtable, or custom automation pipelines.",
        },
        targetCustomer: a,
        problemSolved:
          "Stops wasted hours spent wrestling with bad prompts or blank-canvas paralysis.",
        opportunityScore: 85,
        validationChecklist: [
          "Curate 10 of your highest-performing prompts and publish them as a free teaser download on Gumroad.",
          "Measure how many free downloaders opt-in to your creator newsletter.",
          "Upsell the full 150+ prompt bundle via automated email sequence with a 48-hour founding member coupon.",
        ],
      },
    ];
  }

  if (chosen === "Whop") {
    return [
      {
        id: "idea-whop-1",
        productConcept: `The ${i} Mastermind & Accountability Collective — A private Discord membership featuring weekly live sprints, hot-seat coaching, and an exclusive resource vault.`,
        productFormat: "Paid Discord/Telegram Community & Membership Hub",
        bestPlatform: "Whop",
        platformDemandInsight:
          "Whop is the undisputed leader for monetizing communities and memberships due to seamless Discord/Telegram bot integration and automated subscription billing.",
        winningFormula: {
          buyerMindset:
            "Whop members buy direct access, accountability, and ongoing peer motivation. They understand that isolated digital files get abandoned, whereas an active community sustains momentum.",
          topSellerSecrets:
            "Top Whop communities utilize a free access tier that automatically funnels into a $29–$49/month VIP tier, paired with automated Discord role assignment and onboarding bots.",
          highConvertingAngle:
            "Host weekly accountability sprints with an automated leaderboard where top achievers win spotlight reviews and exclusive masterclass access.",
        },
        targetCustomer: a,
        problemSolved:
          "Solves the isolation and lack of follow-through by providing daily peer encouragement and structured live milestones.",
        opportunityScore: 93,
        validationChecklist: [
          "Explore top communities in your niche on Whop to observe how they balance free vs. paid channel permissions.",
          "Set up a free Discord server and host a 5-day live sprint with 15 pilot members to gauge engagement.",
          "Offer pilot participants a lifetime grandfathered monthly rate of $15/mo to convert them into founding paying members.",
        ],
      },
      {
        id: "idea-whop-2",
        productConcept: `30-Day ${i} Challenge & Resource Vault — A cohort-style recurring challenge hub with daily milestone worksheets, video check-ins, and peer discussion boards.`,
        productFormat: "Fitness/Lifestyle Challenge & Exclusive Vault",
        bestPlatform: "Whop",
        platformDemandInsight:
          "Structured challenges on Whop convert exceptionally well because time-bound programs create urgency and rapid transformation for members.",
        winningFormula: {
          buyerMindset:
            "Participants want a guided transformation with clear daily steps, milestones, and camaraderie with other people tackling the same goal.",
          topSellerSecrets:
            "Deliver challenge modules inside Whop's native courses app while keeping chat lively in Discord, and grant permanent vault access upon challenge completion.",
          highConvertingAngle:
            "Incorporate a 'Proof of Work' check-in channel where members post daily progress to unlock their weekly bonus templates.",
        },
        targetCustomer: a,
        problemSolved:
          "Eliminates procrastination and quitting halfway by breaking big intimidating goals into daily 15-minute bite-sized wins.",
        opportunityScore: 89,
        validationChecklist: [
          "Create a simple 30-day challenge curriculum roadmap in Notion or Google Docs.",
          "Poll your social followers or community members on what single outcome they would pay $20–$40 to achieve in 30 days.",
          "Pre-enroll 10 beta testers before producing the full daily video or worksheet content.",
        ],
      },
    ];
  }

  if (chosen === "Stan Store") {
    return [
      {
        id: "idea-stan-1",
        productConcept: `15-Minute ${i} Action Playbook — A hyper-concise, mobile-optimized PDF guide and routine checklist built for 1-click checkout directly in your link-in-bio.`,
        productFormat: "Quick 'Link-in-Bio' PDF Playbook & Checklist",
        bestPlatform: "Stan Store",
        platformDemandInsight:
          "Stan Store is optimized specifically for TikTok and Instagram traffic, delivering unmatched conversion rates on mobile impulse purchases priced under $20.",
        winningFormula: {
          buyerMindset:
            "Stan Store shoppers arrive from short-form video on mobile. They have short attention spans and buy on emotion, craving a quick, high-impact fix to an acute pain point.",
          topSellerSecrets:
            "Top Stan Store sellers use 1-tap Apple Pay/Google Pay checkout with zero form friction, clean single-page bio landing pages, and immediate digital delivery via SMS/email.",
          highConvertingAngle:
            "Hook shoppers with an irresistible under-$15 price point paired with an immediate 1-click order bump for an editable Canva template add-on.",
        },
        targetCustomer: a,
        problemSolved:
          "Provides a frictionless, instant solution to a single frustrating problem without having to navigate complicated websites or course portals.",
        opportunityScore: 90,
        validationChecklist: [
          "Analyze creators in your space using Stan Store to examine their hero product titles, video hooks, and checkout flows.",
          "Record 3 TikToks/Reels highlighting the exact frustration your playbook solves, directing viewers to your bio link.",
          "Offer the playbook for $7 during your launch week to capitalize on mobile impulse buying behavior.",
        ],
      },
    ];
  }

  if (chosen === "Payhip") {
    return [
      {
        id: "idea-payhip-1",
        productConcept: `Complete ${i} Master Curriculum — A comprehensive, self-paced video course with high-definition video modules, downloadable exercise workbooks, and lifetime updates.`,
        productFormat: "Educational Courses & Independent Educator Hub",
        bestPlatform: "Payhip",
        platformDemandInsight:
          "Payhip is beloved by independent educators and course creators because of 0% platform fees on courses, built-in EU VAT handling, and flexible file bundling.",
        winningFormula: {
          buyerMindset:
            "Payhip students are self-directed learners who appreciate structured, thoughtful education without aggressive marketing funnels or hidden recurring charges.",
          topSellerSecrets:
            "Payhip educators build high trust by providing free sample video lessons on the sales page, generous student coupon bundles, and direct student email messaging.",
          highConvertingAngle:
            "Bundle the complete video lessons with customizable starter project files and a private student Q&A gallery.",
        },
        targetCustomer: a,
        problemSolved:
          "Overcomes confusing fragmented YouTube tutorials by delivering an organized, progressive, step-by-step learning journey.",
        opportunityScore: 89,
        validationChecklist: [
          "Examine successful educational course listings on Payhip to assess curriculum design and standard pricing benchmarks.",
          "Release a 15-minute free foundation module on Payhip to establish instructor credibility and gather student feedback.",
          "Launch with an early-bird coupon code offering 35% off to the first 20 students.",
        ],
      },
    ];
  }

  // Default Auto-Match fallback
  return [
    {
      id: "idea-auto-1",
      productConcept: `Aesthetic ${i} & Budget Command Center — A pastel Google Sheets tool that auto-calculates sinking funds, bills, and monthly cash flow.`,
      productFormat: "Budget & Finance Google Sheets & Excel Tracker",
      bestPlatform: "Etsy",
      platformDemandInsight:
        "Etsy is the #1 marketplace for aesthetic spreadsheets where buyers seek beautifully styled tools that eliminate money management stress.",
      winningFormula: {
        buyerMindset:
          "Etsy shoppers buy with high aesthetic intent. They want a dashboard that looks like a work of art and provides instant peace of mind.",
        topSellerSecrets:
          "Top Etsy spreadsheet sellers provide pastel mockup graphics, instant 1-click copy links inside a PDF deliverable, and a 3-minute video guide.",
        highConvertingAngle:
          "Bundle an automated debt payoff snowball tab and sinking fund visualizer to easily beat basic static spreadsheets.",
      },
      targetCustomer: a,
      problemSolved:
        "Eliminates financial anxiety and messy math with a clean, automatic 5-minute visual system.",
      opportunityScore: 92,
      validationChecklist: [
        "Search 'aesthetic Google Sheets tracker' on Etsy and evaluate the top 5 bestselling products.",
        "Build the summary tab in Google Sheets and share a screen recording on Pinterest and TikTok.",
        "Have 3 peers test the onboarding instructions to ensure zero confusion.",
      ],
    },
    {
      id: "idea-auto-2",
      productConcept: `The ${i} Operating System for Freelancers — A comprehensive, modular Notion workspace with client pipelines, invoice generators, and project boards.`,
      productFormat: "Practical Notion Dashboard & Resource Kit",
      bestPlatform: "Gumroad",
      platformDemandInsight:
        "Gumroad buyers love deep utility and clean Notion setups that streamline their daily freelance and business operations.",
      winningFormula: {
        buyerMindset:
          "Gumroad users are tech-savvy creators and indies who value structured databases, automation formulas, and minimal distraction.",
        topSellerSecrets:
          "Top Gumroad creators offer a 'Pay What You Want' ($0+) lead magnet paired with a $25–$35 Pro version loaded with automations.",
        highConvertingAngle:
          "Include automated client invoice PDF generators and quick-capture mobile widgets to beat standard Notion templates.",
      },
      targetCustomer: a,
      problemSolved:
        "Consolidates scattered client messages, tasks, and billing into one unified Notion dashboard.",
      opportunityScore: 89,
      validationChecklist: [
        "Review top-selling freelance operating systems in Gumroad's productivity directory.",
        "Release a free 'Pay What You Want' invoice template on Gumroad to grow an early email list.",
        "Post a short demo on Twitter/X highlighting the relational database features.",
      ],
    },
    {
      id: "idea-auto-3",
      productConcept: `The ${i} Accountability Sprint & Member Hub — An active community with weekly live goal-setting sprints, resource lockers, and peer check-ins.`,
      productFormat: "Paid Discord/Telegram Community & Membership Hub",
      bestPlatform: "Whop",
      platformDemandInsight:
        "Whop excels for paid community access where members want ongoing interaction and peer accountability rather than static files.",
      winningFormula: {
        buyerMindset:
          "Whop members buy direct community access and peer motivation because external accountability keeps them committed to their goals.",
        topSellerSecrets:
          "Top creators offer a free community tier that funnels into a $29/mo VIP sprint, with automated Discord role assignment and weekly live check-in calls.",
        highConvertingAngle:
          "Host weekly sprints with public leaderboards where members who complete their milestones win bonus masterclasses.",
      },
      targetCustomer: a,
      problemSolved:
        "Fixes the common problem of buying a digital template and abandoning it after two days.",
      opportunityScore: 87,
      validationChecklist: [
        "Explore top productivity and growth hubs on Whop to observe membership structure.",
        "Host a free 5-day mini accountability challenge with 15 pilot testers in a Discord server.",
        "Poll pilot members on what live sessions or resources they would pay a monthly subscription to keep.",
      ],
    },
    {
      id: "idea-auto-4",
      productConcept: `5-Minute ${i} Reset Routine & Action Playbook — A mobile-first interactive PDF guide and Canva routine pack designed for instant 1-tap download from bio links.`,
      productFormat: "Quick 'Link-in-Bio' PDF Playbook & Canva Kit",
      bestPlatform: "Stan Store",
      platformDemandInsight:
        "Stan Store is the highest-converting platform for TikTok and Instagram creators, enabling 1-tap mobile impulse purchases under $20.",
      winningFormula: {
        buyerMindset:
          "Mobile viewers scrolling social feeds make fast impulse micro-purchases ($7–$17) for clear solutions that provide an immediate 15-minute win.",
        topSellerSecrets:
          "Top earners use 1-click Apple Pay checkout, single-scroll mobile landing pages, and instant Canva template links sent via email and SMS.",
        highConvertingAngle:
          "Offer a 'Sunday Evening 15-Minute Reset' routine bundle with printable PDFs plus customizable Canva templates for an irresistible under-$15 buy.",
      },
      targetCustomer: a,
      problemSolved:
        "Eliminates weekend overwhelm and Monday stress with a simple 15-minute guided step-by-step reset routine.",
      opportunityScore: 85,
      validationChecklist: [
        "Review creators in your niche using Stan Store to examine their hero product price points.",
        "Film a 15-second TikTok/Reel demonstrating your personal 15-minute reset routine with a bio link call-to-action.",
        "List the playbook at $9 to test initial conversion on mobile viewers.",
      ],
    },
  ];
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const {
      skills = "",
      interests = "",
      targetAudience = "",
      targetPlatform = "Auto-Match Best Platform",
      preferredProductType = "Any Digital Product Type (AI Chooses Best Fit)",
      budget = "$0 (Zero Budget / Organic Tools Only)",
    } = req.body || {};

    if (!skills.trim() || !interests.trim() || !targetAudience.trim()) {
      return res.status(400).json({
        error: "Please fill in your Skills, Interests, and Target Audience to generate ideas.",
      });
    }

    const apiKey =
      process.env.GEMINI_API_KEY ||
      process.env.GOOGLE_API_KEY ||
      process.env.GOOGLE_GENAI_API_KEY ||
      process.env.VITE_GEMINI_API_KEY ||
      "";

    const isMissingOrPlaceholderKey =
      !apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "";

    if (isMissingOrPlaceholderKey) {
      const fallbackIdeas = generateDynamicFallbackIdeas(
        skills,
        interests,
        targetAudience,
        targetPlatform
      );
      return res.status(200).json({ ideas: fallbackIdeas });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const platformDirective = getPlatformWinningFormulaPrompt(
      targetPlatform,
      preferredProductType
    );

    const prompt = `Analyze the creator profile and generate 3 to 4 tailored, high-converting digital product ideas strictly mapped to what actually sells best on each platform:

Creator Profile:
- Skills: ${skills.trim()}
- Interests: ${interests.trim()}
- Target Audience: ${targetAudience.trim()}
- Target Platform: ${targetPlatform.trim()}
- Preferred Product Type: ${preferredProductType.trim()}
- Budget: ${budget.trim() || "$0 (Zero Budget / Organic Tools Only)"}

${platformDirective}

MANDATORY PLATFORM-SPECIFIC WINNING NICHES:
- Etsy: Aesthetic & customizable Canva templates, printable planners, budget/finance Google Sheets & Excel trackers, wedding/event invites, and wall art.
- Gumroad: Practical Notion templates/dashboards, indie developer resources, prompt packs, coding/design assets, and tactical mini-guides/eBooks.
- Whop: Paid Discord/Telegram communities, trading/crypto/agency tools, SaaS access, fitness/lifestyle challenges, and exclusive membership hubs.
- Stan Store: Creator-led mini-courses, 1:1 coaching/audit bookings, quick "link-in-bio" PDF playbooks, and social media growth kits.
- Payhip: Educational courses, membership subscriptions, digital downloads for independent educators, and niche hobby patterns/guides.

FOR EACH IDEA, YOU MUST PROVIDE A DEDICATED "winningFormula" OBJECT:
- buyerMindset: The exact purchasing psychology and expectations of shoppers on that platform.
- topSellerSecrets: What top sellers on that platform include to get high sales (e.g., "Etsy buyers love clean aesthetic previews and instant Canva links" or "Gumroad buyers prefer 'Pay What You Want' lead magnets paired with a $19 Pro version").
- highConvertingAngle: A specific hook, unique bundle, or standout differentiator to beat the competition.`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          systemInstruction:
            "You are an elite digital product strategist and marketplace monetization expert. You strictly map user skills and interests to the proven top-selling formats for each specific platform: Etsy (Canva templates, printable planners, Sheets trackers), Gumroad (Notion systems, developer/design assets, prompt packs, playbooks), Whop (Paid Discord/Telegram communities, challenge vaults, software tools), Stan Store (creator-led mini courses, 1:1 audits, link-in-bio PDF playbooks), and Payhip (educational courses, independent educator bundles, hobby patterns). For every idea, diagnose the platform's exact buyer mindset, what top sellers include, and a high-converting differentiation angle.",
          temperature: 0.7,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              ideas: {
                type: Type.ARRAY,
                description:
                  "Between 3 and 4 digital product ideas strictly mapped to platform winning niches.",
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: {
                      type: Type.STRING,
                      description: "Unique short ID like idea-1, idea-2",
                    },
                    productConcept: {
                      type: Type.STRING,
                      description:
                        "Clear, catchy product title and a simple 1-2 sentence explanation of what it is.",
                    },
                    productFormat: {
                      type: Type.STRING,
                      description:
                        "The concrete digital product format matching the platform's winning niche (e.g., Canva Template Kit, Notion Dashboard, Google Sheets Tracker, Paid Discord Hub & Challenge, Quick PDF Playbook).",
                    },
                    bestPlatform: {
                      type: Type.STRING,
                      description:
                        "The exact matched marketplace (Etsy, Gumroad, Whop, Stan Store, or Payhip).",
                    },
                    platformDemandInsight: {
                      type: Type.STRING,
                      description:
                        "1-2 sentences explaining WHY this format has proven high sales volume on this platform.",
                    },
                    winningFormula: {
                      type: Type.OBJECT,
                      description:
                        "Platform winning formula explaining why this sells best on this platform.",
                      properties: {
                        buyerMindset: {
                          type: Type.STRING,
                          description:
                            "The exact buyer mindset and psychology on this platform.",
                        },
                        topSellerSecrets: {
                          type: Type.STRING,
                          description:
                            "What top sellers on this platform include to get high sales.",
                        },
                        highConvertingAngle: {
                          type: Type.STRING,
                          description:
                            "A specific hook, unique bundle, or standout differentiator to beat competition.",
                        },
                      },
                      required: [
                        "buyerMindset",
                        "topSellerSecrets",
                        "highConvertingAngle",
                      ],
                    },
                    targetCustomer: {
                      type: Type.STRING,
                      description: "Simple description of who will buy this.",
                    },
                    problemSolved: {
                      type: Type.STRING,
                      description:
                        "What everyday frustration or problem this solves for the buyer.",
                    },
                    opportunityScore: {
                      type: Type.INTEGER,
                      description:
                        "Preliminary opportunity score out of 100 (1-100).",
                    },
                    validationChecklist: {
                      type: Type.ARRAY,
                      description:
                        "3 to 4 actionable, practical validation steps tailored to that product and platform.",
                      items: {
                        type: Type.STRING,
                      },
                    },
                  },
                  required: [
                    "id",
                    "productConcept",
                    "productFormat",
                    "bestPlatform",
                    "platformDemandInsight",
                    "winningFormula",
                    "targetCustomer",
                    "problemSolved",
                    "opportunityScore",
                    "validationChecklist",
                  ],
                },
              },
            },
            required: ["ideas"],
          },
        },
      });

      const rawText = response.text;
      if (!rawText) {
        const fallback = generateDynamicFallbackIdeas(
          skills,
          interests,
          targetAudience,
          targetPlatform
        );
        return res.status(200).json({ ideas: fallback });
      }

      const parsed = JSON.parse(rawText.trim());
      const ideas = Array.isArray(parsed.ideas) ? parsed.ideas.slice(0, 5) : [];
      return res.status(200).json({ ideas });
    } catch (geminiError) {
      console.warn("Gemini API call failed, using dynamic fallback:", geminiError);
      const fallback = generateDynamicFallbackIdeas(
        skills,
        interests,
        targetAudience,
        targetPlatform
      );
      return res.status(200).json({ ideas: fallback });
    }
  } catch (error) {
    console.error("Error in generate-ideas handler:", error);
    const message =
      error instanceof Error
        ? error.message
        : "Failed to generate digital product ideas. Please try again.";
    return res.status(500).json({ error: message });
  }
}
