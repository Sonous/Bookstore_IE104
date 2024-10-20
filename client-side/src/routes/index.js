import routes from '~/configs/routes.config';
import BlogPage from '~/pages/BlogPage/BlogPage';
import BlogPageEvents from '~/pages/BlogPage/BlogPageEvents';
import BlogPageNews from '~/pages/BlogPage/BlogPageNews';
import BlogPageActivities from '~/pages/BlogPage/BlogPageActivities';
import CollectionsPage from '~/pages/CollectionsPage';
import HomePage from '~/pages/HomePage/HomePage';

const pages = [
    { path: routes.home, Component: HomePage },
    { path: routes.collections, Component: CollectionsPage },
    { path: routes.blog, Component: BlogPage },
    { path: routes.blogEvent, Component: BlogPageEvents },
    { path: routes.blogNews, Component: BlogPageNews },
    { path: routes.blogActivities, Component: BlogPageActivities },
];

export default pages;
