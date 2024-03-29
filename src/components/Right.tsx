const validNumber = /^[0-9]+$/;

type errorType = {
  name?: string;
  number?: string;
  date?: string;
  cvc?: string;
};

type Props = {
  inputs: {
    name: string;
    number: string;
    month: string;
    year: string;
    cvc: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: errorType | undefined;
  setError: React.Dispatch<React.SetStateAction<errorType | undefined>>;
  isNext: boolean;
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
};

const Right = ({
  inputs,
  handleChange,
  error,
  setError,
  isNext,
  setIsNext,
}: Props) => {
  const isValidDate = (month: number, year: number): boolean => {
    if (month < 0 || month > 12 || year < 0) return false;
    return true;
  };

  const handleError = () => {
    const errorText: errorType = {};
    if (!inputs.name) errorText.name = `Can't be blank`;

    if (!inputs.number) errorText.number = `Can't be blank`;
    else if (!validNumber.test(inputs.number))
      errorText.number = "Wrong format, numbers only";
    else if (inputs.number.length < 16)
      errorText.number = "Please enter 16 numbers!";

    if (!inputs.month || !inputs.year) errorText.date = `Can't be blank`;
    else if (!validNumber.test(inputs.month) || !validNumber.test(inputs.year))
      errorText.date = "Wrong format, numbers only";
    else if (!isValidDate(+inputs.month, +inputs.year))
      errorText.date = "Wrong date, try again!";

    if (!inputs.cvc) errorText.cvc = `Can't be blank`;
    else if (!validNumber.test(inputs.cvc))
      errorText.cvc = "Wrong format, numbers only";
    else if (inputs.cvc.length < 3) errorText.cvc = "Please enter 3 numbers!";

    if (Object.keys(errorText).length > 0) {
      setError(errorText);
    } else setIsNext(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleError();
  };

  return (
    <>
      {isNext === false && (
        <form
          onSubmit={handleSubmit}
          className="w-[90%] lg:w-[50%] flex flex-col ml-0 lg:ml-[20%] my-24"
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
              maxLength={40}
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
              value={inputs.number
                .replace(/\s/g, "")
                .replace(/(\d{4})/g, "$1 ")
                .trim()}
              onChange={handleChange}
              maxLength={19}
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
          <div className="flex gap-4 lg:justify-between ">
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
                  className={`w-[40%] py-3 px-2 border-2 ${
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
                  className={`w-[40%] py-3 px-2 border-2 ${
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

          <button className="bg-btn text-btn-text mt-2 py-3 rounded-md hover:bg-gradient-to-r from-gradient-start to-gradient-end transition-all cursor-pointer">
            Confirm
          </button>
        </form>
      )}
    </>
  );
};

export default Right;
