import classes from './igSection.module.css'
import ButtonLink from '../UI/ButtonLink'

const style = {
    position: 'absolute',
    bottom:'30px',
    left: '0', 
    right: '0', 
    marginLeft: 'auto', 
    marginRight: 'auto', 
}

const IgSection = () => {
    return (
        <div className={classes.container}>
            <div className={classes.parallax}>
                <div className={classes.title}>Una gran fiesta junto a vos</div>
                <div className={classes.text}>Compartí tus fotos y videos de ese hermoso día</div>
                <div className={classes.hg}>#15Brunne</div>
                <ButtonLink  style={style} text="Ver en Instagram" secondary="true"/>
            </div>
        </div>
    )
}

export default IgSection