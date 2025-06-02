import avatarImage from "../assets/avatar.png";

export default function Avatar() {
  return (
    <div className="h-48 w-48">
      <img
        src={avatarImage}
        alt="avatar-image"
        className="ring-primary-light-bg rounded-full object-cover ring-2 dark:ring-teal-400/50"
      />
    </div>
  );
}
