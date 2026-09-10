import { ListElement } from "./ListElement"
import type { Note } from "../types/Note"

type ListProps = {
    notes: Array<Note>,
    onDeleteNote: (id: number) => void
}

export function List(params: ListProps) {

    return (
        <ul>
            {params.notes.map((note, i) => (
                <ListElement key={i} note={note} onDeleteNote={params.onDeleteNote} />
            ))}
        </ul>
    )
}

// Context -> custom hook che gestisce stato della lista
// Data ora creazione [X]
// Search -> cercare le note per data / contenuto testo