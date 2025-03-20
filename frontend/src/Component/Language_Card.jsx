import { Link } from "react-router-dom";

function Language_Card(props) {

    switch (props.id) {
        case 1:
            var image = "src/assets/Java.svg";
            var name = "Java";
            break;

        case 2:
            var image = "src/assets/C_sharp.svg";
            var name = "C#";
            break;

        case 3:
            var image = "src/assets/Unity.svg";
            var name = "Unity";
            break;

        case 4:
            var image = "src/assets/Godot.svg";
            var name = "Godot";
            break;
        
        case 5:
            var image = "src/assets/Opengl.svg";
            var name = "OpenGL";
            break;
        
        case 6:
            var image = "src/assets/Cuda.svg";
            var name = "CUDA";
            break;

        case 7:
            var image = "src/assets/HTML5.svg";
            var name = "HTML";
            break;

        case 8:
            var image = "src/assets/CSS3.svg";
            var name = "CSS";
            break;

        case 9:
            var image = "src/assets/Javascript.svg";
            var name = "JavaScript";
            break;
        
        case 10:
            var image = "src/assets/React.svg";
            var name = "React";
            break;
        
        case 11:
            var image = "src/assets/C.svg";
            var name = "C";
            break;

        case 12:
            var image = "src/assets/Python.svg";
            var name = "Python";
            break;

        case 13:
            var image = "src/assets/Tensorflow.svg";
            var name = "TensorFlow";
            break;

        case 14:
            var image = "src/assets/OpenCV.svg";
            var name = "OpenCV";
            break;
        
        case 15:
            var image = "src/assets/Sql.svg";
            var name = "SQL";
            break;

        default:
            var image = "https://placehold.co/75";
            var name = "placeholder";
            break;
    }

    return(
        <Link className= {`language_card ${props.anim? 'animate animate'+(props.id): ''}`} to={"/projects"}>
            <img src={image} class="svg-icon" alt={name} />
            <h3>{name}</h3>
        </Link>
    );
}

export default Language_Card