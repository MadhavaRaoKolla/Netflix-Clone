"use client";
import styled from "styled-components";
import "./Form.scss";
const Form = () => {
  return (
    <div className="form">
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="details">
        <Input type="email" placeholder="Email address" />
        <Button>Get Started {">"}</Button>{" "}
        {/* styled button component not reusable component */}
      </div>
    </div>
  );
};

const Input = styled.input`
  flex: 1;
  padding: 0.4rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid rgba(94, 91, 91, 0.8);
  background-color: rgba(38, 38, 38, 0.5);
  color: rgba(128, 128, 128, 0.8);
`;

const Button = styled.button`
  margin: 0;
  padding: 0.8rem 1.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  background-color: #e50914;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a4040c;
  }
`;

export default Form;
