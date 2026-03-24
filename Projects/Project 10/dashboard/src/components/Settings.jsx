import { useState } from 'react'

function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode:       false,
    newsletter:     true,
    twoFactor:      false,
  })

  function toggle(key) {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const labels = {
    notifications: 'Email Notifications',
    darkMode:       'Dark Mode',
    newsletter:     'Newsletter',
    twoFactor:      'Two Factor Auth',
  }

  return (
    <div className="settings">
      {Object.keys(settings).map(key => (
        <div key={key} className="setting-row">
          <span>{labels[key]}</span>
          <button
            className={`toggle ${settings[key] ? 'on' : 'off'}`}
            onClick={() => toggle(key)}
          >
            {settings[key] ? 'On' : 'Off'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Settings