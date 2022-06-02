import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "http://localhost:8000/toursDetails";

function ToursMain() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  // Remove tours
  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url);
      const toursInfo = await response.json();
      console.log("toursInfo======", toursInfo);
      setLoading(false);
      setTours(toursInfo);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="no_tours">
        <div className="title">
          <h2>No tours left.</h2>
        </div>
        <button className="primary_btn" type="button" onClick={fetchTours}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
}

export default ToursMain;
