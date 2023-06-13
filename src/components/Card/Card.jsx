import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt="" />
      </div>
      <div className="card-text">
        <div>
          <span>{props.title}</span>
        </div>
        <label>{props.overview}</label>
      </div>
    </div>
  );
};

export default Card;
