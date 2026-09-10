import type { Note } from "../types/Note"

type ListElementProps = {
    note: Note,
    onDeleteNote: (id: number) => void
}

export function ListElement(params: ListElementProps) {
    return (
        <li>
            <p>{params.note.text}</p>
            <button>Modifica</button>
            <button onClick={() => params.onDeleteNote(params.note.id)}>Elimina</button>
        </li>
    )
}