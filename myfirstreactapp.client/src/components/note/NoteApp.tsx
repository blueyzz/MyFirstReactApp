import React from 'react';
import { useNotes } from "../../api/NoteWebAPI";
import { Table } from 'react-bootstrap';
import { formatDate } from "../../helpers/date-helper";

const NotesApp: React.FC = () => {
    const { viewNotes } = useNotes();

    return (
        <div>
            <h2>Notes Summary</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Created Time</th>
                    </tr>
                </thead>
                <tbody>
                    {viewNotes.map(note => (
                        <tr key={note.id}>
                            <td className="text-center">{note.title}</td>
                            <td className="text-center">
                                <span>{formatDate(note.createdTime)}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </div>
    );
};

export default NotesApp;