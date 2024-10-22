import "./Card.css"
const Card = (props) =>{
    return(
        <div className="container">
            <div className={`profilecard${props.color}`}>
                <img src={props.image} alt="" />
                <h2>{props.text}</h2>
                <p>{props.age}</p>
                <p>{props.location}</p>
            </div>

        </div>
    )
}
export default Card