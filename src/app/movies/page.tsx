import styles from "../Movies.module.scss";
import Navbar from "../components/Navbar/Navbar";
import MoviesClient from "../components/MoviesClient/MoviesClient";
import { MoviesGenresID } from "../../../Data";

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
  const AllMovies: { genre: string; movies: MovieObject[] }[] = [];
  Object.keys(MoviesGenresID).forEach(async (genre) => {
    const response = await (
      await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${MoviesGenresID[genre]}&api_key=${process.env.VITE_TMDB_API_KEY}`
      )
    ).json();
    AllMovies.push({ genre, movies: response.results });
  });

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
          AllMovies={AllMovies}
          showData={ShowsData.results}
          peopleData={PeopleData.results}
        />
      </div>
    </div>
  );
};

export default Movies;
