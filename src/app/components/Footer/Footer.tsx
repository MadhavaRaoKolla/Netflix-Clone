import Dropdown from "../Dropdown/Dropdown";
import Seperate from "../Seperate/Seperate";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <Seperate />
      <footer className="footer">
        <div className="content">
          <span>Questions? Call 000-800-919-1694</span>
          <span className="links">
            <ul>
              <li>FAQ</li>
              <li>Help Centre</li>
              <li>Account</li>
              <li>Media center</li>
              <li>Inverstor Relations</li>
              <li>Jobs</li>
              <li>Ways to watch</li>
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Cookie Preferences</li>
              <li>Corporate Information</li>
              <li>Contat Us</li>
              <li>speed test</li>
              <li>Legal Notices</li>
              <li>Only on Netflix</li>
            </ul>
          </span>
          <span>
            <Dropdown />
          </span>
          <span>Netflix india</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
