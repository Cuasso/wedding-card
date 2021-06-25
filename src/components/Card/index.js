import classes from './card.module.css'
import ringsImg from '../../assets/card-rings.png'

const Card = () => {
    return (
        <div className={classes.card}>
            <img className={classes.ringImg} src={ringsImg}/>
            <span className={classes.title}>nos casamos</span>
            <span className={classes.body}>y estamos ansiosos por compartir este día con ustedes.</span>
        </div>
    )
}

export default Card