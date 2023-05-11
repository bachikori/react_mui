import { FC, memo, useCallback, useEffect, useState } from "react"
import { UserCard } from "../organizms/layout/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { Box, CircularProgress, Grid, Modal, Typography } from "@mui/material";
import { UserDetailModal } from "../organizms/layout/user/UserDetailModal";
import { UseSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: FC = memo(() => {
	const [open, setOpen] = useState(false);
	const { getUsers, users, loading } = useAllUsers();
	const { onSelectUser, selectedUser } = UseSelectUser();
	const { loginUser } = useLoginUser();
	console.log(loginUser);

	useEffect(() => getUsers, [])

	const handleOpen = useCallback((id: number) => {
		setOpen(true);
		onSelectUser({ id, users })
	}, [users])

  const handleClose = useCallback(() => setOpen(false), []);


	return (
		<>
		{loading ? (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
			<CircularProgress />
		</Box>
		) : (
			<Grid container sx={{ margin: "auto", display: "flex" }}>
			{users.map((user) => (
				<Grid item key={user.id}>
					<UserCard id={user.id} imageUrl="https://source.unsplash.com/random" userName={user.username} fullName={user.name} onClick={handleOpen} />
				</Grid>
			))}
			</Grid>
		)}
		<UserDetailModal user={selectedUser} open={open} onClick={handleClose} />
    </>
	)
});