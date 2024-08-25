import styles from "../Movies.module.scss";
import Navbar from "../components/Navbar/Navbar";
import MoviesClient from "../components/MoviesClient/MoviesClient";
import { MoviesGenresID, ShowsGenresID } from "../../../Data";
import Banner from "../components/Banner/Banner";
import MoviesFooter from "../components/MoviesFooter/MoviesFooter";

export type MovieObject = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

export type ShowObject = {
  id: number;
  name: string;
  poster_path: string;
};

const Movies = async () => {
  const AllMovies: { genre: string; movies: MovieObject[] }[] = [];
  const AllShows: { genre: string; movies: ShowObject[] }[] = [];

  Object.keys(MoviesGenresID).forEach(async (genre) => {
    const response = await (
      await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${MoviesGenresID[genre]}&api_key=${process.env.VITE_TMDB_API_KEY}`
      )
    ).json();
    AllMovies.push({ genre, movies: response.results });
  });

  Object.keys(ShowsGenresID).forEach(async (genre) => {
    const response = await (
      await fetch(
        `https://api.themoviedb.org/3/discover/tv?with_genres=${ShowsGenresID[genre]}&api_key=${process.env.VITE_TMDB_API_KEY}`
      )
    ).json();
    AllShows.push({ genre, movies: response.results });
  });

  const Trending = await (
    await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${process.env.VITE_TMDB_API_KEY}`
    )
  ).json();

  return (
    <div className={styles.layout}>
      <Navbar />
      <Banner trending={Trending.results} />
      <div className={styles.content}>
        <MoviesClient AllMovies={AllMovies} AllShows={AllShows} />
      </div>
      <MoviesFooter />
    </div>
  );
};

export default Movies;
