import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://thingscareerrelated.files.wordpress.com/2018/03/lake2b.jpg"
          alt=""
        />
        {console.log(user)}
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user?.email?.[0].toUpperCase()}
        </Avatar>
        <h2>{user.name}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,403</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">245</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("programming")}
        {recentItem("reactjs")}
        {recentItem("jaja")}
      </div>
    </div>
  );
}

export default Sidebar;
