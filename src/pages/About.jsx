import { Link } from 'react-router-dom'
import './About.css'
import { ArrowDown } from 'lucide-react'

const paragraphs = [
  `Soy Juan, Desarrollador de Software y Diseñador UI/UX que construye aplicaciones completas diseñando con el usuario como centro. Vivo en Tucumán, Argentina, estoy terminando mi carrera en la UTN-FRT mientras trabajo como desarrollador freelance.`,
  `Lo que me diferencia es que no solo escribo código, diseño la experiencia antes de construirla. Los clientes obtienen una solución completa, no solo un conjunto de funcionalidades.`,
  `Trabajo principalmente con React, Node.js y Astro, y llevo las apps a mobile con Capacitor. Del lado del diseño, Figma es mi herramienta preferida.`,
  `Mi proceso empieza por entender las necesidades del usuario antes de nada, Utilizando la metodología design sprint trabajo en ciclos cortos con feedback constante, para que los clientes vean progreso real desde la primera semana.`,
  `Estudio en la UTN, Facultad Regional Tucumán. Empecé a programar de forma autodidacta alrededor de 2020 y desde entonces combino la carrera con el estudio por mi cuenta.`,
  `Mi objetivo es conseguir mi primer trabajo como Desarrollador Junior Full Stack y seguir creciendo profesionalmente.`,
  `Disponible para proyectos freelance y colaboraciones.`,
]

const About = () => {
  return (
    <div className='about-container'>
      <div>
        <p className='about-title'>Sobre mí </p><ArrowDown color='#9ee3f0' size={65} />
      </div>
      <article className="description">
        {paragraphs.map((paragraph, index) => (
          <p className='about-description' key={index}>
            {paragraph}
          </p>
        ))}
      </article>

      <Link className='contact-button' to='/contact'>Hablemos</Link>
    </div>
  )
}

export default About