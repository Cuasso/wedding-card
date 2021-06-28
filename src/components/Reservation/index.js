import Title from '../UI/Title'
import ButtonLink from '../UI/ButtonLink'
import Popup from '../UI/Popup'

import classes from "./reservation.module.css"
import imgGift from '../../assets/images.png'

const buttonProps = {
    text: "Confirmar asistencia",
    link: "link a encuesta",
}

const Reservation = () => (
    <div className={classes.rsvpContainer}>
        <Title value="RSVP" style={{ marginTop: "15px", margin: "0 auto" }} />
        <p className={classes.sub}>Esperamos que puedas acompañarnos. ¡Confirmanos tu asistencia!</p>
        < ButtonLink {...buttonProps} style={buttonProps.style} />
        <img src={imgGift} />
        <Popup text="Nuestro CBU ;)">
            <p><strong>Nombre del Titular:</strong> Nombre Apellido</p>
            <p><strong>CBU:</strong> 12345678910</p>
            <p><strong>DNI:</strong> 12345678</p>
            <p><strong>ALIAS:</strong> conejo.saltarin</p>
            <p>Banco BBVA</p>
        </Popup>
    </div>
)

export default Reservation