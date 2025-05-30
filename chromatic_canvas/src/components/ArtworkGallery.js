import React from 'react';

// PUBLIC_INTERFACE
/**
 * ArtworkGallery displays a responsive, minimalist grid of artwork cards.
 * Each card has an image and a description (title/text).
 */
const GALLERY_ITEMS = [
  {
    title: "Prism Forest",
    desc: "A surreal blend of nature and light, painted in digital watercolor.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Fragmented Dreams",
    desc: "Cubist-inspired digital portrait in bold chromatic hues.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Still Life Revival",
    desc: "Classic objects reimagined with hypermodern tones and lighting.",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Urban Colorfields",
    desc: "An abstract cityscape with layered, lively pastel overlays.",
    img: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Midnight Reflections",
    desc: "Night lake scene, minimalist brushwork, focus on luminous contrast.",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Sunset Geometry",
    desc: "Sunset envisioned as geometric shapes and color gradients.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Botanic Glow",
    desc: "Plants painted with neon linework on a noir background.",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3e25?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Waves of Mind",
    desc: "Abstract seascape exploring texture and layered blue tones.",
    img: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Gentle Giant",
    desc: "Stylized elephant illustration with delicate chromatic gradients.",
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Pastel Alleyways",
    desc: "Urban street bathed in soft vertical pastel lighting.",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3e25?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Night Flight",
    desc: "A minimalist bird in flight, night colors, and rainbow accents.",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Bloom Under Neon",
    desc: "Flowers bursting to life with subtle neon rim lights.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=500&q=80",
  },
];

function ArtworkCard({ title, desc, img }) {
  return (
    <div className="artwork-card" tabIndex="0" aria-label={`Artwork: ${title}`}>
      <div className="artwork-image-container">
        {/* Use real image or fallback to solid if missing */}
        {img ? (
          <img
            src={img}
            alt={title}
            className="artwork-image"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="artwork-image artwork-image-placeholder" aria-label="placeholder"></div>
        )}
      </div>
      <div className="artwork-info">
        <div className="artwork-title">{title}</div>
        <div className="artwork-desc">{desc}</div>
      </div>
    </div>
  );
}

export default function ArtworkGallery() {
  return (
    <section>
      <h2 className="center-heading" style={{ marginBottom: 32 }}>Artwork Gallery</h2>
      <p className="description" style={{ textAlign: "center", margin: "0 auto 28px auto", maxWidth: 600 }}>
        Explore our curated selection of artworks—each card represents a unique creative moment.<br />
        Hover/tap an image to focus on the art. All works are for educational inspiration.
      </p>
      <div className="artwork-gallery-grid">
        {GALLERY_ITEMS.map((item, i) => (
          <ArtworkCard
            key={i}
            title={item.title}
            desc={item.desc}
            img={item.img}
          />
        ))}
      </div>
    </section>
  );
}
