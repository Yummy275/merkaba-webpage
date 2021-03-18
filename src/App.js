import './App.css';
import NameTitle from './components/NameTitle';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
    return (
        <div className="App">
            <NameTitle>Merkaba</NameTitle>
            <Navbar></Navbar>
            <HomePage></HomePage>
        </div>
    );
}

export default App;
