import React from 'react';


function LandingPage(): JSX.Element {
    return (
        <div className="font-['Questrial'] overflow-scroll flex-col bg-slate-100 h-screen w-screen flex justify-center items-center">
            <div className={"w-full h-1/6 flex-col flex justify-center items-center"}>
                <h1 className={"bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-sky-500 text-5xl md:text-7xl"}>Rankables</h1>
                <h2 className={"text-center w-11/12 md:w-1/2 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-sky-500 text-xl md:text-2xl font-['Questrial']"}>Infallible, Effortless and Performant Rankings</h2>
            </div>

            <div className={"text-center md:h-2/6 gap-8 w-full w-11/12 flex flex-col md:flex-row justify-center items-center"}>

                <div className={"h-1/3 w-6/12 md:h-full md:w-7/25 p-8 justify-center items-center flex flex-col drop-shadow-xl hover:drop-shadow-2xl duration-500 cursor-pointer bg-slate-50 rounded-3xl"}>
                    <h1 className={"p-2 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-sky-500 text-2xl"}>Infallible</h1>
                    <p className={"text-slate-700 text-lg"}>Infallible, Rankables' state of the art algorithm detects spamming and auto-clickers to keep rankings fair.</p>
                </div>

                <div className={"h-1/3 w-6/12 md:h-full md:w-7/25 p-8 justify-center items-center flex flex-col drop-shadow-xl hover:drop-shadow-2xl duration-500 cursor-pointer bg-slate-50 rounded-3xl"}>
                    <h1 className={"p-2 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-sky-500 text-2xl"}>Effortless</h1>
                    <p className={"text-slate-700 text-lg"}>Effortless, Rankables' makes it easy for anyone to setup a ranking - with different formats to suit your specific needs.</p>
                </div>

                <div className={"h-1/3 w-6/12 md:h-full md:w-7/25 p-8 justify-center items-center flex flex-col drop-shadow-xl hover:drop-shadow-2xl duration-500 cursor-pointer bg-slate-50 rounded-3xl"}>
                    <h1 className={"p-2 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-sky-500 text-2xl"}>Performant</h1>
                    <p className={"text-slate-700 text-lg"}>Performant, Rankables' is crafted using Rust and Postgres to ensure a speedy and reliable service.</p>
                </div>

            </div>
        </div>
    )
}

export default LandingPage;
