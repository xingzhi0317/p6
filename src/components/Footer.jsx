// Presentational: no state. Receives projectCount from App.
function Footer({ projectCount }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2026 XINGZHI WU. All rights reserved. {projectCount} projects</p>
          <div className="social-links">
            <a href="mailto:xingzhi0317@berkeley.edu" className="social-link">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
