/* eslint-disable */

const SortBtn = ({ setSortValue }) => {
  const handlerSort = (e) => {
    setSortValue(e.target.value);
  };

  return (
    <div className="sortBtn">
      <input
        type="radio"
        name="sort"
        value="goldSort"
        onChange={handlerSort}
        defaultChecked
      />{" "}
      금메달 순
      <input
        type="radio"
        name="sort"
        value="sumSort"
        onChange={handlerSort}
      />{" "}
      총합 순
    </div>
  );
};

export default SortBtn;
