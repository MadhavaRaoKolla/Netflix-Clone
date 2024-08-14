import styles from "../../Movies.module.scss";

const Leftbutton = () => {
  return (
    <button className={`${styles.buttons} ${styles.left}`}>
      ㅤ
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="50">
        <path
          d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default Leftbutton;
