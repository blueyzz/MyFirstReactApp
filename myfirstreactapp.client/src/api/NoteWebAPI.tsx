import React, { createContext, useState, useContext } from 'react';
import { INote } from '../models/INote';
import { INoteContextType } from '../models/INoteContextType';
import { v4 as uuidv4 } from 'uuid';


const NoteContext = createContext<INoteContextType | undefined>(undefined);

const seedNotes: INote[] = [
    { id: uuidv4(), title: "My Note 1", content: "Note 1 Content", createdTime: new Date().toISOString() },
    { id: uuidv4(), title: "My Note 2", content: "Note 2 Content", createdTime: new Date().toISOString() },
    { id: uuidv4(), title: "My Note 3", content: "Note 3 Content", createdTime: new Date().toISOString() },
    { id: uuidv4(), title: "My Note 4", content: "Note 4 Content", createdTime: new Date().toISOString() },
    { id: uuidv4(), title: "My Note 5", content: "Note 5 Content", createdTime: new Date().toISOString() }
];

export const NoteWebAPI: React.FC = ({ children }) => {
    const [viewNotes, setViewNotes] = useState<INote[]>(() => {
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        if (notes.length === 0) {
            localStorage.setItem('notes', JSON.stringify(seedNotes));
            return seedNotes;
        }
        return notes;
    });

    const getNotes = () => {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        if (notes.length === 0) {
            localStorage.setItem('notes', JSON.stringify(seedNotes));
            return seedNotes;
        }
        else
            return notes;
    }

    const saveNotes = (notes: INote[]) => {
        setViewNotes(notes);
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    const addNote = (title: string, content: string) => {
        const newNote: INote = {
            id: uuidv4(),
            title,
            content,
            createdTime: new Date()
        };
        const updatedNotes = [...viewNotes, newNote];
        saveNotes(updatedNotes);
    }

    return (
        <NoteContext.Provider value={{ viewNotes, addNote }}>
            {children}
        </NoteContext.Provider>
    );
};

export const useNotes = () => {
    const context = useContext(NoteContext);
    if (!context) {
        throw new Error("You cannot use useNotes without NoteWebAPI");
    }
    return context;
};