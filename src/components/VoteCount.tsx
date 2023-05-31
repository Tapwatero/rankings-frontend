import React from "react";



interface IVoteCountProps {
    count: number,
}

function VoteCount(props: IVoteCountProps): JSX.Element {
    return (
        <h1 className={"bg-slate-700 px-10 py-5 text-2xl text-white mb-16 rounded-xl cursor-pointer hover:opacity-75 duration-500"}>{props.count} Votes</h1>
    )
}

export default VoteCount;
