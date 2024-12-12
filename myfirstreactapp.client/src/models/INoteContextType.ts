import { INote } from "./INote";

export interface INoteContextType {
    viewNotes: INote[];
    addNote: (title: string, content: string) => void;
    saveNotes: INote;
    getNotes: INote[];
}