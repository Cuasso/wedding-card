import classes from './buttonLink.module.css'

const ButtonLink = props => (
    <a  target="_blank" 
        href={props.link} 
        className={classes.buttonLink}
        {...props}
        >
        
        {props.text}
    </a>
)

export default ButtonLink 