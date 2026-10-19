// State needed: which filter is active? (a string such as 'all')
// `projects` is owned by App and received as a prop.
import { useState } from 'react'

const filters = [
  { value: 'all', label: 'All Projects' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'fullstack', label: 'Full-Stack' },
  { value: 'design', label: 'Design' },
  { value: 'webapp', label: 'Web App' },
]

function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState('all')

  // Derived, not stored
  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>

        <div className="filter-buttons">
          {filters.map(f => (
            <button
              key={f.value}
              className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <p className="project-count">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.categoryLabel}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <p>Completed: {project.completed}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
