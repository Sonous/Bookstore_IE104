import { routes } from "~/config";
import CollectionsPage from "~/pages/CollectionsPage";
import HomePage from "~/pages/HomePage/HomePage";

const pages = [
    {path: routes.home, Component: HomePage},
    {path: routes.collections, Component: CollectionsPage}
]

export default pages