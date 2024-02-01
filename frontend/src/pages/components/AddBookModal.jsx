import React, { useEffect, useState } from "react";
import axios from "axios";

const AddBookModal = () => {
  const [name, setname] = useState("");
  const [ISBN, setISBN] = useState("");
  const [author, setauthor] = useState("");

  const [authors, setauthors] = useState([]);

  const [isloading, setisloading] = useState(true);

  const [spinner, setSpinner] = useState(false);

  const api = import.meta.env.VITE_ENDPOINT;

  useEffect(() => {
    const fetchauthors = async () => {
      const res = await fetch(`${api}/api/authors`);
      const data = await res.json();
      setisloading(false);
      setauthors(data);
      return;
    };
    fetchauthors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSpinner(true);

    const data = {
      name,
      ISBN,
      author_id: author,
    };

    console.log(data);
    // return;

    axios
      .post(`${api}/api/book`, data)
      .then((data) => {
        setSpinner(false);
        toastr.success("You succesfully added a new book");
      })
      .catch((err) => {
        setSpinner(false);
        toastr.error("Some error occured while creating this book");
        console.log(err);
      });
  };

  return (
    <>
      <div
        className="modal fade"
        id="addBookModal"
        tabIndex="-1"
        aria-labelledby="addBookModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                style={{
                  color: "gray",
                }}
                className="modal-title"
                id="addBookModalLabel"
              >
                Add Book
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Book Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputtext1"
                    aria-describedby="textHelp"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">ISBN</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputtext1"
                    aria-describedby="textHelp"
                    value={ISBN}
                    onChange={(e) => setISBN(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Author</label>
                  <select
                    value={author}
                    onChange={(e) => {
                      setauthor(e.target.value);
                    }}
                    className="form-select"
                  >
                    {isloading ? (
                      <option>Loading authors...</option>
                    ) : (
                      <>
                        <option>Select</option>
                        {authors.map((author) => (
                          <option key={author.id} value={author.id}>
                            {author.name}
                          </option>
                        ))}
                      </>
                    )}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-default">
                  {spinner ? (
                    <>
                      adding{" "}
                      <div
                        className="spinner-border spinner-border-sm text-white"
                        role="status"
                      ></div>
                    </>
                  ) : (
                    "Add book"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBookModal;
