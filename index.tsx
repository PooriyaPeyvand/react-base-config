import {createRoot} from "react-dom/client";
import App from "./src/app";
import "./public/assets/styles/index.css"

const container = document.getElementById("music-app");
const root = createRoot(container);
root.render(<App />);
