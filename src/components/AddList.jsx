/* eslint-disable */

const AddRegion = ({ region, setRegions }) => {
  const handlerDelete = (deleteRegion) => {
    const deletedArr = region.filter((x) => x.region != deleteRegion);
    setRegions(deletedArr);
  };
  return (
    <>
      {region
        .sort((x, y) => y.goldMedal - x.goldMedal)
        .map((x, index) => (
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

export { AddRegion };
