import { useState } from "react";

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
    e.preventDefault();
    setRegions([...region, addRegion]);
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
          <RegionList region={region}>
            {/* 아직 추가된 국가가 없습니다. 메달을 추적하세요! */}
          </RegionList>
        </div>
      </div>
    </div>
  );
}

export default App;

const RegionList = (p) => {
  return (
    <table className="region-list">
      <thead>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
      </thead>
      <tbody>
        <AddRegion region={p.region} />
      </tbody>
    </table>
  );
};

const AddRegion = (p) => {
  return (
    <>
      {p.region.map((x, index) => (
        <tr key={index}>
          <td>{x.region}</td>
          <td>{x.goldMedal}</td>
          <td>{x.silverMedal}</td>
          <td>{x.bronzeMedal}</td>
          <td>
            <button>삭제</button>
          </td>
        </tr>
      ))}
    </>
  );
};
