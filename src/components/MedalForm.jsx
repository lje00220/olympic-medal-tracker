/* eslint-disable */

const MedalForm = ({ addRegion, region, setRegions, setAddRegion }) => {
  const handleChange = (e) => {
    setAddRegion({
      ...addRegion,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.name;

    if (action === "addRegion") {
      let isInclude = false;
      region.map((x) => {
        if (x.region === addRegion.region) {
          alert("이미 존재하는 국가명입니다!");
          isInclude = true;
        }
      });
      if (addRegion.region === "") {
        alert("국가 이름을 입력해주세요");
        return;
      }
      isInclude || setRegions([...region, addRegion]);
    } else if (action === "updateRegion") {
      let isInclude = false;
      const updateRegion = region.map((x) => {
        if (x.region === addRegion.region) {
          const returnObj = {
            region: addRegion.region,
            goldMedal: addRegion.goldMedal,
            silverMedal: addRegion.silverMedal,
            bronzeMedal: addRegion.bronzeMedal,
          };
          isInclude = true;
          return returnObj;
        } else {
          return x;
        }
      });

      if (!isInclude) {
        alert("존재하지 않는 국가입니다!");
      }
      setRegions([...updateRegion]);
    }
  };
  return (
    <div className="form">
      <form action="#" onSubmit={handleForm}>
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="region"
                  placeholder="국가 입력"
                  value={addRegion.region || ""}
                  onChange={handleChange}
                  autoFocus
                />
              </td>
              <td>
                <input
                  type="number"
                  name="goldMedal"
                  value={addRegion.goldMedal || 0}
                  min="0"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="silverMedal"
                  value={addRegion.silverMedal || 0}
                  min="0"
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="bronzeMedal"
                  value={addRegion.bronzeMedal || 0}
                  min="0"
                  onChange={handleChange}
                />
              </td>
              <td>
                <button type="submit" name="addRegion">
                  국가 추가
                </button>
              </td>
              <td>
                <button type="submit" name="updateRegion">
                  업데이트
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default MedalForm;
