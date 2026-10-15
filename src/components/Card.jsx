
import Icon from "./Icon";
import Button from "./Button";
import NumberCount from "./NumberCount";

function Card({ username, position, images }) {
  return (
    <div className="w-60 h-90 bg-[#f4f4f4] shadow mr-10 rounded-2xl">
      <div className="w-full h-[40%] bg-[#4070f4] rounded-t-2xl flex justify-center items-center">
        <img
          src={images}
          alt="Profile Picture"
          className="h-full mt-22 rounded-full object-cover border-4 border-[#4070f4]"
        />
      </div>
      <div>
        <p className="text-center mt-13">{username}</p>
        <p className="text-center mt-0.5 text-sm">{position}</p>
      </div>
      <Icon />
      <div className="flex gap-2 justify-center items-center">
        <Button title="Subscribe" />
        <Button title="Message" />
      </div>
      <div className="flex justify-center items-center mt-3 ">
        <NumberCount />
      </div>
    </div>
  );
}
export default Card;
