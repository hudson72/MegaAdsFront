import React from 'react';
import './App.css';
import { Header } from './components/layout/Header';
import { Map } from './components/Map/Map';

export const App = () => {
    return (
        <>
            <Header/>
            <Map/>
        </>
    );
}
