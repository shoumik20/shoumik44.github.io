import React from "react";
import "./Jsprojects.css";

const Projects = () => {
  return (
    <div id="projects" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 data-aos="fade-down">Projects</h2>
            <br />
          </div>
          <div className="col-sm-6" data-aos="fade-left">
            <p><strong>PlasmaPlus</strong></p>
            <p>Created a user-friendly web platform for blood donation opportunities using HTML, CSS, and JavaScript, delivering a visually appealing platform.</p>
            <p>Contributed to the development of the backend using PHP and MySQL, enabling users to browse and sign up for blood donation opportunities.</p>
            <p><em>June 2022 - December 2022</em></p>
          </div>
          <div className="col-sm-6" data-aos="fade-left">
            <p><strong>EduCast</strong></p>
            <p>Led a team of 3 developers in implementing and delivering Educast, a web platform for content creation and management, utilizing agile methodologies to ensure timely completion of milestones and successful project delivery.</p>
            <p>Collaborated with a team of developers to build the Educast platform using the MERN stack (MongoDB, Express, React, Node.js), allowing for seamless integration between the front-end and back-end.</p>
            <p>Implemented various features using MERN, including user authentication and authorization, content creation and management, and data analysis to improve the user experience and drive engagement.</p>
            <p><em>January 2023 - Present</em></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
