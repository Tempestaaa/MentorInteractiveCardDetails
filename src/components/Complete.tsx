import completeIcon from "../assets/images/icon-complete.svg";

type Props = {
  isNext: boolean;
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
  reset: () => void;
};

const Complete = ({ isNext, setIsNext, reset }: Props) => {
  return (
    <>
      {isNext && (
        <div className="w-[90%] lg:w-[40%] flex flex-col text-center gap-4 lg:ml-[20%] mt-24 lg:mt-0">
          <img
            src={completeIcon}
            alt="complete icon"
            className="mx-auto w-[24%]"
          />
          <h1 className="uppercase text-2xl">thank you!</h1>
          <p className="text-input-border text-base">
            We've added your card details
          </p>
          <button
            onClick={() => {
              setIsNext(false);
              reset();
            }}
            className="bg-btn text-btn-text mt-4 py-3 rounded-md hover:bg-gradient-to-r from-gradient-start to-gradient-end transition-all"
          >
            Continue
          </button>
        </div>
      )}
    </>
  );
};

export default Complete;
