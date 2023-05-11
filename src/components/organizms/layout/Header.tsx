import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import { FC, memo, useCallback, useState } from "react"

import { MenuIconButton } from "../../atoms/button/MenuiconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useNavigate } from "react-router-dom";

export const Header: FC = memo(() => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();

	const onClickHome = useCallback(() => navigate("/home"),[]);
	const onClickUserManagement = useCallback(() => navigate("/home/user_management"),[]);
	const onClickSetting = useCallback(() => navigate("/home/setting"),[]);

	const handleDrawerOpen = () => {
		setOpen(true);
	}
	const handleDrawerClose = () => {
		setOpen(false);
	}
	return (
		<>
		<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ color: "#e0f2f1", backgroundColor: "teal" }} >
        <Toolbar>
          <Typography onClick={onClickHome} variant="h6" component="div" sx={{
						'&:hover': {
							cursor: 'pointer'
						}
					}}>
            ユーザー管理アプリ
          </Typography>
					<Box sx={{
						marginLeft: "8px",
						display: {xs: "none", md: "block"}
					}}>
						<Link onClick={onClickUserManagement} color="inherit" sx={{marginRight: "16px"}}>ユーザー一覧</Link>
						<Link onClick={onClickSetting} color="inherit">設定</Link>
					</Box>
					<MenuIconButton handleDrawerOpen={handleDrawerOpen} />
        </Toolbar>
      </AppBar>
    </Box>
		<MenuDrawer handleDrawerClose={handleDrawerClose} open={open} onClickHome={onClickHome} onClickSetting={onClickSetting} onClickUserManagement={onClickUserManagement} />
		</>
	)
});