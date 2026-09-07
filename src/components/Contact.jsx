function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <p className="section-label">GET IN TOUCH</p>

          <h2>
            Let's Work <span>Together</span>
          </h2>

          <p className="contact-description">
            Need professional scaffolding for your next project? Contact DR
            ZAZAI today and let's discuss your requirements.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📍</div>

              <div>
                <h3>Location</h3>
                <p>Kabul, Afghanistan</p>
                <small>G86G+58 Kabul, Afghanistan</small>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>

              <div>
                <h3>Phone</h3>
                <a href="tel:+353899551449">+353 89 955 1449</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕐</div>

              <div>
                <h3>Opening Hours</h3>
                <p>Open · Closes 5 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name" />

              <input type="tel" placeholder="Phone Number" />
            </div>

            <input type="email" placeholder="Email Address" />

            <input type="text" placeholder="Project Type" />

            <textarea
              rows="6"
              placeholder="Tell us about your project..."
            ></textarea>

            <button type="submit">Send Message →</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
