import weddingContext from '../../stores/wedding-context'
import Countdown from './Countdown'
import classes from './weddingData.module.css'
import worldImage from '../../assets/world-background.png'

const WeddingData = () => {
    const events = weddingContext.events
    const party = events.party

    return (
        <div className={classes.container}>
            <div className={classes.worldLines}>
                <img src={worldImage} className={classes.worldImage} />
                <Countdown date={weddingContext.events.date}/>
            </div>

        </div >
    )
}

export default WeddingData