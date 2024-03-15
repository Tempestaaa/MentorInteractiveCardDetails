// import Left from "./components/Left";
// import Right from "./components/Right";
import cardFront from "./assets/images/bg-card-front.png";
import cardBack from "./assets/images/bg-card-back.png";
import logo from "./assets/images/card-logo.svg";
import { useState } from "react";

const validLetter = /^[a-zA-Z]+$/;
const validNumber = /^[0-9]+$/;

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  const formattedNumber = (n: string) => {
    if (n.length > 4)
      return (
        n.substring(0, 4) +
        " " +
        n.substring(4, 8) +
        " " +
        n.substring(8, 12) +
        " " +
        n.substring(12, 16)
      );
  };

  const handleError = () => {
    const errorText: errorType = {};
    if (!inputs.name) errorText.name = `Can't be blank`;
    else if (!validLetter.test(inputs.name))
      errorText.name = "Wrong format, letters only";

    if (!inputs.number) errorText.number = `Can't be blank`;
    else if (!validNumber.test(inputs.number))
      errorText.number = "Wrong format, numbers only";

    if (!inputs.month || !inputs.year) errorText.date = `Can't be blank`;
    else if (!validNumber.test(inputs.month) || !validNumber.test(inputs.year))
      errorText.date = "Wrong format, numbers only";

    if (!inputs.cvc) errorText.cvc = `Can't be blank`;
    else if (!validNumber.test(inputs.cvc))
      errorText.cvc = "Wrong format, numbers only";

    setError(errorText);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleError();

    console.log(123);
  };
  return (
    <div className="min-h-screen bg-white font-default font-medium flex flex-col md:flex-row">
      <section id="left" className="relative lg:w-[30%]">
        {/* CARDS WRAPPER */}
        <div className="flex flex-col space-y-6 static lg:absolute top-1/2 -translate-y-1/2 -right-1/2">
          {/* CARD FRONT */}
          <div className="w-[90%] grid shadow-xl">
            <img
              src={cardFront}
              alt="card front"
              className="row-start-1 row-end-2 col-start-1 col-end-2"
            />
            <div className="row-start-1 row-end-2 col-start-1 col-end-2 flex flex-col items-start justify-between p-8">
              <img src={logo} alt="card logo" />
              <div className="text-btn-text space-y-2 w-full">
                <p className="text-3xl">
                  {!inputs.number
                    ? "0000 0000 0000 0000"
                    : formattedNumber(inputs.number)}
                </p>
                <p className="uppercase text-xs flex items-center justify-between">
                  {!inputs.name ? "jane applessed" : inputs.name}{" "}
                  <span>
                    {!inputs.month ? "00" : inputs.month}/
                    {!inputs.year ? "00" : inputs.year}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* CARD BACK */}
          <div className="w-[90%] grid relative ml-auto shadow-xl">
            <img
              src={cardBack}
              alt="card back"
              className="row-start-1 row-end-2 col-start-1 col-end-2"
            />
            <p className="row-start-1 row-end-2 col-start-1 col-end-2 text-btn-text text-xs absolute top-1/2 -translate-y-1/2 right-10">
              {!inputs.cvc ? "000" : inputs.cvc}
            </p>
          </div>
        </div>
      </section>

      <main className="w-[70%] grid place-items-center text-lg font-medium">
        <form
          onSubmit={handleSubmit}
          className="w-[50%] flex flex-col ml-[20%]"
        >
          {/* CARDHOLDER NAME */}
          <fieldset className="grid grid-rows-[auto_auto_16px] gap-1">
            <label htmlFor={`name`} className="uppercase">
              cardholder name
            </label>
            <input
              id={`name`}
              type="text"
              value={inputs.name}
              onChange={handleChange}
              placeholder="e.g. Jane Appleseed"
              className={`py-3 px-2 border-2 rounded-md ${
                error?.name ? "border-error" : "border-input-border"
              }`}
            />
            {error && <p className="text-error text-xs">{error.name}</p>}
          </fieldset>

          {/* CARD NUMBER */}
          <fieldset className="grid grid-rows-[auto_auto_16px] gap-1">
            <label htmlFor={`number`} className="uppercase">
              card number
            </label>
            <input
              id={`number`}
              type="text"
              value={inputs.number}
              onChange={handleChange}
              maxLength={16}
              placeholder="e.g. 1234 5678 9123 0000"
              className={`py-3 px-2 border-2 rounded-md ${
                error?.number ? "border-error" : "border-input-border"
              }`}
            />
            {error && (
              <p className="text-error text-xs capitalize">{error.number}</p>
            )}
          </fieldset>

          {/* EXP. DATE && CVC  */}
          <div className="flex items-center justify-between">
            <fieldset className="max-w-[50%] grid grid-rows-[auto_auto_16px] gap-1">
              <label htmlFor={`month`} className="flex-grow uppercase">
                exp. date (mm/yy)
              </label>
              <div className="space-x-2">
                <input
                  id={`month`}
                  type="text"
                  value={inputs.month}
                  onChange={handleChange}
                  placeholder="mm"
                  maxLength={2}
                  className={`max-w-[40%] py-3 px-2 border-2 ${
                    error?.date ? "border-error" : "border-input-border"
                  } rounded-md placeholder:uppercase `}
                />
                <input
                  id={`year`}
                  type="text"
                  value={inputs.year}
                  onChange={handleChange}
                  placeholder="yy"
                  maxLength={2}
                  className={`max-w-[40%] py-3 px-2 border-2 ${
                    error?.date ? "border-error" : "border-input-border"
                  } rounded-md placeholder:uppercase `}
                />
              </div>
              {error && (
                <p className="text-error text-xs capitalize">{error.date}</p>
              )}
            </fieldset>

            <fieldset className="grid grid-rows-[auto_auto_16px] gap-1">
              <label htmlFor={`cvc`} className="flex-grow uppercase">
                cvc
              </label>
              <input
                id={`cvc`}
                type="text"
                value={inputs.cvc}
                onChange={handleChange}
                placeholder="e.g. 123"
                maxLength={3}
                className={`w-full py-3 px-2 border-2 ${
                  error?.cvc ? "border-error" : "border-input-border"
                } rounded-md `}
              />
              {error && (
                <p className="text-error text-xs capitalize">{error.cvc}</p>
              )}
            </fieldset>
          </div>

          <button className="bg-btn text-btn-text mt-2 py-3 rounded-md hover:bg-gradient-to-r from-gradient-start to-gradient-end transition-all">
            Confirm
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
