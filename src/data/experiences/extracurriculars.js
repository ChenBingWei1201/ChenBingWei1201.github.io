const extracurricularsEn = [
  {
    title: "NTUEE Information Department Leader",
    highlight: "",
    time: "Aug. 2024 - Jun. 2025",
    link: [{ text: "github-org", url: "https://github.com/NTUEEInfoDep" }],
    content: [
      "NTUEE Information Department, affiliated with the Electrical Engineering Student Association, devoted our spare time to providing service to our whole department. We have developed many various websites, including NTUEECourseWebsite, MakeNTU main website, NTUEEWeekGame, and so on. All of them are for enhancing the convenience of every student in our department. I will become the leader in Aug. 2024 to teach the freshmen in our info. dep. to help them acquire the ability to build up a website so that they can work smoothly when they become sophomores.",
    ],
    tags: ["JavaScript", "TypeScript", "Node.js", "FullStack"],
  },
  {
    title: "VMKS Leader",
    highlight: "",
    time: "Jun. 2024 - Aug. 2024",
    link: [{ text: "github-org", url: "https://github.com/NTUEE-VirtualMKS" }],
    content: [
      "I am one of the full-stack developers on this team and will become the new leader in Jun. 2024 to finish the project.",
    ],
    tags: ["JavaScript", "TypeScript", "Node.js", "FullStack"],
  },
  {
    title: "Synality CTO",
    highlight: "",
    time: "Dec. 2024 - now",
    link: [
      { text: "github-org", url: "https://github.com/Synality" },
      { text: "website", url: "https://synality-mvp2.vercel.app" },
    ],
    content: [
      "Synality is a group that I founded with my friends. We are developing a web application called Synality that uses psychological testing to help college students from different departments make friends. With the built-in friends recommendation and chatroom, making friends becomes so easy! Befriend Synality, Be Friend Simply! I am responsible for the whole chatroom UI/UX and backend development.",
    ],
    tags: ["TypeScript", "Convex", "FullStack"],
  },
];

const extracurricularsZh = [
  {
    title: "NTUEE 資訊部部長",
    highlight: "",
    time: "2024 年 8 月 - 2025 年 6 月",
    link: [{ text: "github-org", url: "https://github.com/NTUEEInfoDep" }],
    content: [
      "NTUEE 資訊部隸屬於台大電機工程學系學生會，利用課餘時間為整個系上提供服務。我們開發了許多不同的網站，包括 NTUEE 課程網站、MakeNTU 主網站、NTUEE 電機週遊戲等，這些網站的目的都是為了提升系上同學的便利性。我將於 2024 年 8 月擔任部長，負責教授新生網頁開發技能，幫助他們在升上大二後能夠順利進行開發工作。",
    ],
    tags: ["JavaScript", "TypeScript", "Node.js", "FullStack"],
  },
  {
    title: "VMKS 負責人",
    highlight: "",
    time: "2024 年 6 月 - 2024 年 8 月",
    link: [{ text: "github-org", url: "https://github.com/NTUEE-VirtualMKS" }],
    content: [
      "我是這個團隊的全端開發者之一，並將於 2024 年 6 月成為新任領導人，負責完成這個專案。",
    ],
    tags: ["JavaScript", "TypeScript", "Node.js", "FullStack"],
  },
  {
    title: "Synality 技術長（CTO）",
    highlight: "",
    time: "2024 年 12 月 - 現在",
    link: [
      { text: "github-org", url: "https://github.com/Synality" },
      { text: "website", url: "https://synality-mvp2.vercel.app" },
    ],
    content: [
      "Synality 是我與朋友共同創立的團隊，我們正在開發一款名為 Synality 的網頁應用程式，透過心理測驗幫助來自不同科系的大學生結交朋友。內建的好友推薦與聊天室功能，讓交朋友變得更簡單！Befriend Synality, Be Friend Simply! 我負責整個聊天室的 UI/UX 設計與後端開發。",
    ],
    tags: ["TypeScript", "Convex", "FullStack"],
  },
];

export const extracurriculars = (route) => {
  if (route === "/zh") {
    return extracurricularsZh;
  } else {
    return extracurricularsEn;
  }
};
