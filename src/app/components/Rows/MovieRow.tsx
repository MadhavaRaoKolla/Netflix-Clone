"use client";
import Link from "next/link";
import styles from "../../Movies.module.scss";
import Leftbutton from "../ArrowButtons/Leftbutton";
import Rightbutton from "../ArrowButtons/Rightbutton";
import { useRef, useState } from "react";
import { MovieObject } from "@/app/movies/page";

type MovieRowProps = {
  movieData: MovieObject[];
};

const MovieRow = ({ movieData }: MovieRowProps) => {
  const movieContainer = useRef<HTMLDivElement>(null);

  const ScrollDiv = (element: HTMLDivElement | null, direction: string) => {
    if (element) {
      if (direction === "left") element.scrollLeft -= 500;
      else element.scrollLeft += 500;
    }
  };
  // const [hoverId, setHoverId] = useState<number | null>(null);

  return (
    <div className={styles.cardsContainer}>
      <Leftbutton onClick={() => ScrollDiv(movieContainer.current, "left")} />
      <div className={styles.cards} ref={movieContainer}>
        {movieData.map((item) => (
          <Link
            key={item.id}
            href={`/movies/movie/${item.id}`}
            // onMouseEnter={() => setHoverId(item.id)}
            // onMouseLeave={() => setHoverId(null)}
          >
            {/* {hoverId === item.id ? (
              <div className={styles.infocards}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                />
                <div className={styles.info}>
                  <p>{item.title}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="50"
                    height="40"
                    fill="currentColor"
                  >
                    <circle cx="32" cy="32" r="25" fill="white" />
                    <path
                      d="M26,20 Q26,32 26,44 Q26,46 28,47.5 L42,36.5 Q44,35 42,33.5 L28,22.5 Q26,21 26,23 Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <div className={styles.card}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                />
              </div>
            )} */}

            <div className={styles.card}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
              />
            </div>
          </Link>
        ))}
      </div>
      <Rightbutton onClick={() => ScrollDiv(movieContainer.current, "right")} />
    </div>
  );
};

export default MovieRow;
