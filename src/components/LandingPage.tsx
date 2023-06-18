import React from 'react';


function LandingPage(): JSX.Element {
    return (
        <div className="overflow-scroll flex-col bg-slate-100 h-screen w-screen flex justify-center items-center">
            <div className={"w-full h-1/6 flex-col flex justify-center items-center"}>
                <h1 className={"bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-sky-500 text-5xl md:text-7xl font-['Questrial']"}>Rankables</h1>
                <h2 className={"text-center w-11/12 md:w-1/2 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-sky-500 text-xl md:text-2xl font-['Questrial']"}>Infallible, Effortless and Performant</h2>
            </div>

            <div className={"text-center h-5/6 md:h-fit w-11/12 flex md:flex-row flex-col flex gap-6 justify-center items-center"}>

                <div className={"p-3 justify-center items-center flex flex-col hover:drop-shadow-xl duration-500 cursor-pointer rounded-2xl bg-slate-200 h-64 w-72"}>
                    <h1 className={"p-2 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-sky-500 text-2xl"}>Infallible</h1>
                    <p className={"w-11/12 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-sky-500 text-lg"}>Infallible, Rankables' state of the art algorithm - detects spamming and auto-clickers to keep rankings fair.</p>
                </div>

                <div className={"p-3 justify-center items-center flex flex-col hover:drop-shadow-xl duration-500 cursor-pointer rounded-2xl bg-slate-200 h-64 w-72"}>
                    <h1 className={"p-2 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-sky-500 text-2xl"}>Effortless</h1>
                    <p className={"w-11/12 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-sky-500 text-lg"}>Effortless, Rankables' makes it easy for anyone to setup a ranking - with different formats to suit your specific needs.</p>
                </div>

                <div className={"p-3 justify-center items-center flex flex-col hover:drop-shadow-xl duration-500 cursor-pointer rounded-2xl bg-slate-200 h-64 w-72"}>
                    <h1 className={"p-2 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-sky-500 text-2xl"}>Performant</h1>
                    <p className={"w-11/12 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-sky-500 text-lg"}>Performant, Rankables' is crafted using Rust and Postgres to ensure a speedy and reliable service.</p>
                </div>

            </div>
        </div>
    )
}

export default LandingPage;
