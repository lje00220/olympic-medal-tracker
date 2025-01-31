import { useState } from "react";
import MedalList from "./MedalList/MedalList.jsx";
import MedalForm from "./MedalForm/MedalForm.jsx";
import SortBtn from "./MedalList/SortBtn.jsx";
import { useEffect } from "react";

/**
 * 메달 집계를 관리하는 부모 컴포넌트
 * - 메달 리스트의 상태 관리
 * - 메달 리스트 localStorage 저장
 *
 * @returns {JSX.Element}
 */

const MedalTable = () => {
  // input에서 입력한 값을 저장하는 객체
  const [inputValue, setInputValue] = useState({
    region: "",
    goldMedal: 0,
    silverMedal: 0,
    bronzeMedal: 0,
  });

  // 메달리스트를 저장하는 state(localStorage에서 불러온 데이터로 초기값 설정)
  // localStorage에 값이 존재하지 않을 경우 빈 배열로 설정
  const [medalList, setMedalList] = useState(
    JSON.parse(localStorage.getItem("medal-list")) || []
  );

  // 정렬 방식을 저장하는 state(초기값: 금메달 순 정렬)
  const [sortValue, setSortValue] = useState("goldSort");

  // medalList가 변경될 때 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("medal-list", JSON.stringify(medalList));
    console.log("hello");
  }, [medalList]);

  return (
    <div className="main">
      <div className="container">
        <div>
          <h1>2024 파리 올림픽</h1>
        </div>
        <SortBtn sortValue={sortValue} setSortValue={setSortValue} />
        <MedalForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          medalList={medalList}
          setMedalList={setMedalList}
        />
        <MedalList
          medalList={medalList}
          setMedalList={setMedalList}
          sortValue={sortValue}
        />
      </div>
    </div>
  );
};

export default MedalTable;
