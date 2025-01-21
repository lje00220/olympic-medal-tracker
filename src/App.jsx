function App() {
  return (
    <div className="main">
      <div className="container">
        <div>
          <h1>2024 파리 올림픽</h1>
        </div>
        <div className="form">
          <form action="">
            <table>
              <tr>
                <th>국가명</th>
                <th>금메달</th>
                <th>은메달</th>
                <th>동메달</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="국가 입력" autoFocus />
                </td>
                <td>
                  <input type="number" name="" id="" value={0} />
                </td>
                <td>
                  <input type="number" name="" id="" value={0} />
                </td>
                <td>
                  <input type="number" name="" id="" value={0} />
                </td>
                <td>
                  <button>국가 추가</button>
                </td>
                <td>
                  <button>업데이트</button>
                </td>
              </tr>
            </table>
            <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
