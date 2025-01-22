/* eslint-disable */

import { AddRegion } from "./AddList.jsx";

const MedalList = ({ region, setRegions, sortValue }) => {
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
export { MedalList };
