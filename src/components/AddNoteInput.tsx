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
        let date: Date = new Date

        const formattedDate: string = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
        const formattedHour: string = date.getHours() + ":" + date.getMinutes()
        const formattedDateHour: string = formattedDate + ", " + formattedHour

        props.onAddNote({ id: noteId, text: newNoteText, date: formattedDateHour })
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