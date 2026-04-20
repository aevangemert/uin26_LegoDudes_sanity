import './style/lego.css'
import { products } from './assets/legodudes'
import { useEffect, useState } from 'react'
import Cart from './components/Cart'
import Products from './components/Products'
import Header from './components/Header'
import Nav from './components/Nav'
import CategoryTitle from './components/CategoryTitle'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CategoryPage from './components/CategoryPage'

function App() {

  /* const hei = "string"; */
  // const [hei, setHei] = useState();

  /*handlevogna skal ikke være åpen, dermed en boolean om åpen/ikke åpen by default
  state funksjon kontrollerer variabelen basert på hva brukeren gjør
  */
  const [isOpen, setIsOpen] = useState(false)
  //cart=variabel som holder på??..
  const [cart, setCart] = useState([])

  const [cartQuantity, setCartQuantity] = useState(0)

  const [totalSum, setTotalSum] = useState(0)

  console.log("Cart", cart)

  //dependency, en avhengighet i useEffecten
  //denne funksjonen skal skje hver gang det skjer endringer i cart, ikke når selve cart bygges
  useEffect(() => {
    //reduce summerer verdiene i arrayen
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)
    setCartQuantity(totalQuantity)
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    setTotalSum(total)
  }, [cart])

  function Page() {
    return (
      <main>
        <CategoryTitle />
        <Products products={products} setCart={setCart} />
      </main>
    )
  }

  return (
    <Layout setIsOpen={setIsOpen} cartQuantity={cartQuantity} isOpen={isOpen} cart={cart} setCart={setCart} totalSum={totalSum}>
      <Routes>
        <Route index element={<Page />} />
        <Route path="/kategori/:slug" element={<CategoryPage/>} />
        {/* <Route path='city' element={<CategoryTitle title="City" />} />
        <Route path='ninjago' element={<CategoryTitle title="Ninjago" />} /> */}
      </Routes>
    </Layout>
  )
}

export default App
