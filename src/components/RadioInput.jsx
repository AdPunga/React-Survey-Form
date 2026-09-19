const RadioInput = ({name, checked, value, onChange, label}) => {
    return ( 
        <label>
            <input 
                type="radio" 
                name={name} 
                checked={checked}
                value={value}
                onChange={onChange}
            /> {label}
        </label>
     );
}
 
export default RadioInput;