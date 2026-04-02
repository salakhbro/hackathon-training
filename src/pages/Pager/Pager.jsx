import React from 'react';
import { Link } from 'react-router-dom';

function Pager() {
  const sidebarStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100vh',
    width: '200px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const linkStyle = {
    display: 'block',
    color: '#fff',
    textDecoration: 'none',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  };

  const linkHoverStyle = {
    backgroundColor: '#555',
  };

  return (
    <div style={sidebarStyle}>
      <h2>Navigation</h2>
      <Link to='/jasurbek' style={linkStyle} onMouseEnter={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>Jasurbek</Link>
      <Link to='/mirshoxid' style={linkStyle} onMouseEnter={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>Mirshoxid</Link>
      <Link to='/muhammadsoli' style={linkStyle} onMouseEnter={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>Muhammadsoli</Link>
    </div>
  );
}

export default Pager;