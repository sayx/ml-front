import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import styles from './App.css'
import { logout } from '../actions/user'
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir, userIsAdminRedir,
         userIsAuthenticated, userIsNotAuthenticated } from '../auth'

import AdminComponent from './Admin'
import ProtectedComponent from './Protected'
import LoginComponent from './Login'
import HomeComponent from './Home'

// HOKS
const Home = userIsAuthenticatedRedir(HomeComponent)
const Login = userIsNotAuthenticatedRedir(LoginComponent)
const Protected = userIsAuthenticatedRedir(ProtectedComponent)
const Admin = userIsAuthenticatedRedir(userIsAdminRedir(AdminComponent))

const LoginLink = userIsNotAuthenticated(() => <NavLink activeClassName={styles.active} to="/login">Вход</NavLink>)
const LogoutLink = userIsAuthenticated(({ logout }) => <a href="#" onClick={() => logout()}>Выход</a>)

function App({ user, logout }) {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/protected" component={Protected}/>
          <Route path="/admin" component={Admin}/>
        </div>
      </Router>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const componentDidUpdate = state => (
  //console.log(localStorage)
  localStorage.state = JSON.stringify(state)
)

export default connect(mapStateToProps, { logout })(App)
