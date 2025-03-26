import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
import Specialties_Card from "../Component/Specialties_Card";
import Language_Card from "../Component/Language_Card";
import Header from "../Component/Header";
import { getMainPage, getLanguage_Card, getLanguage_Cards } from "../../api";
import '../Style/home.css'
import { useEffect, useState } from "react";

function Home() {

    const [mainPage, setMainPage] = useState([])

    useEffect(() => {
        async function loadMainPage() {
            const data = await getMainPage()
            setMainPage(data)
        }
        loadMainPage()
    }, [])

    return(
        <>
            <Header isHome={true}/>
            <div className="center">
                <h1 className="a">{mainPage.T1}</h1>
                <Link to="/about"><h1 className="b">{mainPage.T2}</h1></Link>
                <h1 className="c">{mainPage.T3}</h1>
                <div className="my_specialties">
                    <h2>{mainPage.ST1}</h2>
                    <div className="specialties_card_contener">
                        <Specialties_Card name="Object Oriented Programation" id={[1,2]}/>
                        <Specialties_Card name="Game Devlopement" id={[3,4]}/>
                        <Specialties_Card name="GPU Programing" id={[5,6]}/>
                    </div>
                </div>

                <div className="other_tech">
                    <h2>{mainPage.ST2}</h2>
                    <div className="language_card_rotator">
                        <Language_Card id={7} anim={true}/>
                        <Language_Card id={8} anim={true}/>
                        <Language_Card id={9} anim={true}/>
                        <Language_Card id={10} anim={true}/>
                        <Language_Card id={11} anim={true}/>
                        <Language_Card id={12} anim={true}/>
                        <Language_Card id={13} anim={true}/>
                        <Language_Card id={14} anim={true}/>
                        <Language_Card id={15} anim={true}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default Home