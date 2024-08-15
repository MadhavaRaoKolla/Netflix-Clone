"use client";
import { useRef } from "react";
import Link from "next/link";
import Leftbutton from "../ArrowButtons/Leftbutton";
import Rightbutton from "../ArrowButtons/Rightbutton";
import styles from "../../Movies.module.scss";
import { MovieObject, ShowObject, PersonObject } from "@/app/movies/page";
import MovieRow from "../Rows/MovieRow";
import ShowRow from "../Rows/ShowRow";

type Props = {
  AllMovies: { genre: string; movies: MovieObject[] }[];
  showData: ShowObject[];
  peopleData: PersonObject[];
};

const MoviesClient = ({ showData, peopleData, AllMovies }: Props) => {
  const peopleContainer = useRef<HTMLDivElement>(null);
  const ScrollDiv = (element: HTMLDivElement | null, direction: string) => {
    if (element) {
      if (direction === "left") element.scrollLeft -= 500;
      else element.scrollLeft += 500;
    }
  };
  return (
    <div className={styles.content}>
      {AllMovies.map((eachMovie) => (
        <div className={styles.section} key={eachMovie.genre}>
          <h1>{eachMovie.genre}</h1>
          <MovieRow movieData={eachMovie.movies} />
        </div>
      ))}

      <div className={styles.section}>
        <h1>TV SHOWS</h1>
        <ShowRow showData={showData} />
      </div>

      <div className={styles.section}>
        <h1>PEOPLE</h1>
        <div className={styles.cardsContainer}>
          <Leftbutton
            onClick={() => ScrollDiv(peopleContainer.current, "left")}
          />
          <div className={styles.cards} ref={peopleContainer}>
            {peopleData.map((item) => (
              <Link key={item.id} href={`/movies/person/${item.id}`}>
                <div className={styles.card}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
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
      </div>
    </div>
  );
};

export default MoviesClient;
