import { ReactNode } from "react";

type ResumeSection = {
  sectionTitle: string;
  resumeEntry: ResumeEntry[];
};

type ResumeEntry = {
  organization?: string;
  position?: string;
  timeFrame?: string;
  desc: ReactNode;
};

const entries: ResumeSection[] = [
  {
    sectionTitle: "Education",
    resumeEntry: [
      {
        organization: "Cal Poly",
        position: "BS in Computer Science",
        timeFrame: "Expected Graduation 2030",
        desc: (
          <p>
            GPA: 4.0 <br /> Relevant Coursework: CSC 1024
          </p>
        ),
      },
    ],
  },
  {
    sectionTitle: "Experience",
    resumeEntry: [
      {
        organization: "Hack4Impact",
        position: "Software Developer",
        timeFrame: "September 2026 - Present",
        desc: `Working for a nonprofit organization to create meaningful software for clients in the San Luis Obispo area. 
        Working on full stack development with Next.js, MongoDB, and React in small, student-led teams.`,
      },
      {
        organization: "OUSD Computer Repair",
        position: "Tech Repair Intern",
        timeFrame: "June 2024 - July 2024",
        desc: `Repaired 3000+ computers for students of the Oakland Unified School District over six weeks. 
        Collaborated with fellow interns for efficient task distribution. 
        Tracked and logged parts and computers in spreadsheets to monitor progress goals.`,
      },
    ],
  },
  {
    sectionTitle: "Projects",
    resumeEntry: [
      {
        organization: "This Website!",
        desc: (
          <p>
            Made a website from scratch using Next.js, React, and Typescript,
            with Tailwind CSS styling. Used reusable components and deployed
            with Vercel. Come check out out the{" "}
            <a
              className="text-blue-600 "
              href="https://github.com/speedisparrow/speedisparrow"
            >
              GitHub
            </a>
            !
          </p>
        ),
      },
    ],
  },
  {
    sectionTitle: "Skills",
    resumeEntry: [
      {
        desc: (
          <ul className="list-disc pl-5 list-outside">
            <li>Languages: C++, TypeScript, Python, HTML, CSS</li>
            <li>
              Frameworks &amp; Tools: React, Node.js, MongoDB, Git, Observable, Tailwind
            </li>
            <li>Multimedia production (familiar with Adobe Suite)</li>
          </ul>
        ),
      },
    ],
  },
];

export default function Resume() {
  return (
    <div>
      <main className="flex flex-col size-8/10 m-20 p-10 justify-center border-3 rounded-xl bg-white">
        <div className="grid grid-cols-3">
          <h1 className="font-bold text-3xl col-start-2 justify-self-center m-1">
            Resume
          </h1>
          <a
            href="https://drive.google.com/file/d/1z9qZt2Ro2UuqS9HSeJ-PJqtrZ_BDXSmc/preview"
            target="_blank"
            className="border rounded-xl p-2 place-content-end justify-self-end m-1 transition bg-gray-100
            hover:bg-gray-200 hover:scale-110"
          >
            Download Resume
          </a>
        </div>
        {entries.map((resumeSection) => {
          return (
            <section key={resumeSection.sectionTitle}>
              <h2 className="text-2xl underline">
                {resumeSection.sectionTitle}
              </h2>
              {resumeSection.resumeEntry.map((subSection) => {
                return (
                  <div key={subSection.organization + subSection.position}>
                    <h3 className="text-xl font-bold mt-2 mb-0.5">
                      {subSection.organization}
                    </h3>
                    <h4 className="italic">{subSection.position}</h4>
                    <div>
                      <p className="text-gray-500 font-bold">
                        {subSection.timeFrame}
                      </p>
                      {subSection.desc}
                    </div>
                  </div>
                );
              })}
              <br />
            </section>
          );
        })}
      </main>
    </div>
  );
}
