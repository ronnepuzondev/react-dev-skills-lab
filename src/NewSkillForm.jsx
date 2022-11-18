import { useState } from "react";
// import App from "./App";
// import skills from "./App";
// import setSkills from "./App";

function NewSkillForm({addSkill}) {
  const [newSkill, setNewSkill] = useState([{ name: "", level: 3 }]);

  const handleAddSkill = (event) => {
    event.preventDefault();
    addSkill(newSkill);
    setNewSkill({ name: "", level: 3 });
  };

//   const handleSkillChange = (event) => {
//     setNewSkill(event.target.value);
//   };

  const handleChange = (event) => {
    const updatedState = {...newSkill, [event.target.name]:event.target.value}
    setNewSkill(updatedState)
  }

  return (
    <div>
      <form className="NewSkillForm" onSubmit={handleAddSkill}>
        <label for="skill">Skill</label>
        <input
          value={newSkill}
          onChange={handleChange}
          className="input"
          type="text"
          name="name"
        ></input>
        <label for="Level">Level</label>
        <select className="select" name="level" onChange={handleChange}>
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
