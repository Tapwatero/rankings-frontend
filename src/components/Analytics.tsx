import React, {useCallback, useEffect, useState} from 'react';
import axios, {AxiosResponse} from "axios";
import {ClipLoader} from "react-spinners";
import Leaderboard from "./Leaderboard";
import DailyGraph from "./DailyGraph";


function Analytics(): JSX.Element {
    const [totalVotes, setTotalVotes] = useState<string>("0");
    const [leaderboard, setLeaderboard] = useState<string[][]>([[""]]);
    const [loading, setLoading] = useState<boolean>(true);




    const fetchLeaderboard = useCallback(() => {
        axios.get("https://rankings-tv51.onrender.com/rankings/leaderboard").then(function (response: AxiosResponse<string[][]>) {
            setTotalVotes(response.data[0][0])
            setLeaderboard(response.data.slice(1))
            setTimeout(() => {
                console.log(totalVotes);
                setLoading(false);
            }, 325);
        });
    }, [totalVotes]);



    useEffect(() => {
        if (loading) {
            fetchLeaderboard();
        }
    }, [loading, leaderboard, fetchLeaderboard]);


    useEffect(() => {

        let updateTimer = setInterval(() => {
            fetchLeaderboard();
        }, 2500);

        return () => {
            clearInterval(updateTimer);
        }

    }, [fetchLeaderboard]);


    return (
        !loading ? (

            <div className={"w-screen h-screen bg-slate-800"}>

                <div className={"justify-center items-center w-full h-screen flex flex-row"}>

                    <Leaderboard leaderboard={leaderboard}></Leaderboard>

                    <div
                        className={"p-4 bg-slate-600 h-full w-full flex justify-center items-center flex-col gap-y-4"}>


                        <DailyGraph></DailyGraph>
                        <DailyGraph></DailyGraph>

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
