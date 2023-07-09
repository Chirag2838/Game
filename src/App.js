import { BrowserRouter, Route, Routes } from "react-router-dom";
import MatchList from "./components/matchList";
import MatchDetails from "./components/matchDetail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={MatchList}/>
                <Route path="/detail" Component={MatchDetails} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;