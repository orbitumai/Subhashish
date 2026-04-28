export default function ProductBuildsPanel() {
  return (
    <>
      <div className="panel-eyebrow">Product Builds</div>
      <div className="panel-title">What I've Built</div>
      <div className="panel-sub">Two production AI products — summarized architecture</div>
      <div className="accent-line" />

      <div className="arch-grid">

        {/* AILeadCalling */}
        <div className="arch-card">
          <div className="arch-card-header">
            <div className="arch-card-tag">Product 01 · Voice AI</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
              <div className="arch-card-title">AILeadCalling</div>
              <a href="https://pitchdeck.aileadcalling.com" target="_blank" rel="noopener noreferrer" className="visit-pill">Visit Site ↗</a>
            </div>
            <div className="arch-card-sub">Multi-tenant AI Voice Lead-Generation Platform</div>
          </div>
          <div className="arch-card-body">
            <div style={{ fontFamily: 'var(--f-body)', fontSize: '13px', color: 'rgba(247,245,242,.6)', lineHeight: '1.7', marginBottom: '4px' }}>
              Automates outbound and inbound calling with AI voice agents. Businesses purchase phone numbers, run campaigns, and manage leads through a web dashboard — all without human agents.
            </div>
            {[
              { bg: 'rgba(196,98,45,.15)', icon: '🎨', name: 'Frontend', desc: 'Next.js 14 · App Router · Tailwind · ShadCN UI · Real-time analytics dashboard' },
              { bg: 'rgba(61,75,92,.2)',   icon: '⚡', name: 'API / Backend', desc: 'Next.js API Routes — webhook handlers for Telnyx (telephony) and Retell AI (voice events), campaign management, SMS orchestration' },
              { bg: 'rgba(212,168,67,.1)', icon: '🤖', name: 'AI Agent Orchestration', desc: '5 agents: Anna (inbound voice), Monica (outbound voice), Sophie (SMS), plus text assistants. Sentiment-based routing via Claude API. Cal.com for booking.' },
              { bg: 'rgba(45,106,79,.15)', icon: '🗄️', name: 'Data Layer', desc: 'Supabase PostgreSQL · Row-Level Security · Multi-tenant isolation · pgvector for future AI features' },
            ].map(({ bg, icon, name, desc }) => (
              <div key={name} className="arch-layer">
                <div className="arch-layer-icon" style={{ background: bg }}>{icon}</div>
                <div>
                  <div className="arch-layer-name">{name}</div>
                  <div className="arch-layer-desc">{desc}</div>
                </div>
              </div>
            ))}
            <div className="arch-flow">
              <div className="arch-flow-title">Call Flow (Inbound)</div>
              {[
                'Caller dials Telnyx number → webhook fires',
                'Next.js looks up phone → finds agent → registers with Retell AI',
                'Retell processes: Deepgram STT → GPT-4 LLM → ElevenLabs TTS',
                'Claude analyzes sentiment → routes or books via Cal.com',
              ].map((text, i) => (
                <div key={i}>
                  <div className="flow-step">
                    <div className="flow-step-num">{i + 1}</div>
                    <div className="flow-step-text">{text}</div>
                  </div>
                  {i < 3 && <div className="flow-arrow">↓</div>}
                </div>
              ))}
            </div>
            <div className="tech-pills">
              {['Next.js 14','Supabase','Retell AI','Telnyx','Claude API','Cal.com','ElevenLabs','Vercel'].map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* OrbitumAI */}
        <div className="arch-card">
          <div className="arch-card-header">
            <div className="arch-card-tag">Product 02 · AI Strategy Platform</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
              <div className="arch-card-title">OrbitumAI</div>
              <a href="https://orbitumai.com" target="_blank" rel="noopener noreferrer" className="visit-pill">Visit Site ↗</a>
            </div>
            <div className="arch-card-sub">The First AI Strategy Platform Built on Agent Orchestration</div>
          </div>
          <div className="arch-card-body">
            <div style={{ fontFamily: 'var(--f-body)', fontSize: '13px', color: 'rgba(247,245,242,.6)', lineHeight: '1.7', marginBottom: '4px' }}>
              Lead with AI strategy. Everything else is noise. OrbitumAI deploys 30+ specialized agents — each built for one job — working in concert to turn AI confusion into a clear, structured first move. Strategy First. Implementation Second. Results Always.
            </div>
            {[
              { bg: 'rgba(196,98,45,.15)', icon: '🤖', name: 'Agent Orchestration Layer', desc: '30+ specialized AI agents coordinated in real time — each reads the user, carries context forward, and holds itself accountable across every session' },
              { bg: 'rgba(61,75,92,.2)',   icon: '◈',  name: 'Four Interconnected Products', desc: 'ORBIT Diagnostic · Strategy Session · Leader Session · OrbitPredict — one unbroken strategic arc from diagnosis to execution' },
              { bg: 'rgba(212,168,67,.1)', icon: '⚙️', name: 'ORBIT™ Methodology Engine', desc: 'Every session powered by the ORBIT framework — the methodology behind 51 countries of transformation, now driving 30+ AI agents in concert' },
              { bg: 'rgba(45,106,79,.15)', icon: '🗄️', name: 'Platform Infrastructure', desc: 'Next.js · Supabase PostgreSQL · Claude API (Sonnet + Haiku) · Upstash Redis rate limiting · Vercel edge deployment' },
            ].map(({ bg, icon, name, desc }) => (
              <div key={name} className="arch-layer">
                <div className="arch-layer-icon" style={{ background: bg }}>{icon}</div>
                <div>
                  <div className="arch-layer-name">{name}</div>
                  <div className="arch-layer-desc">{desc}</div>
                </div>
              </div>
            ))}
            <div className="arch-flow">
              <div className="arch-flow-title">ORBIT Session Flow</div>
              {[
                'User starts ORBIT Session → agents read context in real time',
                '30+ agents coordinate — one questions, one judges depth, one carries context forward',
                'ORBIT Diagnostic generated → custom AI brief with confidence-scored predictions',
                'Strategy Document + AI Roadmap delivered — ready for execution',
              ].map((text, i) => (
                <div key={i}>
                  <div className="flow-step">
                    <div className="flow-step-num">{i + 1}</div>
                    <div className="flow-step-text">{text}</div>
                  </div>
                  {i < 3 && <div className="flow-arrow">↓</div>}
                </div>
              ))}
            </div>
            <div className="tech-pills">
              {['Next.js','Claude API','Supabase','Upstash Redis','Vercel','TypeScript','ORBIT™'].map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
