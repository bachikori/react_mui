import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		background: {
			default: grey[300],
		},
		text: {
			primary: grey[700]
		},
	},
	// breakpoints: {
	// 	values: {
	// 		xs: 0,
	// 		md: 768
	// 	}
	// }
})
export default theme;