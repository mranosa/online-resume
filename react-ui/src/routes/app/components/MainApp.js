import React from 'react';
import { Route } from 'react-router-dom';
import loadable from 'react-loadable';
import Header from '../../../components/Header'
import Sidenav from '../../../components/Sidenav';
import Footer from '../../../components/Footer';

import Dashboard from '../routes/dashboard/'

function LoadingComponent() {
  return <div></div>;
}


class MainApp extends React.Component {

  render() {
    const { match, location } = this.props;

    return (
      <div className="main-app-container">
        <Sidenav />

        <section id="page-container" className="app-page-container">
          <Header />

          <div className="app-content-wrapper">
            <div className="app-content">
              <div className="full-height">
                  <Route path={`${match.url}/dashboard`} component={Dashboard} />
              </div>
            </div>

            <Footer />
          </div>
        </section>
      </div>
    );
  }
}

export default MainApp;
