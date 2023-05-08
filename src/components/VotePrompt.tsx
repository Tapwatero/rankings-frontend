import React from "react";
import {TypeAnimation} from "react-type-animation";
import {Link} from "react-router-dom";

function VotePrompt() {

    return (
        <Link to={"/analytics"} className={"p-3"}>
            <TypeAnimation
                sequence={[
                    'Current Vote - Funniest Person',
                    1000,
                ]}
                speed={25}
                className={"hover:animate-pulse font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-sky-500 select-none cursor-pointer duration-500 text-2xl text-center font-roboto"}
                repeat={Infinity}>

            </TypeAnimation>
        </Link>
    )

}

export default VotePrompt;
