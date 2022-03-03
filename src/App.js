import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseList,
  deleteTask,
  resetList,
  toDO,
} from "./redux/actions/listActions";
import listReducer from "./redux/reducers/listReducer";
import X from "./X.png";
import { useRef } from "react";

function App() {
  const list = useSelector((store) => store.listReducer.list);

  const dispatchList = useDispatch();
  const inputRef = useRef();

  return (
    <div className="App">
      <header className="App-header">
        <div className="display">
          {list.map((name, i) => (
            <p id="tarea" className="flex">
              {"✦ " + name.payload + " Tasca"}
              <div
                className={
                  list[i].completed === "Done" ? "colorVerde" : "colorRojo"
                }
                onClick={() => {
                  dispatchList(toDO((name.completed = "Done")));
                }}
              >
                {name.completed}
              </div>

              <img
                heigth="30px"
                width="30px"
                alt="img"
                src={X}
                onClick={() => dispatchList(deleteTask(list[i]))}
              ></img>
            </p>
          ))}
        </div>
        <br />
        <input ref={inputRef}></input>
        <button
          onClick={() =>
            dispatchList(
              increaseList(inputRef.current.value),
              (inputRef.current.value = "")
            )
          }
        >
          INCREASE LIST
        </button>

        <br />
        <button onClick={() => dispatchList(resetList())}>RESET</button>
      </header>
    </div>
  );
}

export default App;
