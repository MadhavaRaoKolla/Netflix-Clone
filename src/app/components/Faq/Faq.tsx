import Button from "../Button/Button";
import Form from "../Form/Form";
import Seperate from "../Seperate/Seperate";
import "./Faq.scss";

const Faq = () => {
  return (
    <>
      <Seperate />
      <div className="faq">
        <h1>Frequently Asked Questions</h1>
        <div className="second">
          <div className="questions">
            <Button text="What is Netflix?" />
            <Button text="How much does Netflix cost?" />
            <Button text="Where can i watch?" />
            <Button text="How do i cancel?" />
            <Button text="What can i watch on Netflix?" />
            <Button text="Is Netflix good for kids?" />
          </div>
          <Form />
        </div>
      </div>
    </>
  );
};

export default Faq;
