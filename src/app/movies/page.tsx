import Link from "next/link";
import styles from "../Movies.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Leftbutton from "../components/ArrowButtons/Leftbutton";
import Rightbutton from "../components/ArrowButtons/Rightbutton";

type MovieObject = {
  id: number;
  title: string;
  poster_path: string;
};

type ShowObject = {
  id: number;
  name: string;
  poster_path: string;
};

type PersonObject = {
  id: number;
  title: string;
  profile_path: string;
};

const Movies = async () => {
  const MovieData = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=842ee9d1709b07af67bff6cbe571350a"
  ).then((response) => response.json());

  const ShowsData = await (
    await fetch(
      "https://api.themoviedb.org/3/discover/tv?api_key=842ee9d1709b07af67bff6cbe571350a"
    )
  ).json();

  const PeopleData = await (
    await fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=842ee9d1709b07af67bff6cbe571350a&page=1`
    )
  ).json();

  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.section}>
          <h1>MOVIES</h1>
          <div className={styles.cardsContainer}>
            {/* <Leftbutton /> */}
            <div className={styles.cards}>
              {MovieData.results.map((item: MovieObject) => (
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
            {/* <Rightbutton /> */}
          </div>
        </div>

        <div className={styles.section}>
          <h1>TV SHOWS</h1>
          <div className={styles.cardsContainer}>
            {/* <Leftbutton /> */}
            <div className={styles.cards}>
              {ShowsData.results.map((item: ShowObject) => (
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
            {/* <Rightbutton /> */}
          </div>
        </div>

        <div className={styles.section}>
          <h1>PEOPLE</h1>
          <div className={styles.cardsContainer}>
            {/* <Leftbutton /> */}
            <div className={styles.cards}>
              {PeopleData.results.map((item: PersonObject) => (
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
            {/* <Rightbutton /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
