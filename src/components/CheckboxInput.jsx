const CheckboxInput = ({name, checked, value, onChange, label}) => {
    return ( 
        <label>
            <input 
                type="checkbox"
                name={name}
                checked={checked}
                value={value}
                onChange={onChange}
            /> {label}
        </label>
     );
}
 
export default CheckboxInput;