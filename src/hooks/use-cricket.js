import { useContext } from "react";
import CricketContext from "../context/cricketContext";

function useCricket() {
    return useContext(CricketContext);
}

export default useCricket;