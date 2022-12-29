import NavBar from "./Components/NavBar/NavBar";
import "./Components/NavBar/NavBar.css";
import { originals, action } from './urls';
import "./App.css";
import Banner from "./Banner/Banner";
import RowPost from "./Components/NavBar/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
    </div>
  );
}

export default App;