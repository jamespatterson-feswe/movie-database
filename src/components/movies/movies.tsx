import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const __key__ =
  '{"apiKey": "AIzaSyCUWmkooTsrXVagXY0qXxWKfsft_6Pi77Q", "authDomain": "movie-database-8e789.firebaseapp.com", "projectId": "movie-database-8e789", "storageBucket": "movie-database-8e789.appspot.com", "messagingSenderId": "875132263224", "appId": "1:875132263224:web:b3ad416bf39becaf1b3fcd", "measurementId": "G-SQKD044VTB"}';
const config = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG || __key__);
const firebase = initializeApp(config);
export const db = getFirestore(firebase);
const _movie = { Poster: "N/A", Type: "movie", imdbID: "" };
const _movies: any[] = [];

function Movies(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [rawData, setRawData] = useState(null);
  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    if (!isLoading) {
      const getMoviesFromFirestore = async () => {
        const data = await getDocs(moviesCollectionRef);
        setRawData(data.docs.map((d) => ({ ...d.data(), id: d.id })) as any);
        setIsLoading(true);
      };
      getMoviesFromFirestore();
    }
  }, []);

  if (isLoading) {
    if ((((rawData || [])[0] || {}) as any)?.list || "") {
      const raw = JSON.parse((((rawData || [])[0] || {}) as any)?.list);
      _movies.length = 0;
      for (let i = 0, iLen = raw.length; i < iLen; i++) {
        // eslint-disable-next-line no-useless-escape
        const title = raw[i].slice(0, -5).replace('"', "");
        const year =
          title.includes("(") && title.includes(")")
            ? title.slice(title.indexOf("("))
            : "";
        _movies.push({
          ..._movie,
          Title: title.replace(" " + year, ""),
          NotFound: "https://via.placeholder.com/400",
          Year: year,
        });
      }
      setMovies([..._movies] as any);
      setIsLoading(false);
    }
  }
  return (
    <div>
      {movies.map((m) => (
        <div>{(m as any)?.Title}</div>
      ))}
    </div>
  );
}

export default Movies;
