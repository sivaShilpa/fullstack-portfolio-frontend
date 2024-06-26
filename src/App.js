import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Projects/Project"; // Fix the import here
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
      <div className="SWMessage">
        <p>Hi there, Please view this website on a device with more than 1200px width. Thank you!</p>
      </div>
    </>
  );
}

export default App;
