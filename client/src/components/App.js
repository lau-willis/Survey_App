import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions'
import Header from './Header';
import Landing from './Landing';

const SurveyNew = () => <h2> SurveyNew </h2>
const Dashboard = () => <h2> Dashboard </h2>

class App extends Component {
	componentDidMount(){
		this.props.fetchUser();
	}
	render(){
		return (
		<div className="container">
			<Router>
				<div>
					<Header />
					<Route exact path='/' component={Landing}/>
					<Route path='/surveys' component={SurveyNew}/>
					<Route path='/dashboard' component={Dashboard}/>
				</div>
			</Router>
		</div>
		)
	}
}

export default connect(null, actions)(App);