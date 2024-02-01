import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="container-fluid nav-container">
        <div></div>
        <div className="search-container">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light search-input"
              placeholder="Search by author, title, name"
              aria-label="Search by author, title, name"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
        <div className="nav-icons">
          <div
            className="icon-container"
            data-bs-toggle="modal"
            data-bs-target="#addBookModal"
          >
            <span>Add book</span>
            <i className="fa-solid fa-plus add-book-icon"></i>
          </div>
          <div
            className="icon-container"
            data-bs-toggle="modal"
            data-bs-target="#addAuthorModal"
          >
            <span>Add author</span>
            <i className="fa-solid fa-user add-book-icon"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
