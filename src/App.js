import React from 'react'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

import axios from 'axios'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')
  const [favorites, setFavorites] = React.useState([])

  React.useEffect(() => {
    axios
      .get('https://63b76b5b4d97e82aa3bcadb5.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
      })
    axios
      .get('https://63b76b5b4d97e82aa3bcadb5.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data)
      })
    axios
      .get('https://63b76b5b4d97e82aa3bcadb5.mockapi.io/favorites')
      .then((res) => {
        setFavorites(res.data)
      })
  }, [])

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://63b76b5b4d97e82aa3bcadb5.mockapi.io/favorites/${obj.id}`
        )
      } else {
        const { data } = await axios.post(
          'https://63b76b5b4d97e82aa3bcadb5.mockapi.io/favorites',
          obj
        )
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в fav')
    }
  }

  const onAddToCart = async (obj) => {
    try {
      const { data } = await axios.post(
        'https://63b76b5b4d97e82aa3bcadb5.mockapi.io/cart',
        obj
      )
      setCartItems((prev) => [...prev, data])
    } catch (error) {
      alert('Не удалось добавить в cart')
    }
  }

  // const onAddToFavorite = (obj) => {
  //   if (favorites.find((favObj) => favObj.id === obj.id)) {
  //     axios.delete(
  //       `https://63b76b5b4d97e82aa3bcadb5.mockapi.io/favorites/${obj.id}`
  //     )
  //   } else {
  //     axios
  //       .post('https://63b76b5b4d97e82aa3bcadb5.mockapi.io/favorites', obj)
  //       .then((res) => setFavorites((prev) => [...prev, res.data]))
  //   }
  // }

  // const onAddToCart = (obj) => {
  //   axios
  //     .post('https://63b76b5b4d97e82aa3bcadb5.mockapi.io/cart', obj)
  //     .then((res) => setCartItems((prev) => [...prev, res.data]))
  // }

  const onRemoveCartItem = (id) => {
    axios.delete(`https://63b76b5b4d97e82aa3bcadb5.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          cartItems={cartItems}
          onClose={() => setCartOpened(false)}
          onRemoveCartItem={onRemoveCartItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              onAddToFavorite={onAddToFavorite}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
