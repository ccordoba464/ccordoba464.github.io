import "./App.css";
import img from "/Camilo.jpg";
import resume from "/Resume.pdf";
import MornDashboard from "/MornDashboard.png";
import VGWebsite from "/VGWebsite.png";
import MedicalTracking from "/MedicalTracking.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <div>
        <header className="header">
          <div className="name">
            <h4 className="h4">Camilo Cordoba Escobar</h4>
          </div>
          <nav className="nav">
            <a href={resume} className="a">
              Projects
            </a>
            <a href={resume} className="a">
              Resume
            </a>
          </nav>
        </header>
        <main>
          <section className="section">
            <div className="about-container">
              <div className="img-container">
                <img src={img} alt="" className="img" />
              </div>
              <div className="about">
                <h2 className="h2">Hi, my name is Camilo.</h2>
                <p className="about-info">
                  I'm currently a senior at Worcester Polytechnic Institute with
                  a passion for developing innovative software solutions. With a
                  strong foundation in both front and back-end technologies, I
                  aim to contribute to challenging projects with impactful
                  outcomes.
                </p>
              </div>
            </div>
          </section>
          <section className="section light">
            <h2 className="section-title">Recent projects</h2>
            <div className="project-container">
              <div className="project">
                <div className="project-display">
                  <img src={VGWebsite} alt="" className="project-img" />
                </div>
                <div className="project-info">
                  <p className="project-title">Vowel Gang Website</p>
                  <p className="project-desc">
                    Created and manage a single page website for Vowel Gang, a
                    music group best known for their musical versatility. This
                    website was created using React (JavaScript, HTML, CSS).
                  </p>
                </div>
              </div>
              <div className="project">
                <div className="project-display">
                  <img src={MedicalTracking} alt="" className="project-img" />
                </div>
                <div className="project-info">
                  <p className="project-title">
                    Mass General Brigham Hospital Application
                  </p>
                  <p className="project-desc">
                    We created a Java application for employees at Mass General
                    Brigham Hospital that simplified the creation and management
                    of different types of requests.
                  </p>
                </div>
              </div>
              <div className="project">
                <div className="project-display">
                  <img src={MornDashboard} alt="" className="project-img" />
                </div>
                <div className="project-info">
                  <p className="project-title">Morning Dashboard</p>
                  <p className="project-desc">
                    The Morning Dashboard application displays the most
                    important information you'll need after waking up. We took
                    inspiration from Windows XP when choosing the background and
                    including Clippy!
                  </p>
                </div>
              </div>
              <div className="project">
                <div className="project-display">
                  <img src={img} alt="" className="project-img" />
                </div>
                <div className="project-info">
                  <p className="project-title">Project title</p>
                  <p className="project-desc">Project description</p>
                </div>
              </div>
              <div className="project">
                <div className="project-display">
                  <img src={img} alt="" className="project-img" />
                </div>
                <div className="project-info">
                  <p className="project-title">Project title</p>
                  <p className="project-desc">Project description</p>
                </div>
              </div>
              <div className="project">
                <div className="project-display">
                  <img src={img} alt="" className="project-img" />
                </div>
                <div className="project-info">
                  <p className="project-title">Project title</p>
                  <p className="project-desc">Project description</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <p>Find me online: </p>
          <div className="icon-container">
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
