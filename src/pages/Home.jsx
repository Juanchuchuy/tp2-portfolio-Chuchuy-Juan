import HeroIntro from '../components/HeroIntro'

const careers = ['Desarrollador de Software', 'Diseñador UX/UI', 'Estudiante de UTN']

const Home = () => {
  return (
    <>
      <HeroIntro careers={careers} />

      <p className='home-intro'>
        Soy Juan, Desarrollador de Software y Diseñador UI/UX de Tucumán, Argentina. En este
        portfolio vas a encontrar quién soy, las tecnologías que uso, los proyectos que construí
        y cómo contactarme. Usá el menú para recorrerlo.
      </p>
    </>
  )
}

export default Home