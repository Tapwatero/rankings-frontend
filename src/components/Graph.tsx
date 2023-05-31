import React, {Fragment} from "react";
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import CustomTooltip from "./CustomTooltip";
import {IAnalytics} from "./Analytics";




interface IGraphProps {
    data: IAnalytics,
    selectedPeriod: String,
}

export interface DataPoint {
    votes: number;
    time: string;
}

function Graph(props: IGraphProps): JSX.Element {


    const selectedData = props.data[props.selectedPeriod as keyof typeof props.data]


    return (
        <ResponsiveContainer className={"h-full bg-slate-700 border-2 rounded-lg border-slate-700/75"} width="100%" height="50%">
            <AreaChart
                data={selectedData}
                margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>

                <Tooltip cursor={false} content={<CustomTooltip/>} position={{x: 0, y: 0}}/>

                <Area  type="monotone" dataKey="votes" stroke="#5865f2" fill="#5865f2" fillOpacity={0.35}/>
                <YAxis hide={true} domain={[0, selectedData[selectedData.length-1] === undefined ? 0 : selectedData[selectedData.length-1].votes * 1.25]}></YAxis>
            </AreaChart>
        </ResponsiveContainer>
    )

}

export default Graph;
