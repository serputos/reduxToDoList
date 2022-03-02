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

function App() {
  const list = useSelector((store) => store.listReducer.list);

  const dispatchList = useDispatch();
  console.log("checklist");

  return (
    <div className="App">
      <header className="App-header">
        <div className="display">
          {list.map((name, i) => (
            <p className="flex">
              {"✦ " + list[i] + "        "}
              <div onClick={() => dispatchList(toDO("done"))}>hola</div>

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
        <input id="myText"></input>
        <button
          onClick={() =>
            dispatchList(increaseList(document.getElementById("myText").value))
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
