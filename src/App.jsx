import About from "./about/About";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import "./index.css";
// https://leetcode-api-faisalshohag.vercel.app/zakariaelkhalfaoui
const App = () => {
  return (
  <div>
    <Header />
    <Hero />
    <About />
    <details>
      <summary>List</summary>
      <p>ONE</p>
      <p>TWO</p>
      <p>THREE</p>
      <p>FOUR</p> 
    </details>
  </div>
  );
};
export default App;
