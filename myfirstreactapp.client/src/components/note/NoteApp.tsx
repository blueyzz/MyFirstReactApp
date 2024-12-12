import React, { useState } from 'react';
import { useNotes } from "../../api/NoteWebAPI";
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { formatDate } from "../../helpers/date-helper";

const NotesApp: React.FC = () => {
    const { viewNotes, addNote } = useNotes();
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addNote(title, content);
        setTitle('');
        setContent('');
        handleClose();
    };

    return (
        <div>
            <div className="addNote">
                <Button variant="primary" onClick={handleShow}>
                    Add Note
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Note</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formContent">
                                <Form.Label>Content</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter content" value={content} onChange={(e) => setContent(e.target.value)} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

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