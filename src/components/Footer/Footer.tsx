import classes from './Footer.module.css';
import BabyFooter from './BabyFooter/BabyFooter';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			Footer
			<BabyFooter />
		</footer>
	)
}

export default Footer;