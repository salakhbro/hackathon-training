import React from 'react'

function Jasurbek() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        padding: '3rem',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{
          color: '#4a5568',
          fontSize: '2.5rem',
          margin: '0',
          fontWeight: '600',
          letterSpacing: '0.5px'
        }}>
          Jasurbek Page
        </h1>
      </div>
    </div>
  )
}

export default Jasurbek
