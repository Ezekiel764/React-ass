import "./Product.css"
const Product = (props) => {
    return(
        <div className="Container">
            <div className={`productlist${props.color}`}>
                <img src={props.image} alt="" />
                <h2>{props.text}</h2>
                <p>{props.Product}</p>
                <p>{props.price}</p>
            </div>

        </div>
    )
}
export default Product