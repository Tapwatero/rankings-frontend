import React from "react";
import {Area, AreaChart, ResponsiveContainer, Tooltip, YAxis} from "recharts";
import CustomTooltip from "./CustomTooltip";




interface GraphProps {
    data: DataPoint[];
}

export interface DataPoint {
    votes: number;
    time: string;
}

function Graph(props: GraphProps): JSX.Element {


    return (
            <ResponsiveContainer className={"border-4 rounded-md border-slate-700/80"} width="100%" height="50%">
                <AreaChart
                    data={props.data}
                    margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>

                    <Tooltip cursor={false} content={<CustomTooltip/>} position={{x: 0, y: 0}}/>
                    <Area  type="monotone" dataKey="votes" stroke="#5865f2" fill="#5865f2" fillOpacity={0.35}/>
                    <YAxis hide={true} domain={[0, props.data[props.data.length-1] === undefined ? 0 : props.data[props.data.length-1].votes * 1.25]}></YAxis>
                </AreaChart>
            </ResponsiveContainer>
    )

}

export default Graph;
