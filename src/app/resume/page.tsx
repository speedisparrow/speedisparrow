type section = {
  sectionTitle: string;
  organization: string[];
  position: string[];
  timeFrame: string[];
  desc: string[];
};
export default function Resume() {
  const entries: section[] = [
    {
      sectionTitle: "Education",
      organization: ["Cal Poly"],
      position: ["BS in Computer Science"],
      timeFrame: ["Expected Graduation 2030"],
      desc: ["GPA: 4.0"],
    },
    {
      sectionTitle: "Experience",
      organization: ["Hack4Impact", "OUSD Computer Repair"],
      position: ["Software Developer", "Tech Repair Intern"],
      timeFrame: ["September 2026 - Present", "June 2024 - July 2024"],
      desc: [
        "Working for a nonprofit organization to create meaningful software for clients in the San Luis Obispo area. Working on full stack development with Next.js, MongoDB, and React in small, student-led teams.",
        "Repaired 3000+ computers for students of the Oakland Unified School District over six weeks. Collaborated with fellow interns for efficient task distribution. Tracked and logged parts and computers in spreadsheets to monitor progress goals.",
      ],
    },
  ];
  return (
    <div>
      <h1 className="flex font-bold justify-center m-5">Resume</h1>
      <main>
        <a
          href="https://drive.google.com/file/d/1z9qZt2Ro2UuqS9HSeJ-PJqtrZ_BDXSmc/preview"
          target="_blank"
        >
          Download Resume
        </a>
          {entries.map((sectionIdx) => {
            return (
              <section key={sectionIdx.sectionTitle}>
                <h2>{sectionIdx.sectionTitle}</h2>
                <h3>{sectionIdx.organization}</h3>
                <h4>{sectionIdx.position}</h4>
                <div>
                  <p>
                    {sectionIdx.timeFrame}
                    {sectionIdx.desc}
                  </p>
                </div>
              </section>
            );
          })}
      </main>
    </div>
  );
}
