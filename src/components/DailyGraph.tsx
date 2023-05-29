import React, {useEffect, useState} from "react";
import {Area, AreaChart, ResponsiveContainer, Tooltip, YAxis} from "recharts";
import CustomTooltip from "./CustomTooltip";
import axios, {AxiosResponse} from "axios";


interface DataPoint {
    votes: number;
    time: string;
}

function DailyGraph(): JSX.Element {
    const [analyticData, setAnalyticData] = useState<DataPoint[]>([]);

    useEffect(() => {
            axios.get("https://rankings-tv51.onrender.com/rankings/analytics").then(function (response: AxiosResponse<DataPoint[]>) {
                setAnalyticData(response.data);
            });
    }, []);




    return (
            <ResponsiveContainer className={"border-4 rounded-md border-slate-500"} width="100%" height="50%">
                <AreaChart
                    data={analyticData}
                    margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>

                    <Tooltip cursor={false} content={<CustomTooltip/>} position={{x: 0, y: 0}}/>
                    <Area type="monotone" dataKey="votes" stroke="#5865f2" fill="#5865f2"/>
                    <YAxis hide={true} domain={[0, analyticData[analyticData.length-1] === undefined ? 0 : analyticData[analyticData.length-1].votes * 1.25]}></YAxis>
                </AreaChart>
            </ResponsiveContainer>
    )

}

export default DailyGraph;
