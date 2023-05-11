import { Avatar, Card, Grid, Stack, Typography } from '@mui/material';
import { FC, memo } from 'react';

type Props = {
	id: number
	imageUrl: string;
	userName: string;
	fullName: string;
	onClick: (id: number) => void;
}

export const UserCard : FC<Props> = memo((props) => {
	const { imageUrl, userName, fullName, onClick, id } = props
	return (
		<Card sx={{
			width: "260px",
			height: "260px",
			background: "white",
			m: 1,
			borderRadius: "10px",
			boxShadow: 2
			}}
			onClick={() => onClick(id)}
			>
				<Stack justifyContent={"center"} alignItems={"center"}>
					<Avatar src={imageUrl} sx={{ width: 160, height: 160 }} alt={userName} />
					<Typography fontSize={30} fontWeight={"bold"}>{userName}</Typography>
					<Typography>{fullName}</Typography>
				</Stack>
		</Card>
	)
})