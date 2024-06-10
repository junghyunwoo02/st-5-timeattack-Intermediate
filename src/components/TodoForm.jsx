import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

export default function TodoForm() {
  const todosTitle = useSelector((state) => state.todo);
  const todosContent = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todosTitle || !todosContent) {
      alert("제목과 내용을 모두 입력해주세요.");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>제목: {todosTitle} </label>
      <input type="text" value={} onChange={}/> <label>내용: {todosContent}</label>
      <input type="text" value={} onChange={}/>
      <button onClick={() => dispatch(addTodo())}>추가</button>
    </form>
  );
}
