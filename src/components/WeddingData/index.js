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

    const messageStyle = { fontSize: 'large', paddingTop: '20px' }
    const strongStyle = { color: '#deaa0e' }

    return (
        <div className={classes.container}>
            <Countdown date={events.date} />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <img className={classes.imgWedding} src={imgWedding} alt="wedding" />
                <Title value="nuestra boda" />
                <p style={messageStyle}>
                    Lo que más deseamos es que vengas a divertirte!!<br />
                    <strong style={strongStyle}>Dress code</strong><br />
                    Elegante - Elegante sport
                </p>
                <div className={classes.weddingEvents}>
                    < EventContainer link={party.mapsLink} event="Fiesta" >
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