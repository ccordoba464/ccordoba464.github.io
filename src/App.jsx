import "./App.css";
import img from "/Camilo.jpg";
import resume from "/Resume.pdf";
import MornDashboard from "/MornDashboard.png";
import VGWebsite from "/VGWebsite.png";
import MedicalTracking from "/MedicalTracking.png";
import NBA from "/NBA.png";
import Z3 from "/Z3.png";
import TaskM from "/TaskM.png";
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
            <a
              href="https://www.linkedin.com/in/ccoresco/"
              target="_blank"
              className="a"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/ccordoba464"
              target="_blank"
              className="a"
            >
              Github
            </a>
            <a href={resume} target="_blank" className="a">
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
              <a
                href="https://sleepwebapp.wpi.edu/"
                target="_blank"
                className="project-a project"
              >
                <div className="project-display">
                  <img src={Z3} alt="" className="project-img" />
                </div>
                <div className="project-info">
                  <p className="project-title">Z3 Wellness Application </p>
                  <p className="project-desc">
                    Z3-Wellness is a comprehensive sleep management web-based
                    application that empowers college-age users to monitor their
                    sleep health and achieve better overall well-being.{" "}
                  </p>
                </div>
              </a>

              <a
                href="https://vowelgang.com/"
                target="_blank"
                className="project-a project"
              >
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
              </a>

              <a
                href="https://vowelgang.com/"
                target="_blank"
                className="project-a project"
              >
                <div className="project-display">
                  <img src={MedicalTracking} alt="" className="project-img" />
                </div>
                <div className="project-info">
                  <p className="project-title">Hospital Application</p>
                  <p className="project-desc">
                    We created a Java application for employees at Mass General
                    Brigham Hospital that simplified the creation and management
                    of different types of requests.
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Amitai5/final_project"
                target="_blank"
                className="project-a project"
              >
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
              </a>

              <a
                href="https://cerulean-sopapillas-3bb452.netlify.app/"
                target="_blank"
                className="project-a project"
              >
                <div className="project-display">
                  <img src={NBA} alt="" className="project-img" />
                </div>
                <div className="project-info">
                  <p className="project-title">NBA Memory Game</p>
                  <p className="project-desc">
                    Memory Game that uses various different NBA players for
                    cards. The goal of the game is to click all the cards
                    without clicking on the same one twice.n
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/ccordoba464/a3-camilo-cordobaescobar"
                target="_blank"
                className="project-a project"
              >
                <div className="project-display">
                  <img src={TaskM} alt="" className="project-img" />
                </div>
                <div className="project-info">
                  <p className="project-title">Task Manager</p>
                  <p className="project-desc">
                    Task Manager application that uses an express server, a
                    MongoDB database for persistent storage, and bootstrap
                    styling for the user interface.
                  </p>
                </div>
              </a>
            </div>
          </section>
        </main>
        <footer className="footer">
          <p>Find me online: </p>
          <div className="icon-container">
            <a
              href="https://www.linkedin.com/in/ccoresco/"
              target="_blank"
              className="a"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a
              href="https://github.com/ccordoba464"
              target="_blank"
              className="a"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
