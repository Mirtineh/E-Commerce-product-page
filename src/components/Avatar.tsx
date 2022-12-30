import { FunctionComponent } from "react";
import avatar from "../assets/images/image-avatar.png";
interface AvatarProps {}

const Avatar: FunctionComponent<AvatarProps> = () => {
  return (
    <img
      src={avatar}
      className="w-6 h-6 sm:w-11 sm:h-11 rounded-full hover:outline outline-orange outline-offset-0 hover:cursor-pointer"
      alt="avatar"
    />
  );
};

export default Avatar;
