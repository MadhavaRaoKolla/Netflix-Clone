"use client";
// import { useRef } from "react";
// import Link from "next/link";
// import Leftbutton from "../ArrowButtons/Leftbutton";
// import Rightbutton from "../ArrowButtons/Rightbutton";
import styles from "../../Movies.module.scss";
import { MovieObject, ShowObject, PersonObject } from "@/app/movies/page";
import MovieRow from "../Rows/MovieRow";
import ShowRow from "../Rows/ShowRow";

type Props = {
  AllMovies: { genre: string; movies: MovieObject[] }[];
  AllShows: { genre: string; movies: ShowObject[] }[];
  // trending: MovieObject[];
};

const MoviesClient = ({ AllMovies, AllShows }: Props) => {
  // const peopleContainer = useRef<HTMLDivElement>(null);
  // const ScrollDiv = (element: HTMLDivElement | null, direction: string) => {
  //   if (element) {
  //     if (direction === "left") element.scrollLeft -= 500;
  //     else element.scrollLeft += 500;
  //   }
  // };
  return (
    <div className={styles.content}>
      {AllMovies.map((eachMovie) => (
        <div className={styles.section} key={eachMovie.genre}>
          <h2>{eachMovie.genre}</h2>
          <MovieRow movieData={eachMovie.movies} />
        </div>
      ))}

      {AllShows.map((eachShow) => (
        <div className={styles.section} key={eachShow.genre}>
          <h2>{eachShow.genre}</h2>
          <ShowRow showData={eachShow.movies} />
        </div>
      ))}

      {/* <div className={styles.section}>
        <h2>PEOPLE</h2>
        <div className={styles.cardsContainer}>
          <Leftbutton
            onClick={() => ScrollDiv(peopleContainer.current, "left")}
          />
          <div className={styles.cards} ref={peopleContainer}>
            {peopleData.map((item) => (
              <Link key={item.id} href={`/movies/person/${item.id}`}>
                <div className={styles.card}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                  />
                </div>
              </Link>
            ))}
          </div>
          <Rightbutton
            onClick={() => ScrollDiv(peopleContainer.current, "right")}
          />
        </div>
      </div> */}
    </div>
  );
};

export default MoviesClient;
