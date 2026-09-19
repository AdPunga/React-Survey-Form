import NoteForm from "./NoteForm"

function App() {

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg text-slate-700">
      <h2 className="text-center text-2xl font-semibold">✍️ React Notes App</h2>
      <NoteForm />
    </div>
  )
}

export default App
