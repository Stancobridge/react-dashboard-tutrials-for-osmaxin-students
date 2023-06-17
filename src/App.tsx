import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { queryClient } from "./base/queries/queryClient";
import "./index.css";

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Dashboard />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
