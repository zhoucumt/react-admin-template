import loadable from 'react-loadable';
import Loading from '../../components/Loading';

export const About = loadable({
    loader: () => import('./index'),
    loading: Loading
});

const routes = [
    {
        path: '/about',
        component: About
    }
];

export default routes;
