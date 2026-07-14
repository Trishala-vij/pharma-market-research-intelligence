# Pharma Market Intelligence — Portfolio Data Analysis
### Source: pharma_market_research_intel_demo_30000.xlsx (30,000 assets) — July 14, 2026

---

## 0. Data Quality Note — read this first

Before strategic conclusions can be drawn, every metric in this file was checked for
distributional patterns. The result: **this dataset is uniformly random**, not observed
market intelligence.

- Every categorical field (company, therapy area, country, launch stage, trial phase,
  regulatory status, payer type, pricing tier, launch risk, KOL region) splits into
  near-perfectly equal groups (e.g., all 6 companies hold 16.5–16.9% of records; all 5
  therapy areas hold 19.8–20.2%).
- All numeric fields (`market_size_usd_m`, `cagr_pct`, `market_share_pct`,
  `forecast_units`, `sentiment_score`, `priority_score`) show pairwise correlations of
  **0.00–0.01** — i.e., no relationship between market size and growth, share and
  priority, sentiment and launch stage, etc.
- 5,002 rows (16.7%) list a company as its own competitor — a logical impossibility
  that only occurs when fields are independently randomized.
- Brand names are sequential placeholders (`Brand1`…`Brand300`), and asset-level values
  repeat with no tie to company, geography, or indication.

**Per the NEVER LIST in this skill (#2, #4, #5), a market share or competitive claim
must never be presented without a genuine data source.** Since this file has no such
grounding, the analysis below is a structural/descriptive summary of what the file
contains — useful for validating a pipeline, dashboard, or this skill's mechanics — but
it should **not** be used as the basis for a real commercial or launch decision. If you
have (or can pull) actual IQVIA/Symphony extracts, claims data, or company-reported
Rx/revenue figures, I can re-run this same analysis against those instead.

With that caveat, here is what the file contains.

---

## 1. Dataset Overview

| Field | Coverage |
|---|---|
| Assets | 30,000 (`asset_id` A000001–A030000) |
| Companies | AstraZeneca, Merck, Novartis, Pfizer, Roche, Sanofi (~5,000 each) |
| Therapy areas | CV, Diabetes, Immunology, Oncology, Rare Disease (~6,000 each) |
| Countries | France, Germany, India, Japan, UK, US (~5,000 each) |
| Launch stage | Discovery → Phase I–III → Filed → Launched (~5,000 each) |
| Regulatory status | Approved / Pending / Rejected (~10,000 each) |
| Payer type | Government / Mixed / Private (~10,000 each) |
| Pricing tier | Value / Mid / Premium (~10,000 each) |
| Launch risk | Low / Medium / High (~10,000 each) |
| Missing values | None |

---

## 2. Portfolio Landscape

**Total market size by therapy area ($M, summed across all assets tagged to that area):**

| Therapy area | Total market size | Avg per asset | Avg CAGR |
|---|---|---|---|
| CV | 45,946,896 | 7,573 | 12.97% |
| Rare Disease | 45,441,711 | 7,572 | 12.99% |
| Oncology | 45,232,855 | 7,531 | 13.06% |
| Diabetes | 45,069,891 | 7,522 | 13.04% |
| Immunology | 45,019,568 | 7,587 | 13.02% |

All five areas land within 2% of each other — no therapy area stands out as
over- or under-weighted in this file.

**Total market size by company ($M):**

| Company | Total market size | Avg per asset |
|---|---|---|
| Sanofi | 38,230,939 | 7,545 |
| Novartis | 38,148,566 | 7,590 |
| Merck | 38,141,946 | 7,658 |
| AstraZeneca | 37,543,023 | 7,506 |
| Roche | 37,406,348 | 7,542 |
| Pfizer | 37,240,100 | 7,502 |

Again, spread across the six companies is under 3% — consistent with random
assignment rather than real competitive imbalance.

---

## 3. Pipeline Funnel

| Stage | Assets |
|---|---|
| Discovery | 5,047 |
| Phase I | 4,983 |
| Phase II | 5,010 |
| Phase III | 4,987 |
| Filed | 4,997 |
| Launched | 4,976 |

A real portfolio funnel narrows sharply from Discovery to Launch (typical
industry attrition is >90% between Phase I and approval). Here, stage
population is flat — another signal this is synthetic scaffolding rather than
an observed pipeline.

**Regulatory outcome is also independent of launch stage** — "Launched" assets
show Approved/Pending/Rejected in roughly the same 1:1:1 ratio as "Discovery"
assets, which would not happen in a real dataset (rejection should be
resolved, and launched products are — by definition — approved).

---

## 4. Competitive Set

| Field | Note |
|---|---|
| Competitor distribution | Roche (5,085), Merck (5,068), AstraZeneca (5,011), Sanofi (4,987), Pfizer (4,946), Novartis (4,903) — flat |
| Self-referential rows | 5,002 assets (16.7%) list their own company as the competitor |

Because the competitor field is randomly drawn from the same six-company list
independent of the asset's own company, it cannot support a real head-to-head
rivalry map (e.g., "Roche vs. Novartis in Oncology"). A genuine competitive
intelligence module (Module B) needs competitor identity tied to actual
label, trial registry, or conference-disclosed data.

---

## 5. Market Access & Pricing Snapshot

| Pricing tier × Payer type | Government | Mixed | Private |
|---|---|---|---|
| Value | 3,321 | 3,300 | 3,399 |
| Mid | 3,363 | 3,339 | 3,308 |
| Premium | 3,264 | 3,298 | 3,408 |

No tier is disproportionately steered toward a payer type, and average
forecast units are flat across pricing tiers (~2.49–2.51M units regardless of
Value/Mid/Premium) — in a real market, premium-tier assets would typically
show lower volume, higher price positioning.

---

## 6. Patent Cliff Exposure (2026–2028)

6,944 of 30,000 assets (23.1%) show a `patent_expiry` date in the 2026–2028
window, with exposure spread evenly across therapy areas:

| Therapy area | Market size exposed ($M) |
|---|---|
| Diabetes | 10,848,008 |
| Rare Disease | 10,741,385 |
| Oncology | 10,497,196 |
| Immunology | 10,468,491 |
| CV | 10,178,165 |

If this were real portfolio data, this cut would be the most actionable —
flagging near-term LOE (loss of exclusivity) exposure by area for biosimilar/
generic defense planning. Worth re-running against real patent and revenue
data.

---

## 7. Highest-Priority Watchlist (structural, not strategic)

212 assets meet the filter: **Launch risk = High, Stage = Filed or Launched,
Priority score ≥ 95.** Top 20 by priority score:

| Asset | Company | Brand | Therapy area | Country | Market size ($M) | Reg. status |
|---|---|---|---|---|---|---|
| A000485 | Novartis | Brand485 | Rare Disease | India | 7,366 | Pending |
| A001586 | AstraZeneca | Brand86 | Immunology | UK | 9,291 | Rejected |
| A001168 | Merck | Brand168 | Immunology | India | 4,899 | Pending |
| A001045 | Pfizer | Brand45 | Immunology | Germany | 4,451 | Rejected |
| A005940 | Roche | Brand440 | CV | US | 12,931 | Rejected |
| A007713 | Roche | Brand213 | Immunology | UK | 9,105 | Pending |
| A005586 | Novartis | Brand86 | Diabetes | India | 12,919 | Rejected |
| A020455 | Merck | Brand455 | Immunology | France | 10,311 | Rejected |
| A020074 | Merck | Brand74 | Diabetes | Germany | 3,671 | Rejected |
| A020323 | Novartis | Brand323 | Oncology | France | 1,323 | Approved |
| A019455 | Sanofi | Brand455 | Immunology | UK | 4,467 | Pending |
| A018220 | Pfizer | Brand220 | Immunology | UK | 2,508 | Approved |
| A016551 | AstraZeneca | Brand51 | Immunology | France | 1,500 | Pending |
| A016769 | Pfizer | Brand269 | Diabetes | Japan | 10,332 | Approved |
| A017165 | Novartis | Brand165 | Rare Disease | UK | 13,971 | Pending |
| A015817 | Roche | Brand317 | Rare Disease | US | 14,653 | Rejected |
| A015897 | Merck | Brand397 | Diabetes | Germany | 6,604 | Pending |
| A016125 | Sanofi | Brand125 | CV | UK | 14,044 | Pending |
| A013945 | Pfizer | Brand445 | Diabetes | US | 344 | Approved |
| A012801 | Roche | Brand301 | Oncology | France | 8,952 | Pending |

This is a useful *shape* for a real "watchlist" report (high risk + high
priority + late stage), but with random inputs the ranking has no predictive
value — it's shown here to demonstrate the filter/output format only.

---

## 8. Recommendations

1. **Treat this file as a schema/template, not a market signal.** It's well
   suited for testing dashboards, pivot logic, or this skill's report
   structure — not for launch, pricing, or access decisions.
2. **To get a real Module A–J analysis** (therapy landscaping, KOL synthesis,
   market sizing, payer assessment, brand strategy), connect actual sources:
   IQVIA/Symphony extracts, claims data, company 10-Ks/investor decks,
   ClinicalTrials.gov pulls, or primary research transcripts. I can build the
   same report structure against any of those.
3. **If this is meant to represent a real book of business**, worth checking
   with whoever generated the export — the flat distributions and
   self-referential competitor rows suggest a placeholder/synthetic seed
   rather than an IQVIA or CRM extract.

---

*Analysis generated via the pharma-market-research-intel skill. All figures
sourced directly from the uploaded file; no external market data was
fabricated or assumed.*
