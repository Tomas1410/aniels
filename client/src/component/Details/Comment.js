import React from "react";
import CommentStyle from "./Comment.module.css";
import moment from "moment";
import 'moment/locale/pl'  // without this line it didn't work
moment.locale('pl')
export default function Comment(props) {
  return (
    <div className={CommentStyle.author}>
      <span className={CommentStyle.header}>
        <b>{props.comment.author}</b> <b className={CommentStyle.date}>{moment(props.comment.createdAt).utc().format('D MMMM YYYY, HH:mm:ss ')}</b>

      </span>
      <p>{props.comment.treść}</p>
    </div>
  );
}
