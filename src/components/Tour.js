import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTours }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="single_tour">
      <div className="image_wrapper">
        <img src={image} alt={name} />
      </div>
      <div className="tour_info">
        <h3>{name}</h3>
        <span>$ {price}</span>
      </div>
      <p className="tours_description">
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button className="read_more" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show less" : "Read more"}
        </button>
      </p>
      <button className="btn_remove" onClick={() => removeTours(id)}>Not interested</button>
    </div>
  );
};

export default Tour;
