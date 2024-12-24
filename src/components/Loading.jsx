import loadingImg from "../assets/lottie/loading-spiner.json";
import Lottie from "lottie-react";
const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-464px)] flex justify-center">
      <Lottie className="w-36" animationData={loadingImg} loop={true} />
    </div>
  );
};

export default Loading;
