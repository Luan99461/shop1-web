import { useContext, useEffect } from "react"
import { CartContext } from "../../CartContext"
import { useState } from "react"


export default function Cart() {
  const { cartItems } = useContext(CartContext)
  const { removeCart } = useContext(CartContext)
  const [total, setTotal] = useState()

  function SetTotal(products) {
    let totaltemp = 0;

    products.forEach(p => {
      let price = parseFloat(p.price.replace("$", ""))
      let cost = price * p.quantity
      totaltemp += cost
    });
    setTotal(totaltemp)
  }
  useEffect(() => {
    SetTotal(cartItems)
  }, [cartItems])
  return (
    <div className="shopping-cart">
      <div className="px-4 px-lg-0">
        <div className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="border-0 bg-light" scope="col">
                          <div className="p-2 px-3 text-uppercase">Sản phẩm</div>
                        </th>
                        <th className="border-0 bg-light" scope="col">
                          <div className="py-2 text-uppercase">Giá</div>
                        </th>
                        <th className="border-0 bg-light" scope="col">
                          <div className="py-2 text-uppercase">Số lượng</div>
                        </th>
                        <th className="border-0 bg-light" scope="col">
                          <div className="py-2 text-uppercase">Xóa</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems.map((cart, index) => (<tr key={index}>
                          <th scope="row">
                            <div className="p-2">
                              <img
                                className="img-fluid rounded shadow-sm"
                                src={cart.image}
                                alt=""
                                width={70}
                              />
                              <div className="ml-3 d-inline-block align-middle">
                                <h5 className="mb-0">

                                  {cart.name}

                                </h5>
                                {/* <span className="text-muted font-weight-normal font-italic">
                                  Category: Electronics
                                </span> */}
                              </div>
                            </div>
                          </th>
                          <td className="align-middle">
                            <strong>{cart.price}</strong>
                          </td>
                          <td className="align-middle">
                            <strong>{cart.quantity}</strong>
                          </td>
                          <td className="align-middle">
                            <i className="bi bi-trash-fill" onClick={() => removeCart(cart)}></i>
                          </td>
                        </tr>))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row py-5 p-4 bg-white rounded shadow-sm">

              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Tổng thanh toán{" "}
                </div>
                <div className="p-4">
                  <p className="font-italic mb-4">
                    Chi phí vận chuyển và chi phí bổ sung được tính toán dựa trên giá trị bạn
                    đã nhập.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Tổng </strong>
                      <strong> ${total}</strong>

                    </li>
                  </ul>
                  <a className="btn btn-dark rounded-pill py-2 btn-block" href="#">
                    Tiến hành thanh toán
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}