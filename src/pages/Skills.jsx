import './Skills.css'
import { ArrowDown } from 'lucide-react'
import SkillCard from '../components/SkillCard'

const STATIC_CATEGORIES = ["Database"];

const STACK = {
  Frontend: [
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Astro', icon: 'devicon-astro-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
  ],
  Backend: [
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'PHP', icon: 'devicon-php-plain colored' },
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'C#', icon: 'devicon-csharp-plain colored' },
  ],
  Database: [
    { name: 'MySQL', icon: 'devicon-mysql-plain-wordmark colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  ],
  Tools: [
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original ' },
    { name: 'Capacitor', icon: 'devicon-capacitor-plain colored' },
  ],
}

const Skills = () => {
  return (
    <div className='skills'>
      <h2><ArrowDown color='#9ee3f0' size={65} />Habilidades</h2>
      <div className="skills-container">
        {Object.entries(STACK).map(([category, items]) => (
          <SkillCard
            key={category}
            category={category}
            items={items}
            isStatic={STATIC_CATEGORIES.includes(category)}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills