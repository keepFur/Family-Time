import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <h2>Home</h2>
    },
    {
        path: '/bubblegum',
        sidebar: () => <div>bubblegum!</div>,
        main: () => <h2>Bubblegum</h2>
    },
    {
        path: '/shoelaces',
        sidebar: () => <div>shoelaces!</div>,
        main: () => <h2>Shoelaces</h2>
    }
];

const SidebarExample = () => (
    <Router>
        <div style={{ display: 'flex' }}>
            <div style={{
                padding: '10px',
                with: '40%',
                background: '#f0f0f0'
            }}>
                <ul style={{
                    listStyle: 'none',
                    padding: 0
                }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/bubblegum">Bubblegum</Link></li>
                    <li><Link to="/shoelaces">Shoeleaces</Link></li>
                </ul>
                {
                    routes.map((route, index) => {
                        return (<Route path={route.path} key={index} exact={route.exact} component={route.sidebar} />)
                    })
                }
            </div>

            <div style={{ flex: 1, padding: '10px' }}>
                {
                    routes.map((route, index) => {
                        return (<Route path={route.path} key={index} exact={route.exact} component={route.main} />)
                    })
                }
            </div>
        </div>
    </Router>
);

export default SidebarExample;