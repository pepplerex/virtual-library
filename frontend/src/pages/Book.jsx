import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./components/Loading";

const Book = () => {
  const navigate = useNavigate();
  const [isloading, setisloading] = useState(true);

  const [detail, setdetail] = useState([]);

  const api = import.meta.env.VITE_ENDPOINT;

  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const res = await fetch(`${api}/api/book/${id}`);
      const data = await res.json();
      setdetail(data);
      setisloading(false);
      return;
    };
    fetchBook();
  }, []);
  return (
    <div className="book-container">
      <div className="container">
        <div className="nav-book-container col-4 mx-auto">
          <div onClick={() => navigate("/")}>
            <i className="fa-solid fa-home"></i>
            <span>Home</span>
          </div>
        </div>
        {isloading ? (
          <Loading />
        ) : (
          <div className="content-container">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-10 img-container">
                    <img
                      src={`${api}/books/${detail.img}`}
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
                      <h3>{detail.title}</h3>
                      <div className="share-container">
                        <p>Share:</p>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-facebook"></i>
                      </div>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>ISBN</td>
                            <td>{detail.ISBN}</td>
                          </tr>
                          <tr>
                            <td>Author</td>
                            <td>{detail.author}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
