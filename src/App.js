import NavBar from "./Components/NavBar/NavBar";
import "./Components/NavBar/NavBar.css";
import "./App.css";
import Banner from "./Banner/Banner";
import RowPost from "./Components/NavBar/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Originals'/>
      <RowPost title='Action' isSmall/>
    </div>
  );
}

export default App;