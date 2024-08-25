"use client";
import { MovieObject } from "@/app/movies/page";
import { useEffect, useState } from "react";
import "./Banner.scss";
import Link from "next/link";
import Image from "next/image";

type Props = {
  trending: MovieObject[];
};

const Banner = ({ trending }: Props) => {
  const [movie, setMovie] = useState<MovieObject | null>(null);
  const [number, setNumber] = useState<number>();

  useEffect(() => {
    const num = Math.floor(Math.random() * trending.length);
    setNumber(Math.floor(Math.random() * trending.length));
    setMovie(trending[num]);

    const handleScroll = () => {
      const banner = document.querySelector(".banner") as HTMLElement;
      const scrollY = window.scrollY;
      const maxScroll = 480;
      const opacity = Math.max(0, 1 - scrollY / maxScroll);

      if (banner) {
        banner.style.backgroundSize = "cover";
        banner.style.backgroundPosition = "center";
        banner.style.opacity = opacity.toString();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [trending]);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.poster_path})`,
      }}
    >
      <div className="content">
        <h1>{movie?.title.toUpperCase()}</h1>
        <p>{movie?.overview}</p>
        <div className="buttons">
          <div className="mediabuttons">
            <Link href={`/movies/movie/${movie?.id}`}>
              <button className="play">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  id="play"
                >
                  <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                </svg>
                Play
              </button>
            </Link>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="25"
                height="25"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="30"
                  stroke="white"
                  strokeWidth="4"
                  fill="transparent"
                />
                <text
                  x="32"
                  y="38"
                  fontSize="45"
                  fill="white"
                  textAnchor="middle"
                  alignmentBaseline="middle"
                >
                  i
                </text>
              </svg>
              More Info
            </button>
          </div>
          <div className="mute">
            <div className="image">
              <Image
                src="/assets/whitemute.png"
                alt="Description of image"
                width={28}
                height={24}
                className="mute-icon"
              />
            </div>
            <span>TV-{number}+</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
