import React, { useState } from 'react';
import DoorAnimation from './components/DoorAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Message from './components/Message';
import Details from './components/Details';
import Gallery from './components/Gallery';
import Rsvp from './components/Rsvp';
import Footer from './components/Footer';

export default function App() {
    const [showAnimation, setShowAnimation] = useState(true);

    const handleAnimationFinish = () => {
        setShowAnimation(false);
    };

    if (showAnimation) {
        return <DoorAnimation onFinished={handleAnimationFinish} />;
    }

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
