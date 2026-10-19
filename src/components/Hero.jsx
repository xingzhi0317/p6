// Presentational: no state
function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">XINGZHI WU</h1>
        <p className="hero-subtitle">most handsome boy around the world</p>
        <p className="hero-tagline">I like to play basketball and explore ways to earn money.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary" onClick={e => scrollTo(e, '#projects')}>View Projects</a>
          <a href="#contact" className="btn btn-secondary" onClick={e => scrollTo(e, '#contact')}>Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
