import React, { useState } from 'react';

// PUBLIC_INTERFACE
/**
 * Minimal Home component with three horizontally aligned teacher profiles,
 * styled and structured responsively for side-by-side row appearance above mobile.
 * Also includes a minimalist log in/sign up form below the profiles.
 */
export default function Home() {
  // State for form fields (for demo/UX only; does not submit)
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    artwork: null,
  });

  const [artworkName, setArtworkName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === 'artwork') {
      setForm(f => ({ ...f, artwork: files[0] }));
      setArtworkName(files[0] ? files[0].name : '');
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // No actual backend logic; just resets after a second for demo
    setTimeout(() => setSubmitted(false), 1200);
    setForm({ name: '', email: '', password: '', artwork: null });
    setArtworkName('');
  }

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

      {/* Minimalist Login/Sign Up Form */}
      <div className="auth-form-box" tabIndex="0" aria-label="Sign up form">
        <form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
          <h3 className="auth-form-title">Log In / Sign Up</h3>
          <label className="auth-label">
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              autoComplete="username"
              onChange={handleChange}
              className="auth-input"
              placeholder="Your name"
              required
              minLength={2}
            />
          </label>
          <label className="auth-label">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              autoComplete="email"
              onChange={handleChange}
              className="auth-input"
              placeholder="you@email.com"
              required
            />
          </label>
          <label className="auth-label">
            Password
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="auth-input"
              placeholder="Password"
              required
              minLength={6}
              autoComplete="new-password"
            />
          </label>
          <label className="auth-label" style={{marginBottom: 12}}>
            <span>
              Upload Artwork{' '}
              <span style={{fontWeight: 300, color: 'var(--text-secondary)', fontSize: '0.97em'}}>
                (optional)
              </span>
            </span>
            <input
              type="file"
              name="artwork"
              accept="image/*"
              onChange={handleChange}
              className="auth-input-file"
            />
            {artworkName && (
              <span className="filename-indicator">{artworkName}</span>
            )}
          </label>
          <button type="submit" className="btn btn-large" disabled={submitted}>
            {submitted ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
}
