import React from 'react';
import { config } from '../config';

const Header = () => (
    <header className="text-center py-12">
        <h1 className="text-3xl md:text-4xl tracking-widest text-secondary noto-serif">{config.groomName} & {config.brideName}</h1>
        <p className="text-sm tracking-wider text-secondary/70 mt-2">WEDDING INVITATION</p>
    </header>
);

export default Header;