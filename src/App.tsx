import { useState } from 'react'
import { AddNoteInput } from './components/AddNoteInput'
import { List } from './components/List'
import type { Note } from './types/Note'
import './App.css'

function App() {
  const [notes, setNotes] = useState<Array<Note>>([])

  function addNote(note: Note) {
    setNotes([...notes, note])
  }

  function removeNote(id: number) {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>My Todo List</h1>
        </div>
        <AddNoteInput onAddNote={addNote} />
        <List notes={notes} onDeleteNote={removeNote} />
      </section>
    </>
  )
}

export default App
