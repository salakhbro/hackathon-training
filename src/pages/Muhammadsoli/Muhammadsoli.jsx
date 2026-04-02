import React from 'react'
import './Muhammadsoli.css'

function Muhammadsoli() {
  const pageStyle = {
    textAlign: 'center',
    color: '#2a2a72',
    marginTop: '30px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
  };

  const boxStyle = {
    maxWidth: '700px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f8f9ff',
    color: '#333',
    lineHeight: '1.6'
  };

  const logoStyle = {
    color: '#3151ad',
    marginBottom: '12px'
  };

  return (
    <div>
        <h1 className='page' style={pageStyle}>Muhammadsoli page</h1>
        <div className="box" style={boxStyle}>
            <h1 className='logo' style={logoStyle}>Welcome</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum possimus mollitia, distinctio omnis <br />asperiores impedit assumenda quod exercitationem ut odit tempore atque tempora, dolor fugiat sit accusamus <br />praesentium eos amet quisquam fugit temporibus. Atque quas laboriosam, maiores esse corrupti non, eius ab laudantium <br />nemo distinctio sit assumenda quisquam amet.</p>
        </div>
    </div>
  )
}

export default Muhammadsoli
