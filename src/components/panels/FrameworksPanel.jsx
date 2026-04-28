const frameworks = [
  {
    num: 'Framework 01', name: 'ORBIT™', status: 'live',
    tagline: 'The Business AI Operating Framework',
    desc: 'A five-step system that connects every AI initiative to a measurable business outcome. Replaces trial-and-error prompting with a repeatable strategic process.',
    steps: [
      { key: 'O — Outcome:', val: 'Define the exact business result required' },
      { key: 'R — Revenue Lever:', val: 'Acquire, Retain, or Expand?' },
      { key: 'B — Bottleneck:', val: 'The single constraint blocking the outcome' },
      { key: 'I — Instruct:', val: 'AI directive written only after O, R, B are clear' },
      { key: 'T — Track:', val: 'Metrics and review cadence defined upfront' },
    ],
  },
  {
    num: 'Framework 02', name: 'PITCH-XI™', status: 'live',
    tagline: 'The Structured Prompt Framework',
    desc: 'A seven-layer prompt system that delivers board-ready AI outputs on the first attempt. Every layer removes a specific source of prompt failure.',
    steps: [
      { key: 'P — Persona:', val: 'Assigns AI a specific expert role' },
      { key: 'I — Instruction:', val: 'The precise task with a defined deliverable' },
      { key: 'T — Task Context:', val: 'Real business environment and constraints' },
      { key: 'C — Constraints:', val: 'What not to do; format guardrails' },
      { key: 'H — Hook:', val: 'Quality calibration reference point' },
      { key: 'XI — Execution + Intelligence:', val: 'Logic path + business validation' },
    ],
  },
  {
    num: 'Framework 03', name: 'FORCE™', status: 'dev',
    tagline: 'The Workforce Transformation Methodology',
    desc: 'An enterprise methodology that bridges the gap between transformation plan and transformation reality. Built for Heads of Strategy at mid-market and enterprise organizations.',
    steps: [
      { key: 'F — Future State:', val: 'Define the AI-era workforce required' },
      { key: 'O — Organization Shape:', val: 'Map structure vs. future requirement' },
      { key: 'R — Readiness Gap:', val: 'Diagnose the delta' },
      { key: 'C — Capability Build:', val: 'Design the transformation program' },
      { key: 'E — Execution Plan:', val: 'Deploy at enterprise scale' },
    ],
    note: 'Target: Head of Strategy / Transformation · Available later in 2025',
  },
  {
    num: 'Framework 04', name: 'BUILD™', status: 'dev',
    tagline: 'The No-Code AI Product Builder',
    desc: 'A step-by-step product creation methodology for non-technical founders. Takes any idea from concept to first revenue in 3–4 weeks using only no-code tools and AI assistants.',
    steps: [
      { key: 'B — Blueprint:', val: 'Validate the idea before building' },
      { key: 'U — Understand:', val: 'Define user and workflow requirements' },
      { key: 'I — Implement:', val: 'Build with no-code tools and prompt engineering' },
      { key: 'L — Launch:', val: 'Ship fast to real users' },
      { key: 'D — Drive Results:', val: 'Iterate to revenue' },
    ],
    note: 'Target: Non-technical founders & SMB owners · Available later in 2025',
  },
]

export default function FrameworksPanel() {
  return (
    <>
      <div className="panel-eyebrow">OrbitumAI IP</div>
      <div className="panel-title">Frameworks</div>
      <div className="panel-sub">Four proprietary methodologies for structured AI adoption</div>
      <div className="accent-line" />

      <div className="fw-grid">
        {frameworks.map((fw) => (
          <div key={fw.name} className={`fw-card ${fw.status}`}>
            <div className="fw-card-top">
              <div>
                <div className="fw-num">{fw.num}</div>
                <div className="fw-name">{fw.name}</div>
              </div>
              {fw.status === 'live' ? (
                <span className="status-pill pill-live"><span className="dot-live" />Live</span>
              ) : (
                <span className="status-pill pill-dev"><span className="dot-dev" />In Development</span>
              )}
            </div>
            <div className="fw-tagline">{fw.tagline}</div>
            <div className="fw-desc">{fw.desc}</div>
            <div className="fw-steps">
              {fw.steps.map((s) => (
                <div key={s.key} className="fw-step">
                  <span className="fw-step-dot" />
                  <span><strong>{s.key}</strong> {s.val}</span>
                </div>
              ))}
            </div>
            {fw.note && <div className="dev-note">{fw.note}</div>}
          </div>
        ))}
      </div>
    </>
  )
}
