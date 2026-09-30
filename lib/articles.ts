import type { ArticleBlock } from '@/components/article-blocks'

export interface KnowledgeArticle {
  slug: string
  title: string
  standfirst: string
  category: string
  date?: string
  comingSoon?: boolean
  blocks: ArticleBlock[]
}

export const articles: KnowledgeArticle[] = [
  {
    "slug": "the-2026-battery-payback-reality",
    "title": "The 2026 Battery Payback Reality: Why Averages Fail Australian Homeowners",
    "standfirst": "Stop relying on misleading averages. What battery payback really looks like for Australian homeowners, and how to calculate your own.",
    "category": "Your numbers",
    "blocks": [
      {
        "type": "image",
        "src": "/images/concept-battery-payback-reality.jpg",
        "alt": "Illustration of a row of identical houses under a pink sun in which one house is drawn at a different scale with a larger battery on its wall."
      },
      {
        "type": "h2",
        "id": "shift",
        "text": "The 2026 Shift: Why Battery Economics Have Changed"
      },
      {
        "type": "p",
        "text": "The battery payback picture in 2026 looks fundamentally different from what most published estimates suggest — because the market itself has fundamentally changed."
      },
      {
        "type": "p",
        "text": "As recently as 2023, home batteries were a premium product for early adopters willing to pay a significant premium for energy independence. That era is over. RenewEconomy put it plainly: “2025 wasn’t so much a growth year for Australian batteries, it was the year they went mainstream.” And in 2026, the numbers changed."
      },
      {
        "type": "p",
        "text": "Modern system capacity has expanded considerably alongside falling hardware costs. Where early residential batteries topped out around 6–7 kWh, today’s standard installations commonly land between 10 kWh and 13 kWh — enough to cover a typical household through an evening peak and beyond. More storage means more opportunity to displace expensive grid electricity with energy you generated yourself."
      },
      {
        "type": "p",
        "text": "That brings us to self-consumption: the practice of storing solar energy during the day and using it when grid prices are highest. This single behavior is now the primary engine driving return on investment, not export credits or feed-in tariffs. And here is where generic payback estimates consistently fail Australian homeowners — they flatten out the enormous variation in how, when, and where households actually consume power. The numbers that matter most to your situation rarely match the national average."
      },
      {
        "type": "h2",
        "id": "math",
        "text": "The Math of 2026: Costs, Rebates, and the 6x Difference"
      },
      {
        "type": "p",
        "text": "In 2026, the cost of home battery storage has dropped sharply — but the real story is not just the lower price tag; it is the widening gap between what your exported solar earns and what grid power costs you."
      },
      {
        "type": "p",
        "text": "Installed costs for standard systems have come down meaningfully. A 10 kWh to 13 kWh battery fully installed now typically sits between $8,500 and $12,000 after federal rebates — a figure that would have looked ambitious just two years ago. And that figure already accounts for the federal Cheaper Home Batteries Program, which reduces eligible storage system costs by approximately 30%, effectively taking thousands of dollars off the upfront investment before you negotiate a single dollar with an installer."
      },
      {
        "type": "p",
        "text": "Most Australian retailers currently pay feed-in tariffs of just 3 to 8 cents per kilowatt-hour for exported solar energy. Peak grid electricity, on the other hand, costs 35 to 45 cents per kilowatt-hour depending on your state and retailer. That is a difference of roughly six times in energy value — meaning every kilowatt-hour you store and self-consume instead of export is worth significantly more than selling it back."
      },
      {
        "type": "callout",
        "label": "The principle",
        "text": "A battery does not generate returns by earning feed-in revenue; it generates returns by displacing expensive grid purchases. And as feed-in tariffs continue to compress in most states, that gap is only widening.",
        "tone": "copper"
      },
      {
        "type": "h2",
        "id": "range",
        "text": "Why Your Payback Period Could Range from 3 to 10 Years"
      },
      {
        "type": "p",
        "text": "The gap between a 3-year and a 10-year battery payback is not a rounding error — it reflects entirely different households, usage patterns, and state-level incentive stacks."
      },
      {
        "type": "p",
        "text": "For most Australian homes, the payback period for a solar battery in 2026 ranges between 5 and 10 years — a wide band that reflects differences in consumption volume, grid tariff structures, and how well a household’s daily rhythm actually matches what a battery does best."
      },
      {
        "type": "cards",
        "items": [
          {
            "label": "Standard case",
            "lines": [
              "A typical household drawing 20–25 kWh per day with moderate evening use and no EV. The battery displaces peak-rate imports, but cycling stays below maximum. State incentives help, but consumption profile caps how fast savings compound."
            ],
            "positive": false,
            "value": "5–8 YEARS",
            "sub": "Moderate household"
          },
          {
            "label": "High-performance case",
            "lines": [
              "Households with an EV or high evening loads see dramatically faster payback. An EV charging overnight from stored solar adds thousands annually in avoided costs. In WA, compressed feed-in tariffs make self-consumption even more valuable."
            ],
            "positive": true,
            "value": "3–4 YEARS",
            "sub": "Ev or high loads"
          }
        ]
      },
      {
        "type": "callout",
        "label": "Warning",
        "text": "If your daily draw is under 15 kWh, applying an average-based estimate will almost always make a battery look better than it actually is. The battery cycles less often, earns back less per cycle, and the fixed cost amortizes over fewer meaningful events.",
        "tone": "oxblood"
      },
      {
        "type": "h2",
        "id": "calculators",
        "text": "The Danger of Using Generic ROI Calculators"
      },
      {
        "type": "p",
        "text": "When asking whether a home battery is worth it, the answer depends almost entirely on data quality — and most online calculators are working with the wrong data."
      },
      {
        "type": "p",
        "text": "Load profiles are the core issue. Generic calculators assume a household draws power evenly throughout the day, but in practice, usage is clustered — morning showers, evening cooking, late-night entertainment. A battery that looks perfectly sized on a spreadsheet can turn out to be chronically underutilized because the household’s peak demand falls outside the battery’s optimal discharge window."
      },
      {
        "type": "p",
        "text": "Cycling assumptions compound the problem. Most generic tools assume 100% battery cycling every single day — a figure that flatters the math but rarely reflects reality. Weather variation, seasonal solar generation shifts, and household routine changes mean actual cycling rates often sit closer to 60–70%. Overestimating daily cycles inflates projected savings and quietly extends your real payback period by years, not months."
      },
      {
        "type": "p",
        "text": "Bill-level modeling is the antidote. What actually moves the needle is running different battery sizes against your own historical consumption data, tariff structure, and feed-in rates — not industry averages. A solar battery system sized for your specific load profile will consistently outperform a larger system chosen on optimistic assumptions."
      },
      {
        "type": "h2",
        "id": "maximizing",
        "text": "Maximizing Your Investment: Beyond the Break-Even Point"
      },
      {
        "type": "p",
        "text": "Getting the most from a home battery in 2026 has less to do with the brand than with how you run it."
      },
      {
        "type": "p",
        "text": "Running a battery storage payback calculator will show you a projected break-even date, but that figure assumes relatively static behavior. In practice, small operational decisions can meaningfully compress your payback timeline — or extend it if ignored."
      },
      {
        "type": "levers",
        "items": [
          {
            "title": "Appliance scheduling",
            "text": "Run dishwashers, washing machines, and dryers during peak solar generation hours to maximize the energy available for battery charging. Shifting these loads away from evening peak periods reduces grid draw and improves self-consumption rates."
          },
          {
            "title": "Virtual Power Plant (VPP) enrollment",
            "text": "VPP programs allow your battery to export stored energy during grid stress events in exchange for bill credits or payments. For eligible households, this participation can shave months off a payback period by generating revenue the original ROI estimate never counted."
          },
          {
            "title": "System sizing over brand loyalty",
            "text": "A correctly sized system — matched to your actual daily consumption — consistently outperforms an oversized premium unit in the same household."
          },
          {
            "title": "EV integration",
            "text": "Future-proofing your install with a battery that supports vehicle-to-home (V2H) charging can dramatically increase utilization rates, turning overnight EV charging into a controlled, cost-optimized cycle rather than a grid expense."
          }
        ]
      },
      {
        "type": "p",
        "text": "Households that combine appliance scheduling and VPP enrollment typically see a genuine reduction in effective payback of 12 to 18 months compared to a passive install."
      },
      {
        "type": "h2",
        "id": "bottom-line",
        "text": "The Bottom Line: Is a Battery Worth It for You in 2026?"
      },
      {
        "type": "p",
        "text": "A home battery is financially viable in 2026 if your peak grid rate exceeds 35 cents per kilowatt-hour — but that single threshold only tells part of the story."
      },
      {
        "type": "p",
        "text": "The 35c/kWh benchmark matters because it sets the floor for meaningful arbitrage. Below that rate, the savings you generate by displacing grid power simply cannot outpace the cost of capital over a realistic ownership period. Above it, every kilowatt-hour you shift from grid to battery starts compounding in your favor. In markets like New South Wales and South Australia, where peak tariffs routinely exceed 40–45c/kWh, the math has shifted decisively toward viability for households with the right usage profile."
      },
      {
        "type": "p",
        "text": "Federal rebates are a genuine tailwind right now. Under the Cheaper Home Batteries Program, subsidies currently cover roughly 30% of upfront system costs — a meaningful reduction that shortens payback by two to three years for many households. However, that relief is capacity-capped and demand is high. As RenewEconomy notes, program design changes under version 2.0 will affect both pricing and which configurations qualify, so acting before caps tighten is a legitimate consideration."
      },
      {
        "type": "p",
        "text": "Payback periods under six years are achievable, but they depend on stacking favorable conditions. High self-consumption rates — typically above 80% — combined with time-of-use tariff arbitrage get you close. Add an EV charging load and the economics improve further, because the battery is doing more work per day and recovering its cost across more use cycles."
      },
      {
        "type": "findings",
        "items": [
          {
            "title": "The 35c/kWh threshold is your first filter",
            "text": "If your peak grid rate falls below it, most battery configurations will struggle to deliver a compelling return regardless of system size or brand."
          },
          {
            "title": "Federal rebates reduce upfront cost by roughly 30%, but they are capacity-capped",
            "text": "Program availability under the Cheaper Home Batteries scheme is not guaranteed to remain at current levels throughout 2026."
          },
          {
            "title": "Sub-six-year payback requires high self-consumption or EV charging",
            "text": "Households without at least one demand accelerator should plan for a longer payback horizon when modeling their decision."
          },
          {
            "title": "Installer ROI claims need independent verification",
            "text": "Only a model built on your actual electricity bill data can confirm whether a quoted payback period reflects your real circumstances."
          }
        ]
      },
      {
        "type": "h2",
        "id": "stop-guessing",
        "text": "Stop Guessing: How to Model Your Real Payback Period"
      },
      {
        "type": "p",
        "text": "Your electricity bill is the only document that tells the truth about whether a home battery will pay off — not national averages, not installer estimates, and not headline rebate figures."
      },
      {
        "type": "p",
        "text": "Every insight covered in this article — peak rate thresholds, time-of-use arbitrage, rebate stacking, and dispatch strategy — only becomes actionable when mapped against your specific consumption patterns, your tariff structure, and your grid connection terms. Generic calculators cannot do that. They work from assumptions that may have no relationship to how your household actually draws power."
      },
      {
        "type": "p",
        "text": "Watts Better bridges that gap by using your actual bill data to rank hundreds of battery and solar configurations against your real usage profile. Rather than presenting a single payback estimate, the platform surfaces a ranked set of scenarios so you can see exactly which system size, which rebate combination, and which operating mode produces the strongest return for your address."
      },
      {
        "type": "p",
        "text": "Have your own data before you speak to an installer, and the conversation changes. When you walk in knowing your average daily consumption, your off-peak differential, and your modeled payback range, you are comparing quotes against a benchmark — not accepting the first number offered."
      },
      {
        "type": "cta",
        "text": "The 2026 battery market rewards preparation. Upload your electricity bill to Watts Better and receive a personalized ROI report built from your numbers — because your payback period deserves better than an average.",
        "links": [
          {
            "label": "Start your analysis",
            "href": "/calculator"
          }
        ]
      },
      {
        "type": "h2",
        "id": "comparison",
        "text": "Comparison: Solar-Only vs. Solar + Battery ROI"
      },
      {
        "type": "table",
        "headers": [
          "METRIC",
          "SOLAR-ONLY",
          "SOLAR + BATTERY"
        ],
        "rows": [
          [
            "Typical Payback",
            "3–5 years",
            "5–10 years (3–4 with EV/high loads)"
          ],
          [
            "Primary ROI Driver",
            "Daytime self-consumption + feed-in",
            "Evening peak-rate displacement (~6x export value)"
          ],
          [
            "Federal Rebate",
            "STCs",
            "Cheaper Home Batteries Program (~30% off)"
          ],
          [
            "VPP Eligibility",
            "No",
            "Yes — additional bill credits"
          ],
          [
            "Key Risk",
            "Feed-in tariff compression",
            "Oversizing beyond actual consumption"
          ]
        ]
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "What is the average battery payback period in Australia in 2026?",
            "a": "For most Australian homes, the payback period for a solar battery in 2026 ranges between 5 and 10 years. Households with an EV or high evening loads see dramatically faster payback."
          },
          {
            "q": "How much does a home battery cost in Australia in 2026?",
            "a": "A 10 kWh to 13 kWh battery fully installed now typically sits between $8,500 and $12,000 after federal rebates. Under the Cheaper Home Batteries Program, subsidies currently cover roughly 30% of upfront system costs."
          },
          {
            "q": "Are generic ROI calculators reliable?",
            "a": "Generic calculators assume a household draws power evenly throughout the day, but in practice, usage is clustered — morning showers, evening cooking, late-night entertainment. What actually moves the needle is running different battery sizes against your own historical consumption data, tariff structure, and feed-in rates — not industry averages."
          },
          {
            "q": "What is the 35c/kWh threshold?",
            "a": "A home battery is financially viable in 2026 if your peak grid rate exceeds 35 cents per kilowatt-hour. Below that rate, the savings you generate by displacing grid power simply cannot outpace the cost of capital over a realistic ownership period."
          },
          {
            "q": "Can I shorten my battery payback period?",
            "a": "Households that combine appliance scheduling and VPP enrollment typically see a genuine reduction in effective payback of 12 to 18 months compared to a passive install. An EV charging overnight from stored solar adds thousands annually in avoided costs."
          }
        ]
      },
      {
        "type": "h2",
        "id": "sources",
        "text": "Sources & Authoritative References"
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "RenewEconomy: 2025 Australian battery market mainstream adoption analysis",
            "href": "https://reneweconomy.com.au/"
          },
          {
            "label": "Clean Energy Regulator: Cheaper Home Batteries Program — program design and capacity caps",
            "href": "https://cer.gov.au/schemes/renewable-energy-target"
          },
          {
            "label": "Watts Better Analysis: Automated energy profile analysis and investment modelling report"
          }
        ]
      },
      {
        "type": "note",
        "text": "General information only. This article provides household-level guidance to support informed decision-making. It does not replace a site inspection, electrical design, financial advice, or advice from a qualified and appropriately accredited installer. Actual system suitability, cost, savings and installation requirements depend on site-specific circumstances."
      }
    ],
    "date": "September 2026"
  },
  {
    "slug": "your-tariff-can-make-or-break-your-solar-return",
    "title": "Your tariff can make or break your solar return",
    "standfirst": "Most homeowners focus on panel efficiency, inverter brands and install costs. But one of the biggest factors in your solar return is something you may never have considered: your electricity tariff’s clock.",
    "category": "Your numbers",
    "blocks": [
      {
        "type": "image",
        "src": "/images/concept-tariff-solar-return.jpg",
        "alt": "Illustration of a pink sun arcing across a day divided into three coloured bands, above a house with a battery on its wall."
      },
      {
        "type": "p",
        "text": "Time-of-use (TOU) tariffs charge different rates at different times of day. This can significantly affect the value of your solar generation, the attractiveness of battery storage, and whether changing plans may be more valuable than installing equipment."
      },
      {
        "type": "h2",
        "id": "what-is-tou",
        "text": "What is a time-of-use tariff?"
      },
      {
        "type": "cards",
        "items": [
          {
            "label": "Peak period",
            "lines": [
              "WHEN: late afternoon–evening (e.g. 4pm–9pm weekdays)",
              "RATE: ~30–45¢ per kWh",
              "WHY: highest demand on the grid"
            ],
            "positive": false,
            "value": "Highest price"
          },
          {
            "label": "Shoulder period",
            "lines": [
              "WHEN: daytime & early evening outside peak",
              "RATE: ~20–30¢ per kWh",
              "WHY: moderate demand"
            ],
            "positive": false,
            "value": "Mid-range price"
          },
          {
            "label": "Off-peak period",
            "lines": [
              "WHEN: overnight, sometimes midday (e.g. 10pm–7am)",
              "RATE: ~10–15¢ per kWh",
              "WHY: lowest demand on the grid"
            ],
            "positive": false,
            "value": "Lowest price"
          }
        ]
      },
      {
        "type": "p",
        "text": "Example weekday windows. Exact times and rates vary by retailer, state and specific tariff."
      },
      {
        "type": "h2",
        "id": "tou-solar-value",
        "text": "How TOU tariffs affect solar value"
      },
      {
        "type": "h3",
        "text": "The timing mismatch"
      },
      {
        "type": "p",
        "text": "Solar generates through the middle of the day — often during shoulder or off-peak pricing — while many households consume most energy in the morning and, especially, the evening peak."
      },
      {
        "type": "p",
        "text": "The value of self-consumption: under TOU pricing, every kWh of solar you consume directly saves you the import rate for that period rather than earning the feed-in rate:"
      },
      {
        "type": "equation",
        "parts": [
          {
            "value": "35¢",
            "label": "Peak import rate saved"
          },
          {
            "op": "−"
          },
          {
            "value": "8¢",
            "label": "Feed-in tariff earned"
          },
          {
            "op": "="
          },
          {
            "value": "27¢",
            "label": "Extra value per kwh self-consumed"
          }
        ]
      },
      {
        "type": "p",
        "text": "This makes maximising self-consumption more valuable under TOU tariffs than under flat rates. Example figures only."
      },
      {
        "type": "h2",
        "id": "tou-battery-value",
        "text": "How TOU tariffs affect battery value"
      },
      {
        "type": "findings",
        "items": [
          {
            "title": "Time-shift solar",
            "text": "Store excess daytime solar and discharge in the evening peak, avoiding expensive grid imports."
          },
          {
            "title": "Charge off-peak",
            "text": "Where your plan allows, charge from the grid overnight and discharge during peak — capturing the rate difference."
          },
          {
            "title": "Manage load",
            "text": "Cover high-cost periods from storage and potentially reduce demand charges on demand tariffs."
          }
        ]
      },
      {
        "type": "h2",
        "id": "stack-up",
        "text": "So — do batteries stack up on TOU?"
      },
      {
        "type": "cards",
        "items": [
          {
            "label": "More attractive when…",
            "lines": [
              "Peak rates are significantly higher than off-peak (e.g. 35¢ vs 12¢). Feed-in tariffs are low (5–10¢), making self-consumption valuable. Evening consumption is high, creating peak-import displacement opportunities. Solar generation exceeds daytime use, leaving surplus to store."
            ],
            "positive": true
          },
          {
            "label": "Less attractive when…",
            "lines": [
              "Rate differences are small (e.g. 28¢ vs 22¢) — limited arbitrage. Feed-in tariffs are generous (15–20¢) — exporting competes with storing. Evening consumption is low — little expensive demand to displace. You’re on a flat-rate tariff — no time-based pricing to exploit."
            ],
            "positive": false
          }
        ]
      },
      {
        "type": "h2",
        "id": "change-plans",
        "text": "Should you change your electricity plan?"
      },
      {
        "type": "p",
        "text": "Many homeowners remain on default or legacy tariffs without realising better-fitting options exist. Before installing solar or batteries, consider:"
      },
      {
        "type": "checklist",
        "items": [
          "Current structure — are you on flat-rate or time-of-use?",
          "Alternatives — do other plans price your usage pattern better?",
          "Feed-in comparisons — do some retailers pay more for exports?",
          "Peak alignment — do peak windows match your high-consumption hours?"
        ]
      },
      {
        "type": "p",
        "text": "Changing plans may sometimes deliver more immediate savings than installing additional equipment — which is why Watts Better shows the two effects separately."
      },
      {
        "type": "cta",
        "text": "See what your tariff is doing to your solar return. Watts Better analyses your actual tariff structure and models system and plan-change benefits separately, so nothing is blended into one opaque number.",
        "links": [
          {
            "label": "Analyse my tariff",
            "href": "/calculator"
          }
        ]
      },
      {
        "type": "h2",
        "id": "takeaways",
        "text": "Key takeaways"
      },
      {
        "type": "checklist",
        "items": [
          "Time-of-use tariffs charge different rates at different times of day",
          "TOU tariffs can significantly affect solar self-consumption value",
          "Batteries tend to perform better under TOU tariffs with large rate differences",
          "Low feed-in tariffs and high peak import rates increase battery attractiveness",
          "Changing electricity plans may sometimes deliver more value than installing equipment",
          "Understanding your tariff is essential before making solar or battery decisions"
        ]
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "What are typical peak, shoulder and off-peak times?",
            "a": "Peak is typically late afternoon to evening (e.g. 4pm–9pm weekdays), shoulder covers daytime and early evening outside peak, and off-peak is usually overnight (e.g. 10pm–7am). Exact windows vary by retailer, state and specific tariff."
          },
          {
            "q": "Is solar still worth it on a time-of-use tariff?",
            "a": "Generally yes, but timing matters. Solar generation often lands in shoulder or off-peak pricing periods while household consumption peaks in expensive evening periods. This makes self-consumption timing, and potentially battery storage, more important."
          },
          {
            "q": "Do batteries work with time-of-use tariffs?",
            "a": "They can work well: time-shift solar into the evening peak, charge off-peak where your plan allows, and manage load to cover high-cost periods. They are most attractive when peak rates far exceed off-peak rates and evening consumption is high."
          },
          {
            "q": "Should I change plans before installing solar?",
            "a": "It is worth comparing first. Check your current structure, alternatives that price your usage pattern better, feed-in comparisons and peak alignment — a plan change can sometimes deliver more immediate savings than new equipment."
          },
          {
            "q": "Does time-of-use pricing change feed-in tariff value?",
            "a": "It changes the trade-off: every kWh you self-consume saves the import rate for that period rather than earning the feed-in rate, so low feed-in tariffs combined with high peak import rates make self-consumption — and storage — more valuable."
          }
        ]
      },
      {
        "type": "h2",
        "id": "sources",
        "text": "Sources"
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "Australian Energy Regulator — Energy Made Easy (independent plan and feed-in tariff comparison)",
            "href": "https://www.energymadeeasy.gov.au/"
          },
          {
            "label": "Australian Government — Electricity pricing plans and tariffs (energy.gov.au)",
            "href": "https://www.energy.gov.au/solar/financial-benefits-solar/electricity-pricing-plans-and-tariffs"
          },
          {
            "label": "Australian Energy Market Commission — retail energy competition and pricing reviews",
            "href": "https://www.aemc.gov.au/"
          }
        ]
      },
      {
        "type": "cta",
        "text": "Modelled against your actual tariff — not averages. Upload your bill and see how your peak, shoulder and off-peak rates shape solar value, battery economics and plan-change potential.",
        "links": [
          {
            "label": "Analyse your tariff and usage",
            "href": "/calculator"
          }
        ]
      },
      {
        "type": "note",
        "text": "General information only. This article provides household-level guidance to support informed decision-making. It does not replace a site inspection, electrical design, financial advice, or advice from a qualified and appropriately accredited installer. Actual system suitability, cost, savings and installation requirements depend on site-specific circumstances."
      }
    ],
    "date": "August 2026"
  },
  {
    "slug": "how-to-compare-solar-and-battery-quotes-in-brisbane",
    "title": "How to compare solar and battery quotes in Brisbane",
    "standfirst": "The cheapest quote is not always the cheapest system. Compare system size, equipment, assumptions, warranties, installation scope and after-sales support.",
    "category": "Your numbers",
    "blocks": [
      {
        "type": "image",
        "src": "/images/concept-compare-quotes-brisbane.jpg",
        "alt": "Illustration of two stacks of documents side by side with a magnifying glass examining the taller stack."
      },
      {
        "type": "p",
        "text": "A quote is not just a price."
      },
      {
        "type": "p",
        "text": "It is a set of assumptions about your energy use, system size, equipment, installation requirements, future tariffs and expected performance."
      },
      {
        "type": "p",
        "text": "Two quotes can look similar while describing very different systems."
      },
      {
        "type": "p",
        "text": "The cheapest quote is not necessarily the lowest-cost system over its working life."
      },
      {
        "type": "h2",
        "id": "compare-the-same-information",
        "text": "Compare the same information"
      },
      {
        "type": "p",
        "text": "Before comparing prices, check whether each quote clearly identifies:"
      },
      {
        "type": "label",
        "text": "The solar system"
      },
      {
        "type": "checklist",
        "items": [
          "Panel brand and model",
          "Number of panels",
          "Total system size in kW",
          "Inverter brand and model",
          "Estimated annual generation",
          "Expected system orientation and assumptions",
          "Monitoring equipment",
          "Product and performance warranties"
        ]
      },
      {
        "type": "label",
        "text": "The battery"
      },
      {
        "type": "checklist",
        "items": [
          "Battery brand and model",
          "Nominal capacity",
          "Usable capacity",
          "Continuous power output",
          "Backup capability",
          "Whether backup circuits are included",
          "Battery warranty terms",
          "Expected capacity at the end of the warranty period",
          "Monitoring and control system",
          "Whether the system is VPP-capable"
        ]
      },
      {
        "type": "p",
        "text": "A battery advertised as 13.5 kWh may not provide 13.5 kWh of usable storage."
      },
      {
        "type": "p",
        "text": "Make sure every quote uses the same basis when comparing battery capacity."
      },
      {
        "type": "label",
        "text": "The installation"
      },
      {
        "type": "checklist",
        "items": [
          "Installation location",
          "Roof access requirements",
          "Mounting system",
          "Cable routes",
          "Switchboard requirements",
          "Metering requirements",
          "Additional electrical work",
          "Network application or connection requirements",
          "Any exclusions",
          "Expected installation date",
          "What happens if the site assessment changes the design"
        ]
      },
      {
        "type": "p",
        "text": "If one quote leaves important items vague, the prices may not be comparable."
      },
      {
        "type": "h2",
        "id": "check-the-installer-not-just-the-brand",
        "text": "Check the installer — not just the brand"
      },
      {
        "type": "p",
        "text": "For systems claiming Australian Government rebates, the installer and designer must meet the applicable accreditation and licensing requirements."
      },
      {
        "type": "p",
        "text": "The Australian Government recommends checking the installer's Solar Accreditation Australia accreditation number and status before seeking a quote."
      },
      {
        "type": "p",
        "text": "Accreditation applies to the relevant individual designer or installer, not simply to the company name."
      },
      {
        "type": "p",
        "text": "Ask:"
      },
      {
        "type": "checklist",
        "items": [
          "Who will physically perform the work?",
          "Who will attend the site?",
          "Who will complete testing and commissioning?",
          "Who will sign off the installation?",
          "Does the responsible person hold the relevant SAA accreditation?",
          "If a battery is included, does the person hold the appropriate battery accreditation?",
          "Does the installer hold the required Queensland electrical licence?",
          "Who will handle warranty and service issues?",
          "Who will be responsible if the installation needs rectification?"
        ]
      },
      {
        "type": "p",
        "text": "You can check accreditation through Solar Accreditation Australia."
      },
      {
        "type": "p",
        "text": "The New Energy Tech Consumer Code is another useful signal when comparing retailers. It is a voluntary consumer-protection code, so approval is not a substitute for checking the actual installer, licence, scope of work and contract."
      },
      {
        "type": "h2",
        "id": "check-the-products",
        "text": "Check the products"
      },
      {
        "type": "p",
        "text": "The Australian Government advises homeowners to check whether the relevant panels, inverters and batteries appear on the applicable approved product lists."
      },
      {
        "type": "p",
        "text": "Also check:"
      },
      {
        "type": "checklist",
        "items": [
          "Whether the exact model is listed, not just the brand",
          "Whether the product listing is current",
          "Whether the quoted model matches the installed model",
          "Whether the manufacturer provides Australian support",
          "Whether replacement parts are available",
          "What is covered by the product warranty",
          "What is covered by the installation warranty",
          "Who handles a warranty claim if the retailer or installer is no longer trading"
        ]
      },
      {
        "type": "p",
        "text": "A familiar brand name is not enough."
      },
      {
        "type": "p",
        "text": "The model, warranty, support arrangements and installation quality all matter."
      },
      {
        "type": "h2",
        "id": "look-beyond-payback",
        "text": "Look beyond payback"
      },
      {
        "type": "p",
        "text": "Payback depends on assumptions."
      },
      {
        "type": "p",
        "text": "Ask what has been used for:"
      },
      {
        "type": "list",
        "items": [
          "Electricity prices",
          "Feed-in tariff",
          "Annual energy use",
          "Daily usage pattern",
          "Solar generation",
          "Battery cycling",
          "Battery efficiency",
          "Battery degradation",
          "Future tariff changes",
          "Rebate value",
          "Installation cost",
          "Financing cost",
          "Network limitations",
          "Expected system life"
        ]
      },
      {
        "type": "p",
        "text": "A shorter quoted payback is not automatically better if it depends on optimistic assumptions."
      },
      {
        "type": "p",
        "text": "For example, a payback calculation may look attractive because it assumes:"
      },
      {
        "type": "list",
        "items": [
          "The battery cycles fully every day",
          "Electricity prices remain unchanged",
          "The feed-in tariff remains constant",
          "All generated solar is used or exported at the expected value",
          "There are no future system restrictions",
          "No additional installation work is required"
        ]
      },
      {
        "type": "p",
        "text": "Ask the installer to show you the assumptions behind the result."
      },
      {
        "type": "h2",
        "id": "check-what-savings-means",
        "text": "Check what “savings” means"
      },
      {
        "type": "p",
        "text": "Different quotes may use the word “savings” to describe different things."
      },
      {
        "type": "p",
        "text": "Clarify whether the figure includes:"
      },
      {
        "type": "list",
        "items": [
          "Reduced grid purchases",
          "Feed-in credits",
          "Battery arbitrage",
          "Rebate or STC value",
          "Finance costs",
          "Supply charges",
          "Maintenance costs",
          "Future battery replacement",
          "Changes to your electricity tariff"
        ]
      },
      {
        "type": "p",
        "text": "Ask for the expected annual bill impact, not only the total lifetime savings figure."
      },
      {
        "type": "p",
        "text": "A lifetime number can look impressive while hiding the assumptions that make it possible."
      },
      {
        "type": "h2",
        "id": "ask-what-happens-when-the-quote-changes",
        "text": "Ask what happens when the quote changes"
      },
      {
        "type": "p",
        "text": "Before signing, clarify:"
      },
      {
        "type": "checklist",
        "items": [
          "Whether a switchboard upgrade is included",
          "Whether extra cable runs cost more",
          "Whether roof access affects the price",
          "Whether difficult access or scaffolding is included",
          "Whether network requirements are included",
          "Whether meter changes are included",
          "What happens if the selected battery is unavailable",
          "Whether the rebate estimate can change before installation",
          "Whether the quoted system is the final design",
          "Who pays if additional work becomes necessary",
          "What happens if the installation date moves into a different rebate period"
        ]
      },
      {
        "type": "p",
        "text": "Ask for any verbal promise to be included in the written quote or contract."
      },
      {
        "type": "p",
        "text": "The Australian Competition and Consumer Commission warns consumers not to feel pressured into purchasing solar or battery systems and recommends obtaining enough information to compare the options properly."
      },
      {
        "type": "h2",
        "id": "brisbane-specific-questions",
        "text": "Brisbane-specific questions"
      },
      {
        "type": "p",
        "text": "If you are in Brisbane or connected through the Energex network, ask how the proposal deals with:"
      },
      {
        "type": "checklist",
        "items": [
          "Export limits",
          "Network approval",
          "Inverter settings",
          "Single-phase or three-phase supply",
          "Switchboard capacity",
          "Battery backup configuration",
          "Where the battery will be located",
          "Whether the proposed system can export as modelled",
          "Whether the expected savings depend on a network approval that has not yet been confirmed"
        ]
      },
      {
        "type": "p",
        "text": "The system on the quote needs to be suitable for your property and connection — not just technically available from the supplier."
      },
      {
        "type": "h2",
        "id": "compare-the-support-not-just-the-hardware",
        "text": "Compare the support, not just the hardware"
      },
      {
        "type": "p",
        "text": "Ask:"
      },
      {
        "type": "checklist",
        "items": [
          "Who do I contact if the system underperforms?",
          "Is there a local service team?",
          "Who manages manufacturer warranty claims?",
          "How quickly are faults usually responded to?",
          "What happens if the installer closes or changes ownership?",
          "Will I receive system documentation after commissioning?",
          "Will I receive monitoring access?",
          "What information will be provided about the battery and backup circuits?",
          "Will the installer cooperate with an independent post-installation inspection?"
        ]
      },
      {
        "type": "p",
        "text": "A solar or battery system may operate for many years."
      },
      {
        "type": "p",
        "text": "The quality of support after installation matters as much as the equipment selected on the day."
      },
      {
        "type": "h2",
        "id": "a-better-way-to-compare",
        "text": "A better way to compare"
      },
      {
        "type": "p",
        "text": "Use your own energy analysis as the benchmark."
      },
      {
        "type": "p",
        "text": "Then compare each quote against:"
      },
      {
        "type": "checklist",
        "items": [
          "The solar system size your home appears to need",
          "The battery size your household can realistically use",
          "The assumptions behind the savings claim",
          "The tariff used in the modelling",
          "The installation requirements",
          "The network requirements",
          "The warranties and support arrangements",
          "The evidence you will receive after installation"
        ]
      },
      {
        "type": "p",
        "text": "You do not need to choose the cheapest quote."
      },
      {
        "type": "p",
        "text": "You need to understand what you are being offered and whether the proposal is supported by reasonable assumptions."
      },
      {
        "type": "h2",
        "id": "before-you-request-an-introduction",
        "text": "Before you request an introduction"
      },
      {
        "type": "p",
        "text": "Watts Better can help you clarify the numbers before you compare installer proposals."
      },
      {
        "type": "p",
        "text": "Start with your electricity bill."
      },
      {
        "type": "p",
        "text": "Then discuss the result in a 15-minute chat and complete the relevant Photo Capture so the physical starting point is clearer."
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "See what your numbers show — then book a 15-minute chat.",
        "links": [
          {
            "label": "See what your numbers show",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "p",
        "text": "You do not need to request an installer introduction to receive or discuss your analysis."
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "What should I compare first in two solar quotes?",
            "a": "Compare the same information on both. System size, equipment, assumptions, warranties, installation scope and after-sales support should line up before price is compared."
          },
          {
            "q": "Why is the cheapest quote not always the cheapest system?",
            "a": "A lower price can reflect a smaller system, different equipment, a narrower installation scope or thinner support after the sale. Comparing headline price alone hides those differences."
          },
          {
            "q": "What does a savings figure in a quote actually mean?",
            "a": "It is an assumption, not a promise. Ask which tariff, usage pattern and feed-in rate were used, because different assumptions produce very different estimates."
          },
          {
            "q": "What should I ask about changes after I sign?",
            "a": "Ask what happens if the site differs from the assumptions used, such as roof condition, switchboard work, cable runs or travel, so variation charges do not arrive unexpectedly."
          }
        ]
      },
      {
        "type": "h2",
        "id": "article-sources",
        "text": "Article sources"
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "Australian Government Solar Guide — choosing a solar retailer and installer",
            "href": "https://www.energy.gov.au/solar/solar-retailers-and-installation/choose-your-solar-retailer-and-installer"
          },
          {
            "label": "Solar Accreditation Australia — accreditation status check"
          },
          {
            "label": "New Energy Tech Consumer Code — approved sellers",
            "href": "https://www.newenergytech.org.au/about-the-netcc"
          },
          {
            "label": "ACCC — solar panels and home batteries",
            "href": "https://www.accc.gov.au/consumers/specific-products-and-activities/solar-panel-systems-and-home-batteries"
          }
        ]
      },
      {
        "type": "h2",
        "id": "want-to-understand-your-own-position",
        "text": "Want to understand your own position?"
      },
      {
        "type": "p",
        "text": "A general article can explain the principles."
      },
      {
        "type": "p",
        "text": "Your electricity bill can show what those principles mean for your household."
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "Run your analysis — then book a 15-minute chat.",
        "links": [
          {
            "label": "Run your analysis",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "p",
        "text": "You do not need to request an installer introduction to receive or discuss your analysis."
      },
      {
        "type": "note",
        "text": "General information only. This article provides household-level guidance to support informed decision-making. It does not replace a site inspection, electrical design, financial advice, or advice from a qualified and appropriately accredited installer. Actual system suitability, cost, savings and installation requirements depend on site-specific circumstances."
      }
    ],
    "date": "September 2026"
  },
  {
    "slug": "why-one-installer-introduction-can-be-better-than-three-quotes",
    "title": "Why one installer introduction can be better than three quotes",
    "standfirst": "More quotes do not automatically create more clarity. A useful benchmark can be more valuable than several proposals built on different assumptions.",
    "category": "Your numbers",
    "blocks": [
      {
        "type": "image",
        "src": "/images/concept-one-installer-introduction.jpg",
        "alt": "Illustration of three tangled paths merging into one straight path leading to a single house."
      },
      {
        "type": "p",
        "text": "Most homeowners are told to get three solar quotes."
      },
      {
        "type": "p",
        "text": "That advice makes sense."
      },
      {
        "type": "p",
        "text": "Comparing several suppliers can help you understand pricing, equipment and different approaches."
      },
      {
        "type": "p",
        "text": "But three quotes are only useful when you can compare what is actually being offered."
      },
      {
        "type": "p",
        "text": "If each quote uses a different system size, tariff, battery assumption, savings estimate and installation scope, you may end up with three different answers and no clear way to decide between them."
      },
      {
        "type": "p",
        "text": "The problem is not always too few quotes."
      },
      {
        "type": "p",
        "text": "Sometimes it is too little clarity."
      },
      {
        "type": "h2",
        "id": "three-quotes-can-create-more-questions",
        "text": "Three quotes can create more questions"
      },
      {
        "type": "p",
        "text": "Three quotes may use different:"
      },
      {
        "type": "list",
        "items": [
          "Solar system sizes",
          "Panel brands",
          "Inverter models",
          "Battery capacities",
          "Usable battery assumptions",
          "Tariffs",
          "Feed-in tariffs",
          "Annual usage estimates",
          "Payback assumptions",
          "Installation inclusions",
          "Switchboard allowances",
          "Network assumptions",
          "Warranty terms"
        ]
      },
      {
        "type": "p",
        "text": "One installer may recommend solar only."
      },
      {
        "type": "p",
        "text": "Another may recommend a large battery."
      },
      {
        "type": "p",
        "text": "A third may recommend a smaller system with the option to add storage later."
      },
      {
        "type": "p",
        "text": "All three may describe their proposal as the best solution."
      },
      {
        "type": "p",
        "text": "Without an independent starting point, the homeowner is left comparing sales proposals rather than comparing like with like."
      },
      {
        "type": "h2",
        "id": "the-australian-government-s-advice",
        "text": "The Australian Government's advice"
      },
      {
        "type": "p",
        "text": "The Australian Government Solar Guide recommends getting quotes from at least three suppliers and asking for a site visit."
      },
      {
        "type": "p",
        "text": "That is sensible advice."
      },
      {
        "type": "p",
        "text": "Homeowners should have the freedom to compare providers and pricing."
      },
      {
        "type": "p",
        "text": "But the quality of the comparison depends on whether the quotes are based on consistent information."
      },
      {
        "type": "p",
        "text": "The Guide also recommends checking:"
      },
      {
        "type": "checklist",
        "items": [
          "System size",
          "Equipment",
          "Warranties",
          "Installation requirements",
          "Network limits",
          "Monitoring",
          "After-sales support",
          "Contract terms"
        ]
      },
      {
        "type": "p",
        "text": "Watts Better does not suggest that homeowners should never obtain multiple quotes."
      },
      {
        "type": "p",
        "text": "The question is whether you are ready to understand and compare them."
      },
      {
        "type": "h2",
        "id": "what-one-considered-introduction-means",
        "text": "What one considered introduction means"
      },
      {
        "type": "p",
        "text": "Watts Better takes a different approach."
      },
      {
        "type": "p",
        "text": "Before any installer introduction is requested, you can:"
      },
      {
        "type": "checklist",
        "items": [
          "Complete your energy analysis",
          "Review your report",
          "Book a 15-minute chat",
          "Discuss the numbers and your questions",
          "Complete the relevant Photo Capture",
          "Decide whether you want one installer introduction"
        ]
      },
      {
        "type": "p",
        "text": "The installer is not receiving an unprepared enquiry."
      },
      {
        "type": "p",
        "text": "They are receiving a homeowner who has already considered:"
      },
      {
        "type": "list",
        "items": [
          "Their energy usage",
          "Their tariff",
          "Their solar position",
          "Whether a battery appears worthwhile",
          "The questions that need to be answered",
          "The physical information that can be captured before the conversation"
        ]
      },
      {
        "type": "p",
        "text": "That creates a more focused starting point for everyone."
      },
      {
        "type": "h2",
        "id": "why-one-introduction-can-be-useful",
        "text": "Why one introduction can be useful"
      },
      {
        "type": "findings",
        "items": [
          {
            "title": "You start with a benchmark",
            "text": "Your report gives you an independent reference point before you see an installer proposal. You can compare the installer's recommendation against the energy pattern identified in your report, the system sizes worth considering, the battery case, the assumptions used, and the questions you already know need answering. You are not starting with a blank page."
          },
          {
            "title": "You avoid comparing different assumptions",
            "text": "If an installer recommends a larger or smaller system than expected, you can ask why. If the quoted payback differs from your report, you can ask which assumptions changed. If a battery has been added or removed, you can ask what evidence supports that decision. A difference is not automatically a problem. But it should be explainable."
          },
          {
            "title": "You reduce quote fatigue",
            "text": "Solar and battery proposals can contain a lot of information. Several quotes may create different equipment combinations, different savings claims, different finance structures, different warranties, different installation allowances, and different reasons to act quickly. More information does not always create more confidence. A considered introduction gives you one conversation with an installer who has already been selected against defined criteria."
          },
          {
            "title": "The installer knows what you have already reviewed",
            "text": "The installer can focus on the property, the final system design, site-specific constraints, equipment selection, installation requirements, network connection, and the questions raised by your report. The first conversation can be more productive because the basic energy discussion has already started."
          },
          {
            "title": "Inspection is part of the arrangement",
            "text": "If you proceed with an installer introduced through Watts Better, the installation is followed by an independent inspection. The installer knows from the beginning that the completed work will be independently assessed. That does not replace the installer's responsibilities. It creates an additional level of accountability around the completed work."
          }
        ]
      },
      {
        "type": "h2",
        "id": "one-introduction-is-not-an-installer-guarantee",
        "text": "One introduction is not an installer guarantee"
      },
      {
        "type": "p",
        "text": "A considered introduction does not mean:"
      },
      {
        "type": "list",
        "items": [
          "The installer is the only business you are allowed to use",
          "The quote must be accepted",
          "The installer's design is automatically correct",
          "The price is guaranteed to be the lowest",
          "The installation is guaranteed to be problem-free",
          "You cannot obtain additional quotes",
          "Watts Better becomes responsible for the installation"
        ]
      },
      {
        "type": "p",
        "text": "The installer remains responsible for:"
      },
      {
        "type": "list",
        "items": [
          "Site assessment",
          "Final design",
          "Equipment selection",
          "Installation",
          "Certification",
          "Network requirements",
          "Warranties",
          "Rectification",
          "Customer service"
        ]
      },
      {
        "type": "p",
        "text": "You remain free to ask questions, seek other quotes or decide not to proceed."
      },
      {
        "type": "h2",
        "id": "what-we-consider-before-an-introduction",
        "text": "What we consider before an introduction"
      },
      {
        "type": "p",
        "text": "Watts Better does not introduce every business that sells solar or batteries."
      },
      {
        "type": "p",
        "text": "Before making an introduction, we consider:"
      },
      {
        "type": "list",
        "items": [
          "Business identity",
          "Relevant licensing",
          "Solar Accreditation Australia status",
          "Battery accreditation where applicable",
          "Who performs the installation",
          "Customer support arrangements",
          "Warranty support",
          "The proposed equipment",
          "Whether the business is prepared to cooperate with independent inspection",
          "Whether the business is suitable for the homeowner's circumstances"
        ]
      },
      {
        "type": "p",
        "text": "The introduction is based on fit and readiness — not simply on who responds first."
      },
      {
        "type": "h2",
        "id": "the-trade-off-is-honest",
        "text": "The trade-off is honest"
      },
      {
        "type": "p",
        "text": "Three quotes can provide price competition."
      },
      {
        "type": "p",
        "text": "One considered introduction can provide a more focused process."
      },
      {
        "type": "p",
        "text": "The right choice depends on what you need."
      },
      {
        "type": "p",
        "text": "If you want to independently compare several suppliers, you can."
      },
      {
        "type": "p",
        "text": "If you want to understand your numbers first and speak with one considered installer, Watts Better provides that pathway."
      },
      {
        "type": "p",
        "text": "You do not have to choose an installer simply because an introduction has been made."
      },
      {
        "type": "p",
        "text": "You do not have to proceed with the quote."
      },
      {
        "type": "p",
        "text": "You do not have to request an introduction at all."
      },
      {
        "type": "h2",
        "id": "why-we-do-not-share-your-details-with-a-network",
        "text": "Why we do not share your details with a network"
      },
      {
        "type": "p",
        "text": "Watts Better does not automatically send your information to multiple installers."
      },
      {
        "type": "p",
        "text": "Your details are not shared unless you expressly request an introduction."
      },
      {
        "type": "p",
        "text": "Before that point, you can:"
      },
      {
        "type": "checklist",
        "items": [
          "Complete the analysis",
          "Review the report",
          "Book a chat",
          "Complete the Photo Capture",
          "Ask questions",
          "Decide whether you want to continue"
        ]
      },
      {
        "type": "p",
        "text": "The introduction is your decision."
      },
      {
        "type": "h2",
        "id": "how-the-process-works",
        "text": "How the process works"
      },
      {
        "type": "findings",
        "items": [
          {
            "title": "Understand",
            "text": "Complete your analysis and receive your report."
          },
          {
            "title": "Clarify",
            "text": "Book a 15-minute chat to discuss the result and what the bill cannot show."
          },
          {
            "title": "Capture",
            "text": "Complete the relevant Photo Capture of your meter box, switchboard, roof space and existing equipment."
          },
          {
            "title": "Choose",
            "text": "Request one installer introduction if you want to proceed."
          },
          {
            "title": "Verify",
            "text": "If you proceed with that installer, an independent inspection is arranged after installation."
          }
        ]
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "See what your numbers show — then book a 15-minute chat.",
        "links": [
          {
            "label": "See what your numbers show",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "h2",
        "id": "common-questions",
        "text": "Common questions"
      },
      {
        "type": "h2",
        "id": "the-bottom-line",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Three quotes can be useful."
      },
      {
        "type": "p",
        "text": "But three different proposals do not automatically create a clear decision."
      },
      {
        "type": "p",
        "text": "A more useful process may be:"
      },
      {
        "type": "checklist",
        "items": [
          "Understand your own numbers",
          "Clarify the physical details of your home",
          "Ask better questions",
          "Speak with one suitable installer",
          "Decide whether the proposal makes sense",
          "Have the completed work independently inspected"
        ]
      },
      {
        "type": "p",
        "text": "One introduction does not remove your choice. It makes the choice more considered."
      },
      {
        "type": "cta",
        "text": "Run your analysis — then book a 15-minute chat.",
        "links": [
          {
            "label": "Run your analysis",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "Why not give me three installers?",
            "a": "You can obtain additional quotes independently if you want them. Watts Better focuses on giving you one considered introduction after you have reviewed your report, discussed the result and clarified the physical starting point."
          },
          {
            "q": "Is one installer guaranteed to be cheaper?",
            "a": "No. The purpose is not to promise the lowest price. It is to help you compare one proposal against a clearer understanding of your own energy needs and the questions that matter."
          },
          {
            "q": "Can I reject the installer's quote?",
            "a": "Yes. An introduction does not commit you to an installation, quote or purchase."
          },
          {
            "q": "Can I use my own installer?",
            "a": "Yes. Your report is yours to use, whether or not you request an introduction through Watts Better."
          },
          {
            "q": "Does Watts Better receive a fee?",
            "a": "If you request an installer introduction and subsequently proceed with that installer, the installer may pay Watts Better an introducer fee. Part of that fee funds the independent post-installation inspection and report. The arrangement is explained in full on the How We Are Paid page."
          },
          {
            "q": "Does the installer know an inspection will occur?",
            "a": "Yes. An installer introduced through Watts Better must be prepared to cooperate with the independent inspection process."
          }
        ]
      },
      {
        "type": "h2",
        "id": "article-sources",
        "text": "Article sources"
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "Australian Government Solar Guide",
            "href": "https://www.energy.gov.au/solar"
          },
          {
            "label": "Australian Government Solar Guide — choosing a solar retailer and installer",
            "href": "https://www.energy.gov.au/solar/solar-retailers-and-installation/choose-your-solar-retailer-and-installer"
          },
          {
            "label": "Australian Competition and Consumer Commission — solar panels and home batteries",
            "href": "https://www.accc.gov.au/consumers/specific-products-and-activities/solar-panel-systems-and-home-batteries"
          },
          {
            "label": "Solar Accreditation Australia — accreditation status check"
          },
          {
            "label": "New Energy Tech Consumer Code — approved sellers",
            "href": "https://www.newenergytech.org.au/about-the-netcc"
          }
        ]
      },
      {
        "type": "h2",
        "id": "want-to-understand-your-own-position",
        "text": "Want to understand your own position?"
      },
      {
        "type": "p",
        "text": "A general article can explain the principles."
      },
      {
        "type": "p",
        "text": "Your electricity bill can show what those principles mean for your household."
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "Run your analysis — then book a 15-minute chat.",
        "links": [
          {
            "label": "Run your analysis",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "p",
        "text": "You do not need to request an installer introduction to receive or discuss your analysis."
      },
      {
        "type": "note",
        "text": "General information only. This article provides household-level guidance to support informed decision-making. It does not replace a site inspection, electrical design, financial advice, or advice from a qualified and appropriately accredited installer. Actual system suitability, cost, savings and installation requirements depend on site-specific circumstances."
      }
    ],
    "date": "September 2026"
  },
  {
    "slug": "same-battery-different-plan",
    "title": "Same battery, different plan",
    "standfirst": "Why Amber and Flow Power can change your battery ROI. Two households can buy the same battery and achieve very different results — and the same household can get different results simply by changing electricity plans.",
    "category": "Your numbers",
    "blocks": [
      {
        "type": "image",
        "src": "/images/concept-same-battery-different-plan.jpg",
        "alt": "Illustration of a single battery unit connected to two houses by two differently shaped paths."
      },
      {
        "type": "p",
        "text": "A battery is not just a box on the wall."
      },
      {
        "type": "p",
        "text": "Its financial value depends on the complete system around it:"
      },
      {
        "type": "list",
        "items": [
          "Solar generation",
          "Household usage",
          "Battery size",
          "Inverter",
          "Electricity tariff",
          "Export rules",
          "Retailer",
          "Automation",
          "Warranty",
          "Battery life",
          "Your willingness to manage the system"
        ]
      },
      {
        "type": "p",
        "text": "Two households can buy the same battery and achieve very different results."
      },
      {
        "type": "p",
        "text": "The same household can also achieve very different results with the same battery simply by changing electricity plans."
      },
      {
        "type": "p",
        "text": "That is why the battery and electricity plan should be considered together."
      },
      {
        "type": "p",
        "text": "The battery you buy can determine which plans you can access. The plan you choose can determine how hard the battery works for you."
      },
      {
        "type": "h2",
        "id": "the-worked-comparison",
        "text": "The worked comparison"
      },
      {
        "type": "p",
        "text": "This example compares the same Brisbane household, the same solar system and the same battery under three electricity-plan options:"
      },
      {
        "type": "list",
        "items": [
          "A standard retail electricity plan",
          "Amber with SmartShift",
          "Flow Power with Happy Hour scheduling"
        ]
      },
      {
        "type": "p",
        "text": "The purpose is not to claim that one provider is always best."
      },
      {
        "type": "p",
        "text": "The purpose is to show why plan compatibility can materially affect the value of a battery."
      },
      {
        "type": "h2",
        "id": "the-household",
        "text": "The household"
      },
      {
        "type": "p",
        "text": "For a fair comparison, keep the household and hardware constant."
      },
      {
        "type": "label",
        "text": "Household profile"
      },
      {
        "type": "list",
        "items": [
          "Location: Brisbane, Queensland",
          "Network: Energex",
          "Annual electricity usage: [insert] kWh",
          "Average daily usage: [insert] kWh",
          "Main usage period: [insert]",
          "Existing or proposed solar: [insert] kW",
          "Estimated annual solar generation: [insert] kWh",
          "Current feed-in tariff: [insert]",
          "Current electricity usage rate: [insert]"
        ]
      },
      {
        "type": "label",
        "text": "Battery system"
      },
      {
        "type": "list",
        "items": [
          "Battery brand: [insert]",
          "Battery model: [insert]",
          "Usable capacity: [insert] kWh",
          "Inverter brand and model: [insert]",
          "Installed cost: $[insert]",
          "Applicable discount: $[insert]",
          "Net installed cost: $[insert]",
          "Warranty period: [insert]",
          "Throughput or cycle limit: [insert]"
        ]
      },
      {
        "type": "p",
        "text": "The battery must be checked for compatibility with each plan."
      },
      {
        "type": "p",
        "text": "If the battery works with one plan but not another, that is part of the result."
      },
      {
        "type": "h2",
        "id": "option-1-standard-retail-plan",
        "text": "Option 1 — Standard retail plan"
      },
      {
        "type": "p",
        "text": "A standard electricity plan provides the baseline."
      },
      {
        "type": "p",
        "text": "The battery may be used to:"
      },
      {
        "type": "list",
        "items": [
          "Store excess solar",
          "Reduce evening grid purchases",
          "Increase solar self-consumption",
          "Export surplus energy",
          "Charge according to the battery's own settings"
        ]
      },
      {
        "type": "label",
        "text": "Modelled result"
      },
      {
        "type": "list",
        "items": [
          "Annual grid cost before battery: $[insert]",
          "Annual grid cost after battery: $[insert]",
          "Annual feed-in value: $[insert]",
          "Annual battery benefit: $[insert]",
          "Indicative payback: [insert] years",
          "Estimated battery cycling: [insert]",
          "Main advantage: [insert]",
          "Main limitation: [insert]"
        ]
      },
      {
        "type": "p",
        "text": "This is the baseline against which the other plans should be compared."
      },
      {
        "type": "h2",
        "id": "option-2-amber-smartshift",
        "text": "Option 2 — Amber SmartShift"
      },
      {
        "type": "p",
        "text": "Amber provides access to wholesale electricity pricing and offers SmartShift battery automation for compatible systems."
      },
      {
        "type": "p",
        "text": "SmartShift can use information such as:"
      },
      {
        "type": "list",
        "items": [
          "Wholesale electricity prices",
          "Forecast solar generation",
          "Household usage",
          "Battery state of charge",
          "Expected export value",
          "Grid conditions"
        ]
      },
      {
        "type": "p",
        "text": "A compatible battery may be automatically managed to:"
      },
      {
        "type": "list",
        "items": [
          "Charge when energy is cheaper",
          "Hold energy for later use",
          "Discharge when prices are higher",
          "Reduce household grid purchases",
          "Export energy when the value is higher",
          "Curtail solar in certain negative-price situations"
        ]
      },
      {
        "type": "p",
        "text": "Amber says it is currently compatible with around two-thirds of batteries installed in Australia and continues to expand its integrations."
      },
      {
        "type": "p",
        "text": "Compatibility depends on the exact battery and inverter combination, not only the battery brand."
      },
      {
        "type": "label",
        "text": "Modelled result"
      },
      {
        "type": "list",
        "items": [
          "Annual grid cost: $[insert]",
          "Annual export value: $[insert]",
          "Amber plan and service fees: $[insert]",
          "Annual battery benefit: $[insert]",
          "Indicative payback: [insert] years",
          "Estimated battery cycling: $[insert]",
          "Automation available: Yes / No",
          "Main advantage: [insert]",
          "Main limitation: [insert]"
        ]
      },
      {
        "type": "p",
        "text": "The exact system should be checked through the Amber SmartShift Compatibility Checker."
      },
      {
        "type": "h2",
        "id": "amber-compatibility-is-more-than-a-battery-brand",
        "text": "Amber compatibility is more than a battery brand"
      },
      {
        "type": "p",
        "text": "Ask whether the exact system supports:"
      },
      {
        "type": "checklist",
        "items": [
          "Battery control",
          "Solar control",
          "Charging control",
          "Discharging control",
          "Export control",
          "Real-time data",
          "Required communications access",
          "Current firmware",
          "Queensland availability"
        ]
      },
      {
        "type": "p",
        "text": "A battery brand may be listed as compatible while a particular model, inverter combination or installation configuration is not."
      },
      {
        "type": "p",
        "text": "Before signing a battery contract, confirm:"
      },
      {
        "type": "checklist",
        "items": [
          "Battery model",
          "Inverter model",
          "Compatibility status",
          "Required hardware",
          "Required software",
          "Any installer configuration requirements",
          "Whether compatibility may change after a firmware update"
        ]
      },
      {
        "type": "h2",
        "id": "option-3-flow-power-happy-hour",
        "text": "Option 3 — Flow Power Happy Hour"
      },
      {
        "type": "p",
        "text": "Flow Power offers electricity plans designed for customers who can shift energy use and time battery exports."
      },
      {
        "type": "p",
        "text": "Its Happy Hour plan provides an export window, currently described as 5:30 pm to 9:30 pm, during which eligible customers can receive the applicable peak export rate."
      },
      {
        "type": "p",
        "text": "Flow Power states that Happy Hour is not a virtual power plant."
      },
      {
        "type": "p",
        "text": "The customer remains in control of the battery and is responsible for setting up the export schedule through the battery or inverter app."
      },
      {
        "type": "label",
        "text": "Modelled result"
      },
      {
        "type": "list",
        "items": [
          "Annual grid cost: $[insert]",
          "Annual export value during the export window: $[insert]",
          "Export value outside the window: $[insert]",
          "Flow Power plan and service fees: $[insert]",
          "Annual battery benefit: $[insert]",
          "Indicative payback: [insert] years",
          "Estimated battery cycling: [insert]",
          "Manual scheduling required: Yes / No",
          "Main advantage: [insert]",
          "Main limitation: [insert]"
        ]
      },
      {
        "type": "p",
        "text": "Flow Power publishes export guides for multiple battery systems, including Tesla, SolaX, SAJ, Sigenergy, Fox ESS, Fronius, GoodWe, Growatt, Sungrow, BYD, Alpha ESS, SolarEdge, Redback, Huawei, Pylontech and Deye."
      },
      {
        "type": "p",
        "text": "The exact battery, inverter, app and configuration still need to be checked."
      },
      {
        "type": "h2",
        "id": "side-by-side-comparison",
        "text": "Side-by-side comparison"
      },
      {
        "type": "table",
        "headers": [
          "Measure",
          "Standard plan",
          "Amber SmartShift",
          "Flow Power Happy Hour"
        ],
        "rows": [
          [
            "Same battery used?",
            "Yes",
            "Yes",
            "Yes"
          ],
          [
            "Battery compatible?",
            "[confirm]",
            "[confirm]",
            "[confirm]"
          ],
          [
            "Battery control",
            "Homeowner/system settings",
            "Automated where supported",
            "Homeowner-controlled"
          ],
          [
            "Annual grid cost",
            "$[ ]",
            "$[ ]",
            "$[ ]"
          ],
          [
            "Annual export value",
            "$[ ]",
            "$[ ]",
            "$[ ]"
          ],
          [
            "Plan fees",
            "$[ ]",
            "$[ ]",
            "$[ ]"
          ],
          [
            "Smart meter required?",
            "[ ]",
            "[ ]",
            "[ ]"
          ],
          [
            "Manual scheduling required?",
            "[ ]",
            "[ ]",
            "[ ]"
          ],
          [
            "Annual battery benefit",
            "$[ ]",
            "$[ ]",
            "$[ ]"
          ],
          [
            "Indicative payback",
            "[ ] years",
            "[ ] years",
            "[ ] years"
          ],
          [
            "Estimated battery cycling",
            "[ ]",
            "[ ]",
            "[ ]"
          ],
          [
            "Main risk",
            "[insert]",
            "Compatibility and automation",
            "Scheduling and plan conditions"
          ]
        ]
      },
      {
        "type": "p",
        "text": "The comparison should be updated when plan rates, fees or compatibility rules change."
      },
      {
        "type": "h2",
        "id": "what-this-comparison-shows",
        "text": "What this comparison shows"
      },
      {
        "type": "label",
        "text": "The cheapest battery may not deliver the best roi"
      },
      {
        "type": "p",
        "text": "A cheaper battery may have a lower upfront cost."
      },
      {
        "type": "p",
        "text": "But if it cannot access the plan or automation that creates the strongest financial result, the cheaper purchase price may not produce the best overall outcome."
      },
      {
        "type": "p",
        "text": "The more expensive battery may perform better financially if it can:"
      },
      {
        "type": "list",
        "items": [
          "Charge when electricity is cheaper",
          "Discharge when electricity is more expensive",
          "Export during higher-value periods",
          "Respond automatically to wholesale prices",
          "Avoid low-value exports",
          "Reduce manual management",
          "Work with a broader range of electricity plans"
        ]
      },
      {
        "type": "p",
        "text": "The correct comparison is not:"
      },
      {
        "type": "p",
        "text": "“Which battery is cheapest?”"
      },
      {
        "type": "p",
        "text": "It is:"
      },
      {
        "type": "p",
        "text": "“Which battery-and-plan combination produces the strongest credible result for this household?”"
      },
      {
        "type": "label",
        "text": "Vpp capability is not the same as plan compatibility"
      },
      {
        "type": "p",
        "text": "A battery may be technically capable of participating in a virtual power plant and still not be compatible with every retailer's system."
      },
      {
        "type": "p",
        "text": "These are different questions:"
      },
      {
        "type": "list",
        "items": [
          "Is the battery eligible for the relevant government or network program? This depends on program rules and approved equipment.",
          "Does the retailer support the battery? This depends on the retailer's current integrations.",
          "Can the battery be controlled automatically? This depends on the retailer, battery, inverter, software and communications pathway.",
          "Can the homeowner manually schedule the battery? This depends on the battery and inverter app."
        ]
      },
      {
        "type": "p",
        "text": "Do not assume that “VPP-capable” means “compatible with every wholesale plan”."
      },
      {
        "type": "label",
        "text": "Warranty and battery life matter too"
      },
      {
        "type": "p",
        "text": "A plan may change how often and how deeply the battery cycles."
      },
      {
        "type": "p",
        "text": "That can affect:"
      },
      {
        "type": "list",
        "items": [
          "Battery throughput",
          "Capacity degradation",
          "Warranty assumptions",
          "Expected operating life",
          "Available backup capacity",
          "Service requirements"
        ]
      },
      {
        "type": "p",
        "text": "Before joining an automation or export program, ask:"
      },
      {
        "type": "checklist",
        "items": [
          "Does retailer control affect the battery warranty?",
          "Is extra cycling included in the warranty?",
          "Is there a throughput limit?",
          "Does the warranty allow wholesale optimisation?",
          "Can the customer pause automation?",
          "What minimum reserve is maintained?",
          "Can the battery still provide backup during a market event?",
          "Who is responsible if a software instruction creates a fault?",
          "What happens if the battery is offline?"
        ]
      },
      {
        "type": "p",
        "text": "The highest possible export revenue may not be the best outcome if it adds unacceptable wear or reduces the battery's usefulness to the household."
      },
      {
        "type": "label",
        "text": "Plan risks to include in the model"
      },
      {
        "type": "p",
        "text": "A fair comparison should consider:"
      },
      {
        "type": "list",
        "items": [
          "Usage rates",
          "Feed-in rates",
          "Wholesale price exposure",
          "Plan fees",
          "Smart meter costs",
          "Export windows",
          "Negative-price periods",
          "Battery control",
          "Manual scheduling",
          "Battery cycling",
          "Warranty conditions",
          "System availability",
          "Network requirements",
          "Internet or communications failure",
          "Changes to plan terms",
          "Changes to compatibility rules"
        ]
      },
      {
        "type": "p",
        "text": "Do not model only the best price spikes."
      },
      {
        "type": "p",
        "text": "Include ordinary days."
      },
      {
        "type": "p",
        "text": "Include low-value export periods."
      },
      {
        "type": "p",
        "text": "Include days when the battery is not fully charged."
      },
      {
        "type": "p",
        "text": "Include days when the household needs to preserve energy for backup."
      },
      {
        "type": "label",
        "text": "Questions to ask before choosing the battery"
      },
      {
        "type": "p",
        "text": "Ask the installer and electricity retailer:"
      },
      {
        "type": "checklist",
        "items": [
          "Is the exact battery model compatible with Amber SmartShift?",
          "Is the exact inverter model compatible?",
          "Is the system compatible with Flow Power's export schedule?",
          "Is control automatic or manual?",
          "Is a smart meter required?",
          "Is a communications connection required?",
          "What happens if the plan changes its compatibility rules?",
          "What happens if the battery loses internet access?",
          "Can the homeowner override the plan?",
          "What reserve level is maintained?",
          "Does the plan affect the battery warranty?",
          "What throughput has been assumed?",
          "How many cycles per day have been modelled?",
          "What happens if you leave the plan?",
          "Can the battery still operate normally afterwards?",
          "What is the result on a standard electricity plan?",
          "What is the result without export revenue?"
        ]
      },
      {
        "type": "p",
        "text": "The battery should still be understandable even if the preferred electricity plan changes later."
      },
      {
        "type": "h2",
        "id": "before-you-request-an-introduction",
        "text": "Before you request an introduction"
      },
      {
        "type": "p",
        "text": "Watts Better can help you understand the energy pathway before you choose the battery."
      },
      {
        "type": "p",
        "text": "The report can help show:"
      },
      {
        "type": "list",
        "items": [
          "Your usage pattern",
          "Your tariff",
          "Your solar position",
          "Your likely battery use",
          "Whether storage appears worthwhile",
          "Which assumptions influence the result"
        ]
      },
      {
        "type": "p",
        "text": "The 15-minute chat can then clarify:"
      },
      {
        "type": "list",
        "items": [
          "Your home",
          "Your existing equipment",
          "Your backup priorities",
          "Your appetite for wholesale-price exposure",
          "Whether manual scheduling suits you",
          "What to capture before an installer conversation"
        ]
      },
      {
        "type": "p",
        "text": "Then the introduction is your choice."
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "See what your numbers show — then book a 15-minute chat.",
        "links": [
          {
            "label": "See what your numbers show",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "h2",
        "id": "the-bottom-line",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "A battery is not just a storage product."
      },
      {
        "type": "p",
        "text": "It is part of a wider system involving:"
      },
      {
        "type": "list",
        "items": [
          "Solar panels",
          "Inverter",
          "Battery",
          "Software",
          "Electricity retailer",
          "Tariff",
          "Network",
          "Warranty",
          "Household behaviour"
        ]
      },
      {
        "type": "p",
        "text": "The battery with the lowest purchase price may not produce the lowest long-term cost."
      },
      {
        "type": "p",
        "text": "The battery with the highest advertised export opportunity may not be the best fit for your household."
      },
      {
        "type": "p",
        "text": "The better decision is to compare the full combination:"
      },
      {
        "type": "p",
        "text": "Battery + inverter + plan + control method + warranty + household usage"
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "Can the same battery produce different results in different homes?",
            "a": "Yes. The plan the household is on prices the same battery differently, so the value depends on the tariff as much as on the hardware."
          },
          {
            "q": "Why does the electricity plan matter so much?",
            "a": "The plan sets the rate your battery displaces when it discharges and the rate you are paid for exports. Together those drive most of the return."
          },
          {
            "q": "What should I check before choosing a plan for a battery?",
            "a": "Whether your battery is compatible with the plan's program, what the plan pays for exports, and whether its peak windows line up with your household's evening usage."
          }
        ]
      },
      {
        "type": "h2",
        "id": "sources",
        "text": "Sources"
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "Amber — building the bring-your-own-battery energy future",
            "href": "https://www.amber.com.au/"
          },
          {
            "label": "Flow Power — Battery Happy Hour",
            "href": "https://flowpower.com.au/"
          },
          {
            "label": "Flow Power — battery export guides",
            "href": "https://flowpower.com.au/"
          },
          {
            "label": "Amber — SmartShift Compatibility Checker",
            "href": "https://www.amber.com.au/"
          },
          {
            "label": "Amber — solar and battery",
            "href": "https://www.amber.com.au/"
          },
          {
            "label": "Flow Power — batteries with Flow Power",
            "href": "https://flowpower.com.au/"
          },
          {
            "label": "Clean Energy Council — approved batteries",
            "href": "https://www.cleanenergycouncil.org.au/"
          },
          {
            "label": "ACCC — solar panels and home batteries",
            "href": "https://www.accc.gov.au/consumers/specific-products-and-activities/solar-panel-systems-and-home-batteries"
          }
        ]
      },
      {
        "type": "h2",
        "id": "want-to-understand-your-own-position",
        "text": "Want to understand your own position?"
      },
      {
        "type": "p",
        "text": "The plan can change the value of the battery."
      },
      {
        "type": "p",
        "text": "Your electricity bill can show whether the underlying system makes sense before plan-specific benefits are included."
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "Run your analysis — then book a 15-minute chat.",
        "links": [
          {
            "label": "Run your analysis",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "p",
        "text": "You do not need to request an installer introduction to receive or discuss your analysis."
      },
      {
        "type": "note",
        "text": "General information only. This article provides household-level guidance to support informed decision-making. It does not replace a site inspection, electrical design, financial advice, or advice from a qualified and appropriately accredited installer. Actual system suitability, cost, savings and installation requirements depend on site-specific circumstances."
      }
    ],
    "date": "September 2026"
  },
  {
    "slug": "is-a-home-battery-worth-it-in-brisbane",
    "title": "Is a home battery worth it in Brisbane?",
    "standfirst": "A battery is not automatically the right choice. Your tariff, usage pattern, solar system and evening demand matter more than a national average.",
    "category": "PV and batteries",
    "blocks": [
      {
        "type": "image",
        "src": "/images/concept-home-battery-brisbane.jpg",
        "alt": "Illustration of a house at dusk with a battery mounted on its wall and yellow light in the windows."
      },
      {
        "type": "p",
        "text": "A home battery can reduce the amount of electricity you buy from the grid."
      },
      {
        "type": "p",
        "text": "But that does not mean every Brisbane home should install one."
      },
      {
        "type": "p",
        "text": "The value of a battery depends on what your home does with energy during the day, when it uses power in the evening, what your tariff charges and how much solar would otherwise be exported."
      },
      {
        "type": "p",
        "text": "The right question is not:"
      },
      {
        "type": "callout",
        "label": "The wrong question",
        "text": "“How big a battery can I buy?”",
        "tone": "copper"
      },
      {
        "type": "p",
        "text": "It is:"
      },
      {
        "type": "callout",
        "label": "The right question",
        "text": "“How much useful work can a battery do in my home?”",
        "tone": "copper"
      },
      {
        "type": "h2",
        "id": "a-battery-stores-timing-not-energy-demand",
        "text": "A battery stores timing, not energy demand"
      },
      {
        "type": "p",
        "text": "Solar panels generate most of their power during daylight hours."
      },
      {
        "type": "p",
        "text": "Many households use more electricity:"
      },
      {
        "type": "list",
        "items": [
          "Before work and school",
          "In the late afternoon",
          "During the evening",
          "After the sun has gone down"
        ]
      },
      {
        "type": "p",
        "text": "A battery can store surplus solar during the day and make it available later."
      },
      {
        "type": "p",
        "text": "That can reduce grid purchases, but only if the household has enough surplus solar to charge the battery and enough later demand to use the stored energy."
      },
      {
        "type": "h2",
        "id": "your-tariff-matters",
        "text": "Your tariff matters"
      },
      {
        "type": "cards",
        "items": [
          {
            "label": "A battery becomes more valuable when",
            "lines": [
              "Grid electricity is expensive during your main usage period. Your feed-in tariff is relatively low. Your solar system exports energy during the day. Your household uses significant electricity in the evening. The battery is used regularly without being oversized."
            ],
            "positive": true
          },
          {
            "label": "A battery can be less attractive when",
            "lines": [
              "Your household uses little electricity. Most of your usage already occurs during daylight. Your solar system produces little surplus energy. Your evening demand is low. The battery is much larger than your typical usable demand."
            ],
            "positive": false
          }
        ]
      },
      {
        "type": "h2",
        "id": "bigger-is-not-automatically-better",
        "text": "Bigger is not automatically better"
      },
      {
        "type": "p",
        "text": "A larger battery costs more."
      },
      {
        "type": "p",
        "text": "It also needs enough solar generation and household demand to be used effectively."
      },
      {
        "type": "p",
        "text": "An oversized battery may spend much of its time partially used or empty. That can produce a weaker financial result than a smaller system matched to the household."
      },
      {
        "type": "p",
        "text": "The battery should be sized around the pattern of your home, not simply around the maximum product available."
      },
      {
        "type": "h2",
        "id": "what-about-the-queensland-discount",
        "text": "What about the Queensland discount?"
      },
      {
        "type": "p",
        "text": "The federal Cheaper Home Batteries Program provides support through the Small-scale Renewable Energy Scheme."
      },
      {
        "type": "p",
        "text": "The STC factor changes over time. Under the current published schedule, the factor moves from 6.8 during May–December 2026 to 5.7 during January–June 2027, then continues to decline in later periods."
      },
      {
        "type": "p",
        "text": "The discount is determined by the applicable settings when the battery is installed, and eligibility depends on the program rules, approved products and accredited installation requirements."
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "DCCEEW",
            "href": "https://www.dcceew.gov.au/"
          },
          {
            "label": "Clean Energy Regulator — Solar batteries",
            "href": "https://cer.gov.au/schemes/renewable-energy-target"
          },
          {
            "label": "Australian Government — Electricity pricing plans and tariffs (energy.gov.au)",
            "href": "https://www.energy.gov.au/solar/financial-benefits-solar/electricity-pricing-plans-and-tariffs"
          },
          {
            "label": "ACCC — solar panels and home batteries",
            "href": "https://www.accc.gov.au/consumers/specific-products-and-activities/solar-panel-systems-and-home-batteries"
          }
        ]
      },
      {
        "type": "p",
        "text": "That makes timing relevant, but timing should not replace proper analysis."
      },
      {
        "type": "p",
        "text": "A rebate does not turn an unsuitable battery into a good investment."
      },
      {
        "type": "h2",
        "id": "what-should-you-do-first",
        "text": "What should you do first?"
      },
      {
        "type": "p",
        "text": "Before asking an installer for a battery price, understand:"
      },
      {
        "type": "checklist",
        "items": [
          "Your average energy use",
          "Your evening usage",
          "Your tariff periods",
          "Your export pattern",
          "Your current solar position",
          "The battery size that your home could realistically use"
        ]
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "Is a home battery worth it for every Brisbane home?",
            "a": "No. The value depends on your tariff, usage pattern, solar system and evening demand. A national average does not answer the question for your home."
          },
          {
            "q": "Does a bigger battery always save more?",
            "a": "No. A battery needs enough surplus solar to charge it and enough later demand to use it. An oversized battery can sit partly used and return less than a smaller, well-matched system."
          },
          {
            "q": "How does the Queensland discount affect the decision?",
            "a": "The federal Cheaper Home Batteries Program reduces the upfront cost and the applicable STC factor changes over time, so timing matters. A rebate does not turn an unsuitable battery into a good investment."
          },
          {
            "q": "What should I review before asking for a price?",
            "a": "Your average energy use, evening usage, tariff periods, export pattern, current solar position and the battery size your home could realistically use."
          }
        ]
      },
      {
        "type": "cta",
        "text": "Run your analysis and book a 15-minute chat.",
        "links": [
          {
            "label": "Run your analysis",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "note",
        "text": "General information only. This article provides household-level guidance to support informed decision-making. It does not replace a site inspection, electrical design, financial advice, or advice from a qualified and appropriately accredited installer. Actual system suitability, cost, savings and installation requirements depend on site-specific circumstances."
      }
    ],
    "date": "September 2026"
  },
  {
    "slug": "solar-only-battery-later-or-both",
    "title": "Solar only, battery later, or both?",
    "standfirst": "A battery can be valuable, but not every home should add one immediately. Compare the pathways before choosing the equipment.",
    "category": "PV and batteries",
    "blocks": [
      {
        "type": "image",
        "src": "/images/concept-solar-only-battery-later.jpg",
        "alt": "Illustration of three houses in a row showing solar panels alone, panels with an empty battery slot, and panels with a fitted battery."
      },
      {
        "type": "p",
        "text": "Most households treat solar and batteries as a single decision."
      },
      {
        "type": "p",
        "text": "They are two decisions, and they are made at different times. You can generate electricity now and decide about storing it later. You can do both at once. Both can be right — for different homes."
      },
      {
        "type": "h2",
        "id": "what-a-battery-actually-adds",
        "text": "What a battery actually adds"
      },
      {
        "type": "p",
        "text": "A battery does not make electricity. It moves it."
      },
      {
        "type": "p",
        "text": "It takes solar that would otherwise be exported during the day and makes it available in the evening, when grid imports are most expensive. That produces value only when two things are true at once: you have surplus solar to store, and you have evening demand to use it."
      },
      {
        "type": "p",
        "text": "If either is missing, the battery is expensive storage with nothing to store or nothing to spend."
      },
      {
        "type": "h2",
        "id": "the-three-pathways",
        "text": "The three pathways"
      },
      {
        "type": "list",
        "items": [
          "Solar only — generate during the day, use what you can in the home, export the rest.",
          "Solar now, battery later — start with generation and add storage when your usage, your tariff or your household makes it worthwhile.",
          "Both at once — design generation and storage together as one system, sized as a whole."
        ]
      },
      {
        "type": "h2",
        "id": "when-solar-only-is-the-better-first-move",
        "text": "When solar only is the better first move"
      },
      {
        "type": "list",
        "items": [
          "You do not yet know your household's usage pattern.",
          "Your evening demand is modest compared with your daytime generation.",
          "You export a meaningful share of what you generate and your plan pays reasonably for it.",
          "Your roof is the binding constraint — adding storage does not create more energy to store."
        ]
      },
      {
        "type": "h2",
        "id": "when-adding-a-battery-later-makes-sense",
        "text": "When adding a battery later makes sense"
      },
      {
        "type": "list",
        "items": [
          "Your household has shifted onto a tariff with a large gap between peak and off-peak rates.",
          "You have added a large evening load — an electric vehicle, or electric heating.",
          "Your usage pattern has become predictable enough to size storage against it."
        ]
      },
      {
        "type": "h2",
        "id": "what-later-actually-costs-you",
        "text": "What later actually costs you"
      },
      {
        "type": "p",
        "text": "The catch in the battery-later pathway is that battery-ready is not the same as expandable."
      },
      {
        "type": "list",
        "items": [
          "Expansion rules differ by product. Some batteries have a defined window in which extra modules can be added, and the age and specification of the original modules matter.",
          "The inverter can be the limit. A hybrid inverter caps how much battery capacity the system can manage, regardless of what the battery itself allows.",
          "The rebate is set at installation. The federal discount is determined by the STC factor that applies on the date the battery is installed, and that factor declines on a published schedule. The current published schedule moves from 6.8 for May–December 2026 to 5.7 for January–June 2027, then continues to fall in later periods.",
          "The second visit costs more than the first. Adding capacity later can mean matching discontinued modules, additional labour and a second round of compliance work."
        ]
      },
      {
        "type": "p",
        "text": "None of that makes the battery-later pathway wrong. It makes it a decision that has to be checked before you buy, not after."
      },
      {
        "type": "h2",
        "id": "the-questions-that-decide-it",
        "text": "The questions that decide it"
      },
      {
        "type": "checklist",
        "items": [
          "Do I have surplus daytime solar that I am currently exporting cheaply?",
          "When does my household actually use power, and what does my plan charge then?",
          "What does my plan pay for exports, and what does it charge at peak?",
          "If I add a battery later, will this specific battery and this specific inverter allow it?",
          "What happens to the rebate if I wait twelve months?",
          "If my roof is limited, is storage even the constraint I should be solving?"
        ]
      },
      {
        "type": "h2",
        "id": "what-this-means-for-your-decision",
        "text": "What this means for your decision"
      },
      {
        "type": "p",
        "text": "If you cannot answer those questions with your own numbers, you are not choosing between equipment. You are choosing between estimates — and every estimate was built on someone else's household."
      },
      {
        "type": "p",
        "text": "The pathway that looks cheapest on a quote is not always the one that costs least over ten years. The pathway that suits your home is the one your usage, tariff and roof can actually support."
      },
      {
        "type": "h2",
        "id": "before-you-request-an-introduction",
        "text": "Before you request an introduction"
      },
      {
        "type": "p",
        "text": "You do not need to request an installer introduction to receive or discuss your analysis. Understanding which pathway fits your home comes first. The equipment decision comes after."
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "Should I install solar and a battery at the same time?",
            "a": "Not necessarily. Adding a battery later can be sensible, but only if the system and inverter allow the expansion you expect at the time you expect it."
          },
          {
            "q": "What decides whether adding a battery later is realistic?",
            "a": "The expansion rules and warranty window of the battery you choose, the inverter's capacity for extra modules, and how the rebate applies at the later date."
          },
          {
            "q": "Does the federal battery discount reward waiting?",
            "a": "No. The discount is set by the STC factor on the installation date, and that factor declines over the published schedule — so waiting generally means less support, not more."
          },
          {
            "q": "What should I compare before choosing a pathway?",
            "a": "Compare solar only, solar now with a battery later, and both at once against your own usage and tariff. The pathways differ in cost, flexibility and how much they depend on future decisions."
          }
        ]
      },
      {
        "type": "h2",
        "id": "sources",
        "text": "Sources"
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "DCCEEW — Cheaper Home Batteries Program",
            "href": "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries"
          },
          {
            "label": "Australian Government — Electricity pricing plans and tariffs (energy.gov.au)",
            "href": "https://www.energy.gov.au/solar/financial-benefits-solar/electricity-pricing-plans-and-tariffs"
          },
          {
            "label": "Clean Energy Regulator — Solar batteries",
            "href": "https://cer.gov.au/schemes/renewable-energy-target"
          },
          {
            "label": "ACCC — solar panels and home batteries",
            "href": "https://www.accc.gov.au/consumers/specific-products-and-activities/solar-panel-systems-and-home-batteries"
          }
        ]
      },
      {
        "type": "cta",
        "text": "See which pathway your numbers support.",
        "links": [
          {
            "label": "See the report",
            "href": "/the-report"
          }
        ]
      },
      {
        "type": "note",
        "text": "General information only. This article provides household-level guidance to support informed decision-making. It does not replace a site inspection, electrical design, financial advice, or advice from a qualified and appropriately accredited installer. Actual system suitability, cost, savings and installation requirements depend on site-specific circumstances."
      }
    ],
    "date": "September 2026"
  },
  {
    "slug": "why-some-home-batteries-cost-more",
    "title": "Why some home batteries cost more",
    "standfirst": "Two batteries can look similar on a quote while creating very different ownership experiences. What the price does and does not include.",
    "category": "PV and batteries",
    "blocks": [
      {
        "type": "image",
        "src": "/images/concept-why-batteries-cost-more.jpg",
        "alt": "Illustration of two identical batteries side by side, one shown solid and the other cut open to reveal stacked internal layers."
      },
      {
        "type": "p",
        "text": "A home battery is not just a box of cells."
      },
      {
        "type": "p",
        "text": "It is a complete energy system involving:"
      },
      {
        "type": "list",
        "items": [
          "Battery modules",
          "Battery management systems",
          "Inverters",
          "Software",
          "Communications",
          "Monitoring",
          "Firmware",
          "Safety systems",
          "Installer support",
          "Warranty administration",
          "Replacement parts",
          "Long-term service"
        ]
      },
      {
        "type": "p",
        "text": "Two batteries can appear similar on a quote while creating very different ownership experiences."
      },
      {
        "type": "p",
        "text": "One may cost less to buy but require more technical support, more complex fault diagnosis or more careful warranty administration."
      },
      {
        "type": "p",
        "text": "The important question is not only:"
      },
      {
        "type": "callout",
        "label": "The incomplete question",
        "text": "“What does the battery cost?”",
        "tone": "copper"
      },
      {
        "type": "p",
        "text": "It is:"
      },
      {
        "type": "callout",
        "label": "The better question",
        "text": "“What will this battery cost to own, support and repair over its working life?”",
        "tone": "copper"
      },
      {
        "type": "h2",
        "id": "the-cheapest-battery-may-not-be-the-cheapest-system",
        "text": "The cheapest battery may not be the cheapest system"
      },
      {
        "type": "p",
        "text": "A lower-priced battery may reduce the upfront cost."
      },
      {
        "type": "p",
        "text": "That can be attractive, particularly when a government discount is available."
      },
      {
        "type": "p",
        "text": "But the purchase price does not show:"
      },
      {
        "type": "list",
        "items": [
          "How complex the system is to diagnose",
          "How quickly faults can be identified",
          "Whether local technicians are available",
          "Whether servicing is required",
          "Who pays for servicing",
          "Whether labour is included in the warranty",
          "How warranty claims are submitted",
          "Whether parts are readily available",
          "How long the system may be unavailable",
          "What happens if the original installer disappears"
        ]
      },
      {
        "type": "p",
        "text": "A battery can be financially attractive on day one and more difficult to manage later."
      },
      {
        "type": "h2",
        "id": "what-are-you-paying-for-when-a-battery-costs-more",
        "text": "What are you paying for when a battery costs more?"
      },
      {
        "type": "p",
        "text": "A higher price may reflect more than the battery cells."
      },
      {
        "type": "p",
        "text": "It may include:"
      },
      {
        "type": "label",
        "text": "Hardware quality"
      },
      {
        "type": "p",
        "text": "This can include the battery modules, enclosure, battery management system, cooling, protection and communication hardware."
      },
      {
        "type": "label",
        "text": "System integration"
      },
      {
        "type": "p",
        "text": "Some batteries are closely integrated with a particular inverter ecosystem."
      },
      {
        "type": "p",
        "text": "Others may involve more compatibility requirements, firmware dependencies or configuration steps."
      },
      {
        "type": "label",
        "text": "Monitoring and software"
      },
      {
        "type": "p",
        "text": "A battery depends on software to report faults, manage charging and communicate with the inverter."
      },
      {
        "type": "p",
        "text": "A good monitoring system can make a fault easier to identify."
      },
      {
        "type": "p",
        "text": "It does not necessarily fix the fault, but it can reduce the time spent finding it."
      },
      {
        "type": "label",
        "text": "Service infrastructure"
      },
      {
        "type": "p",
        "text": "A manufacturer with a strong local support network may be able to diagnose and resolve problems more efficiently."
      },
      {
        "type": "p",
        "text": "The quality of the local installer and distributor network also matters."
      },
      {
        "type": "label",
        "text": "Warranty administration"
      },
      {
        "type": "p",
        "text": "A warranty is more useful when:"
      },
      {
        "type": "list",
        "items": [
          "The claim process is clear",
          "The responsible party is easy to identify",
          "The fault can be diagnosed",
          "Replacement parts are available",
          "Labour and transport are clearly covered",
          "The customer knows what evidence is required"
        ]
      },
      {
        "type": "p",
        "text": "The advertised warranty period is only one part of the picture."
      },
      {
        "type": "h2",
        "id": "goodwe-as-a-case-study",
        "text": "GoodWe as a case study"
      },
      {
        "type": "p",
        "text": "GoodWe is a useful example of why homeowners should read the technical and warranty documents rather than relying only on the headline price or warranty period."
      },
      {
        "type": "p",
        "text": "This is not a claim that every GoodWe battery is defective or that every warranty claim fails."
      },
      {
        "type": "p",
        "text": "It is an example of how complexity and warranty conditions can affect the practical ownership experience."
      },
      {
        "type": "p",
        "text": "The technical documentation can be extensive. The current Australian GoodWe ESA 5–30 kW user manual reviewed for this article is 287 pages."
      },
      {
        "type": "p",
        "text": "It includes:"
      },
      {
        "type": "list",
        "items": [
          "Installation requirements",
          "System wiring",
          "Commissioning",
          "Maintenance",
          "Troubleshooting",
          "Inverter fault codes",
          "Battery fault information",
          "Technical parameters",
          "Frequently asked questions"
        ]
      },
      {
        "type": "p",
        "text": "The fault troubleshooting sections cover inverter codes from F01 through F163."
      },
      {
        "type": "p",
        "text": "A long manual does not automatically mean a poor product."
      },
      {
        "type": "p",
        "text": "It does show that the installer and service technician may need to understand a substantial technical system when something goes wrong."
      },
      {
        "type": "h2",
        "id": "maintenance-requirements-matter",
        "text": "Maintenance requirements matter"
      },
      {
        "type": "p",
        "text": "GoodWe's documentation includes routine maintenance checks that may occur at intervals such as six months to one year, depending on the item and system."
      },
      {
        "type": "p",
        "text": "These checks can include matters such as:"
      },
      {
        "type": "list",
        "items": [
          "System cleanliness",
          "Cooling paths",
          "Electrical connections",
          "Cable condition",
          "Enclosure condition",
          "Installation stability",
          "Switches and protective equipment",
          "Fault and warning information"
        ]
      },
      {
        "type": "p",
        "text": "The manufacturer's documentation also directs users to consult the dealer or after-sales service centre for some maintenance requirements."
      },
      {
        "type": "p",
        "text": "This creates an important question:"
      },
      {
        "type": "p",
        "text": "Is the maintenance schedule a recommendation, a warranty condition or both?"
      },
      {
        "type": "p",
        "text": "Do not assume."
      },
      {
        "type": "p",
        "text": "Ask the installer to identify the exact requirement in the model-specific warranty document."
      },
      {
        "type": "p",
        "text": "Ask:"
      },
      {
        "type": "checklist",
        "items": [
          "Is a six-month service required?",
          "Who is qualified to complete it?",
          "What does the service include?",
          "What does it cost?",
          "Is the service cost included in the installation price?",
          "What records must be kept?",
          "What happens if the service is missed?",
          "Can missed maintenance affect a warranty claim?",
          "Does the requirement apply to the battery, inverter or complete system?"
        ]
      },
      {
        "type": "p",
        "text": "The manual and the warranty document are not always the same document."
      },
      {
        "type": "p",
        "text": "Read both."
      },
      {
        "type": "h2",
        "id": "a-warranty-is-not-one-thing",
        "text": "A warranty is not one thing"
      },
      {
        "type": "p",
        "text": "When a quote says “10-year warranty”, ask what that means."
      },
      {
        "type": "p",
        "text": "There may be separate warranties for:"
      },
      {
        "type": "label",
        "text": "Product warranty"
      },
      {
        "type": "p",
        "text": "This generally concerns defects in materials or workmanship in the product itself."
      },
      {
        "type": "label",
        "text": "Performance warranty"
      },
      {
        "type": "p",
        "text": "This may concern the battery's usable energy capacity over time."
      },
      {
        "type": "p",
        "text": "It may be expressed as:"
      },
      {
        "type": "list",
        "items": [
          "A percentage of usable capacity after a period",
          "A minimum energy throughput",
          "A maximum number of cycles",
          "A time limit",
          "Whichever threshold is reached first"
        ]
      },
      {
        "type": "p",
        "text": "A ten-year performance warranty does not necessarily mean the battery will deliver the same amount of energy for ten years."
      },
      {
        "type": "label",
        "text": "Installer workmanship warranty"
      },
      {
        "type": "p",
        "text": "This concerns the quality of the installation."
      },
      {
        "type": "p",
        "text": "It is separate from the manufacturer's product warranty."
      },
      {
        "type": "label",
        "text": "Service and labour"
      },
      {
        "type": "p",
        "text": "A product may be covered while certain costs are not."
      },
      {
        "type": "p",
        "text": "Ask whether the warranty covers:"
      },
      {
        "type": "list",
        "items": [
          "Fault diagnosis",
          "Technician attendance",
          "Labour",
          "Travel",
          "Freight",
          "Removal",
          "Reinstallation",
          "Replacement parts",
          "System recommissioning",
          "Loss of generation",
          "Loss of battery availability"
        ]
      },
      {
        "type": "p",
        "text": "These details can materially change the practical value of the warranty."
      },
      {
        "type": "h2",
        "id": "the-claims-process-is-part-of-the-product",
        "text": "The claims process is part of the product"
      },
      {
        "type": "p",
        "text": "GoodWe's Australian and New Zealand inverter warranty documentation directs customers to first contact the distributor or installer, with escalation to GoodWe's service process if necessary."
      },
      {
        "type": "p",
        "text": "The document also states that faults must be reported within a specified period and that exclusions can apply where installation, operation or maintenance has not followed the manufacturer's instructions."
      },
      {
        "type": "p",
        "text": "The current document includes exclusions involving:"
      },
      {
        "type": "list",
        "items": [
          "Faulty installation",
          "Operation outside the instructions",
          "Maintenance carried out contrary to instructions",
          "Unauthorised repair or modification",
          "Incompatible equipment",
          "Failure to report a product failure within the specified period",
          "Other listed circumstances"
        ]
      },
      {
        "type": "p",
        "text": "That does not mean the warranty is worthless."
      },
      {
        "type": "p",
        "text": "It means the homeowner needs to understand the conditions before relying on the headline."
      },
      {
        "type": "h2",
        "id": "no-warranty-in-practice-needs-careful-language",
        "text": "“No warranty in practice” needs careful language"
      },
      {
        "type": "p",
        "text": "A manufacturer may provide a valid written warranty while the customer still experiences difficulty using it."
      },
      {
        "type": "p",
        "text": "The practical problem may involve:"
      },
      {
        "type": "list",
        "items": [
          "An installer who no longer trades",
          "Delays identifying the fault",
          "Confusion between installer and manufacturer responsibility",
          "A requirement for specific evidence",
          "A maintenance record that was not kept",
          "Unclear labour coverage",
          "Freight or access costs",
          "A replacement part that is not immediately available",
          "A dispute about whether the issue is installation or product-related"
        ]
      },
      {
        "type": "p",
        "text": "For that reason, the stronger consumer question is not:"
      },
      {
        "type": "p",
        "text": "“Does this battery have a warranty?”"
      },
      {
        "type": "p",
        "text": "It is:"
      },
      {
        "type": "p",
        "text": "“What would I have to do to successfully use the warranty if something goes wrong?”"
      },
      {
        "type": "p",
        "text": "That is the test that matters."
      },
      {
        "type": "h2",
        "id": "australian-consumer-law-still-applies",
        "text": "Australian Consumer Law still applies"
      },
      {
        "type": "p",
        "text": "Manufacturer warranty terms do not remove Australian Consumer Law rights."
      },
      {
        "type": "p",
        "text": "The ACCC states that solar products and installation services come with automatic consumer guarantees, including that products and services must be of acceptable quality and do what they are supposed to do."
      },
      {
        "type": "p",
        "text": "These rights are separate from a manufacturer's voluntary warranty."
      },
      {
        "type": "p",
        "text": "The practical responsibility may depend on whether:"
      },
      {
        "type": "list",
        "items": [
          "One business sold both the equipment and installation",
          "The product and installation were purchased from different businesses",
          "The issue relates to the battery product",
          "The issue relates to the installation",
          "The issue relates to a service or representation"
        ]
      },
      {
        "type": "p",
        "text": "Keep your:"
      },
      {
        "type": "checklist",
        "items": [
          "Contract",
          "Quote",
          "Warranty documents",
          "Product model and serial number",
          "Installation certificate",
          "Commissioning records",
          "Service records",
          "Fault photographs",
          "Monitoring records",
          "Communications with the installer"
        ]
      },
      {
        "type": "h2",
        "id": "questions-to-ask-before-choosing-a-battery",
        "text": "Questions to ask before choosing a battery"
      },
      {
        "type": "p",
        "text": "Ask the installer:"
      },
      {
        "type": "checklist",
        "items": [
          "What is the exact battery model?",
          "What is the usable capacity?",
          "What is the performance warranty?",
          "Is the warranty limited by throughput or cycles?",
          "Which threshold applies first?",
          "Is six-monthly servicing required?",
          "What does that service cost?",
          "Who is qualified to complete it?",
          "Is servicing required for the warranty to remain valid?",
          "Is labour covered?",
          "Are travel and freight covered?",
          "Who submits the warranty claim?",
          "What happens if the installer closes?",
          "Where are replacement parts held?",
          "Who diagnoses the fault?",
          "How long do typical repairs take?",
          "What happens if the battery is unavailable?",
          "What documents must be retained?",
          "What is excluded from the warranty?"
        ]
      },
      {
        "type": "p",
        "text": "If the answer is unclear before purchase, it may be even less clear after a fault occurs."
      },
      {
        "type": "h2",
        "id": "compare-total-ownership-cost",
        "text": "Compare total ownership cost"
      },
      {
        "type": "p",
        "text": "When comparing batteries, look beyond:"
      },
      {
        "type": "list",
        "items": [
          "Purchase price",
          "Discount",
          "Usable capacity",
          "Advertised warranty period"
        ]
      },
      {
        "type": "p",
        "text": "Also consider:"
      },
      {
        "type": "list",
        "items": [
          "Expected servicing",
          "Service call costs",
          "Warranty labour",
          "Replacement parts",
          "Monitoring requirements",
          "Software and firmware support",
          "Installer availability",
          "Product compatibility",
          "Expected battery throughput",
          "Battery replacement strategy",
          "Support after the original installer is gone"
        ]
      },
      {
        "type": "p",
        "text": "A more expensive battery may provide better value if it is easier to support, easier to diagnose and backed by a stronger service network."
      },
      {
        "type": "p",
        "text": "A cheaper battery may still be a reasonable choice if the installer can clearly explain the service model and warranty obligations."
      },
      {
        "type": "p",
        "text": "The point is not to reject a product because it is cheaper."
      },
      {
        "type": "p",
        "text": "The point is to understand what the price does and does not include."
      },
      {
        "type": "h2",
        "id": "before-you-request-an-introduction",
        "text": "Before you request an introduction"
      },
      {
        "type": "p",
        "text": "Watts Better can help you prepare the questions before speaking with an installer."
      },
      {
        "type": "p",
        "text": "The report explains the energy and financial side."
      },
      {
        "type": "p",
        "text": "The 15-minute chat helps clarify your home and your priorities."
      },
      {
        "type": "p",
        "text": "The Photo Capture helps identify the existing equipment and installation context."
      },
      {
        "type": "p",
        "text": "Then you can decide whether the proposed battery and support model make sense for you."
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "See what your numbers show — then book a 15-minute chat.",
        "links": [
          {
            "label": "See what your numbers show",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "h2",
        "id": "the-bottom-line",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "A battery's price is not just the cost of the hardware."
      },
      {
        "type": "p",
        "text": "It is also the cost of:"
      },
      {
        "type": "list",
        "items": [
          "Understanding it",
          "Maintaining it",
          "Diagnosing it",
          "Supporting it",
          "Claiming under its warranty",
          "Repairing it",
          "Replacing it",
          "Living with it for many years"
        ]
      },
      {
        "type": "p",
        "text": "Do not compare batteries only by price per kilowatt-hour."
      },
      {
        "type": "p",
        "text": "Compare the complete ownership proposition."
      },
      {
        "type": "p",
        "text": "A long warranty is not the same as an easy warranty."
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "Why can two similar-looking batteries cost so differently?",
            "a": "The price covers different things: warranty terms, the claims process, maintenance requirements and after-sales support, not just capacity and brand."
          },
          {
            "q": "Is a more expensive battery always better value?",
            "a": "No. A higher price can be worth it when it buys stronger warranty coverage or support, but it should be compared on total ownership cost rather than sticker price."
          },
          {
            "q": "What should I ask about a battery warranty?",
            "a": "What is covered, for how long, who administers the claim and what is excluded. A warranty is not one thing, and the claims process is part of the product."
          },
          {
            "q": "Does Australian Consumer Law still apply?",
            "a": "Yes. Consumer guarantees apply independently of the manufacturer's warranty, so a limited warranty does not remove your statutory rights."
          }
        ]
      },
      {
        "type": "h2",
        "id": "sources",
        "text": "Sources"
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "GoodWe ESA Australian user manual",
            "href": "https://www.goodwe.com.au/"
          },
          {
            "label": "GoodWe Australia and New Zealand warranty documentation",
            "href": "https://www.goodwe.com.au/warranty"
          },
          {
            "label": "ACCC — solar panels and home batteries",
            "href": "https://www.accc.gov.au/consumers/specific-products-and-activities/solar-panel-systems-and-home-batteries"
          },
          {
            "label": "GoodWe Australia warranty library",
            "href": "https://www.goodwe.com.au/warranty"
          }
        ]
      },
      {
        "type": "h2",
        "id": "want-to-understand-your-own-position",
        "text": "Want to understand your own position?"
      },
      {
        "type": "p",
        "text": "A general article can explain battery ownership risk."
      },
      {
        "type": "p",
        "text": "Your report can show whether a battery is worth considering for your household in the first place."
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "Run your analysis — then book a 15-minute chat.",
        "links": [
          {
            "label": "Run your analysis",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "note",
        "text": "General information only. This article provides household-level guidance to support informed decision-making. It does not replace a site inspection, electrical design, financial advice, or advice from a qualified and appropriately accredited installer. Actual system suitability, cost, savings and installation requirements depend on site-specific circumstances."
      }
    ],
    "date": "September 2026"
  },
  {
    "slug": "why-some-solar-panels-cost-so-much-less",
    "title": "Why some solar panels cost so much less",
    "standfirst": "Lower panel prices have made solar more accessible. But what are you giving up when one panel costs significantly less than another?",
    "category": "PV and batteries",
    "blocks": [
      {
        "type": "image",
        "src": "/images/concept-why-panels-cost-less.jpg",
        "alt": "Illustration of a solar panel array in which some panels are drawn solid and others only as empty outlines."
      },
      {
        "type": "p",
        "text": "Solar panels have become dramatically cheaper over the last decade."
      },
      {
        "type": "p",
        "text": "That has been good for homeowners."
      },
      {
        "type": "p",
        "text": "Lower panel prices have made rooftop solar more accessible and helped accelerate deployment around the world."
      },
      {
        "type": "p",
        "text": "But low prices also create an important question:"
      },
      {
        "type": "p",
        "text": "What are you giving up when one panel costs significantly less than another?"
      },
      {
        "type": "p",
        "text": "The answer is not always quality."
      },
      {
        "type": "p",
        "text": "Sometimes the price difference reflects manufacturing scale, technology, supply-chain efficiency or purchasing volume."
      },
      {
        "type": "p",
        "text": "But extreme price competition can also create pressure on:"
      },
      {
        "type": "list",
        "items": [
          "Materials",
          "Quality control",
          "Research and development",
          "Factory utilisation",
          "Warranty reserves",
          "Local service",
          "Manufacturer financial stability"
        ]
      },
      {
        "type": "p",
        "text": "A panel is expected to generate electricity for decades."
      },
      {
        "type": "p",
        "text": "The company behind the warranty may not remain in the same position for that long."
      },
      {
        "type": "h2",
        "id": "china-dominates-solar-manufacturing",
        "text": "China dominates solar manufacturing"
      },
      {
        "type": "p",
        "text": "China has become the dominant global manufacturing base for solar panels and their components."
      },
      {
        "type": "p",
        "text": "The International Energy Agency reports that China's share of every major solar manufacturing stage — including polysilicon, ingots, wafers, cells and modules — exceeds 80%."
      },
      {
        "type": "p",
        "text": "The IEA also reports that China invested more than US$50 billion in new PV manufacturing capacity over the last decade."
      },
      {
        "type": "p",
        "text": "This dominance was built through:"
      },
      {
        "type": "list",
        "items": [
          "Large-scale manufacturing",
          "Vertical supply chains",
          "High domestic demand",
          "Heavy investment",
          "Rapid technology upgrades",
          "Integrated production of polysilicon, wafers, cells and modules",
          "Strong export capability"
        ]
      },
      {
        "type": "p",
        "text": "China's dominance does not automatically mean that Chinese panels are poor quality."
      },
      {
        "type": "p",
        "text": "Many major Chinese manufacturers produce modules that are widely deployed and perform strongly in independent testing."
      },
      {
        "type": "p",
        "text": "The more important issue is the structure of the market supporting those products."
      },
      {
        "type": "h2",
        "id": "the-market-has-a-serious-overcapacity-problem",
        "text": "The market has a serious overcapacity problem"
      },
      {
        "type": "p",
        "text": "Manufacturers built enormous production capacity during a period of strong solar growth."
      },
      {
        "type": "p",
        "text": "Demand continued to expand, but manufacturing capacity expanded even faster."
      },
      {
        "type": "p",
        "text": "That created a surplus of:"
      },
      {
        "type": "list",
        "items": [
          "Polysilicon",
          "Wafers",
          "Cells",
          "Modules",
          "Factory capacity"
        ]
      },
      {
        "type": "p",
        "text": "When supply is much greater than demand, manufacturers have a choice:"
      },
      {
        "type": "list",
        "items": [
          "Reduce production",
          "Close or suspend factories",
          "Consolidate",
          "Sell inventory at lower prices",
          "Continue producing at very thin margins",
          "Take orders at a loss to preserve market share"
        ]
      },
      {
        "type": "p",
        "text": "Wood Mackenzie reported that leading Chinese solar manufacturers recorded a combined loss of approximately US$5.5 billion in 2025, despite strong shipment volumes."
      },
      {
        "type": "p",
        "text": "That does not mean every manufacturer is losing money."
      },
      {
        "type": "p",
        "text": "It does mean the sector is under severe financial pressure."
      },
      {
        "type": "h2",
        "id": "why-a-price-war-can-affect-quality",
        "text": "Why a price war can affect quality"
      },
      {
        "type": "p",
        "text": "A price war does not automatically produce bad products."
      },
      {
        "type": "p",
        "text": "Large manufacturers can reduce cost through:"
      },
      {
        "type": "list",
        "items": [
          "Scale",
          "Automation",
          "Vertical integration",
          "Purchasing power",
          "Process improvements",
          "Efficient logistics",
          "Higher factory utilisation"
        ]
      },
      {
        "type": "p",
        "text": "But sustained pressure can create incentives to reduce cost wherever possible."
      },
      {
        "type": "p",
        "text": "That may affect:"
      },
      {
        "type": "list",
        "items": [
          "Glass thickness",
          "Encapsulant selection",
          "Backsheet or glass-glass construction",
          "Junction boxes",
          "Connectors",
          "Soldering",
          "Cell interconnection",
          "Quality-control sampling",
          "Factory maintenance",
          "Warranty reserves",
          "Research and development",
          "Technical and after-sales support"
        ]
      },
      {
        "type": "p",
        "text": "The problem is that a reduction in quality may not be visible when the panel is installed."
      },
      {
        "type": "p",
        "text": "It may appear later as:"
      },
      {
        "type": "list",
        "items": [
          "Higher degradation",
          "Delamination",
          "Microcracks",
          "Hotspots",
          "Moisture ingress",
          "Junction-box failure",
          "Connector problems",
          "Output loss",
          "Difficult warranty claims"
        ]
      },
      {
        "type": "p",
        "text": "A panel can look perfect on installation day and still create a long-term risk."
      },
      {
        "type": "h2",
        "id": "quality-is-not-the-same-as-country-of-origin",
        "text": "Quality is not the same as country of origin"
      },
      {
        "type": "p",
        "text": "It would be wrong to treat all Chinese manufacturers as low quality."
      },
      {
        "type": "p",
        "text": "Independent testing regularly identifies products from Chinese manufacturers among high-performing modules."
      },
      {
        "type": "p",
        "text": "The 2026 PV Module Index from RETC recognised a range of manufacturers, including Chinese, Indian and other international brands, for high achievement in different reliability and performance tests."
      },
      {
        "type": "p",
        "text": "The same report also highlighted ongoing industry-wide concerns involving:"
      },
      {
        "type": "list",
        "items": [
          "Ultraviolet-induced degradation",
          "Damp-heat performance",
          "Thermal cycling",
          "Hail durability",
          "Differences between module designs and bills of materials"
        ]
      },
      {
        "type": "p",
        "text": "The correct question is not:"
      },
      {
        "type": "p",
        "text": "“Is this panel Chinese?”"
      },
      {
        "type": "p",
        "text": "The better questions are:"
      },
      {
        "type": "checklist",
        "items": [
          "Which manufacturer made it?",
          "Which factory produced it?",
          "Which exact model is quoted?",
          "Which bill of materials applies?",
          "Has that model been independently tested?",
          "How long has the model been in the market?",
          "Who supports the warranty in Australia?",
          "Is the manufacturer financially stable enough to support a long warranty?"
        ]
      },
      {
        "type": "h2",
        "id": "the-patent-story-is-more-complicated",
        "text": "The patent story is more complicated"
      },
      {
        "type": "p",
        "text": "There have been significant patent disputes in the solar industry."
      },
      {
        "type": "p",
        "text": "For example, Hanwha Q CELLS filed patent-infringement complaints in the United States against JinkoSolar, LONGi Solar and REC Group involving passivation technology."
      },
      {
        "type": "p",
        "text": "There have also been later patent settlements and cross-licensing arrangements between major manufacturers."
      },
      {
        "type": "p",
        "text": "In 2026, LONGi and JinkoSolar announced a global settlement involving cross-licensing of selected core patents."
      },
      {
        "type": "p",
        "text": "There have also been separate licensing arrangements involving companies such as Maxeon and Aiko."
      },
      {
        "type": "p",
        "text": "But the evidence does not support saying that all Chinese manufacturers have infringed patents or that every panel carries a universal fee per panel sold in the United States or Europe."
      },
      {
        "type": "p",
        "text": "Patent rights are:"
      },
      {
        "type": "list",
        "items": [
          "Technology-specific",
          "Company-specific",
          "Jurisdiction-specific",
          "Subject to litigation",
          "Sometimes settled confidentially",
          "Sometimes resolved through cross-licensing",
          "Sometimes challenged or invalidated"
        ]
      },
      {
        "type": "p",
        "text": "For a homeowner, the practical issue is not to investigate every patent dispute."
      },
      {
        "type": "p",
        "text": "It is to ask whether the manufacturer and importer have a credible right to sell the product in the relevant market and whether the contract provides appropriate support if a legal or supply-chain problem arises."
      },
      {
        "type": "h2",
        "id": "the-warranty-may-outlive-the-manufacturer",
        "text": "The warranty may outlive the manufacturer"
      },
      {
        "type": "p",
        "text": "Solar panels are often sold with:"
      },
      {
        "type": "list",
        "items": [
          "Product warranties",
          "Performance warranties",
          "Degradation guarantees",
          "Long-term output promises"
        ]
      },
      {
        "type": "p",
        "text": "These warranties may extend for 20, 25 or 30 years."
      },
      {
        "type": "p",
        "text": "But the company providing the warranty may:"
      },
      {
        "type": "list",
        "items": [
          "Be acquired",
          "Leave the Australian market",
          "Close a factory",
          "Change distributors",
          "Restructure",
          "Become insolvent",
          "Stop supporting an older model",
          "Transfer responsibility to another entity"
        ]
      },
      {
        "type": "p",
        "text": "A warranty is only practically valuable if there is a functioning party capable of responding to a claim."
      },
      {
        "type": "p",
        "text": "This is why manufacturer financial strength matters."
      },
      {
        "type": "p",
        "text": "Solar-sector financial analysts such as Sinovoltaics assess manufacturers because financial distress can affect the credibility of long-term product warranties."
      },
      {
        "type": "p",
        "text": "A 25-year warranty from a company that may not exist in five years is not equivalent to a 25-year warranty from a financially stable manufacturer with an Australian support network."
      },
      {
        "type": "h2",
        "id": "tier-1-does-not-mean-perfect",
        "text": "“Tier 1” does not mean perfect"
      },
      {
        "type": "p",
        "text": "Many homeowners see a “Tier 1” reference and assume it means:"
      },
      {
        "type": "list",
        "items": [
          "Highest quality",
          "Lowest failure rate",
          "Best warranty",
          "Guaranteed long-term support"
        ]
      },
      {
        "type": "p",
        "text": "That is not what bankability rankings are designed to prove."
      },
      {
        "type": "p",
        "text": "A bankability rating may provide useful information about market presence, financing and manufacturer acceptance."
      },
      {
        "type": "p",
        "text": "It does not replace checking:"
      },
      {
        "type": "checklist",
        "items": [
          "Independent reliability tests",
          "Exact model",
          "Exact bill of materials",
          "Warranty exclusions",
          "Degradation terms",
          "Australian service arrangements",
          "Product availability",
          "Installer quality"
        ]
      },
      {
        "type": "p",
        "text": "Do not treat a manufacturer ranking as a substitute for technical and commercial due diligence."
      },
      {
        "type": "h2",
        "id": "australian-product-approval-is-not-a-long-term-quality-guara",
        "text": "Australian product approval is not a long-term quality guarantee"
      },
      {
        "type": "p",
        "text": "For an Australian rebate-eligible installation, the relevant modules and inverters must meet applicable product and program requirements."
      },
      {
        "type": "p",
        "text": "Product approval is important."
      },
      {
        "type": "p",
        "text": "It helps establish that the product meets the relevant safety and compliance requirements for the program."
      },
      {
        "type": "p",
        "text": "But approval does not guarantee:"
      },
      {
        "type": "list",
        "items": [
          "That the manufacturer will remain in business",
          "That every installation will be good",
          "That the panel will never fail",
          "That the warranty process will be easy",
          "That the product is the best choice for your roof",
          "That the installer will provide long-term support"
        ]
      },
      {
        "type": "p",
        "text": "Approval is a starting point, not a complete quality assessment."
      },
      {
        "type": "h2",
        "id": "what-to-check-before-accepting-a-panel",
        "text": "What to check before accepting a panel"
      },
      {
        "type": "p",
        "text": "Ask for the exact:"
      },
      {
        "type": "checklist",
        "items": [
          "Manufacturer",
          "Model number",
          "Factory or production series, where available",
          "Rated power",
          "Efficiency",
          "Product warranty",
          "Performance warranty",
          "Degradation schedule",
          "Warranty transfer rules",
          "Warranty claim process",
          "Australian importer or distributor",
          "Australian contact details",
          "Independent reliability test results",
          "Product approval status"
        ]
      },
      {
        "type": "p",
        "text": "Also ask whether the quoted panel may be substituted if it becomes unavailable."
      },
      {
        "type": "p",
        "text": "If the exact model changes, the installer should explain the replacement and obtain your approval before installation."
      },
      {
        "type": "h2",
        "id": "what-does-a-long-performance-warranty-really-promise",
        "text": "What does a long performance warranty really promise?"
      },
      {
        "type": "p",
        "text": "A performance warranty may promise that a panel will retain a certain percentage of its original output after a specified period."
      },
      {
        "type": "p",
        "text": "That is not the same as guaranteeing:"
      },
      {
        "type": "list",
        "items": [
          "Your total system output",
          "Your annual savings",
          "Your electricity bill",
          "Your inverter performance",
          "Your installation quality",
          "Your roof condition",
          "Your feed-in income"
        ]
      },
      {
        "type": "p",
        "text": "Performance claims can also require:"
      },
      {
        "type": "list",
        "items": [
          "Technical testing",
          "Proof of underperformance",
          "Specific claim procedures",
          "Access to the installation",
          "Confirmation that the failure is attributable to the module",
          "Compliance with warranty conditions"
        ]
      },
      {
        "type": "p",
        "text": "Ask how a performance claim would actually be proven."
      },
      {
        "type": "h2",
        "id": "the-lowest-price-is-not-always-the-best-value",
        "text": "The lowest price is not always the best value"
      },
      {
        "type": "p",
        "text": "A lower-cost panel may be a perfectly reasonable choice if:"
      },
      {
        "type": "list",
        "items": [
          "The manufacturer is credible",
          "The model has a good testing record",
          "The warranty is clear",
          "Australian support is available",
          "The installer stands behind the system",
          "The price reflects genuine manufacturing efficiency"
        ]
      },
      {
        "type": "p",
        "text": "But a low price deserves questions if it is achieved through:"
      },
      {
        "type": "list",
        "items": [
          "An unclear manufacturer",
          "A short market history",
          "Weak local support",
          "Unclear warranty responsibility",
          "An unknown substitution policy",
          "A distributor with no long-term presence",
          "Claims that cannot be independently verified"
        ]
      },
      {
        "type": "p",
        "text": "The issue is not whether the panel is made in China."
      },
      {
        "type": "p",
        "text": "The issue is whether the product, manufacturer, importer and installer can support the asset over time."
      },
      {
        "type": "h2",
        "id": "questions-to-ask-your-installer",
        "text": "Questions to ask your installer"
      },
      {
        "type": "p",
        "text": "Ask:"
      },
      {
        "type": "checklist",
        "items": [
          "Why has this panel been selected?",
          "What is the exact model?",
          "Who is the Australian importer?",
          "Who will handle a warranty claim?",
          "What happens if the manufacturer stops trading?",
          "What independent testing has been completed on this model?",
          "Is the quoted model on the applicable approved product list?",
          "Can the installer substitute a different model?",
          "Does the substitute require your approval?",
          "What is the product warranty?",
          "What is the performance warranty?",
          "How are degradation claims tested?",
          "What evidence is required?",
          "Who pays for removal and reinstallation during a claim?",
          "What happens if the panel is no longer available?"
        ]
      },
      {
        "type": "p",
        "text": "A good installer should be able to answer these questions without treating them as an inconvenience."
      },
      {
        "type": "h2",
        "id": "before-you-request-an-introduction",
        "text": "Before you request an introduction"
      },
      {
        "type": "p",
        "text": "Watts Better does not recommend a panel based only on price, brand recognition or a warranty headline."
      },
      {
        "type": "p",
        "text": "The report helps clarify the system pathway."
      },
      {
        "type": "p",
        "text": "The 15-minute chat helps clarify your home and your priorities."
      },
      {
        "type": "p",
        "text": "The installer introduction is your choice."
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "See what your numbers show — then book a 15-minute chat.",
        "links": [
          {
            "label": "See what your numbers show",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "h2",
        "id": "the-bottom-line",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "China's dominance has helped make solar cheaper and faster to deploy."
      },
      {
        "type": "p",
        "text": "That is a major achievement."
      },
      {
        "type": "p",
        "text": "But extreme overcapacity and price competition can create financial pressure across the manufacturing sector."
      },
      {
        "type": "p",
        "text": "The result is not that every low-cost Chinese panel is poor quality."
      },
      {
        "type": "p",
        "text": "The result is that homeowners should not confuse:"
      },
      {
        "type": "list",
        "items": [
          "Low price with good value",
          "High volume with financial strength",
          "A long warranty with practical protection",
          "Product approval with long-term support",
          "A manufacturer ranking with a quality guarantee"
        ]
      },
      {
        "type": "p",
        "text": "The right question is:"
      },
      {
        "type": "p",
        "text": "Who will still be able and willing to support this panel when something goes wrong years after installation?"
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "Does country of origin determine panel quality?",
            "a": "No. Quality is not the same as country of origin. Manufacturing standards, independent testing results and the specific product matter more."
          },
          {
            "q": "What does Tier 1 actually mean?",
            "a": "It is a bankability measure used across the industry, not a quality rating for the panel itself, so it should not be treated as a guarantee of longevity."
          },
          {
            "q": "What matters if the manufacturer may not be around later?",
            "a": "A performance warranty is only as useful as the entity behind it. Check who honours the warranty, and for how long, because the warranty may outlive the manufacturer."
          },
          {
            "q": "What should I check before accepting a panel?",
            "a": "Australian product approval, the performance warranty terms, the manufacturer's financial position and the quality of the installation. The lowest price is not automatically the best value."
          }
        ]
      },
      {
        "type": "h2",
        "id": "sources",
        "text": "Sources"
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "International Energy Agency — Solar PV Global Supply Chains",
            "href": "https://www.iea.org/reports/solar-pv-global-supply-chains"
          },
          {
            "label": "Wood Mackenzie — Global solar PV module manufacturer ranking",
            "href": "https://www.woodmac.com/press-releases/longi-green-energy-tops-wood-mackenzies-global-solar-pv-module-manufacturer-ranking-2026"
          },
          {
            "label": "RETC — 2026 PV Module Index",
            "href": "https://retc-ca.com/pvmi"
          },
          {
            "label": "Hanwha Q CELLS patent complaint; LONGi and JinkoSolar global settlement"
          },
          {
            "label": "Sinovoltaics — 2026 financial stability ranking",
            "href": "https://sinovoltaics.com/reports/2026-solar-financial-stability-ranking-of-pv-modules-inverters-energy-storage-manufacturers-edition-1"
          },
          {
            "label": "Clean Energy Regulator — rooftop solar installers and designers",
            "href": "https://cer.gov.au/schemes/renewable-energy-target/renewable-energy-target-participants-and-industry/rooftop-solar-installers-and-designers"
          }
        ]
      },
      {
        "type": "h2",
        "id": "want-to-understand-your-own-position",
        "text": "Want to understand your own position?"
      },
      {
        "type": "p",
        "text": "A general article can explain the panel market."
      },
      {
        "type": "p",
        "text": "Your report can show which solar pathway makes sense for your household before you compare equipment."
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "Run your analysis — then book a 15-minute chat.",
        "links": [
          {
            "label": "Run your analysis",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "p",
        "text": "You do not need to request an installer introduction to receive or discuss your analysis."
      },
      {
        "type": "note",
        "text": "General information only. This article provides household-level guidance to support informed decision-making. It does not replace a site inspection, electrical design, financial advice, or advice from a qualified and appropriately accredited installer. Actual system suitability, cost, savings and installation requirements depend on site-specific circumstances."
      }
    ],
    "date": "September 2026"
  },
  {
    "slug": "buying-a-battery-you-can-expand-tomorrow",
    "title": "Buying a battery today that you can expand tomorrow",
    "standfirst": "“Start with a smaller battery and add more later” can be sensible — but only if the expansion rules support your likely timeframe.",
    "category": "PV and batteries",
    "blocks": [
      {
        "type": "image",
        "src": "/images/concept-expandable-battery.jpg",
        "alt": "Illustration of a modular battery stack with an empty slot and a floating module above it."
      },
      {
        "type": "h2",
        "id": "why-future-expansion-needs-to-be-checked-before-you-buy",
        "text": "Why future expansion needs to be checked before you buy"
      },
      {
        "type": "p",
        "text": "Many homeowners are told:"
      },
      {
        "type": "p",
        "text": "“Start with a smaller battery and add more later.”"
      },
      {
        "type": "p",
        "text": "That can be sensible."
      },
      {
        "type": "p",
        "text": "A smaller battery may reduce the upfront cost and allow you to understand how your household uses energy before committing to a larger system."
      },
      {
        "type": "p",
        "text": "But future expansion is not automatic."
      },
      {
        "type": "p",
        "text": "Each manufacturer has its own rules about:"
      },
      {
        "type": "list",
        "items": [
          "Which modules can be added",
          "How long after the original installation expansion is allowed",
          "Whether old and new modules can be mixed",
          "Whether additional modules must be the same model",
          "Whether the warranty remains valid",
          "Whether the system must be recommissioned",
          "Whether the inverter can support the extra capacity",
          "Whether the network connection needs to be updated"
        ]
      },
      {
        "type": "p",
        "text": "The important question is not only:"
      },
      {
        "type": "callout",
        "label": "The incomplete question",
        "text": "“Can this battery be expanded?”",
        "tone": "copper"
      },
      {
        "type": "p",
        "text": "It is:"
      },
      {
        "type": "callout",
        "label": "The better question",
        "text": "“Can this exact battery be expanded when I am likely to need it, under terms that still make financial sense?”",
        "tone": "copper"
      },
      {
        "type": "h2",
        "id": "why-homeowners-want-to-expand-later",
        "text": "Why homeowners want to expand later"
      },
      {
        "type": "p",
        "text": "Household energy use can change."
      },
      {
        "type": "p",
        "text": "You may later have:"
      },
      {
        "type": "list",
        "items": [
          "More people living at home",
          "Higher evening usage",
          "Air-conditioning changes",
          "A home office",
          "An electric vehicle",
          "Additional solar panels",
          "A growing need for backup power",
          "A different electricity plan",
          "Higher energy prices",
          "A desire to export more energy during peak periods"
        ]
      },
      {
        "type": "p",
        "text": "Starting with a smaller battery can be reasonable if the expansion path is genuine."
      },
      {
        "type": "p",
        "text": "But if expansion is only possible within a short period, the decision is more urgent than the sales conversation may suggest."
      },
      {
        "type": "h2",
        "id": "expansion-is-not-just-adding-more-capacity",
        "text": "Expansion is not just adding more capacity"
      },
      {
        "type": "p",
        "text": "A battery system contains more than battery cells."
      },
      {
        "type": "p",
        "text": "Expansion may involve:"
      },
      {
        "type": "list",
        "items": [
          "Additional battery modules",
          "Battery management systems",
          "Inverter capacity",
          "Communication cables",
          "Firmware",
          "System balancing",
          "Monitoring",
          "Protection equipment",
          "Structural or wall-mount requirements",
          "Switchboard capacity",
          "Network approval",
          "Recommissioning",
          "Updated warranty documentation"
        ]
      },
      {
        "type": "p",
        "text": "The battery may be modular, but that does not mean every module can be added at any time."
      },
      {
        "type": "h2",
        "id": "the-age-of-the-modules-matters",
        "text": "The age of the modules matters"
      },
      {
        "type": "p",
        "text": "Battery modules age from the time they are manufactured, stored, installed and used."
      },
      {
        "type": "p",
        "text": "If new modules are added to older modules, the system may need to manage differences in:"
      },
      {
        "type": "list",
        "items": [
          "State of charge",
          "State of health",
          "Internal resistance",
          "Usable capacity",
          "Cell balancing",
          "Firmware",
          "Warranty period"
        ]
      },
      {
        "type": "p",
        "text": "If older and newer modules cannot be balanced properly, the additional capacity may not perform as expected."
      },
      {
        "type": "p",
        "text": "Ask the manufacturer or installer:"
      },
      {
        "type": "checklist",
        "items": [
          "Can new and old modules be mixed?",
          "Is there a maximum age difference?",
          "Do the modules need to be the same model?",
          "Do they need to be from the same production batch?",
          "Does the original system need to be recalibrated?",
          "Does expansion change the performance warranty?"
        ]
      },
      {
        "type": "h2",
        "id": "goodwe-check-the-expansion-window",
        "text": "GoodWe: check the expansion window"
      },
      {
        "type": "p",
        "text": "For the GoodWe system being considered, the expansion terms should be read carefully."
      },
      {
        "type": "p",
        "text": "The expansion rule communicated for the relevant system is that additional modules must be installed within 12 months of the initial installation."
      },
      {
        "type": "p",
        "text": "That creates an important planning issue."
      },
      {
        "type": "p",
        "text": "If you install a smaller system today and decide two or three years later that you need more capacity, the original system may no longer be eligible for expansion under the manufacturer's published conditions."
      },
      {
        "type": "p",
        "text": "You may need to:"
      },
      {
        "type": "list",
        "items": [
          "Replace the original battery system",
          "Use a separate battery system",
          "Accept a different warranty position",
          "Pay additional integration costs",
          "Reconsider the inverter",
          "Install a new system rather than adding modules"
        ]
      },
      {
        "type": "p",
        "text": "The 12-month rule should not be treated as a minor technical detail."
      },
      {
        "type": "p",
        "text": "It can completely change the meaning of “expandable”."
      },
      {
        "type": "label",
        "text": "Questions to ask about goodwe"
      },
      {
        "type": "checklist",
        "items": [
          "Which exact GoodWe model is being quoted?",
          "Does the 12-month rule apply to this model?",
          "Is the period measured from manufacture, purchase, commissioning or installation?",
          "What happens if the installer cannot source modules within 12 months?",
          "Can old and new modules be mixed?",
          "Are additional modules covered under the original warranty or a new warranty?",
          "Does adding modules change the warranty start date?",
          "Is the original installer required to complete the expansion?",
          "What happens if the original installer is no longer trading?",
          "Does the inverter support the intended final capacity?"
        ]
      },
      {
        "type": "p",
        "text": "GoodWe's official Australian warranty library contains model-specific documents, so the quote should identify the exact battery model and link to the relevant terms."
      },
      {
        "type": "h2",
        "id": "sigenergy-a-more-flexible-modular-approach",
        "text": "Sigenergy: a more flexible modular approach"
      },
      {
        "type": "p",
        "text": "Sigenergy promotes a modular SigenStor design that supports future expansion."
      },
      {
        "type": "p",
        "text": "Its product information states that Sigen Battery systems can use mixed new and old batteries, subject to the applicable system configuration."
      },
      {
        "type": "p",
        "text": "Sigenergy describes the system as supporting:"
      },
      {
        "type": "list",
        "items": [
          "Stackable battery modules",
          "Expansion over time",
          "Mixed use of new and old battery packs",
          "Parallel expansion",
          "Different capacity and state-of-health combinations"
        ]
      },
      {
        "type": "p",
        "text": "That is a materially different expansion proposition from a system with a strict one-year expansion window."
      },
      {
        "type": "p",
        "text": "However, “no practical time limit” should still be verified against the current Australian warranty and installation terms for the exact product."
      },
      {
        "type": "p",
        "text": "Ask for written confirmation that:"
      },
      {
        "type": "checklist",
        "items": [
          "Expansion is permitted after the initial warranty period has started",
          "Old and new modules can be mixed",
          "Capacity and state-of-health differences are managed by the system",
          "The additional modules remain covered",
          "The original modules remain covered",
          "Expansion does not reduce the performance warranty",
          "The inverter and control system support the final configuration",
          "New modules will remain available",
          "An authorised installer must complete the work"
        ]
      },
      {
        "type": "p",
        "text": "A flexible product design is valuable."
      },
      {
        "type": "p",
        "text": "The warranty terms still matter."
      },
      {
        "type": "h2",
        "id": "the-inverter-can-limit-the-expansion",
        "text": "The inverter can limit the expansion"
      },
      {
        "type": "p",
        "text": "A battery may be expandable while the inverter is not."
      },
      {
        "type": "p",
        "text": "Before planning future growth, ask:"
      },
      {
        "type": "checklist",
        "items": [
          "What is the inverter's maximum battery capacity?",
          "What is its maximum charge rate?",
          "What is its maximum discharge rate?",
          "Can the inverter support the intended final system?",
          "Will the battery expansion increase available power or only stored energy?",
          "Will backup loads be affected?",
          "Will the switchboard need modification?",
          "Will network approval need to be updated?",
          "Can the system support future solar expansion as well?"
        ]
      },
      {
        "type": "p",
        "text": "Adding more kilowatt-hours does not necessarily mean the home can discharge more kilowatts at once."
      },
      {
        "type": "p",
        "text": "That distinction matters if the future goal is:"
      },
      {
        "type": "list",
        "items": [
          "Whole-home backup",
          "Larger evening loads",
          "Air-conditioning",
          "Electric vehicle charging",
          "Higher export revenue",
          "More simultaneous appliances"
        ]
      },
      {
        "type": "h2",
        "id": "expansion-can-cost-more-than-expected",
        "text": "Expansion can cost more than expected"
      },
      {
        "type": "p",
        "text": "The first installation may appear cheaper if you start small."
      },
      {
        "type": "p",
        "text": "But a later expansion may include:"
      },
      {
        "type": "list",
        "items": [
          "New battery modules",
          "Labour",
          "Travel",
          "Scaffolding or access",
          "Electrical work",
          "Firmware updates",
          "Recommissioning",
          "Network fees",
          "Additional protection",
          "Removal or rearrangement of existing equipment",
          "A different price for the same hardware",
          "A different rebate position",
          "A new warranty process"
        ]
      },
      {
        "type": "p",
        "text": "The final installed cost per kilowatt-hour may be higher when the system is expanded later."
      },
      {
        "type": "p",
        "text": "Ask the installer for two prices:"
      },
      {
        "type": "checklist",
        "items": [
          "The price for the proposed initial system",
          "The estimated total cost if the system reaches the intended final size"
        ]
      },
      {
        "type": "p",
        "text": "Also ask whether the second-stage price is guaranteed or only an estimate."
      },
      {
        "type": "h2",
        "id": "the-rebate-may-not-work-the-same-way-later",
        "text": "The rebate may not work the same way later"
      },
      {
        "type": "p",
        "text": "Government battery support can change over time."
      },
      {
        "type": "p",
        "text": "The applicable discount may depend on:"
      },
      {
        "type": "list",
        "items": [
          "Installation date",
          "Usable battery capacity",
          "Program rules",
          "Product eligibility",
          "Installer accreditation",
          "Whether the expansion is treated as a new system",
          "Whether the existing system is modified",
          "Whether additional capacity qualifies"
        ]
      },
      {
        "type": "p",
        "text": "Do not assume that adding modules later will receive the same support as installing the full capacity today."
      },
      {
        "type": "p",
        "text": "Ask:"
      },
      {
        "type": "checklist",
        "items": [
          "Is the expansion eligible for the current program?",
          "Is the discount based on the additional capacity only?",
          "Does expansion affect the original claim?",
          "What happens if the program rules change?",
          "Is the quoted expansion plan dependent on a future rebate?"
        ]
      },
      {
        "type": "h2",
        "id": "battery-ready-is-not-a-complete-answer",
        "text": "“Battery-ready” is not a complete answer"
      },
      {
        "type": "p",
        "text": "A solar quote may describe a system as:"
      },
      {
        "type": "list",
        "items": [
          "Battery-ready",
          "Expandable",
          "Future-proof",
          "Modular",
          "Upgradeable",
          "Storage-compatible"
        ]
      },
      {
        "type": "p",
        "text": "Ask the installer to define the term."
      },
      {
        "type": "p",
        "text": "A battery-ready solar system may mean only that:"
      },
      {
        "type": "list",
        "items": [
          "The inverter can connect to a battery later",
          "Space has been left for equipment",
          "The switchboard has been prepared",
          "The system supports a specific battery family",
          "The original inverter has enough capacity"
        ]
      },
      {
        "type": "p",
        "text": "It does not necessarily mean:"
      },
      {
        "type": "list",
        "items": [
          "Any battery can be added",
          "The battery can be added years later",
          "The same warranty will apply",
          "New and old modules can be mixed",
          "The final system will be cheaper",
          "Network approval is guaranteed",
          "The installer will still be available"
        ]
      },
      {
        "type": "p",
        "text": "Get the future configuration in writing."
      },
      {
        "type": "h2",
        "id": "questions-to-ask-before-buying",
        "text": "Questions to ask before buying"
      },
      {
        "type": "p",
        "text": "Ask the installer:"
      },
      {
        "type": "checklist",
        "items": [
          "What is the maximum final battery capacity?",
          "How long do I have to expand?",
          "Is that period stated in the manufacturer's warranty?",
          "Can old and new modules be mixed?",
          "Is there a maximum age difference?",
          "Must all modules be the same model?",
          "Must they be from the same production batch?",
          "What happens if the battery is discontinued?",
          "What happens if the installer stops trading?",
          "Can the inverter support the final capacity?",
          "Will the backup output increase?",
          "Will the export capacity change?",
          "Will network approval need to be updated?",
          "Will the battery rebate apply to future expansion?",
          "Will the original warranty continue?",
          "Who pays for recommissioning?",
          "What will the full expanded system cost?",
          "Is the future expansion price guaranteed?"
        ]
      },
      {
        "type": "p",
        "text": "If the answers are vague, the system is not yet clearly expandable."
      },
      {
        "type": "h2",
        "id": "when-starting-small-makes-sense",
        "text": "When starting small makes sense"
      },
      {
        "type": "p",
        "text": "Starting with a smaller battery may be sensible when:"
      },
      {
        "type": "list",
        "items": [
          "Your current usage is modest",
          "You are not sure how much storage you need",
          "The expansion terms are generous",
          "The manufacturer supports old and new modules",
          "The inverter has sufficient future capacity",
          "The total expansion cost is documented",
          "The warranty remains clear",
          "You have confirmed the plan and tariff",
          "The original installer has a credible support model"
        ]
      },
      {
        "type": "p",
        "text": "The expansion pathway should be a feature you can verify, not just a sales promise."
      },
      {
        "type": "label",
        "text": "When buying the full system may be better"
      },
      {
        "type": "p",
        "text": "Installing the intended final capacity at the beginning may be more sensible when:"
      },
      {
        "type": "list",
        "items": [
          "You already know your long-term usage",
          "You want whole-home backup",
          "You have high evening demand",
          "The expansion window is short",
          "Future modules may not be available",
          "The rebate may reduce over time",
          "Later labour will be expensive",
          "The warranty becomes complicated after expansion",
          "Your preferred electricity plan rewards a larger battery",
          "You want to avoid two installation events"
        ]
      },
      {
        "type": "p",
        "text": "The right decision depends on the full ownership cost, not only today's deposit."
      },
      {
        "type": "h2",
        "id": "before-you-request-an-introduction",
        "text": "Before you request an introduction"
      },
      {
        "type": "p",
        "text": "Watts Better can help you consider whether the initial battery size is appropriate for your household."
      },
      {
        "type": "p",
        "text": "The report can help show:"
      },
      {
        "type": "list",
        "items": [
          "Your current energy usage",
          "Your evening demand",
          "Your solar surplus",
          "Whether storage appears worthwhile",
          "Whether a smaller system may be sufficient",
          "Whether future capacity may be useful"
        ]
      },
      {
        "type": "p",
        "text": "The 15-minute chat can then clarify:"
      },
      {
        "type": "list",
        "items": [
          "Your likely future energy needs",
          "Whether you may add an EV or other large load",
          "Whether backup power matters",
          "Whether expansion is a realistic plan",
          "What equipment and documents to photograph",
          "Which questions to take to an installer"
        ]
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "See what your numbers show — then book a 15-minute chat.",
        "links": [
          {
            "label": "See what your numbers show",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "h2",
        "id": "the-bottom-line",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "“Start small and expand later” can be a sensible strategy."
      },
      {
        "type": "p",
        "text": "But only if the expansion rules support your likely timeframe."
      },
      {
        "type": "p",
        "text": "Before choosing a battery, confirm:"
      },
      {
        "type": "list",
        "items": [
          "How long you have to add modules",
          "Which modules can be added",
          "Whether old and new modules can be mixed",
          "Whether the warranty remains intact",
          "Whether the inverter can support the final system",
          "Whether the rebate will apply later",
          "What the full expansion will cost",
          "Who will complete the work"
        ]
      },
      {
        "type": "p",
        "text": "A battery is not truly future-proof because the sales brochure says it is modular."
      },
      {
        "type": "p",
        "text": "It is future-proof only when the hardware, software, warranty, installer and expansion terms all work together."
      },
      {
        "type": "p",
        "text": "The cheapest battery today may be the most expensive battery to expand later."
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "Can I add capacity to a battery later?",
            "a": "Sometimes, but only within the rules set by the product. Expansion is not just adding more capacity: the age of the modules and the warranty window matter."
          },
          {
            "q": "Why can the inverter limit expansion?",
            "a": "The inverter caps how much battery capacity the system can manage. A plan to expand may need a larger inverter, or a different product, from the start."
          },
          {
            "q": "Does battery-ready mean I can expand?",
            "a": "Not by itself. It usually means the wiring or mounting is prepared. The expansion rules, module age and inverter limits still apply."
          },
          {
            "q": "Can expansion cost more than expected?",
            "a": "Yes. Later modules may not match the originals, any rebate may not apply the same way, and the work itself may be more involved."
          }
        ]
      },
      {
        "type": "h2",
        "id": "sources",
        "text": "Sources"
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "GoodWe Australia — warranty library",
            "href": "https://www.goodwe.com.au/warranty"
          },
          {
            "label": "Sigenergy — SigenStor; Sigenergy — SigenStor Neo",
            "href": "https://www.sigenergy.com/"
          },
          {
            "label": "DCCEEW — Cheaper Home Batteries Program",
            "href": "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries"
          },
          {
            "label": "GoodWe Lynx F G2 Series",
            "href": "https://www.goodwe.com.au/"
          },
          {
            "label": "GoodWe Lynx U G3 Series",
            "href": "https://www.goodwe.com.au/"
          },
          {
            "label": "Sigenergy — SigenStor",
            "href": "https://www.sigenergy.com/"
          },
          {
            "label": "Sigenergy — SigenStor Neo",
            "href": "https://www.sigenergy.com/"
          },
          {
            "label": "Sigenergy SigenStor user manual",
            "href": "https://www.sigenergy.com/"
          },
          {
            "label": "ACCC — solar panels and home batteries",
            "href": "https://www.accc.gov.au/consumers/specific-products-and-activities/solar-panel-systems-and-home-batteries"
          }
        ]
      },
      {
        "type": "h2",
        "id": "want-to-understand-your-own-position",
        "text": "Want to understand your own position?"
      },
      {
        "type": "p",
        "text": "Your current energy usage can help show whether you need the full battery capacity today."
      },
      {
        "type": "p",
        "text": "The manufacturer's expansion rules can show whether “add more later” is realistic."
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "Run your analysis — then book a 15-minute chat.",
        "links": [
          {
            "label": "Run your analysis",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "p",
        "text": "You do not need to request an installer introduction to receive or discuss your analysis."
      },
      {
        "type": "note",
        "text": "General information only. This article provides household-level guidance to support informed decision-making. It does not replace a site inspection, electrical design, financial advice, or advice from a qualified and appropriately accredited installer. Actual system suitability, cost, savings and installation requirements depend on site-specific circumstances."
      }
    ],
    "date": "September 2026"
  },
  {
    "slug": "your-roof-may-limit-your-battery",
    "title": "Your roof may limit your battery — here's where bidirectional charging fits",
    "standfirst": "A battery cannot create more solar energy than your roof allows. If your household needs more stored energy than your roof can produce, bidirectional EV charging may be part of the answer.",
    "category": "PV and batteries",
    "blocks": [
      {
        "type": "image",
        "src": "/images/concept-roof-limits-battery.jpg",
        "alt": "Illustration of a small house with a modest roof, an oversized battery outline beside it and a car parked under a carport."
      },
      {
        "type": "h2",
        "id": "when-your-ev-could-become-the-next-battery",
        "text": "When your EV could become the next battery"
      },
      {
        "type": "p",
        "text": "A home battery can store solar energy."
      },
      {
        "type": "p",
        "text": "But it cannot create more solar energy than your roof, panels, orientation, shading and system design allow."
      },
      {
        "type": "p",
        "text": "This creates an important relationship:"
      },
      {
        "type": "p",
        "text": "The size of the solar system influences how much battery capacity your home can regularly use."
      },
      {
        "type": "p",
        "text": "If your household needs a larger amount of stored energy than your roof can produce, simply adding more stationary battery capacity may not produce the result you expect."
      },
      {
        "type": "p",
        "text": "That is where bidirectional charging may become important."
      },
      {
        "type": "h2",
        "id": "a-battery-does-not-create-energy",
        "text": "A battery does not create energy"
      },
      {
        "type": "p",
        "text": "A battery stores energy generated elsewhere."
      },
      {
        "type": "p",
        "text": "For a solar home, that energy usually comes from:"
      },
      {
        "type": "list",
        "items": [
          "Rooftop solar",
          "The electricity grid",
          "A combination of solar and grid charging"
        ]
      },
      {
        "type": "p",
        "text": "If the roof is already full, you may not be able to add enough solar panels to support a much larger battery."
      },
      {
        "type": "p",
        "text": "The limitation may come from:"
      },
      {
        "type": "list",
        "items": [
          "Available roof area",
          "Roof orientation",
          "Shading",
          "Roof structures",
          "Panel layout",
          "Inverter capacity",
          "Network export limits",
          "Switchboard capacity",
          "Local planning or installation constraints"
        ]
      },
      {
        "type": "p",
        "text": "The Australian Government notes that available sunny roof area can be a limiting factor in residential solar design, particularly in urban homes."
      },
      {
        "type": "p",
        "text": "It also notes that network connection and export limits can restrict system design."
      },
      {
        "type": "h2",
        "id": "the-storage-problem",
        "text": "The storage problem"
      },
      {
        "type": "p",
        "text": "Imagine a home with:"
      },
      {
        "type": "list",
        "items": [
          "Limited sunny roof space",
          "High evening electricity use",
          "A desire for backup power",
          "A household that may add an electric vehicle",
          "More storage demand than the roof can regularly supply"
        ]
      },
      {
        "type": "p",
        "text": "The homeowner may want a larger battery."
      },
      {
        "type": "p",
        "text": "But a larger stationary battery does not automatically mean more useful solar energy."
      },
      {
        "type": "p",
        "text": "If there is not enough surplus solar to charge it, the battery may need to charge from the grid."
      },
      {
        "type": "p",
        "text": "That may still be useful when:"
      },
      {
        "type": "list",
        "items": [
          "Grid prices are low",
          "Wholesale prices are favourable",
          "The electricity plan rewards time-shifting",
          "Backup capacity is the priority",
          "The household needs energy overnight"
        ]
      },
      {
        "type": "p",
        "text": "But the financial model changes."
      },
      {
        "type": "p",
        "text": "The system may no longer be based mainly on storing free rooftop solar."
      },
      {
        "type": "p",
        "text": "It may rely more heavily on:"
      },
      {
        "type": "list",
        "items": [
          "Grid arbitrage",
          "Wholesale pricing",
          "Retailer automation",
          "Export revenue",
          "Backup value",
          "Battery cycling",
          "Plan compatibility"
        ]
      },
      {
        "type": "h2",
        "id": "three-ways-to-respond-to-limited-roof-space",
        "text": "Three ways to respond to limited roof space"
      },
      {
        "type": "p",
        "text": "When roof space limits solar production, there are several possible responses."
      },
      {
        "type": "label",
        "text": "Option 1 — install a smaller battery"
      },
      {
        "type": "p",
        "text": "A smaller battery may better match the amount of solar your roof can produce and the amount of energy your household uses later."
      },
      {
        "type": "p",
        "text": "This may provide:"
      },
      {
        "type": "list",
        "items": [
          "Lower upfront cost",
          "Less unused capacity",
          "Simpler operation",
          "Lower battery cycling",
          "A shorter or more credible payback"
        ]
      },
      {
        "type": "p",
        "text": "The downside is that the system may not provide the level of backup or evening coverage you wanted."
      },
      {
        "type": "label",
        "text": "Option 2 — charge a larger battery from the grid"
      },
      {
        "type": "p",
        "text": "A larger battery can sometimes be charged from the grid when electricity prices are low."
      },
      {
        "type": "p",
        "text": "This may be attractive on a wholesale-linked or time-of-use plan."
      },
      {
        "type": "p",
        "text": "However, the result depends on:"
      },
      {
        "type": "list",
        "items": [
          "Price differences",
          "Plan fees",
          "Battery efficiency",
          "Battery throughput",
          "Available charging windows",
          "Export opportunities",
          "Warranty conditions",
          "Your ability to manage or automate the system"
        ]
      },
      {
        "type": "p",
        "text": "A larger battery charged from the grid is not the same financial proposition as a battery charged mainly from surplus solar."
      },
      {
        "type": "label",
        "text": "Option 3 — use the ev as additional storage"
      },
      {
        "type": "p",
        "text": "A compatible electric vehicle may provide a much larger energy store than a typical home battery."
      },
      {
        "type": "p",
        "text": "With the correct bidirectional charger and system configuration, the EV may be able to:"
      },
      {
        "type": "list",
        "items": [
          "Charge from the grid",
          "Charge from solar",
          "Supply the home",
          "Support backup power",
          "Export to the grid",
          "Participate in a retailer or VPP program"
        ]
      },
      {
        "type": "p",
        "text": "This is known as vehicle-to-everything, or V2X."
      },
      {
        "type": "h2",
        "id": "what-is-bidirectional-charging",
        "text": "What is bidirectional charging?"
      },
      {
        "type": "p",
        "text": "A normal EV charger sends electricity into the vehicle."
      },
      {
        "type": "p",
        "text": "A bidirectional charger allows energy to flow in both directions."
      },
      {
        "type": "label",
        "text": "V2h — vehicle to home"
      },
      {
        "type": "p",
        "text": "V2H allows the EV battery to supply electricity to the home."
      },
      {
        "type": "p",
        "text": "It may be used to:"
      },
      {
        "type": "list",
        "items": [
          "Reduce grid purchases",
          "Supply the home during expensive periods",
          "Support backup power during an outage",
          "Use stored solar energy after dark"
        ]
      },
      {
        "type": "label",
        "text": "V2g — vehicle to grid"
      },
      {
        "type": "p",
        "text": "V2G allows the EV to send electricity to the grid."
      },
      {
        "type": "p",
        "text": "It may be used to:"
      },
      {
        "type": "list",
        "items": [
          "Export during high-value periods",
          "Participate in retailer or VPP programs",
          "Support the electricity network",
          "Respond to wholesale prices"
        ]
      },
      {
        "type": "label",
        "text": "V2l — vehicle to load"
      },
      {
        "type": "p",
        "text": "V2L allows the vehicle to power individual appliances or equipment."
      },
      {
        "type": "p",
        "text": "Examples include:"
      },
      {
        "type": "list",
        "items": [
          "Tools",
          "Camping equipment",
          "Emergency appliances",
          "Appliances connected through vehicle outlets"
        ]
      },
      {
        "type": "p",
        "text": "V2L is not the same as powering the entire home."
      },
      {
        "type": "p",
        "text": "The Australian Government warns that not all EVs or charging systems support V2X, and that very few EVs currently have V2X capability confirmed by the vehicle manufacturer."
      },
      {
        "type": "h2",
        "id": "the-ev-is-not-automatically-a-home-battery",
        "text": "The EV is not automatically a home battery"
      },
      {
        "type": "p",
        "text": "For bidirectional charging to work, several components must be compatible."
      },
      {
        "type": "p",
        "text": "You need to check:"
      },
      {
        "type": "checklist",
        "items": [
          "The EV model",
          "The EV battery and software",
          "The charging connector",
          "The bidirectional charger",
          "The home battery",
          "The solar inverter",
          "The energy management system",
          "The backup equipment",
          "The electricity plan",
          "The distribution network",
          "The vehicle warranty"
        ]
      },
      {
        "type": "p",
        "text": "A vehicle may support V2L but not V2H or V2G."
      },
      {
        "type": "p",
        "text": "A vehicle may technically support bidirectional charging overseas but not have the feature enabled or supported in Australia."
      },
      {
        "type": "p",
        "text": "A charger may support a vehicle but not integrate with your home battery."
      },
      {
        "type": "p",
        "text": "A retailer may support V2G but not your vehicle or charger."
      },
      {
        "type": "p",
        "text": "The full system must be checked."
      },
      {
        "type": "h2",
        "id": "the-battery-brand-can-affect-your-future-options",
        "text": "The battery brand can affect your future options"
      },
      {
        "type": "p",
        "text": "Battery selection can determine the architecture of the rest of the home energy system."
      },
      {
        "type": "p",
        "text": "Some manufacturers are building ecosystems that combine:"
      },
      {
        "type": "list",
        "items": [
          "Solar inverter",
          "Stationary battery",
          "Battery management",
          "Energy management system",
          "Backup hardware",
          "EV charger",
          "Bidirectional charging",
          "Retailer or VPP integration"
        ]
      },
      {
        "type": "p",
        "text": "Sigenergy, for example, promotes a SigenStor ecosystem that combines stationary storage and bidirectional EV charging options."
      },
      {
        "type": "p",
        "text": "Other battery systems may rely on separate manufacturers and separate compatibility arrangements."
      },
      {
        "type": "p",
        "text": "Neither approach is automatically better."
      },
      {
        "type": "p",
        "text": "But the ecosystem should be considered before the first battery is purchased."
      },
      {
        "type": "p",
        "text": "Ask:"
      },
      {
        "type": "checklist",
        "items": [
          "Can the system support a bidirectional EV charger later?",
          "Which EVs are supported?",
          "Which charger is required?",
          "Is the charger approved for connection in Queensland?",
          "Can the EV supply the home during a grid outage?",
          "Can the EV export to the grid?",
          "Does the manufacturer support the configuration?",
          "Does the battery warranty allow the planned operating mode?",
          "Does the retailer or VPP support the complete system?"
        ]
      },
      {
        "type": "h2",
        "id": "queensland-network-approval-matters",
        "text": "Queensland network approval matters"
      },
      {
        "type": "p",
        "text": "For Brisbane homes connected to the Energex network, bidirectional charging is not simply an appliance installation."
      },
      {
        "type": "p",
        "text": "Energex states that a connection application must be submitted for bidirectional charging equipment connected to the electricity grid."
      },
      {
        "type": "p",
        "text": "This is important because V2H and V2G equipment may export electricity back to the home electrical installation or the grid."
      },
      {
        "type": "p",
        "text": "The system must be designed to:"
      },
      {
        "type": "list",
        "items": [
          "Operate safely",
          "Prevent dangerous backfeeding",
          "Disconnect correctly during outages",
          "Meet applicable inverter and connection requirements",
          "Work with the property's phase and supply",
          "Comply with Energex requirements"
        ]
      },
      {
        "type": "p",
        "text": "Do not assume that a charger advertised as bidirectional is automatically approved for your property."
      },
      {
        "type": "p",
        "text": "Ask the installer to confirm:"
      },
      {
        "type": "checklist",
        "items": [
          "Whether an Energex application is required",
          "Who will submit it",
          "What equipment is being proposed",
          "What export arrangement applies",
          "Whether the installation can support V2H, V2G or both",
          "Whether additional switchboard equipment is required"
        ]
      },
      {
        "type": "h2",
        "id": "the-vehicle-warranty-matters",
        "text": "The vehicle warranty matters"
      },
      {
        "type": "p",
        "text": "Using an EV as a home or grid battery may increase the number of charge and discharge cycles."
      },
      {
        "type": "p",
        "text": "That can affect:"
      },
      {
        "type": "list",
        "items": [
          "Battery degradation",
          "Vehicle warranty",
          "Servicing",
          "Manufacturer support",
          "Minimum reserve settings",
          "Driving range availability"
        ]
      },
      {
        "type": "p",
        "text": "The Australian Government advises homeowners to follow the vehicle manufacturer's information about V2X capabilities, installation, charger compatibility and charging practices."
      },
      {
        "type": "p",
        "text": "Before using V2H or V2G, obtain written confirmation from the vehicle manufacturer or authorised representative that the intended use is supported."
      },
      {
        "type": "p",
        "text": "Do not rely solely on the charger manufacturer saying that the vehicle is technically compatible."
      },
      {
        "type": "p",
        "text": "You need to know whether the vehicle manufacturer supports the use under the vehicle warranty."
      },
      {
        "type": "h2",
        "id": "why-bidirectional-charging-can-solve-a-roof-space-problem",
        "text": "Why bidirectional charging can solve a roof-space problem"
      },
      {
        "type": "p",
        "text": "Bidirectional charging can provide additional energy storage without requiring additional rooftop panels."
      },
      {
        "type": "p",
        "text": "That may be useful when:"
      },
      {
        "type": "list",
        "items": [
          "The roof is already full",
          "The household needs more storage",
          "The EV is parked at home for long periods",
          "The EV has a compatible battery and charging system",
          "The household wants backup power",
          "The electricity plan rewards charging and exporting at particular times",
          "The solar system cannot be expanded economically"
        ]
      },
      {
        "type": "p",
        "text": "The EV effectively becomes an additional energy asset."
      },
      {
        "type": "p",
        "text": "But it is only available when:"
      },
      {
        "type": "list",
        "items": [
          "The vehicle is at home",
          "The vehicle has enough charge",
          "The owner permits discharge",
          "The charger is operating",
          "The network permits the connection",
          "The retailer supports the arrangement",
          "The vehicle warranty allows it"
        ]
      },
      {
        "type": "p",
        "text": "The EV is also a transport asset."
      },
      {
        "type": "p",
        "text": "If you need the car for an early trip, preserving its driving range may matter more than exporting energy."
      },
      {
        "type": "h2",
        "id": "expansion-and-bidirectional-charging-are-connected",
        "text": "Expansion and bidirectional charging are connected"
      },
      {
        "type": "p",
        "text": "A homeowner may plan to:"
      },
      {
        "type": "list",
        "items": [
          "Install solar now",
          "Add a stationary battery",
          "Add an EV later",
          "Use the EV for V2H or V2G",
          "Expand the energy system over time"
        ]
      },
      {
        "type": "p",
        "text": "That plan needs to be considered before the initial battery and inverter are selected."
      },
      {
        "type": "p",
        "text": "Check:"
      },
      {
        "type": "checklist",
        "items": [
          "Whether the battery can be expanded",
          "Whether the inverter can support the extra capacity",
          "Whether the energy management system can control both batteries",
          "Whether the EV charger can integrate with the battery",
          "Whether the charger is compatible with the vehicle",
          "Whether the system can prioritise home backup",
          "Whether the network permits the combined export",
          "Whether the electricity plan supports the complete system"
        ]
      },
      {
        "type": "p",
        "text": "A battery system that is excellent as a standalone product may not be the best foundation for future bidirectional charging."
      },
      {
        "type": "h2",
        "id": "what-to-ask-before-buying-the-first-battery",
        "text": "What to ask before buying the first battery"
      },
      {
        "type": "p",
        "text": "Ask your installer:"
      },
      {
        "type": "checklist",
        "items": [
          "How much sunny roof space is available?",
          "What is the maximum realistic solar system size?",
          "How much energy will the roof produce across the year?",
          "What battery size is actually supported by that production?",
          "What happens if the household needs more storage later?",
          "Can the battery be expanded?",
          "How long do I have to expand it?",
          "Can an EV later operate as a second battery?",
          "Which bidirectional chargers are compatible?",
          "Which EV models are supported?",
          "Does the vehicle manufacturer support V2H or V2G?",
          "Is the system approved for Energex connection?",
          "Can it provide whole-home backup?",
          "Can it export to the grid?",
          "Which electricity plans can use the system?",
          "Does the warranty permit bidirectional operation?",
          "What happens if the EV is away from home?",
          "What happens if the charger or software is offline?"
        ]
      },
      {
        "type": "h2",
        "id": "do-not-design-a-future-system-around-a-promise",
        "text": "Do not design a future system around a promise"
      },
      {
        "type": "p",
        "text": "“V2H-ready” can mean different things."
      },
      {
        "type": "p",
        "text": "It may mean:"
      },
      {
        "type": "list",
        "items": [
          "The system has a compatible inverter",
          "A future charger may be added",
          "The manufacturer intends to support the technology",
          "The system has a communications pathway",
          "A charger is available but not yet approved",
          "The vehicle may be compatible",
          "The system is waiting on software or network approval"
        ]
      },
      {
        "type": "p",
        "text": "Ask what is available today."
      },
      {
        "type": "p",
        "text": "Ask what is only planned."
      },
      {
        "type": "p",
        "text": "Ask what is supported by written warranty documentation."
      },
      {
        "type": "p",
        "text": "Ask what has already been approved for your network."
      },
      {
        "type": "p",
        "text": "The future opportunity may be significant, but the future system must not be treated as guaranteed."
      },
      {
        "type": "h2",
        "id": "before-you-request-an-introduction",
        "text": "Before you request an introduction"
      },
      {
        "type": "p",
        "text": "Watts Better can help clarify the relationship between:"
      },
      {
        "type": "list",
        "items": [
          "Your available roof space",
          "Your current electricity use",
          "Your likely solar production",
          "Your battery requirement",
          "Your future EV plans",
          "Your preferred electricity plan",
          "Your need for backup power"
        ]
      },
      {
        "type": "p",
        "text": "The report explains the numbers."
      },
      {
        "type": "p",
        "text": "The 15-minute chat clarifies the home and the future requirements."
      },
      {
        "type": "p",
        "text": "The Photo Capture helps identify the meter box, switchboard, roof and existing equipment."
      },
      {
        "type": "p",
        "text": "Then the installer introduction is your choice."
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "See what your numbers show — then book a 15-minute chat.",
        "links": [
          {
            "label": "See what your numbers show",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "h2",
        "id": "the-bottom-line",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "Roof space can limit how much solar a home can generate."
      },
      {
        "type": "p",
        "text": "A larger stationary battery may still be possible, but if it cannot be charged by surplus solar, the financial model may depend more heavily on grid charging, wholesale pricing or the electricity plan."
      },
      {
        "type": "p",
        "text": "Bidirectional EV charging can provide another way to add storage without adding more panels."
      },
      {
        "type": "p",
        "text": "But it depends on:"
      },
      {
        "type": "list",
        "items": [
          "The vehicle",
          "The charger",
          "The battery ecosystem",
          "The inverter",
          "The network",
          "The retailer",
          "The warranty",
          "The homeowner's driving needs"
        ]
      },
      {
        "type": "p",
        "text": "Bidirectional charging is not simply an EV feature."
      },
      {
        "type": "p",
        "text": "It is a complete home energy system decision."
      },
      {
        "type": "p",
        "text": "If future storage matters, choose the first battery with the future system in mind."
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "Can a battery make up for limited roof space?",
            "a": "No. A battery stores energy, it does not create it. If your roof cannot generate enough, a battery cannot close the shortfall."
          },
          {
            "q": "What options help when roof space is limited?",
            "a": "Reducing demand, sizing storage to what the roof can actually charge, and considering bidirectional charging where the vehicle supports it."
          },
          {
            "q": "Is an EV automatically a home battery?",
            "a": "No. Bidirectional charging depends on the vehicle, the charger and network approval. An EV is not automatically a home battery."
          },
          {
            "q": "Why does the battery brand matter here?",
            "a": "The brand can affect your future options, including whether the system can be expanded or integrated with bidirectional charging later."
          }
        ]
      },
      {
        "type": "h2",
        "id": "sources",
        "text": "Sources"
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "Australian Government — sizing your solar system",
            "href": "https://www.energy.gov.au/solar"
          },
          {
            "label": "Australian Government — vehicle-to-everything opportunities",
            "href": "https://www.energy.gov.au/solar"
          },
          {
            "label": "Energex — bidirectional EV charging",
            "href": "https://www.energex.com.au/"
          },
          {
            "label": "Energex — vehicle-to-grid EV connections",
            "href": "https://www.energex.com.au/"
          },
          {
            "label": "Energy.gov.au — smarter EV charging",
            "href": "https://www.energy.gov.au/"
          },
          {
            "label": "Sigenergy — SigenStor",
            "href": "https://www.sigenergy.com/"
          },
          {
            "label": "Australian Government — Cheaper Home Batteries Program",
            "href": "https://www.energy.gov.au/news/discounted-batteries-households-through-cheaper-home-batteries-program"
          }
        ]
      },
      {
        "type": "h2",
        "id": "want-to-understand-your-own-position",
        "text": "Want to understand your own position?"
      },
      {
        "type": "p",
        "text": "Your roof may limit solar generation before it limits your ambition for storage."
      },
      {
        "type": "p",
        "text": "Your report can show what your current solar system is likely to support."
      },
      {
        "type": "p",
        "text": "Your chat can clarify whether a future battery, EV or bidirectional system should influence the decision today."
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "Run your analysis — then book a 15-minute chat.",
        "links": [
          {
            "label": "Run your analysis",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "p",
        "text": "You do not need to request an installer introduction to receive or discuss your analysis."
      },
      {
        "type": "note",
        "text": "General information only. This article provides household-level guidance to support informed decision-making. It does not replace a site inspection, electrical design, financial advice, or advice from a qualified and appropriately accredited installer. Actual system suitability, cost, savings and installation requirements depend on site-specific circumstances."
      }
    ],
    "date": "September 2026"
  },
  {
    "slug": "queensland-home-battery-discount-what-changes-over-time",
    "title": "The Queensland home battery discount: what changes over time?",
    "standfirst": "The Cheaper Home Batteries Program changes its STC factor every six months. Here is what Brisbane homeowners need to understand before relying on a rebate estimate.",
    "category": "Queensland",
    "blocks": [
      {
        "type": "image",
        "src": "/images/concept-qld-battery-discount.jpg",
        "alt": "Illustration of descending blocks in a staircase pattern in front of a suburban roofline under a pink sun."
      },
      {
        "type": "p",
        "text": "The federal Cheaper Home Batteries Program is helping reduce the upfront cost of eligible battery installations across Australia."
      },
      {
        "type": "p",
        "text": "For Brisbane homeowners, the program can make a battery more affordable."
      },
      {
        "type": "p",
        "text": "But the discount should not be the only reason to install one."
      },
      {
        "type": "p",
        "text": "The important questions are:"
      },
      {
        "type": "list",
        "items": [
          "Does your home use enough electricity to make a battery useful?",
          "Is there enough solar energy available to charge it?",
          "Is the battery the right size?",
          "Does the quoted saving reflect your actual tariff?",
          "Is the installation being completed by the appropriately accredited people?",
          "What discount actually applies when your battery is installed?"
        ]
      },
      {
        "type": "p",
        "text": "The answer depends on more than the rebate headline."
      },
      {
        "type": "h2",
        "id": "what-is-the-cheaper-home-batteries-program",
        "text": "What is the Cheaper Home Batteries Program?"
      },
      {
        "type": "p",
        "text": "The Cheaper Home Batteries Program provides support for eligible small-scale battery systems through the expansion of the Small-scale Renewable Energy Scheme."
      },
      {
        "type": "p",
        "text": "The support is provided through small-scale technology certificates, commonly called STCs."
      },
      {
        "type": "p",
        "text": "The program is available to eligible:"
      },
      {
        "type": "list",
        "items": [
          "Households",
          "Small businesses",
          "Community organisations"
        ]
      },
      {
        "type": "p",
        "text": "The program supports battery systems from 5 kWh to 100 kWh, subject to the program requirements."
      },
      {
        "type": "p",
        "text": "The Australian Government describes the support as a discount of around 30% on the upfront cost for a range of eligible systems."
      },
      {
        "type": "h2",
        "id": "you-do-not-usually-apply-for-the-discount-yourself",
        "text": "You do not usually apply for the discount yourself"
      },
      {
        "type": "p",
        "text": "Homeowners generally do not submit a separate application to the Australian Government or the Clean Energy Regulator."
      },
      {
        "type": "p",
        "text": "The installer or registered agent usually manages the STC process and passes the value through as an upfront discount on the quote or invoice."
      },
      {
        "type": "p",
        "text": "That means you should ask the installer to show:"
      },
      {
        "type": "checklist",
        "items": [
          "The battery system price",
          "The estimated discount",
          "Any other rebate or incentive",
          "The final price after the discount",
          "Any fees or exclusions",
          "The assumptions used to calculate the discount"
        ]
      },
      {
        "type": "p",
        "text": "Do not rely only on a headline such as “rebate included”."
      },
      {
        "type": "p",
        "text": "Ask to see the calculation."
      },
      {
        "type": "h2",
        "id": "the-discount-changes-over-time",
        "text": "The discount changes over time"
      },
      {
        "type": "p",
        "text": "The value of the support is connected to the STC factor that applies when the battery is installed."
      },
      {
        "type": "p",
        "text": "The current published schedule is:"
      },
      {
        "type": "table",
        "headers": [
          "Installation period",
          "STC factor"
        ],
        "rows": [
          [
            "January–April 2026",
            "8.4"
          ],
          [
            "May–December 2026",
            "6.8"
          ],
          [
            "January–June 2027",
            "5.7"
          ],
          [
            "July–December 2027",
            "5.2"
          ],
          [
            "January–June 2028",
            "4.6"
          ],
          [
            "July–December 2028",
            "4.1"
          ],
          [
            "January–June 2029",
            "3.6"
          ],
          [
            "July–December 2029",
            "3.1"
          ],
          [
            "January–June 2030",
            "2.6"
          ],
          [
            "July–December 2030",
            "2.1"
          ]
        ]
      },
      {
        "type": "p",
        "text": "The next scheduled change is on 1 January 2027."
      },
      {
        "type": "p",
        "text": "The discount that applies to your installation is determined by the relevant program settings when the battery is installed — not simply when you first request a quote."
      },
      {
        "type": "h2",
        "id": "battery-size-also-matters",
        "text": "Battery size also matters"
      },
      {
        "type": "p",
        "text": "The program does not treat every kilowatt-hour of battery capacity in exactly the same way."
      },
      {
        "type": "p",
        "text": "From 1 May 2026, the support structure was adjusted according to system size."
      },
      {
        "type": "p",
        "text": "The program continues to support systems up to 100 kWh, but the level of support tapers across larger capacities."
      },
      {
        "type": "p",
        "text": "This means a larger battery does not automatically receive the same support per kilowatt-hour as a smaller battery."
      },
      {
        "type": "p",
        "text": "Ask your installer:"
      },
      {
        "type": "checklist",
        "items": [
          "What is the usable battery capacity?",
          "What capacity is being used for the STC calculation?",
          "How much of the system receives the highest level of support?",
          "What capacity receives a lower level of support?",
          "Is the quoted discount based on the exact battery model?",
          "Does the quoted discount assume installation before a particular date?",
          "What happens if installation is delayed?"
        ]
      },
      {
        "type": "p",
        "text": "The answer should be shown clearly in the proposal."
      },
      {
        "type": "h2",
        "id": "what-does-this-mean-for-brisbane-homeowners",
        "text": "What does this mean for Brisbane homeowners?"
      },
      {
        "type": "p",
        "text": "The discount is national, but the value of a battery in Brisbane still depends on your household."
      },
      {
        "type": "p",
        "text": "A battery may be more useful when:"
      },
      {
        "type": "list",
        "items": [
          "Your solar system exports a significant amount of energy during the day",
          "Your household uses more electricity in the afternoon or evening",
          "Your grid import rate is higher than your feed-in tariff",
          "Your battery can be regularly charged and discharged",
          "Your system is correctly sized",
          "You expect to remain at the property long enough to benefit from the system"
        ]
      },
      {
        "type": "p",
        "text": "A battery may be less useful when:"
      },
      {
        "type": "list",
        "items": [
          "Your household uses little electricity",
          "Most of your consumption already occurs during daylight",
          "Your existing solar system produces little surplus energy",
          "The proposed battery is larger than your actual evening demand",
          "The financial result depends mainly on optimistic assumptions",
          "The installation cost is high relative to the useful energy the battery can deliver"
        ]
      },
      {
        "type": "p",
        "text": "The discount reduces the upfront cost."
      },
      {
        "type": "p",
        "text": "It does not guarantee that the battery will pay for itself quickly."
      },
      {
        "type": "h2",
        "id": "the-discount-does-not-decide-the-system-size",
        "text": "The discount does not decide the system size"
      },
      {
        "type": "p",
        "text": "A rebate can make a larger battery look more attractive."
      },
      {
        "type": "p",
        "text": "That does not necessarily make a larger battery the right choice."
      },
      {
        "type": "p",
        "text": "The system should still be assessed against:"
      },
      {
        "type": "list",
        "items": [
          "Your electricity usage",
          "Your evening demand",
          "Your solar generation",
          "Your export pattern",
          "Your tariff",
          "Your expected battery utilisation",
          "Your available roof and installation space",
          "Your budget",
          "Your future energy plans"
        ]
      },
      {
        "type": "p",
        "text": "The best battery is not necessarily the battery with the largest discount."
      },
      {
        "type": "p",
        "text": "It is the battery that can perform useful work in your home."
      },
      {
        "type": "h2",
        "id": "what-must-be-checked-before-the-discount-applies",
        "text": "What must be checked before the discount applies?"
      },
      {
        "type": "p",
        "text": "The program has eligibility requirements."
      },
      {
        "type": "p",
        "text": "Before accepting a quote, confirm that:"
      },
      {
        "type": "checklist",
        "items": [
          "The battery is an eligible product",
          "The relevant products appear on the applicable approved product lists",
          "The installer is accredited for the relevant battery work",
          "The installer holds the required Queensland electrical licence",
          "The system will be installed in accordance with applicable requirements",
          "The installation will be complete and commissioned",
          "The STC paperwork will identify the responsible installer",
          "The discount will be shown clearly in the contract"
        ]
      },
      {
        "type": "p",
        "text": "The Clean Energy Regulator states that designers and installers must be accredited by Solar Accreditation Australia for the relevant system type, and installers must also meet applicable electrical licensing requirements."
      },
      {
        "type": "h2",
        "id": "ask-what-happens-if-the-installation-is-delayed",
        "text": "Ask what happens if the installation is delayed"
      },
      {
        "type": "p",
        "text": "The discount settings depend on the relevant installation period."
      },
      {
        "type": "p",
        "text": "Before signing, ask:"
      },
      {
        "type": "checklist",
        "items": [
          "What installation date has been assumed?",
          "What happens if the installation moves into the next STC period?",
          "Who carries the difference if the discount changes?",
          "Is the quoted price fixed?",
          "Is the battery currently available?",
          "Is the installer waiting on network approval?",
          "Are all required upgrades included?",
          "What happens if the final site assessment changes the system?"
        ]
      },
      {
        "type": "p",
        "text": "Get the answer in writing."
      },
      {
        "type": "p",
        "text": "A rebate estimate should not be treated as a guaranteed final price unless the contract clearly says what happens if circumstances change."
      },
      {
        "type": "h2",
        "id": "queensland-programs-are-not-all-the-same",
        "text": "Queensland programs are not all the same"
      },
      {
        "type": "callout",
        "label": "Supercharged Solar for Renters",
        "text": "The Supercharged Solar for Renters program provides eligible Queensland landlords with rebates of up to $3,500 for installing solar on qualifying rental properties. It is a solar-rental program, not a general household battery rebate.",
        "tone": "copper"
      },
      {
        "type": "callout",
        "label": "Solar Bonus Scheme",
        "text": "The former Queensland 44-cent Solar Bonus Scheme is not available to new customers. Existing eligible customers may retain the tariff until its scheduled expiry on 1 July 2028, subject to the scheme rules.",
        "tone": "copper"
      },
      {
        "type": "p",
        "text": "The federal battery discount should not be confused with other Queensland energy programs."
      },
      {
        "type": "p",
        "text": "For example:"
      },
      {
        "type": "p",
        "text": "Always check current information through official government websites."
      },
      {
        "type": "p",
        "text": "Do not rely on an installer's rebate summary without checking the eligibility conditions that apply to your property and installation."
      },
      {
        "type": "h2",
        "id": "do-not-let-the-discount-replace-the-analysis",
        "text": "Do not let the discount replace the analysis"
      },
      {
        "type": "p",
        "text": "The discount can improve the financial case for a battery."
      },
      {
        "type": "p",
        "text": "It cannot answer:"
      },
      {
        "type": "list",
        "items": [
          "How much solar your home can use",
          "How often the battery will cycle",
          "Whether the battery is too large",
          "Whether your tariff suits storage",
          "Whether your switchboard needs work",
          "Whether the proposed system is suitable for your property",
          "Whether the installation will be completed properly"
        ]
      },
      {
        "type": "p",
        "text": "That is why the decision should begin with your electricity data."
      },
      {
        "type": "p",
        "text": "Your bill helps show the energy pattern."
      },
      {
        "type": "p",
        "text": "A 15-minute conversation helps clarify the home."
      },
      {
        "type": "p",
        "text": "The Photo Capture helps identify the physical information that a bill cannot show."
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "See what your numbers show — then book a 15-minute chat.",
        "links": [
          {
            "label": "See what your numbers show",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "h2",
        "id": "before-you-accept-a-battery-quote",
        "text": "Before you accept a battery quote"
      },
      {
        "type": "p",
        "text": "Ask these questions:"
      },
      {
        "type": "checklist",
        "items": [
          "What discount has been included?",
          "Which STC factor has been used?",
          "What happens if installation is delayed?",
          "Is the figure based on usable capacity?",
          "Why is this battery size suitable for my usage?",
          "What tariff has been used?",
          "How many cycles per year have been assumed?",
          "What is the expected usable capacity over time?",
          "Is backup included?",
          "Does the battery require a switchboard upgrade?",
          "Is the system VPP-capable?",
          "Who is responsible for the installation and sign-off?",
          "Does the installer hold the relevant battery accreditation?",
          "What documents will I receive after commissioning?"
        ]
      },
      {
        "type": "p",
        "text": "A clear installer should be comfortable answering these questions."
      },
      {
        "type": "h2",
        "id": "the-bottom-line",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "The Queensland battery opportunity is real, but the discount is only one part of the decision."
      },
      {
        "type": "p",
        "text": "The program can reduce the upfront cost of an eligible battery."
      },
      {
        "type": "p",
        "text": "The value of that battery still depends on your home."
      },
      {
        "type": "p",
        "text": "Your usage pattern, tariff, solar system, battery size, installation price and workmanship all matter."
      },
      {
        "type": "p",
        "text": "Do not choose a battery because the discount exists. Choose one because the numbers and the home support it."
      },
      {
        "type": "cta",
        "text": "Run your analysis — then book a 15-minute chat.",
        "links": [
          {
            "label": "Run your analysis",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "What is the Cheaper Home Batteries Program?",
            "a": "It is a federal program that provides support for home batteries through the Small-scale Renewable Energy Scheme."
          },
          {
            "q": "Do I apply for the discount myself?",
            "a": "Usually not. The discount is generally handled through the approved supply and installation process rather than as a separate claim by the homeowner."
          },
          {
            "q": "Why does the amount of support change?",
            "a": "The STC factor is reviewed on a published schedule, so the same battery can attract a different level of support depending on when it is installed."
          },
          {
            "q": "Does the discount decide my system size?",
            "a": "No. It reduces the cost, but sizing should follow your usage and solar generation rather than the size the discount happens to favour."
          }
        ]
      },
      {
        "type": "h2",
        "id": "article-sources",
        "text": "Article sources"
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "Australian Government — Cheaper Home Batteries Program",
            "href": "https://www.energy.gov.au/news/discounted-batteries-households-through-cheaper-home-batteries-program"
          },
          {
            "label": "DCCEEW — STC factor schedule",
            "href": "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries"
          },
          {
            "label": "Clean Energy Regulator — rooftop solar installers and designers",
            "href": "https://cer.gov.au/schemes/renewable-energy-target/renewable-energy-target-participants-and-industry/rooftop-solar-installers-and-designers"
          },
          {
            "label": "DCCEEW — Cheaper Home Batteries Program",
            "href": "https://www.dcceew.gov.au/energy/programs/cheaper-home-batteries"
          },
          {
            "label": "Clean Energy Regulator — Solar batteries",
            "href": "https://cer.gov.au/schemes/renewable-energy-target"
          },
          {
            "label": "Queensland Government — Supercharged Solar for Renters",
            "href": "https://www.qld.gov.au/"
          },
          {
            "label": "Queensland Government — Solar Bonus Scheme",
            "href": "https://www.qld.gov.au/"
          }
        ]
      },
      {
        "type": "h2",
        "id": "want-to-understand-your-own-position",
        "text": "Want to understand your own position?"
      },
      {
        "type": "p",
        "text": "A general article can explain the program."
      },
      {
        "type": "p",
        "text": "Your electricity bill can show what a battery discount actually means for your household."
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "Run your analysis — then book a 15-minute chat.",
        "links": [
          {
            "label": "Run your analysis",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "p",
        "text": "You do not need to request an installer introduction to receive or discuss your analysis."
      },
      {
        "type": "note",
        "text": "General information only. This article provides household-level guidance to support informed decision-making. It does not replace a site inspection, electrical design, financial advice, or advice from a qualified and appropriately accredited installer. Actual system suitability, cost, savings and installation requirements depend on site-specific circumstances."
      }
    ],
    "date": "September 2026"
  },
  {
    "slug": "what-accreditation-should-a-queensland-battery-installer-have",
    "title": "What accreditation should a Queensland battery installer have?",
    "standfirst": "Solar PV and battery work are not the same accreditation category. Here is what homeowners should check before accepting a quote.",
    "category": "Queensland",
    "blocks": [
      {
        "type": "image",
        "src": "/images/concept-installer-accreditation.jpg",
        "alt": "Neon-outline illustration of a credential card with a check mark being inspected by a magnifying glass."
      },
      {
        "type": "p",
        "text": "A company can advertise solar and batteries without making it obvious who will actually design, install and sign off the work."
      },
      {
        "type": "p",
        "text": "That is why it is important to check the individual responsible for the installation — not just the business name or the equipment brand."
      },
      {
        "type": "p",
        "text": "For a system claiming Australian Government support, the relevant accreditation and licensing requirements matter."
      },
      {
        "type": "h2",
        "id": "solar-and-battery-accreditation-are-not-the-same-question",
        "text": "Solar and battery accreditation are not the same question"
      },
      {
        "type": "p",
        "text": "Solar PV and battery systems are related, but they are not identical installation categories."
      },
      {
        "type": "p",
        "text": "Solar Accreditation Australia has separate accreditation classes for different system types, including:"
      },
      {
        "type": "list",
        "items": [
          "Grid-connected photovoltaic systems",
          "Grid-connected battery systems",
          "Stand-alone power systems"
        ]
      },
      {
        "type": "p",
        "text": "If a quote includes a battery, ask whether the person responsible for the battery work holds the relevant battery accreditation."
      },
      {
        "type": "p",
        "text": "A general solar accreditation should not be assumed to cover every type of battery installation."
      },
      {
        "type": "h2",
        "id": "check-the-individual-installer",
        "text": "Check the individual installer"
      },
      {
        "type": "p",
        "text": "Ask for:"
      },
      {
        "type": "checklist",
        "items": [
          "The accredited person's name",
          "Their Solar Accreditation Australia accreditation number",
          "The relevant accreditation class",
          "Their Queensland electrical licence details",
          "Confirmation of who will attend the site",
          "Confirmation of who will test and commission the system",
          "Confirmation of who will sign off the installation"
        ]
      },
      {
        "type": "p",
        "text": "The company arranging the work and the individual performing or signing off the work may not always be the same."
      },
      {
        "type": "p",
        "text": "You should know who is responsible."
      },
      {
        "type": "p",
        "text": "The Australian Government recommends checking the installer's accreditation number and status before seeking a quote."
      },
      {
        "type": "h2",
        "id": "check-the-products-too",
        "text": "Check the products too"
      },
      {
        "type": "p",
        "text": "The installer's accreditation is only one part of the picture."
      },
      {
        "type": "p",
        "text": "Also ask whether:"
      },
      {
        "type": "checklist",
        "items": [
          "The solar modules are approved",
          "The inverter is approved",
          "The battery is eligible under the relevant program",
          "The exact quoted model matches the model to be installed",
          "The product warranty is clear",
          "Australian technical and warranty support is available",
          "Replacement parts can be obtained",
          "The system is suitable for the proposed installation"
        ]
      },
      {
        "type": "p",
        "text": "The brand name on the quote is not enough."
      },
      {
        "type": "p",
        "text": "Check the exact model."
      },
      {
        "type": "h2",
        "id": "what-does-netcc-approval-mean",
        "text": "What does NETCC approval mean?"
      },
      {
        "type": "p",
        "text": "The New Energy Tech Consumer Code is a voluntary consumer-protection code for sellers of solar, batteries and other new energy technology."
      },
      {
        "type": "p",
        "text": "An approved seller has committed to standards covering areas such as:"
      },
      {
        "type": "list",
        "items": [
          "Sales and marketing",
          "Quotes and contracts",
          "Installation",
          "Safety",
          "Warranties",
          "Customer support",
          "Complaints handling"
        ]
      },
      {
        "type": "p",
        "text": "NETCC approval is useful, but it is not a substitute for checking:"
      },
      {
        "type": "checklist",
        "items": [
          "The individual installer",
          "The electrical licence",
          "The battery accreditation",
          "The proposed equipment",
          "The contract",
          "The installation scope"
        ]
      },
      {
        "type": "p",
        "text": "You can search the approved-seller register through NETCC."
      },
      {
        "type": "h2",
        "id": "questions-to-ask-before-signing",
        "text": "Questions to ask before signing"
      },
      {
        "type": "p",
        "text": "Ask the installer:"
      },
      {
        "type": "checklist",
        "items": [
          "Who will physically install the system?",
          "Who will supervise the work?",
          "Who will attend the site during installation?",
          "Who will test and commission the system?",
          "Who will sign the compliance documentation?",
          "Does that person hold the relevant battery accreditation?",
          "Is the installer licensed to complete the electrical work in Queensland?",
          "Which exact battery model will be installed?",
          "Is the product eligible for the claimed discount?",
          "What documents will I receive after commissioning?",
          "Will you cooperate with an independent post-installation inspection?"
        ]
      },
      {
        "type": "p",
        "text": "A reputable installer should be comfortable answering these questions clearly."
      },
      {
        "type": "h2",
        "id": "accreditation-does-not-guarantee-perfect-work",
        "text": "Accreditation does not guarantee perfect work"
      },
      {
        "type": "p",
        "text": "Accreditation is important."
      },
      {
        "type": "p",
        "text": "It does not mean every installation will be perfect."
      },
      {
        "type": "p",
        "text": "The Clean Energy Regulator's battery inspection program reports installation issues involving matters such as:"
      },
      {
        "type": "list",
        "items": [
          "Labelling",
          "Wiring",
          "Protection",
          "Backup circuits",
          "Mechanical protection",
          "Overcurrent protection"
        ]
      },
      {
        "type": "p",
        "text": "The regulator's inspection results also distinguish between adequate, substandard and unsafe installations."
      },
      {
        "type": "p",
        "text": "That is why accreditation before installation and independent inspection afterwards are separate protections."
      },
      {
        "type": "h2",
        "id": "keep-the-documents",
        "text": "Keep the documents"
      },
      {
        "type": "p",
        "text": "After installation, keep copies of:"
      },
      {
        "type": "checklist",
        "items": [
          "Final system design",
          "Quote and contract",
          "Product details",
          "Warranty documents",
          "Certificate of electrical safety or compliance",
          "Network approval",
          "Commissioning information",
          "Monitoring access",
          "STC documentation",
          "Installer accreditation details",
          "Any inspection report"
        ]
      },
      {
        "type": "p",
        "text": "Good documentation can matter years later if the system needs servicing, ownership changes or a warranty issue arises."
      },
      {
        "type": "h2",
        "id": "before-you-request-an-introduction",
        "text": "Before you request an introduction"
      },
      {
        "type": "p",
        "text": "Watts Better can help you prepare the questions before speaking with an installer."
      },
      {
        "type": "p",
        "text": "The report explains the financial and energy side."
      },
      {
        "type": "p",
        "text": "The chat clarifies your home and helps identify what needs to be confirmed."
      },
      {
        "type": "p",
        "text": "The introduction is only made if you request it."
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "See what your numbers show — then book a 15-minute chat.",
        "links": [
          {
            "label": "See what your numbers show",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "Is solar accreditation the same as battery accreditation?",
            "a": "Not always. Solar PV and battery work can fall into separate accreditation categories, so check the category that matches the work being done."
          },
          {
            "q": "Should I check the company or the individual?",
            "a": "Both, but the individual matters. Accreditation attaches to the person who designs or installs, not only to the company they work for."
          },
          {
            "q": "What does NETCC approval tell me?",
            "a": "It indicates the seller has signed up to the New Energy Tech Consumer Code, which sets conduct and after-sales expectations. It is not a technical accreditation."
          },
          {
            "q": "Does accreditation guarantee good work?",
            "a": "No. It confirms the required credentials are in place, but quality still depends on the work itself and the documentation you receive."
          }
        ]
      },
      {
        "type": "h2",
        "id": "sources",
        "text": "Sources"
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "Solar Accreditation Australia — accreditation"
          },
          {
            "label": "Australian Government Solar Guide",
            "href": "https://www.energy.gov.au/solar"
          },
          {
            "label": "Solar Accreditation Australia — accreditation status check"
          },
          {
            "label": "NETCC — approved sellers",
            "href": "https://www.newenergytech.org.au/about-the-netcc"
          },
          {
            "label": "Clean Energy Regulator — solar battery inspection results",
            "href": "https://cer.gov.au/schemes/renewable-energy-target/small-scale-renewable-energy-scheme/small-scale-renewable-energy-systems/small-scale-renewable-energy-system-inspections/solar-battery-inspection-results-report"
          }
        ]
      },
      {
        "type": "h2",
        "id": "want-to-understand-your-own-position",
        "text": "Want to understand your own position?"
      },
      {
        "type": "p",
        "text": "A general article can explain the principles."
      },
      {
        "type": "p",
        "text": "Your electricity bill can show what those principles mean for your household."
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "Run your analysis — then book a 15-minute chat.",
        "links": [
          {
            "label": "Run your analysis",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "p",
        "text": "You do not need to request an installer introduction to receive or discuss your analysis."
      },
      {
        "type": "note",
        "text": "General information only. This article provides household-level guidance to support informed decision-making. It does not replace a site inspection, electrical design, financial advice, or advice from a qualified and appropriately accredited installer. Actual system suitability, cost, savings and installation requirements depend on site-specific circumstances."
      }
    ],
    "date": "September 2026"
  },
  {
    "slug": "how-to-check-who-is-actually-responsible-for-your-solar-installation",
    "title": "How to check who is actually responsible for your solar installation",
    "standfirst": "A company can advertise solar and batteries without making it obvious who will design, install and sign off the work. Here's how to check.",
    "category": "Queensland",
    "blocks": [
      {
        "type": "image",
        "src": "/images/concept-who-is-responsible.jpg",
        "alt": "Neon-outline illustration of an office, a van and a roof linked by a glowing line with a magnifying glass following it."
      },
      {
        "type": "p",
        "text": "A company can advertise solar and batteries without making it obvious who will actually design, install and sign off the work."
      },
      {
        "type": "p",
        "text": "That is why it is important to check the individual responsible for the installation — not just the business name or the equipment brand."
      },
      {
        "type": "p",
        "text": "For a system claiming Australian Government support, the relevant accreditation and licensing requirements matter."
      },
      {
        "type": "p",
        "text": "This guide walks through the checks in order: the Queensland electrical contractor licence, the ABN, the individual accreditation, and who will actually be on your roof."
      },
      {
        "type": "h2",
        "id": "step-1-check-the-queensland-electrical-contractor-licence",
        "text": "Step 1 — Check the Queensland electrical contractor licence"
      },
      {
        "type": "p",
        "text": "Queensland requires an appropriate electrical contractor licence when electrical work is carried out as part of a business or undertaking."
      },
      {
        "type": "p",
        "text": "The Queensland Government distinguishes between:"
      },
      {
        "type": "list",
        "items": [
          "Electrical work licences",
          "Electrical contractor licences",
          "Unrestricted contractor licences",
          "Restricted contractor licences"
        ]
      },
      {
        "type": "p",
        "text": "For a solar or battery project, you are looking for the business or contractor responsible for the electrical installation work — not simply an individual salesperson or someone who has completed a solar sales course."
      },
      {
        "type": "label",
        "text": "Search by the legal business name"
      },
      {
        "type": "p",
        "text": "Use the Queensland electrical licence search."
      },
      {
        "type": "p",
        "text": "Where possible, search:"
      },
      {
        "type": "checklist",
        "items": [
          "The exact business name",
          "The company name shown on the quote",
          "The entity named in the contract",
          "The ABN-linked legal name",
          "Any trading name used in the advertisement"
        ]
      },
      {
        "type": "p",
        "text": "Do not rely only on the brand name shown on the website."
      },
      {
        "type": "p",
        "text": "A business may trade under one name while contracting under another legal entity."
      },
      {
        "type": "label",
        "text": "What a positive result can show"
      },
      {
        "type": "p",
        "text": "A matching, current contractor licence is a useful indicator that the business holds the relevant contractor licence."
      },
      {
        "type": "p",
        "text": "The licence record may also identify:"
      },
      {
        "type": "list",
        "items": [
          "Contractor status",
          "Licence number",
          "Qualified business person",
          "Qualified technical person",
          "Licence conditions",
          "Current status"
        ]
      },
      {
        "type": "p",
        "text": "A company electrical contractor licence must have qualified people attached to it."
      },
      {
        "type": "p",
        "text": "That is useful evidence, but it still does not tell you which individual will be on your roof."
      },
      {
        "type": "p",
        "text": "Ask that separately."
      },
      {
        "type": "label",
        "text": "What if there is no result?"
      },
      {
        "type": "p",
        "text": "No matching result is a reason to pause and ask questions."
      },
      {
        "type": "p",
        "text": "It may mean:"
      },
      {
        "type": "list",
        "items": [
          "You searched the wrong name",
          "The business contracts under another entity",
          "The business is a retailer or sales company",
          "The work is being subcontracted to another electrical contractor",
          "The licence information is not current",
          "The business does not hold the required contractor licence"
        ]
      },
      {
        "type": "p",
        "text": "Do not treat a failed search as proof of misconduct."
      },
      {
        "type": "p",
        "text": "Ask the business to identify, in writing:"
      },
      {
        "type": "checklist",
        "items": [
          "The licensed electrical contractor",
          "The licence number",
          "The legal entity responsible for the work",
          "The business responsible for the electrical certificate",
          "The party responsible for workmanship and rectification"
        ]
      },
      {
        "type": "p",
        "text": "Open the official search:"
      },
      {
        "type": "cta",
        "text": "",
        "links": [
          {
            "label": "Queensland electrical licence search",
            "href": "https://www.qbcc.qld.gov.au/online-services/licence-search"
          }
        ]
      },
      {
        "type": "h2",
        "id": "step-2-check-the-abn",
        "text": "Step 2 — Check the ABN"
      },
      {
        "type": "p",
        "text": "Use ABN Lookup to check the business identity."
      },
      {
        "type": "p",
        "text": "An ABN is an 11-digit identifier for a business or organisation."
      },
      {
        "type": "p",
        "text": "Search for:"
      },
      {
        "type": "checklist",
        "items": [
          "The business name",
          "The ABN shown on the quote",
          "The company name",
          "The trading name",
          "The name shown in the website footer",
          "The name receiving your deposit"
        ]
      },
      {
        "type": "p",
        "text": "Compare the results with the documents you have been given."
      },
      {
        "type": "p",
        "text": "Check whether the details match. Look for:"
      },
      {
        "type": "list",
        "items": [
          "Active ABN status",
          "Legal entity name",
          "Business names connected to the ABN",
          "GST registration where relevant",
          "Main business location",
          "The name shown on the quote",
          "The name shown on the contract",
          "The name receiving payment"
        ]
      },
      {
        "type": "p",
        "text": "If the website, quote, contract and bank details point to different entities, ask why."
      },
      {
        "type": "p",
        "text": "A mismatch does not automatically mean something is wrong."
      },
      {
        "type": "p",
        "text": "It does mean you should understand who you are contracting with."
      },
      {
        "type": "h2",
        "id": "step-3-check-the-individual-accreditation",
        "text": "Step 3 — Check the individual accreditation"
      },
      {
        "type": "p",
        "text": "A company licence and an individual installer accreditation answer different questions."
      },
      {
        "type": "p",
        "text": "Solar Accreditation Australia accreditation applies to the relevant individual designer or installer."
      },
      {
        "type": "p",
        "text": "For a battery system, ask whether the person responsible holds the relevant battery accreditation, not only a solar PV accreditation."
      },
      {
        "type": "p",
        "text": "Ask for:"
      },
      {
        "type": "checklist",
        "items": [
          "The accredited person's name",
          "Accreditation number",
          "Relevant system class",
          "Whether they are the designer, installer or both",
          "The electrical licence held in Queensland",
          "Confirmation of who will attend the site"
        ]
      },
      {
        "type": "p",
        "text": "You can check accreditation through Solar Accreditation Australia."
      },
      {
        "type": "p",
        "text": "The Clean Energy Regulator states that designers and installers must be accredited by Solar Accreditation Australia for the relevant system type and that installers must meet applicable electrical licensing requirements."
      },
      {
        "type": "h2",
        "id": "step-4-find-out-who-will-actually-install-the-system",
        "text": "Step 4 — Find out who will actually install the system"
      },
      {
        "type": "p",
        "text": "Ask the business directly:"
      },
      {
        "type": "checklist",
        "items": [
          "Are the installers employees or subcontractors?",
          "Which business employs or contracts the installation crew?",
          "What is the electrical contractor licence number?",
          "Who will attend the site?",
          "Who will supervise the work?",
          "Who will test and commission the system?",
          "Who will issue the certificate of electrical safety or compliance?",
          "Who will handle rectification if the independent inspection identifies an issue?",
          "Who will handle your workmanship warranty?",
          "Will the installer still be available after the sale?"
        ]
      },
      {
        "type": "p",
        "text": "A business that uses subcontractors is not necessarily a poor business."
      },
      {
        "type": "p",
        "text": "The issue is whether the arrangement is clear."
      },
      {
        "type": "p",
        "text": "A homeowner should not have to discover the actual installer after the deposit has been paid."
      },
      {
        "type": "h2",
        "id": "sales-company-installer-or-subcontracting-model",
        "text": "Sales company, installer or subcontracting model?"
      },
      {
        "type": "p",
        "text": "The result of your check may place the business into one of three broad categories."
      },
      {
        "type": "label",
        "text": "01 — licensed electrical contractor"
      },
      {
        "type": "p",
        "text": "The business name or contracting entity appears in the relevant licence search and can identify the responsible people."
      },
      {
        "type": "p",
        "text": "This is useful evidence that the business holds the contractor licence."
      },
      {
        "type": "p",
        "text": "You should still ask who will physically install your system."
      },
      {
        "type": "label",
        "text": "02 — retailer or sales company using a subcontractor"
      },
      {
        "type": "p",
        "text": "The selling business may not appear as the electrical contractor."
      },
      {
        "type": "p",
        "text": "That does not automatically make the model illegitimate."
      },
      {
        "type": "p",
        "text": "But the business should clearly identify:"
      },
      {
        "type": "checklist",
        "items": [
          "The licensed installation contractor",
          "The installer's licence",
          "Who is responsible for certification",
          "Who is responsible for workmanship",
          "Who handles warranty and rectification",
          "Whether the installation contractor is named in the contract"
        ]
      },
      {
        "type": "p",
        "text": "If the business refuses to identify the licensed contractor, pause before signing."
      },
      {
        "type": "label",
        "text": "03 — unclear or inconsistent"
      },
      {
        "type": "p",
        "text": "You should slow down if:"
      },
      {
        "type": "list",
        "items": [
          "The name on the quote does not match the name in the licence search",
          "The ABN is different from the contracting entity",
          "The installer cannot identify who will attend",
          "The person discussing the system cannot explain who signs it off",
          "The business name changes between the advertisement, quote and bank account",
          "Warranty responsibility is vague",
          "You are told to “not worry about” licensing questions"
        ]
      },
      {
        "type": "p",
        "text": "Unclear information is not proof of wrongdoing."
      },
      {
        "type": "p",
        "text": "It is a reason not to make a rushed decision."
      },
      {
        "type": "h2",
        "id": "check-for-business-continuity",
        "text": "Check for business continuity"
      },
      {
        "type": "label",
        "text": "The orphan system risk"
      },
      {
        "type": "p",
        "text": "An orphan system is a solar installation whose original seller or installer is no longer available to support it."
      },
      {
        "type": "p",
        "text": "The equipment may still work."
      },
      {
        "type": "p",
        "text": "But the homeowner may lose access to:"
      },
      {
        "type": "list",
        "items": [
          "Installer workmanship support",
          "Original installation records",
          "Warranty assistance",
          "Monitoring support",
          "Fault history",
          "Someone familiar with the system",
          "Rectification of installation problems"
        ]
      },
      {
        "type": "p",
        "text": "There is no single official national count of orphan solar systems."
      },
      {
        "type": "p",
        "text": "Industry estimates vary, so any number should be treated as an estimate rather than a government statistic."
      },
      {
        "type": "p",
        "text": "The risk itself is real: a long-term warranty depends on someone being available to administer it."
      },
      {
        "type": "label",
        "text": "Check the business name and legal entity"
      },
      {
        "type": "p",
        "text": "A business name can be used by an entity for a period and later transferred or changed."
      },
      {
        "type": "p",
        "text": "That is not automatically illegal."
      },
      {
        "type": "p",
        "text": "It means you should distinguish between:"
      },
      {
        "type": "list",
        "items": [
          "The brand customers recognise",
          "The business name",
          "The ABN",
          "The company or sole trader",
          "The entity named in your contract",
          "The entity receiving your money",
          "The entity responsible for the installation"
        ]
      },
      {
        "type": "p",
        "text": "Use ABN Lookup to confirm the current entity."
      },
      {
        "type": "p",
        "text": "For a higher-value purchase, consider checking ASIC records and published notices for:"
      },
      {
        "type": "list",
        "items": [
          "Liquidation notices",
          "Deregistration",
          "Administration",
          "Winding-up notices",
          "Repeated changes in the trading entity",
          "Recent company changes"
        ]
      },
      {
        "type": "p",
        "text": "Use ASIC Published Notices for official insolvency and company notices."
      },
      {
        "type": "label",
        "text": "What is a phoenix company?"
      },
      {
        "type": "p",
        "text": "“Phoenix activity” describes a company or business that fails and is replaced by a new entity that continues a similar business."
      },
      {
        "type": "p",
        "text": "There are lawful and unlawful forms of business restructuring."
      },
      {
        "type": "p",
        "text": "The problem for consumers arises when a business uses a new entity to avoid existing debts or obligations."
      },
      {
        "type": "p",
        "text": "Do not label a business a “phoenix company” based only on:"
      },
      {
        "type": "list",
        "items": [
          "A new website",
          "A changed logo",
          "A business-name transfer",
          "A new ABN",
          "A director change",
          "A company that appears young"
        ]
      },
      {
        "type": "p",
        "text": "Those may be innocent."
      },
      {
        "type": "p",
        "text": "Instead, treat them as prompts to investigate:"
      },
      {
        "type": "checklist",
        "items": [
          "Who owns the current entity?",
          "How long has the current entity existed?",
          "Which entity signs your contract?",
          "Which entity receives your deposit?",
          "Which entity is responsible for the workmanship warranty?",
          "What happens if the business ceases trading?",
          "Is there insurance or another written support arrangement?"
        ]
      },
      {
        "type": "p",
        "text": "The goal is not to accuse a business."
      },
      {
        "type": "p",
        "text": "The goal is to avoid entering a long-term purchase without understanding who stands behind it."
      },
      {
        "type": "h2",
        "id": "compare-quotes-beyond-price",
        "text": "Compare quotes beyond price"
      },
      {
        "type": "p",
        "text": "A quote should be compared on more than:"
      },
      {
        "type": "list",
        "items": [
          "Panel brand",
          "Inverter brand",
          "Battery size",
          "System price",
          "Advertised payback"
        ]
      },
      {
        "type": "p",
        "text": "Also compare:"
      },
      {
        "type": "checklist",
        "items": [
          "Who performs the work",
          "Which legal entity contracts with you",
          "Electrical contractor licence",
          "SAA accreditation",
          "Battery accreditation",
          "Equipment model numbers",
          "Switchboard requirements",
          "Network requirements",
          "Installation inclusions",
          "Warranty responsibility",
          "After-sales support",
          "Rectification process",
          "Independent inspection cooperation",
          "Expected installation timing"
        ]
      },
      {
        "type": "p",
        "text": "Two proposals with similar hardware can represent very different levels of support and accountability."
      },
      {
        "type": "h2",
        "id": "what-this-check-can-and-cannot-prove",
        "text": "What this check can and cannot prove"
      },
      {
        "type": "p",
        "text": "The check can help you establish:"
      },
      {
        "type": "list",
        "items": [
          "Whether a business appears to hold an electrical contractor licence",
          "Whether the ABN and contracting identity match",
          "Whether an individual's accreditation can be checked",
          "Who claims responsibility for the installation",
          "Whether the business structure needs further questions",
          "Whether public insolvency notices exist"
        ]
      },
      {
        "type": "p",
        "text": "The check cannot prove:"
      },
      {
        "type": "list",
        "items": [
          "That the installation will be high quality",
          "That the system design is correct",
          "That the quoted savings are achievable",
          "That every installer employee is properly supervised",
          "That a business will remain solvent for decades",
          "That every warranty claim will be accepted",
          "That the completed system is compliant"
        ]
      },
      {
        "type": "p",
        "text": "That is why credentials checking should be followed by:"
      },
      {
        "type": "checklist",
        "items": [
          "A proper site assessment",
          "A clear contract",
          "Documented equipment specifications",
          "Correct certification",
          "Independent post-installation inspection"
        ]
      },
      {
        "type": "h2",
        "id": "the-quick-checklist",
        "text": "The quick checklist"
      },
      {
        "type": "p",
        "text": "Before paying a deposit, ask:"
      },
      {
        "type": "checklist",
        "items": [
          "What is the exact legal entity in my contract?",
          "What is its ABN?",
          "Who will receive my payment?",
          "Does the contracting entity hold the relevant electrical contractor licence?",
          "If not, who is the licensed electrical contractor?",
          "What is that contractor's licence number?",
          "Who will physically attend the installation?",
          "Who will sign the electrical certification?",
          "Who holds the relevant SAA accreditation?",
          "If a battery is included, does the installer hold the relevant battery accreditation?",
          "Who is responsible for workmanship warranty?",
          "Who will fix an issue identified after installation?",
          "What happens if the selling business closes?",
          "Will the installer cooperate with independent inspection?"
        ]
      },
      {
        "type": "p",
        "text": "If the answers are clear, written and consistent, you are in a stronger position."
      },
      {
        "type": "h2",
        "id": "use-the-free-credentials-check",
        "text": "Use the free credentials check"
      },
      {
        "type": "p",
        "text": "The Solar Credentials Check process uses publicly available sources to help you investigate a business before signing."
      },
      {
        "type": "p",
        "text": "The Queensland workflow is:"
      },
      {
        "type": "list",
        "items": [
          "Search the electrical contractor licence",
          "Check the ABN and legal entity",
          "Check the individual SAA accreditation",
          "Ask who will install and who is responsible",
          "Check the contract, warranty and support arrangements",
          "Investigate any business-continuity warning signs"
        ]
      },
      {
        "type": "cta",
        "text": "Launch the credentials wizard.",
        "links": [
          {
            "label": "Launch the credentials wizard",
            "href": "/tools"
          }
        ]
      },
      {
        "type": "p",
        "text": "The report explains the numbers. The chat clarifies the home. The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "See what your numbers show — then book a 15-minute chat.",
        "links": [
          {
            "label": "See what your numbers show",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "h2",
        "id": "the-bottom-line",
        "text": "The bottom line"
      },
      {
        "type": "p",
        "text": "You do not need to become an electrician, lawyer or insolvency expert to ask basic questions."
      },
      {
        "type": "p",
        "text": "Before choosing a solar or battery business, you should know:"
      },
      {
        "type": "list",
        "items": [
          "Who is selling to you",
          "Who is licensed",
          "Who is accredited",
          "Who will be on your roof",
          "Who will certify the work",
          "Who will support the system later",
          "Which entity is responsible if something goes wrong"
        ]
      },
      {
        "type": "p",
        "text": "The most important question is simple:"
      },
      {
        "type": "p",
        "text": "Who will still be accountable after the sale?"
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "How do I find out who will actually install my system?",
            "a": "Ask directly, then verify the Queensland electrical contractor licence, the ABN and the individual's accreditation before you sign."
          },
          {
            "q": "What is the subcontracting model, and why does it matter?",
            "a": "A sales company may not be the installer. Understanding which entity designs, installs and signs off the work tells you who is accountable."
          },
          {
            "q": "Why check business continuity?",
            "a": "A company needs to still be there to honour warranties and after-sales support, which is why a quick check of registration and status is worth doing."
          },
          {
            "q": "What can these checks not prove?",
            "a": "They confirm credentials, not workmanship. They do not guarantee that the installation itself will meet every requirement."
          }
        ]
      },
      {
        "type": "h2",
        "id": "sources",
        "text": "Sources"
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "Business Queensland — electrical licences",
            "href": "https://www.business.qld.gov.au/"
          },
          {
            "label": "Clean Energy Regulator — rooftop solar installers and designers",
            "href": "https://cer.gov.au/schemes/renewable-energy-target/renewable-energy-target-participants-and-industry/rooftop-solar-installers-and-designers"
          },
          {
            "label": "Business Queensland — electrical contractor safety duties",
            "href": "https://www.business.qld.gov.au/"
          },
          {
            "label": "Solar Accreditation Australia — accreditation status check"
          },
          {
            "label": "ABN Lookup",
            "href": "https://abr.business.gov.au/"
          },
          {
            "label": "ASIC Published Notices",
            "href": "https://publishednotices.asic.gov.au/"
          },
          {
            "label": "Australian Government Solar Guide",
            "href": "https://www.energy.gov.au/solar"
          }
        ]
      },
      {
        "type": "h2",
        "id": "want-to-understand-your-own-position",
        "text": "Want to understand your own position?"
      },
      {
        "type": "p",
        "text": "Checking the business is one part of the decision."
      },
      {
        "type": "p",
        "text": "Your electricity report explains the numbers."
      },
      {
        "type": "p",
        "text": "The chat clarifies the home."
      },
      {
        "type": "p",
        "text": "The introduction is your choice."
      },
      {
        "type": "cta",
        "text": "Run your analysis — then book a 15-minute chat.",
        "links": [
          {
            "label": "Run your analysis",
            "href": "/calculator"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "p",
        "text": "You do not need to request an installer introduction to receive or discuss your analysis."
      },
      {
        "type": "note",
        "text": "General information only. This article provides household-level guidance to support informed decision-making. It does not replace a site inspection, electrical design, financial advice, or advice from a qualified and appropriately accredited installer. Actual system suitability, cost, savings and installation requirements depend on site-specific circumstances."
      }
    ],
    "date": "September 2026"
  },
  {
    "slug": "what-does-substandard-mean-in-a-solar-battery-inspection",
    "title": "What does “substandard” mean in a solar-battery inspection?",
    "standfirst": "The Clean Energy Regulator reports that 62.28% of inspected battery installations were rated substandard. That figure needs context.",
    "category": "Inspection and quality",
    "blocks": [
      {
        "type": "image",
        "src": "/images/concept-substandard-inspection.jpg",
        "alt": "Neon-outline illustration of a battery installation with a magnifying glass over it and warning triangles marking points on the installation."
      },
      {
        "type": "p",
        "text": "The Clean Energy Regulator's solar-battery inspection results reported that, as at 30 June 2026:"
      },
      {
        "type": "list",
        "items": [
          "62.28% of inspected installations were rated substandard",
          "0.76% were rated unsafe",
          "36.95% were rated adequate"
        ]
      },
      {
        "type": "p",
        "text": "The figures relate to installations selected for the regulator's inspection program. They are not a survey of every battery installation in Australia."
      },
      {
        "type": "p",
        "text": "The regulator also says it is too early to draw strong conclusions about the overall rate of technical compliance."
      },
      {
        "type": "h2",
        "id": "what-does-substandard-mean",
        "text": "What does substandard mean?"
      },
      {
        "type": "p",
        "text": "In the regulator's terminology, substandard means technical non-compliance that requires rectification but is safe to remain in operation."
      },
      {
        "type": "p",
        "text": "It does not necessarily mean:"
      },
      {
        "type": "list",
        "items": [
          "The battery itself is defective",
          "The system cannot produce electricity",
          "The entire installation is unsafe",
          "The homeowner must immediately switch the system off"
        ]
      },
      {
        "type": "p",
        "text": "The regulator explains that a substandard result may involve one or two installation items that do not affect performance but may affect people working on or around the system in the future."
      },
      {
        "type": "h2",
        "id": "what-problems-were-found",
        "text": "What problems were found?"
      },
      {
        "type": "p",
        "text": "The most common issue was labelling."
      },
      {
        "type": "p",
        "text": "Examples include:"
      },
      {
        "type": "list",
        "items": [
          "Missing or incorrect warning labels",
          "Incorrect labelling of backed-up circuits",
          "Missing or incorrectly positioned energy-storage labels for emergency services"
        ]
      },
      {
        "type": "p",
        "text": "Other issues included:"
      },
      {
        "type": "list",
        "items": [
          "Incorrectly configured or missing residual current devices",
          "Insufficient mechanical or fire protection",
          "Inadequate overcurrent protection",
          "Loose connections showing signs of heat",
          "Electrical work that did not meet applicable requirements",
          "Neutral continuity problems on alternative-supply circuits"
        ]
      },
      {
        "type": "p",
        "text": "The regulator reported that no installations had issues with the battery itself. The issues were associated with installation practices and workmanship."
      },
      {
        "type": "h2",
        "id": "why-does-an-independent-inspection-matter",
        "text": "Why does an independent inspection matter?"
      },
      {
        "type": "p",
        "text": "A system can look complete from the ground while important details remain difficult for a homeowner to assess."
      },
      {
        "type": "p",
        "text": "An independent inspection can provide:"
      },
      {
        "type": "checklist",
        "items": [
          "A record of the areas assessed",
          "Photographic evidence",
          "An assessment of accessible installation work",
          "Identification of matters requiring attention",
          "A formal report for your records"
        ]
      },
      {
        "type": "p",
        "text": "It does not replace the installer's responsibilities, required certification or government inspection programs."
      },
      {
        "type": "p",
        "text": "It gives you evidence about your completed installation rather than requiring you to assume everything is correct."
      },
      {
        "type": "h2",
        "id": "what-should-homeowners-ask-before-installation",
        "text": "What should homeowners ask before installation?"
      },
      {
        "type": "p",
        "text": "Ask:"
      },
      {
        "type": "checklist",
        "items": [
          "Who is responsible for the installation?",
          "Which accredited person will sign off the work?",
          "Does the installer hold the relevant battery accreditation?",
          "What documentation will be provided?",
          "What happens if an inspection identifies an issue?",
          "Will the installer cooperate with independent inspection?"
        ]
      },
      {
        "type": "p",
        "text": "A completed system should be more than switched on. You should know what was assessed and where the evidence is."
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "What does substandard mean in the regulator's terminology?",
            "a": "Technical non-compliance that requires rectification but is safe to remain in operation. It does not mean the system is unsafe or that the battery is defective."
          },
          {
            "q": "What problems were most commonly found?",
            "a": "Labelling issues were the most common, along with matters such as protection and connections. The regulator reported no issues with the batteries themselves."
          },
          {
            "q": "Does a substandard rating apply to every installation?",
            "a": "No. The figures relate to installations selected for the regulator's inspection program, not a survey of every battery installation in Australia."
          },
          {
            "q": "Why does an independent inspection help?",
            "a": "It gives you a record of what was assessed, supported by evidence, instead of relying on the assumption that a completed system is correct."
          }
        ]
      },
      {
        "type": "cta",
        "text": "Learn how Watts Better's independent inspection works.",
        "links": [
          {
            "label": "How inspections work",
            "href": "/installation-inspections"
          },
          {
            "label": "Book a 15-minute chat",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "Clean Energy Regulator",
            "href": "https://cer.gov.au/"
          },
          {
            "label": "Clean Energy Regulator — Solar batteries",
            "href": "https://cer.gov.au/schemes/renewable-energy-target"
          },
          {
            "label": "Solar Accreditation Australia — accreditation status check"
          }
        ]
      },
      {
        "type": "note",
        "text": "General information only. This article provides household-level guidance to support informed decision-making. It does not replace a site inspection, electrical design, financial advice, or advice from a qualified and appropriately accredited installer. Actual system suitability, cost, savings and installation requirements depend on site-specific circumstances."
      }
    ],
    "date": "September 2026"
  },
  {
    "slug": "what-to-photograph-before-speaking-with-a-solar-installer",
    "title": "What to photograph before speaking with a solar installer",
    "standfirst": "Your electricity bill explains your energy use. A few useful photographs help clarify the physical starting point.",
    "category": "Inspection and quality",
    "blocks": [
      {
        "type": "image",
        "src": "/images/concept-photograph-before-installer.jpg",
        "alt": "Neon-outline illustration of a hand holding a phone photographing a closed switchboard on a wall."
      },
      {
        "type": "p",
        "text": "Your electricity bill explains your energy use. Photographs explain the physical starting point."
      },
      {
        "type": "p",
        "text": "Neither replaces a site assessment, and neither is meant to. Together they turn a vague first conversation into a specific one."
      },
      {
        "type": "h2",
        "id": "why-photographs-help",
        "text": "Why photographs help"
      },
      {
        "type": "p",
        "text": "Most first conversations stall on the same handful of questions — what does the switchboard look like, where could equipment actually go, how is the roof accessed."
      },
      {
        "type": "p",
        "text": "A few photographs answer those questions before anyone drives out. That means the conversation starts at the things that actually need deciding."
      },
      {
        "type": "h2",
        "id": "the-switchboard",
        "text": "The switchboard"
      },
      {
        "type": "list",
        "items": [
          "A straight-on photograph of the board with its cover closed.",
          "A closer shot of any labels or ratings printed on the outside.",
          "Enough distance in the frame to show the wall around it and how much space there is."
        ]
      },
      {
        "type": "callout",
        "label": "Safety first",
        "text": "Do not open the switchboard cover, remove any panel or touch wiring to take a photograph. Photograph what is already exposed, from outside, and leave the enclosure closed.",
        "tone": "copper"
      },
      {
        "type": "h2",
        "id": "the-roof-and-its-access",
        "text": "The roof and its access"
      },
      {
        "type": "list",
        "items": [
          "A wide shot of the roof, taken from the ground — skip this one if any part of it is unsafe to reach.",
          "The route an installer would use to get up there.",
          "Anything already on the roof: existing panels, an antenna, a vent, a skylight."
        ]
      },
      {
        "type": "h2",
        "id": "where-equipment-might-go",
        "text": "Where equipment might go"
      },
      {
        "type": "list",
        "items": [
          "The wall or area where an inverter or battery could be mounted.",
          "That same spot photographed at a different time of day, if it is shaded part of the day.",
          "The distance between that spot and the switchboard."
        ]
      },
      {
        "type": "h2",
        "id": "the-details-people-forget",
        "text": "The details people forget"
      },
      {
        "type": "list",
        "items": [
          "The electricity meter and its enclosure.",
          "Anything that limits access — locking gates, a narrow side path, a steep driveway.",
          "Existing damage you already know about: cracked tiles, rust, water staining. Photographing it first avoids an argument later about when it happened."
        ]
      },
      {
        "type": "h2",
        "id": "what-photographs-cannot-tell-an-installer",
        "text": "What photographs cannot tell an installer"
      },
      {
        "type": "list",
        "items": [
          "The condition of the roof structure beneath the surface.",
          "Cable routes and whether there is spare capacity in the switchboard.",
          "Whether equipment will actually fit once clearance requirements are applied.",
          "Anything a physical site assessment is designed to confirm."
        ]
      },
      {
        "type": "p",
        "text": "This is why the photographs replace an initial conversation, not an inspection. Treat them as the starting point of an assessment, not a substitute for one."
      },
      {
        "type": "h2",
        "id": "your-photo-checklist",
        "text": "Your photo checklist"
      },
      {
        "type": "checklist",
        "items": [
          "Switchboard, cover closed, straight on.",
          "Switchboard labels, close up.",
          "Wall or area where equipment might be mounted.",
          "The same spot in shade, if it is shaded part of the day.",
          "Roof, wide shot from the ground.",
          "Roof access route.",
          "Meter and its enclosure.",
          "Anything you already know is damaged.",
          "Anything that limits site access."
        ]
      },
      {
        "type": "faq",
        "items": [
          {
            "q": "Why do photographs help before speaking with an installer?",
            "a": "Your bill explains your energy use. Photographs clarify the physical starting point, so the conversation begins from an accurate picture of your home rather than a description of it."
          },
          {
            "q": "What should I photograph?",
            "a": "The things an installer would ask about: the switchboard, the roof and its access, the intended equipment location, and anything that might restrict the installation."
          },
          {
            "q": "Should I open the switchboard to photograph inside it?",
            "a": "No. Never open the enclosure or touch wiring to take a photograph. Photograph the closed board and its external labelling only."
          },
          {
            "q": "Do photographs replace a site assessment?",
            "a": "No. They help the conversation start from an accurate picture, but a site assessment is still required before any design is confirmed."
          }
        ]
      },
      {
        "type": "h2",
        "id": "sources",
        "text": "Sources"
      },
      {
        "type": "sources",
        "items": [
          {
            "label": "Australian Government Solar Guide — choosing a solar retailer and installer",
            "href": "https://www.energy.gov.au/solar/solar-retailers-and-installation/choose-your-solar-retailer-and-installer"
          },
          {
            "label": "ACCC — solar panels and home batteries",
            "href": "https://www.accc.gov.au/consumers/specific-products-and-activities/solar-panel-systems-and-home-batteries"
          },
          {
            "label": "Clean Energy Regulator — rooftop solar installers and designers",
            "href": "https://cer.gov.au/schemes/renewable-energy-target/renewable-energy-target-participants-and-industry/rooftop-solar-installers-and-designers"
          }
        ]
      },
      {
        "type": "cta",
        "text": "Complete the Photo Capture after your clarity chat.",
        "links": [
          {
            "label": "Contact us",
            "href": "/contact-us"
          }
        ]
      },
      {
        "type": "note",
        "text": "General information only. This article provides household-level guidance to support informed decision-making. It does not replace a site inspection, electrical design, financial advice, or advice from a qualified and appropriately accredited installer. Actual system suitability, cost, savings and installation requirements depend on site-specific circumstances."
      }
    ],
    "date": "September 2026"
  }
]
