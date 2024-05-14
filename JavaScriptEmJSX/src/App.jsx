import Greetings from "./components/Greetings"; // Importando componentes.
import Greetings1 from "./components/Greetings1";
import AlertButton from "./components/AlertButton";

function App() {
  return (
    <div className="App">
      {/*Usando componentes.*/}
      <Greetings /> 
      <Greetings1 />
      <AlertButton />
    </div>
  );
};

export default App;