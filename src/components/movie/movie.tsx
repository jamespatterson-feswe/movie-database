import React from "react";
import "./movie.scss";

function Movie(movie: any) {
  // return <div>{movie.movie.Title} {movie.movie.Year}</div>;
  const { Title, Poster, NotFound, Type, Year }: any = { ...movie.movie };
  return (
    <>
      <div className="card">
        <div className="body">
          <p className="title">{getDetails([Title])}</p>
          <p className="year">{getDetails([Year])}</p>
          <div className="img-container">
            <img
              className="img"
              src={Poster === "N/A" ? NotFound : Poster}
              alt={Title}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;

/**
 * @function getDetails
 * @description determine if the details need serialized
 * @returns {string}
 */
function getDetails(details) {
  return typeof details !== "string" ? serializeTitle(details) : details;
}

/**
 * @function serializeTitle
 * @param {array} details Relevant information pertaining to the movie being serialized
 * @description concatenate values into readable text
 * @returns {string}
 */
function serializeTitle(details) {
  if (!details) {
    return;
  }
  let _title = "";
  for (let i = 0, iLen = details.length; i < iLen; i++) {
    _title += i === iLen - 1 ? details[i] : details[i] + " ";
  }
  return _title;
}
