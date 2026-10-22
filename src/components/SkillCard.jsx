const SkillCard = ({ category, items, isStatic }) => {
  return (
    <div className="skill-card">
      <h3 className="skill-card-title">{category}</h3>
      {isStatic ? (
        <div className="skills-static">
          {items.map((lang) => (
            <div key={lang.name} className="skill">
              <i className={lang.icon}></i>
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="skills-carrousel">
          <div className="skills-track">
            {[...items, ...items, ...items].map((lang, i) => (
              <div key={i} className="skill">
                <i className={lang.icon}></i>
                <span>{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SkillCard