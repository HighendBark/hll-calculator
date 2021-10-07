import { FC, useCallback } from "react";

type ButtonProps = {
  value: number;
  onClick: (number: number) => void;
}

const Button = (props: ButtonProps) => {
  const handleClick = useCallback(() => {
    props.onClick(props.value);
  }, [])

  return <button className="w-full inline-flex justify-center items-center py-5 bg-gray-100 rounded-md font-semibold hover:bg-gray-200 transition-all ease-in-out duration-150" onClick={handleClick}>{props.value === -1 ? "Reset" : props.value}</button>
}
export default Button;