import React, {useCallback, useEffect, useState} from 'react';
import VoteOption from "./VoteOption";
import axios, {AxiosResponse} from "axios";
import VoteHeader from "./VoteHeader";
import {ClipLoader} from "react-spinners";
import {generateMatchups} from "../Utils";
import RankingContext from "./RankingContext";
import arrayShuffle from "array-shuffle";
import {useParams} from "react-router-dom";


export interface IRanking {
    id: string,
    topic: string,
    entries: string[],
    votes: {[entryName: string]: number}
}

function Ranking(): JSX.Element {
    const [matchups, setMatchups] = useState<string[][]>();
    const [index, setIndex] = useState<number>(0);
    const [topic, setTopic] = useState<string>("");
    const [matchup, setMatchup] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const { id } = useParams();


    const getMatchups = useCallback(() => {
        axios.get(`https://rankings-tv51.onrender.com/rankings/${id}`).then(function (response: AxiosResponse<IRanking>) {
            setMatchups(arrayShuffle(generateMatchups(response.data.entries)));
            setTopic(response.data.topic);
            setIndex(0);

            setLoading(false);
        });
    }, [id]);


    useEffect(() => {
        getMatchups();
    }, [getMatchups]);

    useEffect(() => {
        if (matchups) {
            setMatchup(matchups[index])
        }
    }, [index, matchups]);

    const handleVote = (matchupID: number) => {
        axios.post(`https://rankings-tv51.onrender.com/rankings/${id}/vote`, { entry: matchup[matchupID]});

        if (matchups) {
            setIndex(matchups[index + 1] !== undefined ? index + 1 : index);
        }

        if (matchups) {
            if (index >= (matchups?.length - 5)) {
                getMatchups();
            }
        }



    }




    return (
        loading && id  ? (
            <div className={"h-screen w-screen flex justify-center items-center"}>
                <ClipLoader color={"#6495ED"} size={200}></ClipLoader>
            </div>
        ) : (
            <RankingContext.Provider value={{id: id !== undefined ? id : "", topic: topic}}>
                <div className={"flex flex-col h-screen w-screen justify-center items-center"}>
                    <VoteHeader></VoteHeader>
                        <div
                            className={"divide-white lg:divide-x-2 lg:divide-y-0 divide-y-2 animate-better-fade-in flex flex-col lg:flex-row items-center w-screen h-screen cursor-pointer duration-700"}>
                            <VoteOption id={0} handleVote={handleVote} matchup={matchup}
                                        colour={"bg-rose-500"}></VoteOption>
                            <VoteOption id={1} handleVote={handleVote} matchup={matchup} colour={"bg-sky-500"}></VoteOption>
                        </div>
                </div>
            </RankingContext.Provider>
        )
    );
}

export default Ranking;
