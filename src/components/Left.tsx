import cardFront from "../assets/images/bg-card-front.png";
import cardBack from "../assets/images/bg-card-back.png";
import logo from "../assets/images/card-logo.svg";

const Left = () => {
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
          <div className="row-start-1 row-end-2 col-start-1 col-end-2 flex flex-col items-start justify-between p-4">
            <img src={logo} alt="card logo" />
            <div className="text-btn-text space-y-2">
              <p className="text-2xl text-center">0000 0000 0000 0000</p>
              <p className="uppercase text-xs flex items-center justify-between">
                jane applessed <span>00/00</span>
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
            000
          </p>
        </div>
      </div>
    </section>
  );
};

export default Left;
