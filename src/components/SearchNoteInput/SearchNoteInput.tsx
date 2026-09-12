import { type ChangeEvent } from "react";
import styles from "./SearchNoteInput.module.css"
import { useNotes } from "../../hooks/notes/useNotes";

export function SearchNoteInput() {
    const { searchNoteQuery, setSearchNoteQuery } = useNotes()

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchNoteQuery(e.target.value);
    };

    return (
        <>
            <input className={styles.input}
                placeholder="Cerca nota"
                value={searchNoteQuery}
                onChange={(handleSearchChange)}>
            </input>
        </>
    )
}