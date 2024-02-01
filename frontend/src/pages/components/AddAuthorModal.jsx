import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryDropdown from "./CountryDropdown";

const AddAuthorModal = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [genre, setgenre] = useState("");
  const [country, setcountry] = useState("");

  const [spinner, setSpinner] = useState(false);

  const api = import.meta.env.VITE_ENDPOINT;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSpinner(true);

    const data = {
      name,
      age,
      gender,
      genre,
      country,
    };

    axios
      .post(`${api}/api/author`, data)
      .then((data) => {
        setSpinner(false);
        toastr.success("You succesfully added a new Author");
        console.log(data);
      })
      .catch((err) => {
        setSpinner(false);
        toastr.error("Some error occured while creating this Author");
        console.log(err);
      });
  };

  return (
    <>
      <div
        className="modal fade"
        id="addAuthorModal"
        tabIndex="-1"
        aria-labelledby="addAuthorModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addAuthorModalLabel">
                Add author
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Author's Name</label>
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
                    <label className="form-label">Gender</label>
                    <select
                      className="form-select"
                      value={gender}
                      onChange={(e) => setgender(e.target.value)}
                    >
                      <option>-Select gender-</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Country</label>
                    <CountryDropdown
                      country={country}
                      setcountry={setcountry}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputtext1"
                      aria-describedby="textHelp"
                      value={age}
                      onChange={(e) => setage(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Genre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputtext1"
                      aria-describedby="textHelp"
                      value={genre}
                      onChange={(e) => setgenre(e.target.value)}
                    />
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
      </div>
    </>
  );
};

export default AddAuthorModal;
