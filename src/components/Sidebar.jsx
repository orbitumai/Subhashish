export default function Sidebar({ activePanel, onNavigate }) {
  const navItems = [
    { id: 'home',      icon: '⬡', label: 'Overview' },
    { id: 'frameworks',icon: '◈', label: 'Frameworks' },
    { id: 'arch',      icon: '◫', label: 'Product Builds' },
    { id: 'hosting',   icon: '◉', label: 'Infrastructure' },
    { id: 'skills',    icon: '◐', label: 'Skills' },
    { id: 'profile',   icon: '◑', label: 'Shuv Profile' },
  ]

  const resources = [
    { label: 'AWS Hosting Guide',  href: '/Subhashish/AWS_Hosting_Guide/index.html' },
    { label: 'Build App Guide',    href: '/Subhashish/Build%20App/index.html' },
    { label: 'LLM Hosting',        href: '/Subhashish/LLM%20Hosting/orbitumai_guide.html' },
    { label: 'OpenClaw Setup',     href: '/Subhashish/OpenClaw_Setup/index.html' },
    { label: 'Training Guide',     href: '/Subhashish/Training%20Guide%20to%20Build%20App/train_build_app/index.html' },
    { label: 'Claude Token Guide', href: '/Subhashish/Resources/index.html' },
  ]

  const resourceIcons = ['☁', '⬡', '◎', '◫', '◐', '◈']

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="name">OrbitumAI</div>
        <div className="tag">Subhashish Chowdhury</div>
      </div>

      <nav className="nav-group">
        <div className="nav-label">Navigation</div>
        {navItems.map(({ id, icon, label }) => (
          <button
            key={id}
            className={`nav-item${activePanel === id ? ' active' : ''}`}
            onClick={() => onNavigate(id)}
          >
            <span className="icon">{icon}</span> {label}
          </button>
        ))}

        <div className="nav-divider" />
        <button
          className={`nav-item${activePanel === 'linkedin' ? ' active' : ''}`}
          onClick={() => onNavigate('linkedin')}
        >
          <span className="icon">◈</span> LinkedIn Post
        </button>

        <div className="nav-divider" />
        <div className="nav-label">Resources</div>
        {resources.map(({ label, href }, i) => (
          <a
            key={label}
            className="nav-item"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">{resourceIcons[i]}</span> {label}
          </a>
        ))}
      </nav>

      <div className="sidebar-links">
        <a className="ext-link" href="https://orbitumai.com" target="_blank" rel="noopener noreferrer">
          <span className="dot" />orbitumai.com ↗
        </a>
        <a className="ext-link" href="https://www.linkedin.com/in/shuv/" target="_blank" rel="noopener noreferrer">
          <span className="dot" />LinkedIn Profile ↗
        </a>
        <a className="ext-link" href="https://www.linkedin.com/posts/shuv_aileadcalling-an-ai-powered-voice-agent-activity-7431850032406089728-7pyt" target="_blank" rel="noopener noreferrer">
          <span className="dot" />LinkedIn Post ↗
        </a>
      </div>
    </aside>
  )
}
