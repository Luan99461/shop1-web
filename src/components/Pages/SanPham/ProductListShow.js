import { useContext, useState } from "react"
import { CartContext } from "../../CartContext"

export default function ProductListShow({ product }) {

    // const [isAddToCart, setIsAddToCart] = useState(false)
    const { addToCart } = useContext(CartContext)


    return (
        <div className="product-container" key={product.id} style={{width:"250px"}}>
            <img className="product-image" src={product.image} alt={product.name} style={{ border:"1px solid black"}}></img>
            <div className="product-info" style={{backgroundColor: "White"}}>
                <p style={{border: "none"}}>{product.name}</p>
            <p style={{
                border: "none"
            }}>{product.price}</p>
        </div>
            {/* <img onClick={()=>handleClick(product)} className="cart-icon" src={iconshop} alt="" width="30"></img> */ }
            {/* <button disabled={isAddToCart}
                style={{
                    marginLeft: "65px",
                    padding: "1px 10px",
                    marginTop: "5px",
                    backgroundColor: "orange",
                    borderRadius: "3px",
                }} onClick={() => {
                    addToCart(product)
                    alert("Đã thêm sản phẩm vào giỏ hàng!");
                    // setIsAddToCart(true)
                }}> Thêm vào giỏ  </button>*/}
                <button 
                style={{
                    marginLeft: "65px",
                    padding: "1px 10px",
                    marginTop: "5px",
                    backgroundColor: "orange",
                    borderRadius: "3px",
                }} onClick={() => {
                    addToCart(product)
                    alert("Đã thêm sản phẩm vào giỏ hàng!");
                    // setIsAddToCart(true)
                }}> Thêm vào giỏ  </button>
            {/* <img className="magnifier-icon" src={lup} alt="" width="30"></img> */}
        </div >



    )

}