import React from "react";




export interface ILeaderboardEntry {
    entry: string,
    votes: number,
}

interface LeaderboardProps {
    leaderboard: ILeaderboardEntry[];
}

function Leaderboard(props: LeaderboardProps): JSX.Element {

    let data = props.leaderboard.map((leaderboardEntry: ILeaderboardEntry, index: number) =>
        <div key={index} className={`select-none cursor-pointer hover:bg-slate-800 grid grid-cols-3 duration-300 text-sm`}>
            <h1 className={"flex items-center justify-center"}>{index+1}</h1>
            <h1 className={"flex items-center justify-center"}>{leaderboardEntry.entry}</h1>
            <h1 className={"flex items-center justify-center"}>{leaderboardEntry.votes}</h1>
        </div>
)

    return (
        <div className={"min-h-screen w-full border-slate-400 border-b-2 lg:border-r-2 lg:border-b-0 divide-y divide-slate-400 text-center grid grid-rows-10 bg-slate-700 text-white text-3xl font-['Proxima_Nova']"}>
            {data}
        </div>
    )

}


export default Leaderboard;
