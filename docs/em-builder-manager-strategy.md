# Blog Post Strategy Document
# "The Engineering Manager Who Doesn't Code Is Obsolete. The One Who Only Codes Is Next."

## Author: Angel Kurten | Target: angelkurten.com
## Date: April 2026

---

# TASK 1: THE CURRENT DEBATE — RESEARCH FINDINGS

## The Landscape (April 2026)

The "should EMs code?" debate has reached a fever pitch in early 2026, but the conversation has shifted. It is no longer about personal preference. It is about survival. Three forces have converged to make this question existential:

### Force 1: The Great Flattening

Gartner predicts that by 2026, **20% of organizations will use AI to flatten their organizational structure, eliminating more than half of current middle management positions** ([Gartner, Oct 2024](https://www.gartner.com/en/newsroom/press-releases/2024-10-22-gartner-unveils-top-predictions-for-it-organizations-and-users-in-2025-and-beyond)). This is not theoretical — it is happening now:

- **Block (Square)** cut 40% of its workforce (4,000+ positions) in February 2026, citing AI capabilities. Jack Dorsey announced a "mini-AGI" vision where AI maintains "a continuously updated model of an entire business" that replaces layers of management coordination ([Block, Feb 2026](https://block.xyz/inside/from-hierarchy-to-intelligence)).
- **Klarna** initially replaced 700 customer service roles with AI, then had to urgently rehire humans — even forcing engineers into call center roles — after quality collapsed ([CNBC](https://www.cnbc.com/2025/05/14/klarna-ceo-says-ai-helped-company-shrink-workforce-by-40percent.html)).
- **Meta** analyzed productivity data after AI rollout and found teams delivering the same output in fewer hours, prompting structural review.
- **Fortune** labeled this "The Great Flattening" — the coming extinction of the middle manager ([Fortune, Sep 2025](https://fortune.com/2025/09/19/surviving-great-flattening-coming-extinction-of-middle-manager-layoffs/)).

Adam Ferrari's Substack piece ["Will the Great Flattening Eliminate Engineering Management?"](https://adamferrari.substack.com/p/will-the-great-flattening-eliminate) argues that flattening is valid but will hit an equilibrium — when teams reach 10:1 IC-to-EM ratios, quality degrades. The EM role survives, but only for those who provide value beyond coordination.

### Force 2: AI Is Eating the Code (But Not the Judgment)

Key statistics from 2025-2026:
- **AI-generated code represents 41-42% of global code** in 2026, but sustainable benchmarks sit between 25-40% to prevent quality degradation ([NetCorp](https://www.netcorpsoftwaredevelopment.com/blog/ai-generated-code-statistics), [Elite Brains](https://www.elitebrains.com/blog/aI-generated-code-statistics-2025)).
- **GitHub's data**: AI writes 46% of the average developer's code, up to 61% in Java ([GitHub Octoverse](https://github.blog/ai-and-ml/generative-ai/how-ai-is-reshaping-developer-choice-and-octoverse-data-proves-it/)).
- **25% of Google's code** is AI-assisted (Sundar Pichai).
- **95% of engineers** use AI tools at least weekly (Pragmatic Engineer survey, 3,000 respondents, March 2026). 75% use AI for at least half their work ([Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/ai-tooling-2026)).
- **Claude Code leads** at 71% usage among surveyed engineers, followed by Copilot (46%) and Cursor (39%).
- **Amazon now requires senior engineer sign-off** on all AI-generated code after multiple "high blast radius" outages, including a 6-hour Amazon.com shopping outage (March 5, 2026) and a 13-hour AWS outage in China from an autonomous AI agent ([TechRadar](https://www.techradar.com/pro/amazon-is-making-even-senior-engineers-get-code-signed-off-following-multiple-recent-outages)).

### Force 3: The Trust Crisis

From the **2025 Stack Overflow Developer Survey** ([Stack Overflow](https://stackoverflow.blog/2025/12/29/developers-remain-willing-but-reluctant-to-use-ai-the-2025-developer-survey-results-are-here/)):
- **80%** of developers use AI tools, but only **29%** trust their accuracy (down from 40%).
- **46%** actively distrust AI output — more than those who trust it (33%).
- **Only 3%** "highly trust" AI.
- **45%** cite "AI solutions that are almost right, but not quite" as their #1 frustration.
- **66%** spend more time fixing "almost-right" AI code.
- Experienced developers are the most cautious: lowest trust rate (2.6% "highly trust"), highest distrust (20% "highly distrust").

### Key Articles in the Debate

1. **Armin Ronacher, "The Final Bottleneck"** (Feb 13, 2026) — [lucumr.pocoo.org](https://lucumr.pocoo.org/2026/2/13/the-final-bottleneck/)
   - Core argument: AI removes coding bottlenecks, but *he himself* is the final bottleneck. As long as humans carry responsibility and accountability for shipped software, non-sentient machines cannot carry that responsibility. The bottleneck shifts from "writing code" to "understanding and being accountable for code."
   - Uses textile industry/industrial revolution parallel: when one bottleneck is removed, innovation moves to the next constraint downstream.

2. **LeadDev, "Who wants to be an engineering manager anyway?"** (2026) — [leaddev.com](https://leaddev.com/management/why-would-anyone-be-an-engineering-manager-in-2026)
   - Management positions are "dead ends" in many orgs. Companies flatten org charts, hollow out middle management. The market for management roles is "particularly difficult." Engineers watched layers of management get removed overnight in the post-ZIRP era.

3. **LeadDev, "5 uncomfortable predictions for engineering leaders in 2026"** — [leaddev.com](https://leaddev.com/leadership/5-uncomfortable-predictions-for-engineering-leaders-in-2026)
   - EMs are "damned if they do use AI, damned if they don't" — pressured to show AI impact while questioned if they ignore it.
   - EU AI Act compliance deadline (August 2026) adds regulatory pressure.

4. **Jim Grey, "The player/coach trap: why Engineering Managers shouldn't be expected to code"** (March 25, 2026) — [dev.jimgrey.net](https://dev.jimgrey.net/2026/03/25/the-player-coach-trap-why-engineering-managers-shouldnt-be-expected-to-code/)
   - "When managers code, teams lose leadership." Argues that AI makes organizational challenges grow faster, so leadership attention becomes *more* valuable, not less.
   - This is the primary straw man Angel's post should engage with directly.

5. **Gregor Ojstersek, "Would I Still Go The Engineering Manager Route in 2026?"** — [eng-leadership.com](https://newsletter.eng-leadership.com/p/would-i-still-go-the-engineering)
   - Companies still desperately need strong EMs ($350K-$500K TC). But advises senior engineers to wait before jumping to management.

6. **Mirek Stanek, "Career Advice for 2026"** — [practicalengineering.management](https://www.practicalengineering.management/p/career-advice-for-2026)
   - "If AI can generate features in days and still two-thirds of them don't move the needle, it becomes painfully obvious the problem was never 'too slow coding' but 'building the wrong things.'"
   - If one engineer can ship what used to take two or three, organizations won't keep the exact headcount.

7. **SF Standard, "'Engineer' is so 2025. In AI land, everyone's a 'builder' now"** (March 5, 2026) — [sfstandard.com](https://sfstandard.com/2026/03/05/engineer-2025-ai-land-everyone-s-builder-now/)
   - Boris Cherny (creator of Anthropic's Claude Code): "We're going to start to see the title of 'software engineer' go away. It's just going to be 'builder' or 'product manager.'"
   - LinkedIn launched a "full stack builder" program for all employees regardless of title.

8. **Gartner (May 2025)**: "Generative AI is redefining the role of software engineering leaders" — by 2027, 70% of SE leader roles will require GenAI oversight ([Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-05-08-generative-ai-is-redefining-the-role-of-software-engineering-leaders)).

9. **Jellyfish 2025 State of Engineering Management Report**: 90% of engineering teams now use AI coding tools (up from 61% the prior year). 62% report at least 25% increase in developer velocity. 81% of developers expect significant development to shift from humans to AI ([Jellyfish](https://jellyfish.co/blog/2025-software-engineering-management-trends/)).

10. **Pragmatic Engineer AI Tooling Survey (March 2026)**: Staff+ engineers are the heaviest agent users (63.5% use agents regularly). Engineering managers trail at 46.1%. This gap is the problem — the people reviewing and approving AI-generated code use AI agents less than the people generating it.

---

# TASK 2: DETAILED POST OUTLINE

## Opening Hook (First 2 Sentences)

> Last month, Amazon mandated that every AI-generated code change requires senior engineer sign-off after autonomous agents caused a six-hour shopping outage and a thirteen-hour AWS meltdown. Meanwhile, Block fired 40% of its workforce and declared it would rebuild the company as a "mini-AGI." These two responses — more human oversight and less human involvement — cannot both be right. Unless the question itself is wrong.

**Why this works**: Starts with two real, recent, headline-grabbing events that represent the two extremes. Creates immediate cognitive tension. The reader must keep reading to resolve the paradox.

---

## Section 1: The Two Deaths of the Engineering Manager
**## The Two Deaths of the Engineering Manager**

- Open with the Gartner stat: 20% of orgs will use AI to eliminate 50% of middle management by 2026. Fortune calls it "The Great Flattening."
- Describe the two archetypes being killed off:
  - **Death 1: The Pure Manager** — the EM who became a full-time meeting-and-spreadsheet operator. Organizations realize AI can handle coordination, status reporting, and performance tracking. These EMs are the first to be flattened.
  - **Death 2: The Player-Coach** — the EM who codes 60% of the time and manages in the cracks. Their team lacks leadership, their code lacks focus, and they burn out. Jim Grey's "player/coach trap" articulated this in March 2026.
- Key data: LeadDev's "Who wants to be an engineering manager?" piece — management becoming a "dead end," positions disappearing overnight.
- **Tension**: If pure managers die and player-coaches burn out, what survives?

**Cross-reference Angel's blog**: Link to the "headless monkey" post — the same undisciplined AI usage Angel warns ICs about applies to managers too. An EM who codes without strategy is just a headless monkey with a calendar full of 1:1s.

---

## Section 2: The Bottleneck Moved (And Most EMs Didn't Follow It)
**## The Bottleneck Moved. Most EMs Didn't Follow It.**

- Anchor on Armin Ronacher's "The Final Bottleneck" — the bottleneck is no longer writing code. AI writes 41-42% of code globally. The bottleneck is *understanding, evaluating, and being accountable for* code.
- Industrial revolution parallel from Ronacher: removing one bottleneck moves innovation to the next constraint downstream.
- In engineering teams today, the constraints are:
  1. **Evaluating AI output quality** (Stack Overflow: 66% of devs spend more time fixing "almost right" AI code)
  2. **Maintaining architectural coherence** (Angel's "AI agents break codebases" post showed 75% of agents break working code over time)
  3. **Deciding what to build** (Mirek Stanek: "the problem was never too slow coding but building the wrong things")
- The EM who can only manage cannot evaluate AI output. The EM who understands the code *and* the business context is now the most critical person in the room.

**Cross-reference Angel's blog**: Link to the "AI agents breaking codebases" post. Cite the SWE-CI data (75% break working code), CodeRabbit data (1.7x more issues), and comprehension debt research (5-7x faster generation than comprehension).

---

## Section 3: The Builder-Manager Model
**## The Builder-Manager: A Third Path**

- Define the model explicitly. This is NOT the player-coach. The difference:
  - **Player-Coach**: Codes to ship features. On the critical path. Team waits for their code.
  - **Builder-Manager**: Builds to *understand the system* and *validate AI output*. Never on the critical path. The team never blocks on their code.
- What the Builder-Manager builds with their own hands:
  1. **Internal tooling and prototypes** — MCP servers, RAG pipelines, AI workflow tools. Things that make the team faster, not features on the roadmap.
  2. **Proof-of-concept evaluations** — Testing whether a new AI tool, framework, or architecture actually works before asking the team to adopt it.
  3. **CLAUDE.md / .cursorrules / architecture decision records** — The configuration and documentation layer that makes AI agents effective for the whole team.
  4. **Code review with deep context** — Not rubber-stamping PRs but evaluating architectural impact, especially for AI-generated code.
- What the Builder-Manager NEVER builds:
  1. **Features on the critical path** — If the team is waiting on your PR, you have failed as a manager.
  2. **Production hotfixes under pressure** — Your job is to ensure the team can handle this, not to be the hero.
  3. **Code that only you understand** — If your code creates a knowledge silo, you have replicated the worst part of being an IC.

**Cross-reference Angel's blog**: Link to MCP servers post — Angel literally built production MCP servers. Link to RAG pipeline post — Angel took retrieval precision from 58% to 91%. Link to architecture docs post — Angel built the auto-generating docs system. These are all builder-manager artifacts: internal tools that made the team more capable.

---

## Section 4: The Time Allocation Framework
**## The 20/30/50 Rule**

- Present a concrete time allocation framework:
  - **20% Building** — Hands-on technical work (prototypes, tooling, POCs, code review)
  - **30% Enabling** — Architecture decisions, technical strategy, AI governance, team skill development
  - **50% Leading** — 1:1s, hiring, stakeholder management, cross-team coordination, career growth
- Why this ratio, with evidence:
  - Old advice: "EMs should code 30% of their time" ([Linux.com](https://www.linux.com/news/engineering-managers-should-code-30-their-time/)). This was for writing features. The builder-manager codes 20% but on the *right things*.
  - The Pragmatic Engineer survey shows EM agent usage (46.1%) trails Staff+ engineers (63.5%). The building time is how you close that gap — you cannot evaluate what you do not understand.
  - Jim Grey says coding steals from leadership time. TRUE — if you are coding features. FALSE — if your building time directly improves the team's capability.
- Adjust by team size:
  - **3-5 reports**: 30/25/45 (more building time, smaller leadership load)
  - **6-10 reports**: 20/30/50 (the standard)
  - **11-15 reports**: 10/30/60 (minimal building, maximum leadership)
  - **15+ reports**: 5/35/60 (you are a director now; build only to stay current)

---

## Section 5: The AI Governance Responsibility
**## Your New Job: Chief AI Quality Officer**

- Amazon's mandate (senior sign-off for AI code) is the canary in the coal mine. Every engineering organization will need an AI code policy by end of 2026.
- The EM who understands the code is uniquely positioned to own this:
  1. **Define risk tiers** — which systems need human review for every AI change (payments, auth, data) vs. which can have lighter oversight (internal tools, admin panels).
  2. **Track AI code quality metrics** — Angel's blog documented tagging AI-generated PRs and finding 2.3x higher bug-fix rates.
  3. **Build the guardrails** — CLAUDE.md files, architectural linting, regression test requirements, scope limits for agent PRs.
  4. **Train the team** — Stack Overflow data shows 59% of devs use AI code they don't understand. The EM's job is to close that gap, not ignore it.
- The EU AI Act compliance deadline (August 2026) makes this a legal requirement in regulated industries, not just a best practice.

**Cross-reference Angel's blog**: Directly reference the "structured AI usage" post and the "AI agents breaking codebases" guardrails section. Angel has already documented the specific guardrails (never let agents self-merge, regression test suites, scope to single-concern changes, track agent-generated code separately).

---

## Section 6: The Uncomfortable Truth About Trust
**## Why Your Team Won't Follow a Manager Who Can't Read the Code**

- Stack Overflow: 46% of developers actively distrust AI output. 75% say the #1 reason to ask a human is "when I don't trust AI's answers."
- If the EM cannot evaluate AI output, they become a rubber stamp. The team knows it. Trust erodes.
- The experienced developer problem: senior devs (lowest AI trust, highest distrust) are the ones who need *peer-level* review from their manager, not managerial hand-waving.
- Analogy: A hospital administrator who has never practiced medicine vs. a chief of surgery who still operates occasionally. Which one does the surgical team trust when there is a disagreement about procedure?
- This is NOT about technical authority or ego. It is about credibility. The builder-manager earns the right to make architectural calls because they have recent, hands-on evidence of what works.

---

## Section 7: The Playbook (Closing)
**## Start Monday: The Builder-Manager Playbook**

Give readers something actionable for their first week:

1. **Audit your last month** — How much of your time was building, enabling, or leading? If building is 0%, you are exposed.
2. **Pick one internal tool to build** — Not a feature. A tool. An MCP server that connects your team's ticketing system to Claude. A script that auto-generates architecture docs. A CLAUDE.md file for your main repo.
3. **Implement AI code governance** — Tag AI-generated PRs. Run full regression suites on them. Measure bug rates over 30 days. Angel's data showed 2.3x higher follow-up fix rates — know your number.
4. **Close the agent gap** — If your ICs use AI agents more than you do (63.5% vs 46.1% per Pragmatic Engineer), you cannot evaluate their work. Spend two hours this week using Claude Code on your own codebase.
5. **Document one architecture decision** — Write an ADR for the most recent significant technical choice. This is the context layer that makes both humans and AI agents more effective.

**Closing line**: The engineering manager who does not code is being replaced by AI. The one who only codes is being replaced by a senior IC who costs less. The one who builds the *right things* — tools, governance, context, trust — is the one the team and the organization cannot afford to lose.

---

# TASK 3: CORE ARGUMENT STRUCTURE

## The Central Thesis

The "should EMs code?" debate is a false binary. The question is not whether to code but *what* to build. The builder-manager model is a third path between pure manager and player-coach, defined by three principles:

1. **Build to understand, not to ship.** Your building time exists to maintain technical credibility and evaluate AI output quality. You are never on the critical path.
2. **Build what multiplies the team.** Internal tools, AI governance, architecture documentation, evaluation frameworks. Not features.
3. **Build less as you scale.** The ratio shifts with team size. At 15+ reports, building is 5% — but that 5% keeps you grounded.

## What Differentiates This From Existing Models

| Dimension | Pure Manager | Player-Coach | Builder-Manager |
|-----------|-------------|--------------|-----------------|
| Codes? | No | Yes (features) | Yes (tools/infra) |
| On critical path? | Never | Often | Never |
| Can evaluate AI output? | Poorly | Well (but time-starved) | Well (by design) |
| Team blocks on them? | No | Yes | No |
| Survives flattening? | No (replaced by AI coordination) | Maybe (if team is small) | Yes (unique value) |
| Time coding | 0% | 40-60% | 10-20% |
| What they build | Nothing | Roadmap features | Internal tools, governance, POCs |

## The Boundaries

### What a Builder-Manager SHOULD build:
- MCP servers for team workflows
- RAG pipeline prototypes and evaluations
- CLAUDE.md / .cursorrules / architecture context files
- AI governance tooling (PR tagging, metric dashboards)
- POC evaluations of new tools/frameworks
- Architecture Decision Records

### What a Builder-Manager should NEVER build:
- Sprint features assigned to the team
- Production hotfixes (unless the team literally cannot)
- Code that creates a dependency on the manager
- Anything that makes the manager a bottleneck for shipping

### Time Allocation by Team Size

| Team Size | Build | Enable | Lead |
|-----------|-------|--------|------|
| 3-5 | 30% | 25% | 45% |
| 6-10 | 20% | 30% | 50% |
| 11-15 | 10% | 30% | 60% |
| 15+ | 5% | 35% | 60% |

---

# TASK 4: CONTRARIAN ANGLES

## Straw-Man Arguments to Tear Down

1. **"EMs should never code because it takes away from leadership."** (Jim Grey's position)
   - Tear-down: This assumes coding = shipping features. The builder-manager codes to *improve leadership quality*. You cannot lead a team through AI governance if you do not understand AI tools. You cannot evaluate architectural decisions if you last wrote code three years ago. Grey's argument applies to the player-coach. It does not apply to the builder-manager.

2. **"AI will replace the need for EMs to understand code."**
   - Tear-down: The opposite is happening. Amazon mandated human oversight *because* AI agents caused outages. Stack Overflow shows 46% of developers distrust AI output. Someone must be the quality backstop. If the EM cannot do it, who will?

3. **"Good EMs scale through people, not through code."**
   - Tear-down: True — and the builder-manager scales through people by building tools that make those people more effective. An MCP server that saves each engineer 2 hours/week across a 10-person team is 20 hours/week of leverage. That IS scaling through people.

4. **"The Great Flattening means fewer EMs, so this debate is moot."**
   - Tear-down: Fewer EMs means the surviving ones must provide more value per person. The pure manager is the one being eliminated. The builder-manager is the one orgs will pay $350K-$500K to keep.

## Uncomfortable Truths to State

1. **Most EMs stopped coding out of comfort, not strategy.** Meetings are easier than debugging. 1:1s feel productive even when they are not. The calendar fills itself. Coding requires uninterrupted time that EMs are too undisciplined to protect.

2. **The "I manage, I don't code" EM has been coasting.** In a world where AI handles coordination, status updates, and performance tracking summaries, the pure manager's value proposition collapses. If your entire job can be done by an AI agent with access to Jira and Slack, you do not have a job — you have a title.

3. **Most player-coach EMs are mediocre at both.** They write 60% of their team's code and do 40% of the management. The code is not reviewed properly because the reviewer is also the author. The management is not done well because there is no time. Jim Grey is right that this model is broken. He is wrong that the answer is to stop coding entirely.

4. **The EM agent usage gap is damning.** Staff+ engineers use AI agents at 63.5%. EMs at 46.1%. The people approving and governing AI-generated code are less experienced with the tools than the people generating it. This is like a building inspector who has never used a level.

5. **"Engineering manager" may not survive as a title.** Boris Cherny (Claude Code creator) says "builder" or "product manager" will replace "software engineer." If ICs become builders, the EM becomes the "builder-leader" — and the word "builder" implies they actually build something.

## Provocative Claims That Will Generate LinkedIn Comments

1. "If you haven't used Claude Code on your own codebase in the last 30 days, you are not qualified to review AI-generated pull requests from your team."

2. "The 'I trust my team' EM is the new 'I trust my tests' developer — both are abdicating the responsibility to verify."

3. "Amazon's AI code review mandate is the most important engineering management policy of 2026. Most EMs have not even read about it."

4. "In two years, 'do you still code?' will not be an interview question for EMs. It will be a job requirement — because the alternative is an IC with better tools and lower overhead."

5. "The builder-manager is not a new idea. It is how the best EMs have always worked. AI just made it impossible to fake."

## The Personal Experience Only Angel Can Bring

- **Scaling teams from 3 to 18 engineers** across multiple companies — lived the transition from hands-on coding to management.
- **Building real AI tools as an EM**: RAG pipeline (58% to 91% precision), production MCP servers, auto-generating architecture docs, AI agent testing across codebases.
- **Managing a team that uses AI agents daily** while personally using them — closing the agent usage gap from lived experience.
- **Documenting AI governance practices**: PR tagging, regression requirements, scope limits, agent tracking that showed 2.3x bug rate difference.
- **Bilingual/international perspective** on a debate that is mostly US-centric.
- **The blog itself as evidence**: 7 deeply technical posts while holding an EM title. The blog IS the builder-manager model in practice.

---

# TASK 5: SEO AND DISTRIBUTION STRATEGY

## Target Keywords

### Primary (highest intent):
- "engineering manager coding" / "should engineering managers code"
- "engineering manager AI 2026"
- "engineering management AI era"
- "builder manager model"

### Secondary (debate-related):
- "engineering manager player coach"
- "engineering manager time allocation"
- "AI code review engineering manager"
- "great flattening engineering management"

### Long-tail:
- "what should engineering managers build"
- "engineering manager AI governance"
- "engineering manager code review AI generated"
- "engineering manager obsolete AI"

## Title Variations

1. **"The Engineering Manager Who Doesn't Code Is Obsolete. The One Who Only Codes Is Next."** (recommended — punchy, creates tension, works on LinkedIn)
2. "The Builder-Manager Model: What Engineering Managers Should Actually Build in the AI Era"
3. "Neither Pure Manager Nor Player-Coach: The Third Path for Engineering Leaders in 2026"
4. "I'm an Engineering Manager Who Still Codes. Here's What I Build — And What I Never Touch."
5. "Your Engineering Manager Should Code. Just Not What You Think."

**Recommendation**: Option 1 for the blog post title and LinkedIn. Option 4 as an alternative if a more personal tone is preferred. Option 2 for SEO if the primary title does not rank well (more keyword-rich).

## Optimal Post Length

**Target: 3,500-4,500 words.**

Rationale:
- Angel's existing posts range from 2,000 words (scalable systems) to 5,500+ words (RAG pipeline). The voice and audience expect depth.
- This topic is opinion/framework, not tutorial — less code, more argument. 3,500-4,500 words is enough to build the full case with data without losing the reader.
- LinkedIn teasers drive traffic to long-form posts. The post needs to be substantial enough to justify the click.
- For SEO, posts above 3,000 words consistently outperform shorter posts for competitive keywords.

## LinkedIn Teaser Text

### Option A (Data-led):
> Amazon just mandated that every AI-generated code change needs senior engineer sign-off — after autonomous agents caused a 6-hour shopping outage.
>
> Meanwhile, Gartner says 20% of orgs will use AI to eliminate half their middle management by 2026.
>
> Engineering managers are being squeezed from both sides. The ones who don't code can't evaluate AI output. The ones who only code can't lead.

### Option B (Personal + provocative):
> I'm an Engineering Manager who still writes code. Not features — I haven't shipped a sprint feature in two years.
>
> I build MCP servers, RAG pipelines, and AI governance tooling. Internal tools that make my team faster.
>
> The "should EMs code?" debate is asking the wrong question. The right question is: what should you build?

### Option C (Challenge-driven):
> If you manage engineers and haven't used Claude Code on your own codebase in the last 30 days, you are not qualified to review AI-generated pull requests from your team.
>
> Strong claim? Here's the data behind it:
> - 46% of devs distrust AI output (Stack Overflow 2025)
> - 75% of AI agents break working code over time (SWE-CI benchmark)
> - EMs use AI agents at 46.1% vs Staff+ engineers at 63.5%

**Recommendation**: Option B for the primary LinkedIn post. Most personal, aligns with Angel's brand as a builder-manager. Option C for a follow-up post or comment thread.

## Distribution Strategy

### Tier 1 (Day of publication):
- **LinkedIn personal post** with teaser text (Option B). Tag relevant people in the debate (Jim Grey if connected, Gergely Orosz if appropriate). Use hashtags: #engineeringmanagement #AIcoding #leadership
- **Twitter/X thread** — 8-10 tweet thread summarizing the framework with the chart (Pure Manager vs Player-Coach vs Builder-Manager).

### Tier 2 (Day 1-3):
- **Hacker News** — Submit with a non-clickbait title variation: "The Builder-Manager Model: What EMs should build in the AI era" (HN audiences distrust LinkedIn-style titles). Best posted Tuesday-Thursday, 9-11 AM ET.
- **Reddit**:
  - r/ExperiencedDevs (150K+ members, highly relevant)
  - r/EngineeringManagers (smaller but targeted)
  - r/programming (large but competitive)

### Tier 3 (Week 1-2):
- **Engineering Leadership Slack/Discord communities**: Rands Leadership Slack, Engineering Managers Slack
- **Newsletter pitches**: Reach out to Pragmatic Engineer, Engineering Leadership Newsletter, LeadDev for potential feature/link
- **Comment on the Jim Grey post** and the Adam Ferrari Substack with a link to the counterargument

### Tier 4 (Ongoing):
- **Cross-link from existing posts**: Add a sentence and link to the new post from the "structured AI usage" post and the "AI agents breaking codebases" post where relevant.
- **Spanish version**: Translate and publish as the .es.mdx variant, given the blog's bilingual setup.

---

# APPENDIX: CROSS-REFERENCE MAP FOR ANGEL'S EXISTING POSTS

| Existing Post | Where to Reference | What to Cite |
|---|---|---|
| "Stop Being a Headless Monkey" | Section 1 (Two Deaths) | The undisciplined AI usage applies to managers too |
| "AI Agents Breaking Codebases" | Section 2 (Bottleneck Moved) | 75% agents break code, 2.3x bug rate, guardrails |
| "Building Production MCP Servers" | Section 3 (Builder-Manager) | Example of what a builder-manager builds |
| "RAG Pipeline Guide" | Section 3 (Builder-Manager) | Example of builder-manager output (58% to 91%) |
| "Auto-Generating Architecture Docs" | Section 3 (Builder-Manager), Section 7 (Playbook) | Example of internal tooling, dual-indexing strategy |
| "Building Scalable Systems" | Section 5 (AI Governance) | ADRs, architectural decision documentation |
| "Building a Blog with Next.js" | Not referenced | Too tangential |

---

# APPENDIX: KEY DATA POINTS QUICK REFERENCE

| Stat | Source | Use In Section |
|---|---|---|
| 20% of orgs eliminate 50% middle management by 2026 | Gartner | Section 1 |
| Block cut 40% workforce (4,000 positions) for "mini-AGI" | Block/Fortune | Section 1 |
| AI writes 41-42% of global code | NetCorp/Elite Brains | Section 2 |
| 46% of code is AI-written (GitHub) | GitHub Octoverse | Section 2 |
| 95% of engineers use AI weekly | Pragmatic Engineer | Section 2 |
| 46% devs distrust AI, only 29% trust it | Stack Overflow 2025 | Section 6 |
| 66% spend more time fixing "almost right" AI code | Stack Overflow 2025 | Section 2 |
| Amazon mandates senior sign-off for AI code | TechRadar/multiple | Section 5 |
| EM agent usage 46.1% vs Staff+ 63.5% | Pragmatic Engineer | Section 4, 6 |
| 75% of AI agents break working code (SWE-CI) | Angel's own post/SWE-CI | Section 2 |
| 1.7x more issues in AI code | CodeRabbit | Section 2 |
| 2.3x higher bug-fix rate for agent PRs | Angel's own data | Section 5, 7 |
| 90% of eng teams use AI coding tools | Jellyfish 2025 | Section 2 |
| By 2027, 70% SE leader roles require GenAI oversight | Gartner | Section 5 |
| $350K-$500K TC for strong EMs | eng-leadership.com | Section 4 |
| Klarna rehired humans after AI service collapse | CNBC/multiple | Section 1 |
