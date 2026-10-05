import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import { Outlet } from "react-router";

const App: React.FC = () => {
	return (
		<>
			<NavBar />
			<div style={{ backgroundColor: "#FFFFFF" }}>
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default App;
