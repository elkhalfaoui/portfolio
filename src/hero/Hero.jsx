import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./hero.css";
import { faBootstrap, faJava, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLeaf, faPowerOff } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="hero">
        <div className="container">
            <div className="circle"></div>
            <div className="line"></div>
            <p>Hi, my name is Zakaria Elkhalfaoui</p>
            <h1>
                FULL-STACK
                <br />
                DEVELOPER
            </h1>
            <ul className="stack">
                <li>
                    <FontAwesomeIcon icon={faJava}/>
                    <span>Java</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faLeaf}/>
                    <span>Spring</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faPowerOff}/>
                    <span>Spring&nbsp;boot</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faJs}/>
                    <span>Java&nbsp;Script</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faReact}/>
                    <span>React.js</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faDatabase}/>
                    <span>MySQL</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faBootstrap}/>
                    <span>Bootstrap</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faSass}/>
                    <span>Sass</span>
                </li>
                
            </ul>
        </div>
    </div>
  )
}
export default Hero