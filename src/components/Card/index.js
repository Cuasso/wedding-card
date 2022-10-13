import classes from './card.module.css'
import ButtonLink from '../UI/ButtonLink'
import Popup from '../UI/Popup'

const buttonStyle = {
    position: 'absolute',
    bottom: '30px'
}

const Card = (props) => {
    const button = props.popup
        ? (<Popup text={props.btnText} style={buttonStyle} secondary="true">
            TIPS y DEMÁS
            </Popup>)
        : (<ButtonLink text={props.btnText} style={buttonStyle} secondary="true"  link={props.link}/>)
    return (
        <div className={classes.card}>
            <h3 className={classes.cardTitle}>{props.title}</h3>
            <img className={classes.cardImg} src={props.imgLink} />
            <p className={classes.cardTxt}>{props.text}</p>
            {button}
        </div>
    )
}

export default Card