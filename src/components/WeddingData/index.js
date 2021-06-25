import Countdown from './Countdown'
import Title from '../UI/Title'
import EventContainer from './EventContainer'

import classes from './weddingData.module.css'
import imgWedding from '../../assets/wedding-data.png'

const party = {
    event: "fiesta",
    link: "https://goo.gl/maps/tTFtbm1Mu3tMkyux9",
}

const ceremony = {
    event: "ceremonia",
    link: "https://goo.gl/maps/1duYedpB8o9321X27",
}

const WeddingData = () => {
    return (
        <div className={classes.container}>
            <Countdown />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <img className={classes.imgWedding} src={imgWedding} />
                <Title value="nuestra boda" />
                <div className={classes.weddingEvents}>
                    < EventContainer {...party} >
                        <span>18 de Octubre de 2021</span>
                        <span>18:30 horas</span>
                        <span> Cebra </span>
                        <span>En algún lado era</span>
                    </EventContainer>
                    < EventContainer {...ceremony} >
                        <span>15 de Octubre de 2021</span>
                        <span>18:30 horas</span>
                        <span> San Cayetano </span>
                        <span>Gregorio de Laferrere, La Matanza</span>
                    </EventContainer>
                </div>
            </div>

        </div>
    )
}

export default WeddingData