import classes from './igSection.module.css'
import ButtonLink from '../UI/ButtonLink'
import igImg from '../../assets/icons/instagram.png'
import line3Img from '../../assets/line3.png'
import line2Img from '../../assets/line2.png'
import bottomImg from '../../assets/line-svg.png'

const style = {
    position: 'absolute',
    bottom: '130px',
    left: '0',
    right: '0',
    marginLeft: 'auto',
    marginRight: 'auto',
}

const IgUrl = 'https://www.instagram.com/explore/tags/15brunne'

const IgSection = () => {
    return (
        <div className={classes.container}>
            <div className={classes.parallax}>
                <img className={classes.lineFront} src={line3Img} />
                <img className={classes.lineFront} src={line2Img} />
                <div className={classes.title}>Una gran fiesta junto a vos</div>
                <div className={classes.text}>Compartí tus fotos y videos de ese hermoso día</div>
                <div className={classes.hg}>#15Brunne</div>
                <img className={classes.igImg} src={igImg} />
                <ButtonLink
                    style={style}
                    text="Ver en Instagram"
                    secondary="true"
                    link={IgUrl} />
            </div>
            <img src={bottomImg} className={classes.lineBack} />
        </div>
    )
}

export default IgSection