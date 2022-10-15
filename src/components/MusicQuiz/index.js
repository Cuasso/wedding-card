import WeddingContext from '../../stores/wedding-context'

import ButtonLink from '../UI/ButtonLink'

import classes from './musicQuiz.module.css'
import musicImg from '../../assets/icons/music_pink.gif'
import backgroundImg from '../../assets/music-background.jpg'

const buttonProps = {
    text: "Recomendar canciones",
    link: WeddingContext.musicQuiz.formLink
}

const MusicQuiz = () => (
    <div className={classes.musicContainer} style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className={classes.card}>
            <div className={classes.box}>
                <img src={musicImg} className={classes.musicImg}/>
            </div>
            <p className={classes.message}>
                Llego la hora de la fiesta y queremos que nos ayudes con la canciones que pensás que no pueden faltar o quieras escuchar!
            </p>
            < ButtonLink {...buttonProps} style={buttonProps.style} />
        </div>
    </div>
)


export default MusicQuiz