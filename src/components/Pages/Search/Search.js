import React, { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import { ProductsListJson } from "../../DataProduct/ProductJson";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isAddToCart, setIsAddToCart] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleSearch = () => {
    const results = ProductsListJson.filter((product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Tìm kiếm sản phẩm"
        style={{
          width: "500px",
          marginLeft: "500px",
          padding: "5px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          marginLeft: "2px",
          borderRadius: "5px",
          padding: "5px 15px",
        }}
      >
        Tìm kiếm
      </button>

      {searchResults.length > 0 ? (
        <><h1 style={{marginTop:"20px"}}>Các sản phẩm phù hợp cho từ khóa "{keyword}"</h1>
        <ul>
          {searchResults.map((product) => (
            <li
              key={product.id}
              style={{
                display:"inline-block",
                margin: "10px 30px 10px 0px",
                width: "250px",
                listStyle: "None",
                verticalAlign: "top",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ border: "1px solid black", borderRadius:"5px"}}
              />
              <p style={{ border: "none", textAlign:"center"}}>{product.name}</p>
              <p style={{ border: "none",textAlign:"center" }}>{product.price}</p>
              <button
                disabled={isAddToCart}
                style={{
                  marginLeft: "100px",
                  padding: "1px 10px",
                  marginTop: "5px",
                  backgroundColor: "orange",
                  borderRadius: "3px",
                }}
                onClick={() => {
                  addToCart(product);
                  alert("Đã thêm sản phẩm vào giỏ hàng!");
                  setIsAddToCart(true);
                }}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
        </>
      ) : (
        <p>Không tìm thấy sản phẩm.</p>
      )}
    </div>
    
  );
};

export default Search;