import weddingContext from '../../stores/wedding-context'

import Countdown from './Countdown'
import EventContainer from './EventContainer'

import classes from './weddingData.module.css'
import glasses from '../../assets/glasses.png'

const WeddingData = () => {
    const events = weddingContext.events
    const party = events.party

    return (
        <div className={classes.container}>
            <Countdown date={events.date} />
            <img className={classes.imgWedding} src={glasses} alt="glasses"/>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div className={classes.weddingEvents}>
                    < EventContainer link={party.mapsLink} event="Celebración"
                        buttonTxt="Cómo llegar">
                        <span>{party.date}</span>
                        <span>{party.hours} horas</span>
                        <span>{party.place}</span>
                        <span>{party.ubication}</span>
                    </EventContainer>                    
                </div>
            </div>
        </div >
    )
}

export default WeddingData