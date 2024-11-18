import avatarImage from "../assets/avatar.png";

export default function Avatar() {
  return (
    <div className="w-48 h-48">
      <img
        src={avatarImage}
        alt="avatar-image"
        className="rounded-full object-cover
         ring-2 ring-primary-light-bg dark:ring-teal-400/50  "
      />
    </div>
  );
}
