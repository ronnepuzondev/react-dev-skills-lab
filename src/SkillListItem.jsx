import "./Onefile.css"

function SkillListItem({ skill }) {
    return (
        <li className="SkillListItem">
            {skill.name} <p className='level'>LEVEL {skill.level}</p>
        </li>
    )
}

export default SkillListItem