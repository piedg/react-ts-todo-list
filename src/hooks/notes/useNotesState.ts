import { useState } from "react";
import type { Note } from "../../types/Note";
import type { SortBy } from "../../types/SortBy";
import type { SortDirection } from "../../types/SortDirection";

export function useNotesState() {
    const [notes, setNotes] = useState<Note[]>([])
    const [searchNoteQuery, setSearchNoteQuery] = useState<string>("")
    const [sortBy, setSortBy] = useState<SortBy>("date")
    const [sortDirection, setSortDirection] = useState<SortDirection>("asc")

    function notesBySearch(): Note[] {
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

    function completeNote(note: Note) {
        note.isCompleted = !note.isCompleted
    }

    function toggleSort(criteria: SortBy) {
        if (criteria === sortBy) {
            setSortDirection((prev) => prev === "asc" ? "desc" : "asc")
        } else {
            setSortBy(criteria)
            setSortDirection("asc")
        }
    }

    const sortedNotes = [...notesBySearch()].sort((a, b) => {
        const result = sortBy === "name"
            ? a.text.localeCompare(b.text)
            : (a.date ?? "").localeCompare(b.date ?? "")

        return sortDirection === "asc" ? result : -result
    })

    return {
        addNote,
        removeNote,
        editNote,
        notes,
        notesBySearch,
        searchNoteQuery,
        setSearchNoteQuery,
        sortedNotes,
        sortBy,
        setSortBy,
        toggleSort,
        completeNote
    }
}