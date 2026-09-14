import { createContext, type ReactNode } from "react";
import { useNotesState } from "../hooks/notes/useNotesState";

export const NotesContext = createContext<NotesContextProps | null>(null)

/*
USE EXPORT BELOW INSTEAD    
import type { Note } from "../types/Note";
import type { SortBy } from "../types/SortBy";

type NotesContextProps = {
    addNote: (note: Note) => void,
    removeNote: (id: number) => void,
    editNote: (id: number, newText: string) => void,
    notes: Note[],
    notesBySearch: () => Note[],
    searchNoteQuery: string,
    setSearchNoteQuery: (query: string) => void,
    sortBy: SortBy,
    setSortBy: (text: SortBy) => void,
    sortedNotes: Note[]
}
USE EXPORT BELOW INSTEAD    
*/

export type NotesContextProps = ReturnType<typeof useNotesState>

export function NotesProvider({ children }: { children: ReactNode }) {
    let notes = useNotesState()

    return (
        <NotesContext value={notes}>
            {children}
        </NotesContext>
    )
}

