import { Link } from "react-router-dom";
import Language_Button from "./Language_Button"

function Header(props) {
    var dir;
    if(props.isHome){
        dir = "projects";
    }else{
        dir = "";
    }

    return(
        <div className="header">
            <div className="debut">
                <Link to={"/"+dir} className="project"><h2 className="in_button">{props.isHome? "My Projects" : "Home"}</h2></Link>
                <a href="https://github.com/celeste73-t">
                    <img src="src/assets/github-mark-white.svg" alt="Github" className="svg-icon2" />
                </a>
                <a href="https://www.linkedin.com/in/c%C3%A9leste-tollec-5908b232b/"> <img src="src/assets/Linkedin.svg" alt="Linkedin" /></a>
            </div>
            <Language_Button/>
        </div>
    );
}

export default Header