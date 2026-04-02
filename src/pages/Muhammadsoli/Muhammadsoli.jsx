import React, { useMemo, useState, useEffect } from 'react'
import './Muhammadsoli.css'

const themeStyles = {
  light: {
    text: '#1e293b',
    border: '#cbd5e1',
    background: '#f8fafc',
    content: '#334155',
    accent: '#0ea5e9'
  },
  dark: {
    text: '#e2e8f0',
    border: '#334155',
    background: '#0f172a',
    content: '#cbd5e1',
    accent: '#38bdf8'
  }
}

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light'
  const saved = localStorage.getItem('muhammadsoliTheme')
  if (saved === 'dark' || saved === 'light') return saved
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

function Muhammadsoli() {
  const [theme, setTheme] = useState(getInitialTheme)
  const mode = themeStyles[theme] || themeStyles.light

  useEffect(() => {
    localStorage.setItem('muhammadsoliTheme', theme)
  }, [theme])

  const styles = useMemo(
    () => ({
      page: {
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        background: theme === 'dark'
          ? 'linear-gradient(180deg, #0f172a 0%, #111827 100%)'
          : 'linear-gradient(135deg, #ebf8ff 0%, #dbeafe 100%)',
        color: mode.text,
        fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif'
      },
      hero: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: 'calc(100vh - 80px)',
        padding: '64px 24px',
        maxWidth: '1120px',
        margin: '0 auto'
      },
      title: {
        fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        lineHeight: 1.1,
        margin: 0,
        color: mode.text
      },
      subtitle: {
        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
        maxWidth: '720px',
        marginTop: '24px',
        color: mode.content
      },
      actions: {
        marginTop: '36px',
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      },
      actionPrimary: {
        background: mode.accent,
        color: '#fff',
        border: 'none',
        borderRadius: '999px',
        padding: '14px 28px',
        fontSize: '1rem',
        cursor: 'pointer',
        boxShadow: '0 12px 30px rgba(14,165,233,0.35)',
        transition: 'transform 0.2s ease, opacity 0.2s ease'
      },
      actionSecondary: {
        background: 'transparent',
        color: mode.text,
        border: `2px solid ${mode.border}`,
        borderRadius: '999px',
        padding: '12px 26px',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background 0.2s ease, color 0.2s ease'
      },
      features: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        padding: '60px 24px 80px',
        maxWidth: '1120px',
        margin: '0 auto'
      },
      card: {
        background: theme === 'dark' ? '#1e2a4d' : '#fff',
        border: `1px solid ${mode.border}`,
        borderRadius: '14px',
        padding: '22px',
        boxShadow: theme === 'dark' ? '0 14px 30px rgba(0,0,0,0.35)' : '0 14px 30px rgba(16,24,40,0.08)',
        color: mode.content
      }
    }),
    [mode, theme]
  )

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div style={styles.page}>
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        <button
          onClick={toggleTheme}
          style={{
            padding: '10px 14px',
            borderRadius: '999px',
            border: `1px solid ${mode.border}`,
            background: theme === 'dark' ? '#0f172a' : '#fff',
            color: mode.text,
            cursor: 'pointer'
          }}
        >
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
      </div>

      <section style={styles.hero}>
        <h1 style={styles.title}>Your next hero experience starts here</h1>
        <p style={styles.subtitle}>
          Craft beautiful interfaces quickly, build with confidence, and launch stunning web projects with a fully responsive hero page design.
        </p>
        <div style={styles.actions}>
          <button style={styles.actionPrimary}>Get Started</button>
          <button style={styles.actionSecondary}>Learn More</button>
        </div>
      </section>

      <section style={styles.features}>
        <div style={styles.card}>
          <h3>Fast setup</h3>
          <p>Get a working hero page without complex configuration. Everything works out of the box.</p>
        </div>
        <div style={styles.card}>
          <h3>Customizable</h3>
          <p>Theme switcher, responsive layout, and rich visuals to match your brand instantly.</p>
        </div>
        <div style={styles.card}>
          <h3>Modern look</h3>
          <p>Clean modern design with vibrant gradient background and polished typography.</p>
        </div>
      </section>
    </div>
  )
}

export default Muhammadsoli