import React, {useEffect, useState} from "react";
import {Area, AreaChart, ResponsiveContainer, Tooltip, YAxis} from "recharts";
import CustomTooltip from "./CustomTooltip";




interface IGraphProps {
    data: {[key: string]: DataPoint[]},
    selectedPeriod: String,
}

export interface DataPoint {
    total_votes: number;
    timestamp: string;
}

function Graph(props: IGraphProps): JSX.Element {
    const [selectedData, setSelectedData] = useState<any>(true);

    useEffect(() => {
        setSelectedData(props.data[props.selectedPeriod as keyof typeof props.data]);
        console.log(selectedData);
        if (selectedData[selectedData.length] !== undefined) {
            console.log(selectedData[selectedData.length-1].total_votes );
        }
    }, [props, selectedData, selectedData.data, setSelectedData]);



    return (
        <ResponsiveContainer className={"h-full bg-slate-700 border-2 rounded-lg border-slate-700/75"} width="100%" height="50%">
            <AreaChart
                data={selectedData}
                margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>

                <Tooltip cursor={false} content={<CustomTooltip/>} position={{x: 0, y: 0}}/>

                <Area  type="monotone" dataKey="total_votes" stroke="#5865f2" fill="#5865f2" fillOpacity={0.35}/>
                <YAxis hide={true} domain={[0, selectedData[selectedData.length-1] === undefined ? 0 : selectedData[selectedData.length-1].total_votes * 1.25]}></YAxis>
            </AreaChart>
        </ResponsiveContainer>
    )

}

export default Graph;
