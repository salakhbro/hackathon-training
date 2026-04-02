import React, { useMemo, useState } from 'react'
import './Muhammadsoli.css'

const themeStyles = {
  light: {
    text: '#2a2a72',
    border: '#ddd',
    background: '#f8f9ff',
    content: '#333',
    accent: '#3151ad'
  },
  dark: {
    text: '#dde2ff',
    border: '#4f5e89',
    background: '#1e2344',
    content: '#e7eafc',
    accent: '#8da5ff'
  }
}

function Muhammadsoli() {
  const [theme, setTheme] = useState('light')
  const mode = themeStyles[theme]

  const pageStyle = useMemo(() => ({
    textAlign: 'center',
    color: mode.text,
    marginTop: '30px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    transition: 'color 200ms ease-in-out'
  }), [mode])

  const boxStyle = useMemo(() => ({
    maxWidth: '700px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid',
    borderColor: mode.border,
    borderRadius: '10px',
    backgroundColor: mode.background,
    color: mode.content,
    lineHeight: '1.6',
    backgroundColor: mode.background,
    transition: 'all 200ms ease-in-out'
  }), [mode, theme])

  const logoStyle = useMemo(() => ({
    color: mode.accent,
    marginBottom: '12px'
  }), [mode])

  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button onClick={toggleTheme} className="toggle-theme">
          Switch to {theme === 'dark' ? 'light' : 'dark'} mode
        </button>
      </div>
      <h1 className='page' style={pageStyle}>Muhammadsoli page</h1>
      <div className="box" style={boxStyle}>
        <h1 className='logo' style={logoStyle}>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum possimus mollitia, distinctio omnis
          <br />asperiores impedit assumenda quod exercitationem ut odit tempore atque tempora, dolor fugiat sit accusamus
          <br />praesentium eos amet quisquam fugit temporibus. Atque quas laboriosam, maiores esse corrupti non, eius ab laudantium
          <br />nemo distinctio sit assumenda quisquam amet.
        </p>
      </div>
    </div>
  )
}

export default Muhammadsoli
