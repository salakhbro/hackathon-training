import React, { useState } from 'react'
import './Mirshoxid.css'

function Mirshoxid() {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <div className={`${theme} page-wrapper`}>
        <div className="page-content">
          <h3>Theme Menu</h3>
          <button onClick={() => setTheme('light')}>Light</button>
          <button onClick={() => setTheme('dark')}>Dark</button>
          <button onClick={() => setTheme('blue')}>Blue</button>
          <button onClick={() => setTheme('red')}>Red</button>
          <button onClick={() => setTheme('gray')}>Gray</button>
        </div>
        <div className="page-content">
          <div className="about-card about-card-large">
            <h1>🚀 Mirshohid Zokirjonov</h1>
            <p>
              <strong>👋 Salom!</strong> Men <strong>Mirshohid Zokirjonov</strong> – dasturlashga jonbozlik bilan kirishgan multiple round developer.
              Hozirgi kunda 6+ yillik tajribam bor va "code is poetry" deb hisoblayman.
            </p>
            <p>
              <strong>🌐 Mutaxassislik:</strong> Frontend + Backend + DevOps.
              Iloji boricha toza, qat'iy va testli kod yozishga urg‘u beraman.
            </p>
            <div className="tech-grid large">
              <div className="tech-box thick-box">💻 JavaScript (React, Node.js)</div>
              <div className="tech-box thick-box">🐍 Python (Django, FastAPI)</div>
              <div className="tech-box thick-box">☕ Java (Spring Boot)</div>
              <div className="tech-box thick-box">🛠️ C# (.NET Core, ASP.NET)</div>
              <div className="tech-box thick-box">🐹 Go (Golang Web Services)</div>
            </div>
            <p className="about-note large-note">
              Har bir texnologiya uchun individual maqsadlar qo‘yilgan: modular arxitektura, yuqori tezlik, puxta xavfsizlik.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mirshoxid
