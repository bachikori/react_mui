import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/setting";

export const homeRoutes = [
	{
		path: "/home",
		children: <Home />
	},
	{
		path: "user_management",
		children: <UserManagement />
	},
	{
		path: "setting",
		children: <Setting />
	},
	{
		path: "*",
		children: <Page404 />
	},
]