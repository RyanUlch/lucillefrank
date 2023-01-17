import classes from './DisplaySection.module.css';
import { ReactNode } from 'react';

const DisplaySection = (props: {children: ReactNode}) => {
	return (
		<section className='container-xl'>
			{props.children}
		</section>
	)
}

export default DisplaySection;