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

  // VNese Things
  function convertViToEn(str: string, toUpperCase = false) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư

    return toUpperCase ? str.toUpperCase() : str;
  }

  return (
    <section id="left" className="relative h-[250px] lg:h-auto lg:w-[30%]">
      {/* CARDS WRAPPER */}
      <div className="w-[90%] flex flex-col-reverse lg:flex-col lg:space-y-6 absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-1/2 -bottom-1/4 lg:bottom-0 left-1/2 -translate-x-1/2 lg:-translate-x-0">
        {/* CARD FRONT */}
        <div className="w-[80%] lg:w-[90%] grid shadow-xl">
          <img
            src={cardFront}
            alt="card front"
            className="row-start-1 row-end-2 col-start-1 col-end-2"
          />
          <div className="row-start-1 row-end-2 col-start-1 col-end-2 flex flex-col items-start justify-between p-2">
            <img src={logo} alt="card logo" />
            <div className="text-btn-text space-y-2 w-full">
              <p className="text-lg lg:text-3xl">
                {!inputs.number
                  ? "0000 0000 0000 0000"
                  : formattedNumber(inputs.number)}
              </p>
              <p className="uppercase text-xs flex items-center justify-between">
                {!inputs.name ? "jane applessed" : convertViToEn(inputs.name)}{" "}
                <span>
                  {!inputs.month ? "00" : inputs.month}/
                  {!inputs.year ? "00" : inputs.year}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* CARD BACK */}
        <div className="w-[80%] lg:w-[90%] grid relative ml-auto shadow-xl">
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
