function App() {
  return (
    <div className="wrapper clear">
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
      <div className="content p-40">
        <h1 className="mb-40">Bestsellers</h1>

        <div className="d-flex">
          <div className="card">
            <img width={123} height={123} src="/img/jewelry/1.png" alt="Ring" />
            <h5>Gold ring with pearl rere dw dwd </h5>
            <div className="d-flex justify-between ">
              <div className="d-flex align-center ">
                <span>
                  <b>$ 1,929</b>
                </span>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={123} height={123} src="/img/jewelry/2.png" alt="Ring" />
            <h5>Gold braclet with pearl </h5>
            <div className="d-flex justify-between ">
              <div className="d-flex align-center">
                <span>
                  <b>$ 4,249</b>
                </span>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={123} height={123} src="/img/jewelry/3.png" alt="Ring" />
            <h5>Gold Lorem ipsum dolor sit </h5>
            <div className="d-flex justify-between ">
              <div className="d-flex align-center">
                <span>
                  <b>$ 5,815</b>
                </span>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={123} height={123} src="/img/jewelry/4.png" alt="Ring" />
            <h5>Some fancy necklace</h5>
            <div className="d-flex justify-between ">
              <div className="d-flex align-center">
                <span>
                  <b>$ 1,099</b>
                </span>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
