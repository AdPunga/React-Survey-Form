import RadioInput from "./RadioInput";

const RadioGroup = ({legend, name, formData, options, onChange}) => {
    return ( 
        <div className="mt-4">
            <fieldset>
                <legend className="block font-semibold">{legend}</legend>
                {options.map(option => (
                    <RadioInput
                        key={option.value}
                        name={name}
                        label={option.label}
                        checked={option.value === formData.reactExperience}
                        value={option.value}
                        onChange={onChange}
                    />
                ))}
            </fieldset>
        </div>
     );
}
 
export default RadioGroup;