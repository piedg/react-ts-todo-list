import type { Note } from "../types/Note"

type ListElementProps = {
    note: Note,
    onDeleteNote: (id: number) => void
}

export function ListElement({ note, onDeleteNote }: ListElementProps) {
    return (
        <li>
            <p>{note.text} - <span>{note.date}</span></p>
            <button>Modifica</button>
            <button onClick={() => onDeleteNote(note.id)}>Elimina</button>
        </li>
    )
}