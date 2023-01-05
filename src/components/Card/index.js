import styles from './Card.module.scss'

function Card(props) {
  const onClickButton = () => {
    alert(props.price)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart.svg" alt="heart" />
      </div>
      <img width={123} height={123} src={props.imageUrl} alt="Ring" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between ">
        <div className="d-flex align-center ">
          <span>
            <b>$ &nbsp;{props.price}</b>
          </span>
        </div>
        <button onClick={onClickButton} className="button">
          <img width={11} height={11} src="/img/plus.svg" />
        </button>
      </div>
    </div>
  )
}

export default Card
