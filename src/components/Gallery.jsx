import React, { useState } from 'react';
import { config } from '../config';
import AnimatedSection from './AnimatedSection';
import XIcon from './icons/XIcon';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <AnimatedSection className="max-w-5xl mx-auto py-20 px-6 text-center">
            <h2 className="text-2xl md:text-3xl noto-serif mb-10 text-secondary">Our Memories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {config.galleryImages.map(img => (
                    <div key={img.id} className="rounded-lg overflow-hidden shadow-md cursor-pointer group" onClick={() => setSelectedImg(img.src)}>
                        <img src={img.src} alt={`思い出の写真 ${img.id}`} className="w-full h-auto aspect-square object-cover transform transition-transform duration-300 group-hover:scale-105" />
                    </div>
                ))}
            </div>
            {selectedImg && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImg(null)}>
                    <button className="absolute top-4 right-4 text-white hover:text-white/80" onClick={() => setSelectedImg(null)}>
                        <XIcon className="w-10 h-10"/>
                    </button>
                    <img src={selectedImg} alt="拡大表示" className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"/>
                </div>
            )}
        </AnimatedSection>
    );
};

export default Gallery;