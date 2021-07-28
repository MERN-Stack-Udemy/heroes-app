import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRouter = () => {

    const {user} = useContext(AuthContext)
    console.log(user)

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    <PrivateRoutes 
                        path="/" 
                        component={ DashboardRoutes } 
                        isAuthenticated={user.logged}
                    />
                </Switch>
            </div>
        </Router>
    )
}
