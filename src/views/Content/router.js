import loadable from 'react-loadable';
import Loading from '../../components/Loading';

// 主页
export const Home = loadable({
    loader: () => import('./Home'),
    loading: Loading
});

// 关于页面
export const About = loadable({
    loader: () => import('./About'),
    loading: Loading
});

// 话题页
export const Topics = loadable({
    loader: () => import('./Topics'),
    loading: Loading
});

// 文章页
export const Article = loadable({
    loader: () => import('./Article'),
    loading: Loading
});

// cavas学习页面
export const Canvas = loadable({
    loader: () => import('./Canvas'),
    loading: Loading
});

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about/article',
        component: Article
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/topics',
        component: Topics
    },
    {
        path: '/canvas',
        component: Canvas
    }
];

export default routes;
