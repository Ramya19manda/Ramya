import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img
        src="https://media.istockphoto.com/id/1200188412/photo/wonderful-sunset-in-santa-marinella.jpg?s=612x612&w=is&k=20&c=L2lwq5ehhmFcW-yXBasiLVFet6liW5WNibDsWTPKAQg="
        alt="Sunset"
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">Write Title Here</h3>
        <p className="card-description">You can add description here...</p>
        <button className="card-button">Read More...</button>
      </div>
    </div>
  );
};

export default Card;
