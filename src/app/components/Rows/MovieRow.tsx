import Link from "next/link";
import styles from "../../Movies.module.scss";
import Leftbutton from "../ArrowButtons/Leftbutton";
import Rightbutton from "../ArrowButtons/Rightbutton";
import { useRef } from "react";
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

  return (
    <div className={styles.cardsContainer}>
      <Leftbutton onClick={() => ScrollDiv(movieContainer.current, "left")} />
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
      <Rightbutton onClick={() => ScrollDiv(movieContainer.current, "right")} />
    </div>
  );
};

export default MovieRow;
