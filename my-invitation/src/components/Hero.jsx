import React from 'react';
import { config } from '../config';
import AnimatedSection from './AnimatedSection';

const Hero = () => (
    <AnimatedSection className="w-full max-w-5xl mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
            <img src={config.heroImage} alt="メイン写真" className="absolute inset-0 w-full h-full object-cover" />
        </div>
    </AnimatedSection>
);

export default Hero;