import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import InputOption from "./InputOption";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const Post = forwardRef(({ name, description, message, profilePic }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={profilePic}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description} </p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="like" color="grey" />
        <InputOption Icon={ChatOutlinedIcon} title="comment" color="grey" />
        <InputOption Icon={ShareOutlinedIcon} title="share" color="grey" />
        <InputOption Icon={SendOutlinedIcon} title="send" color="grey" />
      </div>
    </div>
  );
});

export default Post;
