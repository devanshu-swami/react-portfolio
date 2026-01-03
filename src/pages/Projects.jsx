export default function Projects() {
  const projects = [
    {
      name: "Crypto Wallet System",
      tech: "React, Node.js, Web3, MySQL",
    },
    {
      name: "Trading Website with Referral",
      tech: "React, Node.js, MySQL",
    },
    {
      name: "GST Accounting Software",
      tech: "React, Node.js, MySQL",
    },
  ];

  return (
    <section>
      <h2>Projects</h2>
      {projects.map((p, i) => (
        <div key={i}>
          <h3>{p.name}</h3>
          <p>{p.tech}</p>
        </div>
      ))}
    </section>
  );
}
