import {DashboardLayout} from "../../components/Layouts/DashboardLayout";
import { HelloWithAddPayment } from "./DashboardContent";
import { FinancialOverview } from "./DashboardContent";
import { MovieCard } from "./Movies";
import { QuickTransaction } from "./Transaction/QuickTransaction";

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <HelloWithAddPayment />

      <section className="flex items-start mt-8">
        <div className="flex space-x-8 mr-8 w-[60%]">
          <FinancialOverview
            amount="$974,99"
            rate="7.85%"
            title="Total Income"
            isProfit={true}
          />
          <FinancialOverview
            amount="$425,30"
            rate="22.30%"
            title="Total Expense"
            isProfit={false}
          />

          <FinancialOverview
            amount="$549,61"
            rate="9.50%"
            title="Total Savings"
            isProfit={true}
          />
        </div>
        <div className="w-[45%]">
          <MovieCard />
          <QuickTransaction/>
        </div>
      </section>
    </DashboardLayout>
  );
};
