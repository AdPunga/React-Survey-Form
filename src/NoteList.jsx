const NoteList = ({notes, removeNote}) => {
    return ( 
        <div className="mt-5">
            {notes.map(note => (
                <div className="flex justify-between items-start mt-3 p-3 bg-white rounded border-l-3" key={note.id} style={{borderLeftColor: note.grade === "Junior" ? "green" : note.grade === "Middle" ? "salmon" : "dodgerBlue"}}>
                    <div>
                        <h3 className="text-xl font-bold">{note.fullName}</h3>
                        <div className="flex gap-2">
                            <p className="font-semibold text-slate-600">Age:</p>
                            <p>{note.age}</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="font-semibold text-slate-600">Grade:</p>
                            <p>{note.grade}</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="font-semibold text-slate-600">Previous React Experience:</p>
                            <p>{note.reactExperience}</p>
                        </div>
                        <div className="flex gap-2">
                            <p className="font-semibold text-slate-600">Other Programming Languages:</p>
                            <p>{note.progLanguages.join(", ")}</p>
                        </div>
                    </div>
                    <button onClick={() => removeNote(note.id)}><i className="fa-solid fa-trash text-red-600 cursor-pointer hover:text-red-800"></i></button>
                </div>
            ))}
        </div>
     );
}
 
export default NoteList;