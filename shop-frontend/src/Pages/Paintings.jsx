
import { useContext } from "react";
import { ShopContext } from "../Components/Shop-context";


export const products = [

    {
        id: 1,
        name: "Sunset on the Marsh",
        price: 59.99,
        image: "https://i.imgur.com/5H6g1lq.jpg",
    },
    {
        id: 2,
        name: "Blue Ridge Mountains",
        price: 49.99,
        image: "https://i.imgur.com/5H6g1lq.jpg",
    }
]


const Paintings = () => {  





    return (
        <div>
            <h1>Paintings</h1>
        </div>
    )
}

export default Paintings;