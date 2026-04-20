import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../helpers/client";

export default function Nav() {
  const [categories, setCategories] = useState(null)


  useEffect(() =>
    //asynkron funksjon
    async function fetchAllCategories() {
      //tillater oss å vente på resultatet
      //skriver groq og henter alle kategorier
      const allCategories = await client.fetch("*[_type == 'category]{categoryname}")

      setCategories([allCategories])

      fetchAllCategories()

    },[])

    console.log(categories)

  return (
    <nav>
      {categories?.map((c, index) => <Link key={index} to={"/kategori/" + c.slug.current}>{c.categoryname}</Link>)}
      {/*tatt bort lenkene som var for å erstatte med dynamiske lenker*/}
      {/* <Link to="city">City</Link>
      <Link to="ninjago">Ninjago</Link>
      <Link to="castlesandknights">Castles & Knights</Link>
      <Link to="marineandpirates">Marine & Pirates</Link>
      <Link to="moviecharacters">Movie characters</Link> */}
    </nav>
  )
}