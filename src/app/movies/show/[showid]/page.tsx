import "../../Singlemovie.scss";
import Link from "next/link";
import Image from "next/image";

const Show = async ({
  params,
}: {
  params: {
    showid: string;
  };
}) => {
  const data = await (
    await fetch(
      `https://api.themoviedb.org/3/tv/${params.showid}?api_key=${process.env.VITE_TMDB_API_KEY}`
    )
  ).json();

  return (
    <div className="movie">
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
          alt={data.title}
          className="poster"
        />
        <Link href={`/movies`} className="close">
          <svg
            width="40"
            height="35"
            viewBox="0 0 50 50"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="24" stroke="black" strokeWidth="2" />
            <path
              d="M16 16L34 34M16 34L34 16"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </Link>
        <div className="buttons">
          <div className="leftbutton">
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
            {/* plus */}
            <svg width="45" height="45" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="38" stroke="grey" strokeWidth="5" />
              <path d="M50 30V70" stroke="white" strokeWidth="6" />
              <path d="M30 50H70" stroke="white" strokeWidth="6" />
            </svg>
            {/* like */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="42"
              viewBox="0 0 48 48"
            >
              <circle
                cx="24"
                cy="24"
                r="22"
                fill="none"
                stroke="grey"
                strokeWidth="2"
              />

              <g transform="translate(12, 12)">
                <path
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"
                />
              </g>
            </svg>
          </div>
          <div className="rightbutton">
            <div>
              <Image
                src="/assets/whitemute.png"
                alt="Description of image"
                width={28}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="nonimage">
        <div className="content">
          <div className="left">
            <div className="upper">
              <div className="up">
                <p className="green">93% Match</p>
                <p className="grey">{data.first_air_date.split("-")[0]}</p>
                <p className="grey">{data.number_of_seasons} Seasons</p>
                <p className="hd">HD</p>
              </div>
              <div className="down">
                <p className="UA"> {data.adult ? "A 18" : "U/A 13"}+</p>
                <p>
                  {data.genres[0].name}, {data.genres[1].name}, Comedy
                </p>
              </div>
            </div>
            <div className="lower">{data.last_episode_to_air.overview}</div>
          </div>
          <div className="right">
            <div>
              <p>
                <span className="title">Cast:</span> Iain Armitrage, Zoe Perry,
                Lance Barber, <i>more</i>
              </p>
            </div>
            <div>
              <p>
                <span className="title">Genres:</span> Drama, Mystery, Sci-Fi &
                Fantasy
              </p>
            </div>
          </div>
        </div>
        <div className="episodes">
          <div className="header">
            <div className="one">
              <p>Episodes</p>
              <p className="season">
                Season 1
                <svg
                  width="30"
                  height="15"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="50,80 20,20 80,20" fill="white" />
                </svg>
              </p>
            </div>
            <div className="two">
              <p>Season 1: </p>
              <p className="box">{data.adult ? "A 18" : "U/A 13"}+ </p>
              <p>
                {data.genres[0].name}, {data.genres[1].name}, Comedy
              </p>
            </div>
          </div>
          <div className="shows">
            <div className="eachshow">
              <p className="number">1</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                alt={data.seasons[0].name}
              />
              <div className="text">
                <div className="title">
                  <p>{data.name}</p>
                  <p>65 min</p>
                </div>
                <p>{data.last_episode_to_air.overview}</p>
              </div>
            </div>
            <div className="eachshow">
              <p className="number">2</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                alt={data.name}
              />
              <div className="text">
                <div className="title">
                  <p>{data.name}</p>
                  <p>56 min</p>
                </div>
                <p>{data.last_episode_to_air.overview}</p>
              </div>
            </div>
            <div className="eachshow">
              <p className="number">3</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                alt={data.name}
              />
              <div className="text">
                <div className="title">
                  <p>{data.name}</p>
                  <p>60 min</p>
                </div>
                <p>{data.last_episode_to_air.overview}</p>
              </div>
            </div>
            <div className="eachshow">
              <p className="number">4</p>
              <img
                src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                alt={data.name}
              />
              <div className="text">
                <div className="title">
                  <p>{data.name}</p>
                  <p>70 min</p>
                </div>
                <p>{data.last_episode_to_air.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
