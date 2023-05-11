import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import { ChangeEvent, FC, memo, useState } from "react"
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: FC = memo(() => {
	const {login, loading} = useAuth();
	const [userId, setUserId] = useState('')

	const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)

	const onClickLogin = () => login(userId);

	return (
		<Grid sx={{alignItems: 'center'}}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          height: "30vh",
          width: "60%",
          m: "20px auto",
					alignItems: "center"
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography variant={"h5"} sx={{ m: "30px" }}>
            ユーザー管理アプリ
          </Typography>
        </Grid>
        <TextField label="Username" variant="standard" fullWidth required value={userId} onChange={onChangeUserId} />
        <Box mt={3}>
          <PrimaryButton onClick={onClickLogin} disabled={userId === ""} loading={loading}>ログイン</PrimaryButton>
        </Box>
      </Paper>
    </Grid>
	)
});