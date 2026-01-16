import "./App.scss";
import "./style/global.scss";
import GeneralLayout from "./layouts/GeneralLayout.jsx";
import { GlobalContextProvider } from "./contexts/globalContext.jsx";
import { BrowserRouter } from "react-router";
import AppRouter from "./router/AppRouter.jsx";

function App() {
    return (
        <BrowserRouter>
            <GlobalContextProvider>
                <GeneralLayout>
                    <AppRouter />
                </GeneralLayout>
            </GlobalContextProvider>
        </BrowserRouter>
    );
}

export default App;
