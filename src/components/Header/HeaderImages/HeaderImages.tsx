import classes from './HeaderImage.module.css';
import Carousel from 'react-bootstrap/Carousel';

const HeaderImages = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img src="images/header/header-1.png" className="d-block w-100" alt="" />
			</Carousel.Item>
			<Carousel.Item>
				<img src="images/header/header-2.png" className="d-block w-100" alt="" />
			</Carousel.Item>
			<Carousel.Item>
				<img src="images/header/header-3.png" className="d-block w-100" alt="" />
			</Carousel.Item>
		</Carousel>
	)
}

export default HeaderImages;