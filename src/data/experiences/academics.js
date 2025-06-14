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
      "This is a machine learning final project at Machine Learning, Fall 2024 at NTUCSIE. It is a prediction project that uses at least 4 machine learning methods to predict the winner of baseball games. I was responsible for the XGBoost model.",
    ],
    tags: ["Python", "XGBoost", "Scikit-learn"],
  },
  {
    title: "Computer Vision Final Project",
    highlight: "",
    time: "May. 2025 - June. 2025",
    link: [
      {
        text: "class-website",
        url: "http://media.ee.ntu.edu.tw/courses/cv/25S/",
      },
      {
        text: "github",
        url: "https://github.com/ChenBingWei1201/ComputerVisionFinalProject",
      },
      {
        text: "report",
        url: "https://drive.google.com/file/d/144oRlS8njlkp5STMfdhdVxAfb2Yuu--h/view?usp=sharing"
      }
    ],
    content: [
      "This is the Microsoft 3D reconstruction computer vision final project. In this project, we present a training-free, universal 3D reconstruction pipeline tailored to the 7-Scenes RGB-D dataset. Rather than relying on learned models or pre-trained networks, our approach stitches together established geometric and photometric techniques—keyframe selection, bilateral depth filtering, feature-based pose estimation (SIFT + PnP), and multi-scale ICP refinement—into a single, end-to-end framework. I was responsible for the whole codebase.",
    ],
    tags: ["Python", "3D Reconstruction"],
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
  {
    title: "計算機視覺期末專案",
    highlight: "",
    time: "2025 年 5 月 - 2025 年 6 月",
    link: [
      {
        text: "課程網站",
        url: "http://media.ee.ntu.edu.tw/courses/cv/25S/",
      },
      {
        text: "github",
        url: "https://github.com/ChenBingWei1201/ComputerVisionFinalProject",
      },
      {
        text: "報告",
        url: "https://drive.google.com/file/d/144oRlS8njlkp5STMfdhdVxAfb2Yuu--h/view?usp=sharing",
      },
    ],
    content: [
      "這是 2025 年春季在台大電機系修讀的電腦視覺課程的期末專案。我們的專案旨在透過非訓練的 3D 重建方法來來重建 7-Scenes RGB-D 資料集。我們的方法結合了幾何和光學技術，包括關鍵幀選擇、雙邊深度過濾、基於特徵的位姿估計（SIFT + PnP）和多尺度 ICP 精細化，形成一個單一的端到端框架。我負責整個程式碼的設計。",
    ],
    tags: ["Python", "3D Reconstruction"],
  },
];

export const academics = (route) => {
  if (route === "/zh") {
    return academicsZh;
  } else {
    return academicsEn;
  }
};
