import { Props } from "../First/First";
import Seperate from "../Seperate/Seperate";
import "./Second.scss";

const Second = (props: Props) => {
  return (
    <>
      <Seperate />
      <div className="outside">
        <div className="inner">
          <div className="left">
            <img alt="Stranger Things" src={props.image} />
          </div>
          <div className="right">
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
