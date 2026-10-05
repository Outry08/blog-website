import Footer from "./components/navigation/Footer";
import NavBar from "./components/navigation/Navbar";
import { Outlet } from "react-router";

const App: React.FC = () => {
	return (<>
		<NavBar />
		<div style={{ backgroundColor: "#FFFFFF" }}>
			<Outlet />
		</div>
		<Footer />
	</>);
};

export default App;
