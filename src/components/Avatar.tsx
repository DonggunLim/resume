import avatarImage from "../assets/avatar.png";

export default function Avatar() {
  return (
    <div className="avatar-wrraper">
      <img src={avatarImage} alt="avatar" />
    </div>
  );
}
