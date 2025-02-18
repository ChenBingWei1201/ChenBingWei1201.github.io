export const personalInfo = (route) => {
  if (route === "/zh") {
    return [
      ["電子信箱", "rain4030633@gmail.com"],
      ["居住地", "新北市，臺灣"],
      ["GitHub", "https://github.com/ChenBingWei1201"],
    ];
  } else {
    return [
      ["Email", "rain4030633@gmail.com"],
      ["Address", "New Taipei City, Taiwan"],
      ["GitHub", "https://github.com/ChenBingWei1201"],
    ];
  }
};
