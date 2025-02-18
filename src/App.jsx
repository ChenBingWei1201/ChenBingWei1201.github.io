import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PersonalInfo from "./components/personalInfo";
import Education from "./components/education";
import Experiences from "./components/experiences";
import Skills from "./components/skills";
import Footer from "./components/footer";

import { personalInfo } from "./data/personal_info";
import { education } from "./data/education";
import { projects } from "./data/experiences/projects";
import { competitions } from "./data/experiences/competitions";
import { skills } from "./data/skills";
import { extracurriculars } from "./data/experiences/extracurriculars";

function App() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/en" />} />
          <Route
            path="/en"
            element={
              <>
                <PersonalInfo data={personalInfo("/en")} />
                <Education title="Education" data={education("/en")} />
                <Experiences title="Competitions" data={competitions("/en")} />
                <Experiences title="Projects" data={projects("/en")} />
                <Experiences
                  title="Extracurriculars"
                  data={extracurriculars("/en")}
                />
                <Skills title="Technical Skills" data={skills} />
              </>
            }
          />
          <Route
            path="/zh"
            element={
              <>
                <PersonalInfo data={personalInfo("/zh")} />
                <Education title="教育程度" data={education("/zh")} />
                <Experiences title="比賽經歷" data={competitions("/zh")} />
                <Experiences title="專案" data={projects("/zh")} />
                <Experiences title="擔任過" data={extracurriculars("/zh")} />
                <Skills title="使用之技術" data={skills} />
              </>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
