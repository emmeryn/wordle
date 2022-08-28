type Props = { letter: string };

export const Cell = ({ letter }: Props) => {
  return (
    <div className={'w-14 h-14 rounded-lg shadow-lg bg-white-500 items-center justify-center flex'}>
      {letter.toUpperCase()}
    </div>
  )
}