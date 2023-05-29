import React, {useEffect, useState} from "react";
import {ArrowClockwise, ExclamationOctagon} from "react-bootstrap-icons";

interface SkipButtonProps {
    handleSkip: () => void;
}

function SkipButton(props: SkipButtonProps) {
    const [isSkipping, setSkipping] = useState<boolean>(false);
    const [isCooldownActive, setCooldownActive] = useState<boolean>(false);

    useEffect(() => {
       console.log(isSkipping);
    });

    const handleClick = () => {
        if (isSkipping || isCooldownActive) {
            return;
        }


        setSkipping(true);

        setTimeout(() => {
            setSkipping(false);
            setCooldownActive(true)
            props.handleSkip();
        }, 750)


        setTimeout(() => {
            setCooldownActive(false);
        }, 5000);
    }

    return (
        <div onClick={handleClick} className={"z-10 relative"}>
            <div
                className={`${isCooldownActive ? 'cursor-not-allowed' : 'cursor-pointer'} border-white border-2 p-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-400 duration-500 text-center select-none rounded-full hover:bg-indigo-500`}>
                {isCooldownActive ? (
                    <ExclamationOctagon className={"duration-500 transition-opacity animate-pulse animate-better-fade-in"}
                               fill={"white"} size={"40"}></ExclamationOctagon>
                ) : (
                    <ArrowClockwise
                        className={`ease-in-out ${isSkipping ? ' animate-better-spin' : 'animate-better-fade-in'}`}
                        fill={"white"} size={"40"}></ArrowClockwise>)
                }
            </div>
        </div>
    )

}

export default SkipButton;
