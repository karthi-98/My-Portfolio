import "./App.css";

import Aboutsite from "./Components/About Site/Aboutsite";
import Education from "./Components/Education/Education";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import TopBar from "./Components/Topbar/TopBar";

function App() {
  return (
    <div className="">
      <TopBar />
      <Navigation />
      <Home />
      <Skills />
      <Projects />
      <Education />
      {/* <Aboutsite /> */}
      <Footer />
    </div>
  );
}

export default App;
