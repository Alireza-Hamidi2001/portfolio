import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Projects from "./pages/projects/Projects";
import Home from "./pages/Home";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
    return (
        <DarkModeProvider>
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
        </DarkModeProvider>
    );
}

export default App;
