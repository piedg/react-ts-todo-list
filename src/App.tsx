import { NotesProvider } from './context/NotesContext'
import { AddNoteInput } from './components/AddNoteInput'
import { List } from './components/List'

import './App.css'

function App() {
  return (
    <NotesProvider>
      <section id="center">
        <div>
          <h1>My Todo List</h1>
          <p>Made with React - Typescript</p>
        </div>
        <AddNoteInput />
        <List />
      </section>
    </NotesProvider>
  )
}

export default App
