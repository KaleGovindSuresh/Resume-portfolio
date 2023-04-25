import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import EducationDetails from "./pages/EducationDetails EducationDetails";
import PageNotFound from "./pages/PageNotFound";
import ProfileDetails from "./pages/ProfileDetails";
import Navbar from "./components/Navbar";
import ProjectDisplay from "./pages/ProjectDisplay";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/education-details" element={<EducationDetails />} />
          <Route path="/profile-details" element={<ProfileDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
