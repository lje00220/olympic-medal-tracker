/* eslint-disable */

import FormSubmitBtn from "./FormSubmitBtn";
import FormInput from "./FormInput";

const MedalForm = ({ addRegion, region, setRegions, setAddRegion }) => {
  const handleForm = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.name;
    let isInclude = false;

    if (action === "addRegion") {
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
        }
        return x;
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <FormInput
                addRegion={addRegion}
                setAddRegion={setAddRegion}
                name="region"
                type="text"
              />
              <FormInput
                addRegion={addRegion}
                setAddRegion={setAddRegion}
                name="goldMedal"
              />
              <FormInput
                addRegion={addRegion}
                setAddRegion={setAddRegion}
                name="silverMedal"
              />
              <FormInput
                addRegion={addRegion}
                setAddRegion={setAddRegion}
                name="bronzeMedal"
              />
              <td>
                <FormSubmitBtn name="addRegion" value="국가 추가" />
              </td>
              <td>
                <FormSubmitBtn name="updateRegion" value="업데이트" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default MedalForm;
