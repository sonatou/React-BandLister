import React from "react";

export default function BandForm(props) {
  return (
    <form className="row g-3">
      <div className="col-md-6">
        <span className="badge bg-dark">
          <label className="form-label">Id</label>
        </span>
        <input
          id="id"
          type="text"
          className="form-control mt-2"
          readOnly
          value={
            Math.max.apply(
              Math,
              props.bands.map((item) => item.id)
            ) + 1
          }
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">
          <span className="badge text-bg-dark">Genre</span>
        </label>
        <select id="genre" className="form-select">
          <option defaultValue="0">Select...</option>
          <option value="1">Rock</option>
          <option value="2">Rap</option>
          <option value="3">Indie</option>
        </select>
      </div>
      <div className="col-md-6">
        <span className="badge text-bg-dark">
          <label className="form-label">Name</label>
        </span>
        <input id="name" type="text" className="form-control mt-2" />
      </div>
      <div className="col-md-6">
        <span className="badge text-bg-dark">
          <label className="form-label">Favorite song</label>
        </span>
        <input id="song" type="text" className="form-control mt-2" />
      </div>
      <hr />
      <div className="col-12">
        <button className="btn btn-outline-success" onClick={props.addBand}>
          Add Band
        </button>
      </div>
    </form>
  );
}
