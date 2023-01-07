import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <Link to="/">
          <img width={40} height={64} src="/img/logo.png" />
        </Link>

        <div>
          <h2>Jewelry House</h2>
          <p className="opacity-5">World's best Rings for sure!</p>
        </div>
      </div>

      <ul className="d-flex ">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={20} height={20} src="/img/cart.svg " alt="Cart" />
          <span>1205 rub</span>
        </li>
        <li className="mr-15 cu-p">
          <Link to="/favorites">
            <img width={20} height={20} src="/img/heart.svg" alt="Favorites" />
          </Link>
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
  )
}

export default Header

{
  /* <div style={{ display: 'none' }} className="overlay"></div> */
}
