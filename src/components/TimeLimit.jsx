import React, { useEffect, useState } from 'react';

export default function TimeLimit({ endTime = "2025-08-10T23:59:59", className = "" }) {
    const calculateTimeLeft = () => {
        const difference = new Date(endTime) - new Date();
        if (difference > 0) {
            const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
            const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0");
            const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");
            return { hours, minutes, seconds };
        } else {
            return null;
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            const updatedTimeLeft = calculateTimeLeft();
            setTimeLeft(updatedTimeLeft);
            if (!updatedTimeLeft) clearInterval(timer);
        }, 1000);

        return () => clearInterval(timer);
    }, [endTime]);

    if (!timeLeft) {
        return <div className="text-white text-center">Time's up!</div>;
    }

    return (
        <div className={`timelimit text-center ${className}`}>
            {Object.values(timeLeft).map((unit, index) => (
                <React.Fragment key={index}>
                    {index !== 0 && <span className="text-5xl font-bold text-[#EA911E] drop-shadow-[2px_4px_2px_rgba(0,0,0,0.3)]">:</span>}
                    <span className="text-[40px] font-extrabold text-[#EA911E] drop-shadow-[2px_4px_2px_rgba(0,0,0,0.3)]">{unit}</span>
                </React.Fragment>
            ))}
        </div>
    );
}
