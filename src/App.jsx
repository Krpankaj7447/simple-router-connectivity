/*import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'
import Product from './pages/Product'

const App = () => {
  return (

    <div>

 <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/product' element={<Product/>}/>

</Routes>

<Navbar/>
    </div>
  )
}

export default App*/


import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Offer from './pages/Offer'
import OfferDetails from './pages/OfferDetails'
import Nav from './component/Nav'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Nav/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/offer' element={<Offer/>}/>
        <Route path='/offer/:id' element={<OfferDetails/>}/>


        <Route path='/product' element={<Product/>}>
        <Route path='men' element={<Men/>}/>
        <Route path='women' element={<Women/>}/>
        <Route path='kids' element={<Kids/>}/>

        </Route>
       


        <Route path='*' element={<NotFound/>}/>
      
       </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
