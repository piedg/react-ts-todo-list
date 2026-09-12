import { ListElement } from "../ListElement/ListElement"
import { EditNoteModal } from "../EditNoteModal/EditNoteModal"
import { useState } from "react"
import type { Note } from "../../types/Note"
import { useNotes } from "../../hooks/notes/useNotes"
import styles from "./List.module.css"
import { FilterButton } from "../FilterButton/FilterButton"

export function List() {
    const { removeNote, editNote, notesBySearch, toggleSort, sortedNotes } = useNotes()
    const [editingNote, setEditingNote] = useState<Note | null>(null)

    return (
        <>
            <EditNoteModal
                note={editingNote}
                onClose={() => setEditingNote(null)}
                onSave={editNote}
            />

            <h2 className={styles.title}>Lista</h2>
            <div>
                <FilterButton title="Filtra per nome" action={() => toggleSort("name")} />
                <FilterButton title="Filtra per data" action={() => toggleSort("date")} />
            </div>
            <ul className={styles.list}>
                {
                    sortedNotes.map((note) => (
                        <ListElement
                            key={note.id}
                            note={note}
                            onDeleteNote={removeNote}
                            onEditNote={setEditingNote}
                        />
                    ))}
            </ul>
        </>
    )
}