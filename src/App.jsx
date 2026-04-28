import { useState, useRef, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import HomePanel from './components/panels/HomePanel'
import FrameworksPanel from './components/panels/FrameworksPanel'
import ProductBuildsPanel from './components/panels/ProductBuildsPanel'
import InfrastructurePanel from './components/panels/InfrastructurePanel'
import SkillsPanel from './components/panels/SkillsPanel'
import ProfilePanel from './components/panels/ProfilePanel'
import LinkedInPanel from './components/panels/LinkedInPanel'

const PANELS = {
  home:      HomePanel,
  frameworks: FrameworksPanel,
  arch:      ProductBuildsPanel,
  hosting:   InfrastructurePanel,
  skills:    SkillsPanel,
  profile:   ProfilePanel,
  linkedin:  LinkedInPanel,
}

export default function App() {
  const [activePanel, setActivePanel] = useState('home')
  const mainRef = useRef(null)

  const navigate = (id) => {
    setActivePanel(id)
    if (mainRef.current) mainRef.current.scrollTop = 0
  }

  return (
    <div className="shell">
      <Sidebar activePanel={activePanel} onNavigate={navigate} />
      <main className="main" ref={mainRef}>
        <div className="grid-texture" />
        {Object.entries(PANELS).map(([id, Panel]) => (
          <div key={id} className={`panel${activePanel === id ? ' active' : ''}`}>
            <Panel onNavigate={navigate} />
          </div>
        ))}
      </main>
    </div>
  )
}
