import Button from "./button";
import useCricket from "../hooks/use-cricket";
import { useNavigate } from "react-router-dom";

function Match({ title, players }) {

    const { updatePlayersList } = useCricket();
    const navigate = useNavigate();

    const handleClick = () => {
        updatePlayersList(players);
        navigate("/detail");
    }

    return (
        <div className="grid grid-cols-2">
            <div >{title}</div>
            <Button primary rounded onClick={handleClick}>PLAY</Button>
        </div>
    )
}

export default Match;