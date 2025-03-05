import Add from "./Add";
import JoinUs from "./JoinUs";
import QZone from "./QZone";
import SocialLogin from "./SocialLogin";

const RightAside = () => {
  return (
    <div>
      <h1 className="font-semibold text-center">Login With</h1>
      <SocialLogin></SocialLogin>
      <JoinUs></JoinUs>
      <QZone></QZone>
      <Add></Add>
    </div>
  );
};

export default RightAside;
