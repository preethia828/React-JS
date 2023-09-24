import logo from "./logo.svg";
import "./App.css";
import Calculator from "./Usestate/Calculator";
import NewUsestate from "./NewCalc/NewUsestate";
import TodoList from "./To-do-List/TodoList";

function App() {
  return (
    <>
      <Calculator />
      {/* <NewUsestate/> */}
      <TodoList />
    </>
  );
}

export default App;
