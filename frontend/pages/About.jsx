import React from "react";
import "../styles/About.css"; // Import the CSS file

const About = () => {
  return (
    <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
            <div className="about-text">
              {/* Optional introductory text */}
              <h1 className="animated animated-text">
                <span className="mr-2">Hey, I'm</span>
                <br></br>
                <div className="animated-info">
                  <span className="animated-item">Sai Siddeswar </span>
                  <span className="animated-item">Full Stack Developer</span>
                </div>
              </h1>

              <p>
              I am a passionate Full-Stack Developer from RVRJC College with hands-on experience in both front-end and back-end technologies. I have completed internships as a Web Developer at RJNEST, an incubator center, and as a Software Tester at NIT Warangal. These experiences have allowed me to develop strong technical and problem-solving skills.

In addition to my internships, I have won two hackathons, which has further honed my ability to think creatively and solve problems efficiently. I am a quick learner with a knack for adapting to new challenges, and I approach problems from multiple perspectives to find the best solution.

I am excited to continue building my skills and contribute to impactful projects.
              </p>
              <div className="custom-btn-group mt-4">
                <a
                  href="https://drive.google.com/file/d/10JfKPj9VteGeio2oZ4D75a_Z1wFp0U8-/view?usp=sharing"
                  className="btn mr-lg-2 custom-btn"
                >
                  <i className="uil uil-file-alt"></i> Download Resume
                </a>
                <a href="https://bsugandhi.github.io/#contact" className="btn custom-btn custom-btn-bg custom-btn-link">
                  Drop a message
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12">
            <div className="about-image svg">
              <img
                src="../public/sai.jpg"
                className="img-fluid undraw-img"
                alt="svg image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
