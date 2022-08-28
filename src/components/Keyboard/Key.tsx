import { ReactNode } from "react";

type Props = {
  displayText: string,
  children?: ReactNode,
  onClick: () => void,
};

export const Key = ({ children, displayText, onClick }: Props) => {
  return (
    <button onClick={() => {onClick()}} className={'w-10 h-14 rounded-full shadow-sm bg-white-500 items-center justify-center flex'}>
      {children || displayText}
    </button>
  );
}