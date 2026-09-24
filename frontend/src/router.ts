import App from "./App";
import HomePage from "./pages/Home";
import ArticlesPage from "./pages/Articles";
import TopicsPage from "./pages/Topics";
import CreatePage from "./pages/Create";
import AboutPage from "./pages/About";
import ProfilePage from "./pages/Profile";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
		children: [
			{
				path: "/",
				Component: HomePage,
			},
			{
				path: "/topics",
				Component: TopicsPage,
			},
			{
				path: "/articles",
				Component: ArticlesPage,
			},
			{
				path: "/create",
				Component: CreatePage,
			},
			{
				path: "/about",
				Component: AboutPage,
			},
			{
				path: "/profile",
				Component: ProfilePage,
			},
		],
	},
]);

export default router;
