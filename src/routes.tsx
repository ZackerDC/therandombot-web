import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Chamba from "./pages/Chamba";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<App />),
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "home",
                element: <Home />
            },
            {
                path: "chamba",
                element: <Chamba />
            }
        ]
    }
]);

export default router;