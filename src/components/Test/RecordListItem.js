import { useState } from "react";

const RecordListItem = ({ el, idx, recNum, setRecNum }) => {
  const [modifyModal, setModifyModal] = useState(false);
  const [content, setContent] = useState(el);
  const delBtn = (idx) => {
    setRecNum(recNum.filter((_, _idx) => _idx !== idx));
  };
  const modifyBtn = (idx) => {
    setRecNum(recNum.map((el, _idx) => (_idx === idx ? content : el)));
  };
  return (
    <>
      <div>
        <span>
          {idx + 1} 번 숫자 :{" "}
          {modifyModal ? (
            <>
              <input
                type="number"
                placeholder={el}
                min="0"
                max="20"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              &nbsp;
              <button
                onClick={() => {
                  modifyBtn(idx);
                  setModifyModal(!modifyModal);
                }}
              >
                수정 확인
              </button>{" "}
              &nbsp;
              <button onClick={() => setModifyModal(!modifyModal)}>
                수정 취소
              </button>
            </>
          ) : (
            <>
              {el}
              &nbsp;
              <button
                onClick={() => {
                  setModifyModal(!modifyModal);
                }}
              >
                수정
              </button>
              &nbsp;
              <button onClick={() => delBtn(idx)}>삭제</button>
            </>
          )}
        </span>
        &nbsp; &nbsp;
      </div>
      <br></br>
    </>
  );
};

export default RecordListItem;
