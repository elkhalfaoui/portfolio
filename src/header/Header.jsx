import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import {
  faFaceSmile,
  faMoon,
  faSun,
} from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
  const [mode, setMode] = useState(true);
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <FontAwesomeIcon icon={faFaceSmile} />
        </div>
        <ul className="menu">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <nav>
          <ul className="navigation-list">
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Discuss</li>
            <li>Interview</li>
          </ul>
          <ul className="settings">
            <li>
              <FontAwesomeIcon
                icon={mode ? faSun : faMoon}
                onClick={() => setMode(!mode)}
              />
            </li>
            <li>
              <FontAwesomeIcon icon={faGlobe} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;
