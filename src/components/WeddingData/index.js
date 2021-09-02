import Countdown from './Countdown'
import Title from '../UI/Title'
import EventContainer from './EventContainer'
import ButtonLink from '../UI/ButtonLink'

import classes from './weddingData.module.css'
import imgWedding from '../../assets/wedding-data.png'

const party = {
    event: "fiesta",
}

const ceremony = {
    event: "ceremonia",
}

const link = "https://maps.app.goo.gl/zFSkLS1cL2xrWGzTA"

const WeddingData = () => {
    return (
        <div className={classes.container}>
            <Countdown />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <img className={classes.imgWedding} src={imgWedding} alt="wedding" />
                <Title value="nuestra boda" />
                <div className={classes.weddingEvents}>
                    < EventContainer {...ceremony} >
                        <span>18 de Septiembre de 2021</span>
                        <span>18:00 horas</span>
                        <span> Zebra lago Eventos</span>
                        <span>Cañuelas, Bs As, Argentina</span>
                    </EventContainer>
                    < EventContainer {...party} >
                        <span>18 de Septiembre de 2021</span>
                        <span>19:00 horas</span>
                        <span> Zebra lago Eventos</span>
                        <span>Cañuelas, Bs As, Argentina</span>
                    </EventContainer>
                </div>
                <ButtonLink link={link} text="Cómo llegar" />
            </div>
        </div>
    )
}

export default WeddingData