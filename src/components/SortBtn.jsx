/* eslint-disable */

const SortBtn = ({ setSortValue }) => {
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
