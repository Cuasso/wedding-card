import ButtonLink from '../../UI/ButtonLink'
import classes from './eventContainer.module.css'

const EventContainer = props => (
    <div className={classes.eventContainer}>
        <h1 className={classes.eventTitle} >{props.event}</h1>
        <p className={classes.content}>{props.children}</p>
        {!props.withOut && <ButtonLink link={props.link} text={props.buttonTxt}/>}
    </div>
)


export default EventContainer