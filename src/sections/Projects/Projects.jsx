import './Projects.css'
import postOfficeImage from '../../assets/post_office.png'
import queueImage from '../../assets/queue.png'

function Projects() {
  const projects = [
    {
      title: 'QueueSmart (Class Project)',
      tech: ['React', 'Node.js', 'Prisma', 'SQLite'],
      description:
        'A queue management application with admin service management, queue controls, reporting, and wait-time functionality.',
      image: queueImage,
      link: null
    },
    {
      title: 'Post Office Web Application (Class Project)',
      tech: ['React', 'SQL', 'JavaScript'],
      description:
        'A course project focused on web application development and database functionality.',
      image:postOfficeImage,
      link:'https://post-office-project-2024.vercel.app/'
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <span className="projects-number">04</span>
        <div className="projects-line"></div>
        <span className="projects-label">PROJECTS</span>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
                {project.image ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                    />
                  </a>
                ) : (
                  <span>Project Image</span>
                )}
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <div className="project-tags">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;