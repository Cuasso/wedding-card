import classes from './igSection.module.css'
import ButtonLink from '../UI/ButtonLink'
import line3Img from '../../assets/line3.png'
import line2Img from '../../assets/line2.png'
import bottomImg from '../../assets/line-svg.png'

const IgUrl = 'mailto: ciancidory@hotmail.com'

const IgSection = () => {
    return (
        <div className={classes.container}>
            <div className={classes.parallax}>
                <img className={classes.lineFront} src={line3Img} />
                <img className={classes.lineFront} src={line2Img} />
                <div className={classes.title}>Una gran fiesta junto a vos</div>
                <div style={{padding:'30px'}}>
                <div className={classes.text}>¡Si deseas ser parte de mi video, te pido que me envies tu foto favorita conmigo!</div>
                <div className={classes.text}>Tenes tiempo para enviar tu foto por mail hasta el <strong>31/10/2022</strong></div>
                </div>
                <ButtonLink
                    text="Enviar por Mail"
                    secondary="true"
                    link={IgUrl} />
            </div>
            <img src={bottomImg} className={classes.lineBack} />
        </div>
    )
}

export default IgSection