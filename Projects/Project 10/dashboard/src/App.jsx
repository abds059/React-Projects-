import { useState } from 'react'
import TabBar   from './components/TabBar'
import Profile  from './components/Profile'
import Settings from './components/Settings'
import Orders   from './components/Orders'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <section id="center">
      <h1>Dashboard</h1>
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="tab-content">
        {activeTab === 'profile'  && <Profile />}
        {activeTab === 'settings' && <Settings />}
        {activeTab === 'orders'   && <Orders />}
      </div>
    </section>
  )
}

export default App