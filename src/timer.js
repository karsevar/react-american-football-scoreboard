import React from "react";
import { useState, useEffect } from 'react';

// No need for props in this component since Timer's state
// is self contained and is rendered to the dom in the function itself.
function Timer() {
    const [seconds, setSeconds] = useState(58);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(false);

    // Following function resets the seconds every 60 seconds.
    function reset() {
        setSeconds(0);
    }

    // number to String. function that places zeros at the beginning of numbers.
    function zeros(number) {
        let numberString = String(number);

        if (numberString.length !== 2) {
            numberString = '0' + numberString;
        }
        return numberString;
    }

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);

        if (seconds === 60) {
            reset();
            setMinutes(minutes => minutes + 1);
        }

        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div className="timer">
        {zeros(minutes)}:{zeros(seconds)}
        </div>
    )
}

export default Timer;