import React from "react";
import './movie.scss'
import { Image } from "./image/image";
import { Spacer } from "./spacer/spacer";

function Movie(movie: any) {
  // return <div>{movie.movie.Title} {movie.movie.Year}</div>;
  const { Title, Poster, NotFound, Type, Year }: any = {...movie.movie};
  return (
    <>
      <div className="main">
        <Spacer/>
        <div className="card.main text-white bg-secondary" id="img">
          <MovieDetails details={[Title, Year]}/>
          <Image source={Poster === 'N/A' ? NotFound : Poster} alt={Title}/>
          <MovieDetails details={Type} />
        </div>
        <Spacer/>
      </div>
    </>
  )
}

export default Movie;

/**
 * @function MovieDetails
 * @description to build out a bootstrap movie card title
 * @returns {React Fragment}
 */
function MovieDetails(props) {
  let title = getDetails(props.details);
  let leng = title?.length ?? 0;
  let fontSize: any = leng > 24 ? {'font-size': 'small'} : leng > 18 ? {'font-size': 'medium'} : {};
  return (
    <React.Fragment>
      <div className="card-body">
        <h5 className="card-title" style={fontSize} id="title">{title}</h5>
      </div>
    </React.Fragment>
  );
}

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
  let _title = '';
  for (let i = 0, iLen = details.length; i < iLen; i++) {
    _title += i === iLen - 1 ? details[i] : details[i] + ' ';
  }
  return _title;
}
