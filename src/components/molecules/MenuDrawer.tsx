import { Backdrop, Box, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { FC, memo } from "react";


type Props = {
	handleDrawerClose: () => void;
	open: boolean;
	onClickHome: () => void;
	onClickUserManagement: () => void;
	onClickSetting: () => void;
}

export const MenuDrawer : FC<Props> = memo((props) => {
	const { handleDrawerClose, open, onClickHome, onClickSetting, onClickUserManagement } = props

	return (
		<>
		<Drawer
        sx={{
					width: '300px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: '300px'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
				onClose={handleDrawerClose}
				>
				<Box role="presentation" onClick={handleDrawerClose} sx={{ width: '100%' }} >
					<List>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemText onClick={onClickHome}>Top</ListItemText>
								<ListItemText onClick={onClickUserManagement}>ユーザー一覧</ListItemText>
								<ListItemText onClick={onClickSetting}>設定</ListItemText>
							</ListItemButton>
						</ListItem>
					</List>
				</Box>
				</Drawer>
				<Backdrop
					sx={{ color: '#fff', zIndex: 0}}
					open={open}
					onClick={handleDrawerClose}
					/>
					</>
	)
})