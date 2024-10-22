import "./CSS/About.css";
import about from "../components/Assets/about.webp";
import affiliate from "../components/Assets/affiliate.jpg";
import trade from "../components/Assets/Trade_skins.png";

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <h1>ABOUT STORE</h1>
        <hr />
        <div className="about__info">
          <img src={about} alt="" />
          <div className="about__info-text">
            <h3>Personalized attention 24/7</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum nihil modi quidem quo cum enim numquam. Repudiandae
              ratione iusto repellendus necessitatibus autem? Facere soluta
              impedit corporis! Modi fugiat enim laudantium. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Animi laboriosam suscipit
              veniam facere minus tempore. Necessitatibus voluptatem, vel
              praesentium minus est totam inventore, voluptate fugit labore
              molestiae impedit non soluta?
            </p>
          </div>
        </div>
        <h2>AFFILIATE AGREEMENT</h2>
        <div className="about__affiliates">
          <img src={affiliate} alt="" />
          <div className="about__affiliates-text">
            <h3>Join our affiliate project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis incidunt assumenda, doloribus obcaecati sunt libero quo
              enim voluptate! Quas officiis nesciunt asperiores, id voluptatum
              amet eveniet fugit error corporis ipsa. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Harum, reiciendis.
              Reprehenderit delectus sunt perspiciatis, dolor dolores quaerat
              similique veniam ut ad repudiandae repellat qui possimus, sequi
              eum, voluptatibus porro voluptatum?
            </p>
          </div>
        </div>
        <h2>WE PAY YOU FOR YOUR SKINS</h2>
        <div className="about__affiliates">
          <img src={trade} alt="" />
          <div className="about__affiliates-text">
            <h3>We buy your skins at market price</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis incidunt assumenda, doloribus obcaecati sunt libero quo
              enim voluptate! Quas officiis nesciunt asperiores, id voluptatum
              amet eveniet fugit error corporis ipsa. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Harum, reiciendis.
              Reprehenderit delectus sunt perspiciatis, dolor dolores quaerat
              similique veniam ut ad repudiandae repellat qui possimus, sequi
              eum, voluptatibus porro voluptatum?
            </p>
          </div>
        </div>
      </div>
      <div className="about__more-games"></div>
    </div>
  );
};

export default About;
