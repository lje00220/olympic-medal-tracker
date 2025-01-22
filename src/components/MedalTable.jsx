import { useState } from "react";
import { MedalList } from "./MedalList.jsx";
import MedalForm from "./MedalForm.jsx";
import SortBtn from "./SortBtn.jsx";

const MedalTable = () => {
  const [addRegion, setAddRegion] = useState({
    region: "",
    goldMedal: 0,
    silverMedal: 0,
    bronzeMedal: 0,
  });

  const [region, setRegions] = useState([]);
  const [sortValue, setSortValue] = useState("goldSort");

  return (
    <div className="main">
      <div className="container">
        <div>
          <h1>2024 파리 올림픽</h1>
        </div>
        <SortBtn sortValue={sortValue} setSortValue={setSortValue}></SortBtn>
        <MedalForm
          addRegion={addRegion}
          setAddRegion={setAddRegion}
          region={region}
          setRegions={setRegions}
        ></MedalForm>
        <MedalList
          region={region}
          setRegions={setRegions}
          sortValue={sortValue}
        ></MedalList>
      </div>
    </div>
  );
};

export default MedalTable;
