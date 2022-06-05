import RecordListItem from "./RecordListItem";
import RecordList from "./RecordList";
const Record = ({ recNum, setRecNum }) => {
  const delBtn = (idx) => {
    setRecNum(recNum.filter((_, _idx) => _idx !== idx));
  };

  return (
    <>
      <div>
        <h2>기록</h2>
        {recNum.length > 0 ? (
          <RecordList recNum={recNum} delBtn={delBtn} setRecNum={setRecNum} />
        ) : (
          "기록없음"
        )}
      </div>
    </>
  );
};

export default Record;
