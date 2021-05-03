import React from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import MainBody from './Components/MainBody';
import SideBody from './Components/SideBody';
import Footer from './Components/Footer';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Navigation />
                <div className="body-container">
                    <MainBody />
                    <SideBody />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
