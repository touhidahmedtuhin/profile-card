import { FaFacebook, FaTwitter, FaInstagram ,FaLinkedin} from "react-icons/fa";

function Icon() {
  return (
    <div className="flex gap-3 justify-center items-center mt-2 cursor-pointer">
      <FaFacebook className="text-blue-600" />
      <FaTwitter className="text-[#1da1f2]" />
      <FaInstagram className="text-[#E12F6B]" />
      <FaLinkedin className="text-[#1da1f2]" />
    </div>
  );
}
export default Icon;
