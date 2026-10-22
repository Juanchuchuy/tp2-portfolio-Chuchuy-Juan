import { useState } from 'react'
import './Projects.css'
import { ArrowDown } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'

import floridaIMG from '../assets/projects-img/empresaFlorida.png'
import seguridadIMG from '../assets/projects-img/seguridad.png'
import puntoLimpioIMG from '../assets/projects-img/puntoLimpio.webp'

const projects = [
  {
    projectName: 'Empresa Florida',
    projectDescription: 'Consultor en tiempo real de los horarios y recorridos de la Empresa, vía web o la app móvil.',
    projectImage: floridaIMG,
    projectLink: 'https://github.com/Juanchuchuy/EmpresaFlorida-web',
  },
  {
    projectName: 'Punto Limpio',
    projectDescription: 'Plataforma municipal de gestión de residuos: mapa interactivo de puntos de recolección y horarios de camiones por calle.',
    projectImage: puntoLimpioIMG,
    projectLink: '',
  },
  {
    projectName: 'Seguridad Privada',
    projectDescription: 'Aplicación para el control de manejo de llaves de los consultorios.',
    projectImage: seguridadIMG,
    projectLink: '',
  },
]

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleProject = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className='projects-container'>
      <h2 className='title'><ArrowDown color='#9ee3f0' size={65} />Proyectos</h2>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.projectName}
          project={project}
          isExpanded={expandedIndex === index}
          onToggle={() => toggleProject(index)}
        />
      ))}
    </div>
  )
}

export default Projects