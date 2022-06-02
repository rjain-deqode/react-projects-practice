import React from "react";
import Tour from "./Tour";
import "./Tours.css";

const Tours = ({ tours, removeTours }) => {
  console.log("tours======", tours);
  return (
    <section className="tours_wrapper">
      <div className="title">
        <h2>Ours Tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tours_grid">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTours={removeTours} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
