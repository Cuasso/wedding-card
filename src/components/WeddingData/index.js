import Countdown from './Countdown'
import Title from '../UI/Title'
import EventContainer from './EventContainer'

import classes from './weddingData.module.css'
import imgWedding from '../../assets/wedding-data.png'

const party = {
    event: "fiesta",
    link: "https://maps.app.goo.gl/zFSkLS1cL2xrWGzTA",
}

const ceremony = {
    event: "ceremonia",
    link: "https://maps.app.goo.gl/zFSkLS1cL2xrWGzTA",
}

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
            </div>

        </div>
    )
}

export default WeddingData