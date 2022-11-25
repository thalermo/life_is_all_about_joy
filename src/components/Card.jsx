// The Card function that receives props and renders the cards 

function Card(props) {
  console.log(props.img);

  return (
    <div className="card ">
      <div className="card-title "> {props.title}</div>
      <div className="img-container">
        <a href={props.url} target="_blank">
          <img
            className="card-img"
            // src={require("../images/adoption_day.png")}
            src={props.img}
            alt="title"
            border="0"
          />
        </a>
      </div>
      <h2>
        <div className="date">
          <span className="month">Dec</span>
          <span className="day">25</span>
        </div>
      </h2>
    </div>
  )
}


export default Card;
