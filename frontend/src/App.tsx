import NavBar from "./components/Navbar";
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
