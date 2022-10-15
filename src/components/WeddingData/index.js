import weddingContext from '../../stores/wedding-context'

import Countdown from './Countdown'
import EventContainer from './EventContainer'

import classes from './weddingData.module.css'

const WeddingData = () => {
    const events = weddingContext.events
    const party = events.party

    return (
        <div className={classes.container}>
            <Countdown date={events.date} />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={classes.weddingEvents}>
                    < EventContainer link={party.mapsLink} event="Fiesta"
                        buttonTxt="Cómo llegar">
                        <span>{party.date}</span>
                        <span>{party.hours} horas</span>
                        <span>{party.place}</span>
                        <span>{party.ubication}</span>
                    </EventContainer>
                    < EventContainer event="Dress Code - Elegante" withOut="true" style={{ paddingTop: '30px' }}>
                    </EventContainer>
                    < EventContainer event="Reservación" link="https://forms.gle/xKMkknvj3LSSCxuB7" buttonTxt="Confirmar asistencia">
                        <span>Esperamos que puedas acompañarnos. ¡Confirmanos tu asistencia!</span>
                    </EventContainer>
                </div>
            </div>
        </div >
    )
}

export default WeddingData