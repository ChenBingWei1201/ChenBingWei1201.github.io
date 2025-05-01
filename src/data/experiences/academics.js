const academicsEn = [
  {
    title: "ML Final Project",
    highlight: "",
    time: "Oct. 2024 - Dec. 2024",
    link: [
      {
        text: "class-website",
        url: "https://www.csie.ntu.edu.tw/~htlin/course/ml24fall/",
      },
      {
        text: "rule",
        url: "https://www.csie.ntu.edu.tw/~htlin/course/ml24fall/final/final.pdf",
      },
      {
        text: "report",
        url: "https://drive.google.com/file/d/1a_QjqrQdfsYdkfhr8WQSGK2mDNxc7vtR/view?usp=sharing",
      },
    ],
    content: [
      "It is a machine learning final project at Machine Learning, Fall 2024 at NTUCSIE. It is a prediction project that uses at least 4 machine learning methods to predict the winner of baseball games. I was responsible for the XGBoost model.",
    ],
    tags: ["Python", "XGBoost", "Scikit-learn"],
  },
];

const academicsZh = [
  {
    title: "機器學習期末專案",
    highlight: "",
    time: "2024 年 10 月 - 2024 年 12 月",
    link: [
      {
        text: "課程網站",
        url: "https://www.csie.ntu.edu.tw/~htlin/course/ml24fall/",
      },
      {
        text: "規則",
        url: "https://www.csie.ntu.edu.tw/~htlin/course/ml24fall/final/final.pdf",
      },
      {
        text: "報告",
        url: "https://drive.google.com/file/d/1a_QjqrQdfsYdkfhr8WQSGK2mDNxc7vtR/view?usp=sharing",
      },
    ],
    content: [
      "這是 2024 年秋季在台大資工系修讀的機器學習課程的期末專案。我們的專案旨在透過至少四種機器學習方法來預測棒球比賽的勝負。我負責 XGBoost 模型的研究。",
    ],
    tags: ["Python", "XGBoost", "Scikit-learn"],
  },
];

export const academics = (route) => {
  if (route === "/zh") {
    return academicsZh;
  } else {
    return academicsEn;
  }
};
