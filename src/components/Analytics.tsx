import React, {Fragment, useCallback, useEffect, useState} from 'react';
import axios, {AxiosResponse} from "axios";
import {ClipLoader} from "react-spinners";
import Leaderboard from "./Leaderboard";
import Graph, {DataPoint} from "./Graph";
import GraphToggle from './GraphToggle';
import VoteCount from "./VoteCount";


export interface IAnalytics {
    quick_status?: { votes: number },
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
            setLeaderboard(response.data)

            axios.get("https://rankings-tv51.onrender.com/rankings/analytics").then(function (response: AxiosResponse<IAnalytics>) {
                setAnalytics(response.data)
                setLoading(false)

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
        }, 1250);

        return () => {
            clearInterval(updateTimer);
        }

    }, [fetchAnalytics]);


    const handleSelection = (option: String) => {
        setGraphPeriod(option);
    }


    return (
        <div className={"w-screen min-h-fit bg-slate-800 overflow-scroll"}>

            <div className={"justify-center items-center w-full h-full flex flex-col lg:flex-row gap-y-12"}>


                {!loading && analytics?.quick_status !== undefined && analytics?.hourly !== undefined && analytics?.daily !== undefined ? (
                        <Fragment>
                            <Leaderboard leaderboard={leaderboard}></Leaderboard>

                            <div
                                className={"mx-16 w-11/12 md:w-7/12 xl:w-9/12 bg-slate-800 h-screen flex justify-center items-center flex-col gap-y-8 text-lg text-white font-['Questrial']"}>
                                <VoteCount count={analytics.quick_status.votes}></VoteCount>
                                <hr className={"bg-white w-full"}></hr>
                                <Graph data={analytics} selectedPeriod={graphPeriod}></Graph>
                                <GraphToggle keys={Object.keys(analytics).slice(1)}
                                             handleSelection={handleSelection}></GraphToggle>
                            </div>

                        </Fragment>
                    ) :
                    <div className={"h-screen flex justify-center items-center"}>
                        <ClipLoader color={"white"} size={150}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default Analytics;
