import './App.css';
import Home from './component/Home';
import Topics from './component/Topics';
import Contact from './component/Contact';
import { Routes, Route } from 'react-router-dom';
function App() {
    return (
        <div className="App">
            <h1>Hello React Router DOM</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/topics">Topics</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/topics" element={<Topics />}/>
                <Route path="/Contact" element={<Contact />}/>
                <Route path="/*" element={'Not Found'} />
            </Routes>
        </div>
    );
}

export default App;
