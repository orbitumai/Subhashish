export default function HomePanel({ onNavigate }) {
  return (
    <div className="hero-panel">
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        Available · McKinney, TX
      </div>

      <div className="hero-title">
        I'm Not an AI<br /><span>Expert.</span>
      </div>

      <div style={{ fontFamily: 'var(--f-accent)', fontStyle: 'italic', fontSize: 'clamp(15px,1.6vw,20px)', color: 'var(--strategy-gold)', marginBottom: '20px', maxWidth: '680px' }}>
        I'm an AI Enthusiast Who Builds Frameworks That Make AI Work for Founders Like You.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '700px', marginBottom: '32px' }}>

        <div style={{ fontFamily: 'var(--f-body)', fontSize: '14px', color: 'rgba(247,245,242,.65)', lineHeight: '1.85' }}>
          My name is <strong style={{ color: 'var(--founder-white)' }}>Shuv</strong> — short for Subhashish — and I've spent <strong style={{ color: 'var(--founder-white)' }}>25+ years</strong> inside Fortune 500 companies managing programs, projects, and transformations across <strong style={{ color: 'var(--founder-white)' }}>51 countries</strong>. I've managed <strong style={{ color: 'var(--founder-white)' }}>$100M+ programs</strong>. But the moment that changed everything for me wasn't managing large-scale programs. It was a book — <em style={{ color: 'var(--strategy-gold)' }}>The Age of A.I. and Our Human Future.</em>
        </div>

        <div style={{ fontFamily: 'var(--f-body)', fontSize: '14px', color: 'rgba(247,245,242,.65)', lineHeight: '1.85' }}>
          In 2023 — the year ChatGPT launched and rewired the world — I enrolled in <strong style={{ color: 'var(--founder-white)' }}>30+ courses</strong> and completed the <strong style={{ color: 'var(--founder-white)' }}>UT Austin AI/ML certification</strong>. Countless late nights figuring out what this technology could actually do for real people. What I figured out: the difference between an AI that gives you garbage and an AI that gives you gold isn't the model. <strong style={{ color: 'var(--founder-white)' }}>It's the method.</strong>
        </div>

        <div style={{ fontFamily: 'var(--f-body)', fontSize: '14px', color: 'rgba(247,245,242,.65)', lineHeight: '1.85' }}>
          I started building frameworks — not as an academic exercise, but because I was delivering real projects and needed real results. Every AI framework I encountered was built for enterprises with armies of engineers and six-figure budgets. So I built my own: <strong style={{ color: 'var(--warm-ember)' }}>ORBIT™</strong> and <strong style={{ color: 'var(--warm-ember)' }}>PITCH-XI™</strong> — to solve the exact failure points founders face when trying to make AI work.
        </div>

        <div style={{ background: 'rgba(196,98,45,.07)', borderLeft: '3px solid var(--warm-ember)', borderRadius: '0 var(--r-md) var(--r-md) 0', padding: '14px 20px' }}>
          <div style={{ fontFamily: 'var(--f-body)', fontSize: '13px', color: 'rgba(247,245,242,.65)', lineHeight: '1.75' }}>
            Through <strong style={{ color: 'var(--founder-white)' }}>OrbitumAI</strong> — my AI consulting practice based in McKinney, Texas — I work with non-technical founders, SMB owners, and senior leaders who want AI to function like a real business partner, not just a chatbot.
          </div>
          <div style={{ fontFamily: 'var(--f-accent)', fontStyle: 'italic', fontSize: '13px', color: 'var(--strategy-gold)', marginTop: '8px' }}>
            My goal: Help 1 million people learn, build, and lead with AI.
          </div>
        </div>
      </div>

      <div className="hero-ctas">
        <button className="btn-primary" onClick={() => onNavigate('frameworks')}>See Frameworks →</button>
      </div>

      <div className="hero-stats">
        {[
          { num: '25+', lbl: 'Years Experience' },
          { num: '51',  lbl: 'Countries Managed' },
          { num: '4',   lbl: 'Frameworks Built' },
          { num: '1M',  lbl: 'Goal: People Helped' },
        ].map(({ num, lbl }) => (
          <div key={lbl}>
            <div className="hero-stat-num">{num}</div>
            <div className="hero-stat-lbl">{lbl}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
