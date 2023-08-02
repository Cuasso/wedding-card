
import classes from './countdown.module.css'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import * as dateHelper from './helper'

let timerSize = 50
const timerProps = {
    isPlaying: true,
    size: timerSize,
    colors: [["#D2B48C"]],
    strokeWidth: 0,
};

const renderTime = (dimension, time) => {
    return (
        <div className={classes.timeWrapper}>
            <div className={classes.time}>{time}</div>
            <div className={classes.dimension}>{dimension}</div>
        </div>
    );
};

const Countdown = ({ date }) => {
    const stratTime = new Date() / 1000;
    const endTime = date / 1000;

    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / dateHelper.daySeconds);
    const daysDuration = days * dateHelper.daySeconds;

    return (
        <div className={classes.countdown}>
            <CountdownCircleTimer className={classes.circleTimer}
                {...timerProps}
                duration={daysDuration}
                initialRemainingTime={remainingTime}
            >
                {
                    ({ elapsedTime }) => renderTime("DíAS", dateHelper.getTimeDays(daysDuration - elapsedTime))
                }
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                duration={dateHelper.daySeconds}
                initialRemainingTime={remainingTime % dateHelper.daySeconds}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > dateHelper.hourSeconds
                ]}
            >
                {
                    ({ elapsedTime }) => renderTime("HS", dateHelper.getTimeHours(dateHelper.daySeconds - elapsedTime))
                }
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                duration={dateHelper.hourSeconds}
                initialRemainingTime={remainingTime % dateHelper.hourSeconds}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > dateHelper.minuteSeconds
                ]}
            >
                {
                    ({ elapsedTime }) => renderTime("MN", dateHelper.getTimeMinutes(dateHelper.hourSeconds - elapsedTime))
                }
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                duration={dateHelper.minuteSeconds}
                initialRemainingTime={remainingTime % dateHelper.minuteSeconds}
                onComplete={(totalElapsedTime) => [
                    remainingTime - totalElapsedTime > 0
                ]}
            >
                {
                    ({ elapsedTime }) => renderTime("SEG", dateHelper.getTimeSeconds(elapsedTime))
                }
            </CountdownCircleTimer>
        </div>
    )
}


export default Countdown