import { ImArrowDownLeft2, ImArrowUpRight2 } from "react-icons/im";
import { Card } from "../../Card/Card";

type PropType = {
  title: string;
  amount: string;
  rate: string;
  className?: string;
  isProfit: boolean;
};

export const FinancialOverview = ({
  className,
  amount,
  rate,
  title,
  isProfit,
}: PropType) => {
  return (
    <Card className="w-[20%] mt-4">
      <div>
        <h2 className="text-gray-500 font-bold text-sm">{title}</h2>
        <h3 className="font-bold text-xl">{amount}</h3>
        <div className="flex">
          <span className="text-sm text-gray-500 ">from last week</span>
          <div className={`flex text-${isProfit ? "green" : "red"}-600`}>
            <div className="text-xs ml-2 mr-1 mt-1">
              {isProfit ? <ImArrowUpRight2 /> : <ImArrowDownLeft2 />}
            </div>
            <span className={`text-sm ${className}`}>{rate}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
