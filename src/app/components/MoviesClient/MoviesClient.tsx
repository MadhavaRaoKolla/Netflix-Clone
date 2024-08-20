"use client";
import styles from "../../Movies.module.scss";
import { MovieObject, ShowObject } from "@/app/movies/page";
import MovieRow from "../Rows/MovieRow";
import ShowRow from "../Rows/ShowRow";

type Props = {
  AllMovies: { genre: string; movies: MovieObject[] }[];
  AllShows: { genre: string; movies: ShowObject[] }[];
};

const MoviesClient = ({ AllMovies, AllShows }: Props) => {
  return (
    <div className={styles.content}>
      <div id="movies-section">
        {AllMovies.map((eachMovie) => (
          <div className={styles.section} key={eachMovie.genre}>
            <h2>{eachMovie.genre}</h2>
            <MovieRow movieData={eachMovie.movies} />
          </div>
        ))}
      </div>

      <div id="tvshows-section">
        {AllShows.map((eachShow) => (
          <div className={styles.section} key={eachShow.genre}>
            <h2>{eachShow.genre}</h2>
            <ShowRow showData={eachShow.movies} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesClient;
