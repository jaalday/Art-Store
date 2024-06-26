
import { useContext } from "react";
import { ShopContext} from "../Components/Shop-context";


export const products = [

    {
        id: 1,
        name: "Mountain Sunset Original",
        price: 59.99,
        image: "https://i.postimg.cc/522DLfzC/20240621-141237.jpg",
    },
    {
        id: 2,
        name: "Moth Girl Print",
        price: 15.00,
        image: "https://i.postimg.cc/P5MYskV2/20240621-174446.jpg",
    },
    {
        id: 3,
        name: "Fu Dog Print",
        price: 10.00,
        image: "https://i.postimg.cc/hPRhs54s/IMG-20210430-191614-965.jpg",
    },
    {
        id: 4,
        name: "Mountains in japan Original",
        price: 49.99,
        image: "https://i.postimg.cc/W38HhK4n/20240622-205015.jpg",
    },
    {
        id: 5,
        name: "Mushroom Skull Print",
        price: 15.00,
        image: "https://i.postimg.cc/25s03Ymh/20240621-141636.jpg",
    },
    {
        id: 6,
        name: "Mushroom Skull Print 2",
        price: 15.00,
        image: "https://i.postimg.cc/CxTMCPY0/20240621-141615.jpg",
    },
    {
        id: 7,
        name: "Mushroom Skull Print 3",
        price: 15.00,
        image: "https://i.postimg.cc/QxRPHvDQ/20240621-141543.jpg",
    },
    {
        id: 8,
        name: "Kudu Mendala Print",
        price: 15.00,
        image: "https://i.postimg.cc/XJWJk20m/Screenshot-20240110-210526-Gallery.jpg",
    },
    {
        id: 9,
        name: "Mushroom Skull Print 5",
        price: 15.00,
        image: "https://i.postimg.cc/L4bSHybS/Screenshot-20240110-212320-Gallery.jpg",
    },
    {
        id: 10,
        name: "Vultures Print",
        price: 15.00,
        image: "https://i.postimg.cc/hthpKr6k/Screenshot-20240110-210913-Gallery.jpg",
    },
    {
        id: 11,
        name: "Mushroom Skull Print 7",
        price: 15.00,
        image: "https://i.postimg.cc/3w2Y8c3L/20240621-141556.jpg",
    },
    {
        id: 12,
        name: "Mushroom Skull Print 8",
        price: 15.00,
        image: "https://i.postimg.cc/3w2Y8c3L/20240621-141556.jpg",
    },
    {
        id: 13,
        name: "Mushroom Skull Print 9",
        price: 15.00,
        image: "https://i.postimg.cc/3w2Y8c3L/20240621-141556.jpg",
    },
    {
        id: 14,
        name: "Mushroom Skull Print 10",
        price: 15.00,
        image: "https://i.postimg.cc/3w2Y8c3L/20240621-141556.jpg",
    },
    {
        id: 15,
        name: "Mushroom Skull Print 11",
        price: 15.00,
        image: "https://i.postimg",
    }
]



const Paintings = () => {  


    const {addToCart, cartItems} = useContext(ShopContext); 

    const cartItemammount =  cartItems[products.id]





    return (
        <div>
            <h1>Paintings</h1>
            <div className="paintings">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h3>{product.name}</h3>
                        <img className="product-image"
                         src={product.image} alt={product.name} />
                        <h4>${product.price}</h4>
                        <button className="addbutton" onClick={() => addToCart(product.id)}>Add to Cart {cartItemammount > 0 && <>(cartItemammount)</>}</button>
                    </div>
                ))}
                </div>
        </div>

    )
}

export default Paintings;