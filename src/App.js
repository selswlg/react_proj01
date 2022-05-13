import { useState, useEffect, useRef, useMemo } from "react";

const hardCalculate = (num) => {
  console.log("어려운 계산");
  for (let i = 0; i < 999999999; i++) {} //생각하는 시간
  return num + 10000;
};
const easyCalculate = (num) => {
  console.log("쉬운");
  return num + 1;
};

export default function App() {
  const [hardNum, setHardNum] = useState(1);
  const [easyNum, setEasyNum] = useState(1);

  const hardnumber = useMemo(() => {
    return hardCalculate(hardNum);
  }, [hardNum]);
  const easynumber = easyCalculate(hardNum);

  const handleHardNum = (e) => {
    setHardNum(parseInt(e.target.value));
  };

  const handleEasydNum = (e) => {
    setEasyNum(parseInt(e.target.value));
  };

  return (
    <div className="App">
      <p> 어려운 계산기 </p>
      <input type="number" value={hardNum} onChange={handleHardNum}></input>
      <span> + 10000 = {hardnumber}</span>

      <p> 쉬운 계산기 </p>
      <input type="number" value={easyNum} onChange={handleEasydNum}></input>
      <span> + 1 = {easynumber}</span>
    </div>
  );
}
