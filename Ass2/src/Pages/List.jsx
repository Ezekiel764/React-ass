import "./List.css"
import Food1 from "../assets/food-image1.jpg"
import Food2 from "../assets/food-image2.jpg"
import Food3 from "../assets/food-image3.jpg"
import Food4 from "../assets/food-image4.jpg"
import Product from "../Component/Product/Product"
const List = () =>{
    return(
        <div className="Productcontent">
            <Product image={Food1} color="Product" text="Special package" product="Salad" price="N3000" />
            <Product image={Food2} color="Product" text="Basic package" product="Fried-rice" price="N5000" />
            <Product image={Food3} color="Product" text="Premium package" product="Jollf-rice" price="N7000" />
            <Product image={Food4} color="Product" text="Nova package" product="Spaghetti" price="N10,000" />
        </div>
 )
}
export default List    