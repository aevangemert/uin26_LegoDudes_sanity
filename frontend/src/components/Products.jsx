import ProductCard from "./ProductCard"

export default function Products({ products, setCart }) {
    return (<div id="product-list">
      {/*sender med hele objektet som en prop*/}
      {products.map(p => <ProductCard key={p.prodid} p={p} setCart={setCart} />)}
    </div>)
  }