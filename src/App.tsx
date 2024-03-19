import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked");
          console.log("event", event);
          console.log("id", id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log("event", event);
        }}
      />
    </>
  );
}

export default App;
