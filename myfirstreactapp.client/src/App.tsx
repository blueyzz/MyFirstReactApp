import React from 'react';
import './App.css';
import { NoteWebAPI } from "./api/NoteWebAPI";
import NoteApp from "./components/note/NoteApp";
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <NoteWebAPI>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="flex-grow-1">
                    <NoteApp />
                </main>
                <Footer />
            </div>
        </NoteWebAPI>
    );
};

export default App;