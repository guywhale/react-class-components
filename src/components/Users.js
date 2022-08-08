import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

// const DUMMY_USERS = [
// 	{ id: 'u1', name: 'Max' },
// 	{ id: 'u2', name: 'Manuel' },
// 	{ id: 'u3', name: 'Julie' },
// ];

class Users extends Component {
	/**
	 * State in class components:
	 * - Called in constructor.
	 * - Must be an object.
	 * - this property must be called 'state'.
	 * - Must group all states in one object.
	 */
	constructor() {
		// Must call super() to initiate constructor class.
		super();

		this.state = {
			showUsers: true,
		};
	}

	toggleUsersHandler() {
		// this.state.showUsers = false // NOT HOW YOU DO IT!

		/**
		 * Call specical method called setState() which always takes object.
		 * IMPORTANT: React MERGES (not overrides) state object in constructor.
		 */
		this.setState((curState) => {
			return { showUsers: !curState.showUsers };
		});
	}

	render() {
		const usersList = (
			<ul>
				{this.props.users.map((user) => (
					<User key={user.id} name={user.name} />
				))}
			</ul>
		);

		return (
			<div className={classes.users}>
				<button onClick={this.toggleUsersHandler.bind(this)}>
					{this.state.showUsers ? 'Hide' : 'Show'} Users
				</button>
				{this.state.showUsers && usersList}
			</div>
		);
	}
}

/**
 * Function component equivalent of class component above
 */

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
