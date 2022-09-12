import "./App.css";
import BuilderForm from "./components/BuilderForm";
import FormPreview from "./components/FormPreview";

function App() {
  return (
    <div className="p-5">
      <BuilderForm />
      <FormPreview />
    </div>
  );
}

export default App;
