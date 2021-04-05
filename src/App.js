import React, { useState } from 'react';
import './App.css';
import NameTitle from './components/NameTitle';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ArtPage from './pages/ArtPage';

function App() {
    const [activePage, setActivePage] = useState('home');
    return (
        <div className="App">
            <NameTitle>Merkaba</NameTitle>
            <Navbar setActivePage={setActivePage}></Navbar>
            {activePage === 'home' ? (
                <HomePage></HomePage>
            ) : activePage === 'art' ? (
                <ArtPage></ArtPage>
            ) : (
                ''
            )}
        </div>
    );
}

export default App;
