import React, {Fragment, useCallback, useEffect, useState} from 'react';
import axios, {AxiosResponse} from "axios";
import {ClipLoader} from "react-spinners";
import Leaderboard from "./Leaderboard";
import Graph, {DataPoint} from "./Graph";
import GraphToggle from './GraphToggle';
import VoteCount from "./VoteCount";
import Vote from "../Vote";


export interface IAnalytics {
    hourly: DataPoint[],
    daily: DataPoint[],
}

function Analytics(): JSX.Element {
    const [leaderboard, setLeaderboard] = useState<string[][]>([[""]]);
    const [loading, setLoading] = useState<boolean>(true);
    const [analytics, setAnalytics] = useState<IAnalytics>();
    const [graphPeriod, setGraphPeriod] = useState<String>("hourly");


    const fetchAnalytics = useCallback(() => {
        axios.get("https://rankings-tv51.onrender.com/rankings/leaderboard").then(function (response: AxiosResponse<string[][]>) {
            setLeaderboard(response.data.slice(1))

            axios.get("https://rankings-tv51.onrender.com/rankings/analytics").then(function (response: AxiosResponse<IAnalytics>) {
                setAnalytics(response.data)

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


    const handleSelection = (option: String) => {
        setGraphPeriod(option);
    }

    return (
        !loading ? (

            <div className={"w-screen min-h-fit bg-slate-800 overflow-scroll"}>

                <div className={"justify-center items-center w-full h-full flex flex-col lg:flex-row gap-y-12"}>


                    <Leaderboard leaderboard={leaderboard}></Leaderboard>


                    {!(analytics?.hourly === undefined && analytics?.daily === undefined) ? (
                        <div
                            className={"mx-16 w-11/12 md:w-7/12 xl:w-9/12 bg-slate-800 h-screen flex justify-center items-center flex-col gap-y-8 text-lg text-white font-['Questrial']"}>
                            <VoteCount count={analytics.hourly[analytics.hourly.length-1].votes}></VoteCount>
                            <GraphToggle keys={Object.keys(analytics)} handleSelection={handleSelection}></GraphToggle>
                            <Graph data={analytics} selectedPeriod={graphPeriod}></Graph>
                        </div>
                    ) : <ClipLoader color={"white"} size={"50"}/>}
                </div>
            </div>
        ) : (
            <div className={"h-screen w-screen flex justify-center items-center"}>
                <ClipLoader color={"#6495ED"} size={200}></ClipLoader>
            </div>
        ));
}
export default Analytics;
