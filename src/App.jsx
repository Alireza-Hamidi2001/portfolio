import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Projects from "./pages/projects/Projects";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<AppLayout />}
                >
                    <Route
                        index
                        element={<Home />}
                    />
                    <Route
                        path="projects"
                        element={<Projects />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
