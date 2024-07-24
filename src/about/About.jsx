import './About.css';
import Content from './Content';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="circle"></div>
        <div className="line"></div>
        <h2>About</h2>
        <ul>
          <li>
            <p>I AM A</p>
            <p>I AM A</p>
            <Content />
          </li>
          <li>
            <p>PASSIONATE</p>
            <p>PASSIONATE</p>
            <Content />
          </li>
          <li>
            <p>SOMETHING ELSE</p>
            <p>SOMETHING ELSE</p>
            <Content />
          </li>
          <li>
            <p>SOMETHING ELSE TWO</p>
            <p>SOMETHING ELSE TWO</p>
            <Content />
          </li>
          <li>
            <p>SOMETHING ELSE THREE TOO</p>
            <p>SOMETHING ELSE THREE TOO</p>
            <Content />
          </li>
        </ul>
      </div>
    </section>
  );
}
export default About