import NavBar from "./components/navbar";
import { Outlet } from "react-router";

const App: React.FC = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};

export default App;
