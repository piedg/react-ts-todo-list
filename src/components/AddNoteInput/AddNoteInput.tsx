import { useState } from "react"
import { useNotes } from "../../hooks/notes/useNotes"
import styles from "./AddNoteInput.module.css"

export function AddNoteInput() {
    const [newNoteText, setNewNoteText] = useState("")
    const [noteId, setNoteId] = useState(0)
    const { addNote } = useNotes()

    function addNewNote() {
        if (!newNoteText.trim()) return
        let date: Date = new Date

        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        const hours = date.getHours().toString().padStart(2, "0")
        const minutes = date.getMinutes().toString().padStart(2, "0")

        const formattedDate: string = day + "/" + month + "/" + year
        const formattedHour: string = hours + ":" + minutes
        const formattedDateHour: string = formattedDate + ", " + formattedHour

        addNote({ id: noteId, text: newNoteText, date: formattedDateHour })
        setNoteId(noteId + 1)
        setNewNoteText("")
    }

    return (
        <div className={styles.container}>
            <input className={styles.input} type='text' placeholder='Nuova nota' value={newNoteText} onChange={(e) => setNewNoteText(e.target.value)} />
            <button className={styles.addButton} onClick={() => addNewNote()}>Aggiungi</button>
        </div>
    )
}