import { Button, IconButton } from "@mui/material";
import { FC, ReactNode, memo } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import LoadingButton from '@mui/lab/LoadingButton';

type Props = {
	children: ReactNode;
	disabled?: boolean;
	loading?: boolean;
	onClick: () => void;
}

export const PrimaryButton : FC<Props> = memo((props) => {
	const { children, disabled = false, loading = false, onClick } = props

	return (
		<LoadingButton type="submit" variant="contained" fullWidth sx={{ bgcolor: 'teal' }} onClick={onClick} disabled={disabled} loading={loading} >
			{children}
		</LoadingButton>
	)
})