import RadioInput from "./RadioInput";

const RadioGroup = ({legend, name, formData, options, onChange}) => {
    return ( 
        <div className="mt-4">
            <fieldset className="flex gap-5">
                <legend className="block font-semibold">{legend}</legend>
                {options.map(option => (
                    <RadioInput
                        key={option.value}
                        name={name}
                        label={option.label}
                        checked={option.value === formData}
                        value={option.value}
                        onChange={onChange}
                    />
                ))}
            </fieldset>
        </div>
     );
}
 
export default RadioGroup;