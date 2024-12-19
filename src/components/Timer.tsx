import React, { useState, useEffect } from "react";

interface TimerProps {
    targetEpoch: number;
}

const Timer: React.FC<TimerProps> = ({ targetEpoch }) => {
    const [timeElapsed, setTimeElapsed] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const startTime =
            targetEpoch > 1000000000000 ? targetEpoch : targetEpoch * 1000;

        const calculateTimeElapsed = () => {
            const now = Date.now();
            const difference = Math.max(now - startTime, 0);

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return { days, hours, minutes, seconds };
        };

        setTimeElapsed(calculateTimeElapsed());

        const timer = setInterval(() => {
            setTimeElapsed(calculateTimeElapsed());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetEpoch]);

    console.log(
        timeElapsed.days,
        timeElapsed.hours,
        timeElapsed.minutes,
        timeElapsed.seconds
    );
    // Dumb ahh errors 😭
    return (
        <div className="flex gap-5">
            <div>
                {/* @ts-expect-error */}
                <span className="countdown font-mono text-3xl">
                    {/* @ts-expect-error */}
                    {timeElapsed.days < 99 ? (
                        <span style={{ "--value": timeElapsed.days }}></span>
                    ) : (
                        timeElapsed.days
                    )}
                </span>
                days
            </div>
            <div>
                {/* @ts-expect-error */}
                <span className="countdown font-mono text-3xl">
                    {/* @ts-expect-error */}
                    <span style={{ "--value": timeElapsed.hours }}></span>
                </span>
                hours
            </div>
            <div>
                {/* @ts-expect-error */}
                <span className="countdown font-mono text-3xl">
                    {/* @ts-expect-error */}
                    <span style={{ "--value": timeElapsed.minutes }}></span>
                </span>
                min
            </div>
            <div>
                {/* @ts-expect-error */}
                <span className="countdown font-mono text-3xl">
                    {/* @ts-expect-error */}
                    <span style={{ "--value": timeElapsed.seconds }}></span>
                </span>
                sec
            </div>
        </div>
    );
};

export default Timer;
