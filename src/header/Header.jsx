import { useState } from 'react';
import './Header.css';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faZ } from '@fortawesome/free-solid-svg-icons/faZ';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [mode, setMode] = useState(false);
  const [lang, setLang] = useState({ lang: 'EN', list: false });
  return (
    <header>
      <div className="container">
        <div className="logo">
          <FontAwesomeIcon icon={faZ} />
        </div>
        <div
          className={`menu-bar ${menu ? 'active' : ''}`}
          onClick={() => setMenu(!menu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`${menu ? 'active' : ''}`}>
          <ul className="navigation">
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
          <ul className="settings">
            <li className="lang">
              <div onClick={() => setLang({ ...lang, list: !lang?.list })}>
                <span>{lang?.lang}</span>
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <ul className={`${lang?.list ? 'active' : 'passive'}`}>
                <li
                  onClick={() => setLang({ list: !lang?.list, lang: 'عربي' })}
                >
                  العربية
                </li>
                <li onClick={() => setLang({ list: !lang?.list, lang: 'EN' })}>
                  English
                </li>
                <li onClick={() => setLang({ list: !lang?.list, lang: 'FR' })}>
                  Français
                </li>
                <li onClick={() => setLang({ list: !lang?.list, lang: 'DE' })}>
                  Deutsch
                </li>
              </ul>
            </li>
            <li onClick={() => setMode(!mode)}>
              {mode ? (
                <FontAwesomeIcon icon={faSun} />
              ) : (
                <FontAwesomeIcon icon={faMoon} />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
