const liCards = [
  {
    icon: '🎙️', title: 'AI Voice Agents',
    body: 'Built inbound and outbound calling agents using Retell AI + Telnyx — handling real conversations, sentiment analysis, and calendar booking automatically.',
  },
  {
    icon: '🏗️', title: 'No-Code Architecture',
    body: 'The entire platform was built without traditional development — proving that prompt engineering and no-code tools can produce enterprise-grade AI products.',
  },
  {
    icon: '🚀', title: 'Multi-Tenant SaaS',
    body: 'Full org management, phone number purchasing, campaign analytics, CRM integrations — a complete AI calling solution built for marketing agencies and enterprises.',
  },
]

export default function LinkedInPanel() {
  return (
    <>
      <div className="panel-eyebrow">Published Work</div>
      <div className="panel-title">LinkedIn Post</div>
      <div className="panel-sub">AILeadCalling — featured on LinkedIn</div>
      <div className="accent-line" />

      <div className="li-hero">
        <div className="li-icon">💼</div>
        <div>
          <div className="li-eyebrow">LinkedIn · AI Voice Agent</div>
          <div className="li-title">AILeadCalling: An AI-Powered Voice Agent Platform</div>
          <div className="li-desc">
            I published a post walking through how I built an AI voice agent platform from scratch — no traditional coding, just prompt engineering, n8n, and smart integrations. It covers the architecture, the agent orchestration system, and the vision behind automating lead conversations at scale.
          </div>
          <a
            className="li-btn"
            href="https://www.linkedin.com/posts/shuv_aileadcalling-an-ai-powered-voice-agent-activity-7431850032406089728-7pyt"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Post on LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="li-cards">
        {liCards.map(({ icon, title, body }) => (
          <div key={title} className="li-card">
            <div className="li-card-icon">{icon}</div>
            <div className="li-card-title">{title}</div>
            <div className="li-card-body">{body}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '32px', paddingTop: '28px', borderTop: '1px solid rgba(247,245,242,.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'var(--f-display)', fontSize: '13px', fontWeight: 700, color: 'var(--warm-ember)' }}>OrbitumAI</div>
        <a href="https://orbitumai.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--f-body)', fontSize: '12px', color: 'rgba(247,245,242,.3)', textDecoration: 'none', transition: 'color .15s' }}>
          orbitumai.com ↗
        </a>
        <div style={{ fontFamily: 'var(--f-accent)', fontStyle: 'italic', fontSize: '12px', color: 'rgba(212,168,67,.5)' }}>AI Consultant · Dallas, TX</div>
      </div>
    </>
  )
}
