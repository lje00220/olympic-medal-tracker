import { useState } from "react";
import { MedalList } from "./components/MedalList";

function App() {
  const [addRegion, setAddRegion] = useState({
    region: "",
    goldMedal: 0,
    silverMedal: 0,
    bronzeMedal: 0,
  });

  const handleChange = (e) => {
    setAddRegion({
      ...addRegion,
      [e.target.name]: e.target.value,
    });
  };

  const [region, setRegions] = useState([]);
  const handleForm = (e) => {
    let isInclude = false;
    e.preventDefault();
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
  };

  return (
    <div className="main">
      <div className="container">
        <div>
          <h1>2024 파리 올림픽</h1>
        </div>
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
                    <button type="submit">국가 추가</button>
                  </td>
                  <td>
                    <button type="submit">업데이트</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <MedalList region={region} setRegions={setRegions}></MedalList>
        </div>
      </div>
    </div>
  );
}

export default App;
