import React from "react";

export default function Band(props) {
  function genreLabel(param) {
    //function to handle the genre label
    switch (param) {
      case "1":
        return "Rock";
      case "2":
        return "Rap";
      case "3":
        return "Indie";
      default:
        return "undefined";
    }
  }

  function genreStyle(param, icon) {
    //function to handle the icon and border color by the genre
    switch (param) {
      case "1":
        return icon ? "drum" : "dark";
      case "2":
        return icon ? "compact-disc" : "success";
      case "3":
        return icon ? "guitar" : "warning";
      default:
        return icon ? "volume-xmark" : "primary";
    }
  }
  return (
    <div
      className={
        "card mb-2 shadow-sm border-" + genreStyle(props.bnd.genre)
      }
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge bg-secondary me-1">{props.bnd.id}</span>-{" "}
            {props.bnd.name}
          </h5>
          <h6>
            <span className="badge text-bg-warning">Genre:</span>
            <span className="ms-1 text-black">
              <i
                className={
                  "me-1 fa-solid fa-" + genreStyle(props.bnd.genre, true)
                }
              ></i>
              {genreLabel(props.bnd.genre)}
            </span>
          </h6>
        </div>
        <p className="card-text">
          <span className="badge text-bg-info me-2">Favorite Song:</span>
          {props.bnd.song}
        </p>
        <div className="d-flex justify-content-end pt-2 m-0">
          <button 
          className="btn btn-outline-primary me-2"
          onClick={() => props.getBand(props.bnd.id)}
          >
            <i className="fas fa-pen me-2"></i>
            Edit
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => props.deleteBand(props.bnd.id)}
          >
            <i className="fas fa-trash me-2"></i>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
