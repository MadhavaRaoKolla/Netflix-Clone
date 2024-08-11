import "./Strangerthings.scss";

const Strangerthings = () => {
  return (
    <div className="sthings">
      <img
        alt="Stranger Things"
        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
      ></img>
      <div className="data">
        <p>Stranger Things</p>
        <p className="downloading">Downloading...</p>
      </div>
      <div className="spinner">@</div>
    </div>
  );
};

export default Strangerthings;
