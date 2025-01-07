import "./App.css";
import Actions from "./components/Actions";
import Progress from "./components/Progress";
import Sidebar from "./components/Sidebar";
import Words from "./components/Words";

function App() {
  return (
    <div className="container">
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Actions />
        <Words />
        <Progress />
      </main>
    </div>
  );
}

export default App;
