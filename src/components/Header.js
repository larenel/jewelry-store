function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={64} src="/img/logo.png" />
        <div>
          <h2>Jewelry House</h2>
          <p className="opacity-5">World's best Rings for sure!</p>
        </div>
      </div>
      <ul className="d-flex ">
        <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg" />
          <span>1205 rub</span>
        </li>
        <li>
          <img width={19} height={19} src="/img/user.svg" />
        </li>
      </ul>
    </header>
  )
}

export default Header

{
  /* <div style={{ display: 'none' }} className="overlay"></div> */
}
