import { User } from '../types/api/user';
import { useCallback, useState } from "react"


type Props = {
	id: number;
	users: Array<User>;
}

export const UseSelectUser = () => {
	const [selectedUser, setSelectedUser] = useState<User | null>(null);

	const onSelectUser = useCallback((props: Props) => {
		const { id, users } = props;
		const targetUser = users.find((user) => user.id === id);
		setSelectedUser(targetUser ?? null);
	}, [])
	return { onSelectUser, selectedUser }
}