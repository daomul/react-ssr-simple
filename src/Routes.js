import React from 'react'
import App from './App'
import Home from './containers/Home'
import Login from './containers/Login'
import NotFound from "./containers/NotFound";

export default [{
    path: '/',
    component: App,
    key: 'app',
    routes: [{
        path: '/',
        component: Home,
        loadData: Home.loadData,
        exact: true,
        key: 'home'
    },
    {
        path: '/login', 
        component: Login, 
        exact: true, 
        key: 'login'
    },{
        component: NotFound
    }]
}]
