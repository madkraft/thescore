import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'preact-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

import Header from './header';
import Scores from '../routes/scores';
import Standings from '../routes/standings';
import Competition from '../routes/competition';
// import Home from 'async!./home';
// import Profile from 'async!./profile';
import reducer from '../reducers/index'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const store = createStore(
	reducer, composeEnhancers(applyMiddleware(thunk))
)

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Scores path="/" />
						<Standings path="/competitions" />
						<Competition path="/competitions/:competitionId" />
					</Router>
				</div>
			</Provider>
		);
	}
}
