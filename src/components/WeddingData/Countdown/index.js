import classes from './countdown.module.css'
import { useState, useEffect } from 'react';

const Circle = props => (
    <div className={classes.baseTimer}>
        <svg className={classes.baseTimerSvg} viewBox={"0 0 100 100"} xmlns="http://www.w3.org/2000/svg">
            <g className={classes.baseTimerCircle}>
                <circle className={classes.baseTimerPathElapsed} cx="50" cy="50" r="45" />
                <path
                    stroke-dasharray={props.circleDasharray}
                    class={classes.baseTimerPathRemaining}
                    d="
                        M 50, 50
                        m -45, 0
                        a 45,45 0 1,0 90,0
                        a 45,45 0 1,0 -90,0
                      "
                ></path>
            </g>
        </svg>
        <span className={classes.baseTimerLabel}>
            {props.value}
        </span>
    </div>
)

const Countdown = () => {
    const [timerInterval, setTimerInterval] = useState(0);
    const [circleDasharray, setCircleDasharray] = useState(0);
    const TIME_LIMIT = 20;
    const FULL_DASH_ARRAY = 283;

    let timePassed = 0;
    let timeLeft = TIME_LIMIT;

    useEffect(() => {
        setInterval(() => {

            // The amount of time passed increments by one
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            timeLeft = timeLeft > 0 ? timeLeft : 0

            // The time left label is updated
            setTimerInterval(formatTimeLeft(timeLeft))

            const dasharray = `${(
                calculateTimeFraction() * FULL_DASH_ARRAY
            ).toFixed(0)} 283`;

            setCircleDasharray(dasharray)

        }, 1000);
    }, [])

    const formatTimeLeft = time => {
        const minutes = Math.floor(time / 60);

        // Seconds are the remainder of the time divided by 60 (modulus operator)
        let seconds = time % 60;

        // If the value of seconds is less than 10, then display seconds with a leading zero
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        // The output in MM:SS format
        return `${minutes}:${seconds}`;
    }

    const calculateTimeFraction = () => timeLeft / TIME_LIMIT;


    return (
        <Circle value={timerInterval} remaininghColor="green" circleDasharray={circleDasharray} />
    )
}


export default Countdown