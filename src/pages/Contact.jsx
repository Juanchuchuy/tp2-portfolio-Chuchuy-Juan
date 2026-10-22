import './Contact.css'
import { ArrowDown } from 'lucide-react'

const EMAIL = 'juanignaciolinares2013@gmail.com'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Juanchuchuy', icon: 'devicon-github-original' },
  { name: 'LinkedIn', href: '#', icon: 'devicon-linkedin-plain' },
  { name: 'Facebook', href: '#', icon: 'devicon-facebook-plain' },
]

const Contact = () => {
  return (
    <div className='contact-container'>
      <h2 className='contact-title'><ArrowDown color='#9ee3f0' size={65} />Contacto</h2>
      <p className='contact-text'>Disponible para proyectos freelance y colaboraciones.</p>

      <a className='contact-email' href={`mailto:${EMAIL}`}>{EMAIL}</a>

      <ul className='contact-social'>
        {socialLinks.map((social) => (
          <li key={social.name}>
            <a href={social.href} target='_blank' rel='noopener noreferrer'>
              <i className={social.icon}></i>
              <span>{social.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Contact