import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Authors = () => {
  const navigate = useNavigate();

  const [isloading, setisloading] = useState(true);

  const [authors, setauthors] = useState([]);

  const api = import.meta.env.VITE_ENDPOINT;

  useEffect(() => {
    const fetchauthors = async () => {
      const res = await fetch(`${api}/api/authors`);
      const data = await res.json();
      setauthors(data);
      setisloading(false);
      return;
    };
    fetchauthors();
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
          <ul className="list-group authors-list mt-5">
            <h6>
              Authors <i className="fa-solid fa-award"></i>
            </h6>

            {authors.map((author) => (
              <li
                key={author.id}
                onClick={() => navigate(`/authors/${author.id}`)}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <img
                    src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
                    alt=""
                  />
                  {author.name}
                </div>
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Authors;
