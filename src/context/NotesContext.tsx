import { createContext, type ReactNode } from "react";
import type { Note } from "../types/Note";
import { useNotesList } from "../hooks/useNotesList";

export const NotesContext = createContext<NotesContextProps | null>(null)

export type NotesContextProps = {
    addNote: (note: Note) => void,
    removeNote: (id: number) => void,
    notes: Note[]
}

export function NotesProvider({ children }: { children: ReactNode }) {
    let notes = useNotesList()

    return (
        <NotesContext value={notes}>
            {children}
        </NotesContext>
    )
}

