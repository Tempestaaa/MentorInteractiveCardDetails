import cardFront from "../assets/images/bg-card-front.png";
import cardBack from "../assets/images/bg-card-back.png";
import logo from "../assets/images/card-logo.svg";

type Props = {
  inputs: {
    name: string;
    number: string;
    month: string;
    year: string;
    cvc: string;
  };
};

const Left = ({ inputs }: Props) => {
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
    else return n;
  };

  return (
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
  );
};

export default Left;
