function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span>DR</span> ZAZAI
          </div>

          <p>
            Professional scaffolding solutions for construction, industrial and
            infrastructure projects.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="Instagram">
              ig
            </a>
            <a href="#" aria-label="LinkedIn">
              in
            </a>
            <a href="#" aria-label="WhatsApp">
              wa
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-column">
          <h3>Navigation</h3>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#projects">Projects</a>
          <a href="#gallery">Gallery</a>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Services</h3>

          <a href="#services">Building Scaffolding</a>
          <a href="#services">Industrial Scaffolding</a>
          <a href="#services">Bridge Scaffolding</a>
          <a href="#services">Maintenance Access</a>
          <a href="#services">Safety Systems</a>
          <a href="#services">Custom Solutions</a>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <div className="footer-contact-item">
            <span>📍</span>
            <p>
              Kabul, Afghanistan
              <br />
              G86G+58 Kabul
            </p>
          </div>

          <div className="footer-contact-item">
            <span>📞</span>

            <a href="tel:+353899551449">+353 89 955 1449</a>
          </div>

          <div className="footer-contact-item">
            <span>🕐</span>

            <p>
              Monday – Saturday
              <br />
              8:00 AM – 5:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DR ZAZAI. All Rights Reserved.</p>

        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
