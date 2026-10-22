# Portfolio con aside con React Router DOM — Juan Ignacio Chuchuy Linares

Trabajo Práctico N°2 de la cátedra de Programación — UTN, Facultad Regional Tucumán.

- **Alumno:** Juan Ignacio Chuchuy Linares
- **Comisión:** 5

## Descripción

Continuación del portfolio del TP1, convertido en una aplicación **multipágina** con React y React Router DOM. Tiene un menú lateral (aside, ~30 % del ancho) que permanece visible durante la navegación y un área de contenido (main, ~70 %) que cambia según la ruta. En pantallas chicas el menú pasa a la parte superior.

| Página     | Ruta          |
| ----------- | ------------- |
| Inicio      | `/`         |
| Sobre mí   | `/about`    |
| Habilidades | `/skills`   |
| Proyectos   | `/projects` |
| Contacto    | `/contact`  |

En la página de proyectos, al hacer click en el título de un proyecto se despliega su descripción.

## Tecnologías utilizadas

- React 19
- Vite
- React Router DOM
- JavaScript (JSX)
- CSS3 (sin frameworks de estilos)
- [lucide-react](https://lucide.dev/) — íconos
- [typify-react](https://www.npmjs.com/package/typify-react) — efecto de máquina de escribir
- [Devicon](https://devicon.dev/) — íconos de tecnologías

## Instalación

```bash
git clone https://github.com/Juanchuchuy/tp2-portfolio-Chuchuy-Juan.git
cd tp2-portfolio-Chuchuy-Juan
npm install
```

## Ejecución en local

```bash
npm run dev
```

Levanta el servidor de desarrollo de Vite (por defecto en `http://localhost:5173`).

## Estructura

```
src/
├── components/
│   ├── Sidebar.jsx       # menú lateral con NavLink
│   ├── HeroIntro.jsx     # presentación de la página de inicio
│   ├── SkillCard.jsx     # tarjeta de una categoría de habilidades
│   └── ProjectCard.jsx   # tarjeta de un proyecto
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── App.jsx             
├── main.jsx            
└── index.css
```

## Repositorio

[https://github.com/Juanchuchuy/tp2-portfolio-Chuchuy-Juan](https://github.com/Juanchuchuy/tp2-portfolio-Chuchuy-Juan)

## Autor

Juan Ignacio Chuchuy Linares — [github.com/Juanchuchuy](https://github.com/Juanchuchuy)
