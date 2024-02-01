import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Recents = () => {
  const navigate = useNavigate();
  const [isloading, setisloading] = useState(true);

  const [books, setbooks] = useState([]);

  const api = import.meta.env.VITE_ENDPOINT;

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch(`${api}/api/books`);
      const data = await res.json();
      setbooks(data);
      setisloading(false);
      return;
    };
    fetchBooks();
  }, []);

  return (
    <div className="recents-container mb-5">
      <h3>Recently Published</h3>

      <div className="row mt-5">
        {isloading ? (
          <Loading />
        ) : (
          books.map((book, index) => (
            <div
              key={index}
              className="col-md-3 mt-4 book-card"
              onClick={() => navigate(`/book/${book.id}`)}
            >
              <img
                src={`${api}/books/${book.img}`}
                alt=""
                className="img-fluid grayscale"
              />
              <h3>{book.name}</h3>
              <p>{book.author}</p>{" "}
              <div className="book-ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Recents;
