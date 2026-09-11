import { ListElement } from "./ListElement"
import { NoteModal } from "./NoteModal"
import { useState } from "react"
import type { Note } from "../types/Note"
import { useNotes } from "../hooks/notes/useNotes"

export function List() {
    const { removeNote, editNote, notes } = useNotes()
    const [editingNote, setEditingNote] = useState<Note | null>(null)

    return (
        <>
            <NoteModal
                note={editingNote}
                onClose={() => setEditingNote(null)}
                onSave={editNote}
            />

            <p>La lista</p>
            <ul>
                {notes.map((note) => (
                    <ListElement
                        key={note.id}
                        note={note}
                        onDeleteNote={removeNote}
                        onEditNote={setEditingNote}
                    />
                ))}
            </ul>
        </>
    )
}