import profileData from "../profileData";

const skills = profileData.skills;

export default function HeroSubtitle() {
  let skillsText = "";
  const skillsList = skills.map((skill) => (skillsText = skill + ". "));

  return (
    <div className="box">
      <h2>{skillsList}</h2>
    </div>
  );
}
