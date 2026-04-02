import React from 'react'
import "./Jasurbek.css"

function Jasurbek() {
  return (
    <section className="about">
      <div className="container">
        <div className="content">
          <h1 className="title">About Me</h1>
          <p className="subtitle">Passionate developer crafting digital experiences</p>

          <div className="grid">
            <div className="card">
              <div className="icon">💡</div>
              <h3>Innovation</h3>
              <p>Creating modern solutions with cutting-edge technologies</p>
            </div>

            <div className="card">
              <div className="icon">🎨</div>
              <h3>Design</h3>
              <p>Building beautiful and intuitive user experiences</p>
            </div>

            <div className="card">
              <div className="icon">⚡</div>
              <h3>Performance</h3>
              <p>Optimizing for speed and efficiency</p>
            </div>
          </div>

          <p className="description">
            I'm a creative developer focused on building elegant solutions to complex problems.
            With expertise in modern web technologies, I bring ideas to life with clean code and thoughtful design.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Jasurbek