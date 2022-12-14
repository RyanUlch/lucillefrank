import classes from './HeaderText.module.css';

const HeaderText = () => {
	return (
		<div className={classes.titleContainer}>
			<h1 className={classes.titleText}>Lucille Frank</h1>
			<h2 className={classes.subtitleText}>&nbsp;~&nbsp;Young Professional</h2>
		</div>
	);
}

export default HeaderText;