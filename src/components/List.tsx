import { ListElement } from "./ListElement"
import { useNotes } from "../hooks/useNotesList"

export function List() {
    const { removeNote, notes } = useNotes()

    return (
        <>
            <p>La lista</p>
            <ul>
                {notes.map((note, i) => (
                    <ListElement key={i} note={note} onDeleteNote={removeNote} />
                ))}
            </ul>
        </>
    )
}

// Search -> cercare le note per data / contenuto testo