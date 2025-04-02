export const InputText = ({ name, textValue, handleChange, placeholder }) => {
    return (
      <input
        name={name}
        style={{ width: "350px" }}
        onChange={handleChange}
        value={textValue}
        type="text"
        placeholder={placeholder}
      />
    );
}