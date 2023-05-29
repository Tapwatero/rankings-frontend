import React, {Fragment, useCallback, useEffect, useState} from 'react';
import axios, {AxiosResponse} from "axios";
import {ClipLoader} from "react-spinners";
import Leaderboard from "./Leaderboard";
import Graph, {DataPoint} from "./Graph";


interface IAnalytics {
    hourly: DataPoint[],
    daily: DataPoint[],
}

function Analytics(): JSX.Element {
    const [leaderboard, setLeaderboard] = useState<string[][]>([[""]]);
    const [loading, setLoading] = useState<boolean>(true);
    const [analytics, setAnalyticData] = useState<IAnalytics>();


    const fetchAnalytics = useCallback(() => {
        axios.get("https://rankings-tv51.onrender.com/rankings/leaderboard").then(function (response: AxiosResponse<string[][]>) {
            setLeaderboard(response.data.slice(1))

            axios.get("http://localhost:8080/rankings/analytics").then(function (response: AxiosResponse<IAnalytics>) {
                setAnalyticData(response.data)

                setTimeout(() => {
                    setLoading(false)
                }, 325);

            });

        });
    }, []);


    // Get analytics upon loading
    useEffect(() => {
        fetchAnalytics();
    }, [fetchAnalytics]);


    useEffect(() => {

        let updateTimer = setInterval(() => {
            fetchAnalytics();
        }, 2500);

        return () => {
            clearInterval(updateTimer);
        }

    }, [fetchAnalytics]);


    return (
        !loading ? (

            <div className={"w-screen h-screen bg-slate-800"}>

                <div className={"justify-center items-center w-full h-screen flex flex-row"}>


                    <Leaderboard leaderboard={leaderboard}></Leaderboard>


                    <div
                        className={"p-4 bg-slate-600 h-full w-full flex justify-center items-center flex-col gap-y-4 text-lg text-white font-['Questrial']"}>

                        {!(analytics?.hourly === undefined && analytics?.daily === undefined) ? (
                            <Fragment>
                                <h1>Hourly</h1>

                                <Graph data={analytics?.hourly}></Graph>
                                <h1>Daily</h1>
                                <Graph data={analytics?.daily}></Graph>
                            </Fragment>
                        ) : <ClipLoader color={"white"} size={"50"}/>}
                    </div>
                </div>
            </div>


        ) : (
            <div className={"h-screen w-screen flex justify-center items-center"}>
                <ClipLoader color={"#6495ED"} size={200}></ClipLoader>
            </div>
        )

    )
}

export default Analytics;
