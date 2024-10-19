import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import pages from "./routes";
import BlogPage from './pages/BlogPage/BlogPage';
import BlogPageActivities from './pages/BlogPage/BlogPageActivities';
import BlogPageEvents from './pages/BlogPage/BlogPageEvents';
import BlogPageNews from './pages/BlogPage/BlogPageNews';

function App() {
    return (
        <div className="App font-body">
            <Router>
                <Routes>
                    {pages.map((Page, index) => (
                        <Route key={index} path={Page.path} element={<Page.Component />} />
                    ))}

                    <Route path="/blog/activities/:id" element={<BlogPageActivities />} />
                    <Route path="/blog/events/:id" element={<BlogPageEvents />} />
                    <Route path="/blog/news/:id" element={<BlogPageNews />} />
                    <Route path="/blog" element={<BlogPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
