import Man1 from "../assets/passport.png"
import Man2 from "../assets/pass.png"
import Card from "../Component/Card/Card"
import "./Profile.css"
const Profile = () => {
    return(
        <div className="cardcontent">
            <Card image={Man1} color="Card" text="Owoyemi Muiz" age="52 YEAR OLD" location="IKORODU" />
            <Card image={Man1} color="Card" text="Owonikoko Sodiq" age="72 YEAR OLD" location="IKORODU" />
            <Card image={Man1} color="Card" text="Babayemi Halimat" age="62 YEAR OLD" location="IKORODU" />
            <Card image={Man1} color="Card" text="Babajide Tobi" age="80 YEAR OLD" location="IKORODU" />
            

        </div>
    )
}
export default Profile