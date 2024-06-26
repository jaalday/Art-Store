
import { Link } from "react-router-dom";

const NavBar = () => {


    return(
        <>
        <div className="nav">


           <Link to="/"><h4 className="nav-text">Home</h4></Link>

           <div className="dropdown">
           <h4 className="nav-text">Art</h4>
           <div className="dropdown-content">
                <a href="/paintings">Paintings</a>
                <a href="/animal-ears">Animal Ears</a>
                <a href="/clay">Clay Jewlery</a>

           </div>
           </div>

           <Link to="/contact"> <h4 className="nav-text">Contact</h4></Link>
            
            <Link to ="/about"><h4 className="nav-text">About</h4></Link>
       
           <Link to="/cart"><img src="https://static.vecteezy.com/system/resources/previews/016/220/847/non_2x/shopping-cart-icon-free-vector.jpg" alt="cart" className="cart-icon"/></Link> 

      

        </div>
        </>
    )
}
export default NavBar;