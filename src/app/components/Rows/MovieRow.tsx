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

  // const [match, setMatch] = useState<number>(0);
  // const [seasons, setSeasons] = useState<number>(0);
  // const [age, setAge] = useState<number>(0);
  // useEffect(() => {
  //   setMatch(Math.floor(Math.random() * 15) + 85);
  //   setAge(Math.floor(Math.random() * 8) + 15);
  //   setSeasons(Math.floor(Math.random() * 10) + 1);
  // }, []);

  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      className={`${styles.cardsContainer} ${
        hovered ? styles.rowcontainer : ""
      }`}
    >
      <Leftbutton onClick={() => ScrollDiv(movieContainer.current, "left")} />
      <div
        className={`${styles.cards} ${hovered ? styles.row : ""}`}
        ref={movieContainer}
      >
        {movieData.map((item) => (
          <Link key={item.id} href={`/movies/movie/${item.id}`}>
            <div
              className={styles.card}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
              />
              <div className={styles.hidden}>
                <div className={styles.Allinfo}>
                  <div className={styles.iconinfo}>
                    <div className={styles.svg}>
                      {/* play */}
                      <svg width="30" height="30" viewBox="0 0 50 50">
                        <circle cx="25" cy="25" r="20" fill="white" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="38"
                          height="38"
                          viewBox="0 0 24 24"
                          id="play"
                          x="6"
                          y="7"
                          transform="translate(-12,-12)"
                        >
                          <path
                            d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"
                            fill="black"
                          />
                        </svg>
                      </svg>

                      {/* plus */}
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 100 100"
                        fill="none"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          stroke="grey"
                          strokeWidth="5"
                        />
                        <path d="M50 30V70" stroke="grey" strokeWidth="6" />
                        <path d="M30 50H70" stroke="grey" strokeWidth="6" />
                      </svg>
                      {/* thumb */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="28"
                        viewBox="0 0 48 48"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          fill="none"
                          stroke="grey"
                          strokeWidth="2"
                        />

                        <g transform="translate(12, 12)">
                          <path
                            fill="none"
                            stroke="grey"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className={styles.dropdown}>
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 100 100"
                        fill="none"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          stroke="grey"
                          strokeWidth="6"
                        />
                        <path
                          d="M35 45L50 60L65 45"
                          stroke="grey"
                          strokeWidth="6"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.rowInfo}>
                    <div className={styles.row1}>
                      <p className={styles.green}>97% Match</p>
                      <p className={styles.hd}>16+</p>
                      <p>5 Seasons</p>
                      <p className={`${styles.hd} ${styles.curve}`}>HD</p>
                    </div>
                    <div className={styles.row2}>
                      <p>Ominous</p>
                      <div className={styles.grey}></div>
                      <p>Bittersweet</p>
                      <div className={styles.grey}></div>
                      <p>Fantasy TV</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Rightbutton onClick={() => ScrollDiv(movieContainer.current, "right")} />
    </div>
  );
};

export default MovieRow;
