import WeddingContext from '../../stores/wedding-context'

import Title from '../UI/Title'
import ButtonLink from '../UI/ButtonLink'

import classes from "./reservation.module.css"

const buttonProps = {
    text: "Confirmar asistencia",
    link: WeddingContext.reservationLink,
}

const Reservation = () => (
    <div className={classes.rsvpContainer}>
        <Title value="RSVP" style={{ marginTop: "15px", margin: "0 auto" }} />
        <p className={classes.sub}>Esperamos que puedas acompañarnos. ¡Confirmanos tu asistencia!</p>
        < ButtonLink {...buttonProps} />
    </div>
)

export default Reservation