import React, { createContext, useState, useContext } from "react";
import { addBookmark, removeBookmark } from "../api/Bookmark";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../App";

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleBookmarkToggle = async (post) => {
    if (!currentUser) {
      console.log("No user logged in, redirecting to login...");
      navigate("/login");
      return;
    }

    const userId = currentUser.uid;
    const isBookmarked = bookmarkedPosts.some((item) => {
      return item.id === post.id;
    });

    const action = isBookmarked ? removeBookmark : addBookmark;

    await action(
      userId,
      post.id,
      () => {
        if (isBookmarked) {
          setBookmarkedPosts(
            bookmarkedPosts.filter((item) => item.id !== post.id)
          );
        } else {
          setBookmarkedPosts([...bookmarkedPosts, post]);
        }
      },
      (error) => {
        console.error("Error toggling bookmark:", error);
      }
    );
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedPosts, handleBookmarkToggle }}>
      {children}
    </BookmarkContext.Provider>
  );
};
