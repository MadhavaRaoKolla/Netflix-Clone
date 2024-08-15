"use client";
import { useRef } from "react";
import Link from "next/link";
import Leftbutton from "../ArrowButtons/Leftbutton";
import Rightbutton from "../ArrowButtons/Rightbutton";
import styles from "../../Movies.module.scss";
import { MovieObject, ShowObject, PersonObject } from "@/app/movies/page";

type Props = {
  movieData: MovieObject[];
  showData: ShowObject[];
  peopleData: PersonObject[];
};

const MoviesClient = ({ movieData, showData, peopleData }: Props) => {
  const movieContainer = useRef<HTMLDivElement>(null);
  const showContainer = useRef<HTMLDivElement>(null);
  const peopleContainer = useRef<HTMLDivElement>(null);

  const ScrollDiv = (element: HTMLDivElement | null, direction: string) => {
    if (element) {
      if (direction === "left") element.scrollLeft -= 500;
      else element.scrollLeft += 500;
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.section}>
        <h1>Movies</h1>
        <div className={styles.cardsContainer}>
          <Leftbutton
            onClick={() => ScrollDiv(movieContainer.current, "left")}
          />
          <div className={styles.cards} ref={movieContainer}>
            {movieData.map((item) => (
              <Link key={item.id} href={`/movies/movie/${item.id}`}>
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
            onClick={() => ScrollDiv(movieContainer.current, "right")}
          />
        </div>
      </div>

      <div className={styles.section}>
        <h1>TV SHOWS</h1>
        <div className={styles.cardsContainer}>
          <Leftbutton
            onClick={() => ScrollDiv(showContainer.current, "left")}
          />
          <div className={styles.cards} ref={showContainer}>
            {showData.map((item) => (
              <Link key={item.id} href={`/movies/show/${item.id}`}>
                <div className={styles.card}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.name}
                  />
                </div>
              </Link>
            ))}
          </div>
          <Rightbutton
            onClick={() => ScrollDiv(showContainer.current, "right")}
          />
        </div>
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
