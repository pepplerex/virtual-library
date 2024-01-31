import React from "react";
import { useNavigate } from "react-router-dom";

const HeroCard = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <div className="card hero-card">
        <div className="card-body">
          <div className="hero-text">
            <h3>Virtual Book Library</h3>
            <p>
              Browse from a variety of books from different authors and writers.
            </p>
            <div
              className="btn btn-default"
              onClick={() => navigate("/authors")}
            >
              See all Authors <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
