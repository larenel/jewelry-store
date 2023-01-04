function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between  mb-30">
          Cart
          <img className="removeBtn cu-p" src="/img/remove.svg" alt="Remove" />
        </h2>
        <div className="items">
          <div className="cartItem d-flex mb-20 align-center">
            <img
              className="mr-20"
              width={77}
              height={77}
              src="/img/jewelry/1.png"
              alt="Ring"
            />
            <div className="mr-20">
              <p className="mb-5">Gold ring with pearl and some white </p>
              <b>$ &nbsp;1,929</b>
            </div>
            <img className="removeBtn" src="/img/remove.svg" alt="Remove" />
          </div>
          <div className="cartItem  d-flex align-center">
            <img
              className="mr-20"
              width={77}
              height={77}
              src="/img/jewelry/1.png"
              alt="Ring"
            />
            <div className="mr-20">
              <p className="mb-5">Gold ring with pearl and some white </p>
              <b>$ &nbsp;1,929</b>
            </div>
            <img className="removeBtn" src="/img/remove.svg" alt="Remove" />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total: </span>
              <div></div>
              <b>$ 8,199</b>
            </li>
            <li>
              <span>Cashback: </span>
              <div></div>
              <b>$ 99</b>
            </li>
          </ul>
          <button className="checkoutButton ">
            Checkout
            <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer
