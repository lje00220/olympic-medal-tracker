import { useState } from "react";
import MedalList from "./MedalList/MedalList.jsx";
import MedalForm from "./MedalForm/MedalForm.jsx";
import SortBtn from "./MedalList/SortBtn.jsx";

/**
 * 메달 집계를 관리하는 부모 컴포넌트
 * - 메달 리스트의 상태 관리
 * - 메달 리스트 localStorage 저장
 *
 * @returns {JSX.Element}
 */

const MedalTable = () => {
  // input에서 입력한 값을 저장하는 객체
  const [addRegion, setAddRegion] = useState({
    region: "",
    goldMedal: 0,
    silverMedal: 0,
    bronzeMedal: 0,
  });

  // 메달리스트를 저장하는 state(localStorage에서 불러온 데이터로 초기값 설정)
  const [region, setRegions] = useState([
    ...JSON.parse(localStorage.getItem("list")),
  ]);

  // 정렬 방식을 저장하는 state(초기값: 금메달 순 정렬)
  const [sortValue, setSortValue] = useState("goldSort");

  localStorage.setItem("list", JSON.stringify(region));

  return (
    <div className="main">
      <div className="container">
        <div>
          <h1>2024 파리 올림픽</h1>
        </div>
        <SortBtn sortValue={sortValue} setSortValue={setSortValue} />
        <MedalForm
          addRegion={addRegion}
          setAddRegion={setAddRegion}
          region={region}
          setRegions={setRegions}
        />
        <MedalList
          region={region}
          setRegions={setRegions}
          sortValue={sortValue}
        />
      </div>
    </div>
  );
};

export default MedalTable;
