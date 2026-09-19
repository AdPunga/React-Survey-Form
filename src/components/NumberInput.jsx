const NumberInput = ({label, name, min, max, value, onChange, required}) => {
    return ( 
        <div className="mt-4">
            <label htmlFor={name} className="block font-semibold">{label}</label>
            <input 
                className="w-full px-2 py-1 border rounded-lg"
                type="number"
                name={name}
                id={name}
                min={min}
                max={max}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
     );
}
 
export default NumberInput;