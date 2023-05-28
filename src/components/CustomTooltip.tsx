import React from "react"
import PropTypes from "prop-types";
import dayjs from "dayjs";

const CustomTooltip = ({active, payload}: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="tooltip m-0 p-3 bg-slate-500 rounded-br-md flex-col flex justify-center">

                <p className="text-center text-white label font-['Questrial']">{`${dayjs(payload[0].payload?.timestamp).format("HH:mm")}`}</p>
                <p className="text-center text-white label font-['Questrial']">{`${payload[0].payload?.votes} Votes`}</p>

            </div>
        )
    }

    return null
}

CustomTooltip.propTypes = {
    type: PropTypes.string,
    payload: PropTypes.array,
    label: PropTypes.number,
}

export default CustomTooltip