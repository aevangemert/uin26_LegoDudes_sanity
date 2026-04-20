import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import client from "../helpers/client"


export default function Products({ products, setCart }) {
  //state som lagrer "ting" som kommer fra sanity
  const [sanityProducts, setSanityProducts] = useState(null)

  //anonym funksjon
  useEffect(() => {
    //asynkron funksjon. lager en variabel som heter allproducts som venter på at fetchen skal svare på groq-spørringen vår
    async function fetchAllProducts() {
      //spør om klienten kan fetche noe for oss (alle elementer av typen produkter)
      //henter alle på filterert "alt som er av typen produkt", typen product er definert gjennom name-innholdstypen vi lagde tidligere
      const allProducts = await client.fetch("*[_type == 'product']{_id, productname, price, 'category': productcategory->categoryname, 'imageURL': productimage.asset->url}")
      //setter/lagrer allProducts inni staten vår slik at de er tilgjengelige i applikasjonen
      setSanityProducts(allProducts)
    }
    //kjører funksjonen når noe endrer seg på nettsiden (etter at den er klarert)
    fetchAllProducts()
    //dependency array (ingen spesifikk ting som endres, trenger ikke legge inn noe)
    //mapping, lister opp alle produktene fra sanity
  },[])

  console.log(sanityProducts)

  return (<div id="product-list">
    {/*sender med hele objektet som en prop*/}
    {sanityProducts?.map(p => <ProductCard key={p._id} p={p} setCart={setCart} />)}
  </div>)
}