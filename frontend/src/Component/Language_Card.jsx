import { Link } from "react-router-dom";
import { getLanguage_Card } from "../../api";
import { useEffect, useState } from "react";

function Language_Card(props) {

    const [language_Card, setLanguage_Card] = useState({})

    let id = "langage_" + props.id

    useEffect(() => {
        async function loadLanguage_Card() {
            let data = await getLanguage_Card(id)
            setLanguage_Card(data)
        }
        loadLanguage_Card()
    }, [])


    return(
        <Link className= {`language_card ${props.anim? 'animate animate'+(props.id): ''}`} to={"/projects"}>
            <img src={language_Card.image} className="svg-icon" alt={language_Card.name} />
            <h3>{language_Card.name}</h3>
        </Link>
    );
}

export default Language_Card