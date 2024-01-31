import React from "react";
import { useNavigate } from "react-router-dom";

const Authors = () => {
  const navigate = useNavigate();

  return (
    <div className="book-container">
      <div className="container">
        <div className="nav-book-container col-4 mx-auto">
          <div onClick={() => navigate("/")}>
            <i className="fa-solid fa-home"></i>
            <span>Home</span>
          </div>
        </div>
        <ul className="list-group authors-list mt-5">
          <h6>
            Authors <i className="fa-solid fa-award"></i>
          </h6>

          <li
            onClick={() => navigate(`/authors/1`)}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <img
                src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
                alt=""
              />
              A list item
            </div>
            <span>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            A second list item
            <span>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            A third list item
            <span>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Authors;
