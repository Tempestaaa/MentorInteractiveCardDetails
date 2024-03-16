import { useState } from "react";
import Left from "./components/Left";
import Right from "./components/Right";
import Complete from "./components/Complete";

type inputType = {
  name: string;
  number: string;
  month: string;
  year: string;
  cvc: string;
};

type errorType = {
  name?: string;
  number?: string;
  date?: string;
  cvc?: string;
};

function App() {
  const [inputs, setInputs] = useState<inputType>({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });
  const [error, setError] = useState<errorType>();
  const [isNext, setIsNext] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  const reset = () => {
    setInputs({
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    });
    setError({});
  };

  return (
    <div className="min-h-screen bg-white font-default font-medium flex flex-col lg:flex-row transition-all">
      <Left inputs={inputs} />
      {/* <div>1</div> */}
      <main className="lg:w-[70%] grid place-items-center text-lg font-medium transition-all">
        <Right
          inputs={inputs}
          handleChange={handleChange}
          error={error}
          setError={setError}
          isNext={isNext}
          setIsNext={setIsNext}
        />
        <Complete isNext={isNext} setIsNext={setIsNext} reset={reset} />
      </main>
    </div>
  );
}

export default App;
