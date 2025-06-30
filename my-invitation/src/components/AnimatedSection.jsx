import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AnimatedSection = ({ children, className = '' }) => {
    const [ref, entry] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });
    const isVisible = entry && entry.isIntersecting;
    return (
        <section ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
            {children}
        </section>
    );
};

export default AnimatedSection;