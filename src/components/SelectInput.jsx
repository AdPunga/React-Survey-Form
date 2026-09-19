const SelectInput = ({name, label, value, onChange, options, required}) => {
    return ( 
        <div className="mt-4">
            <label htmlFor={name} className="block font-semibold">{label}</label>
            <select
                className="w-full py-1 border rounded-lg"
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
     );
}
 
export default SelectInput;