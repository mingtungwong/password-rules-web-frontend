import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

import  Home  from './Home.jsx';
import NavbarContainer from './NavbarContainer.jsx';
import SearchResultsContainer from './SearchResultsContainer.jsx';
import SiteProfileContainer from './SiteProfileContainer.jsx';
import SiteCreationPageContainer from './SiteCreationPageContainer.jsx';
import EditSitePageContainer from './EditSitePageContainer.jsx';
import FAQ from './FAQ.jsx';
import store from '../reducers/store'

class App extends React.Component {

    componentDidMount() {
        injectTapEventPlugin();
    }

    render() {
        return (
            <div>
                <Provider store={ store }>
                    <HashRouter>
                        <div>
                            <Route component={ NavbarContainer } />
                            <Switch>
                                <Route path="/home" component={ Home } />
                                <Route path="/results/:site" component={ SearchResultsContainer }/>
                                <Route path="/site/:siteName" component={ SiteProfileContainer } />
                                <Route path="/addsite/:siteName" component={ SiteCreationPageContainer } />
                                <Route path="/addsite/" component={ SiteCreationPageContainer } />
                                <Route path="/edit" component={ EditSitePageContainer } />
                                <Route path="/faq" component={ FAQ } />
                                <Redirect from="/" to="/home" />
                            </Switch>
                        </div>
                    </HashRouter>
                </Provider>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('start'));

export default App;
