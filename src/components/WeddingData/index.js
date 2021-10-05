import weddingContext from '../../stores/wedding-context'

import Countdown from './Countdown'
import Title from '../UI/Title'
import EventContainer from './EventContainer'

import classes from './weddingData.module.css'
import imgWedding from '../../assets/wedding-data.png'

const WeddingData = () => {
    const events = weddingContext.events
    const ceremony = events.ceremony
    const party = events.party

    let eventsComponent = null

    if (events.sameDay) {
        eventsComponent = (
            <div className={classes.weddingEvents}>
                < EventContainer link={party.mapsLink} event="Fiesta" >
                    <span>{party.date}</span>
                    <span>{party.hours} horas</span>
                    <span>{party.place}</span>
                    <span>{party.ubication}</span>
                </EventContainer>
            </div>
        )
    } else {
        eventsComponent = (
            <div className={classes.weddingEvents}>
                < EventContainer link={ceremony.mapsLink} event="Ceremonia" >
                    <span>{ceremony.date}</span>
                    <span>{ceremony.hours} horas</span>
                    <span>{ceremony.place}</span>
                    <span>{ceremony.ubication}</span>
                </EventContainer>
                < EventContainer link={party.mapsLink} event="Fiesta" >
                    <span>{party.date}</span>
                    <span>{party.hours} horas</span>
                    <span>{party.place}</span>
                    <span>{party.ubication}</span>
                </EventContainer>
            </div>
        )
    }

    return (
        <div className={classes.container}>
            <Countdown date={events.date} />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <img className={classes.imgWedding} src={imgWedding} alt="wedding" />
                <Title value="nuestra boda" />
                {eventsComponent}
            </div>
        </div>
    )
}

export default WeddingData