import { Avatar, Box, Card, Grid, Modal, Stack, Typography } from '@mui/material';
import { FC, memo } from 'react';
import { User } from '../../../../types/api/user';

type Props = {
	user: User | null;
	open: boolean
	onClick: () => void;
}

export const UserDetailModal : FC<Props> = memo((props) => {
	const { user, open, onClick } = props
	return (
		<Modal
			open={open}
			onClose={onClick}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={{
				 position: 'absolute' as 'absolute',
				 top: '50%',
				 left: '50%',
				 transform: 'translate(-50%, -50%)',
				 width: 400,
				 bgcolor: 'background.paper',
				 border: '2px solid #000',
				 boxShadow: 24,
				 p: 4,
			}}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					ユーザー詳細
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					{user?.name}
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					{user?.username}
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					{user?.email}
				</Typography>
			</Box>
		</Modal>
	)
})