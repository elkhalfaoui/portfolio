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
        <ul className="about-content">
          <li>
            <span className="vs-line-number">1</span>
            <span className="vs-line-tab"></span>
            <span className="vs-blue">package</span>
            <span className="vs-white"> portfolio;</span>
          </li>
          <li>
            <span className="vs-line-number">2</span>
          </li>
          <li>
            <span className="vs-line-number">3</span>
            <span className="vs-line-tab"></span>
            <span className="vs-blue">public</span>
            <span className="vs-blue"> class</span>
            <span className="vs-light-green"> About</span>
            <span className="vs-yellow"> {'{'}</span>
          </li>
          <li>
            <span className="vs-line-number">4</span>
            <span className="vs-line-tab"></span>
            <span className="vs-tab"></span>
            <span className="vs-blue">public</span>
            <span className="vs-blue"> static</span>
            <span className="vs-light-green"> void</span>
            <span className="vs-light-yellow"> main</span>
            <span className="vs-pink"> {'('}</span>
            <span className="vs-light-green"> String</span>
            <span className="vs-blue"> {'[]'}</span>
            <span className="vs-white"> args</span>
            <span className="vs-pink"> {')'}</span>
            <span className="vs-pink"> {'{'}</span>
          </li>
          <li>
            <span className="vs-line-number">5</span>
            <span className="vs-line-tab"></span>
            <span className="vs-tab"></span>
            <span className="vs-tab"></span>
            <span className="vs-light-green">String</span>
            <span className="vs-soft-blue"> fullName</span>
            <span className="vs-white"> =</span>
            <span className="vs-orange"> "Elkhalfaoui Zakaria"</span>
            <span className="vs-white">;</span>
          </li>
          <li>
            <span className="vs-line-number">6</span>
            <span className="vs-line-tab"></span>
            <span className="vs-tab"></span>
            <span className="vs-tab"></span>
            <span className="vs-light-green">int</span>
            <span className="vs-soft-blue"> age</span>
            <span className="vs-white"> = 25;</span>
          </li>
          <li>
            <span className="vs-line-number">7</span>
            <span className="vs-line-tab"></span>
            <span className="vs-tab"></span>
            <span className="vs-tab"></span>
            <span className="vs-light-green">String</span>
            <span className="vs-soft-blue"> hobies</span>
            <span className="vs-blue"> {'[]'}</span>
            <span className="vs-white"> =</span>
          </li>
          <li>
            <span className="vs-line-number">8</span>
            <span className="vs-line-tab"></span>
            <span className="vs-tab"></span>
            <span className="vs-tab"></span>
            <span className="vs-light-green">String</span>
            <span className="vs-soft-blue"> diploma</span>
            <span className="vs-white"> =</span>
            <span className="vs-orange">
              {' '}
              "Technicien specialise en developpement web full-stack"
            </span>
            <span className="vs-white">;</span>
          </li>
          <li>
            <span className="vs-line-number">9</span>
            <span className="vs-line-tab"></span>
            <span className="vs-tab"></span>
            <span className="vs-tab"></span>
            <span className="vs-light-green">boolean</span>
            <span className="vs-soft-blue"> employed</span>
            <span className="vs-white"> =</span>
            <span className="vs-blue"> false</span>
            <span className="vs-white">;</span>
            <span className="vs-green"> // =&gt; unemployed :(</span>
          </li>
          <li>
            <span className="vs-line-number">10</span>
            <span className="vs-line-tab"></span>
            <span className="vs-tab"></span>
            <span className="vs-pink">{'}'}</span>
          </li>
          <li>
            <span className="vs-line-number">11</span>
            <span className="vs-line-tab"></span>
            <span className="vs-yellow">{'}'}</span>
          </li>
          {/* <li>
            <span>1</span> <span>public class</span> About {'{'}
          </li>
          <li>
            <span style={{ 'padding-right': '32px' }}>2</span>{' '}
            <span>public</span> <span>static</span> void main(String[] args){' '}
            {'{'}
          </li>
          <li>
            <span style={{ 'padding-right': '48px' }}>3</span>{' '}
            <span>String</span> name =<span> "Zakaria Elkhalfaoui"</span>;
          </li>
          <li>
            <span style={{ 'padding-right': '48px' }}>4</span> int age = 25;
          </li>
          <li>
            <span style={{ 'padding-right': '48px' }}>5</span>{' '}
            <span>String</span> diplome =
            <span>
              {' '}
              "Technicien Specialise en developpement web option full-stack"
            </span>
            ;
          </li>
          <li>
            <span style={{ 'padding-right': '48px' }}>6</span>{' '}
            <span>boolean</span> haveJob =<span> false</span>;
            <span style={{ color: 'green' }}> // sadly i am inemployed and broke :(</span>
          </li>
          <li>
            <span style={{ 'padding-right': '32px' }}>7</span>
            {'}'}
          </li>
          <li>
            <span>8</span>
            {'}'}
          </li> */}
        </ul>
      </div>
    </div>
  );
};
export default About;
