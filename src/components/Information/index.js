import Card from "../Card"
import classes from "./information.module.css"
import musicImg from "../../assets/icons/music.gif"
import dressCodeImg from "../../assets/icons/elegant.gif"
import tipsImg from "../../assets/icons/tips.gif"

const Information = () => {
    return (
        <div className={classes.containerInfo}>
            <Card title="música"
                text="Cual es la canción que no debe faltar en la playlist de la fiesta?"
                btnText="Sugerir Canción"
                imgLink={musicImg}
            />            
            <Card
                title="DRESS CODE"
                text="Una orientación para tu vestuario"
                btnText="Elegante"
                imgLink={dressCodeImg}
            />
            
            <Card
                title="Tips y notas"
                text="Información adicional para tener en cuenta"
                btnText="+ info"
                imgLink={tipsImg}
                popup="true"                
            />
        </div>
    )
}

export default Information

