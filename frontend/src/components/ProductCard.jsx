  
  //må huske å ta imot products
  export default function ProductCard({ p, setCart }) {
    //"dummy-content" lagt til midlertidig
    const handleClick = () => {
      setCart((prev) =>
        //annen type metode for å gå gjennom array, gir tilbake true eller false (boolean)
        // finns produktet allerede i handlevogna? hvis ja, nøkkelpunktet finns allerede, skal plusses på med 1
        prev.some(item => item.prodid === p.prodid) ?
          prev.map(item => item.prodid === p.prodid ? { ...item, quantity: item.quantity + 1 }
            : item
          ) :
          [...prev, { ...p, quantity: 1 }])
      console.log("Legg i handlekurv")
    }

    return (<article className="product-card">
      <img src={p.imageURL ? p.imageURL : "https://placehold.co/600x800?text=Bilde+kommer"} alt={p.productname} />
      <a href="#">{p.category}</a>
      <h3>{p.title}</h3>
      <p>Kr{p.price},-</p>
      <button onClick={handleClick}>Legg til i handlevogn</button>
    </article>)
  }