import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import FirstPage from './App';
import SecondPage from './Courses'

function Paths() {
    return (
        <div className='' >
            <BrowserRouter>
                <link to="/"  >FirstPage</link>
                <link to="/SecondPage" > SecondPage </link>
                <Routes>
                    <Route path="/" element={<FirstPage />} />
                    <Route path="/SecondPage" element={<SecondPage />} />
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default Paths;

