import type { Note } from "../../types/Note"
import styles from "./ListElement.module.css"

type ListElementProps = {
    note: Note
    onDeleteNote: (id: number) => void
    onEditNote: (note: Note) => void
}

export function ListElement({ note, onDeleteNote, onEditNote }: ListElementProps) {
    return (
        <li className={styles.listElement}>
            <div className={styles.container}>
                <p className={styles.date}>{note.date}</p>
                <p className={styles.text}> {note.text}</p>
                <div className={styles.actions}>
                    <button className={styles.editButton} onClick={() => onEditNote(note)}>Modifica</button>
                    <button className={styles.deleteButton} onClick={() => onDeleteNote(note.id)}>Elimina</button>
                </div>
            </div>
        </li >
    )
}