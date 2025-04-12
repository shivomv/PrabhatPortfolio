import React from "react";
import "./TechSkills.css";

const techSkillsData = [
  { name: "Python", percentage: 85 },
  { name: "Django", percentage: 65 },
  { name: "JavaScript", percentage: 80 },
  { name: "Node.js", percentage: 75 },
  { name: "React.js", percentage: 60 },
  { name: "MySQL", percentage: 85 },
  { name: "C Programming", percentage: 70 },
  { name: "DSA", percentage: 65 },
  { name: "Github", percentage: 50 },
];

const TechSkills = ({ theme }) => {
  const getColor = (percent) => {
    if (percent >= 85) return "linear-gradient(to right, #00c853, #b2ff59)";
    if (percent >= 70) return "linear-gradient(to right, #ff9100, #ffea00)";
    if (percent >= 50) return "linear-gradient(to right, #ff3d00, #ff9100)";
    return "linear-gradient(to right, #d32f2f, #f44336)";
  };

  return (
    <div
      className="tech-skills-container"
      style={{ backgroundColor: theme.body }}
    >
      <h2 className="tech-skills-heading" style={{ color: theme.text }}>
        Technical Skills
      </h2>
      <div className="tech-skills-grid">
        {techSkillsData.map((skill, index) => (
          <div className="tech-skill-card" key={index}>
            <div className="tech-skill-name" style={{ color: theme.text }}>
              {skill.name}
            </div>
            <div className="tech-progress-bar">
              <div
                className="tech-progress"
                style={{
                  width: `${skill.percentage}%`,
                  "--bar-gradient": getColor(skill.percentage),
                }}
              >
                <span className="progress-label">{skill.percentage}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
