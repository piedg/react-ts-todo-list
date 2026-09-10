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