const experience = [
  {
    period: '2024 – Present', org: 'OrbitumAI', role: 'Founder & AI Consultant · McKinney, TX',
    desc: 'Founded AI consulting practice helping non-technical founders and SMBs harness AI. Built AILeadCalling (voice AI platform) and LexCoworkAI (legal productivity). Creator of ORBIT™ and PITCH-XI™ frameworks. Operating under BrewOnGo.AI LLC.',
  },
  {
    period: '2021 – 2024', org: 'Wesco Distribution', role: 'Program Manager · Dallas, TX',
    desc: 'Directed global payroll transformation across 51 countries over 24 months with 24 vendors. Managed 3 M&A integrations affecting 7,500 employees. Spearheaded LMS Cornerstone implementation for 25,000 employees. Led vendor selection across IT, HR and Marketing.',
  },
  {
    period: '2021 – 2022', org: 'Founder Institute', role: 'Mentor · United States',
    desc: 'Mentored next-generation founders through transformational moments — product strategy, business model design, investor readiness, and go-to-market execution.',
  },
  {
    period: '2019 – 2021', org: 'Self-Employed', role: 'Startups Consultant · Frisco, TX',
    desc: 'Advisory services to startups across market research, recruitment, business model design, ecosystem building, MVP development, and investor relations.',
  },
  {
    period: '2016 – 2017', org: 'Genpact', role: 'Operations Program Manager · Torrance, CA',
    desc: 'Managed HQ relocation of a major automobile company from CA to TX across 30 business units. Developed 7,000+ knowledge assets through a people program. Designed and implemented process and technology solutions with comprehensive change management.',
  },
  {
    period: '2007 – 2013', org: 'Thinkbrik Knowledge Solutions', role: 'Entrepreneur / Co-Founder · New Delhi, India',
    desc: 'Co-founded startup specializing in tech, digital marketing, e-learning, blended training, and software development. Led business development, customer relationships, project management, and IT infrastructure across multiple industries.',
  },
  {
    period: '2001 – 2007', org: 'Intel', role: 'IT Network Specialist – South East Asia · India',
    desc: 'Managed IT and end-user services across Southeast Asia. Channel partner support, vendor relations, IT asset management. Led regional IT projects — contract negotiations, SLA compliance, budget and schedule management.',
  },
]

const education = [
  { name: 'UT Austin', detail: 'AI/ML: Business Applications', period: 'March – August 2025', highlight: true },
  { name: 'Stanford University', detail: 'Building Business Models', period: 'Certificate Program' },
  { name: 'Gauhati University', detail: "Bachelor's · Business Administration", period: 'Undergraduate' },
  { name: 'NIIT', detail: 'Post Grad Diploma · Software Engineering', period: 'Software & Networking' },
  { name: 'Udacity', detail: 'Product Management Nano Degree', period: 'Product Management' },
]

const certifications = [
  'PMP — Project Management Professional',
  'SAFe Agilist Certification',
  'Strategic Talent Acquisition (STA)',
  'Preparing to Manage Human Resources',
  'How to Finance & Grow Your Startup – Without VC',
]

export default function ProfilePanel() {
  return (
    <>
      <div className="panel-eyebrow">Who I Am</div>
      <div className="panel-title">Shuv Profile</div>
      <div className="panel-sub">Founder, OrbitumAI · Creator of ORBIT™ · McKinney, Texas</div>
      <div className="accent-line" />

      {/* Bio + Quick Facts */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '28px' }}>
        <div style={{ background: 'rgba(247,245,242,.03)', border: '1px solid rgba(247,245,242,.08)', borderRadius: 'var(--r-lg)', padding: '28px 32px' }}>
          <div style={{ fontFamily: 'var(--f-display)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--warm-ember)', marginBottom: '14px' }}>Summary</div>
          <div style={{ fontFamily: 'var(--f-body)', fontSize: '13px', color: 'rgba(247,245,242,.65)', lineHeight: '1.85' }}>
            I'm not an AI expert. I'm an AI enthusiast who builds frameworks that make AI actually work. My name is <strong style={{ color: 'var(--founder-white)' }}>Shuv</strong> — short for Subhashish — and I've spent <strong style={{ color: 'var(--founder-white)' }}>25+ years</strong> inside Fortune 500 companies managing programs, projects, and transformations. I've managed <strong style={{ color: 'var(--founder-white)' }}>$100M+ programs across 51 countries</strong>.<br /><br />
            In 2023, I enrolled in 30+ courses and completed the UT Austin AI/ML certification program. What I found: <strong style={{ color: 'var(--founder-white)' }}>The difference between an AI that gives you garbage and an AI that gives you gold isn't the model. It's the method.</strong><br /><br />
            So I built the right frameworks. That framework is <strong style={{ color: 'var(--warm-ember)' }}>ORBIT™</strong> — the engine behind OrbitumAI. My goal: <strong style={{ color: 'var(--founder-white)' }}>Help 1 million people learn, build, and lead with AI.</strong>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ background: 'rgba(196,98,45,.08)', border: '1px solid rgba(196,98,45,.2)', borderRadius: 'var(--r-md)', padding: '18px 20px' }}>
            <div style={{ fontFamily: 'var(--f-display)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--warm-ember)', marginBottom: '10px' }}>Quick Facts</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                '📍 McKinney, Texas, USA',
                '✉️ shuvca@gmail.com',
                '🏢 Founder, OrbitumAI',
                '📅 25+ Years Experience',
                '🌍 51 Countries Managed',
                '💡 Founder Institute Mentor',
              ].map(f => (
                <div key={f} style={{ fontFamily: 'var(--f-body)', fontSize: '12px', color: 'rgba(247,245,242,.6)' }}>{f}</div>
              ))}
            </div>
          </div>
          <div style={{ background: 'rgba(212,168,67,.06)', border: '1px solid rgba(212,168,67,.18)', borderRadius: 'var(--r-md)', padding: '18px 20px' }}>
            <div style={{ fontFamily: 'var(--f-display)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--strategy-gold)', marginBottom: '10px' }}>LinkedIn Top Skills</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {['AI Framework Creation', 'AI Product Development', 'AI Strategy'].map(s => (
                <div key={s} style={{ fontFamily: 'var(--f-body)', fontSize: '12px', color: 'rgba(247,245,242,.65)' }}>⬡ {s}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div style={{ fontFamily: 'var(--f-display)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--warm-ember)', marginBottom: '16px' }}>Experience</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
        {experience.map(({ period, org, role, desc }) => (
          <div key={org + period} style={{ display: 'flex', gap: '16px', background: 'rgba(247,245,242,.03)', border: '1px solid rgba(247,245,242,.07)', borderRadius: 'var(--r-md)', padding: '18px 22px' }}>
            <div style={{ minWidth: '90px', fontFamily: 'var(--f-display)', fontSize: '10px', fontWeight: 700, color: 'rgba(247,245,242,.3)', paddingTop: '2px' }}>{period}</div>
            <div>
              <div style={{ fontFamily: 'var(--f-display)', fontSize: '14px', fontWeight: 800, color: 'var(--founder-white)' }}>{org}</div>
              <div style={{ fontFamily: 'var(--f-accent)', fontStyle: 'italic', fontSize: '12px', color: 'var(--strategy-gold)', marginBottom: '6px' }}>{role}</div>
              <div style={{ fontFamily: 'var(--f-body)', fontSize: '12px', color: 'rgba(247,245,242,.55)', lineHeight: '1.6' }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={{ fontFamily: 'var(--f-display)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--warm-ember)', marginBottom: '16px' }}>Education</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '24px' }}>
        {education.map(({ name, detail, period, highlight }) => (
          <div key={name} style={{ background: 'rgba(247,245,242,.03)', border: `1px solid ${highlight ? 'rgba(212,168,67,.18)' : 'rgba(247,245,242,.07)'}`, borderRadius: 'var(--r-md)', padding: '16px 18px' }}>
            <div style={{ fontFamily: 'var(--f-display)', fontSize: '13px', fontWeight: 800, color: 'var(--founder-white)', marginBottom: '3px' }}>{name}</div>
            <div style={{ fontFamily: 'var(--f-body)', fontSize: '11px', color: highlight ? 'var(--strategy-gold)' : 'rgba(247,245,242,.5)', marginBottom: '4px' }}>{detail}</div>
            <div style={{ fontFamily: 'var(--f-body)', fontSize: '10px', color: 'rgba(247,245,242,.35)' }}>{period}</div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div style={{ fontFamily: 'var(--f-display)', fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--warm-ember)', marginBottom: '16px' }}>Certifications</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {certifications.map(c => (
          <div key={c} style={{ background: 'rgba(196,98,45,.1)', border: '1px solid rgba(196,98,45,.25)', borderRadius: 'var(--r-md)', padding: '10px 16px', fontFamily: 'var(--f-display)', fontSize: '12px', fontWeight: 700, color: 'var(--founder-white)' }}>{c}</div>
        ))}
      </div>
    </>
  )
}
