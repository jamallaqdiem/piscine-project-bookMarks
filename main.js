import { getUserIds } from "./storage.js";
import { sortBookMarks, addBookMarks, toggleLike } from "./logic.js";
const userSelect = document.getElementById("user-select");
const bookmarksList = document.getElementById("bookmarks-list");
const noBookmarksMessage = document.getElementById("no-bookmarks-message");
const bookmarkForm = document.getElementById("bookmark-form");

function populateUserSelect() {
  const userIds = getUserIds();

  userIds.forEach((userId) => {
    const option = document.createElement("option");
    option.value = userId;
    option.textContent = `User ${userId}`;
    userSelect.appendChild(option);
  });
}

userSelect.addEventListener("change", () => {
  const userId = userSelect.value;
  if (!userId) {
    clearBookmarksList();
    toggleNoBookmarksMessage(true);
    return;
  }
  const bookmarks = sortBookMarks(userId);
  renderBookmarks(bookmarks);
});

function clearBookmarksList() {
  bookmarksList.innerHTML = "";
}

function toggleNoBookmarksMessage(show) {
  noBookmarksMessage.hidden = !show;
}

function renderSingleBookmark(bookmark) {
  const li = document.createElement("li");
  const article = document.createElement("article");

  const link = document.createElement("a");
  link.href = bookmark.url;
  link.textContent = bookmark.title;
  link.target = "_blank";

  const description = document.createElement("p");
  description.textContent = bookmark.description;

  const likeButton = document.createElement("button");
  likeButton.type = "button";
  likeButton.textContent = `❤️ ${bookmark.likes}`;

  const date = new Date(bookmark.timestamp).toLocaleString();
  const timeDisplay = document.createElement("small");
  timeDisplay.textContent = ` Added on: ${date}`;
  timeDisplay.style.display = "block";
  timeDisplay.style.color = "black";
  timeDisplay.style.margin = "10px";

  const copyButton = document.createElement("button");
  copyButton.type = "button";
  copyButton.textContent = `Copy Link`;
  copyButton.style.marginLeft = "100px";

  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(bookmark.url);
    const clearSentence = copyButton.textContent;
    copyButton.textContent = "Copied";
    setTimeout(
      () => (copyButton.textContent = clearSentence),

      3000,
    );
  });

  likeButton.addEventListener("click", () => {
    const userId = userSelect.value;
    const updatedBookmarks = toggleLike(userId, bookmark.id);
    renderBookmarks(updatedBookmarks);
  });

  article.appendChild(link);
  article.appendChild(description);
  article.appendChild(likeButton);
  article.appendChild(copyButton);
  article.appendChild(timeDisplay);

  li.appendChild(article);
  bookmarksList.appendChild(li);
}

function renderBookmarks(bookmarks) {
  clearBookmarksList();
  if (!bookmarks || bookmarks.length === 0) {
    toggleNoBookmarksMessage(true);
    return;
  }
  toggleNoBookmarksMessage(false);
  bookmarks.forEach((bookmark) => {
    renderSingleBookmark(bookmark);
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const userId = userSelect.value;

  if (!userId) {
    alert("Please select a user first");
    return;
  }

  const url = document.getElementById("url-input").value;
  const title = document.getElementById("title-input").value;
  const description = document.getElementById("description-input").value;

  addBookMarks(userId, title, url, description);

  const updatedBookmarks = sortBookMarks(userId);
  renderBookmarks(updatedBookmarks);

  bookmarkForm.reset();
}

bookmarkForm.addEventListener("submit", handleFormSubmit);

function init() {
  populateUserSelect();
}

init();
