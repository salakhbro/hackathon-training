import React, { useState } from 'react'
import "./Jasurbek.css"

function Jasurbek() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const skills = ['React', 'JavaScript', 'CSS', 'Web Design', 'Performance Optimization'];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode');
  };

  return (
    <section className="about">
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? '☀️' : '🌙'}
      </button>

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

          <div className="skills-section">
            <h2>Skills & Expertise</h2>
            <div className="skills-tags">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="cta-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Get In Touch</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jasurbek