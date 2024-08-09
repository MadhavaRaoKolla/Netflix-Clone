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
    <Seperate/>
    <div className="outer">
      <div className="inner">
        <div className="left">
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>
        <div className="right">
          <img alt="alt of" src={props.image}></img>
        </div>
      </div>
    </div>
    </>
  );
};

export default First;
