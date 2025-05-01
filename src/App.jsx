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
import { skills } from "./data/skills";
import {
  projects,
  competitions,
  academics,
  extracurriculars,
} from "./data/experiences/index";

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
                <Experiences title="Academics" data={academics("/en")} />
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
                <Experiences title="學術研究" data={academics("/zh")} />
                <Skills title="使用之技術" data={skills} />
              </>
            }
          />
          <Route
            path="*"
            element={
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl text-red-500">
                  404 Not Found
                </h1>
              </div>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
