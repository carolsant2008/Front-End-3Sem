import { Link } from "react-router-dom";
import"./Header.css";

function Header() {
   return(
    <nav className="navbar">
        <Link to="/" >Home</Link>
        <Link to="Quemsomos" >Quemsomos</Link>
        <Link to="/frutas" ></Link>
        <Link to="/produtos" ></Link>
    </nav>
   ) 
}
export default Header