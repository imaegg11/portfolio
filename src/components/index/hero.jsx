import { createSignal, onCleanup, onMount } from "solid-js"
import Right from "./right";
import Background from "./background";

export function Hero() {
    const [name, setName] = createSignal(`${import.meta.env.PUBLIC_NAME}!`)
    const svg_width = '18'; // Yes, I'm lazy

    let interval;

    let crypto = (text) => {
        clearInterval(interval)

        const abc = "abcdefghijklmnopqrstuvwxyz".split('')
        const symbols = "!@#$%^&*?.,;:".split('')

        let counter = -5;
        const idkWhatToCallThis = Math.floor(32 / text.length)

        interval = setInterval(() => {

            let index = Math.floor(counter / idkWhatToCallThis)
            let newText = text.split('').map((e, i) => {
                let symbol = (e == " " || i <= index) ? e : symbols[Math.floor(Math.random() * abc.length)]
                let letter = (e == " " || i <= index) ? e : abc[Math.floor(Math.random() * abc.length)]

                return symbols.includes(e) ? symbol : letter
            })

            setName(newText)
            counter++

            if (counter > text.length * idkWhatToCallThis) {
                clearInterval(interval);
            }
        }, 20)

    }

    onMount(() => {
        const mouseO = () => crypto(`${import.meta.env.PUBLIC_NAME}!`)

        document.getElementById("name").addEventListener("mouseenter", mouseO)

        onCleanup(() => {
            document.getElementById("name").removeEventListener("mouseenter", mouseO)
        })
    })

    return (
        <Background>
            <div class='h-[calc(100vh-96px)] w-full flex items-center px-40'>
                <div class="w-full">
                    {/* When making a switch to Jetbrain mono, switch the name to just accent-30 with no font change */}
                    <p class='text-6xl mb-2'>Hey, I'm <span id='name' class='font-serif tracking-wide italic'>{name()}</span></p>
                    <p class='text-[18px]'>a student, programmer, and gamer</p>
                    <p class='mt-1 w-60 text-xs opacity-60'>
                        {/* "Better to remain silent and be thought a fool than to speak and remove all doubt." */}
                        "Responsive design are only for those that care about mobile. And unfortunately I don't care."
                    </p>
                    <div class='mt-4 [&>svg]:cursor-pointer text-xs flex items-center opacity-60 gap-px'>
                        <a href='' class='hover:bg-accent-30/30 p-2 rounded-md grid place-items-center transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={svg_width} height={svg_width} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                        </a>
                        <a href='' class='hover:bg-accent-30/30 p-2 rounded-md grid place-items-center transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={svg_width} height={svg_width} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                        </a>
                        <div class="w-px h-4 bg-current m-2"></div>
                        <div class='flex items-center gap-1 m-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={svg_width} height={svg_width} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                            <p>University of Toronto @ Ontario, Canada</p>
                        </div>

                    </div>
                    <p class='text-xs text-gs-50 my-4 ml-8 hover:cursor-pointer underline-animation-container w-fit [&:hover>span:nth-child(2)]:pl-2'>
                        <span class='underline-animation w-fit mr-4'>See More</span> <span class='transition-all'>→</span>
                    </p>
                </div>
                <div>
                    <Right></Right>
                </div>
            </div>
        </Background>
    )
}