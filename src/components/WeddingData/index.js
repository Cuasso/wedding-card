import { Fragment } from 'react'
import weddingContext from '../../stores/wedding-context'

import Countdown from './Countdown'
import Title from '../UI/Title'
import EventContainer from './EventContainer'

import classes from './weddingData.module.css'
import imgConfetti from '../../assets/icons/confetti.gif'
import imgLine from '../../assets/line.svg'

const WeddingData = () => {
    const events = weddingContext.events
    const party = events.party

    return (
        <Fragment>
            <div className={classes.container}>
                <Title value="Faltan" />
                <Countdown date={events.date} />
                <img src={imgConfetti} className={classes.imgParty} /><br />
                <Title value="Fiesta" />
                <EventContainer
                    title="Día"
                    text="Lunes 21 de Noviembre - 13hs"
                    buttonTxt="Agendar"
                    buttonLink="https://calendar.google.com/event?action=TEMPLATE&tmeid=NDQ2ZGJnczRmanBrMWUzMDRwNjBqbzFib3MgMXFjc3JncmJhNWp1OTNpMWN0aWI1NDNnZnNAZw&tmsrc=1qcsrgrba5ju93i1ctib543gfs%40group.calendar.google.com"
                />
                <EventContainer
                    title="Lugar"
                    text="Cielo Recepciones"
                    buttonTxt="Confirmar Asistencia"
                    buttonLink="https://forms.gle/TukqvqTiVaj4Yvr88"
                />
                <EventContainer
                    title="Lugar"
                    text="Cnel. Juan Francisco Seguí 5936 - Isidro Casanova"
                    buttonTxt="¿Cómo Llegar?"
                    buttonLink="https://goo.gl/maps/Aq8hxDBRvN3xzhH37"
                />
            </div>
            <img className={classes.imgLine} src={imgLine} />
        </Fragment>
    )
}

export default WeddingData