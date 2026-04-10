import CartItem from "./CartItem"

//component for handlekurven
  export default function Cart({ isOpen, cart, setCart, totalSum }) {
    return (
      //ternary operator
      <section id="cart" className={isOpen ? "" : "hidden"}>
        <table id="cart-items">
          <tbody>
            {cart.length <= 0 ?
              (<tr>
                <td>Ingen varer i handlevognen enda</td>
              </tr>) : (cart.map(p => <CartItem key={p.prodid} p={p} setCart={setCart} />))
            }
          </tbody>
        </table>
        <p>Total pris: <span id="total-price">{totalSum}</span>NOK</p>
      </section>
    )
  }