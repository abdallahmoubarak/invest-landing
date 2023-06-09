import Image from "next/image";
import { MouseEventHandler } from "react";

export default function Button({
  text = "button",
  onClick,
  isSecondary,
  isLoading,
  disabled,
  icon,
}: buttonProps) {
  return (
    <button
      onClick={onClick}
      className={` py-2 px-4 rounded-full mx-auto block w-fit min-w-[9rem] border cursor-pointer  transition-all duration-200 ease-in-out ${
        disabled
          ? "text-white bg-gray-400 border-gray-400 hover:bg-gray-400"
          : isSecondary
          ? "bg-white text-secondary border-secondary hover:bg-secondary hover:text-white"
          : "border-primary bg-primary text-white hover:bg-primary80 hover:border-primary80 hover:text-darkgray"
      } `}
    >
      {isLoading ? (
        <div className="w-[1rem] h-6 mx-auto flex justify-center items-center">
          <Image src={"/svg/Loading.svg"} height={50} width={50} alt={""} />
        </div>
      ) : (
        <div className="flex gap-2 items-center whitespace-nowrap">
          <span>{icon}</span>
          <span>{text}</span>
        </div>
      )}
    </button>
  );
}

type buttonProps = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  isSecondary?: boolean;
  isLoading?: boolean;
  icon: React.ReactNode;
};
