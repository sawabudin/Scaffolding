const services = [
  {
    number: "01",
    title: "Building Scaffolding",
    description:
      "Professional scaffolding systems for residential and commercial building construction.",
    icon: "🏗️",
  },
  {
    number: "02",
    title: "Industrial Scaffolding",
    description:
      "Safe and reliable scaffolding solutions for industrial and large-scale projects.",
    icon: "🏭",
  },
  {
    number: "03",
    title: "Bridge Scaffolding",
    description:
      "Strong access and support systems for bridges, tunnels and infrastructure projects.",
    icon: "🌉",
  },
  {
    number: "04",
    title: "Maintenance Access",
    description:
      "Temporary access solutions for maintenance, repair, painting and renovation work.",
    icon: "🔧",
  },
  {
    number: "05",
    title: "Safety Systems",
    description:
      "Safety-focused scaffolding solutions designed for secure work at height.",
    icon: "🛡️",
  },
  {
    number: "06",
    title: "Custom Solutions",
    description:
      "Scaffolding solutions designed according to the requirements of each project.",
    icon: "⚙️",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="section-heading services-heading">
        <p>WHAT WE DO</p>

        <h2>
          Our <span>Scaffolding Services</span>
        </h2>

        <p className="heading-text">
          Professional, reliable and safety-focused scaffolding solutions for
          different construction and industrial projects.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.number}>
            <div className="service-top">
              <span className="service-number">{service.number}</span>

              <span className="service-icon">{service.icon}</span>
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#contact">Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
