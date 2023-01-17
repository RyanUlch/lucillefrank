import classes from './HeaderImage.module.css';

const HeaderImages = () => {
	return (
		<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			<ol className="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src="images/header/header-1.png" className="d-block w-100" alt="" />
				</div>
				<div className="carousel-item">
					<img src="images/header/header-2.png" className="d-block w-100" alt="" />
				</div>
				<div className="carousel-item">
					<img src="images/header/header-3.png" className="d-block w-100" alt="" />
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</button>
		</div>
	)
}

export default HeaderImages;