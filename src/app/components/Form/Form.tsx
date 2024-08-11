import "./Form.scss";
const Form = () => {
  return (
    <div className="form">
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <div className="details">
        <input type="email" placeholder="Email address" />
        <button >Get Started {">"}</button>
      </div>
    </div>
  );
};

export default Form;
