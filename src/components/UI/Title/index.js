import classes from './title.module.css'

const Title = props => (
    <span className={classes.title} {...props} >{props.value}</span>
)

export default Title