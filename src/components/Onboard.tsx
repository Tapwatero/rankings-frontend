import React, {Fragment, useState} from "react";
import Ripples from "react-ripples";
import {EnvelopeFill, EyeFill, EyeSlashFill, KeyFill} from "react-bootstrap-icons";


function Onboard(): JSX.Element {
    const [isPasswordShown, setPasswordShown] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");

    return (
        <div className={"bg-slate-50 h-screen w-screen flex justify-center items-center flex-col"}>
            <div className={"font-['poppins'] cursor-pointer drop-shadow-xl hover:drop-shadow-2xl duration-300 rounded-xl bg-white h-full md:h-2/3 w-full md:w-5/12 lg:w-3/12  flex justify-center items-center flex-col gap-16"}>

                <div className={"flex justify-center items-center flex-col gap-4 w-full"}>
                    <div className={"group flex flex-row gap-2 items-center w-full flex justify-center items-center"}>
                        <EnvelopeFill className={"fill-slate-500 group-hover:m-0.5 duration-300"}></EnvelopeFill>
                        <input type={"email"} placeholder={"johndoe@gmail.com"} className={"bg-transparent border-b-2 border-b-black/20 outline-none w-4/6 h-12 duration-300 px-4 py-6"}></input>
                    </div>

                    <div className={"relative gap-2 items-center w-full flex justify-center items-center"}>
                        <KeyFill className={"fill-slate-500 group-hover:m-0.5 duration-300"}></KeyFill>
                        <input onChange={(e) => setPassword(e.target.value)} type={isPasswordShown ? "text" : "password"} placeholder={"••••••••••"} className={"bg-transparent border-b-2 border-b-black/20 outline-none w-4/6 h-12 duration-300 px-4 py-6"}></input>

                        {password.length > 0 ? (
                            <Fragment>
                                {isPasswordShown ? (
                                    <Fragment>
                                        <EyeFill onClick={() => setPasswordShown(!isPasswordShown)} className={"fill-slate-800 absolute top-1/2 -translate-y-1/2 right-35/2"}></EyeFill>
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <EyeSlashFill onClick={() => setPasswordShown(!isPasswordShown)} className={"fill-slate-800 absolute top-1/2 -translate-y-1/2 right-35/2"}></EyeSlashFill>
                                    </Fragment>
                                )}
                            </Fragment>
                        ) : <></>}


                    </div>


                </div>

                <div className={"drop-shadow-xl font-normal rounded-r-full rounded-l-full flex flex-row divide-x-2 w-10/12 opacity-90"}>
                    <Ripples className={"tracking-[0.015em] w-1/2 bg-rose-500/90 hover:bg-rose-500/60 duration-300 flex items-center justify-center text-center text-md md:text-lg text-slate-50 py-4 duration-150 rounded-l-full"}>
                        Register
                    </Ripples>
                    <Ripples className={"tracking-[0.015em] w-1/2 bg-blue-500/90 hover:bg-blue-500/60 duration-300 flex items-center justify-center text-md md:text-lg text-slate-50 py-4 duration-150 rounded-r-full"}>
                        Login
                    </Ripples>
                </div>

            </div>

        </div>

    )
}

export default Onboard;
