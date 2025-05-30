import React from 'react';

// PUBLIC_INTERFACE
/**
 * Minimal Home component with three horizontally aligned teacher profiles,
 * styled and structured responsively for side-by-side row appearance above mobile.
 */
export default function Home() {
  return (
    <section>
      <h2 className="center-heading">Home</h2>
      <p className="description" style={{ textAlign: "center", margin: "0 auto" }}>
        Welcome to ArtS+, a vibrant and minimalist platform where creativity thrives. Discover interactive lessons, share your artwork, and connect with an inspiring community—all in an intuitive, modern space built for learning and expression. Start your creative journey here!
      </p>
      <div className="teacher-profiles-row" role="list">
        {/* Teacher 1 */}
        <section className="teacher-profile" role="listitem" tabIndex="0">
          <div className="teacher-avatar" aria-label="Photo of Ms. Elara"></div>
          <div className="teacher-profile-info">
            <div className="teacher-name">Ms. Elara Wu</div>
            <div className="teacher-desc">
              Modern painter & installation artist, Elara guides students in mixing classic brushwork with digital innovation.
            </div>
          </div>
        </section>
        {/* Teacher 2 */}
        <section className="teacher-profile" role="listitem" tabIndex="0">
          <div className="teacher-avatar" aria-label="Photo of Mr. Ravi"></div>
          <div className="teacher-profile-info">
            <div className="teacher-name">Mr. Ravi Patel</div>
            <div className="teacher-desc">
              Passionate sketch artist, Ravi helps beginners unlock their creative vision through playful, interactive lessons.
            </div>
          </div>
        </section>
        {/* Teacher 3 */}
        <section className="teacher-profile" role="listitem" tabIndex="0">
          <div className="teacher-avatar" aria-label="Photo of Ms. Ines"></div>
          <div className="teacher-profile-info">
            <div className="teacher-name">Ms. Ines García</div>
            <div className="teacher-desc">
              With a focus on vibrant color and composition, Ines specializes in digital illustration and visual storytelling.
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
