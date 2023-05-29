import "./App.css";

import Aboutsite from "./Components/About Site/Aboutsite";
import Education from "./Components/Education/Education";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import TopBar from "./Components/Topbar/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <Navigation />
      <Home />
      <Skills />
      <Projects />
      <Education />
      <Aboutsite />
    </>
  );
}

export default App;
