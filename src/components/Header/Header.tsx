import classes from './Header.module.css';
import HeaderImages from "./HeaderImages/HeaderImages";
import Navigation from "./Navigation/Navigation";
import HeaderText from "./HeaderText/HeaderText";

const Header = () => {
	return (
		<header className={classes.header}>
			<div id='topBar'>
				<HeaderText />
				{/* <Navigation /> */}
			</div>
			<HeaderImages />
		</header>
	)
}

export default Header;