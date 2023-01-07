function Drawer({ onClose, onRemoveCartItem, cartItems = [] }) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between  mb-30">
          Cart
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/remove.svg"
            alt="Remove"
          />
        </h2>

        {cartItems.length > 0 ? (
          <div className="itemsParent">
            <div className="items">
              {cartItems.map((obj) => (
                <div className="cartItem d-flex mb-20 align-center">
                  <img
                    className="mr-20"
                    width={77}
                    height={77}
                    src={obj.imageUrl}
                    alt="Ring"
                  />
                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b>$ &nbsp;{obj.price}</b>
                  </div>
                  <img
                    onClick={() => onRemoveCartItem(obj.id)}
                    className="removeBtn"
                    src="/img/remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
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
        ) : (
          <div className="cartEmpty d-flex align-center justify-content flex-column flex">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="/img/empty-cart.png"
              alt="EmptyCart"
            />
            <h2>Cart is empty</h2>
            <p className="opacity-7">Add atleast 1 item to checkout</p>
            <button onClick={onClose} className="checkoutButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Drawer
