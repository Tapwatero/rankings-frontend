import React, {useEffect} from "react";
import {useCountUp} from "react-countup";


interface IVoteCountProps {
    count: number,
}


function VoteCount(props: IVoteCountProps): JSX.Element {
    const countUpRef = React.useRef(null);


    const {update} = useCountUp({
        ref: countUpRef,
        start: 0,
        end: 0,
        delay: 0,
        duration: 0.5,
    });


    useEffect(() => {
        update(props.count);
    }, [props.count, update]);

    return (
        <div
            className={"select-none gap-1 flex flex-row text-2xl bg-slate-700 px-8 py-3 rounded-xl hover:opacity-75 duration-500 cursor-pointer"}>
            <span>Votes:</span>
            <span ref={countUpRef}/>
        </div>
    )
}

export default VoteCount;
