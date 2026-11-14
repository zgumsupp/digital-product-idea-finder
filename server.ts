import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

function getProductToPlatformMappingInstruction(preferredProductType: string): string {
  const selection = preferredProductType.trim();

  if (selection.startsWith("Spreadsheets & Trackers")) {
    return `STRICT PRODUCT & PLATFORM MATCHING RULE — SPREADSHEETS & TRACKERS:
- The user selected: "${selection}".
- Every generated idea MUST be a Spreadsheet or Tracker (e.g., Google Sheets or Excel tool).
- Match every idea with "Etsy" or "Shopify" (or "Etsy / Shopify") in the "bestPlatform" field, and explain in "platformDemandInsight" how Etsy/Shopify have heavy search volume and buyer demand for ready-to-use, aesthetic spreadsheet trackers and calculators.`;
  }

  if (selection.startsWith("Templates & Design Assets")) {
    return `STRICT PRODUCT & PLATFORM MATCHING RULE — TEMPLATES & DESIGN ASSETS:
- The user selected: "${selection}".
- Every generated idea MUST be a Template or Design Asset (e.g., Canva templates, Notion templates, or graphic kits).
- Match every idea with "Etsy" or "Shopify" (or "Etsy / Shopify") in the "bestPlatform" field, and explain in "platformDemandInsight" how Etsy and Shopify thrive due to heavy aesthetic search volume and template bundle buyers.`;
  }

  if (selection.startsWith("E-Books, Guides, & Documentation")) {
    return `STRICT PRODUCT & PLATFORM MATCHING RULE — E-BOOKS, GUIDES, & DOCUMENTATION:
- The user selected: "${selection}".
- Every generated idea MUST be an E-Book, Guide, Playbook, or Documentation pack (PDF or Notion document).
- Match every idea with "Gumroad", "Payhip", or "Stan Store" (or "Gumroad / Payhip / Stan Store") in the "bestPlatform" field, and explain in "platformDemandInsight" why Gumroad, Payhip, or Stan Store converts best for direct digital guides, PDF playbooks, and creator downloads.`;
  }

  if (selection.startsWith("Video Courses & Paid Communities")) {
    return `STRICT PRODUCT & PLATFORM MATCHING RULE — VIDEO COURSES & PAID COMMUNITIES:
- The user selected: "${selection}".
- Every generated idea MUST be a Video Course, Cohort, or Paid Community / Membership.
- Match every idea strictly with "Whop" in the "bestPlatform" field, and explain in "platformDemandInsight" why Whop is the top marketplace due to high buyer demand for paid communities, structured courses, and built-in recurring membership access.`;
  }

  if (selection.startsWith("Software, Extensions, & Mini-Tools")) {
    return `STRICT PRODUCT & PLATFORM MATCHING RULE — SOFTWARE, EXTENSIONS, & MINI-TOOLS:
- The user selected: "${selection}".
- Every generated idea MUST be a Software tool, Browser Extension, Script, Automation, or Mini-Tool.
- Match every idea strictly with "Whop" in the "bestPlatform" field, and explain in "platformDemandInsight" why Whop is ideal due to built-in license key management, recurring software access, and high demand for specialized digital tools.`;
  }

  return `PRODUCT-TO-PLATFORM MAPPING RULE (ANY DIGITAL PRODUCT TYPE):
- The user selected "${selection || "Any Digital Product Type (AI Chooses Best Fit)"}".
- Generate 4 diverse, tailored digital product ideas and automatically match each idea's product type to the marketplace where it has the highest demand using this exact mapping rule:
  1. Spreadsheets & Trackers OR Templates & Design Assets -> Match with "Etsy" or "Shopify" (due to heavy aesthetic search volume).
  2. E-Books, Guides, & Documentation -> Match with "Gumroad", "Payhip", or "Stan Store".
  3. Video Courses, Paid Communities, OR Software, Extensions, & Mini-Tools -> Match with "Whop" (due to recurring access and community tools).`;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "1mb" }));

  app.post("/api/generate-ideas", async (req, res) => {
    try {
      const {
        skills = "",
        interests = "",
        targetAudience = "",
        preferredProductType = "Any Digital Product Type (AI Chooses Best Fit)",
        budget = "$0 (Zero Budget / Organic Tools Only)",
      } = req.body || {};

      if (!skills.trim() || !interests.trim() || !targetAudience.trim()) {
        return res.status(400).json({
          error:
            "Please fill in your Skills, Interests, and Target Audience to generate ideas.",
        });
      }

      const mappingInstruction =
        getProductToPlatformMappingInstruction(preferredProductType);

      const prompt = `Analyze the following creator inputs and generate 4 simple, practical digital product ideas:

Creator Profile:
- Skills: ${skills.trim()}
- Interests: ${interests.trim()}
- Target Audience: ${targetAudience.trim()}
- Preferred Product Type: ${preferredProductType.trim()}
- Budget: ${budget.trim() || "$0 (Zero Budget / Organic Tools Only)"}

${mappingInstruction}

Additional Instructions:
- Keep all language clear, friendly, simple, and actionable for a creator to get started quickly.
- Respect the user's stated budget (defaulting to free tools like Canva, Notion, Google Sheets, Google Docs, or free platform tiers).
- For each idea, provide:
  1. Product Concept & Format
  2. Best Platform (strictly following the product-to-platform mapping rule above)
  3. Platform Demand Insight: Explain clearly WHY this specific product type is highly demanded and selling well on that exact platform.
  4. Target Customer
  5. Problem Solved
  6. Estimated Opportunity Score out of 100
  7. Actionable Validation Checklist (3 to 4 simple, practical steps).`;

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          systemInstruction:
            "You are a practical digital product strategist. You strictly map digital product types to their best-performing marketplaces: Spreadsheets & Templates -> Etsy / Shopify; E-Books & Guides -> Gumroad / Payhip / Stan Store; Video Courses, Paid Communities, & Software -> Whop.",
          temperature: 0.7,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              ideas: {
                type: Type.ARRAY,
                description:
                  "Between 3 and 5 digital product ideas strictly following the product-to-platform mapping rules.",
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
                        "The concrete digital product format matching the selected product type (e.g., Google Sheets Tracker, Canva Template Kit, PDF Action Guide, Paid Community & Video Course, Mini-Tool).",
                    },
                    bestPlatform: {
                      type: Type.STRING,
                      description:
                        "The matched marketplace based on the mapping rule (e.g., 'Etsy / Shopify', 'Gumroad / Payhip / Stan Store', or 'Whop').",
                    },
                    platformDemandInsight: {
                      type: Type.STRING,
                      description:
                        "1-2 sentences explaining WHY this product is highly demanded and selling well on that specific platform.",
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
                      description: "Preliminary opportunity score out of 100 (1-100).",
                    },
                    validationChecklist: {
                      type: Type.ARRAY,
                      description:
                        "3 to 4 simple, beginner-friendly validation steps tailored to that product and platform.",
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
        return res.status(502).json({
          error: "The AI model returned an empty response. Please try again.",
        });
      }

      const parsed = JSON.parse(rawText.trim());
      const ideas = Array.isArray(parsed.ideas) ? parsed.ideas.slice(0, 5) : [];

      return res.json({ ideas });
    } catch (error) {
      console.error("Error generating digital product ideas:", error);
      const message =
        error instanceof Error
          ? error.message
          : "Failed to generate digital product ideas. Please try again.";
      return res.status(500).json({ error: message });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
