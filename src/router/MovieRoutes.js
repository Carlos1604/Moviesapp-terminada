import {Route,Routes} from 'react-router-dom'

import { Navbar } from '../Components/Navbar'

import {Trending, Home, Top10, Login} from '../pages'


export const AppRoutes =() => {
    return(
        
        <Routes>
         <Route path ='/login' element ={<Login />}/>
         <Route path ='/*' element ={<Login />}/>
         
        </Routes>







    )










}