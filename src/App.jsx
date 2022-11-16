import "./Onefile.css"
import SkillList from "./SkillList"
import NewSkillForm from "./NewSkillForm"



function App() {
  const skills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ];
  return (
    <div>
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <NewSkillForm />
    </div>
    
  );
}

export default App;