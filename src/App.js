import "./assets/css/App.css";
import FreeCodeCampLogo from "./components/FreeCodeCampLogo";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <FreeCodeCampLogo />
      <div className="container-tasks-list">
        <h1 className="taks-title">Mis Tareas</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
