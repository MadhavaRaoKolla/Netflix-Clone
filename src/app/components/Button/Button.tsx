"use client"; //to run styled components on server side make it client side
import styled from "styled-components";

type Text = {
  text: string;
};

const Button = (props: Text) => {
  return (
    <FaqButton>
      {props.text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="24"
        height="35"
        viewBox="0 0 24 24"
        role="img"
        data-icon="PlusStandard"
        aria-hidden="true"
      >
        <path
          d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z"
          fill="currentColor"
        ></path>
      </svg>
    </FaqButton>
  );
};

const FaqButton = styled.button`
  background-color: rgb(48, 47, 47);
  border: none;
  color: white;
  margin: 5px;
  padding: 1.4rem 1.8rem;
  display: flex;
  justify-content: space-between;
  transition: 0.2s ease-in;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
    background-color: rgb(83, 82, 82);
  }
  svg {
    padding: 5px 0;
    color: white;
  }
`;

export default Button;
