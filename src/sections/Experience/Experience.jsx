import { useState } from 'react'
import './Experience.css'

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState('joyy')

  const joyyExperiences = [
    {
      company: 'JOYY INC',
      role: 'Software Customer Service',
      location: 'Guangzhou, China',
      period: 'Jan 2015 - Aug 2016',
      description:
        'Provided answers to customer inquiries and resolved issues through phone, online platforms, and email. Identified duplicate issues and triggered fault alarms when needed.'
    },
    {
      company: 'JOYY INC',
      role: 'Technical Support Representative',
      location: 'Guangzhou, China',
      period: 'Sep 2016 - Oct 2018',
      description:
        'Resolved issues caused by system malfunctions by collaborating with relevant business departments and helping streamline support processes.'
    }
  ]

  const restaurantExperiences = [
    {
      company: 'Restaurant',
      role: 'Server',
      location: 'Houston, TX',
      period: '2024 - 2026',
      description:
        'Provided customer service in a fast-paced restaurant environment, handled multiple customer requests simultaneously, and collaborated with team members to ensure efficient service.'
    }
  ]

  const experiences =
    selectedExperience === 'joyy'
      ? joyyExperiences
      : restaurantExperiences

  return (
    <section id="experience" className="experience-section">

      <div className="experience-header">
        <span className="experience-number">02</span>
        <div className="experience-line"></div>
        <span className="experience-label">EXPERIENCE</span>
      </div>

      <div className="experience-selector">
        <button
          className={selectedExperience === 'joyy' ? 'active' : ''}
          onClick={() => setSelectedExperience('joyy')}
        >
          JOYY INC
        </button>

        <button
          className={selectedExperience === 'restaurant' ? 'active' : ''}
          onClick={() => setSelectedExperience('restaurant')}
        >
          Restaurant
        </button>
      </div>

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-dot"></div>

            <div className="experience-card">
              <div className="experience-title">
                <h3>{experience.company}</h3>
                <span>{experience.role}</span>
              </div>

              <div className="experience-meta">
                <span>{experience.location}</span>
                <span>{experience.period}</span>
              </div>

              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Experience