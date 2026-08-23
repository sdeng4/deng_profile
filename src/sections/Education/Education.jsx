import './Education.css'

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-header">
        <span className="education-number">03</span>
        <div className="education-line"></div>
        <span className="education-label">EDUCATION</span>
      </div>

      <div className="education-card">
        <div className="education-content">
          <h3>University of Houston</h3>

          <p className="education-major">
            Bachelor of Science in Computer Science
          </p>

          <div className="education-details">
            <div>
              <span className="education-detail-label">GPA</span>
              <strong>3.23 / 4.0</strong>
            </div>

            <div>
              <span className="education-detail-label">PERIOD</span>
              <strong>Jan 2024 - Present</strong>
            </div>
          </div>

          <p className="education-description">
            Coursework and projects focused on software development,
            database systems, artificial intelligence, and software design.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Education;