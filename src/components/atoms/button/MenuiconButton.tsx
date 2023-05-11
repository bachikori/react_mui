import { IconButton } from "@mui/material";
import { FC, memo } from "react";
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
	handleDrawerOpen: () => void;
}

export const MenuIconButton : FC<Props> = memo((props) => {
	const { handleDrawerOpen } = props

	return (
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2, marginLeft: "auto", display: {xs: "block", md: "none"} }}
			onClick={handleDrawerOpen}
			>
			<MenuIcon />
		</IconButton>
	)
})