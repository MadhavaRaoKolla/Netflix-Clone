import styles from "../Movies.module.scss";
import Navbar from "../components/Navbar/Navbar";
import MoviesClient from "../components/MoviesClient/MoviesClient";

export type MovieObject = {
  id: number;
  title: string;
  poster_path: string;
};

export type ShowObject = {  
  id: number;
  name: string;
  poster_path: string;
};

export type PersonObject = {
  id: number;
  title: string;
  profile_path: string;
};

const Movies = async () => {
  const MovieData = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VITE_TMDB_API_KEY}`
  ).then((response) => response.json());

  const ShowsData = await (
    await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.VITE_TMDB_API_KEY}`
    )
  ).json();

  const PeopleData = await (
    await fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.VITE_TMDB_API_KEY}`
    )
  ).json();

  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.content}>
        <MoviesClient
          movieData={MovieData.results}
          showData={ShowsData.results}
          peopleData={PeopleData.results}
        />
      </div>
    </div>
  );
};

export default Movies;
