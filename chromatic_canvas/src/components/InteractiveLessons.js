import React from 'react';

/**
 * PUBLIC_INTERFACE
 * InteractiveLessons component - displays 16 video lectures in a 4x4 responsive minimalist grid.
 */

const LECTURES = [
  {
    title: "Color Theory Fundamentals",
    desc: "Learn the basics of color mixing, harmony, and choosing palettes for your art projects.",
  },
  {
    title: "Linework & Sketching",
    desc: "Explore various line styles and techniques to develop confident sketching skills.",
  },
  {
    title: "Shading & Value",
    desc: "Understand light, shadow, and gradient transitions to add depth to your drawings.",
  },
  {
    title: "Perspective Drawing",
    desc: "Master one-point and two-point perspectives to create realistic space and depth.",
  },
  {
    title: "Introduction to Digital Art",
    desc: "A beginner-friendly walkthrough of digital tools and the digital canvas environment.",
  },
  {
    title: "Portrait Basics",
    desc: "Discover proportions and composition for drawing expressive human faces.",
  },
  {
    title: "Expressive Brushwork",
    desc: "Learn how to use brushes effectively for texture and movement in painting.",
  },
  {
    title: "Composition Techniques",
    desc: "Explore proven approaches to arranging visual elements for compelling art.",
  },
  {
    title: "Nature & Still Life",
    desc: "Techniques for painting plants, flowers, and objects with realism and mood.",
  },
  {
    title: "Anatomy Fundamentals",
    desc: "Simplified body structure and gesture drawing for dynamic figures.",
  },
  {
    title: "Dynamic Lighting in Art",
    desc: "How to depict dramatic or subtle lighting to enhance your scenes.",
  },
  {
    title: "Cartooning & Stylization",
    desc: "Transform ideas into unique, stylized cartoon characters and environments.",
  },
  {
    title: "Digital Effects & Textures",
    desc: "Techniques to create texture, pattern, and vibrant effects digitally.",
  },
  {
    title: "Urban Sketching",
    desc: "Quick, on-location drawing tips for capturing city scenes and architecture.",
  },
  {
    title: "Watercolor Essentials",
    desc: "Fundamentals of painting with watercolor—wash, texture, and blending.",
  },
  {
    title: "Art for Storytelling",
    desc: "How to use imagery, layout, and design to tell compelling stories.",
  },
];

function VideoLectureCard({ title, desc }) {
  return (
    <div className="video-lecture-card" tabIndex="0" aria-label={`Lecture: ${title}`}>
      <div className="video-placeholder" aria-label="Video placeholder">
        {/* Minimalist play icon in a circle (SVG, light color for dark bg) */}
        <svg width="54" height="54" viewBox="0 0 54 54" aria-hidden="true" focusable="false">
          <circle cx="27" cy="27" r="26" fill="rgba(255,255,255,0.07)" stroke="var(--border-color)" strokeWidth="1.5" />
          <polygon points="22,18 22,36 37,27" fill="var(--kavia-purple)" />
        </svg>
        <span className="video-duration">1h 00m</span>
      </div>
      <div className="video-lecture-info">
        <div className="video-lecture-title">{title}</div>
        <div className="video-lecture-desc">{desc}</div>
      </div>
    </div>
  );
}

export default function InteractiveLessons() {
  return (
    <section>
      <h2 className="center-heading" style={{ marginBottom: 32 }}>Interactive Lessons</h2>
      {/* Introduction paragraph */}
      <p className="description" style={{ textAlign: "center", margin: "0 auto 24px auto" }}>
        Welcome to the Lessons page! Here you'll find a curated series of step-by-step video lectures designed to help you master foundational and advanced art skills. Each lesson below focuses on a key topic—ranging from drawing and color theory to digital techniques and creative storytelling. Explore the grid to learn at your own pace and unlock new creative possibilities!
      </p>
      <div className="video-lecture-grid">
        {LECTURES.map((lecture, i) => (
          <VideoLectureCard key={i} title={lecture.title} desc={lecture.desc} />
        ))}
      </div>
    </section>
  );
}
