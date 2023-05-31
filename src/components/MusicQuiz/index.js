import WeddingContext from '../../stores/wedding-context'

import ButtonLink from '../UI/ButtonLink'

import classes from './musicQuiz.module.css'
import musicImg from '../../assets/music.png'

import Title from '../UI/Title'

const buttonProps = {
    text: "Recomendar canciones",
    link: 'https://forms.gle/jg58gCf5V8jrUu318',
    style: {
        borderRadius: '50px'
    }
}

const style = { fontSize: '20px', letterSpacing: '10px' }

const MusicQuiz = () => (
    <div className={classes.musicContainer} >
        <img src={musicImg} className={classes.musicImg} />
        <Title value="¿Qué canciones no pueden faltar?" style={style} />
        <span className={classes.message}>
            ¡Ayudanos sugiriendo las canciones que <br />
            pensás que no pueden faltar!
        </span>
        < ButtonLink {...buttonProps} style={buttonProps.style} />
    </div>
)


export default MusicQuiz