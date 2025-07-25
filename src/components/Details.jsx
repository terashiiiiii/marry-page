import React from 'react';
import { config } from '../config';
import AnimatedSection from './AnimatedSection';
import CalendarIcon from './icons/CalendarIcon';
import MapPinIcon from './icons/MapPinIcon';

const Details = () => (
    <AnimatedSection className="py-20 bg-white/60">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg order-last lg:order-first">
                <iframe src={config.venue.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="text-center lg:text-left">
                <h3 className="text-2xl noto-serif mb-8 text-secondary">Information</h3>
                <div className="space-y-6">
                    <div className="flex items-start justify-center lg:justify-start space-x-4">
                        <CalendarIcon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="font-bold text-lg text-secondary">日時</p>
                            <p className="text-secondary">{new Date(config.weddingDate).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })} ({new Date(config.weddingDate).toLocaleDateString('ja-JP', { weekday: 'short' })})</p>
                            <p className="text-secondary">挙式: {config.ceremonyTime} | 披露宴: {config.receptionTime}</p>
                        </div>
                    </div>
                    <div className="flex items-start justify-center lg:justify-start space-x-4">
                        <MapPinIcon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="font-bold text-lg text-secondary">場所</p>
                            <p className="text-secondary">{config.venue.name}</p>
                            <p className="text-sm text-secondary">{config.venue.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AnimatedSection>
);

export default Details;