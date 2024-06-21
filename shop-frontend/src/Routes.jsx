import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
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