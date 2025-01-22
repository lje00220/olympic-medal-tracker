/* eslint-disable */

/**
 * Form의 input 컴포넌트 (입력 처리)
 *
 * @component
 * @param {Object} props
 * @param {Object} props.addRegion - 입력값을 저장하는 객체
 * @param {Function} props.setAddRegion - 입력값을 업데이트하는 상태 설정 함수
 * @param {string} [props.type="number"] - input의 타입(기본값: "number")
 * @param {string} props.name - input의 name 속성값
 * @returns {JSX.Element}
 */

const FormInput = ({ addRegion, setAddRegion, type = "number", name }) => {
  // 입력값이 변경되면 호출되는 함수(입력된 값을 addRegion에 반영)
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
        placeholder={type === "text" ? "국가 입력" : 0}
        min="0"
        onChange={handleChange}
      />
    </td>
  );
};

export default FormInput;
