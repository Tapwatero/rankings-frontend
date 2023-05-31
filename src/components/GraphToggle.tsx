import React, {useState} from "react";



interface IGraphToggleProps {
    keys: String[],
    handleSelection: (option: String) => void,
}


function GraphToggle(props: IGraphToggleProps): JSX.Element {
    const [selected, setSelected] = useState<String>(props.keys[0]);

    const handleClick = (key: String) => {
        setSelected(key);
        props.handleSelection(key);
    }


    let options = props.keys.map((key) => (
        <div onClick={() => handleClick(key)} key={key + ""} className={`${selected === key ? 'bg-blue-600' : 'bg-slate-600'} select-none hover:opacity-75 border-none capitalize duration-1000 rounded-md cursor-pointer px-4 py-1 flex justify-center items-center`}>{key}</div>
    ));

    return (
        <div className={"flex flex-row gap-4 bg-slate-700 p-4 rounded-xl"}>
            {options}
        </div>
    )
}

export default GraphToggle;
