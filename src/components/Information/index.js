import Card from "../Card"
import classes from "./information.module.css"

const Information = () => {
    return (
        <div className={classes.containerInfo}>
            <Card title="música"
                text="Cual es la canción que no debe faltar en la playlist de la fiesta?"
                btnText="Sugerir Canción"
            />            
            <Card
                title="DRESS CODE"
                text="Una orientación para tu vestuario"
                btnText="Elegante"
            />
            <Card
                title="Tips y notas"
                text="Información adicional para tener en cuenta"
                btnText="+ info"
            />
        </div>
    )
}

export default Information