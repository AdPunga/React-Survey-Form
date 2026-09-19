import { useState } from "react"
import NoteForm from "./NoteForm"
import NoteList from "./NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const removeNote = (id) => {
    setNotes(
      notes.filter(note => note.id !== id)
    )
    console.log(id)
  }

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-gray-100 rounded-lg text-slate-700">
      <h2 className="text-center text-2xl font-bold">
        <i className="fa-brands fa-react"></i> React Survey Form
      </h2>
      <NoteForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} removeNote={removeNote}/>
    </div>
  )
}

export default App;