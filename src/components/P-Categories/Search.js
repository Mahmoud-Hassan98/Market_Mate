/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useState } from "react";
import { CartContext, ProductContext } from "../../App";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const { data } = useContext(ProductContext);

  const [searchQuery, setSearchQuery] = useState("");

  const { cart, setCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <AiOutlineSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="simple-search"
            onChange={handleSearch}
            className="border border-gray-300  text-sm rounded-lg block w-full pl-10 p-2.5 bg-white text-green-600"
            placeholder="Search"
            required
          />
        </div>
      </form>

      <div className="md:container md:mx-auto">
      <div className="flex flex-wrap justify-center -mx-6">
      {filteredData.map((d, i) => (
        <div
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-6 mb-8"
          key={i}
        >
          <div className="bg-white border border-gray-200 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 p-4 h-full">
            <img
              className="rounded-t-md w-full h-40 object-cover object-center"
              src={d.image}
              alt=""
            />
            <div className="p-4 h-full">
              <h5 className="mb-2 text-lg font-semibold text-gray-900 dark:text-black">
                {d.name}
              </h5>
              <p className="mb-4 text-sm text-gray-700 dark:text-gray-400">
                {d.description}
              </p>
              <p className="mb-3 font-medium text-lg text-gray-700 dark:text-gray-400">
                ${d.price}
              </p>
              <button
                onClick={() => handleAddToCart(d)}
                className="block w-full py-3 text-lg font-semibold text-center text-white bg-yellow-400 rounded-md hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700"
                style={{ cursor: 'pointer' }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</>
);
};

export default Search;
