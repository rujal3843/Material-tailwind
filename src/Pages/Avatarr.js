import { Avatar } from "@material-tailwind/react";
import img from '../assets/abc.jpg'
 
export default function Avatarr() {
  return (
    <div className="flex gap-4">
      <Avatar src={img} alt="avatar" />
      <Avatar src={img} alt="avatar" variant="rounded" />
      <Avatar src={img} alt="avatar" variant="square" />
    </div>
  );
}