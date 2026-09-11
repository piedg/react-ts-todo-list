import type { Note } from "../types/Note"

type ListElementProps = {
    note: Note
    onDeleteNote: (id: number) => void
    onEditNote: (note: Note) => void
}

export function ListElement({ note, onDeleteNote, onEditNote }: ListElementProps) {
    return (
        <li>
            <p>{note.text} - <span>{note.date}</span></p>
            <button onClick={() => onEditNote(note)}>Modifica</button>
            <button onClick={() => onDeleteNote(note.id)}>Elimina</button>
        </li>
    )
}