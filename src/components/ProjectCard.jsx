const ProjectCard = ({ project, isExpanded, onToggle }) => {
  return (
    <div className="project-card">
      <div className='card-content'>
        <img src={project.projectImage} alt={project.projectName}></img>
        <div className='project-card-content'>
          <h2 className='project-title' onClick={onToggle}>
            {project.projectName}
          </h2>
          <p className={`project-description ${isExpanded ? 'project-description--open' : ''}`}>
            {project.projectDescription}
          </p>
          {project.projectLink && (
            <a className='project-link' href={project.projectLink} target='_blank' rel='noreferrer'>
              Ver repositorio
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard