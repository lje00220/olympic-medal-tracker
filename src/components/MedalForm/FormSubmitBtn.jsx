/* eslint-disable */

/**
 * Form 제출 버튼 컴포넌트
 *
 * @component
 * @param {Object} props
 * @param {string} props.name - 버튼에 표시되는 텍스트
 * @param {string} props.value - 폼에서 식별할 버튼 이름
 * @returns {JSX.Element}
 */

const FormSubmitBtn = ({ name, value }) => {
  return (
    <button type="submit" name={name}>
      {value}
    </button>
  );
};

export default FormSubmitBtn;
