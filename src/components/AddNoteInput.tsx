import { useState } from "react"
import type { Note } from "../types/Note"

type AddNoteInputProps = {
    onAddNote: (note: Note) => void
}

export function AddNoteInput(props: AddNoteInputProps) {
    const [newNoteText, setNewNoteText] = useState("")
    const [noteId, setNoteId] = useState(0)

    function AddNote() {
        if (!newNoteText.trim()) return
        props.onAddNote({ id: noteId, text: newNoteText })
        setNoteId(noteId + 1)
        setNewNoteText("")
    }

    return (
        <div>
            <input type='text' placeholder='Nuova nota' value={newNoteText} onChange={(e) => setNewNoteText(e.target.value)} />
            <button onClick={() => AddNote()}>Aggiungi</button>
        </div>
    )
}