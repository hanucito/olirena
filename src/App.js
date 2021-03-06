import React, { Suspense } from 'react';
import './App.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import ErrorPage from './views/ErrorPage';
import routes from './routes';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const AppWrapper = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="App-content">
          <Suspense fallback={<LoadingScreen />}>
            <Switch>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  {...route}
                />
              ))}
              <Route
                component={() => <ErrorPage code={404} />}
              />
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  )
}

export default AppWrapper;
