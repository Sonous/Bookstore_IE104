
import { routes } from '~/configs';
import BlogPage from '~/pages/BlogPage/BlogPage';
import EventDetail from '~/pages/BlogPage/BlogPageEvents';
import NewsDetail from '~/pages/BlogPage/BlogPageNews';
import CollectionsPage from '~/pages/CollectionsPage';
import HomePage from '~/pages/HomePage/HomePage';

const pages = [
    { path: routes.home, Component: HomePage },
    { path: routes.collections, Component: CollectionsPage },

    { path: routes.blog, Component: BlogPage },
    { path: routes.blogEvent, Component: EventDetail },
    { path: routes.blogNews, Component: NewsDetail },
];

export default pages;