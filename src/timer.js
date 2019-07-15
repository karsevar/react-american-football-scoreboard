import React from "react";
import { useState, useEffect } from 'react';

// No need for props in this component since Timer's state
// is self contained and is rendered to the dom in the function itself.
function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(false);

    // Following function resets the seconds every 60 seconds.
    function reset() {
        setSeconds(0);
    }

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div className="timer">{seconds}</div>
    )
}

export default Timer;