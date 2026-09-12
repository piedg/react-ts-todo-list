import { createContext, type ReactNode } from "react";
import type { Note } from "../types/Note";
import { useNotesState } from "../hooks/notes/useNotesState";

export const NotesContext = createContext<NotesContextProps | null>(null)

export type NotesContextProps = {
    addNote: (note: Note) => void,
    removeNote: (id: number) => void,
    editNote: (id: number, newText: string) => void,
    notes: Note[],
    notesByIncludeText: () => Note[],
    searchNoteQuery: string,
    setSearchNoteQuery: (query: string) => void
}

export function NotesProvider({ children }: { children: ReactNode }) {
    let notes = useNotesState()

    return (
        <NotesContext value={notes}>
            {children}
        </NotesContext>
    )
}

