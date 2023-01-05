import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
  {
    title: 'Gold ring with pearl and some white',
    price: 1929,
    imageUrl: '/img/jewelry/1.png',
  },
  { title: 'Fancy faretin gold', price: 1190, imageUrl: '/img/jewelry/2.png' },
  {
    title: 'Necklace stars yep very cool',
    price: 4125,
    imageUrl: '/img/jewelry/3.png',
  },
  {
    title: 'Some hame wth im writing',
    price: 6225,
    imageUrl: '/img/jewelry/4.png',
  },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Bestsellers</h1>
          <div className="search-block d-flex ">
            <img src="/img/search.svg" alt="Search" srcset="" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex ">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
