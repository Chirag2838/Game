import Button from "./button";
import useCricket from "../hooks/use-cricket";

function Match({ title, players }) {

    const { updatePlayersList } = useCricket();

    const handleClick = () => {
        updatePlayersList(players);
    }

    return (
        <div className="grid grid-cols-2">
            <div >{title}</div>
            <Button primary rounded to="/detail" onClick={handleClick}>PLAY</Button>
        </div>
    )
}

export default Match;