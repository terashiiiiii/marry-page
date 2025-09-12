import React from 'react';
import { config } from '../config';
import AnimatedSection from './AnimatedSection';
import CalendarIcon from './icons/CalendarIcon';
import MapPinIcon from './icons/MapPinIcon';

const Details = () => (
    <AnimatedSection className="py-20 bg-white/60">
        <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                                <p className="text-secondary">受付: {config.receptionHours}</p>
                                <p className="text-secondary">挙式: {config.ceremonyTime}</p>
                                <p className="text-secondary">披露宴: {config.receptionTime}</p>
                            </div>
                        </div>
                        <div className="flex items-start justify-center lg:justify-start space-x-4">
                            <MapPinIcon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                            <div>
                                <p className="font-bold text-lg text-secondary">場所</p>
                                <a href={config.venue.url} target="_blank" rel="noopener noreferrer" className="text-secondary underline hover:text-primary transition-colors">
                                    {config.venue.name}
                                </a>
                                <p className="text-sm text-secondary">{config.venue.address}</p>
                                <p className="text-sm text-secondary">TEL. {config.venue.number}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <div className=" items-start justify-center text-center lg:justify-start text-secondary space-x-4 whitespace-pre-line">
                    {config.infoMessage.body}
                </div>
            </div>
            <div className="mt-20">
                <h3 className="text-2xl noto-serif mb-8 text-secondary text-center">Parking</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {config.venue.parkings.map((parking, index) => (
                        <div key={index}>
                            <p className="font-bold text-lg text-secondary text-center mb-4">{parking.name}</p>
                            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
                                <iframe src={parking.mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </AnimatedSection>
);

export default Details;