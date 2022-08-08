import { Component } from 'react';

/**
 * Error boundaries MUST be classe based if used.
 */

class ErrorBoundary extends Component {
	constructor() {
		super();

		/**
		 * State can be used to show error messages
		 */
		this.state = {
			hasError: false,
		};
	}

	/**
	 * Wraps around component.
	 * Is triggered when there is an error in child components.
	 */
	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <p>Something went wrong!</p>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
