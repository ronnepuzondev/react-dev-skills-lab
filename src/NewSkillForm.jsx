import { useState } from "react";


function NewSkillForm({addSkill}) {
  const [newSkill, setNewSkill] = useState({ name: "", level: 3 });

  const handleAddSkill = (event) => {
    event.preventDefault();
    addSkill(newSkill);
    setNewSkill({ name: "", level: 3 });
  };


  const handleChange = (event) => {
    const updatedState = {...newSkill, [event.target.name]:event.target.value}
    setNewSkill(updatedState)
  }

  return (
    <div>
      <form className="NewSkillForm" onSubmit={handleAddSkill}>
        <label for="skill">Skill</label>
        <input
          value={newSkill.name}
          onChange={handleChange}
          className="input"
          type="text"
          name="name"
        ></input>
        <label for="level">Level</label>
        <select className="select" value={newSkill.level} name="level" onChange={handleChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button type="submit">ADD SKILL</button>
      </form>
    </div>
  );
}

export default NewSkillForm;