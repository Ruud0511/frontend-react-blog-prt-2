import './App.css'
import logo from './assets/logo-white.png'
import {Routes, Route, NavLink} from "react-router-dom";
import Home from './pages/home/Home.jsx'
import NewPost from "./pages/newPost/NewPost.jsx";
import Overview from "./pages/overview/Overview.jsx";
import Navigation from "./navigation/Navigation.jsx";

function App() {
    return (
        <div className="page-container">
            <Navigation>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/newpost">Nieuw bericht</NavLink></li>
                </ul>
            </Navigation>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/newpost" element={<NewPost/>}/>
                <Route path="/overview" element={<Overview/>}/>
                <Route path="/overview/:postId" element={<Overview/>}/>
            </Routes>
        </div>
    )
}

export default App
