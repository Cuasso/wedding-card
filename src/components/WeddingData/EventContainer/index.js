import ButtonLink from '../../UI/ButtonLink'
import classes from './eventContainer.module.css'
import Title from '../../UI/Title'

const styleTitle = {
    color: 'var(--light-orange)',
    fontSize: '30px'
}    

const EventContainer = props => (
    <div className={classes.eventContainer} {...props}>
        <Title value={props.event} style={styleTitle}/>        
        <p className={classes.content}>{props.children}</p>
        {!props.withOut && <ButtonLink link={props.link} text={props.buttonTxt} />}
    </div>
)


export default EventContainer