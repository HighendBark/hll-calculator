import { ButtonHTMLAttributes, FC, useCallback, useMemo } from "react";
import useIsMobile from "../../../hooks/useIsMobile";

type ButtonProps = {
  value: number;
  onClick: (number: number) => void;
  isDisabled?: boolean;
};

const Button = (props: ButtonProps) => {
  const isMobile = useIsMobile();
  const handleClick = useCallback(() => {
    props.onClick(props.value);
  }, [props.value, props.onClick]);

  const clickHandler: ButtonHTMLAttributes<HTMLButtonElement> = useMemo(
    () =>
      isMobile ? { onTouchStart: handleClick } : { onPointerDown: handleClick },
    [isMobile]
  );

  return (
    <button
      disabled={props.isDisabled}
      className={`w-full inline-flex justify-center items-center py-5 ${
        props.value === -1
          ? "bg-red-100 text-red-700"
          : props.value === -2
          ? "bg-green-100 text-green-700"
          : "bg-gray-100"
      } rounded-md font-semibold hover:bg-gray-300 pointer-events-auto disabled:pointer-events-none transition-all ease-in-out duration-150 disabled:brightness-50 outline-none focus:outline-none`}
      {...clickHandler}
    >
      <span className="pointer-events-none">
        {props.value === -1
          ? "Reset"
          : props.value === -2
          ? "Save"
          : props.value}
      </span>
    </button>
  );
};
export default Button;
