import { ReactNode } from "react";

type Projects = {
  image: ReactNode;
  title: string;
  desc: string;
};
const projects: Projects[] = [
  {
    image: <p>IMAGE</p>,
    title: "peni",
    desc: "1",
  },
];
export default function Portfolio() {
  return (
    <div>
      {projects.at(0)?.image} {/*optional chaining due to strict typechecks*/}
    </div>
  );
}
