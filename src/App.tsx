import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Greet from "./components/Greet";

function App() {
  return (
    <>
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonado Dicpario!</Heading>
      </Oscar>
      <Greet name="Vishwas" isLoggedIn={false} />
    </>
  );
}

export default App;
