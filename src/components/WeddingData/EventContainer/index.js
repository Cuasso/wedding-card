import ButtonLink from '../../UI/ButtonLink'
import classes from './eventContainer.module.css'

const EventContainer = props => (
    <div className={classes.eventContainer}>
        <h1 className={classes.eventTitle} >{props.title}</h1>
        <p className={classes.eventText}>{props.text}</p>
        <ButtonLink link={props.buttonLink} text={props.buttonTxt} />
    </div>
)


export default EventContainer