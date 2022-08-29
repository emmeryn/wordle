type Props = {
  title: string;
  value: string;
}
export const StatCell = ({ title, value }: Props) => (
  <div className="m-1 w-1/4 justify-center items-center">
    <div className="text-xs">{title}</div>
    <div className="text-2xl font-medium">{value}</div>
  </div>
);
