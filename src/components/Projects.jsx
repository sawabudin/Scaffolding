const projects = [
  {
    title: "High Rise Building",
    category: "Commercial Scaffolding",
    image:
      "https://hdrlscaffold.en.made-in-china.com/product/oKsnkrpjrMYy/China-Layher-System-Scaffolding-for-High-Rise-Building-Briddge-Tunnel-Construction.html",
  },
  {
    title: "Industrial Project",
    category: "Industrial Scaffolding",
    image:
      "https://cdn.pressebox.de/a/31d1c7094e2aaca5/attachments/1420417.attachment/filename/promaintain-wird-teil-der-peri-gruppe-peri-web.jpg",
  },
  {
    title: "High Rise Construction",
    category: "Building Scaffolding",
    image:
      "https://ahmadiehgroup.com/wp-content/uploads/2023/07/proj-half-b-toul-scaled.jpg",
  },
  {
    title: "Industrial Structure",
    category: "Industrial Access",
    image: "https://sascaffoldings.com/assets/image-path/home/14.jpg",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <p>OUR PROJECTS</p>

        <h2>
          Professional <span>Scaffolding Solutions</span>
        </h2>

        <p className="heading-text">
          Reliable scaffolding solutions for construction, commercial and
          industrial projects.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />

              <div className="project-overlay">
                <span>VIEW PROJECT</span>
              </div>
            </div>

            <div className="project-info">
              <p>{project.category}</p>
              <h3>{project.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
