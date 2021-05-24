import React from "react";
import CommentStyle from "./Comment.module.css";
export default function Comment(props) {
  return (
    <div className={CommentStyle.author}>
      <span className={CommentStyle.header}>
        <b>{props.comment.author}</b> <b className={CommentStyle.date}>20.05.2021</b>
      </span>
      <p>{props.comment.treść}</p>
    </div>
  );
}
