import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Message from './components/Message';
import Details from './components/Details';
import Gallery from './components/Gallery';
import Rsvp from './components/Rsvp';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="bg-cream text-secondary">
            <Header />
            <main>
                <Hero />
                <Countdown />
                <Message />
                <Details />
                <Gallery />
                <Rsvp />
            </main>
            <Footer />
        </div>
    );
}
