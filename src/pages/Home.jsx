import Card from '../components/Card'

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Search by request:  "${searchValue}"` : 'Bestsellers'}
        </h1>
        <div className="search-block d-flex ">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear removeBtn cu-p"
              src="/img/remove.svg"
              alt="Remove"
            />
          )}

          <input
            value={searchValue}
            onChange={onChangeSearchInput}
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="d-flex  flex-wrap">
        {items
          .filter((el) =>
            el.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCart(obj)}
              onAddToFavorite={(obj) => onAddToFavorite(obj)}
            />
          ))}
      </div>
    </div>
  )
}

export default Home
