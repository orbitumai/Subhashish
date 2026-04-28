const hostCards = [
  {
    iconBg: 'rgba(196,98,45,.15)', icon: '⚡',
    name: 'n8n', category: 'Workflow Automation',
    desc: 'Self-hosted n8n instance running as my primary AI orchestration and automation engine. All workflows — AI pipelines, webhook processors, CRM integrations — run here.',
    details: [
      'Exposed via subdomain through Nginx proxy with SSL',
      'Persistent volume for workflow data and credentials',
      'Webhook endpoints publicly accessible for triggers',
    ],
  },
  {
    iconBg: 'rgba(61,75,92,.2)', icon: '🔀',
    name: 'Nginx Proxy Manager', category: 'Reverse Proxy + SSL',
    desc: 'The traffic controller for the entire stack. Routes incoming requests to the right container, handles SSL certificates via Let\'s Encrypt automatically, and manages access rules.',
    details: [
      'Auto-renewing SSL certificates per domain',
      'GUI-based proxy host management — no config files',
      'Basic auth protection for sensitive internal tools',
    ],
  },
  {
    iconBg: 'rgba(45,106,79,.15)', icon: '🐳',
    name: 'Docker Compose', category: 'Container Orchestration',
    desc: 'Every application is defined in a docker-compose.yml file. Start, stop, update, and rollback any service independently. Containers share an internal network but are fully isolated from each other.',
    details: [
      'Named networks for inter-container communication',
      'Environment variables managed via .env files',
      'Volumes for data persistence across restarts',
    ],
  },
  {
    iconBg: 'rgba(212,168,67,.1)', icon: '🔧',
    name: 'Custom AI Backends', category: 'Agent & Webhook Services',
    desc: 'Project-specific services — webhook receivers, AI agent backends, MCP servers, and internal API proxies — all deployed as lightweight Docker containers alongside the main stack.',
    details: [
      'Deployed on-demand per project requirement',
      'Each gets its own subdomain via Nginx routing',
      'Logs accessible via Docker CLI for debugging',
    ],
  },
]

const stackRows = [
  { label: 'Internet',        cls: 's-internet', content: '🌐  DNS → Domain / Subdomain (app.orbitumai.com, n8n.orbitumai.com...)' },
  { label: 'Reverse Proxy',   cls: 's-proxy',    content: '🔀  Nginx Proxy Manager — SSL termination, subdomain routing, access control' },
  { label: 'Container Layer', cls: 's-docker',   content: '🐳  Docker Compose — each app in its own isolated container on internal network' },
  { label: 'Applications',    cls: 's-app',      content: '📦  n8n · Custom APIs · Internal tools · Webhook receivers · Agent backends' },
]

export default function InfrastructurePanel() {
  return (
    <>
      <div className="panel-eyebrow">Self-Hosted Infrastructure</div>
      <div className="panel-title">How I Host</div>
      <div className="panel-sub">Multiple apps running on self-hosted Docker with reverse proxy</div>
      <div className="accent-line" />

      <div className="hosting-intro">
        I run my own hosting environment using a VPS with Docker Compose and a Nginx reverse proxy. Every application gets its own container, isolated networking, and a clean subdomain — managed without touching traditional code. This is how I run n8n, internal tools, and project-specific services.
      </div>

      <div className="stack-diagram">
        <div className="stack-title">Infrastructure Stack</div>
        {stackRows.map(({ label, cls, content }, i) => (
          <div key={label}>
            <div className="stack-row">
              <div className="stack-layer-label">{label}</div>
              <div className={`stack-layer-box ${cls}`}>{content}</div>
            </div>
            {i < stackRows.length - 1 && (
              <div className="stack-row">
                <div className="stack-arrow" style={{ paddingLeft: '65px', fontSize: '12px' }}>↓</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="hosting-grid">
        {hostCards.map(({ iconBg, icon, name, category, desc, details }) => (
          <div key={name} className="host-card">
            <div className="host-card-header">
              <div className="host-icon" style={{ background: iconBg }}>{icon}</div>
              <div>
                <div className="host-name">{name}</div>
                <div className="host-category">{category}</div>
              </div>
            </div>
            <div className="host-desc">{desc}</div>
            <div className="host-details">
              {details.map(d => (
                <div key={d} className="host-detail">
                  <span className="host-detail-dot" />{d}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: 'rgba(45,106,79,.07)', border: '1px solid rgba(45,106,79,.2)', borderRadius: 'var(--r-md)', padding: '16px 20px', fontFamily: 'var(--f-body)', fontSize: '13px', color: 'rgba(247,245,242,.6)', lineHeight: '1.65' }}>
        <strong style={{ color: '#6DCF8A', fontFamily: 'var(--f-display)', fontSize: '12px', fontWeight: 700, letterSpacing: '1px' }}>WHY SELF-HOSTED:</strong>&nbsp; Full control over data, no per-seat SaaS costs at scale, ability to run custom MCP servers and internal tools that can't live in the cloud, and the freedom to configure exactly how AI agents communicate across services.
      </div>
    </>
  )
}
