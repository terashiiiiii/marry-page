import React from 'react';
import { config } from '../config';

const Footer = () => (
    <footer className="text-center py-16">
        <p className="noto-serif text-2xl text-secondary">Thank you</p>
        <p className="mt-3 text-sm tracking-widest text-secondary uppercase">{config.groomName} & {config.brideName}</p>
    </footer>
);

export default Footer;