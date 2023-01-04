function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart.svg" alt="heart" />
      </div>
      <img width={123} height={123} src="/img/jewelry/1.png" alt="Ring" />
      <h5>Gold ring with pearl and some white </h5>
      <div className="d-flex justify-between ">
        <div className="d-flex align-center ">
          <span>
            <b>$ &nbsp;1,929</b>
          </span>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" />
        </button>
      </div>
    </div>
  )
}

export default Card
