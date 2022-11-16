import React from "react";
import  "../styles/Tags.css";


const Tags = (props) => {
  return (
    <ul className="categories">
      {props.tags.map((tag) => (
        <li className="categories-border" key={tag}>{tag}</li>
      ))}
    </ul>
  );
};

export default Tags;
