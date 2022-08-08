import { Component } from 'react';
import classes from './User.module.css';

/**
 * Demo of class-based component equivalent to functional component
 * listed below:
 * const User = (props) => {
 *  return <li className={classes.user}>{props.name}</li>;
 * }
 *
 */

class User extends Component {
	render() {
		return <li className={classes.user}>{this.props.name}</li>;
	}
}

export default User;
