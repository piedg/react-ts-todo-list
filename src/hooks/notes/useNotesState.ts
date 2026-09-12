import { useState } from "react";
import type { Note } from "../../types/Note";

export function useNotesState() {
    const [notes, setNotes] = useState<Note[]>([])
    const [searchNoteQuery, setSearchNoteQuery] = useState<string>("")

    function notesByIncludeText(): Note[] {
        return notes.filter(note =>
            note.text.toLowerCase().includes(searchNoteQuery.toLowerCase().trim()))
    }

    function addNote(note: Note) {
        setNotes((prev) => [...prev, note])
    }

    function removeNote(id: number) {
        setNotes(notes.filter((note) => note.id !== id))
    }

    function editNote(id: number, newText: string) {
        setNotes((prev) => prev.map((note) => note.id === id ? { ...note, text: newText } : note))
    }

    return { addNote, removeNote, editNote, notes, notesByIncludeText, searchNoteQuery, setSearchNoteQuery }
}