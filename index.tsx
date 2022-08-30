import {createRoot} from "react-dom/client";
import {ThemeProvider} from "@mui/material";
import App from "./src/app";
import {Theme} from "./src/util/config/mui";
import { Provider } from 'react-redux'
import store from "./src/redux/store";
import { BrowserRouter } from 'react-router-dom';
import "./public/assets/styles/index.css";


const container = document.getElementById("music-app");
const root = createRoot(container);


const ComponentsTree = ()=> (
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </BrowserRouter>
)
root.render(<ComponentsTree />);
