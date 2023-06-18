import React from 'react';
import VotePrompt from "./VotePrompt";






function VoteHeader(): JSX.Element {
    return (
        <div className={"font-['Proxima_Nova'] bg-neutral-100 p-1.5 w-full flex items-center justify-center flex-col"}>
            <VotePrompt></VotePrompt>
        </div>
    )
}

export default VoteHeader;
