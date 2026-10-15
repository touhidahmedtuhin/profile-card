import { IoIosHeartEmpty } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { BiShare } from "react-icons/bi";

function NumberCount() {
  return (
    <div className="flex justify-center items-center gap-5 text-gray-500 text-sm">
      <div className="flex justify-center items-center">
        <IoIosHeartEmpty className="text-gray-500 text-sm" />
        66k  
      </div>
      <div className="flex justify-center items-center font-light">
        <FiMessageCircle className="text-gray-500 text-sm" />
        2k  
      </div>
      <div className="flex justify-center items-center font-light">
        <BiShare className="text-gray-500 text-sm" />
        10k
      </div>
    </div>
  );
}

export default NumberCount;
