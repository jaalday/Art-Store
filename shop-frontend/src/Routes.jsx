import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Paintings from './Pages/Paintings';
import Ears from './Pages/Ears';
import Clay from './Pages/Clay';
import Cart from './Pages/Cart';


const router = createBrowserRouter([

{
    element: <Layout/>,
    children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/about',
            element: <About/>,
        },
        {
            path: '/contact',
            element: <Contact/>,
        },
        {
            path: '/paintings',
            element: <Paintings/>,
        }, 
        {
            path: '/animal-ears',
            element: <Ears/>,
        },
        {
            path: '/clay',
            element: <Clay/>,
        },
        {
            path: '/cart',
            element: <Cart/>,
        }
    

    ]

}


]);

function RouterFunc(){
    return(
        <>
        <RouterProvider router={router}/>
            
        </>
    )
}

export default RouterFunc;