import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import "./Widgets.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Matt enjoys his holiday", "This is trending, 69 readers")}
      {newsArticle("Covid: World Tour", "5023 readers")}
      {newsArticle("EURO 2020", "2023 readers")}
      {newsArticle("Solar Eclipse vs. Trump", "123 readers")}
    </div>
  );
}

export default Widgets;
