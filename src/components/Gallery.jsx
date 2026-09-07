const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    title: "Construction Scaffolding",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590644365607-1c5a8c2b7e4a?auto=format&fit=crop&w=1400&q=80",
    title: "Building Project",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    title: "Construction Site",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80",
    title: "Industrial Project",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&w=1400&q=80",
    title: "Steel Structure",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    title: "Modern Construction",
  },
];

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="section-heading">
        <p>OUR GALLERY</p>

        <h2>
          Our Work in <span>Action</span>
        </h2>

        <p className="heading-text">
          Explore some of the construction and scaffolding work represented by
          DR ZAZAI.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="gallery-overlay">
              <div>
                <span>DR ZAZAI</span>
                <h3>{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
