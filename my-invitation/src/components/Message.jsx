import React from 'react';
import { config } from '../config';
import AnimatedSection from './AnimatedSection';

const Message = () => (
    <AnimatedSection className="max-w-3xl mx-auto text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl noto-serif mb-6 text-secondary">{config.greeting.title}</h2>
        <div className="text-base md:text-lg leading-loose text-secondary whitespace-pre-line">
            {config.greeting.body}
        </div>
        <p className="mt-10 text-lg noto-serif text-secondary">
            {config.groomName} & {config.brideName}
        </p>
    </AnimatedSection>
);

export default Message;