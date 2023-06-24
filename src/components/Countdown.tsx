import React, { useState, useEffect } from 'react';

interface TimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Countdown: React.FC = () => {
    const targetDate = new Date('September 4, 2023 00:00:00 GMT+0200');
    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    function calculateTimeRemaining(): TimeRemaining {
        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return { days, hours, minutes, seconds };
    }

    const formatTime = (value: number): string => {
        return value < 10 ? `0${value}` : value.toString();
    };

    return (
        <div>
            <div>
                <p>
                    {formatTime(timeRemaining.days)} Days, {formatTime(timeRemaining.hours)}:{formatTime(timeRemaining.minutes)}:{formatTime(timeRemaining.seconds)}
                </p>
            </div>
        </div>
    );
};

export default Countdown;
