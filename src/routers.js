import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router'
import Loadable from 'react-loadable'

const AsyncComponent = (component) => {
    return Loadable({
        loader: component,
        loading: () => <div>loading</div>
    })
}

const routes = [
    { path: '/use-state', component: AsyncComponent(() => import('./use-state')) },
    { path: '/use-context', component: AsyncComponent(() => import('./use-context')) },
    { path: '/use-effect', component: AsyncComponent(() => import('./use-effect')) },
    { path: '/use-reducer', component: AsyncComponent(() => import('./use-reducer')) },
    { path: '/use-ref', component: AsyncComponent(() => import('./use-ref')) },
    { path: '/use-imperative-handle', component: AsyncComponent(() => import('./use-imperative-handle')) },
    { path: '/use-memo', component: AsyncComponent(() => import('./use-memo')) },
    { path: '/use-callback', component: AsyncComponent(() => import('./use-callback')) },
    { path: '/use-layout-effect', component: AsyncComponent(() => import('./use-layout-effect')) },
    { path: '/use-debug-value', component: AsyncComponent(() => import('./use-debug-value')) }
]

export default () => {
    const appHistory = createBrowserHistory({})

    return (
        <Router history={appHistory}>
            {routes.map(r => (
                <Route
                    key={r.path}
                    path={r.path}
                    component={r.component}
                    exact={true}
                ></Route>
            ))}
        </Router>
    )
}
