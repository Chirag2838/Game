import useCricket from "../hooks/use-cricket";
import Button from "./button";
import { useNavigate } from "react-router-dom";

function MatchDetails() {

    const { selectedPlayersList } = useCricket();

    let renderedPlayers = selectedPlayersList.map((player) => {
        return <option key={player} value={player}>{player}</option>
    })

    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div className="px-5 py-5">
            <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SELECT PLAYER</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {renderedPlayers}
                </select>
            </div>
            <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1000₹" required></input>
            </div>
            <div className="mb-2"><Button primary rounded onClick={handleClick}>Place Bid</Button></div>
        </div>
    )
}

export default MatchDetails;