import "./Header.scss";
import Form from "../Form/Form";
import Dropdown from "../Dropdown/Dropdown";
import Netflix from "../Netflix/Netflix";
import Link from "next/link";

const Header = () => {
  return (
    <header className="main">
      <div className="nav">
        <Netflix />
        <div className="content">
          <Dropdown />
          <button className="sign-in">Sign In</button>
        </div>
      </div>
      <div className="photo">
        <div className="center">
          <h2>Unlimited movies, TV shows, and more</h2>
          <p>Watch anywhere. Cancel anytime.</p>
          <Form />
          <Link href="/movies" className="movie">
            Movies
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
