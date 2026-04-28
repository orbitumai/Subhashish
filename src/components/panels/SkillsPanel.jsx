const skillCards = [
  {
    tag: 'Core Competency', title: 'AI Models & Providers',
    pills: [
      { label: 'Claude (Anthropic)', highlight: true },
      { label: 'OpenAI GPT-4o', highlight: true },
      { label: 'Azure OpenAI' }, { label: 'DeepSeek' }, { label: 'Grok (xAI)' },
      { label: 'Ollama' }, { label: 'Deep Infra' }, { label: 'Kimi K2' },
      { label: 'HeyGen' }, { label: 'ElevenLabs' }, { label: 'Ideogram' },
    ],
  },
  {
    tag: 'Frameworks & Patterns', title: 'AI Frameworks',
    pills: [
      { label: 'ORBIT™ (Proprietary)', highlight: true },
      { label: 'PITCH-XI™ (Proprietary)', highlight: true },
      { label: 'RAG Architecture' }, { label: 'ReAct Agents' }, { label: 'Chain-of-Thought' },
      { label: 'Prompt Chaining' }, { label: 'Multi-Agent Systems' }, { label: 'MCP Protocol' },
      { label: 'LangChain' }, { label: 'Agentic AI' }, { label: 'NIST AI RMF' }, { label: 'ISO/IEC 42001' },
    ],
  },
  {
    tag: 'No-Code / Low-Code', title: 'Automation & Orchestration',
    pills: [
      { label: 'n8n (Self-Hosted)', highlight: true },
      { label: 'Make (Integromat)' }, { label: 'Zapier' }, { label: 'Airtable' },
      { label: 'Buffer' }, { label: 'Retell AI' }, { label: 'Telnyx' },
      { label: 'Cal.com' }, { label: 'Tavily' }, { label: 'Pexels API' },
    ],
  },
  {
    tag: 'Product Development', title: 'Tech Stack',
    pills: [
      { label: 'Next.js 14', highlight: true }, { label: 'Supabase', highlight: true },
      { label: 'TypeScript' }, { label: 'Tailwind CSS' }, { label: 'Vercel' },
      { label: 'Stripe' }, { label: 'Upstash Redis' }, { label: 'pgvector' },
      { label: 'ShadCN UI' }, { label: 'React' },
    ],
  },
  {
    tag: 'Self-Hosted Infrastructure', title: 'DevOps & Hosting',
    pills: [
      { label: 'Docker', highlight: true }, { label: 'Portainer', highlight: true },
      { label: 'Nginx Proxy Manager' }, { label: 'Hostinger VPS' },
      { label: 'Docker Compose' }, { label: 'SSL/TLS' }, { label: 'Cloudflare' }, { label: 'Railway' },
    ],
  },
  {
    tag: 'AI-Assisted Development', title: 'Dev Tools & IDEs',
    pills: [
      { label: 'Kiro (AWS)', highlight: true }, { label: 'Antigravity IDE', highlight: true },
      { label: 'Cursor' }, { label: 'Claude Desktop' }, { label: 'n8n-MCP' },
      { label: 'Prompt Engineering' }, { label: 'Claude.ai' },
    ],
  },
  {
    tag: '25+ Years Experience', title: 'Enterprise & Program Management',
    pills: [
      { label: 'Program Management', highlight: true }, { label: 'Digital Transformation', highlight: true },
      { label: 'Stakeholder Management' }, { label: 'Change Management' }, { label: 'Vendor Management' },
      { label: 'M&A Integration' }, { label: 'Global Payroll (51 Countries)' },
      { label: 'Strategic Initiatives' }, { label: 'Risk Management' }, { label: 'SAFe Agile' }, { label: 'PMP Certified' },
    ],
  },
  {
    tag: 'Production AI', title: 'Evaluation & Observability',
    pills: [
      { label: 'DeepEval', highlight: true }, { label: 'Langfuse', highlight: true },
      { label: 'LMArena' }, { label: 'Artificial Analysis' }, { label: 'Galileo AI' },
      { label: 'Arize AI' }, { label: 'Promptfoo' }, { label: 'W&B Weave' },
    ],
  },
]

const certs = [
  { name: 'UT Austin AI/ML', detail: 'Post Graduate Program · 2025' },
  { name: 'PMP Certified', detail: 'Project Management Professional' },
  { name: 'SAFe Agilist', detail: 'Scaled Agile Framework' },
  { name: 'Stanford', detail: 'Building Business Models' },
  { name: 'Udacity', detail: 'Product Management Nano Degree' },
  { name: 'NIIT', detail: 'Post Grad Diploma · Software Engineering' },
]

export default function SkillsPanel() {
  return (
    <>
      <div className="panel-eyebrow">Subhashish Chowdhury</div>
      <div className="panel-title">Skills & Expertise</div>
      <div className="panel-sub">25+ years enterprise + AI consulting + product building</div>
      <div className="accent-line" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {skillCards.map(({ tag, title, pills }) => (
          <div key={title} className="arch-card">
            <div className="arch-card-header">
              <div className="arch-card-tag">{tag}</div>
              <div className="arch-card-title">{title}</div>
            </div>
            <div className="arch-card-body" style={{ gap: '8px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {pills.map(({ label, highlight }) => (
                  <span
                    key={label}
                    className="tech-pill"
                    style={highlight ? { background: 'rgba(196,98,45,.15)', borderColor: 'rgba(196,98,45,.35)', color: 'var(--founder-white)' } : {}}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div style={{ marginTop: '24px', background: 'rgba(212,168,67,.06)', border: '1px solid rgba(212,168,67,.2)', borderRadius: 'var(--r-lg)', padding: '24px 28px' }}>
        <div style={{ fontFamily: 'var(--f-display)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--strategy-gold)', marginBottom: '14px' }}>
          Certifications & Education
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          {certs.map(({ name, detail }) => (
            <div key={name} style={{ background: 'rgba(13,13,13,.5)', border: '1px solid rgba(212,168,67,.15)', borderRadius: 'var(--r-md)', padding: '12px 16px' }}>
              <div style={{ fontFamily: 'var(--f-display)', fontSize: '12px', fontWeight: 700, color: 'var(--founder-white)', marginBottom: '3px' }}>{name}</div>
              <div style={{ fontFamily: 'var(--f-body)', fontSize: '11px', color: 'rgba(247,245,242,.4)' }}>{detail}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ fontFamily: 'var(--f-display)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(247,245,242,.3)' }}>LinkedIn Top Skills:</div>
        {['AI Product Development', 'AI Strategy', 'Agentic AI Apps'].map(s => (
          <span key={s} className="tech-pill" style={{ background: 'rgba(196,98,45,.15)', borderColor: 'rgba(196,98,45,.35)', color: 'var(--founder-white)' }}>{s}</span>
        ))}
      </div>
    </>
  )
}
