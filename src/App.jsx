import "./App.css";

function App() {
  return (
    <>
      <div>
        <header className="header">
          <div className="name">
            <h1>Camilo Cordoba Escobar</h1>
          </div>
          <nav className="nav">
            <ul>
              <li>Projects</li>
              <li>Resume</li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="section">
            <div className="about-container">
              <div className="img"></div>
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
          <section className="section">
            <h2 className="section-title">Recent projects</h2>
            <div className="project-container">
              <div className="project"></div>
              <div className="project"></div>
              <div className="project"></div>
              <div className="project"></div>
              <div className="project"></div>
              <div className="project"></div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <p>© 2023 by Camilo Cordoba Escobar. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
