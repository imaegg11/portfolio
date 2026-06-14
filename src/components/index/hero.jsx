import { createSignal, onCleanup, onMount, useContext } from "solid-js"
import site from "~/config/site";

import Right from "./right";
import Background from "./background";

import { crypto } from "~/utils/crypto";
import Logo from "~/utils/logo";
import { IconLink } from "~/utils/link";
import { SidebarContext } from "~/utils/context";


export function Hero() {
    const { setOpen } = useContext(SidebarContext)

    const [name, setName] = createSignal(`${site.author.name}!`)

    let interval;

    onMount(() => {
        const mouseOver = () => crypto(`${site.author.name}!`, interval, setName)

        document.getElementById("name").addEventListener("mouseenter", mouseOver)

        onCleanup(() => {
            document.getElementById("name").removeEventListener("mouseenter", mouseOver)
        })
    })

    return (
        <Background>
            <div class='h-[calc(100vh-96px)] w-full flex items-center px-40'>
                <div class="w-full">
                    {/* When making a switch to Jetbrain mono, switch the name to just accent-30 with no font change */}
                    <p class='text-6xl mb-2'>Hey, I'm <span id='name' class='font-serif tracking-wide italic'>{name()}</span></p>
                    <p class='text-[18px]'>{site.author.shortBio}</p>
                    <p class='mt-1 w-60 text-xs opacity-60'>
                        {/* "Better to remain silent and be thought a fool than to speak and remove all doubt." */}
                        "Responsive design are only for those that care about mobile. And unfortunately I don't care."
                    </p>
                    <div class='mt-4 text-xs flex items-center opacity-60 gap-px'>
                        
                        <IconLink href={site.social.github} external={true}>
                            {Logo.github()}
                        </IconLink>

                        <IconLink href={site.social.email} external={true}>
                            {Logo.email()}
                        </IconLink>

                        <div class="w-px h-4 bg-current m-2"></div>
                        <div class='flex items-center gap-1 m-2'>
                            {Logo.location()}
                            <p>{site.author.organization} @ {site.author.location}</p>
                        </div>

                    </div>

                    <p onClick={() => setOpen(true)} class='text-xs text-gs-50 my-4 ml-8 hover:cursor-pointer underline-animation-container w-fit [&:hover>span:nth-child(2)]:pl-2'>
                        <span class='underline-animation w-fit mr-2'>See More</span> <span class='transition-all'>→</span>
                    </p>
                </div>
                <div>
                    <Right></Right>
                </div>
            </div>
        </Background>
    )
}