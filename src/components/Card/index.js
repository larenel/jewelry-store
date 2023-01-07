import React from 'react'
import styles from './Card.module.scss'

function Card({
  id,
  onAddToFavorite,
  onFavorite,
  imageUrl,
  title,
  price,
  onPlus,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = React.useState(false)
  const [isFavorite, setIsFavorite] = React.useState(favorited)

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price })
    setIsAdded(!isAdded)
  }

  const onClickFavorite = () => {
    onAddToFavorite({ id, imageUrl, title, price })
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={styles.card}>
      <div onClick={onFavorite} className={styles.favorite}>
        <img
          onClick={onClickFavorite}
          alt="unliked"
          src={isFavorite ? '/img/liked-heart.svg' : '/img/heart.svg'}
        />
      </div>
      <img width={123} height={123} src={imageUrl} alt="Ring" />
      <h5>{title}</h5>
      <div className="d-flex justify-between ">
        <div className="d-flex align-center ">
          <span>
            <b>$ &nbsp;{price}</b>
          </span>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? '/img/checkedBtn.svg' : '/img/btn-default.svg'}
          alt="Plus"
        />
      </div>
    </div>
  )
}

export default Card
