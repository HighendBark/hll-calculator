import { FC, useCallback } from "react";

type ButtonProps = {
  value: number;
  onClick: (number: number) => void;
  isDisabled?: boolean;
};

const Button = (props: ButtonProps) => {
  const handleClick = useCallback(() => {
    props.onClick(props.value);
  }, []);

  return (
    <button
      disabled={props.isDisabled}
      className="w-full inline-flex justify-center items-center py-5 bg-gray-100 rounded-md font-semibold hover:bg-gray-300 disabled:pointer-events-none transition-all ease-in-out duration-150 disabled:brightness-50 outline-none focus:outline-none"
      onClick={handleClick}
    >
      <span className="pointer-events-none">
        {props.value === -1 ? "Reset" : props.value}
      </span>
    </button>
  );
};
export default Button;
