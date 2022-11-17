import "./Onefile.css"

function NewSkillForm() {
    return (
        <div>
        <form className="NewSkillForm">
        <label for="skill">Skill</label>
        <input className="input" type="text" name="skill"></input>
        <label for="Level">Level</label>
        <select className="select" name="level">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    </select>
    <button type="submit">ADD SKILL</button>
        </form>
        </div>
    

    )
}

export default NewSkillForm;