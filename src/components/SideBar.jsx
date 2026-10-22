import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const navItems = [
  { path: '/', label: 'Inicio' },
  { path: '/about', label: 'Sobre mí' },
  { path: '/skills', label: 'Habilidades' },
  { path: '/projects', label: 'Proyectos' },
  { path: '/contact', label: 'Contacto' },
]

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <nav>
        <ul className='menu-list'>
          {navItems.map((item) => (
            <li className='menu-item' key={item.path}>
              <NavLink to={item.path} end={item.path === '/'}>
                <strong>{item.label}</strong>
              </NavLink>
              <hr />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar