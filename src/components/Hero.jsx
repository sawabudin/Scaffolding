function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-small">WELCOME TO</p>

        <h1>
          DR <span>ZAZAI</span>
        </h1>

        <div className="hero-line"></div>

        <h2>Professional Scaffolding Solutions</h2>

        <p className="hero-text">
          Safe, reliable and professional scaffolding solutions for
          construction, industrial and infrastructure projects.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Explore Projects
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Us
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL</span>
        <div></div>
      </div>
    </section>
  );
}

export default Hero;
