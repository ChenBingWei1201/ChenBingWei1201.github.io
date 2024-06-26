import PersonalInfo from "./components/personalInfo";
import Education from "./components/education";
import Experiences from "./components/experiences";
import Skills from "./components/skills";
import Footer from "./components/footer";
// import SplitLine from "./components/splitLine";

import { personalInfo } from "./data/personal_info";
import { education } from "./data/education";
import { projects } from "./data/experiences/projects";
import { competitions } from "./data/experiences/competitions";
import { skills } from "./data/skills";
import { extracurriculars } from "./data/experiences/extracurriculars";

function App() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {/*<div className="px-40 mx-auto">*/}
      <PersonalInfo data={personalInfo} />
      {/*<SplitLine width="11/12" weight="300" />*/}

      <Education data={education} />
      {/*<SplitLine width="11/12" weight="300" />*/}

      <Experiences title="Competitions" data={competitions} />
      {/*<SplitLine width="11/12" weight="300" />*/}

      <Experiences title="Projects" data={projects} />
      {/*<SplitLine width="11/12" weight="300" />*/}

      <Experiences title="Extracurriculars" data={extracurriculars} />
      {/*<SplitLine width="11/12" weight="300" />*/}

      <Skills data={skills} />
      {/*<SplitLine width="11/12" weight="300" />*/}

      {/*</div>*/}
      <Footer />
    </div>
  );
}

export default App;
