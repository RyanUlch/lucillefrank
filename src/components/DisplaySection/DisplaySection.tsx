import classes from './DisplaySection.module.css';

const DisplaySection = (props: {children: any}) => {
	return (
		<section className={classes.display}>
			{props.children}
		</section>
	)
}

export default DisplaySection;