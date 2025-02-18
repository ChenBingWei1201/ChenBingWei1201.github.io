export const education = (route) => {
  if (route === "/zh") {
    return [
      {
        time: "2022 - 現在",
        content: ["國立臺灣大學 電機工程學系 學士班"],
      },
    ];
  } else {
    return [
      {
        time: "2022 - Now",
        content: [
          "National Taiwan University B.S. Department of Electrical Engineering.",
        ],
      },
    ];
  }
};
