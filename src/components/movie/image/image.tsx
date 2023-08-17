import React from "react";

export const Image = (props) => {
  return (
    <>
      <img className="card-img-top" src={props.source} alt={props.Title}></img>
    </>
  );
};
