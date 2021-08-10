import React, { Fragment, FunctionComponent } from 'react';
import TextField from '@material-ui/core/TextField';
import { classes } from '../../config/styles';
import { login } from '../../interfaces/auth';

// styles

const Login: FunctionComponent = () => {
	const data: login = {
		password: 'aa',
		email: 'aa',
		DI: 'aa',
	};
	return (
		<Fragment>
			{data}
			<form className={classes.root} noValidate autoComplete='off'>
				<TextField id='standard-basic' label='Standard' />
				<TextField id='filled-basic' label='Filled' variant='filled' />
				<TextField id='outlined-basic' label='Outlined' variant='outlined' />
			</form>
		</Fragment>
	);
};
export default Login;

// login.propTypes = {
// 	name: PropTypes.string.isRequired,
// };
