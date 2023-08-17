import React, { useEffect, useState } from "react";
import "./movies.scss";
import Movie from "../movie/movie";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const __key__ = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

function Movies(searchTerm: string): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [rawData, setRawData] = useState(null);

  function filterMovies(term) {
    return movies.filter((m: any) =>
      (m?.Title ?? '').toLowerCase().includes(term) ||
      (m?.Year ?? '').toLowerCase().includes(term));
  }

  useEffect(() => {
    if (!isLoading) {
      const getMoviesFromFirestore = async () => {
        const data = await getDocs(
          collection(
            getFirestore(initializeApp(JSON.parse(JSON.stringify(__key__)))),
            "movies",
          ),
        );
        setRawData(data.docs.map((d) => ({ ...d.data(), id: d.id })) as any);
        setIsLoading(true);
      };
      getMoviesFromFirestore();
    }
  }, []);

  if (isLoading) {
    if ((rawData?.[0] as any)?.list) {
      const _movies: any[] = [];
      const raw = JSON.parse((rawData?.[0] as any)?.list);
      for (let i = 0, iLen = raw.length; i < iLen; i++) {
        // eslint-disable-next-line no-useless-escape
        const title = raw[i].slice(0, -5).replace('"', "");
        const year =
          title.includes("(") && title.includes(")")
            ? title.slice(title.indexOf("("))
            : "";
        _movies.push({
          ...{ Poster: "N/A", Type: "movie", imdbID: "" },
          Title: title.replace(" " + year, ""),
          NotFound: process.env.REACT_APP_NOT_FOUND_URL,
          Year: year,
        });
      }
      setMovies([..._movies] as any);
      setIsLoading(false);
    }
  }
  return (
    <div className="movies">
      {!movies.length ? (
        <MovieNotFound />
      ) : (
        movies.map((movie, index) => (
          <Movie key={`key_${index}`} movie={movie}></Movie>
        ))
      )}
    </div>
  );
}

export default Movies;

const MovieNotFound = () => {
  return <h1 className="not-found">No movies found</h1>;
};
