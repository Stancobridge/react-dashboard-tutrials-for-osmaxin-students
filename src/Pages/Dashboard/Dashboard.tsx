import { Chart } from "../Dashboard/Chart/Chart";
import {DashboardLayout} from "../../components/Layouts/DashboardLayout";
import { HelloWithAddPayment } from "./DashboardContent/HelloWithAddPayment";
import { FinancialOverview } from "./DashboardContent/FinancialOverview";
import { MovieCard } from "./Movies/MoviesCard";
import { QuickTransaction } from "./Transaction/QuickTransaction";
import { Slider } from "../../components/DashboardSlider/Slider";

export const Dashboard = () => {
	return (
		<DashboardLayout>
			<HelloWithAddPayment />

			<section className="flex items-start mt-8">
				<div className="mr-8 w-[60%] ">
					<div className="flex space-x-8 ">
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
          <Slider/>
					<Chart />
				</div>

				<div className="w-[45%]">
					<MovieCard />
					<QuickTransaction />
				</div>
			</section>
		</DashboardLayout>
	);
};
