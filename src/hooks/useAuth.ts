import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from "react"
import axios from "axios"
import { User } from "../types/api/user"
import { useLoginUser } from './useLoginUser';

export const useAuth = () => {
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false)
	const { setLoginUser} = useLoginUser();

	const login = useCallback((id: string) => {
		setLoading(true);

		axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
			if (res.data) {
				const isAdmin = res.data.id === 10 ? true : false;
				setLoginUser({...res.data, isAdmin});
				navigate('/home');
			} else {
				alert("ユーザーが見つかりません")
			}
		}).catch(() => alert("ログインできません")).finally(() => setLoading(false));
	}, [navigate])
	return { login, loading }
}