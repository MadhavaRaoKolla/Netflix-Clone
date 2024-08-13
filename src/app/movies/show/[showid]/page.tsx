import Navbar from "@/app/components/Navbar/Navbar";
import movieStyles from "../../Movie.module.scss";
import Link from "next/link";

const Show = async ({
  params,
}: {
  params: {
    showid: string;
  };
}) => {
  const data = await (
    await fetch(
      `https://api.themoviedb.org/3/tv/${params.showid}?api_key=842ee9d1709b07af67bff6cbe571350a`
    )
  ).json();

  return (
    <div className={movieStyles.box}>
      <Navbar />
      <div className={movieStyles.content}>
        <div className={movieStyles.data}>
          <div className={movieStyles.info}>
            <h1>{data.name}. </h1>
            <p>{data.overview}. </p>
            <p> It's a {data.type} show.</p>
            <p>
              Available in '{data.original_language.toUpperCase()}' Language.{" "}
            </p>
            <p>IMDB Rating: {data.vote_average}</p>
            <p>Realeased on: {data.first_air_date} </p>
            <p>Seasons: {data.number_of_seasons}</p>
            <p>Episodes: {data.number_of_episodes}</p>
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

export default Show;
