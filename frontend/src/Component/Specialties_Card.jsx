import { Link } from "react-router-dom";
import Language_Card from "./Language_Card";


function Specialties_Card(props) {
    return(
        <div className="specialties_card">
            <Link to="/projects"><h3>{props.name}</h3></Link>
            <div className="language_card_contener">
                <Language_Card id={props.id[0]} anim={false}/>
                <Language_Card id={props.id[1]} anim={false}/>
            </div>
        </div>
    );
}

export default Specialties_Card