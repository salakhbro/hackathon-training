import React, { useState } from 'react'

function Jasurbek() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '1rem'
    }}>
      <div style={{
        padding: '3rem',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '16px',
        boxShadow: isHovered ? '0 16px 48px rgba(0, 0, 0, 0.15)' : '0 8px 32px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '600px',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)'
      }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 style={{
          color: '#4a5568',
          fontSize: '2.5rem',
          margin: '0 0 1rem 0',
          fontWeight: '600',
          letterSpacing: '0.5px'
        }}>
          Jasurbek Page
        </h1>

        <p style={{
          color: '#718096',
          fontSize: '1.1rem',
          margin: '1rem 0',
          lineHeight: '1.6'
        }}>
          Welcome! This is an enhanced page with smooth interactions and better styling.
        </p>

        <button style={{
          marginTop: '1.5rem',
          padding: '0.75rem 2rem',
          backgroundColor: '#4299e1',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease'
        }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#3182ce'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4299e1'}
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Jasurbek
