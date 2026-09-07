const industries = [
  {
    title: "Commercial Buildings",
    description:
      "Scaffolding solutions for offices, shopping centers and commercial buildings.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Residential Construction",
    description:
      "Safe access systems for houses, apartments and residential construction.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Industrial Projects",
    description:
      "Reliable scaffolding for factories, warehouses and industrial facilities.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Infrastructure",
    description:
      "Access and support solutions for bridges, tunnels and infrastructure projects.",
    image:
      "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=1200&q=80",
  },
];

function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="section-heading">
        <p>OUR INDUSTRIES</p>

        <h2>
          Scaffolding for <span>Every Project</span>
        </h2>

        <p className="heading-text">
          From residential buildings to large industrial projects, DR ZAZAI
          provides practical and reliable scaffolding solutions.
        </p>
      </div>

      <div className="industries-grid">
        {industries.map((industry) => (
          <article className="industry-card" key={industry.title}>
            <img src={industry.image} alt={industry.title} />

            <div className="industry-overlay">
              <div>
                <h3>{industry.title}</h3>

                <p>{industry.description}</p>

                <a href="#contact">Learn More →</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Industries;
