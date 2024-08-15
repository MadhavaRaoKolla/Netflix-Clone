import styles from "../../Movies.module.scss";
import { ButtonProp } from "./Leftbutton";

const Rightbutton = ({onClick}: ButtonProp) => {
  return (
    <button className={`${styles.buttons} ${styles.right}`} onClick={onClick}>
      ㅤ
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="50">
        <path
          d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default Rightbutton;
