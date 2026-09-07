function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"
          alt="DR ZAZAI Business"
        />
      </div>

      <div className="about-content">
        <p className="section-label">ABOUT US</p>

        <h2>
          Welcome to <span>DR ZAZAI</span>
        </h2>

        <p>
          DR ZAZAI is a professional business focused on providing quality
          products and reliable services to our customers.
        </p>

        <p>
          Our goal is to build long-term relationships with our customers
          through quality, trust and excellent service.
        </p>

        <div className="about-features">
          <div>
            <strong>01</strong>
            <h3>Quality</h3>
            <p>Quality products and professional service.</p>
          </div>

          <div>
            <strong>02</strong>
            <h3>Trust</h3>
            <p>We value our customers and their trust.</p>
          </div>

          <div>
            <strong>03</strong>
            <h3>Service</h3>
            <p>Reliable service for our customers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
