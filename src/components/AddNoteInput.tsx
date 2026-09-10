import { useState } from "react"
import { useNotes } from "../hooks/useNotesList"

export function AddNoteInput() {
    const [newNoteText, setNewNoteText] = useState("")
    const [noteId, setNoteId] = useState(0)
    const { addNote } = useNotes()

    function addNewNote() {
        if (!newNoteText.trim()) return
        let date: Date = new Date

        const formattedDate: string = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
        const formattedHour: string = date.getHours() + ":" + date.getMinutes()
        const formattedDateHour: string = formattedDate + ", " + formattedHour

        addNote({ id: noteId, text: newNoteText, date: formattedDateHour })
        setNoteId(noteId + 1)
        setNewNoteText("")
    }

    return (
        <div>
            <input type='text' placeholder='Nuova nota' value={newNoteText} onChange={(e) => setNewNoteText(e.target.value)} />
            <button onClick={() => addNewNote()}>Aggiungi</button>
        </div>
    )
}