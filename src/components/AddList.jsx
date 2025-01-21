const AddRegion = (p) => {
  const handlerDelete = (region) => {
    console.log(region);
  };
  return (
    <>
      {p.region
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
                onClick={() => handlerDelete(p.region.region)}
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
