import React from 'react';
import { config } from '../config';
import AnimatedSection from './AnimatedSection';

const Rsvp = () => {
    return (
        <AnimatedSection id="rsvp" className="py-20 bg-white/60">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <h2 className="text-2xl md:text-3xl noto-serif mb-4 text-secondary">御出席</h2>
                <p className="mb-10 text-secondary">お手数ですが {config.rsvpDeadline} までに下記フォームよりご返信ください</p>
                <div className="mt-8">
                    <a
                        href={config.rsvpFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full max-w-xs inline-block bg-primary text-white font-bold py-4 px-6 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 shadow-lg"
                    >
                        御出欠登録
                    </a>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Rsvp;