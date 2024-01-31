import React from "react";
import { useNavigate } from "react-router-dom";

const AuthorDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
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
              <div className="col-md-6 my-auto">
                <div className="row">
                  <div className="col-md-10 img-container">
                    <img
                      src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
                      alt=""
                      className=" img-fluid"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="book-detail-container">
                  <div className="card">
                    <div className="card-body">
                      <h5>Author Details</h5>
                      <table class="table">
                        <tbody>
                          <tr>
                            <td>Name</td>
                            <td>John doe</td>
                          </tr>
                          <tr>
                            <td>Gender</td>
                            <td>Male</td>
                          </tr>
                          <tr>
                            <td>Age</td>
                            <td>46</td>
                          </tr>
                          <tr>
                            <td>Country</td>
                            <td>Jamaica</td>
                          </tr>
                          <tr>
                            <td>Genre</td>
                            <td>Love</td>
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
    </div>
  );
};

export default AuthorDetails;
