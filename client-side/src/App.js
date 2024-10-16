import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import pages from "./routes";
import BlogPage from '~/pages/BlogPage'; // Trang chính cho blog
import BlogPageEvents from '~/pages/BlogPageEvents'; // Trang cho sự kiện
import BlogPageNews from '~/pages/BlogPageNews'; // Trang cho tin tức

function App() {
    return (
        <div className="App font-body">
            <Router>
                <Routes>
                    {pages.map((Page, index) => (
                        <Route key={index} path={Page.path} element={<Page.Component />} />
                    ))}
                    <Route path="/blog" element={<BlogPage />} /> {/* Route cho trang blog chính */}
                    <Route path="/blog/events" element={<BlogPageEvents />} /> {/* Route cho trang sự kiện */}
                    <Route path="/blog/news" element={<BlogPageNews />} /> {/* Route cho trang tin tức */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
