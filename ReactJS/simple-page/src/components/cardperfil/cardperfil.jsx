import MyPeople from "../../assets/pessoa03.jpg";
import "./cardperfil.css"

function CardPerfil() {
    return (
        <div className="card-perfil">
            <img className="card-perfil__image" src={MyPeople} />
        </div>)
}

export default CardPerfil