import React from "react";
import aboutStyle from './about.module.scss';
import Modal from "../shared/modal";

export default function About() {
  return (
    <div className={aboutStyle.About}>
      <Modal title="about me">
        <p>
          I am a computer science graduate proficient in multiple coding
          languages,including JavaScript, C++, C, Java. <br />
          My university life was filled with side-project activities,
          competition participation, and project management.<br/> All these
          extracurricular activities brought not only awards and CV-friendly
          features, but more importantly, invaluable experiences, project
          management experience, and concepts I would not accept in another way. <br/>
          I founded the CS Entrepreneurship Club, organized the Ariel Hackathon
          2019 and I was the student coordinator of the Computer Science and
          Mathematics Department for 3 years
        </p>
      </Modal>
    </div>
  );
}
