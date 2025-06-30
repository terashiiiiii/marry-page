import React, { useState, useEffect } from 'react';
import { config } from '../config';
import AnimatedSection from './AnimatedSection';

const Countdown = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date(config.weddingDate) - +new Date();
        return difference > 0 ? {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        } : {};
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
        return () => clearTimeout(timer);
    });

    return (
        <AnimatedSection className="py-16">
            <div className="max-w-3xl mx-auto text-center px-4">
                <h2 className="text-2xl md:text-3xl noto-serif text-secondary mb-8">Save the Date</h2>
                <div className="grid grid-cols-4 gap-4">
                    {Object.keys(timeLeft).length ? (
                        Object.entries(timeLeft).map(([unit, value]) => (
                            <div key={unit} className="text-center">
                                <div className="text-4xl md:text-6xl font-bold text-secondary">{value}</div>
                                <div className="text-sm uppercase noto-serif">{unit}</div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-4 text-2xl noto-serif">The big day is here!</div>
                    )}
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Countdown;