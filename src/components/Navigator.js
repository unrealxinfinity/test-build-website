import '../style/App.css';
import { BrowserRouter, Routes, Route} from "react-router";
import MainPage from './MainPage.js';
function Navigator() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Navigator;
