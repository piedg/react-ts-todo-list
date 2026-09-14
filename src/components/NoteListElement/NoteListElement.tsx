import type { Note } from "../../types/Note"
import styles from "./NoteListElement.module.css"

type ListElementProps = {
    note: Note
    onDeleteNote: (id: number) => void
    onEditNote: (note: Note) => void
    onCompleteNote: (note: Note) => void
}

export function NoteListElement({ note, onDeleteNote, onEditNote, onCompleteNote }: ListElementProps) {
    return (
        <li className={styles.listElement}>
            <div className={styles.container}>
                <p className={styles.date}>{note.date}</p>
                <p className={styles.text}>{note.text}</p>
                <div className={styles.actions}>
                    <button className={styles.editButton} onClick={() => onEditNote(note)}>Modifica</button>
                    <button className={styles.deleteButton} onClick={() => onDeleteNote(note.id)}>Elimina</button>
                    <input type="checkbox" id="completed" name="Completed" value="true" onChange={() => onCompleteNote(note)}></input>
                </div>
            </div>
        </li >
    )
}