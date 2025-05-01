const projectsEn = [
  {
    title: "NTUEE LightDance",
    highlight: "",
    time: "Jan. 2024 - Mar. 2024",
    link: [
      {
        text: "github",
        url: "https://github.com/NTUEELightDance/LightDance-Editor",
      },
      {
        text: "yt channel",
        url: "https://youtube.com/@ntueelightdance6849?feature=shared",
      },
      { text: "video", url: "https://www.youtube.com/watch?v=ZYaDQQLl05Y" },
    ],
    content: [
      "A renowned annual event in NTUEE Night. We developed a web-based editor for the light dance performance. The editor allows users to design the light dance performance by dragging and dropping the light patterns. The editor also provides a preview function to simulate the performance. I was responsible for part of the backend.",
    ],
    tags: ["Rust", "TypeScript"],
  },
  {
    title: "Robot Vacuum",
    highlight: "TAs' award",
    time: "Apr. 2023 - Jun. 2023",
    link: [
      { text: "github", url: "https://github.com/CarCarGroup05/RobotVacuum" },
      {
        text: "video",
        url: "https://drive.google.com/file/d/1uKcAOxdOzR3wV2w1l4O7U7kiejziHNuA/view?usp=drive_link",
      },
      {
        text: "report",
        url: "https://drive.google.com/file/d/1oDNosDyCHkphb0QrKuw6S_bEPcf_om2Z/view?usp=drive_link",
      },
    ],
    content: [
      "NTUEE 112-2 Cornerstone EECS Design and Implementation Class final project. Due to this aging society, we intended to develop a robot vacuum to care for senior citizens. It has the ability not only to clean the floor but also to detect whether a senior citizen have fallen using a Pi camera and a google ML model(MediaPipe).",
    ],
    tags: [
      "Raspberry Pi4",
      "Pi Camera",
      "Arduino",
      "MediaPipe",
      "Line Notify",
      "C++",
      "Python",
      "App Inventor",
    ],
  },
  {
    title: "VMKS",
    highlight: "",
    time: "Jun. 2023 - now",
    link: [
      {
        text: "github",
        url: "https://github.com/NTUEE-VirtualMKS/VMKS-Website",
      },
    ],
    content: [
      "NTUEE Virtual Maker Space (VMKS) is a website that helps Maker Space administrators manage materials and equipment borrowing and also allows students in the department to apply for borrowing more conveniently. At first, I was only responsible for writing the backend, but later, I became the project leader, writing the entire end and leading a team of about four people.",
    ],
    tags: ["TypeScript", "React", "Apollo Graphql", "PostgreSQL"],
  },
  // {
  //   title: "Dactyl Manuform Keyboard",
  //   highlight: "",
  //   time: "Jul. 2024 - Aug. 2024",
  //   link: [
  //     {
  //       text: "ref-1",
  //       url: "https://medium.com/swlh/complete-idiot-guide-for-building-a-dactyl-manuform-keyboard-53454845b065",
  //     },
  //     { text: "ref-2", url: "https://docs.qmk.fm/" },
  //     {
  //       text: "image",
  //       url: "https://drive.google.com/file/d/1fxI3V_D8yuzRquAFQCt-YlxhQiGqq-Ey/view?usp=sharing",
  //     },
  //   ],
  //   content: [
  //     "It was a small project in my department in the summer break. It took me almost two months to built a Dactyl Manuform Keyboard with a 3D printer and programmed it with QMK firmware.",
  //   ],
  //   tags: ["3D Printing", "QMK", "Fusion 360"],
  // },
  {
    title: "threads_scraper",
    highlight: "",
    time: "Dec. 2024",
    link: [
      {
        text: "github",
        url: "https://github.com/ChenBingWei1201/threads_scraper",
      },
      { text: "pypi", url: "https://pypi.org/project/threads-scraper/" },
    ],
    content: [
      "A Python package for scraping Threads posts. It can scrape the posts by the given keywords and save the posts to a csv file.",
    ],
    tags: ["Python", "Selenium", "ChromeDriver"],
  },
  {
    title: "MedicationTracking App",
    highlight: "",
    time: "Dec. 2024",
    link: [
      {
        text: "github",
        url: "https://github.com/ChenBingWei1201/MedicationTrackingApp",
      },
      {
        text: "report",
        url: "https://drive.google.com/drive/folders/16iHki0Dm4yHXm4xOsHz8CBZsnXuHVqFX?usp=sharing",
      },
    ],
    content: [
      "This is the final project of Electrical Engineering Lab (Networking and Multimedia) in NTUEE. We use MediaPipe to track the user's medication intake with Pi cam and store the data into Supabase. We also build this app with React Native Expo Router to display the user's medication history and remind the user to take their medication between the time intervals he/she sets. I was responsible for the full-stack development of this app.",
    ],
    tags: ["Expo", "Supabase", "MediaPipe", "Raspberry Pi"],
  },
];

const projectsZh = [
  {
    title: "NTUEE LightDance",
    highlight: "",
    time: "2024 年 1 月 - 2024 年 3 月",
    link: [
      {
        text: "github",
        url: "https://github.com/NTUEELightDance/LightDance-Editor",
      },
      {
        text: "yt 頻道",
        url: "https://youtube.com/@ntueelightdance6849?feature=shared",
      },
      {
        text: "影片",
        url: "https://www.youtube.com/watch?v=ZYaDQQLl05Y",
      },
    ],
    content: [
      "這是台大電機之夜的年度盛事。我們開發了一款基於網頁的編輯器，用於光舞表演。該編輯器允許使用者透過拖放光影模式來設計表演，並提供預覽功能以模擬演出效果。我負責部分後端開發。",
    ],
    tags: ["Rust", "TypeScript"],
  },
  {
    title: "Robot Vacuum",
    highlight: "助教獎",
    time: "2023 年 4 月 - 2023 年 6 月",
    link: [
      {
        text: "github",
        url: "https://github.com/CarCarGroup05/RobotVacuum",
      },
      {
        text: "影片",
        url: "https://drive.google.com/file/d/1uKcAOxdOzR3wV2w1l4O7U7kiejziHNuA/view?usp=drive_link",
      },
      {
        text: "報告",
        url: "https://drive.google.com/file/d/1oDNosDyCHkphb0QrKuw6S_bEPcf_om2Z/view?usp=drive_link",
      },
    ],
    content: [
      "這是台大電機 112-2 期末專案（基石 EECS 設計與實作課程）。面對高齡化社會，我們設計了一款掃地機器人來照顧長者。該機器人不僅能夠清潔地板，還能透過 Pi 相機和 Google 的機器學習模型（MediaPipe）來偵測老人是否跌倒。",
    ],
    tags: [
      "Raspberry Pi 4",
      "Pi Camera",
      "Arduino",
      "MediaPipe",
      "Line Notify",
      "C++",
      "Python",
      "App Inventor",
    ],
  },
  {
    title: "VMKS",
    highlight: "",
    time: "2023 年 6 月 - 至今",
    link: [
      {
        text: "github",
        url: "https://github.com/ChenBingWei1201/VMKS-Website",
      },
    ],
    content: [
      "NTUEE Virtual Maker Space (VMKS) 是一個幫助Maker Space 管理員管理材料與器材借用網站，也讓系上同學能更方便申請借用。一開始只負責撰寫後端，但後來成為專案負責人，撰寫全端且帶領大約四人團隊。",
    ],
    tags: ["TypeScript", "React", "Apollo GraphQL", "PostgreSQL"],
  },
  // {
  //   title: "Dactyl Manuform 鍵盤",
  //   highlight: "",
  //   time: "2024 年 7 月 - 2024 年 8 月",
  //   link: [
  //     {
  //       text: "參考資料 1",
  //       url: "https://medium.com/swlh/complete-idiot-guide-for-building-a-dactyl-manuform-keyboard-53454845b065",
  //     },
  //     {
  //       text: "參考資料 2",
  //       url: "https://docs.qmk.fm/",
  //     },
  //     {
  //       text: "圖片",
  //       url: "https://drive.google.com/file/d/1fxI3V_D8yuzRquAFQCt-YlxhQiGqq-Ey/view?usp=sharing",
  //     },
  //   ],
  //   content: [
  //     "這是我在暑假期間於系上進行的一個小專案。我花了近兩個月的時間，使用 3D 列印技術製作了一款 Dactyl Manuform 鍵盤，並使用 QMK 韌體進行程式設計。",
  //   ],
  //   tags: ["3D 列印", "QMK", "Fusion 360"],
  // },
  {
    title: "threads_scraper",
    highlight: "",
    time: "2024 年 12 月",
    link: [
      {
        text: "github",
        url: "https://github.com/ChenBingWei1201/threads_scraper",
      },
      {
        text: "PyPI",
        url: "https://pypi.org/project/threads-scraper/",
      },
    ],
    content: [
      "這是一個用於爬取 Threads 貼文的 Python 套件。它能夠根據關鍵字搜尋貼文，並將其存儲到 CSV 檔案中。",
    ],
    tags: ["Python", "Selenium", "ChromeDriver"],
  },
  {
    title: "MedicationTracking App",
    highlight: "",
    time: "2024 年 12 月",
    link: [
      {
        text: "github",
        url: "https://github.com/ChenBingWei1201/MedicationTrackingApp",
      },
      {
        text: "報告",
        url: "https://drive.google.com/drive/folders/16iHki0Dm4yHXm4xOsHz8CBZsnXuHVqFX?usp=sharing",
      },
    ],
    content: [
      "這是台大電機十選二實驗（網路與多媒體）課程的期末專案。我們使用 MediaPipe 透過 Pi Cam 來追蹤使用者的用藥情況，並將數據存入 Supabase。我們還使用 React Native Expo Router 開發應用程式，以顯示使用者的用藥記錄，並在使用者設定的時間區間內提醒其服藥。我負責該應用的全端開發。",
    ],
    tags: ["Expo", "Supabase", "MediaPipe", "Raspberry Pi"],
  },
];

export const projects = (route) => {
  if (route === "/zh") {
    return projectsZh;
  } else {
    return projectsEn;
  }
};
