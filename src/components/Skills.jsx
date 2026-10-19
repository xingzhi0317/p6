// No state: rendered from an array
const skills = [
  { name: 'I know how to cook traditional dishes', category: 'Cooking', level: 92 },
  { name: 'I am good at playing basketball', category: 'Sports', level: 95 },
  { name: 'I can earn money through various means', category: 'Life', level: 88 },
  { name: 'I can play the guitar', category: 'Music', level: 85 },
  { name: 'I am good at coding', category: 'Programming', level: 80 },
]

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2>Skills & Interests</h2>
        <div className="skills-grid">
          {skills.map(skill => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-header">
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <div className="skill-category">{skill.category}</div>
              <div className="skill-level">
                <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
