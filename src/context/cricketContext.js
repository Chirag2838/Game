import { createContext, useState } from "react";

const CricketContext = createContext();

function Cricket({ children }) {

    let initialMatches = [
        {
            title: "DGD vs NRK",
            players: ["Adithya Nath", "S Arun", "Ajitesh Guruswamy", "Aswin Crist"]
        },
        {
            title: "ESS vs HAM",
            players: ["Simon Harmer", "Sam Cook", "Tom Prest", "James Vince"]
        }
    ]

    const [matches, setMatches] = useState(initialMatches);
    const [selectedPlayersList, setSelectedPlayersList] = useState(initialMatches[0].players)

    const updatePlayersList = (players) => {
        setSelectedPlayersList(players);
    }

    return (
        <CricketContext.Provider value={{ matches, updatePlayersList, selectedPlayersList }}>
            {children}
        </CricketContext.Provider>
    )
}

export { Cricket }
export default CricketContext;