import swimming from "../../assets/swimming.png";
import classRoom from "../../assets/class.png";
import play from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="mt-5 h-[739px] bg-[#F3F3F3] lg:ml-0.5 ml-2.5">
      <h1 className="font-bold pt-3.5 pl-2">Q-Zone</h1>
      <div>
        <img className="pt-6" src={swimming} alt="" />
        <img className="pt-3.5" src={classRoom} alt="" />
        <img className="pt-3.5" src={play} alt="" />
      </div>
    </div>
  );
};

export default QZone;
