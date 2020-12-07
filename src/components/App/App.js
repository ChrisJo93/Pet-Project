import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.css';

import Nav from '../Nav/Nav';

// Custom Routes

import FoodPage from '../../pages/FoodPage/FoodPage';
import Footer from '../Footer/Footer';
import GroomerPage from '../../pages/GroomerPages/GroomerPage';
import GroomerDetailPage from '../../pages/GroomerPages/GroomerDetailPage';
import LandingPage from '../../pages/LandingPage/LandingPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MedicationPage from '../../pages/MedicationPages/MedicationPage';
import MedicationDetailPage from '../../pages/MedicationPages/MedicationDetailPage';
import PetDetailsPage from '../../pages/PetDetailsPage/PetDetailsPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import UserPage from '../../pages/UserPage/UserPage';
import VetPage from '../../pages/VetPages/VetPage';
import VetDetailPage from '../../pages/VetPages/VetDetailPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
              component={UserPage}
            />

            {/* ------Custom Routes------*/}
            <ProtectedRoute exact path="/food/:id" component={FoodPage} />
            <ProtectedRoute exact path="/groomer" component={GroomerPage} />
            <ProtectedRoute
              exact
              path="/groomer/details/:id"
              component={GroomerDetailPage}
            />
            <ProtectedRoute exact path="/vet" component={VetPage} />
            <ProtectedRoute
              exact
              path="/vet/details/:id"
              component={VetDetailPage}
            />
            <ProtectedRoute
              exact
              path="/details/:id"
              component={PetDetailsPage}
            />
            <ProtectedRoute
              exact
              path="/medication"
              component={MedicationPage}
            />
            <ProtectedRoute
              exact
              path="/medication/details/:id"
              component={MedicationDetailPage}
            />

            {/* ------Custom Routes------ */}

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/login"
              component={LoginPage}
              authRedirect="/user"
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              component={RegisterPage}
              authRedirect="/user"
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              component={LandingPage} //CHANGE TO PRIVATE
              authRedirect="/user"
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
