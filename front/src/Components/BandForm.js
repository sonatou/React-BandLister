import React, { useEffect, useState } from "react";

const initialBand = {
  id: 0,
  genre: "0",
  song: "",
  name: "",
};

export default function BandForm(props) {
  const [band, setBand] = useState(actualBand());

  useEffect(() => {
    if (props.selectedBand.id !== 0) setBand(props.selectedBand);
  }, [props.selectedBand]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;

    setBand({ ...band, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.selectedBand.id !== 0) props.editBand(band);
    else props.addBand(band);

    setBand(initialBand);
  };

  const handleCancel = (e) => {
    e.preventDefault();

    props.cancelBand();

    setBand(initialBand);
  };

  function actualBand() {
    if (props.selectedBand.id !== 0) {
      return props.selectedBand;
    } else {
      return initialBand;
    }
  }

  return (
    <>
      <h1>Band {band.id !== 0 ? band.id : ""}</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <span className="badge text-bg-dark">
            <label className="form-label">Name</label>
          </span>
          <input
            name="name"
            id="name"
            type="text"
            className="form-control mt-2"
            onChange={inputTextHandler}
            value={band.name}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">
            <span className="badge text-bg-dark">Genre</span>
          </label>
          <select
            name="genre"
            id="genre"
            className="form-select mt-2"
            onChange={inputTextHandler}
            value={band.genre}
          >
            <option defaultValue="0">Select...</option>
            <option value="1">Rock</option>
            <option value="2">Rap</option>
            <option value="3">Indie</option>
          </select>
        </div>
        <div className="col-md-6">
          <span className="badge text-bg-dark">
            <label className="form-label">Favorite song</label>
          </span>
          <input
            name="song"
            id="song"
            type="text"
            className="form-control mt-2"
            onChange={inputTextHandler}
            value={band.song}
          />
        </div>
        <hr />
        <div className="col-12 mt-0">
          {band.id === 0 ? (
            <button className="btn btn-outline-success" type="submit">
              <i className="fas fa-plus me-2"></i>
              Band
            </button>
          ) : (
            <>
              <button className="btn btn-outline-success me-2" type="submit">
                <i className="fas fa-plus me-2"></i>
                Save
              </button>
              <button className="btn btn-outline-danger" onClick={handleCancel}>
                Cancel
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
}
