import Introduction from "./Components/Introduction";
import ComponentInfo from "./Components/ComponentInfo";
import ClassComponentFrom from "./Components/ClassComponentFrom";
function App() {
  return (
    <div className="App">
    <Introduction />
    <hr />
    <ComponentInfo/>
    <hr />
    <ClassComponentFrom></ClassComponentFrom>
    </div>
  );
}

export default App;
