import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./UserReview.css";
import avatar from "../Assets/avatar.jpg";
import avatar2 from "../Assets/avatar2.png";
import avatar3 from "../Assets/avatar3.jpg";
import stars from "../Assets/stars.png";

const UserReview = () => {
  return (
    <div className="user-review-header">
      <h1>USER REVIEWS</h1>
      <hr />
      <div className="user-review">
        <div className="user-review__container">
          <div className="user-review__item">
            <img className="user-review__item__avatar" src={avatar} alt="" />
            <div className="user-review__item__data">
              <p className="user-review__item__name">Alfonso David Montar</p>
              <p className="user-review__item__days">5 Days ago</p>
            </div>
          </div>
          <div className="user-review__item__review">
            <img className="user-review__item__stars" src={stars} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              iste impedit cupiditate molestiae repudiandae, asperiores non.
              Illo eos reprehenderit quae est. Earum, voluptates? Fugit
              officiis, dicta nisi incidunt sapiente odit!
            </p>
          </div>
        </div>
        <div className="user-review__container">
          <div className="user-review__item">
            <img className="user-review__item__avatar" src={avatar} alt="" />
            <div className="user-review__item__data">
              <p className="user-review__item__name">Carl Mark Sans</p>
              <p className="user-review__item__days">5 Days ago</p>
            </div>
          </div>
          <div className="user-review__item__review">
            <img className="user-review__item__stars" src={stars} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              iste impedit cupiditate molestiae repudiandae, asperiores non.
              Illo eos reprehenderit quae est. Earum, voluptates? Fugit
              officiis, dicta nisi incidunt sapiente odit!
            </p>
          </div>
        </div>
        <div className="user-review__container">
          <div className="user-review__item">
            <img className="user-review__item__avatar" src={avatar3} alt="" />
            <div className="user-review__item__data">
              <p className="user-review__item__name">Tom Brigmuck</p>
              <p className="user-review__item__days">5 Days ago</p>
            </div>
          </div>
          <div className="user-review__item__review">
            <img className="user-review__item__stars" src={stars} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              iste impedit cupiditate molestiae repudiandae, asperiores non.
              Illo eos reprehenderit quae est. Earum, voluptates? Fugit
              officiis, dicta nisi incidunt sapiente odit!
            </p>
          </div>
        </div>
        <div className="user-review__container">
          <div className="user-review__item">
            <img className="user-review__item__avatar" src={avatar} alt="" />
            <div className="user-review__item__data">
              <p className="user-review__item__name">Ronald Truck</p>
              <p className="user-review__item__days">5 Days ago</p>
            </div>
          </div>
          <div className="user-review__item__review">
            <img className="user-review__item__stars" src={stars} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              iste impedit cupiditate molestiae repudiandae, asperiores non.
              Illo eos reprehenderit quae est. Earum, voluptates? Fugit
              officiis, dicta nisi incidunt sapiente odit!
            </p>
          </div>
        </div>
        <div className="user-review__container">
          <div className="user-review__item">
            <img className="user-review__item__avatar" src={avatar2} alt="" />
            <div className="user-review__item__data">
              <p className="user-review__item__name">Jennifer Williams</p>
              <p className="user-review__item__days">5 Days ago</p>
            </div>
          </div>
          <div className="user-review__item__review">
            <img className="user-review__item__stars" src={stars} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              iste impedit cupiditate molestiae repudiandae, asperiores non.
              Illo eos reprehenderit quae est. Earum, voluptates? Fugit
              officiis, dicta nisi incidunt sapiente odit!
            </p>
          </div>
        </div>
        <div className="user-review__container">
          <div className="user-review__item">
            <img className="user-review__item__avatar" src={avatar} alt="" />
            <div className="user-review__item__data">
              <p className="user-review__item__name">James Osbornd</p>
              <p className="user-review__item__days">5 Days ago</p>
            </div>
          </div>
          <div className="user-review__item__review">
            <img className="user-review__item__stars" src={stars} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              iste impedit cupiditate molestiae repudiandae, asperiores non.
              Illo eos reprehenderit quae est. Earum, voluptates? Fugit
              officiis, dicta nisi incidunt sapiente odit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
