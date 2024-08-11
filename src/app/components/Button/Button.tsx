import "./Button.scss";

type Text = {
  text: string;
};

const Button = (props: Text) => {
  return (
    <button>
      {props.text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        role="img"
        data-icon="PlusStandard"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
  );
};

export default Button;
