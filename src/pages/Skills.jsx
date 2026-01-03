export default function Skills() {
  const skills = [
    "React.js",
    "Node.js",
    "MySQL",
    "JavaScript",
    "Web3 / Ethers",
    "GST Accounting",
    "REST APIs",
  ];

  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
