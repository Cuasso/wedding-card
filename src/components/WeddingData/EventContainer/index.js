import classes from './eventContainer.module.css'

const EventContainer = props => (
    <div className={classes.eventContainer}>
        <h1 className={classes.eventContainer} >{props.event}</h1>
        <p className={classes.content}>{props.children}</p>
    </div>
)


export default EventContainer