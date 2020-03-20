import React from "react";
import projectStyle from "./project.module.scss";
import { PROJECTS } from "../../../assets/projects/my-projects";
import { FaGithub } from "react-icons/fa";

interface OwnProps {
  project: any;
}

const Project: React.FC<OwnProps> = props => {
  return (
    <div className={projectStyle.Project}>
      <div className={projectStyle.Title}>
        <p>{props.project.title}</p>
      </div>
      <div className={projectStyle.ImageANDTechnology}>
      <div className={projectStyle.Image}>
        <img src={props.project.img} alt={props.project.title} />
      </div>
      <div className={projectStyle.Technology}>
          <p>skills Acquired: </p>

          <ul>
            {props.project.technology.map((t: string) => (
              <li>{t} </li>
            ))}
          </ul>
        </div>
      </div>


      <div className={projectStyle.Description}>
        <p>{props.project.desc}</p>
      </div>

      <a
        className={projectStyle.Github}
        href={props.project.github}
        target="_blank"
      >
        <FaGithub size="1.5rem" color="white" />
      </a>
    </div>
  );
};

export default Project;