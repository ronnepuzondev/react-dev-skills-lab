function SkillListItem({ skill }) {
    return (
        <li className="SKillListItem">
            {skill.name} - Level {skill.level}
        </li>
    )
}

export default SkillListItem