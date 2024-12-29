export const projects = [
  {
    title: "NTUEE LightDance",
    highlight: "",
    time: "Jan. 2024 - Mar. 2024",
    link: [
      { text: "github", url: "https://github.com/NTUEELightDance/LightDance-Editor" },
      { text: "youtube", url: "https://youtube.com/@ntueelightdance6849?feature=shared" },
      { text: "video", url: "https://www.youtube.com/watch?v=ZYaDQQLl05Y" },
    ],
    content: [
      "A renowned annual event in NTUEE Night. We developed a web-based editor for the light dance performance. The editor allows users to design the light dance performance by dragging and dropping the light patterns. The editor also provides a preview function to simulate the performance. I was responsible for part of the backend.",
    ],
    tags: ["Rust", "TypeScript"]
  },
  {
    title: "Robot Vacuum",
    highlight: "TAs' award",
    time: "Apr. 2023 - Jun. 2023",
    link: [
      { text: "github", url: "https://github.com/CarCarGroup05/RobotVacuum" },
      { text: "video", url: "https://drive.google.com/file/d/1uKcAOxdOzR3wV2w1l4O7U7kiejziHNuA/view?usp=drive_link" },
      { text: "report", url: "https://drive.google.com/file/d/1oDNosDyCHkphb0QrKuw6S_bEPcf_om2Z/view?usp=drive_link" },
    ],
    content: [
      "NTUEE 112-2 Cornerstone EECS Design and Implementation Class final project. Due to this aging society, we intended to develop a robot vacuum to care for senior citizens. It has the ability not only to clean the floor but also to detect whether a senior citizen have fallen using a Pi camera and a google ML model(MediaPipe).",
    ],
    tags: ["Raspberry Pi4", "Pi Camera", "Arduino", "MediaPipe", "Line Notify", "C++", "Python", "App Inventor"]
  },
  {
    title: "VMKS",
    highlight: "",
    time: "Jun. 2023 - now",
    link: [
      { text: "github", url: "https://github.com/ChenBingWei1201/VMKS-Website" },
    ],
    content: [
      "NTUEE Virtual Maker Space (VMKS) is a website that helps admins in Maker Space manage the equipment and the lending of the equipment from students in our department."
    ],
    tags: ["TypeScript", "React", "Apollo Graphql", "PostgreSQL"]
  },
  {
    title: "Dactyl Manuform Keyboard",
    highlight: "",
    time: "Jul. 2024 - Aug. 2024",
    link: [
      { text: "ref-1", url: "https://medium.com/swlh/complete-idiot-guide-for-building-a-dactyl-manuform-keyboard-53454845b065"},
      { text: "ref-2", url: "https://docs.qmk.fm/"},
      {text: "image", url: "https://drive.google.com/file/d/1fxI3V_D8yuzRquAFQCt-YlxhQiGqq-Ey/view?usp=sharing"}
    ],
    content: [
      "It was a small project in my department in the summer break. It took me almost two months to built a Dactyl Manuform Keyboard with a 3D printer and programmed it with QMK firmware."
    ],
    tags: ["3D Printing", "QMK", "Fusion 360"]
  },
  {
    title: "threads_scraper",
    highlight: "",
    time: "Dec. 2024",
    link: [
      { text: "github", url: "https://github.com/ChenBingWei1201/threads_scraper"},
      { text: "pypi", url: "https://pypi.org/project/threads-scraper/"},
    ],
    content: [
      "A Python package for scraping Threads posts. It can scrape the posts by the given keywords and save the posts to a csv file."
    ],
    tags: ["Python", "Selenium", "ChromeDriver"]
  },
  {
    title: "ML Final Project",
    highlight: "",
    time: "Oct. 2024 - Dec. 2024",
    link: [
      { text:"class-website", url: "https://www.csie.ntu.edu.tw/~htlin/course/ml24fall/"},
      { text: "rule", url: "https://www.csie.ntu.edu.tw/~htlin/course/ml24fall/final/final.pdf" },
      { text: "report", url: "https://drive.google.com/file/d/1a_QjqrQdfsYdkfhr8WQSGK2mDNxc7vtR/view?usp=sharing" },
    ],
    content: [
      "It is a machine learning final project at Machine Learning, Fall 2024 in NTUCSIE. It is a prediction project that uses at least 4 machine learning methods to predict the winner of baseball games. I was responsible for the XGBoost model."
    ],
    tags: ["Python", "XGBoost", "Scikit-learn"]
  },
  {
    title: "MedicationTrackingApp",
    highlight: "",
    time: "Dec. 2024",
    link: [
      { text: "github", url: "https://github.com/ChenBingWei1201/MedicationTrackingApp" },
      { text: "report", url: "https://drive.google.com/drive/folders/16iHki0Dm4yHXm4xOsHz8CBZsnXuHVqFX?usp=sharing" }
    ],
    content: [
      "This is the final project of Electrical Engineering Lab (Networking and Multimedia) in NTUEE. We use MediaPipe to track the user's medication intake with Pi cam and store the data into Supabase. We also build this app with React Native Expo Router to display the user's medication history and remind the user to take their medication between the time intervals he/she sets. I was responsible for the full-stack development of this app."
    ],
    tags: ["Expo", "Supabase", "MediaPipe", "Raspberry Pi"]
  }
  // {
  //   title: "",
  //   highlight: "",
  //   time: "",
  //   link: [
  //     { text: "", url: "" },
  //   ],
  //   content: [
  //     ``,
  //   ],
  //   tags: []
  // },
];
