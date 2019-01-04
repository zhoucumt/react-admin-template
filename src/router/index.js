import About from '../views/About/about.js';
import Index from '../App.js';

// const routesConfig = (app) => ([
//     {
//         path: '/about',
//         title: '关于',
//         // indexRoute: '/sign/login',
//         component: About
//     },
//     {
//         path: '/',
//         title: '首页',
//         component: Index
//         // indexRoute: '/dashboard'
//     }
// ]);

// export default app => createRoutes(app, routesConfig);

const route = [
    {
        path: '/about',
        title: '关于',
        component: About
    },
    {
        path: '/',
        title: '首页',
        component: Index
    }
];

export default route;