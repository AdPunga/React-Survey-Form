import { useState } from "react";
import TextInput from "./components/TextInput";
import NumberInput from "./components/NumberInput";
import SelectInput from "./components/SelectInput";
import RadioGroup from "./components/RadioGroup";
import CheckboxGroup from "./components/CheckboxGroup";

const NoteForm = ({notes, setNotes}) => {
    const [formData, setFormData] = useState({
        fullName: "",
        age: "",
        grade: "Junior",
        reactExperience: "",
        progLanguages: []
    })

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target

        setFormData(prevData => (
            {
                ...prevData,
                    [name] : 
                        type === "checkbox"
                        ? checked 
                            ? [...prevData[name], value]
                            : prevData[name].filter(item => item !== value)
                        : value
            }
        ))
    }

    const [isFormVisible, setIsFormVisible] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newNote = {
            ...formData,
            id: Date.now()
        }

        setNotes(
            [...notes, newNote]
        )
    }

    return ( 
        <>
            <button
                className="w-full mt-5 p-1 font-semibold border border-sky-500 rounded hover:bg-sky-100 transition"
                onClick={() => setIsFormVisible(!isFormVisible)}
            >{isFormVisible ? "✖️ Hide Form" : "➕ Add Note"}</button>

            {isFormVisible && 
                <form onSubmit={handleSubmit}>
                    <TextInput 
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />

                    <NumberInput 
                        label="Age"
                        name="age"
                        min="18"
                        max="99"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />

                    <SelectInput 
                        label="Grade"
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        options={[
                            {value: "Junior", label: "🟢 Junior"},
                            {value: "Middle", label: "🟡 Middle"},
                            {value: "Senior", label: "🔵 Senior"},
                        ]}
                        required
                    />

                    <RadioGroup 
                        legend="Have you worked with React before?"
                        name="reactExperience"
                        formData={formData.reactExperience}
                        options={[
                            {value: "Yes", label: "Yes"},
                            {value: "No", label: "No"},
                        ]}
                        onChange={handleChange}
                    />

                    <CheckboxGroup 
                        legend="What other programming languages are you familiar with?"
                        name="progLanguages"
                        formData={formData.progLanguages}
                        options={[
                            {value: "C++", label: "C++"},
                            {value: "Java", label: "Java"},
                            {value: "Python", label: "Python"},
                            {value: "Other", label: "Other"},
                        ]}
                        onChange={handleChange}
                    />

                    <input 
                        type="submit"
                        className="w-full mt-4 p-1 bg-sky-500 text-white font-semibold rounded cursor-pointer transition hover:bg-sky-600"
                        value="Submit Note" 
                    />
                </form>
            }
        </>
     );
}
 
export default NoteForm;