/* eslint-disable */

import FormSubmitBtn from "./FormSubmitBtn";
import FormInput from "./FormInput";

/**
 * Form UI를 만드는 컴포넌트
 * - 국가 추가, 업데이트 기능
 *
 * @component
 * @param {Object} props
 * @param {Object} props.inputValue - 입력값을 저장하는 객체
 * @param {Array<Object>} props.medalList - 메달 리스트 배열 (각 국가의 이름과 메달 갯수를 포함)
 * @param {Function} props.setMedalList - 메달 리스트를 업데이트하는 상태 설정 함수
 * @param {Function} props.setInputValue - 입력값을 업데이트하는 상태 설정 함수
 * @returns {JSX.Element}
 */

const MedalForm = ({ inputValue, medalList, setMedalList, setInputValue }) => {
  const handleForm = (e) => {
    e.preventDefault(); // 새로고침 방지
    const action = e.nativeEvent.submitter.name; // 클릭한 버튼의 name 값
    let isInclude = false;

    // 국가 이름을 입력하지 않을 경우 경고 메세지 출력
    if (inputValue.region.trim() === "") {
      alert("국가 이름을 입력해주세요!");
      return;
    }

    if (action === "addList") {
      // 국가 추가 버튼 클릭 시 중복 여부 확인 후 메달 리스트에 추가
      medalList.forEach((x) => {
        if (x.region === inputValue.region) {
          alert("이미 존재하는 국가입니다!");
          isInclude = true;
        }
      });
      isInclude || setMedalList([...medalList, inputValue]);
    } else if (action === "updateList") {
      // 업데이트 버튼 클릭 시 기존 메달 리스트 업데이트
      const updateRegion = medalList.map((x) => {
        if (x.region === inputValue.region) {
          isInclude = true;
          return { ...inputValue };
        }
        return x;
      });

      // 업데이트 하려는 국가 명이 기존 메달 리스트에 존재하지 않으면 경고 메세지 출력
      if (!isInclude) {
        alert("리스트에 존재하지 않는 국가입니다! 국가 추가를 먼저 하세요!");
      }
      setMedalList([...updateRegion]);
    }

    // input 초기값으로 초기화
    setInputValue({
      region: "",
      goldMedal: 0,
      silverMedal: 0,
      bronzeMedal: 0,
    });
  };

  return (
    <div className="form">
      <form action="#" onSubmit={handleForm}>
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <FormInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                name="region"
                type="text"
              />
              <FormInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                name="goldMedal"
              />
              <FormInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                name="silverMedal"
              />
              <FormInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                name="bronzeMedal"
              />
              <td>
                <FormSubmitBtn name="addList" value="국가 추가" />
              </td>
              <td>
                <FormSubmitBtn name="updateList" value="업데이트" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default MedalForm;
