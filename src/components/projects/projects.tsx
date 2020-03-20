import React, { useState } from "react";
import projectsStyle from "./projects.module.scss";
import Modal from "../shared/modal";
import { PROJECTS } from "../../assets/projects/my-projects";
import Project from "./component/project";

export default function Projects() {
  const [projectNumber, setProjectNumber] = useState<number>(0);

  const nextProject = (side: string) => {
    let nextProjectNumber = projectNumber;
    if (side === "r") nextProjectNumber++;
    else {
      nextProjectNumber--;
      if (nextProjectNumber < 0) nextProjectNumber = PROJECTS.length - 1;
    }
    const newSelectedProject = nextProjectNumber % PROJECTS.length;
    setProjectNumber(newSelectedProject);
  };
  return (
    <div>
      <Modal title="projects">
        <div className={projectsStyle.Projects}>
          <p className={projectsStyle.Arrow} onClick={() => nextProject("l")}>
            &#10094;
          </p>
          <Project project={PROJECTS[projectNumber]} />
          <p className={projectsStyle.Arrow} onClick={() => nextProject("r")}>
            &#x276f;
          </p>
        </div>
      </Modal>
    </div>
  );
}
