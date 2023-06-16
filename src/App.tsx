import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./base";
import "./index.css";
import { Dashboard } from "./Pages/Dashboard/Dashboard";

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Dashboard />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
