import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from '../assets/zakaria.jpg'
import { faFigma, faHtml5, faJira, faLaravel } from '@fortawesome/free-brands-svg-icons';
import { faBook, faCameraRetro, faFileExcel, faFilePowerpoint, faFileWord, faFootball, faPersonWalkingLuggage, faSoccerBall } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <div className="circle"></div>
        <div className="line"></div>
        <h2>Skills</h2>
        <ul>
          <li className="one">
            <img src={profile} alt="" />
            <div className="info">
              <span>Lorem ipsum dolor sit amet.</span>
              <h3>
                Elkhalfaoui <br /> Zakaria
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                facere iusto consequuntur.
              </p>
            </div>
          </li>
          <li className="two">
            <div className="info">
              <p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing</span>
              </p>
              {/* <p></p> */}
            </div>
          </li>
          <li className="three">
            <h4>FRONT-END</h4>
            <FontAwesomeIcon icon={faHtml5} />
            <p>
              Front end developer with html , css, js and React-js as a
              framework
            </p>
          </li>
          <li className="four">
            <h4>BACK-END</h4>
            <FontAwesomeIcon icon={faLaravel} />
            <p>
              Back end developer with php , MySQL and Laravel as a framework
            </p>
          </li>
          <li className="five">
            <FontAwesomeIcon icon={faFigma} />
            <p>Love to design sketches in figma</p>
          </li>
          <li className="six">
            <h4>Hobbys and Personality</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCameraRetro} />
              </li>
              <li>
                <i className="fa-solid fa-basketball"></i>
                <FontAwesomeIcon icon={faSoccerBall} />
              </li>
              <li>
                <FontAwesomeIcon icon={faBook} />
              </li>
              <li>
                <FontAwesomeIcon icon={faPersonWalkingLuggage} />
              </li>
            </ul>
            <p>I am a passionat team worker self learner person</p>
          </li>
          <li className="seven">
            <FontAwesomeIcon icon={faJira} />
            <p>Controle the work flow with jira</p>
          </li>
          <li className="eight">
            <h4>Office 365</h4>
            <ul>
              <li>
                <FontAwesomeIcon icon={faFileExcel} />
              </li>
              <li>
                <FontAwesomeIcon icon={faFileWord} />
              </li>
              <li>
                <FontAwesomeIcon icon={faFilePowerpoint} />
              </li>
            </ul>
          </li>
          <li className="nein">
            <h2>
              Let's <br /> work <span>together.</span>
            </h2>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Skills;
