import React, { useState } from 'react';
import './App.css';
import NameTitle from './components/NameTitle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArtPage from './pages/ArtPage';
import CrystalPage from './pages/CrystalPage';
import ContactPage from './pages/ContactPage';

function App() {
    const [activePage, setActivePage] = useState('home');
    return (
        <div className="App">
            <NameTitle>Merkaba</NameTitle>
            <Navbar
                setActivePage={setActivePage}
                activePage={activePage}
            ></Navbar>
            {activePage === 'home' ? (
                <HomePage></HomePage>
            ) : activePage === 'art' ? (
                <ArtPage></ArtPage>
            ) : activePage === 'crystal' ? (
                <CrystalPage></CrystalPage>
            ) : activePage === 'contact' ? (
                <ContactPage></ContactPage>
            ) : (
                ''
            )}
            <Footer></Footer>
        </div>
    );
}

export default App;
