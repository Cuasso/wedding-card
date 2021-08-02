import ButtonLink from '../UI/ButtonLink'

import classes from './musicQuiz.module.css'
import dancersImg from '../../assets/music.bmp'
import backgroundImg from '../../assets/music-background.jpg'

const buttonProps = {
    text: "Recomendar canciones",
    link: "link a encuesta"
}

const MusicQuiz = () => (
    <div className={classes.musicContainer} style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className={classes.card}>
            <img src={dancersImg} className={classes.dancersImg} alt="dancing couple" />
            <p className={classes.message}>
                Llego la hora de la fiesta y queremos que nos ayudes con la canciones que pensás que no pueden faltar o quieras escuchar!
            </p>
            < ButtonLink {...buttonProps} style={buttonProps.style} />
        </div>
    </div>
)


export default MusicQuiz