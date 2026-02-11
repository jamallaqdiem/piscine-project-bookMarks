import { getData, setData } from "./storage.js";

function addBookMarks(userId, title, url, description) {
  const getPreviousData = getData(userId);
  let newBookMark = getPreviousData;
  if (getPreviousData === null) {
    newBookMark = [];
  }

  const idBookMark = Date.now();

  const formObject = {
    id: idBookMark,
    title: title,
    url: url,
    description: description,
    likes: 0,
    timestamp: idBookMark,
  };

  newBookMark.push(formObject);

  setData(userId, newBookMark);
  return newBookMark;
}

function sortBookMarks(userId,testData=undefined) {
  const getPreviousData = (testData === undefined) ? getData(userId) : testData

  if (getPreviousData === null || getPreviousData ===undefined) {
    return [];
  }

  const sortedData = [...getPreviousData].sort((a, b) => b.timestamp - a.timestamp);
  return sortedData;
}

function toggleLike(userId, idBookMark) {
  const getPreviousData = getData(userId);

  const getBookMark = getPreviousData.find(
    (bookMark) => bookMark.id === idBookMark,
  );
  if (getBookMark) {
    getBookMark.likes += 1;
  }

  setData(userId, getPreviousData);
  return getPreviousData;
}

export { addBookMarks, sortBookMarks, toggleLike };
