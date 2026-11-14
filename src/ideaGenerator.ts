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

export interface GenerateIdeasParams {
  skills: string;
  interests: string;
  targetAudience: string;
  targetPlatform: string;
  preferredProductType?: string;
  budget?: string;
}

export function generateClientIdeas({
  skills,
  interests,
  targetAudience,
  targetPlatform,
  preferredProductType = "Any Digital Product Type (AI Chooses Best Fit)",
  budget = "$0 (Zero Budget / Organic Tools Only)",
}: GenerateIdeasParams): ProductIdea[] {
  const chosen = (targetPlatform || "").trim();
  const s = skills.trim() || "Creative design and planning";
  const i = interests.trim() || "Organization and productivity";
  const a = targetAudience.trim() || "Busy beginners and creators";

  // Etsy winning niches
  if (chosen === "Etsy") {
    return [
      {
        id: `etsy-${Date.now()}-1`,
        productConcept: `Aesthetic ${i} & Budget Command Center — A pastel-themed, automated Google Sheets finance and planning tracker designed for instant copy.`,
        productFormat: "Budget & Finance Google Sheets & Excel Tracker",
        bestPlatform: "Etsy",
        platformDemandInsight:
          "Etsy shoppers search heavily for ready-to-use, aesthetic spreadsheet trackers and calculators that turn stressful budgeting into a visually satisfying daily routine.",
        winningFormula: {
          buyerMindset:
            "Etsy buyers prioritize high aesthetic appeal, instant gratification, and clean presentation. They want a file that works straight out of the box with zero complex formulas to configure.",
          topSellerSecrets:
            "Top Etsy sellers use cohesive pastel color palettes, clickable instant Google Sheets copy links in a 1-page PDF download, and a 3-minute video walkthrough embedded via link.",
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
        id: `etsy-${Date.now()}-2`,
        productConcept: `Complete ${i} Canva Brand & Social Template Kit — 45+ customizable, modern Canva templates for quick branding, daily planning, and client experience.`,
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
        id: `etsy-${Date.now()}-3`,
        productConcept: `Printable & Digital ${i} Master Routine Planner — A minimalist printable binder and Goodnotes-compatible digital planner with hyperlinked navigation tabs.`,
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

  // Gumroad winning niches
  if (chosen === "Gumroad") {
    return [
      {
        id: `gumroad-${Date.now()}-1`,
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
        id: `gumroad-${Date.now()}-2`,
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
        id: `gumroad-${Date.now()}-3`,
        productConcept: `Indie ${i} Prompt & Resource Power-Pack — 150+ rigorously tested prompts and workflow automations leveraging ${s} to 10x output.`,
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

  // Whop winning niches
  if (chosen === "Whop") {
    return [
      {
        id: `whop-${Date.now()}-1`,
        productConcept: `The ${i} Mastermind & Accountability Collective — A private Discord membership featuring weekly live sprints, hot-seat reviews, and an exclusive resource vault.`,
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
        id: `whop-${Date.now()}-2`,
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
      {
        id: `whop-${Date.now()}-3`,
        productConcept: `Creator ${i} Automation & Script Locker — A curated SaaS/tool suite with private scripts, Airtable/Make automations, and weekly office hours.`,
        productFormat: "Trading/Agency Tools & SaaS Access Hub",
        bestPlatform: "Whop",
        platformDemandInsight:
          "Whop has massive buyer demand for operational tools, agency resource packs, and software licensing access that save businesses tangible hours.",
        winningFormula: {
          buyerMindset:
            "Agency owners and creators on Whop are ROI-driven. If a tool saves 5 hours a week or drives revenue, they gladly pay recurring monthly fees without hesitation.",
          topSellerSecrets:
            "Top tool creators on Whop provide 1-click webhook templates, video troubleshooting libraries, and guaranteed 24-hour Discord technical support.",
          highConvertingAngle:
            "Offer a 'Done-With-You' onboarding call for annual subscribers to maximize retention and minimize churn.",
        },
        targetCustomer: a,
        problemSolved:
          "Removes technical friction by automating tedious workflows that waste hours of manual effort every week.",
        opportunityScore: 86,
        validationChecklist: [
          "Identify 3 repetitive manual tasks freelancers in your target audience spend over 3 hours doing every week.",
          "Build a working prototype using Google Apps Script, Make.com, or Airtable automations.",
          "Demo the automation in a 2-minute video to 5 agency owners and ask if they would pay $19/mo for access.",
        ],
      },
    ];
  }

  // Stan Store winning niches
  if (chosen === "Stan Store") {
    return [
      {
        id: `stan-${Date.now()}-1`,
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
      {
        id: `stan-${Date.now()}-2`,
        productConcept: `Rapid ${i} Video Mini-Course — A self-paced 45-minute video masterclass broken into 3-minute mobile-friendly lessons with accompanying cheat sheets.`,
        productFormat: "Creator-Led Mini-Courses & Video Modules",
        bestPlatform: "Stan Store",
        platformDemandInsight:
          "Stan Store's native video course player lets mobile shoppers watch bite-sized video lessons immediately after purchase right in their mobile browser.",
        winningFormula: {
          buyerMindset:
            "Mobile buyers don't want 20-hour academic courses. They want direct, energetic, actionable instruction from a creator they trust, digestible on their morning commute.",
          topSellerSecrets:
            "Keep videos under 5 minutes each, include downloadable audio-only MP3s, and embed clickable resource links directly underneath each lesson.",
          highConvertingAngle:
            "Add a 'Quick Start 24-Hour Roadmap' PDF download that guarantees the student can achieve their first concrete milestone today.",
        },
        targetCustomer: a,
        problemSolved:
          "Removes overwhelm by condensing complex skills into clear, 3-minute actionable video walkthroughs.",
        opportunityScore: 88,
        validationChecklist: [
          "Outline a 5-module curriculum where each module solves one specific step of the overall problem.",
          "Record Module 1 using your phone camera and natural lighting to confirm clear audio and visual pacing.",
          "Pre-sell 5 seats at $19 through an Instagram Story or TikTok poll before recording the remaining lessons.",
        ],
      },
      {
        id: `stan-${Date.now()}-3`,
        productConcept: `1:1 ${i} VIP Audit & Strategy Session — An exclusive 30-minute personalized consultation with automated calendar booking and post-call action summary.`,
        productFormat: "1:1 Coaching & Audit Bookings",
        bestPlatform: "Stan Store",
        platformDemandInsight:
          "Stan Store integrates 1-click calendar scheduling directly into the checkout, making it the most seamless way for social creators to monetize coaching and audits.",
        winningFormula: {
          buyerMindset:
            "High-intent followers want tailored, personalized advice for their specific situation rather than generalized digital templates.",
          topSellerSecrets:
            "Require an intake questionnaire upon booking, limit availability to 5 spots per week to create genuine scarcity, and send a recorded video recap within 24 hours.",
          highConvertingAngle:
            "Guarantee a customized 1-page action plan and 7 days of follow-up voice-note access via messaging.",
        },
        targetCustomer: a,
        problemSolved:
          "Gives clients laser-focused, custom clarity and an exact tailored roadmap in just 30 minutes.",
        opportunityScore: 84,
        validationChecklist: [
          "Configure your calendar availability in Stan Store for just 3 pilot slots this week.",
          "Post a short-form video sharing a case study or breakdown, offering the 3 spots to anyone who comments a keyword.",
          "Conduct the first session at an introductory rate of $49 to collect a glowing testimonial.",
        ],
      },
    ];
  }

  // Payhip winning niches
  if (chosen === "Payhip") {
    return [
      {
        id: `payhip-${Date.now()}-1`,
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
      {
        id: `payhip-${Date.now()}-2`,
        productConcept: `Niche ${i} Pattern & Craft Illustrated Guide — Step-by-step illustrated PDF patterns with printable cutting templates, video guides, and material checklists.`,
        productFormat: "Niche Hobby Patterns & Illustrated Guides",
        bestPlatform: "Payhip",
        platformDemandInsight:
          "Payhip has a massive, passionate community of hobbyists, sewists, crafters, and pattern makers who purchase downloadable hobby guides directly from makers.",
        winningFormula: {
          buyerMindset:
            "Hobbyists and crafters value clarity, accurate measurements, clear step-by-step photos, and printable templates they can lay out on their craft table.",
          topSellerSecrets:
            "Include high-resolution step photos, a printable supply checklist with exact store recommendations, and a troubleshooting FAQ for common beginner mistakes.",
          highConvertingAngle:
            "Provide both US Letter and A4 printable formats plus a digital interactive tablet edition with clickable video reference links.",
        },
        targetCustomer: a,
        problemSolved:
          "Prevents ruined projects and wasted materials by providing foolproof, tested patterns with exact beginner-friendly guidance.",
        opportunityScore: 87,
        validationChecklist: [
          "Share progress photos of your craft pattern or hobby project in specialized Facebook groups and Instagram craft tags.",
          "Invite 2 fellow hobbyists to test-run your instructions and verify that measurements are 100% accurate.",
          "List your completed pattern on Payhip and bundle it with a seasonal variation guide to maximize average order value.",
        ],
      },
      {
        id: `payhip-${Date.now()}-3`,
        productConcept: `Independent Educator ${i} Resource Vault — A monthly subscription giving members fresh teaching materials, lesson plans, and classroom activity sheets every month.`,
        productFormat: "Membership Subscriptions & Digital Downloads",
        bestPlatform: "Payhip",
        platformDemandInsight:
          "Payhip makes recurring membership billing effortless with built-in subscription tiers and automatic member downloads, ideal for independent teachers and niche coaches.",
        winningFormula: {
          buyerMindset:
            "Educators and instructors look for dependable, monthly resource drops that save them 10+ hours of prep time every single week.",
          topSellerSecrets:
            "Offer a low-cost monthly recurring plan ($9–$15/mo) with an annual discount (2 months free) and archive access to all past resource drops.",
          highConvertingAngle:
            "Include editable Canva source files alongside ready-to-print PDFs so instructors can customize materials with their own branding.",
        },
        targetCustomer: a,
        problemSolved:
          "Saves busy instructors from late-night lesson prep stress by delivering fresh, classroom-tested curriculum packs on the 1st of every month.",
        opportunityScore: 85,
        validationChecklist: [
          "Survey 10 teachers or instructors in your niche about what materials they spend the most hours creating from scratch.",
          "Assemble a 1-month sample pack of 3 high-impact activities or lesson worksheets.",
          "Set up a Payhip membership page offering founding members a locked-in $9/month subscription rate.",
        ],
      },
    ];
  }

  // Auto-Match across highest-converting marketplaces
  return [
    {
      id: `auto-${Date.now()}-1`,
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
      id: `auto-${Date.now()}-2`,
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
      id: `auto-${Date.now()}-3`,
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
      id: `auto-${Date.now()}-4`,
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
