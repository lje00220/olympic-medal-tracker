/* eslint-disable */

/**
 * 메달 리스트를 정렬한 후 화면에 출력하는 컴포넌트
 *
 * @component
 * @param {Object} props
 * @param {Array<Object>} props.medalList - 메달 리스트 배열 (각 국가의 이름과 메달 갯수를 포함)
 * @param {Function} props.setMedalList - 메달 리스트를 업데이트하는 상태 설정 함수
 * @param {string} props.sortValue - 정렬 기준(금메달 순 or 총합 순)
 * @returns {JSX.Element}
 */

const AddMedalList = ({ medalList, setMedalList, sortValue }) => {
  // 삭제한 객체 필터링 함수
  const handlerDelete = (deleteRegion) => {
    const deletedArr = medalList.filter((x) => x.region != deleteRegion);
    setMedalList(deletedArr);
  };

  // 정렬 로직 (금메달 순 or 총합 순)
  if (sortValue === "goldSort") {
    medalList.sort((x, y) => y.goldMedal - x.goldMedal);
  } else {
    medalList.sort((x, y) => {
      const sumX = +x.goldMedal + +x.silverMedal + +x.bronzeMedal;
      const sumY = +y.goldMedal + +y.silverMedal + +y.bronzeMedal;
      return sumY - sumX;
    });
  }
  return (
    <>
      {medalList.map((x, index) => (
        <tr key={index}>
          <td>{x.region}</td>
          <td>{x.goldMedal}</td>
          <td>{x.silverMedal}</td>
          <td>{x.bronzeMedal}</td>
          <td>
            <button
              className="deleteBtn"
              onClick={() => handlerDelete(x.region)}
            >
              삭제
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default AddMedalList;
