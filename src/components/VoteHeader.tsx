import React from 'react';
import VotePrompt from "./VotePrompt";


function VoteHeader(): JSX.Element {
    return (
        <div className={"font-['Proxima_Nova'] bg-neutral-100 p-1.5 w-full flex items-center justify-center flex-col"}>
            <VotePrompt></VotePrompt>
            {/*<Link to={"/leaderboard"}><h1 className={"font-['Proxima_Nova'] select-none underline duration-700 hover:text-blue-700 text-slate-800 text-2xl"}>View Leaderboard</h1></Link>*/}
        </div>
    )
}

export default VoteHeader;
