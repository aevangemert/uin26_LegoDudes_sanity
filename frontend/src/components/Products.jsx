import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import client from "../helpers/client"


export default function Products({ products, setCart }) {
  //state som lagrer ting som kommer fra sanity
  const [sanityProducts, setSanityProducts] = useState(null)

  //anonym funksjon
  useEffect(() => {
    //asynkron funksjon
    async function fetchAllProducts() {
      //spør om klienten kan fetche noe for oss (alle elementer av typen produkter)
      const allProducts = await client.fetch("*[_type == 'product']{_id, productname, price, 'category': productcategory->categoryname, 'imageURL': productimage.asset->url}")
      //setter allProducts inni staten vår
      setSanityProducts(allProducts)
    }
    //kjører funksjonen
    fetchAllProducts()
    //dependency array (ingen spesifikk ting som endres, trenger ikke legge inn noe)
  },[])

  console.log(sanityProducts)

  return (<div id="product-list">
    {/*sender med hele objektet som en prop*/}
    {sanityProducts?.map(p => <ProductCard key={p._id} p={p} setCart={setCart} />)}
  </div>)
}