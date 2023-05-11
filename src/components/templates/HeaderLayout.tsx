import { FC, ReactNode, memo } from "react"

import { Header } from "../organizms/layout/Header";

type Props = {
	children: ReactNode
}

export const HeaderLayout: FC<Props> = memo((props) => {
	const { children } = props;
	return (
		<>
		<Header />
		{children}
		</>
	)
});