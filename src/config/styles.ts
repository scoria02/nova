import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const classes = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			'& > *': {
				margin: theme.spacing(1),
				width: '25ch',
			},
		},
	});
})();
