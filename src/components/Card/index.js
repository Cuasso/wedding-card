import classes from './card.module.css'
import ButtonLink from '../UI/ButtonLink'

const buttonStyle = {    
    position: 'absolute',
    bottom: '30px'
}

const Card = (props) => {
    return (
        <div className={classes.card}>
            <h3 className={classes.cardTitle}>{props.title}</h3>
            <img className={classes.cardImg} src={props.imgLink} />
            <p className={classes.cardTxt}>{props.text}</p>
            <ButtonLink text={props.btnText} style={buttonStyle} secondary="true" />
        </div>
    )
}

export default Card