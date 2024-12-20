import { PulseLoader } from "react-spinners";

const FallbackLoading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PulseLoader color="#9D00FFFF" />
    </div>
  );
};

export default FallbackLoading;
