import Popup from '../UI/Popup'
import classes from './covidRecomendation.module.css'

const CovidRecomendation = () => (
    <div className={classes.recomendation}>
        <h1 >Recomendaciones Covid 19</h1>
        <p className={classes.message}>Te dejamos algunas recomendaciones que creemos son necesarias para que puedas cuidarte y disfrutar de nuestra fiesta.</p>
        <Popup text="VER">
            <ul className={classes.list}>
                <li className={classes.item}>No olvides llevar y utilizar tu barbijo, tapando siempre boca, nariz y mentón. Sólo podrás quitártelo en el momento de la recepción, cuando te encuentres en tu living o en tu mesa asignada.</li>
                <li className={classes.item}>Por favor, mantener el distanciamiento social (1,5 mts).</li>
                <li className={classes.item}>Recordar mantener tus manos limpias. Contarás con un kit de higiene disponible en todo momento. </li>
                <li className={classes.item}>Evitar el amontonamiento de personas. Habrá tiempo de sobra para que saludes a todas aquellas personas que hace tiempo no ves y para que saludes a los novios.</li>
                <li className={classes.item}>En el ingreso se tomará la temperatura a todos los invitados; en caso de que alguien presente fiebre, no se le permite el acceso y se le indica volver a su alojamiento y llamar servicio de emergencias en caso de que presente síntomas respiratorios.</li>
                <li className={classes.item}>Atender a las indicaciones de los mozos y personal en todo momento, para cuidarnos entre todos.</li>
            </ul>
        </Popup>
    </div>
)

export default CovidRecomendation