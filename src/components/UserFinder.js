import { Fragment, Component } from 'react';
import UsersContext from '../store/users-context';
import classes from './UserFinder.module.css';
import Users from './Users';

class UserFinder extends Component {
	// How to set the context. Only per component allowed in classes.
	static contextType = UsersContext;

	constructor() {
		super();

		this.state = {
			filteredUsers: [],
			searchTerm: '',
		};
	}

	/**
	 * componentDidMount runs on first render of component.
	 * Class component equivalnent od useEffect() with empty dependency
	 * array.
	 */
	componentDidMount() {
		this.setState({ filteredUsers: this.context.users });
	}

	/**
	 * Equivalent of useEffect() hook in class based components.
	 * Takes two parameters: previous props, previous state
	 */
	componentDidUpdate(prevProps, prevState) {
		/**
		 * Only run if state has changed to prevent infinite loop.
		 */
		if (prevState.searchTerm !== this.state.searchTerm) {
			this.setState({
				filteredUsers: DUMMY_USERS.filter((user) => {
					return user.name.includes(this.state.searchTerm);
				}),
			});
		}
	}

	searchChangeHandler(event) {
		this.setState({ searchTerm: event.target.value });
	}

	render() {
		return (
			<Fragment>
				<div className={classes.finder}>
					<input type="search" onChange={this.searchChangeHandler.bind(this)} />
				</div>
				<Users users={this.state.filteredUsers} />
			</Fragment>
		);
	}
}

/**
 * How this component would look if it was a functional component:
 */
// const UserFinder = () => {
// 	const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
// 	const [searchTerm, setSearchTerm] = useState('');

// 	useEffect(() => {
// 		setFilteredUsers(
// 			DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
// 		);
// 	}, [searchTerm]);

// 	const searchChangeHandler = (event) => {
// 		setSearchTerm(event.target.value);
// 	};

// 	return (
// 		<Fragment>
// 			<div className={classes.finder}>
// 				<input type="search" onChange={searchChangeHandler} />
// 			</div>
// 			<Users users={filteredUsers} />
// 		</Fragment>
// 	);
// };

export default UserFinder;
