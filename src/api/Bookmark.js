import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const addBookmark = (userId, postId, successCb, errorCb) => {
  api
    .post("/bookmarks/add", { user_id: userId, post_id: postId })
    .then((response) => successCb(response))
    .catch((error) => errorCb(error));
};

export const removeBookmark = (userId, postId, successCb, errorCb) => {
  api
    .post("/bookmarks/remove", { user_id: userId, post_id: postId })
    .then((response) => successCb(response))
    .catch((error) => errorCb(error));
};
