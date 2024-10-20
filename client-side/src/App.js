import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import pages from './routes';

function App() {
    return (
        <div className="App font-body">
            <Router>
                <Routes>
                    {pages.map((Page, index) => (
                        <Route key={index} path={Page.path} element={<Page.Component />} />
                    ))}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
