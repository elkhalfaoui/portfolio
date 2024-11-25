import './skills.css';
const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="circle"></div>
        <div className="line"></div>
        <h2>Skills</h2>
        <ul className="content">
          <li>HTML</li>
          <li>
            <div>CSS </div>
            <div>sass</div>
            <div>bootstrap</div>
          </li>
          <li>
            <div>JAVA SCRIPT</div>
            <div>jquery</div>
          </li>
          <li>
            <div>REACT.JS</div>
            <div>vite</div>
            <div>redux...</div>
          </li>
          <li>JAVA</li>
          <li>SPRING 6</li>
          <li>SPRING BOOT 3</li>
          <li>SQL/MYSQL</li>
          <li>NOSQL/MONGODB</li>
        </ul>
      </div>
    </div>
  );
};
export default Skills;
