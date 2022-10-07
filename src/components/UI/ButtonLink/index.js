import classes from './buttonLink.module.css'

const ButtonLink = props => (
    <a target="_blank"
        rel="noreferrer"
        href={props.link}
        className={
            props.secondary
                ? classes.buttonLinkTwo
                : classes.buttonLink}
        {...props}
    >
        {props.text}
    </a>
)

export default ButtonLink 