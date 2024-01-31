import React from "react";
import { useNavigate } from "react-router-dom";

const Recents = () => {
  const navigate = useNavigate();
  return (
    <div className="recents-container mb-5">
      <h3>Recently Published</h3>

      <div className="row mt-5">
        <div className="col-md-3 book-card" onClick={() => navigate(`/book/1`)}>
          <img
            src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
            alt=""
            className="img-fluid grayscale"
          />
          <h3>Book title</h3>
          <p>Authrr name here</p>
          <div className="book-ratings">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>

        <div className="col-md-3 book-card">
          <img
            src="https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg"
            alt=""
            className="img-fluid grayscale"
          />
          <h3>Book title</h3>
          <p>Authrr name here</p>
          <div className="book-ratings">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>

        <div className="col-md-3 book-card">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1698210220"
            alt=""
            className="img-fluid grayscale"
          />
          <h3>Book title</h3>
          <p>Authrr name here</p>
          <div className="book-ratings">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>

        <div className="col-md-3 book-card">
          <img
            src="https://diybookcovers.com/wp-content/uploads/2023/07/scifi4thumb.jpg"
            alt=""
            className="img-fluid grayscale"
          />
          <h3>Book title</h3>
          <p>Authrr name here</p>
          <div className="book-ratings">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recents;
