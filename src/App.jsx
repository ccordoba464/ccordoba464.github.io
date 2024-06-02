import "./App.css";
import img from "/Camilo.jpg";
import resume from "/CamiloResume.pdf";
import MornDashboard from "/MornDashboard.png";
import VG from "/VGs.png";
import MedicalTracking from "/MedicalTracking.png";
import NBA from "/NBA.png";
import Z3 from "/Z3.png";
import TaskM from "/TaskM.png";
import ChordPlay from "/ChordPlay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGitAlt,
  faHtml5,
  faJs,
  faReact,
  faPython,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faFile } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className=" min-h-screen flex flex-col bg-zinc-100 text-zinc-950">
      <header className="flex bg-zinc-200 h-20 justify-between items-center px-10 text-zinc-950">
        <h4 className="text-lg">Camilo Cordoba-Escobar</h4>
        <nav className="flex gap-5 items-center">
          <a
            href="https://www.linkedin.com/in/ccoresco/"
            target="_blank"
            className="no-underline hover:text-zinc-600"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
          </a>

          <a
            href="https://github.com/ccordoba464"
            target="_blank"
            className="no-underline hover:text-zinc-600"
          >
            <FontAwesomeIcon icon={faGithub} className="text-3xl" />
          </a>
          <a
            href={resume}
            target="_blank"
            className="no-underline hover:text-zinc-600"
          >
            <FontAwesomeIcon icon={faFile} className="text-3xl" />
          </a>
        </nav>
      </header>
      <main>
        <section className="flex items-center py-[100px] px-[100px]">
          <div className="w-[400px] flex items-center flex-shrink-0 mr-10">
            <img
              src={img}
              alt="Image of Camilo"
              className="w-full h-full rounded-[50%] object-cover overflow-hidden "
            />
          </div>
          <p className="flex flex-col ">
            <span className="text-7xl mb-4 font-bold">Hi, I'm Camilo.</span>
            <span className="text-3xl">
              An aspiring software engineer with a passion for creating software
              solutions that make a difference.
            </span>
          </p>
        </section>

        <section className="flex flex-col bg-zinc-200 p-16">
          <h1 className="font-bold text-4xl mb-10">My Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col rounded-md bg-zinc-100 p-4">
              <div>
                <FontAwesomeIcon icon={faGitAlt} className="text-7xl mb-2" />
              </div>
              <div className="font-bold text-2xl">Git</div>
              <div className="text-xl text-zinc-500">4 years</div>
            </div>
            <div className="flex flex-col rounded-md bg-zinc-100 p-4">
              <div>
                <FontAwesomeIcon icon={faHtml5} className="text-7xl mb-2" />
              </div>
              <div className="font-bold text-2xl">HTML/CSS</div>
              <div className="text-xl text-zinc-500">4 years</div>
            </div>
            <div className="flex flex-col rounded-md bg-zinc-100 p-4">
              <div>
                <FontAwesomeIcon icon={faPython} className="text-7xl mb-2" />
              </div>
              <div className="font-bold text-2xl">Python</div>
              <div className="text-xl text-zinc-500">3 years</div>
            </div>
            <div className="flex flex-col rounded-md bg-zinc-100 p-4">
              <div>
                <FontAwesomeIcon icon={faJs} className="text-7xl mb-2" />
              </div>
              <div className="font-bold text-2xl">JavaScript</div>
              <div className="text-xl text-zinc-500">2 years</div>
            </div>
            <div className="flex flex-col rounded-md bg-zinc-100 p-4">
              <div>
                <FontAwesomeIcon icon={faReact} className="text-7xl mb-2" />
              </div>
              <div className="font-bold text-2xl">React</div>
              <div className="text-xl text-zinc-500">2 years</div>
            </div>
            <div className="flex flex-col rounded-md bg-zinc-100 p-4">
              <div>
                <FontAwesomeIcon icon={faDatabase} className="text-7xl mb-2" />
              </div>
              <div className="font-bold text-2xl">PostgreSQL</div>
              <div className="text-xl text-zinc-500">2 years</div>
            </div>
            <div className="flex flex-col rounded-md bg-zinc-100 p-4">
              <div>
                <FontAwesomeIcon icon={faJava} className="text-7xl mb-2" />
              </div>
              <div className="font-bold text-2xl">Java</div>
              <div className="text-xl text-zinc-500">4 years</div>
            </div>
          </div>
        </section>

        <section className="flex flex-col p-16">
          <h1 className="font-bold text-4xl mb-10">Recent Projects</h1>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col items-center justify-between rounded-lg px-24 bg-zinc-800 hover:animate-bounce">
              <div className="flex w-full justify-between mt-10 mb-5 text-white">
                <div className="w-[50%]">
                  <div className="font-bold text-5xl mb-4">ChordPlay</div>
                  <div className="">
                    ChordPlay is a music collaboration web-based application
                    that assists artists on collaborating and sharing their work
                    with others to simplify the music-making process.
                  </div>
                </div>
              </div>
              <img
                src={ChordPlay}
                className="rounded-t-lg h-[500px] w-full bg-zinc-300 object-top object-cover overflow-hidden"
              />
            </div>
            <a href="https://sleepwebapp.wpi.edu/" target="_blank">
              <div className="flex flex-col items-center justify-between rounded-lg  px-24 bg-zinc-700 hover:animate-bounce">
                <div className="flex w-full justify-between mt-10 mb-5 text-white">
                  <div className="w-[50%]">
                    <div className="font-bold text-5xl mb-4">
                      sleepwebapp.wpi.edu
                    </div>
                    <div className="">
                      Z3-Wellness is a comprehensive sleep management web-based
                      application that empowers college-age users to monitor
                      their sleep health and achieve better overall well-being.
                    </div>
                  </div>
                </div>
                <img
                  src={Z3}
                  className="rounded-t-lg h-[500px] w-full bg-zinc-300 object-top object-cover overflow-hidden"
                />
              </div>
            </a>
            <a href="http://vowelgang.com/" target="_blank">
              <div className="flex flex-col items-center justify-between rounded-lg px-24 bg-zinc-800 hover:animate-bounce">
                <div className="flex w-full justify-between mt-10 mb-5 text-white">
                  <div className="w-[60%]">
                    <div className="font-bold text-5xl mb-4">vowelgang.com</div>
                    <div className="">
                      Created and manage a single page website for Vowel Gang, a
                      music group best known for their musical versatility. This
                      website was created using React (JavaScript, HTML, CSS).
                    </div>
                  </div>
                </div>
                <img
                  src={VG}
                  className="rounded-t-lg h-[500px] w-full bg-zinc-300 object-top object-cover overflow-hidden"
                />
              </div>
            </a>
          </div>
        </section>

        {false && (
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
                    sleep health and achieve better overall well-being.
                  </p>
                </div>
              </a>

              <a
                href="https://vowelgang.com/"
                target="_blank"
                className="project-a project"
              >
                <div className="project-display">
                  <img src={VG} alt="" className="project-img" />
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
                href="https://github.com/CS3733-C22-Team-E/MedicalTracking"
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
        )}
      </main>
      {false && (
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
      )}
    </div>
  );
}

export default App;
