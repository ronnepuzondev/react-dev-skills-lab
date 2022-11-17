import SkillListItem from "./SkillListItem"
import "./Onefile.css"

function SkillList({ skills }) {
    const skillListItem = skills.map((skill, idx) => (
        <SkillListItem key={idx} skill={skill} />
    ));
    return <ul>{skillListItem}</ul>
    }

export default SkillList