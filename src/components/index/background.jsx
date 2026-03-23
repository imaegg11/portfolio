import { children } from "solid-js";

function Blob(props) {
    return (
        <div class='absolute bg-linear-to-b from-[aquamarine] to-[mediumpurple] rounded-full w-75 h-75 scale-x-200'></div>
    )
}

export default function Background(props) {
    const resolved = children(() => props.children);

    return (
        <div>
            <div>
                <div class='[&>div]:-z-20 [&>div]:opacity-20 [&>div]:animate-[rotate_300s_linear_infinite]'> 
                    {/* Left */}
                    <div class='fixed top-[30%] left-[15%] bg-linear-to-b from-[aquamarine] to-[mediumpurple] rounded-full w-75 h-75 [--r:15deg] [--rot:360deg] [--sX:1.3] [--sY:1.08]'></div>
                    <div class='fixed top-[30%] left-[25%] bg-linear-to-b from-[aquamarine] to-[mediumpurple] rounded-full w-99 h-75 [--r:45deg] [--rot:-360deg] [--sX:1.2] [--sY:1.2]'></div>
                    <div class='fixed top-[30%] left-[10%] bg-linear-to-b from-[aquamarine] to-[mediumpurple] rounded-full w-75 h-75 [--r:90deg] [--rot:360deg] [--sX:1.6] [--sY:1.03]'></div>
                
                    {/* Right */}
                    {/* <div class='fixed bottom-[5%] right-[0%] bg-linear-to-b from-[aquamarine] to-[mediumpurple] rounded-full w-75 h-50 [--r:30deg] [--rot:360deg] [--sX:1.12] [--sY:1.7]'></div>
                    <div class='fixed bottom-[2%] right-[5%] bg-linear-to-b from-[aquamarine] to-[mediumpurple] rounded-full w-75 h-75 [--r:0deg] [--rot:-360deg] [--sX:1.3] [--sY:1.13]'></div> */}
                </div>
                <div class='fixed top-0 left-0 -z-10 w-screen h-screen backdrop-blur-3xl'></div>
            </div>
            {resolved()}
        </div>
    )
}