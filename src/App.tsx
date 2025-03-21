import Liberary from "./components/Liberary";
import NavBar from "./components/NavBar";
import PornVideo from "./components/PornVideo";
import Js from "./components/Js";
import Inventory from "./components/Inventory";

const App = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Inventory />
      </div>
      <div>
        <Js />
      </div>
      <div>
        <PornVideo />
      </div>

      <div>
        <Liberary />
      </div>
    </>
  );
};

export default App;
