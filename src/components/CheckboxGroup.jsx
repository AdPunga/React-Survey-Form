import CheckboxInput from "./CheckboxInput";

const CheckboxGroup = ({legend, name, formData, options, onChange}) => {
    return ( 
        <div className="mt-4">
            <fieldset className="flex flex-col">
                <legend className="block font-semibold">{legend}</legend>
                {options.map(option => (
                    <CheckboxInput 
                        key={option.value}
                        name={name}
                        label={option.label}
                        checked={formData.includes(option.value)}
                        value={option.value}
                        onChange={onChange}
                    />
                ))}
            </fieldset>
        </div>
     );
}
 
export default CheckboxGroup;