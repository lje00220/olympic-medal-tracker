/* eslint-disable */

const AddRegion = ({ region, setRegions, sortValue }) => {
  const handlerDelete = (deleteRegion) => {
    const deletedArr = region.filter((x) => x.region != deleteRegion);
    setRegions(deletedArr);
  };

  if (sortValue === "goldSort") {
    region.sort((x, y) => y.goldMedal - x.goldMedal);
  } else {
    region.sort((x, y) => {
      const val1 = +x.goldMedal + +x.silverMedal + +x.bronzeMedal;
      const val2 = +y.goldMedal + +y.silverMedal + +y.bronzeMedal;
      return val2 - val1;
    });
  }
  return (
    <>
      {region.map((x, index) => (
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

export default AddRegion;
