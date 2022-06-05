import { useState } from "react";
import Record from "./Record";
const Count = () => {
  const [num, setNum] = useState(0);
  const [recNum, setRecNum] = useState([]);
  return (
    <>
      <p>숫자: {num}</p>
      <div>
        <button onClick={() => setNum(num + 1)}> + </button>
        <button onClick={() => (num <= 0 ? setNum(0) : setNum(num - 1))}>
          {" "}
          -{" "}
        </button>
        <button onClick={() => setNum(0)}> Cancel </button>
        &nbsp; &nbsp;
        <button onClick={() => setRecNum([...recNum, num])}>기록</button>
        <button onClick={() => setRecNum([])}>기록 전체삭제</button>
        <hr />
        <Record recNum={recNum} setRecNum={setRecNum} />
      </div>
    </>
  );
};

export default Count;
