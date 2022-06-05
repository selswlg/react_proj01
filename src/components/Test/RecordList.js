import { useState } from "react";
import RecordListItem from "./RecordListItem";

const RecordList = ({ recNum, delBtn, setRecNum }) => {
  const [editOnOff, setEditOnOff] = useState(false);
  const [content, setContent] = useState("");

  return (
    <>
      {recNum.map((el, idx) => (
        <RecordListItem
          el={el}
          idx={idx}
          recNum={recNum}
          setRecNum={setRecNum}
        />
      ))}
    </>
  );
};

export default RecordList;
