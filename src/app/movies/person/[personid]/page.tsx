import Navbar from "@/app/components/Navbar/Navbar";
import movieStyles from "../../Movie.module.scss";

const Person = async ({
  params,
}: {
  params: {
    personid: number;
  };
}) => {
  const data = await (
    await fetch(
      ` https://api.themoviedb.org/3/person/${params.personid}?api_key=842ee9d1709b07af67bff6cbe571350a`
    )
  ).json();

  return (
    <div className={movieStyles.box}>
      <Navbar />
      <div className={movieStyles.data}>
        <div className={movieStyles.info}>
          <h1>{data.name}.</h1>
          <p> {data.gender === 2 ? "Male" : "Female"} Actor.</p>
          <p>
            {data.biography.split(".")[0]}. {data.biography.split(".")[1]}.{" "}
          </p>
          <p>Birthdate: {data.birthday}.</p>
          <p>Place of birth: {data.place_of_birth}.</p>
          <p>IMDB Rating: {data.popularity}.</p>
          <p>Professional at: {data.known_for_department}.</p>
        </div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
            alt={data.title}
          />
        </div>
      </div>
    </div>
  );
};

export default Person;
