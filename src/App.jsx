import './App.css';
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faZ } from "@fortawesome/free-solid-svg-icons/faZ"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const App = () => {
  return (
      <div>
          <header>
              <div className="container">
                  <FontAwesomeIcon icon={faZ} />
                  <ul>
                      <li>About</li>
                      <li>Skills</li>
                      <li>Projects</li>
                      <li>Contacts</li>
                  </ul>
                  <div className="controls">
                      <FontAwesomeIcon icon={faGlobe} />
                      <FontAwesomeIcon icon={faSun} />
                  </div>
              </div>
          </header>
          <section className="one">
            <div className="container">
              <div className="circle"></div>
              <div className="line"></div>
              <h4>Hello my name is Zakaria, i am a</h4>
              <h1>FULL-STACK DEVELOPPER</h1>
            </div>
          </section>
      </div>
  );
}
export default App