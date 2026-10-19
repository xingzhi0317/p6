// Presentational: no state
function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>I like to play basketball and explore ways to earn money.</p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <span>Berkeley, California</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">✉️</span>
                <a href="mailto:xingzhi0317@berkeley.edu">xingzhi0317@berkeley.edu</a>
              </div>
              <div className="detail-item">
                <span className="detail-icon">📱</span>
                <span>(510) 229-2993</span>
              </div>
            </div>
          </div>
          <div className="about-availability">
            <h3>Currently Available For:</h3>
            <div className="availability-tags">
              <span className="tag tag-available">Part-Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
