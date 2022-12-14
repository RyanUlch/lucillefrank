import classes from './ImageSection.module.css';

const ImageSection = () => {
	return (
		<div className={classes.section}>
			<article className={classes.imageArticle}>
				<img className={classes.image} src='' alt='' />
			</article>
			<article className={classes.imageArticle}>
				<img className={classes.image} src='' alt='' />
			</article>
			<article className={classes.imageArticle}>
				<img className={classes.image} src='' alt='' />
			</article>
		</div>
	)
}

export default ImageSection;