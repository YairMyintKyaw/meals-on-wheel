import { cn } from "../../utils/utils";

export interface NumberData {
  title: string,
  number: string
}
type Props = {
  data: NumberData[],
  className?: string
}

const NumberList: React.FC<Props> = ({ data, className }) => {
  return (
    <ul className={cn("flex flex-col items-center gap-10 md:gap-5 md:flex-row justify-center mt-[72px] pb-[80px] relative after:contents-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:w-[65%] after:h-[1px] after:bg-black ", className)}>
      {data.map((number, index) => (
        <section key={index} className="flex flex-col-reverse items-center w-fit">
          <h2 className="leading-[28px] mt-[20px] lg:mt-[40px] text-lg font-medium">{number.title} </h2>
          <p className="text-9xl font-semibold leading-[128px]">{number.number}</p>
        </section>
      ))}
    </ul>
  );
};

export default NumberList;
