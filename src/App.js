
import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Experience from './Component/Experience';
import HomePage from './Component/HomePage';
import NavBar from './Component/NavBar';
import Portfolio from './Component/Portfolio';
import SocialLinks from './Component/SocialLinks';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>

      <SocialLinks/>

    </div>
  );
}

export default App;
