import Link from "next/link";
import styles from "../../Movies.module.scss";
import Leftbutton from "../ArrowButtons/Leftbutton";
import Rightbutton from "../ArrowButtons/Rightbutton";
import { useRef } from "react";
import { ShowObject } from "@/app/movies/page";

type showRowProps = {
  showData: ShowObject[];
};

const ShowRow = ({ showData }: showRowProps) => {
  const showContainer = useRef<HTMLDivElement>(null);

  const ScrollDiv = (element: HTMLDivElement | null, direction: string) => {
    if (element) {
      if (direction === "left") element.scrollLeft -= 500;
      else element.scrollLeft += 500;
    }
  };

  return (
    <div className={styles.cardsContainer}>
      <Leftbutton onClick={() => ScrollDiv(showContainer.current, "left")} />
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
      <Rightbutton onClick={() => ScrollDiv(showContainer.current, "right")} />
    </div>
  );
};

export default ShowRow;
