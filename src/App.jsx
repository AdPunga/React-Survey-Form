import { useEffect, useState } from "react"
import NoteForm from "./NoteForm"
import NoteList from "./NoteList";

function App() {
  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));

    return notes || [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  const removeNote = (id) => {
    const confirmRemove = window.confirm("Are you sure you want to remove this note?")

    if(confirmRemove){
      setNotes(
        notes.filter(note => note.id !== id)
      )
    }
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