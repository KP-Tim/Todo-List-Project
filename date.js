exports.getDate = function () {
  const day = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  return day.toLocaleString("en-US", options);
};

exports.getDay = function () {
  const day = new Date();
  const options = { weekday: "long" };
  return day.toLocaleString("en-US", options);
};
