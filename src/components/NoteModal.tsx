import { useEffect, useRef, useState } from "react"
import type { Note } from "../types/Note"

type NoteModalProps = {
    note: Note | null
    onClose: () => void
    onSave: (id: number, newText: string) => void
}

export function NoteModal({ note, onClose, onSave }: NoteModalProps) {
    const modalRef = useRef<HTMLDialogElement>(null)
    const [text, setText] = useState("")

    const isOpen = note !== null

    useEffect(() => {
        const modalElement = modalRef.current
        if (!modalElement) return

        if (isOpen) {
            setText(note.text)
            modalElement.showModal()
        } else {
            modalElement.close()
            setText("")
        }

    }, [isOpen, note])

    function saveNote() {
        if (!note) return

        onSave(note.id, text)
        onClose()
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "Escape") {
            onClose()
        }
    }

    return (
        <dialog ref={modalRef} className="modal" onKeyDown={handleKeyDown}>
            <h3>Modifica Nota</h3>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={saveNote}>Salva</button>
            <button onClick={onClose}>Close</button>
        </dialog>
    )
}