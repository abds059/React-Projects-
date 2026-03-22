import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/dashboard">Dashboard</Link> | 
                <Link to="/login">Login</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route 
                    path="/dashboard" 
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Dashboard />
                        </ProtectedRoute>
                    } 
                />

                <Route 
                    path="/login" 
                    element={<Login setIsLoggedIn={setIsLoggedIn} />} 
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;