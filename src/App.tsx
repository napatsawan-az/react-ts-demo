import CustomButton from "./components/html/Button";

function App() {
  return (
    <div>
      <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        Primary Button
      </CustomButton>
    </div>
  );
}

export default App;
