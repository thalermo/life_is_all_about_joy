function Card(props) {
  return (
    <div className="card ">
      <div className="card-title "> {props.title}</div>
      <div className="img-container">
        <a href={props.url} target="_blank">
          <img
            className="card-img"
            src={props.img}
            alt="cozy in bed"
            border="0"
          />
        </a>
      </div>
      <h2>
        <div class="date">
          <span class="month">Dec</span>
          <span class="day">25</span>
        </div>
      </h2>
    </div>
  );
}

export default Card;
