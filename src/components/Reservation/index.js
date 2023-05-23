import WeddingContext from '../../stores/wedding-context'

import Title from '../UI/Title'
import ButtonLink from '../UI/ButtonLink'

import classes from "./reservation.module.css"
import calendar from "../../assets/calendar.png"

const buttonProps = {
    text: "Confirmar asistencia",
    link: WeddingContext.reservationLink,
}

const Reservation = () => (
    <div className={classes.rsvpContainer}>
        <img src={calendar} className={classes.rsvpImg}/>       
        <p className={classes.sub}>Esperamos que seas parte de esta gran celebración.<br/>¡Confirmanos tu asistencia!</p>
        < ButtonLink {...buttonProps} />
    </div>
)

export default Reservation