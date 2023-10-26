import moment from "moment";

export const getCurrentTime = () => {
  const date = moment().format("MMMM Do YYYY, h:mm:ss a");
  return `Currently, it is ${date}`;
};

export const getCurrentDay = () => {
  const day = moment().format("dddd");
  return `It is ${day} today`;
};
