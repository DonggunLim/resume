import { FC, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <>
      <button
        className="w-fit flex items-center rounded-full 
      px-3 py-1 text-xs font-semibold leading-5
       bg-primary-light-bg text-primary-light-text
       hover:bg-primary-light-bg/30
       dark:bg-primary-dark-bg/10 dark:text-primary-dark-text
       dark:hover:bg-primary-dark-bg/30
       "
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
