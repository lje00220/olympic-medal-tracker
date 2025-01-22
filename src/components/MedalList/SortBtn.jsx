/* eslint-disable */

/**
 * 메달 정렬을 위한 radio 버튼 컴포넌트(금메달 순, 총합 순)
 *
 * @component
 * @param {Object} props
 * @param {Function} props.setSortValue - 선택한 정렬 방식을 업데이트하는 상태 설정 함수
 * @returns {JSX.Element}
 */

const SortBtn = ({ setSortValue }) => {
  // radio 버튼 클릭 시 호출되는 함수(금메달 순, 총합 순 중 하나 선택 시)
  const handlerSort = (e) => {
    setSortValue(e.target.value);
  };

  return (
    <div className="sortBtn">
      <label>
        <input
          type="radio"
          name="sort"
          value="goldSort"
          onChange={handlerSort}
          defaultChecked
        />{" "}
        금메달 순
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          value="sumSort"
          onChange={handlerSort}
        />{" "}
        총합 순
      </label>
    </div>
  );
};

export default SortBtn;
