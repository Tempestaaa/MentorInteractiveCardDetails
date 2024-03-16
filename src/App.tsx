import { useState } from "react";
import Left from "./components/Left";
import Right from "./components/Right";

type inputType = {
  name: string;
  number: string;
  month: string;
  year: string;
  cvc: string;
};

function App() {
  const [inputs, setInputs] = useState<inputType>({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white font-default font-medium flex flex-col md:flex-row">
      <Left inputs={inputs} />
      <Right inputs={inputs} handleChange={handleChange} />
    </div>
  );
}

export default App;
