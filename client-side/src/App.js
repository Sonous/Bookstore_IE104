import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import pages from "./routes";
import BlogPage from './pages/BlogPage/BlogPage';
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

                    <Route path="/blog/events" element={<BlogPageEvents />} />
                    <Route path="/blog/news" element={<BlogPageNews />} />
                    <Route path="/blog" element={<BlogPage />} />
                </Routes> {/* Thêm thẻ đóng Routes */}
            </Router>
        </div>
    );
}

export default App;
