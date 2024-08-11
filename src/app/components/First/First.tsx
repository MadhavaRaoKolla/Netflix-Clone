import Seperate from "../Seperate/Seperate";
import "./First.scss";

export type Props = {
  heading: string;
  text: string;
  image: string;
};

const First = (props: Props) => {
  return (
    <>
      <Seperate />
      <div className="outer">
        <div className="inner">
          <div className="left">
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
          </div>
          <div className="right">
            <img alt="alt of" src={props.image}></img>
            <video
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              // src ="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              controls
              muted
              autoPlay
              loop
            ></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default First;
