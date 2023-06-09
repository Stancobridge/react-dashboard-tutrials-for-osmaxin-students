import {
  DashboardLayout,
  FinancialOverview,
  HelloWithAddPayment,
} from "../../components";

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <HelloWithAddPayment />

      <section className="flex space-x-3">
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
      </section>
    </DashboardLayout>
  );
};
