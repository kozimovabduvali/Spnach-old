import React, { useEffect, useState } from 'react';

export default function TimeLimit({ endTime = "2025-09-10T23:59:59", className = "" }) {
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
        <div className={`timelimit flex gap-2 items-center justify-center -mb-1 ${className}`}>
            {Object.values(timeLeft).map((unit, index) => (
                <React.Fragment key={index}>
                    {index !== 0 && <span className="text-2xl md:text-3xl xl:text-5xl -mt-1 xl:-mt-2 font-luckiest  font-bold  text-[#FFCC12] bg-clip-text bg-gradient-to-b from-[#FFCC12] to-[#EA911E]">:</span>}
                    <span className="text-2xl md:text-3xl xl:text-5xl font-luckiest font-bold text-[#FFCC12] bg-clip-text bg-gradient-to-b from-[#FFCC12] to-[#EA911E]">{unit}</span>
                </React.Fragment>
            ))}
        </div>
    );
}
