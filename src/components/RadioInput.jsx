const RadioInput = ({name, checked, value, onChange}) => {
    return ( 
        <label>
            <input 
                type="radio" 
                name={name} 
                checked={checked}
                value={value}
                onChange={onChange}
            /> {value}
        </label>
     );
}
 
export default RadioInput;