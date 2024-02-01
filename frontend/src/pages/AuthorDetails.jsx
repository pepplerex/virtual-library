import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./components/Loading";

const AuthorDetails = () => {
  const navigate = useNavigate();

  const [isloading, setisloading] = useState(true);

  const [author, setauthor] = useState([]);

  const api = import.meta.env.VITE_ENDPOINT;

  const { id } = useParams();

  useEffect(() => {
    const fetchauthor = async () => {
      const res = await fetch(`${api}/api/author/${id}`);
      const data = await res.json();
      setauthor(data);
      setisloading(false);
      return;
    };
    fetchauthor();
  }, []);

  return (
    <div>
      <div className="book-container">
        <div className="container">
          <div className="nav-book-container col-4 mx-auto">
            <div onClick={() => navigate("/authors")}>
              <i className="fa-solid fa-chevron-left"></i>
              <span>Back</span>
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
                      {isloading ? (
                        <Loading />
                      ) : (
                        <>
                          <h5>Author Details</h5>
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>Name</td>
                                <td>{author.name}</td>
                              </tr>
                              <tr>
                                <td>Gender</td>
                                <td>{author.gender}</td>
                              </tr>
                              <tr>
                                <td>Age</td>
                                <td>{author.age}</td>
                              </tr>
                              <tr>
                                <td>Country</td>
                                <td>{author.country}</td>
                              </tr>
                              <tr>
                                <td>Genre</td>
                                <td>{author.genre}</td>
                              </tr>
                            </tbody>
                          </table>
                        </>
                      )}
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
