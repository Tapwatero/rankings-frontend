import React, {Fragment, useCallback, useEffect, useState} from 'react';
import axios, {AxiosResponse} from "axios";
import {ClipLoader} from "react-spinners";
import Leaderboard, {ILeaderboardEntry} from "./Leaderboard";
import Graph, {DataPoint} from "./Graph";
import GraphToggle from './GraphToggle';
import VoteCount from "./VoteCount";
import {useParams} from "react-router-dom";


export interface IAnalytics {
    summary: { total_votes: number, leaderboard: ILeaderboardEntry[]},
    historic_votes: {
        hourly: DataPoint[],
        daily: DataPoint[],
    }
}

function Analytics(): JSX.Element {
    const [leaderboard, setLeaderboard] = useState<ILeaderboardEntry[]>([{entry: "", votes: 0}]);
    const [loading, setLoading] = useState<boolean>(true);
    const [analytics, setAnalytics] = useState<IAnalytics>();
    const [graphPeriod, setGraphPeriod] = useState<String>("hourly");

    const { id } = useParams();


    const fetchAnalytics = useCallback(() => {

            axios.get(`https://rankings-tv51.onrender.com/rankings/${id}/analytics`).then(function (response: AxiosResponse<IAnalytics>) {
                setLeaderboard(response.data.summary?.leaderboard);
                setAnalytics(response.data);
                setLoading(false);
            });

    }, [id]);


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
        <div className={"w-screen min-h-fit bg-slate-800 overflow-scroll lg:overflow-hidden"}>

            <div className={"justify-center items-center w-full h-full flex flex-col lg:flex-row"}>


                {!loading && analytics?.summary !== undefined && analytics?.historic_votes.hourly !== undefined && analytics?.historic_votes.daily !== undefined ? (
                        <Fragment>
                            <Leaderboard leaderboard={leaderboard}></Leaderboard>

                            <div className={"mx-16 w-11/12 md:w-7/12 xl:w-9/12 bg-slate-800 h-screen flex justify-center items-center flex-col gap-y-8 text-lg text-white font-['Questrial']"}>

                                <VoteCount count={analytics.summary.total_votes}></VoteCount>
                                <hr className={"bg-white w-full rounded-full"}></hr>
                                <Graph data={analytics.historic_votes} selectedPeriod={graphPeriod}></Graph>
                                <GraphToggle keys={Object.keys(analytics.historic_votes)} handleSelection={handleSelection}></GraphToggle>
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
