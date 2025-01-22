/* eslint-disable */

const FormInput = ({ addRegion, setAddRegion, type = "number", name }) => {
  const handleChange = (e) => {
    setAddRegion({
      ...addRegion,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <td>
      <input
        type={type}
        name={name}
        value={addRegion[name]}
        placeholder={type === "text" ? "국가 입력" : "0"}
        min="0"
        onChange={handleChange}
      />
    </td>
  );
};

export default FormInput;
