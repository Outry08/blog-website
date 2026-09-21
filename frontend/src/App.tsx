import React from "react";
import { NavBar, NavItem } from "./styles/navbar";

export const App: React.FC = () => {
	return (
		<>
			<NavBar>
				<NavItem>Topics</NavItem>
				<NavItem>Articles</NavItem>
				<NavItem>Create</NavItem>
				<NavItem style={{float: "right"}}>Profile</NavItem>
			</NavBar>
		</>
	);
};

export default App;
