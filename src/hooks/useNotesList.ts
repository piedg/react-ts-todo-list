import { useState, useContext } from "react";
import type { Note } from "../types/Note";
import { NotesContext } from "../context/NotesContext";

export function useNotesList() {
    const [notes, setNotes] = useState<Note[]>([])

    function addNote(note: Note) {
        setNotes((prev) => [...prev, note])
    }

    function removeNote(id: number) {
        setNotes(notes.filter((note) => note.id !== id))
    }

    return { addNote, removeNote, notes }
}

export function useNotes() {
    const context = useContext(NotesContext)
    if (!context) throw new Error("useNotes must be used within NotesProvider")
    return context
}