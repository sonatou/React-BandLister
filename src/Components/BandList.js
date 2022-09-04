import React from "react";
import Band from "./Band";

export default function BandList(props) {
  return (
    <div className="mt-3">
      {props.bands.map((bnd) => (
        <Band
          key={bnd.id}
          bands={props.bands}
          deleteBand={props.deleteBand}
          bnd={bnd}
        />
      ))}
    </div>
  );
}
