import classes from './Footer.module.css';
import BabyFooter from './BabyFooter/BabyFooter';

const Footer = () => {
	return (
		<footer className="text-center text-lg-start bg-light text-muted">
			<section className="p-1">
				<div className="container text-center text-md-start mt-5">
					<div className="row mt-3">
						<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">
							<i className="fas fa-gem me-3"></i>I'm Lucy Frank</h6>
							<p>Block text to write a small blurb with</p>
						</div>
						{/* Use these columns to create different sections for footer */}
						<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">
								Links to Things!
							</h6>
							<p>
								<a href="#!" className="text-reset">Link Here</a>
							</p>
							<p>
								<a href="#!" className="text-reset">Link Here</a>
							</p>
							<p>
								<a href="#!" className="text-reset">Link Here</a>
							</p>
							<p>
								<a href="#!" className="text-reset">Link Here</a>
							</p>
						</div>

						{/* Contact Section */}
						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Contact Me</h6>
							<p><i className="fas fa-home me-3"></i>Columbus, OH 43220, US</p>
							<p>
								<i className="fas fa-envelope me-3"></i>
								Email Here
							</p>
							<p><i className="fas fa-phone me-3"></i>Phone Number Here</p>
						</div>
					</div>
				</div>
			</section>
			<div className="text-center p-4" >
				© 2023 Copyright: Lucy Frank
			{/* <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
			</div>
		</footer>
	)
}

export default Footer;