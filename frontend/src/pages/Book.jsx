import React from "react";
import { useNavigate } from "react-router-dom";

const Book = () => {
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
        <div className="content-container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-10 img-container">
                  <img
                    src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="book-detail-container">
                <div className="card">
                  <div className="card-body">
                    <h5>Title</h5>
                    <h3>Book title random text here</h3>
                    <div className="share-container">
                      <p>Share:</p>
                      <i className="fa-brands fa-instagram"></i>
                      <i className="fa-brands fa-twitter"></i>
                      <i className="fa-brands fa-facebook"></i>
                    </div>
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>ISBN</td>
                          <td>56789234332</td>
                        </tr>
                        <tr>
                          <td>Author</td>
                          <td>Thornton</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
