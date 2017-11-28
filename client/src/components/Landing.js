import React from 'react';
import {Link} from 'react-router-dom';
import Dashboard from './Dashboard';
const Landing = () => {
	return (
		<div style={{textAlign: 'center'}}>
		<Link to='./surveys'>Click here to add new surveys</Link>
		</div>
		)
}

export default Landing;