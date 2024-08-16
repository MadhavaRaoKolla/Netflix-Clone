"use client";
import { MovieObject } from "@/app/movies/page";
import { useEffect, useState } from "react";
import "./Banner.scss";
import Link from "next/link";

type Props = {
  trending: MovieObject[];
};

const Banner = ({ trending }: Props) => {
  const [movie, setMovie] = useState<MovieObject>();

  useEffect(() => {
    setMovie(trending[Math.floor(Math.random() * trending.length)]);
  }, [trending]);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.poster_path})`,
      }}
    >
      <Link href={`/movies/movie/${movie?.id}`}>
        <div className="content">
          <h1>{movie?.title.toUpperCase()}</h1>
          <div className="buttons">
            <button>Play</button>
            <button>Add to wishlist</button>
          </div>
          <p>{movie?.overview}</p>
        </div>
      </Link>
    </header>
  );
};

export default Banner;
