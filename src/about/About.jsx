import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './about.css';
import { faJava, faJs } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="circle"></div>
        <div className="line"></div>
        <h2>About</h2>
        <ul className="about-lang">
          <li>
            <FontAwesomeIcon icon={faJava} />
            <span>About.java</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faJs} />
            <span>main.js</span>
          </li>
        </ul>
        <div className="about-content">
          <p>
            <span>1</span> <span>public class</span> About {'{'}
          </p>
          <p>
            <span style={{ 'padding-right': '32px' }}>2</span>{' '}
            <span>public</span> <span>static</span> void main(String[] args){' '}
            {'{'}
          </p>
          <p>
            <span style={{ 'padding-right': '48px' }}>3</span>{' '}
            <span>String</span> name =<span> "Zakaria Elkhalfaoui"</span>;
          </p>
          <p>
            <span style={{ 'padding-right': '48px' }}>4</span> int age = 25;
          </p>
          <p>
            <span style={{ 'padding-right': '48px' }}>5</span>{' '}
            <span>String</span> diplome =
            <span>
              {' '}
              "Technicien Specialise en developpement web option full-stack"
              "Technicien Specialise en developpement web option full-stack"
              "Technicien Specialise en developpement web option full-stack"
            </span>
            ;
          </p>
          <p>
            <span style={{ 'padding-right': '48px' }}>6</span>{' '}
            <span>boolean</span> haveJob =<span> false</span>;
            <span style={{ color: 'green' }}> // sadly i am inemployed and broke :(</span>
          </p>
          <p>
            <span style={{ 'padding-right': '32px' }}>7</span>
            {'}'}
          </p>
          <p>
            <span>8</span>
            {'}'}
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
