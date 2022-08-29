import React from 'react'
import {Routes,Route} from "react-router-dom"
import KidsHome from "../Kids/KidsHome"



import Home from '../Pages/Home'
import Login from '../Pages/Login'
import ManHome from '../Pages/ManHome'
import ManProducts from '../Pages/ManProducts'
import WomenHome from '../Women/WomenHome'
import WomenProducts from '../Women/WomenProduct'




export const AllRoutes = () => {
  return (
     <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/manhome' element={<ManHome/>}></Route>
         <Route path='/womenhome' element={<WomenHome/>}></Route>
         <Route path='/kidshome' element={<KidsHome/>}></Route>
         <Route path='/manproducts' element={<ManProducts/>}></Route>
          <Route path='/womenproducts' element={<WomenProducts/>}></Route>


         {/* <Route path='/Mens' element={<MensHomepage/>}></Route>
         <Route path='/Kids' element={<KidsHomepage/>}></Route>
         <Route path='/WomenProducts' element={<WomenProducts/>}></Route>
         <Route path="/ProductPage/:id" element={<ProductPage/>}></Route>
         <Route path="/Cart" element={<Cart/>}></Route>
         <Route path='/Checkout' element={<Checkout/>}></Route>
         
        <Route  path="/signin" element={<Signup/>}></Route> */}
     </Routes>

    )
}
