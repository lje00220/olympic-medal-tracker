/* eslint-disable */

import AddRegion from "./AddList.jsx";

/**
 * 메달 리스트 UI 컴포넌트
 *
 * @component
 * @param {Object} props
 * @param {Array<Object>} props.region - 메달 리스트 배열 (각 국가의 이름과 메달 갯수를 포함)
 * @param {Function} props.setRegions - 메달 리스트를 업데이트하는 상태 설정 함수
 * @param {string} props.sortValue - 정렬 기준(금메달 순 or 총합 순)
 * @returns {JSX.Element}
 */

const MedalList = ({ region, setRegions, sortValue }) => {
  // 메달 리스트가 비어있을 경우 텍스트 출력
  if (region.length === 0) {
    return <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>;
  }
  return (
    <table className="region-list">
      <thead>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
      </thead>
      <tbody>
        <AddRegion
          region={region}
          setRegions={setRegions}
          sortValue={sortValue}
        />
      </tbody>
    </table>
  );
};
export default MedalList;
