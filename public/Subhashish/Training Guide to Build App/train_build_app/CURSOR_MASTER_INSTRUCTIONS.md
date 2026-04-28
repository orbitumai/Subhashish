# MeetOrbi Master Build Instructions for Cursor

> **Read this file on EVERY prompt. This is law.**
> Place at repo root: `/CURSOR_MASTER_INSTRUCTIONS.md`

---

## 🎯 MISSION

Build **MeetOrbi v1.0** — AI Chief of Staff for Google Workspace
- **Brand:** MeetOrbi by OrbitumAI  
- **Target:** MIT/Stanford grads, technical operators
- **Timeline:** 21 days
- **Stack:** Next.js 14 + Supabase + Anthropic SDK + LangGraph + Google APIs

---

## 📚 SOURCE OF TRUTH HIERARCHY

When conflicts arise, follow this order:

1. **This file** (CURSOR_MASTER_INSTRUCTIONS.md) — overrides everything
2. **build_MO.md** — architectural decisions, 34-step build plan
3. **cursorrules.md** — coding standards, naming conventions
4. **supabase_schema.sql** — database schema, RLS policies
5. User's current prompt — tactical execution

---

## 🏗️ ARCHITECTURE (LOCKED — NO ALTERNATIVES)

### Tech Stack
```yaml
Frontend: Next.js 14 App Router + TypeScript strict
UI: Shadcn/ui + Tailwind CSS
Fonts: Plus Jakarta Sans (UI), Inter (body), Playfair Display (display)
Database: Supabase (Postgres + pgvector + Realtime + Auth)
Auth: Supabase Auth → Google OAuth ONLY
Agent Runtime (Pro/Team): Anthropic Managed Agents ($0.08/hr)
Agent Runtime (Starter): Claude Agent SDK (self-hosted on Vercel Edge)
Orchestration: LangGraph TypeScript SDK
Google APIs: googleapis SDK (server-side only, NOT MCP-dependent)
AI Models: Claude Opus 4.7 / Sonnet 4.6 / Haiku 4.5 ONLY
Hosting: Vercel Pro
Package Manager: pnpm
```

### What We DON'T Use
- ❌ Firebase (we chose Supabase)
- ❌ n8n (eliminated — SDK stack handles orchestration natively)
- ❌ OpenAI, Gemini, Llama (Claude-only product)
- ❌ Prisma standalone (Supabase client is enough)
- ❌ Material UI, Chakra (Shadcn/ui only)

---

## 🤖 AGENT ARCHITECTURE (CRITICAL)

### The Core Insight
**ONE user-facing agent ("Chief of Staff") = FOUR internal LangGraph modules**

```
User sees: "Chief of Staff" agent

Behind the scenes:
  Chief of Staff (master orchestrator)
    ├── Inbox Module (Gmail)
    ├── Calendar Module (Google Calendar)  
    ├── Drive Module (Google Drive)
    ├── Tasks Module (Google Tasks)
    ├── Memory Module (pgvector)
    └── Security Module (approval gates)
```

### Database Representation
- ONE row in `agents` table with `agent_type='chief-of-staff'`
- ONE config file: `agent.md` (not 6 separate files)
- `tools_config` JSONB stores which modules are active
- Future modules (Slack, Notion) = add to JSONB (no schema changes)

---

## 📝 AGENT CONFIG SYSTEM (SIMPLIFIED)

### What the PRD Said (WRONG)
6 separate Markdown files: `IDENTITY.md`, `SOUL.md`, `USER.md`, `AGENTS.md`, `TOOLS.md`, `BOOTSTRAP.md`

### What We Actually Build (RIGHT)
**ONE file: `agent.md`** with sections

```markdown
# Chief of Staff Agent Config

## Identity
Name: Chief of Staff
Role: Google Workspace automation
Avatar: /avatars/chief-of-staff.png

## Model & Runtime
Model: claude-opus-4-7
Runtime: managed
Max Budget: $5.00/run

## Personality
Tone: Professional but warm
Writing Style: Clear, concise, action-oriented
Never: Use jargon, apologize excessively

## User Context
Name: {{user.full_name}}
Email: {{user.email}}
Timezone: {{user.timezone}}

## Modules & Permissions
Enabled:
- Gmail (read, draft, send, label)
- Calendar (read, create, update)
- Drive (search, read files I created)
- Tasks (create, complete, list)

Auto-approve: Read ops, drafts, labels
Require approval: Send email, create events, delete

## Bootstrap (runs once)
1. Scan inbox (7 days)
2. Learn writing style from sent emails
3. Index calendar patterns
4. Create morning briefing workflow
```

### Why One File?
- Anthropic SDK reads ONE `config.json` (not 6 files)
- UI forms generate sections of ONE file
- Easier debugging, version control, export
- Compiler: `agent.md` → `config.json` for SDK

---

## 🔐 SECURITY RULES (NON-NEGOTIABLE)

### BYOK (Bring Your Own API Keys)
- **All Anthropic keys** encrypted in Supabase Vault (pgsodium)
- **Starter tier:** MeetOrbi-owned key (rate-limited 100 actions/mo)
- **Pro/Team/Enterprise:** User provides own key
- **Never log keys** — strip from errors before Sentry/Langfuse

### Google OAuth Tokens
- Encrypted in `auth_profiles` table (pgsodium)
- Auto-refresh on expiry (401 → refresh flow)
- **Request all 7 scopes upfront** (don't ask incrementally)

```
openid
email  
profile
https://www.googleapis.com/auth/gmail.modify
https://www.googleapis.com/auth/calendar
https://www.googleapis.com/auth/drive.file
https://www.googleapis.com/auth/tasks
```

### RLS (Row Level Security)
- **EVERY table** has RLS policies
- **EVERY query** uses `auth.uid()`
- **Service role** ONLY in `/app/api/*` routes
- **Never** expose service role to client

---

## 📁 FILE STRUCTURE

```
apps/meetorbi/
├── app/
│   ├── (auth)/              # login, signup, onboarding
│   ├── (app)/               # protected: chat, dashboard, settings
│   │   ├── chat/
│   │   ├── dashboard/
│   │   ├── agent-builder/   # config UI forms
│   │   └── settings/
│   └── api/
│       ├── agents/          # agent execution endpoints
│       ├── auth/            # OAuth callbacks
│       └── integrations/    # Google API wrappers
├── components/
│   ├── ui/                  # Shadcn components
│   ├── chat/
│   ├── dashboard/
│   └── agent-builder/
├── lib/
│   ├── supabase/            # client + server helpers
│   ├── agents/              # Chief of Staff + modules
│   │   ├── compiler.ts      # agent.md → config.json
│   │   ├── chief-of-staff.ts
│   │   └── modules/
│   │       ├── inbox.ts
│   │       ├── calendar.ts
│   │       ├── drive.ts
│   │       └── tasks.ts
│   ├── integrations/
│   │   └── google/
│   │       ├── gmail.ts
│   │       ├── calendar.ts
│   │       ├── drive.ts
│   │       └── tasks.ts
│   ├── byok/                # API key vault
│   └── utils.ts
└── types/                   # TypeScript types
```

---

## 💰 PRICING TIERS

| Tier | Price | Limits | Runtime |
|------|-------|--------|---------|
| **Starter** | Free | 1 agent, 100 actions/mo, MeetOrbi key | Self-hosted SDK |
| **Pro** | $29/mo | Unlimited actions, BYOK, all modules | Managed Agents |
| **Team** | $99/mo | 5 seats, shared workspace, BYOK | Managed Agents |
| **Enterprise** | Custom | Unlimited seats, SSO, audit logs | Managed + OpenClaw |

---

## 🎨 UX MODES (all 3 built in v1)

**Mode A — Chat-first (default)**
- Big input at `/chat`
- Natural language commands
- Action chips: "✓ Read 12 emails", "✓ Scheduled meeting"

**Mode B — Dashboard-first**
- Morning briefing card
- 4 module cards: Inbox / Calendar / Drive / Tasks
- "Attention needed" queue

**Mode C — Workflow-builder**
- React Flow canvas
- Drag-and-drop nodes (n8n-style)
- Wire automations: "8am → Read inbox → Draft replies → Email summary"

**Toggle:** Top-right dropdown, saved to `profiles.ux_mode`

---

## 📋 34-STEP BUILD PLAN (from build_MO.md)

### PHASE 1 — Foundation (Days 1-3)
1. Init Next.js 14 at `apps/meetorbi/`
2. Install deps + configure Tailwind + fonts
3. Supabase project setup
4. Run `supabase_schema.sql`
5. Enable Supabase Auth (Google OAuth, all 7 scopes)
6. Build auth pages: `/signup`, `/login`, `/onboarding`

### PHASE 2 — Agent Runtime Core (Days 4-6)
7. Agent config compiler UI (forms → `agent.md`)
8. Compiler logic: `agent.md` → `config.json`
9. Wire Claude Agent SDK in `lib/agents/`
10. Agent execution API: `POST /api/agents/:id/run` (SSE streaming)
11. BYOK vault: encrypt/decrypt Anthropic keys
12. Supabase Realtime for live agent status

### PHASE 3 — Google Workspace Integration (Days 7-10)
13. Google OAuth flow (all scopes upfront)
14. Encrypted token storage in `auth_profiles`
15. googleapis SDK wrapper in `lib/integrations/google/`
16. **Inbox Module** (Gmail read/draft/send/label)
17. **Calendar Module** (read/create/update/free-busy)
18. **Drive Module** (search/read/create folders)
19. **Tasks Module** (list/create/complete)

### PHASE 4 — Chief of Staff + UX (Days 11-16)
20. LangGraph: Chief of Staff orchestrator + 4 modules
21. Morning briefing generator (6am cron via Vercel Cron)
22. Chat UI (Mode A) with assistant-ui
23. Dashboard UI (Mode B) with module cards
24. Workflow UI (Mode C) with React Flow
25. Mode toggle (persistent in profile)
26. Approval queue UI
27. Memory layer (writing style, contacts)

### PHASE 5 — Polish + Launch (Days 17-21)
28. Landing page
29. Stripe integration (Pro + Team checkout)
30. Observability (Langfuse for traces)
31. Cost caps (per-user circuit breakers)
32. Production deploy (Vercel Pro + custom domain)
33. Beta users (3 from MIT/Stanford network)

---

## 🚨 CODING RULES (ENFORCED)

### TypeScript
- **Never `any`** — use `unknown` + type guards
- **Explicit return types** on all functions
- **Zod validation** for all external inputs
- **No `@ts-ignore`** — fix the type

### React / Next.js
- **Server Components by default** — add `"use client"` only when needed
- **Server Actions** for mutations (not API routes)
- **API routes** only for: webhooks, SSE, file uploads, OAuth callbacks
- **Never fetch in useEffect** if Server Component works
- **Suspense boundaries** around async components

### Supabase
- **RLS on every query** — never bypass with service role in client
- **Service role only in** `/app/api/*` and Server Actions
- **Always use** `createClient()` helpers from `lib/supabase/`
- **Realtime subscriptions** for agent status (not polling)

### Security
- **Never log:** API keys, OAuth tokens, encrypted payloads, user emails
- **Decrypt only server-side** — BYOK vault, Google tokens
- **Strip sensitive fields** from errors
- **Rate limit** every public API route
- **Validate server-side** with Zod (even if client validates)
- **Audit log** every: auth event, key rotation, destructive agent action

### Styling
- **Shadcn/ui first** — if not available, build custom
- **Tailwind utility classes** inline (no global CSS except globals.css)
- **Dark mode** via class on `<html>`
- **No arbitrary values** unless necessary (`text-sm` not `text-[13px]`)

---

## 🎯 CURSOR PROMPT TEMPLATE

Every prompt should follow this structure:

```
READ THESE FILES FIRST:
✓ CURSOR_MASTER_INSTRUCTIONS.md
✓ build_MO.md (Step X context)
✓ cursorrules.md
✓ [Any feature-specific files from the matrix above]

---

CONTEXT: [what you just finished]

TASK: [the ONE thing to build next - must match a step in build_MO.md]

CONSTRAINTS:
  - Stack: Next.js 14 + Supabase + Claude Agent SDK + LangGraph
  - Shadcn/ui components only
  - Supabase RLS on every table query
  - BYOK: never log/expose API keys
  - Google scopes: all 7 upfront (gmail.modify, calendar, drive.file, tasks)
  - Agent config: ONE file (agent.md), not 6
  - User sees: "Chief of Staff" (one agent)
  - Behind scenes: LangGraph orchestrator + 4 modules
  - Follow ALL rules from cursorrules.md
  - Reference security_guardrails.md for approval gates
  - Use design.md patterns for UI components

FILES TO CREATE/EDIT: [exact paths]

ACCEPTANCE: [how you'll know it works]

BUILD LOG UPDATE: [what to write in MO_Build_Log.md]
```

### Example Phase 1 Prompt

```
READ THESE FILES FIRST:
✓ CURSOR_MASTER_INSTRUCTIONS.md
✓ build_MO.md (Phase 1, Steps 1-6)
✓ cursorrules.md
✓ supabase_schema.sql
✓ design.md

---

CONTEXT: Fresh MeetOrbi project, all planning docs verified

TASK: Execute Phase 1, Steps 1-6 (Foundation setup)

STEPS:
1. Create Next.js 14 app at apps/meetorbi/
2. Install dependencies (see build_MO.md Phase 1)
3. Configure Tailwind + fonts (Plus Jakarta Sans, Inter, Playfair)
4. Create Supabase project, add env vars
5. Run supabase_schema.sql
6. Enable Google OAuth with all 7 scopes
7. Build /signup, /login, /onboarding pages

CONSTRAINTS:
  - Follow cursorrules.md naming conventions
  - Use design.md component patterns
  - Match supabase_schema.sql table structure exactly
  - Google OAuth must request all 7 scopes upfront (see CURSOR_MASTER_INSTRUCTIONS.md)

FILES TO CREATE:
- apps/meetorbi/package.json
- apps/meetorbi/tailwind.config.ts
- apps/meetorbi/app/layout.tsx
- apps/meetorbi/app/(auth)/signup/page.tsx
- apps/meetorbi/app/(auth)/login/page.tsx
- apps/meetorbi/app/(auth)/onboarding/page.tsx
- apps/meetorbi/lib/supabase/client.ts
- apps/meetorbi/lib/supabase/server.ts
- apps/meetorbi/.env.local.example

ACCEPTANCE:
- pnpm dev runs without errors
- /signup page renders with Google OAuth button
- Google OAuth dialog shows all 7 scopes
- After OAuth, user lands on /onboarding
- Supabase profiles table has new row with user data
- All files follow cursorrules.md standards

BUILD LOG UPDATE:
## Phase 1 Complete — Foundation (Steps 1-6)
**Date:** [timestamp]
**Files changed:** [list all created files]
**Tests passed:** Auth flow works end-to-end
**Deployed to:** Local dev (http://localhost:3000)
**Next step:** Phase 2, Step 7 (Agent config compiler UI)
```

---

## 🚫 NEVER DO

- Use localStorage/sessionStorage (we have Supabase)
- Hardcode emails, API keys, URLs
- Run destructive agent actions without approval
- Call Google APIs from client components
- Suggest Firebase, MongoDB, OpenAI, non-Claude LLMs
- Build features not in build_MO.md v1 scope
- Use CSS-in-JS or CSS modules (Tailwind only)
- Use class components (functions + hooks only)

---

## ✅ ALWAYS DO

- Type every function signature
- Validate external inputs with Zod
- Use Shadcn/ui components first
- Add RLS policies for new tables
- Write server-side for tokens/keys
- Update `MO_Build_Log.md` after each step
- Refer to agent as "Chief of Staff" (not "Orbi" unless user named it)
- Use sentence case for UI copy (not Title Case)

---

## 📋 PRE-BUILD FILE VERIFICATION CHECKLIST

**Before executing ANY build prompt, verify these files exist in your repo:**

### ✅ Required Files (Must Exist)
```
[ ] build_MO.md
[ ] cursorrules.md
[ ] supabase_schema.sql
[ ] CURSOR_MASTER_INSTRUCTIONS.md (this file)
```

### ✅ Highly Recommended Files
```
[ ] START_HERE.md
[ ] security_guardrails.md
[ ] design.md
[ ] cursor_prompts_1_to_5.md
[ ] cursor_skills.md
```

### ✅ Phase-Specific Files (needed later)
```
[ ] deployment_commands.md (Phase 5)
[ ] stripe_integration_guide.md (Phase 5)
[ ] landing_page_spec.md (Phase 5)
```

### ⚠️ If Files Are Missing

**If build_MO.md or cursorrules.md are missing:**
- STOP immediately
- Do NOT proceed with build
- Request user to provide missing files

**If design.md or security_guardrails.md are missing:**
- Proceed with caution
- Use defaults from CURSOR_MASTER_INSTRUCTIONS.md
- Flag missing files in build log

---

## 📖 REFERENCE FILES (READ BEFORE BUILDING)

### ALWAYS Check These Files First

**Core Architecture & Build Plan:**
- **build_MO.md** → 34-step plan, architectural decisions, agent architecture, pricing tiers
- **START_HERE.md** → Project overview, initial context, getting started guide

**Code Standards & Conventions:**
- **cursorrules.md** → Naming conventions, commit rules, TypeScript rules, React patterns
- **cursor_prompts_1_to_5.md** → Pre-built prompts for each phase (1-5)
- **cursor_skills.md** → Cursor-specific workflows and best practices

**Database & Infrastructure:**
- **supabase_schema.sql** → Complete schema, RLS policies, tables, functions, triggers
- **deployment_commands.md** → Vercel deployment, env vars, production setup

**Security & Guardrails:**
- **security_guardrails.md** → Approval gates, never-do rules, BYOK enforcement, rate limits

**UI/UX & Design:**
- **design.md** → UI/UX patterns, component library, design tokens, layout systems
- **landing_page_spec.md** → Landing page structure, copy, CTAs, pricing display

**Integrations:**
- **stripe_integration_guide.md** → Stripe setup, webhook handling, subscription logic

### File Priority Matrix

**Before writing ANY code, read:**
1. **CURSOR_MASTER_INSTRUCTIONS.md** (this file) — overrides everything
2. **build_MO.md** — understand the step you're on
3. **cursorrules.md** — know the coding standards

**Before building specific features, read:**

| Feature | Required Files |
|---------|---------------|
| Auth flow | cursorrules.md, supabase_schema.sql, security_guardrails.md |
| Agent config UI | build_MO.md, design.md, cursor_skills.md |
| Google OAuth | security_guardrails.md, supabase_schema.sql |
| Agent execution | build_MO.md, security_guardrails.md, cursorrules.md |
| Landing page | landing_page_spec.md, design.md |
| Stripe checkout | stripe_integration_guide.md, supabase_schema.sql |
| Deployment | deployment_commands.md, cursorrules.md |

**When stuck or need examples:**
- cursor_prompts_1_to_5.md → Phase-specific prompt templates
- cursor_skills.md → Cursor Composer patterns

---

## 🎯 SUCCESS CRITERIA FOR v1 LAUNCH

- [ ] Google sign-in < 30sec (all 7 scopes granted)
- [ ] Chief of Staff onboarding < 2min
- [ ] Morning briefing arrives at 6am next day
- [ ] "Triage my inbox" → 10+ drafts in < 2min
- [ ] "Schedule meeting with Sarah" → proposes times, drafts invite
- [ ] "Find Q3 deck" → pulls from Drive, opens preview
- [ ] "Turn email into task" → creates Google Task
- [ ] All 3 UX modes functional (Chat / Dashboard / Workflow)
- [ ] Stripe checkout works (Pro + Team)
- [ ] Landing page live
- [ ] 10 paying customers in 30 days
- [ ] Cost per Pro user < $4/mo (we keep $25 margin)

---

**Strategy First. Prompt Second. Results Always.**
