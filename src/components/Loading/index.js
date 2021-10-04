import classes from './loading.module.css'

const Loading = () => {
    return (
        <div className={classes.loadingContainer}>
            <div className={classes.ldsRing}><div></div><div></div><div></div><div></div></div>
            <h1>Cargando...</h1>
        </div>
    )
}

export default Loading