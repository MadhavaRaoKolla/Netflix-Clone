import Link from "next/link";
import movieStyles from "../../Movie.module.scss";
import Navbar from "@/app/components/Navbar/Navbar";

const Movie = async ({
  params,
}: {
  params: {
    movieid: number;
  };
}) => {
  const data = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/${params.movieid}?api_key=842ee9d1709b07af67bff6cbe571350a`
    )
  ).json();

  return (
    <div className={movieStyles.box}>
      <Navbar />
      <div className={movieStyles.content}>
        <div className={movieStyles.data}>
          <div className={movieStyles.info}>
            <h1>{data.title}</h1>
            <p>{data.overview}</p>
            <p>Runtime of movie: {data.runtime}m</p>
            <p>
              Available in '{data.original_language.toUpperCase()}' language
            </p>
            <p>IMDB Rating: {data.vote_average}</p>
            <p>Realeased on: {data.release_date}</p>
          </div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title}
            />
          </div>
        </div>
        <Link href={`/movies`}>Go back</Link>
      </div>
    </div>
  );
};

export default Movie;
