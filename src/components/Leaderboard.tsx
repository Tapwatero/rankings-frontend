import React, {Fragment} from "react";

interface LeaderboardProps {
    leaderboard: string[][];
}

function Leaderboard(props: LeaderboardProps): JSX.Element {

    const decorators: { [index: number]: string } = {
        0: "bg-gradient-to-r from-yellow-400 to-amber-400",
        1: "bg-gradient-to-r from-gray-300 to-gray-400",
        2: "bg-gradient-to-r from-orange-300 to-amber-500"
    }

    let data = props.leaderboard.map((leaderboardPosition: string[], index: number) =>
        <div key={index} className={`hover:bg-slate-600 grid grid-cols-3 duration-300`}>
            <h1 className={"flex items-center justify-center text-xs"}>{index+1}</h1>
            <h1 className={"flex items-center justify-center text-xs"}>{leaderboardPosition[0]}</h1>
            <h1 className={"flex items-center justify-center text-xs"}>{leaderboardPosition[1]}</h1>
        </div>
)

    return (
        <div className={"border-slate-400 border-r / divide-y divide-slate-500 w-full h-full text-center grid grid-rows-10  bg-slate-700 text-white text-3xl font-['Proxima_Nova']"}>
            {data}
        </div>
    )

}


export default Leaderboard;
