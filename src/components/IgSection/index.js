import classes from './igSection.module.css'
import ButtonLink from '../UI/ButtonLink'
import line3Img from '../../assets/line3.png'
import line2Img from '../../assets/line2.png'
import bottomImg from '../../assets/line-svg.png'
import videoImg from '../../assets/icons/video.gif'

const IgUrl = 'mailto: ciancidory@hotmail.com'

const IgSection = () => {
    return (
        <div className={classes.container}>
            <div className={classes.parallax}>
                <img className={classes.lineFront} src={line3Img} />
                <img className={classes.lineFront} src={line2Img} />
                <div className={classes.title}>¡Mi gran fiesta junto a ustedes!</div>
                <div style={{paddingTop:'30px'}}>
                <div className={classes.text}>¡Si deseas ser parte de mi video, te pido que me envies tu foto favorita conmigo!</div>
                <div className={classes.text}>Tenes tiempo para enviar tu foto por mail hasta el <strong>31/10/2022</strong></div>                
                </div>
                <img src={videoImg} className={classes.videoImg}/>
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