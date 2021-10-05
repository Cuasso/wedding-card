import WeddingContext from '../../stores/wedding-context'

import Title from '../UI/Title'
import ButtonLink from '../UI/ButtonLink'

import classes from "./reservation.module.css"

const buttonProps = {
    text: "Confirmar asistencia",
    link: WeddingContext.reservation.link,
}

const style = {
    marginTop: "15px",
    margin: "0 auto",
}

const Reservation = () => (
    <div className={classes.rsvpContainer}>
        <Title value="RSVP" style={style} />
        <p className={classes.sub}>{WeddingContext.reservation.message}</p>
        < ButtonLink {...buttonProps} />
    </div>
)

export default Reservation