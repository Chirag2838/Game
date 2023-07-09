import useCricket from "../hooks/use-cricket";
import Match from "./match";

function MatchList() {

    const { matches } = useCricket();

    let renderedMatches = matches.map((match) => {
        return <div className="mt-4" key={match.title}><Match title={match.title} players={match.players} /></div>
    })

    return (
        <div>
            <div className="text-center font-sans bg-slate-400 text-white border-slate-500 py-3">
                MATCHES
            </div>
            <div className="px-5 py-8 font-serif">
                {renderedMatches}
            </div>
        </div>
    )
}

export default MatchList;