import "./Footer.css";
import icon from "../Assets/Mesa_de_trabajo_1.png";
import Instagram_icon from "../Assets/Instagram_icon.webp";
import X_icon from "../Assets/X_icon.webp";
import Face_icon from "../Assets/Face_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__icon">
          <img src={icon} alt="" />
        </div>
        <div className="footer__about">
          <h3>About Us</h3>
          <p>
            This family called “TPB Store” was not created solely with the
            initiative of being a skin store, its idea is to support the
            community from its space and to be able to contribute whenever
            possible, we believe that we are achieving this thanks to all of you
            who support us day after day.
          </p>
        </div>
        <div className="footer__contact">
          <h3>Contact</h3>
          <a href="#">example@gmail.com</a>
          <a href="#">+54 9 381 546632</a>
        </div>
        <div className="footer__networks">
          <img src={Instagram_icon} alt="" />
          <img src={X_icon} alt="" />
          <img src={Face_icon} alt="" />
        </div>
      </div>
      <div className="footer__copy-terms-privacy">
        <p>© TPB Inc. 2024. Not affiliated with Valve Corp.</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
