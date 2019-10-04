import React from 'react';
import { Route } from 'react-router-dom';
import loadable from 'react-loadable';
import Header from '../../../components/Header'
import Sidenav from '../../../components/Sidenav';
import Footer from '../../../components/Footer';

import Dashboard from '../routes/dashboard/'
import Career from '../routes/career/'
import BattleStation from '../routes/battlestation/'
import Books from '../routes/books/'
import Testimonials from '../routes/testimonials/'

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
              <div className="h-100">
                  <Route path={`${match.url}/dashboard`} component={Dashboard} />
                  <Route path={`${match.url}/career`} component={Career} />
                  <Route path={`${match.url}/workstations`} component={BattleStation} />
                  <Route path={`${match.url}/books`} component={Books} />
                  <Route path={`${match.url}/recommendations`} component={Testimonials} />
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
